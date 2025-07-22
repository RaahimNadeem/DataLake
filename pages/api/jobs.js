import { getJobsFromAirtable } from '../../lib/airtable';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { language = 'English' } = req.query;
    
    // Get jobs from Airtable
    const jobs = await getJobsFromAirtable(language);
    
    // Convert to the format your frontend expects
    const formattedJobs = jobs.map(job => ({
      id: job.id,
      title: job.title,
      type: job.jobType,
      team: job.team,
      description: job.description,
      requirements: job.requirements.split('\n').filter(req => req.trim()), // Convert text to array
      isActive: job.active
    }));

    res.status(200).json({
      jobs: formattedJobs,
      total: formattedJobs.length
    });
  } catch (error) {
    console.error('Error in jobs API:', error);
    res.status(500).json({ 
      message: 'Error fetching jobs',
      error: error.message 
    });
  }
} 