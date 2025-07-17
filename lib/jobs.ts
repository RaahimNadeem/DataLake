import jobsData from '../data/jobs.json';

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  team: string;
  description: string;
  requirements: string[];
  isActive: boolean;
  link: string;
}

export function getJobs(): Job[] {
  return jobsData.jobs.filter(job => job.isActive);
}

export function getJobsByTeam(team: string): Job[] {
  return getJobs().filter(job => job.team === team);
}

export function getJobsByLocation(location: string): Job[] {
  return getJobs().filter(job => job.location === location);
}

export function getUniqueTeams(): string[] {
  const teams = getJobs().map(job => job.team);
  return [...new Set(teams)];
}

export function getUniqueLocations(): string[] {
  const locations = getJobs().map(job => job.location);
  return [...new Set(locations)];
} 