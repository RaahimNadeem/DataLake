import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!);

// Very conservative rate limiting for free plan
let requestCount = 0;
let lastResetTime = Date.now();
const RATE_LIMIT_PER_MINUTE = 2; // Very conservative: max 2 requests per minute
const RESET_INTERVAL = 60 * 1000; // 1 minute

function checkRateLimit(): boolean {
  const now = Date.now();
  
  // Reset counter if a minute has passed
  if (now - lastResetTime > RESET_INTERVAL) {
    requestCount = 0;
    lastResetTime = now;
  }
  
  // Check if we're over the limit
  if (requestCount >= RATE_LIMIT_PER_MINUTE) {
    console.warn('Airtable rate limit reached (2 requests/minute), waiting...');
    return false;
  }
  
  requestCount++;
  return true;
}

// Log data processing activity
const logDataActivity = async (activity: {
  type: string;
  description: string;
  dataType?: string;
  legalBasis?: string;
  consent?: boolean;
}) => {
  try {
    await fetch('/api/data-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    });
  } catch (error) {
    console.error('Failed to log data activity:', error);
  }
};

export interface AirtableJob {
  id: string;
  title: string;
  description: string;
  requirements: string;
  jobType: string;
  team: string;
  active: boolean;
  language: string;
}

export async function getJobsFromAirtable(language: string = 'English'): Promise<AirtableJob[]> {
  try {
    // Check rate limit
    if (!checkRateLimit()) {
      throw new Error('Rate limit exceeded (2 requests/minute). Please try again later.');
    }

    const records = await base('Job Listings').select({
      filterByFormula: `AND({Active} = 1, {Language} = '${language}')`,
      sort: [{ field: 'Title', direction: 'asc' }]
    }).firstPage();

    const jobs = records.map(record => ({
      id: record.id,
      title: record.get('Title') as string || '',
      description: record.get('Description') as string || '',
      requirements: record.get('Requirements') as string || '',
      jobType: record.get('Job Type') as string || '',
      team: record.get('Team') as string || '',
      active: record.get('Active') as boolean || false,
      language: record.get('Language') as string || 'English'
    }));

    // Log data processing activity
    await logDataActivity({
      type: 'JOB_LISTINGS_FETCH',
      description: `Fetched ${jobs.length} job listings for language: ${language}`,
      dataType: 'Job listings',
      legalBasis: 'Legitimate interest (service provision)',
      consent: false
    });

    return jobs;
  } catch (error: any) {
    console.error('Error fetching jobs from Airtable:', error);
    
    // Log error
    await logDataActivity({
      type: 'JOB_LISTINGS_ERROR',
      description: `Error fetching job listings: ${error.message}`,
      dataType: 'Job listings',
      legalBasis: 'Legitimate interest (service provision)',
      consent: false
    });
    
    // Handle specific Airtable errors
    if (error.statusCode === 429) {
      throw new Error('Airtable rate limit exceeded. Please try again later.');
    } else if (error.statusCode === 403) {
      throw new Error('Airtable API key is invalid or expired.');
    } else if (error.statusCode === 404) {
      throw new Error('Airtable base or table not found.');
    }
    
    throw new Error('Failed to fetch jobs from Airtable.');
  }
}

export async function getUniqueTeamsFromAirtable(language: string = 'English'): Promise<string[]> {
  try {
    const jobs = await getJobsFromAirtable(language);
    const teams = jobs.map(job => job.team).filter(Boolean);
    return [...new Set(teams)];
  } catch (error) {
    console.error('Error fetching teams from Airtable:', error);
    return [];
  }
}

export async function getUniqueJobTypesFromAirtable(language: string = 'English'): Promise<string[]> {
  try {
    const jobs = await getJobsFromAirtable(language);
    const types = jobs.map(job => job.jobType).filter(Boolean);
    return [...new Set(types)];
  } catch (error) {
    console.error('Error fetching job types from Airtable:', error);
    return [];
  }
} 