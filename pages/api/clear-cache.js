// Manual cache clearing endpoint
// Use this when you need immediate updates after changing Airtable data
// WARNING: This will use more API calls

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Clear the cache by importing and resetting it
    // Note: This is a simple approach. In production, you might want authentication
    const { jobsCache } = await import('./jobs.js');
    
    // Reset cache
    if (jobsCache) {
      jobsCache.data = null;
      jobsCache.timestamp = null;
      jobsCache.language = null;
    }

    res.status(200).json({ 
      message: 'Cache cleared successfully',
      note: 'Next request will fetch fresh data from Airtable'
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    res.status(500).json({ 
      message: 'Error clearing cache',
      error: error.message 
    });
  }
} 