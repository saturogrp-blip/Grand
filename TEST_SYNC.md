# Real-Time Sync Testing Guide

## 🚀 Quick Start

### 1. Start the Backend Server
```powershell
cd "d:\Grand Web"
node backend-data.js
```

You should see:
```
✅ Backend server running on http://localhost:3001
📁 Data directory: d:\Grand Web\data
📄 Data file: d:\Grand Web\data\curator-data.json
```

### 2. Open the Dashboard
Open in browser: `http://localhost:3000/data-editor.html`

(Or if that doesn't work, use: `file:///d:/Grand%20Web/data-editor.html`)

### 3. Open Browser Console
Press **F12** → **Console** tab

You should see:
```
✅ DataStorage initialized - Real-time sync enabled
```

### 4. Add a Curator

1. Select an **Organization** (e.g., "EMS")
2. Enter a **Curator Name** (e.g., "John Smith")
3. Click **Add Curator**

### 5. Check Console Output

You should see messages like:
```
📤 Sending data to server (1245 bytes)...
✅ Data synced to server: {success: true, message: "Data saved successfully", ...}
```

### 6. Verify File Was Saved

Check the file: `d:\Grand Web\data\curator-data.json`

You should see your new curator in the JSON data with a unique ID.

---

## 🔍 Debugging Checklist

### Issue: "Server sync not available"
**Solution:**
- [ ] Is `backend-data.js` running?
- [ ] Is terminal showing "✅ Backend server running on http://localhost:3001"?
- [ ] Check for error messages in backend terminal

### Issue: "Data saved but file not updated"
**Solution:**
- [ ] Check file permissions on `d:\Grand Web\data\` directory
- [ ] Ensure `data` folder exists (should be created automatically)
- [ ] Look for error messages in backend console (may show file write errors)

### Issue: "Changes visible in UI but not in server file"
**Solution:**
- [ ] Verify POST request reached backend (look for "📝 Saving data to disk..." in terminal)
- [ ] Check that file path is correct: `d:\Grand Web\data\curator-data.json`
- [ ] Wait 5 seconds after making change (auto-save interval)

### Issue: "Multiple sync requests in console"
**This is normal!** - Occurs during typing. Debouncing prevents wasted saves.

---

## 📊 Expected Console Output

### When adding a curator:

**Browser Console:**
```javascript
📤 Sending data to server (1523 bytes)...
✅ Data synced to server: {
  success: true, 
  message: "Data saved successfully",
  timestamp: "2024-01-15T10:30:45.123Z",
  dataPoints: { curators: 2 }
}
```

**Backend Terminal:**
```
📝 Saving data to disk... {curators: 1, timestamp: "2024-01-15T10:30:45.123Z"}
✅ Data saved successfully
```

---

## 🧪 Advanced Testing

### Test 1: Cross-Tab Sync
1. Open `data-editor.html` in TWO browser tabs
2. Add a curator in Tab 1
3. **Verify**: Curator appears immediately in Tab 2 (without refresh)

### Test 2: Persistence
1. Add a curator in the dashboard
2. **Refresh the page** (Ctrl+R)
3. **Verify**: Data is still there (loaded from server)

### Test 3: File Backup
1. Add a curator
2. Check `d:\Grand Web\data\backups\` folder
3. Should contain `backup-YYYY-MM-DD-*.json` files
4. Each backup should contain all curator data

---

## 🔧 Troubleshooting Commands

If nothing works, try these PowerShell commands:

```powershell
# Check if Node is installed
node --version

# Check if port 3001 is available
netstat -ano | findstr :3001

# List files in data directory
dir "d:\Grand Web\data\"

# Check data file contents
Get-Content "d:\Grand Web\data\curator-data.json" | ConvertFrom-Json

# Kill process on port 3001 (if stuck)
taskkill /PID <PID> /F

# Restart server with detailed logging
$env:DEBUG="*"; node backend-data.js
```

---

## ✅ Success Criteria

You'll know it's working when:

1. ✅ Console shows "✅ Data synced to server" messages
2. ✅ File `d:\Grand Web\data\curator-data.json` gets updated after adding curator
3. ✅ Data persists after page refresh
4. ✅ Changes appear in second tab without refresh
5. ✅ Backup files created in `d:\Grand Web\data\backups\`

---

## 📝 Notes

- Auto-save occurs every **1-5 seconds** after changes
- Only syncs if data actually changed (no wasted requests)
- Server runs on **port 3001** (can be changed in `backend-data.js`)
- All data is stored in **JSON format** (human-readable)
- Backups created automatically on every save

