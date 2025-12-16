# 🚀 Real-Time Data Storage - Setup & Troubleshooting Guide

## ⚠️ Prerequisites Check

Before testing the real-time sync system, ensure you have:

### 1. **Node.js & npm** (REQUIRED)
Node.js is **NOT currently installed** on your system.

**Install Node.js:**
1. Go to: https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Run the installer and follow prompts
4. **RESTART your computer** or command prompt
5. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

### 2. **Required npm Packages**
Once Node.js is installed, run:
```powershell
cd "d:\Grand Web"
npm install express cors body-parser
```

This will install:
- **express** - Web server framework
- **cors** - Cross-origin request handling
- **body-parser** - Request body parsing

---

## 🎯 Getting Started (After Node.js Install)

### Step 1: Install Dependencies
```powershell
cd "d:\Grand Web"
npm install
```

### Step 2: Start Backend Server
**Option A - Using batch file (Windows):**
```powershell
cd "d:\Grand Web"
.\start-backend.bat
```

**Option B - Using PowerShell directly:**
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

### Step 3: Open Dashboard
Open in your browser: `file:///d:/Grand%20Web/data-editor.html`

Or use a local server (recommended):
```powershell
# Install simple HTTP server
npm install -g http-server

# Start it in the Grand Web directory
cd "d:\Grand Web"
http-server -p 8080
```
Then open: `http://localhost:8080/data-editor.html`

---

## 🔍 Architecture Overview

```
┌─────────────────────────────────────────┐
│      Browser (Client)                   │
│  ┌──────────────────────────────────┐  │
│  │  data-editor.html (Dashboard)     │  │
│  │  ├─ Add/Edit/Delete Curators      │  │
│  │  ├─ View JSON Data                │  │
│  │  └─ Backup/Restore                │  │
│  └──────────────────────────────────┘  │
│           ↓ (data-storage.js)           │
│  ┌──────────────────────────────────┐  │
│  │  localStorage (Browser Memory)    │  │
│  │  ├─ Instant saves                 │  │
│  │  ├─ Cross-tab sync                │  │
│  │  └─ No refresh needed             │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
           ↓ (fetch requests)
┌─────────────────────────────────────────┐
│      Node.js Backend (Server)           │
│  ┌──────────────────────────────────┐  │
│  │  backend-data.js (Express API)    │  │
│  │  ├─ GET /api/data                 │  │
│  │  ├─ POST /api/data/save           │  │
│  │  └─ Curator CRUD endpoints        │  │
│  └──────────────────────────────────┘  │
│           ↓                              │
│  ┌──────────────────────────────────┐  │
│  │  File System Storage              │  │
│  │  ├─ curator-data.json             │  │
│  │  ├─ backups/                      │  │
│  │  └─ (Persistent across restarts)  │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 🧪 Real-Time Sync Flow

### What Happens When You Add a Curator:

```
1. User clicks "Add Curator" in dashboard
   ↓
2. data-storage.js calls addCurator()
   ↓
3. Data saved to localStorage immediately
   ↓
4. UI updates instantly (no wait)
   ↓
5. scheduleSyncToFile() triggered
   ↓
6. After 1 second: saveToServer() sends data to backend
   ↓
7. Backend receives POST request to /api/data/save
   ↓
8. Data written to curator-data.json file
   ↓
9. Automatic backup created in backups/ folder
   ↓
10. Browser console shows: ✅ Data synced to server
```

**Total time from click to persistent storage: ~1-2 seconds**

---

## 🔧 Troubleshooting

### Problem 1: "node is not recognized"

**Cause:** Node.js not installed or not in PATH

**Fix:**
1. Install Node.js from https://nodejs.org/
2. Restart computer or command prompt
3. Verify: `node --version` should show version number

---

### Problem 2: "Backend server won't start"

**Check these in order:**

1. **Is port 3001 available?**
   ```powershell
   netstat -ano | findstr :3001
   ```
   If it shows a process, kill it:
   ```powershell
   taskkill /PID <PID> /F
   ```

2. **Are dependencies installed?**
   ```powershell
   npm install express cors body-parser
   ```

3. **Is backend-data.js in the right location?**
   ```powershell
   dir backend-data.js
   ```
   Should show it at: `d:\Grand Web\backend-data.js`

4. **Check for syntax errors:**
   ```powershell
   node -c backend-data.js
   ```

---

### Problem 3: "Data not saving to server"

**Check in order:**

1. **Is backend server running?**
   - Terminal should show: `✅ Backend server running on http://localhost:3001`

