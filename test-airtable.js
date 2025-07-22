const Airtable = require('airtable');

const base = new Airtable({
  apiKey: 'pat8McmENavZbnt4S.397ac3840afcc39170f00e4d9377d87a5596a14e85d22d836abe16736039b509'
}).base('app1LEY82jGTIlopQ');

console.log('🧪 Testing Airtable Integration...\n');

// Test fetching English jobs
base('Job Listings').select({
  filterByFormula: "AND({Active} = 1, {Language} = 'English')"
}).firstPage(function(err, records) {
  if (err) {
    console.error('❌ Error fetching English jobs:', err);
    return;
  }
  
  console.log('✅ English Jobs Found:', records.length);
  records.forEach(function(record) {
    console.log(`- ${record.get('Title')} (${record.get('Team')})`);
  });
  
  console.log('\n---\n');
  
  // Test fetching Arabic jobs
  base('Job Listings').select({
    filterByFormula: "AND({Active} = 1, {Language} = 'Arabic')"
  }).firstPage(function(err, records) {
    if (err) {
      console.error('❌ Error fetching Arabic jobs:', err);
      return;
    }
    
    console.log('✅ Arabic Jobs Found:', records.length);
    records.forEach(function(record) {
      console.log(`- ${record.get('Title')} (${record.get('Team')})`);
    });
    
    console.log('\n🎉 Airtable integration test completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Fix the Arabic job language in Airtable (change to "Arabic")');
    console.log('2. Visit http://localhost:3000/careers to test the frontend');
    console.log('3. Test language switching between English and Arabic');
  });
}); 