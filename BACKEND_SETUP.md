# Backend API Setup Guide

## Overview

The Grand Interview Backend API is a simple Node.js/Express server that manages questions in real-time with persistent JSON-based storage.

## Quick Start (3 Steps)

### Step 1: Install Node.js
Download from: https://nodejs.org/ (LTS version recommended)

### Step 2: Install Dependencies
```bash
cd d:\Grand Web
npm install
```

This will install:
- `express` - Web framework
- `cors` - Cross-origin requests
- `body-parser` - JSON parsing

### Step 3: Start the Server
```bash
npm start
```

Expected output:
```
✓ Grand Interview Backend API running on http://localhost:3000
✓ Database file: d:\Grand Web\questions-db.json
```

## API Endpoints

### Get All Questions
```
GET http://localhost:3000/api/questions
```

### Get Questions by Category
```
GET http://localhost:3000/api/questions/FIB
GET http://localhost:3000/api/questions/LSPD
GET http://localhost:3000/api/questions/mandatory
```

### Add Question
```
POST http://localhost:3000/api/questions/FIB
Body: { "question": "Your question here" }
```

### Edit Question
```
PUT http://localhost:3000/api/questions/FIB/0
Body: { "question": "Updated question" }
```

### Delete Question
```
DELETE http://localhost:3000/api/questions/FIB/0
```

### Health Check
```
GET http://localhost:3000/api/health
```

### Export Questions
```
POST http://localhost:3000/api/export
```

### Import Questions
```
POST http://localhost:3000/api/import
Body: { "data": { "questions": {...} } }
```

### Reset to Defaults
```
POST http://localhost:3000/api/reset
```

## Database File

The questions are stored in `questions-db.json` in the same directory as `backend-api.js`.

Structure:
```json
{
  "questions": {
    "mandatory": [...],
    "FIB": [...],
    "LSPD": [...],
    ...
  },
  "lastModified": "2025-12-03T..."
}
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows: Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
$env:PORT=3001; npm start
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### CORS Errors
The API is configured to accept requests from any origin. If you still get CORS errors:
1. Check browser console (F12)
2. Verify server is running on http://localhost:3000
3. Check that admin.html is making requests correctly

## Admin Panel Integration

The admin panel (`admin.html`) will automatically:
1. Try to connect to the backend API on page load
2. Load questions from `http://localhost:3000/api/questions`
3. Save changes in real-time via API calls
4. Fall back to localStorage if API is unavailable

## Development

### Running in Development Mode
```bash
npm run dev
```

### Adding New Endpoints
Edit `backend-api.js` and add new route handlers:
```javascript
app.get('/api/new-endpoint', (req, res) => {
  // Your code here
  res.json({ success: true });
});
```

## Production Deployment

For production use:
1. Use a process manager like PM2
2. Set up HTTPS
3. Configure firewall rules
4. Use environment variables for configuration
5. Set up database backups

## Support

- Server logs appear in console
- Database is human-readable JSON
- All timestamps in ISO format
- Errors include descriptive messages

---

**Status**: ✅ Ready to use  
**Version**: 1.0  
**Last Updated**: December 3, 2025
