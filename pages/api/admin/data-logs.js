import { getJobsFromAirtable } from '../../../lib/airtable';

// Simple admin authentication (for production, use proper authentication)
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'admin-key-2025';

export default async function handler(req, res) {
  // Basic authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${ADMIN_API_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { limit = 50, offset = 0, activity, format = 'json' } = req.query;

    // Fetch data logs
    const logsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/data-logs?limit=${limit}&offset=${offset}${activity ? `&activity=${activity}` : ''}`);
    
    if (!logsResponse.ok) {
      throw new Error('Failed to fetch data logs');
    }

    const logsData = await logsResponse.json();

    // Get Airtable status
    let airtableStatus = 'Unknown';
    try {
      const airtableResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/airtable-status`);
      if (airtableResponse.ok) {
        const airtableData = await airtableResponse.json();
        airtableStatus = airtableData.status;
      }
    } catch (error) {
      console.error('Failed to fetch Airtable status:', error);
    }

    // Prepare summary
    const summary = {
      totalLogs: logsData.total,
      retentionDays: logsData.retentionDays,
      airtableStatus,
      activities: logsData.logs.reduce((acc, log) => {
        acc[log.activity] = (acc[log.activity] || 0) + 1;
        return acc;
      }, {}),
      consentStats: logsData.logs.reduce((acc, log) => {
        if (log.consent !== undefined) {
          acc[log.consent ? 'granted' : 'denied'] = (acc[log.consent ? 'granted' : 'denied'] || 0) + 1;
        }
        return acc;
      }, {}),
      legalBasisStats: logsData.logs.reduce((acc, log) => {
        acc[log.legalBasis] = (acc[log.legalBasis] || 0) + 1;
        return acc;
      }, {})
    };

    if (format === 'csv') {
      // Return CSV format
      const csvHeaders = 'Timestamp,Activity,Description,DataType,LegalBasis,Consent,IPAddress,UserAgent\n';
      const csvData = logsData.logs.map(log => 
        `"${log.timestamp}","${log.activity}","${log.description}","${log.dataType}","${log.legalBasis}","${log.consent}","${log.ipAddress}","${log.userAgent}"`
      ).join('\n');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="data-processing-logs.csv"');
      return res.status(200).send(csvHeaders + csvData);
    }

    // Return JSON format
    res.status(200).json({
      summary,
      logs: logsData.logs,
      pagination: {
        total: logsData.total,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: parseInt(offset) + parseInt(limit) < logsData.total
      },
      exportUrl: `${req.url}${req.url.includes('?') ? '&' : '?'}format=csv`
    });

  } catch (error) {
    console.error('Error in admin data logs:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve admin data logs',
      message: error.message 
    });
  }
} 