2. **Check browser console (F12 → Console):**
   - Look for: `✅ Data synced to server`
   - If you see `⚠️ Server sync failed`, backend isn't responding

3. **Check file permissions:**
   ```powershell
   # Ensure data folder is writable
   icacls "d:\Grand Web\data" /grant:r "$env:USERNAME:F"
   ```

4. **Check backend console for errors:**
   - Backend terminal should show: `📝 Saving data to disk...`
   - Then: `✅ Data saved successfully`

---

### Problem 4: "Data visible in UI but not in file"

**This means:**
- ✅ localStorage is working
- ✅ Backend received the request
- ❌ File write failed

**Check:**
1. Does `d:\Grand Web\data\` folder exist?
   ```powershell
   dir "d:\Grand Web\data\"
   ```

2. Check file permissions (Windows):
   ```powershell
   icacls "d:\Grand Web\data\*"
   ```

3. Check for error messages in backend terminal
   - Look for: `❌ Error in /api/data/save:`
   - May indicate permission or disk issues

---

### Problem 5: "Cross-tab sync not working"

**Test procedure:**

1. Open two browser tabs: `data-editor.html`
2. Add curator in Tab 1
3. Switch to Tab 2 - should appear instantly

**If not working:**
- Browser must have localStorage enabled
- Both tabs must be from same origin
- Open browser DevTools → Application → Storage → Local Storage
- Should see `grandInterviewData` key

---

## 📊 Console Messages Guide

### Expected Messages (Normal Operation)

| Message | Meaning | Action |
|---------|---------|--------|
| `✅ DataStorage initialized` | System ready | None - working normally |
| `📤 Sending data to server` | Syncing to backend | None - normal operation |
| `✅ Data synced to server` | Successfully saved to file | None - working perfectly |
| `✅ Data saved successfully` | Backend saved to disk | None - working perfectly |

### Warning Messages (Degraded but Working)

| Message | Meaning | Action |
|---------|---------|--------|
| `⚠️ Server sync failed` | Backend unavailable | Data still in localStorage, will sync when server back |
| `ℹ️ Using localStorage only` | Can't reach server | Data is safe in browser, manual backup available |

### Error Messages (Problem)

| Message | Meaning | Action |
|---------|---------|--------|
| `❌ Server returned error` | Server error (500) | Check backend console for details |
| `❌ Error in /api/data/save` | File write failed | Check file permissions |

---

## ✅ Final Checklist

Before declaring success, verify:

- [ ] Node.js installed (`node --version` shows version)
- [ ] Dependencies installed (`npm install` completed)
- [ ] Backend running (`node backend-data.js` shows ✅)
- [ ] Data folder exists (`d:\Grand Web\data\`)
- [ ] Dashboard loads (`data-editor.html` opens)
- [ ] Can add curator (no errors in UI)
- [ ] Console shows sync message (`✅ Data synced to server`)
- [ ] File updated (`curator-data.json` contains new curator)
- [ ] Data persists (page refresh shows curator still there)
- [ ] Cross-tab works (two tabs sync without refresh)

---

## 🚀 Quick Reference Commands

```powershell
# Navigate to project
cd "d:\Grand Web"

# Install dependencies
npm install

# Start backend
node backend-data.js

# Check if Node installed
node --version

# View data file
Get-Content "d:\Grand Web\data\curator-data.json" | ConvertFrom-Json

# List backup files
dir "d:\Grand Web\data\backups\"

# Kill stuck process on port 3001
taskkill /F /PID $(netstat -ano | findstr :3001 | % {$_.split()[4]})
```

---

## 📞 Still Having Issues?

Provide these details for help:

1. **Output from `node --version`:**
   ```powershell
   node --version
   ```

2. **Output from backend startup:**
   ```powershell
   node backend-data.js
   # Wait 5 seconds, then copy all output
   ```

3. **Browser console errors (F12 → Console)**

4. **Does `curator-data.json` file exist?**
   ```powershell
   dir "d:\Grand Web\data\curator-data.json"
   ```

5. **Check backend logs for errors:**
   - Should show: `✅ Backend server running on http://localhost:3001`

Good luck! 🎉

