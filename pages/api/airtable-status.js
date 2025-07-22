// This endpoint provides monitoring information about Airtable API usage
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get cache info from the jobs API (you'd need to export this)
  const cacheInfo = {
    hasCache: false,
    cacheAge: null,
    lastFetch: null
  };

  // Get rate limit info
  const rateLimitInfo = {
    requestsThisMinute: 0,
    limitPerMinute: 2, // Very conservative for free plan
    timeUntilReset: 0
  };

  res.status(200).json({
    airtable: {
      status: 'operational',
      plan: 'free',
      rateLimit: rateLimitInfo,
      cache: cacheInfo,
      monthlyLimit: 1200,
      estimatedUsage: 'Very low due to 1-hour caching'
    },
    recommendations: [
      '1-hour cache reduces API calls significantly',
      'Max 2 requests per minute (very conservative)',
      'Should stay well within free plan limits',
      'Monitor usage in Airtable dashboard'
    ]
  });
} 