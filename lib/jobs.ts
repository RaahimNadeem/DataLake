import jobsData from '../data/jobs.json';

export interface Job {
  id: string;
  title: string;
  type: string;
  team: string;
  description: string;
  requirements: string[];
  isActive: boolean;
}

// Function to fetch jobs from Airtable API
export async function getJobsFromAPI(language: string = 'English'): Promise<Job[]> {
  try {
    const response = await fetch(`/api/jobs?language=${language}`);
    const data = await response.json();
    return data.jobs || [];
  } catch (error) {
    console.error('Error fetching jobs from API:', error);
    // Fallback to local data
    return getJobsFromLocal();
  }
}

// Fallback to local JSON data
export function getJobsFromLocal(): Job[] {
  return jobsData.jobs.filter(job => job.isActive);
}

// Keep existing function for backward compatibility
export function getJobs(): Job[] {
  return getJobsFromLocal();
}

export function getJobsByTeam(team: string): Job[] {
  return getJobs().filter(job => job.team === team);
}

export function getUniqueTeams(): string[] {
  const teams = getJobs().map(job => job.team);
  return [...new Set(teams)];
} 