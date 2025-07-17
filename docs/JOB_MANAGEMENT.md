# Job Listings Management Guide

## How to Add, Edit, or Remove Job Listings

### Option 1: Edit the JSON File (Recommended for non-technical users)

1. **Locate the file**: Navigate to `data/jobs.json` in your project
2. **Open the file**: Use any text editor (Notepad, TextEdit, VS Code, etc.)
3. **Edit job listings**: Follow the structure below

### Job Listing Structure

Each job should follow this format:

```json
{
  "id": "unique-number",
  "title": "Job Title",
  "location": "City/Country",
  "type": "Full-time/Part-time/Contract",
  "team": "Engineering/Product/Design/Data Science",
  "description": "Detailed job description",
  "requirements": [
    "Requirement 1",
    "Requirement 2",
    "Requirement 3"
  ],
  "isActive": true
}
```

### Adding a New Job

1. Add a new job object to the `jobs` array in `data/jobs.json`
2. Use a unique `id` (increment the highest existing ID)
3. Set `isActive: true` to make it visible
4. Save the file

Example:
```json
{
  "id": "7",
  "title": "Marketing Manager",
  "location": "United States",
  "type": "Full-time",
  "team": "Marketing",
  "description": "We're looking for a Marketing Manager to lead our digital marketing initiatives.",
  "requirements": [
    "5+ years of marketing experience",
    "Experience with digital marketing tools",
    "Strong analytical skills"
  ],
  "isActive": true
}
```

### Editing an Existing Job

1. Find the job by its `id` in the `jobs` array
2. Modify any fields as needed
3. Save the file

### Removing a Job (Temporarily)

Instead of deleting the job, set `isActive: false`:
```json
{
  "id": "1",
  "title": "Senior AI Engineer",
  "location": "Tunisia",
  "type": "Full-time",
  "team": "Engineering",
  "description": "...",
  "requirements": [...],
  "isActive": false
}
```

### Permanently Deleting a Job

Remove the entire job object from the `jobs` array.

### Important Notes

- **Job titles, descriptions, and requirements must be in English**
- **Locations and teams will automatically appear in the filter dropdowns**
- **Changes take effect immediately after saving the file**
- **Backup your `jobs.json` file before making major changes**
- **Use proper JSON formatting (commas, quotes, brackets)**

### Common Issues

1. **JSON Syntax Errors**: Make sure all quotes, commas, and brackets are properly placed
2. **Duplicate IDs**: Each job must have a unique `id`
3. **Missing Fields**: All fields are required except `isActive` (defaults to `true`)

### Need Help?

If you're not comfortable editing JSON files, consider:
- Using a JSON validator online to check your syntax
- Working with a developer to make changes
- Using a visual JSON editor

### Alternative: Content Management System

For more advanced needs, consider implementing a CMS like:
- Strapi
- Contentful
- Sanity
- Or a simple admin panel

This would allow you to manage jobs through a web interface instead of editing files. 