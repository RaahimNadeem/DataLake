import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!);

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
    const records = await base('Job Listings').select({
      filterByFormula: `AND({Active} = 1, {Language} = '${language}')`,
      sort: [{ field: 'Title', direction: 'asc' }]
    }).firstPage();

    return records.map(record => ({
      id: record.id,
      title: record.get('Title') as string || '',
      description: record.get('Description') as string || '',
      requirements: record.get('Requirements') as string || '',
      jobType: record.get('Job Type') as string || '',
      team: record.get('Team') as string || '',
      active: record.get('Active') as boolean || false,
      language: record.get('Language') as string || 'English'
    }));
  } catch (error) {
    console.error('Error fetching jobs from Airtable:', error);
    return [];
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