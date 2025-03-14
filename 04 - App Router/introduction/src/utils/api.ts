// Utility functions for API calls
import { JobsApiResponse, Job } from '@/types';

export async function getJobs(): Promise<JobsApiResponse> {
  try {
    const response = await fetch(
      'https://api.joinrise.io/api/v1/jobs/public?page=1&limit=20&sort=desc&sortedBy=createdAt&jobLoc=',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache', // Cache the response until manually invalidated
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in getJobs:', error);
    // Return empty results
    return {
      results: [],
      total: 0,
      page: 1,
      limit: 20,
      totalPages: 0,
    };
  }
}

export async function getJobById(id: string): Promise<Job | null> {
  try {
    const response = await fetch(
      `https://api.joinrise.io/api/v1/jobs/public/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache',
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch job with ID: ${id}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching job with ID ${id}:`, error);
    return null;
  }
}
