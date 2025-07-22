// Simple in-memory data processing logs (for production, use a proper database)
let dataLogs = [];

const LOG_RETENTION_DAYS = 30; // Keep logs for 30 days

// Clean old logs
function cleanOldLogs() {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - LOG_RETENTION_DAYS);
  
  dataLogs = dataLogs.filter(log => new Date(log.timestamp) > cutoffDate);
}

// Log data processing activity
function logDataActivity(activity) {
  const logEntry = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    activity: activity.type,
    description: activity.description,
    dataType: activity.dataType || 'N/A',
    legalBasis: activity.legalBasis || 'N/A',
    userAgent: activity.userAgent || 'N/A',
    ipAddress: activity.ipAddress || 'N/A',
    consent: activity.consent || false,
    ...activity
  };
  
  dataLogs.push(logEntry);
  
  // Clean old logs periodically
  if (dataLogs.length % 10 === 0) {
    cleanOldLogs();
  }
  
  return logEntry;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { type, description, dataType, legalBasis, consent } = req.body;
      
      if (!type || !description) {
        return res.status(400).json({ 
          error: 'Missing required fields: type and description' 
        });
      }

      const logEntry = logDataActivity({
        type,
        description,
        dataType,
        legalBasis,
        consent,
        userAgent: req.headers['user-agent'],
        ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
      });

      res.status(200).json({ 
        success: true, 
        logId: logEntry.id,
        message: 'Data processing activity logged successfully' 
      });
    } catch (error) {
      console.error('Error logging data activity:', error);
      res.status(500).json({ 
        error: 'Failed to log data processing activity' 
      });
    }
  } else if (req.method === 'GET') {
    try {
      const { limit = 100, offset = 0, activity } = req.query;
      
      let filteredLogs = [...dataLogs];
      
      // Filter by activity type if specified
      if (activity) {
        filteredLogs = filteredLogs.filter(log => log.activity === activity);
      }
      
      // Sort by timestamp (newest first)
      filteredLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Apply pagination
      const paginatedLogs = filteredLogs.slice(
        parseInt(offset), 
        parseInt(offset) + parseInt(limit)
      );
      
      res.status(200).json({
        logs: paginatedLogs,
        total: filteredLogs.length,
        limit: parseInt(limit),
        offset: parseInt(offset),
        retentionDays: LOG_RETENTION_DAYS
      });
    } catch (error) {
      console.error('Error retrieving data logs:', error);
      res.status(500).json({ 
        error: 'Failed to retrieve data processing logs' 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
} 