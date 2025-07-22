const fetch = require('node-fetch');

async function testAPI() {
  try {
    console.log('🧪 Testing API endpoint...');
    
    const response = await fetch('http://localhost:3001/api/jobs?language=English');
    const data = await response.json();
    
    console.log('✅ API Response:', data);
    console.log('📊 Jobs found:', data.jobs?.length || 0);
    
    if (data.jobs && data.jobs.length > 0) {
      console.log('📋 First job:', data.jobs[0].title);
    }
    
  } catch (error) {
    console.error('❌ API Error:', error.message);
  }
}

testAPI(); 