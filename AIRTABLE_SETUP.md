# Airtable Integration Setup

## Your Airtable Credentials

Based on your provided information, here are your credentials:

### API Key
```
pat8McmENavZbnt4S.397ac3840afcc39170f00e4d9377d87a5596a14e85d22d836abe16736039b509
```

### Base ID
```
app1LEY82jGTIlopQ
```

### Table ID
```
tblAoSn32DAeyMawV
```

## Step 1: Create Environment File

Create a file called `.env.local` in your project root with this content:

```env
AIRTABLE_API_KEY=pat8McmENavZbnt4S.397ac3840afcc39170f00e4d9377d87a5596a14e85d22d836abe16736039b509
AIRTABLE_BASE_ID=app1LEY82jGTIlopQ
```

## Step 2: Your Airtable Database is Ready

Your Airtable database already has all the required fields:

- **Title** (Text)
- **Description** (Long text with rich formatting)
- **Requirements** (Long text with rich formatting)
- **Job Type** (Single select)
- **Team** (Single select)
- **Active** (Checkbox)
- **Language** (Single select)

## Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/careers`

3. Test the API endpoint: `http://localhost:3000/api/jobs?language=English`

## Step 4: Add Sample Data

Add some sample jobs to your Airtable database:

### English Job Example:
- **Title**: Senior AI Engineer
- **Description**: We're looking for a Senior AI Engineer to lead our machine learning initiatives...
- **Requirements**: • 5+ years of experience in AI/ML development\n• Strong background in Python\n• Experience with large language models
- **Job Type**: Full-time
- **Team**: Engineering
- **Active**: ✅ (checked)
- **Language**: English

### Arabic Job Example:
- **Title**: مهندس ذكاء اصطناعي
- **Description**: نحن نبحث عن مهندس ذكاء اصطناعي لقيادة مبادرات التعلم الآلي...
- **Requirements**: • خبرة 5+ سنوات في تطوير الذكاء الاصطناعي\n• خلفية قوية في Python
- **Job Type**: Full-time
- **Team**: Engineering
- **Active**: ✅ (checked)
- **Language**: Arabic

## Benefits You'll Get

✅ **Rich text formatting** in Description and Requirements fields
✅ **Multi-language support** with Language field
✅ **Real-time updates** when you edit in Airtable
✅ **Mobile app** for editing on the go
✅ **Professional interface** - easy to use
✅ **Free tier** - 1,200 records (plenty for jobs)

## Troubleshooting

If you encounter issues:

1. **Check environment variables** are set correctly
2. **Verify Airtable API key** is valid
3. **Check Base ID** is correct
4. **Make sure jobs have Active = true**
5. **Verify Language field** matches exactly (English/Arabic)

## Next Steps

Once everything is working:
1. Add your real job listings to Airtable
2. Test language switching
3. Deploy to production
4. Add environment variables to your hosting platform 