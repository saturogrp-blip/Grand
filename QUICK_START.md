# ⚡ Quick Reference Card

## 🎯 TL;DR - Get It Running in 5 Minutes

### Prerequisites: Node.js
```powershell
# 1. Download from https://nodejs.org/ (LTS version)
# 2. Run installer
# 3. Restart computer
# 4. Verify:
node --version  # Should show v18.x.x or higher
```

### Setup (One Time)
```powershell
cd "d:\Grand Web"
npm install
```

### Run Server
```powershell
cd "d:\Grand Web"
node backend-data.js
```

### Open Dashboard
```
http://localhost:8080/data-editor.html
```
(Or: `file:///d:/Grand%20Web/data-editor.html`)

### Test It
1. Open browser console: **F12**
2. Add a curator
3. Look for: `✅ Data synced to server`
4. Check file: `d:\Grand Web\data\curator-data.json`

---

## 📍 Port Reference

| Service | Port | URL |
|---------|------|-----|
| Backend API | 3001 | `http://localhost:3001` |
| HTTP Server | 8080 | `http://localhost:8080` |
| Dashboard | - | `data-editor.html` |

---

## 🗂️ File Locations

```
d:\Grand Web\
├── data-storage.js          (Client sync engine)
├── backend-data.js          (Server API)
├── data-editor.html         (Dashboard)
├── data/
│   ├── curator-data.json    (Your data - IMPORTANT!)
│   └── backups/             (Auto backups)
```

---

## 🔑 Key Features

✅ **Real-time sync** - 1 second after change  
✅ **Cross-tab sync** - Changes appear in all tabs  
✅ **Automatic backups** - Created with every save  
✅ **Offline support** - Works without server  
✅ **Persistent storage** - Data survives restarts  

---

## 🐛 Common Issues

| Issue | Fix |
|-------|-----|
| `node not found` | Install Node.js from nodejs.org |
| Port 3001 in use | Kill process or change port in backend-data.js |
| Data not saving | Check backend console for errors |
| Can't start backend | Run: `node verify-sync.js` |

---

## 📊 How Sync Works

```
Browser → localStorage (instant)
       → scheduleSyncToFile() after 1 sec
       → POST to /api/data/save
       → File saved to curator-data.json
       → Backup created
```

**Speed: ~1-2 seconds from click to persistent storage**

---

## 🔌 API Endpoints

```
GET  /api/data              - Get all data
POST /api/data/save         - Save data to file
GET  /api/curators/:org     - Get curators by org
POST /api/curators          - Add curator
DELETE /api/curators/:id    - Remove curator
GET  /api/backups           - List backups
GET  /api/health            - Server status
```

---

## 💾 Storage Hierarchy

```
1. Browser localStorage
   └─ Instant, survives page refresh
2. Server file (curator-data.json)
   └─ Persistent, survives computer restart
3. Automatic backups
   └─ Timestamped snapshots
```

---

## 🚨 Emergency Commands

```powershell
# Restart backend
taskkill /F /PID <PID>  # Kill old process
node backend-data.js    # Start fresh

# View your data
Get-Content "d:\Grand Web\data\curator-data.json" | ConvertFrom-Json

# Check port usage
netstat -ano | findstr :3001

# Reset data (WARNING - deletes everything)
Remove-Item "d:\Grand Web\data\curator-data.json" -Force
```

---

## 📈 Expected Performance

| Operation | Time |
|-----------|------|
| Add curator | <50ms (UI instant) |
| Sync to server | ~1 second (debounced) |
| Save to disk | <100ms |
| Create backup | ~50ms |
| **Total** | **1-2 seconds** |

---

## ✅ Success Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Backend running (`node backend-data.js`)
- [ ] Console shows: `✅ Backend server running`
- [ ] Dashboard loads in browser
- [ ] Console shows: `✅ DataStorage initialized`
- [ ] Can add curator without errors
- [ ] Console shows: `✅ Data synced to server`
- [ ] File `curator-data.json` was updated
- [ ] Page refresh shows curator still there
- [ ] Two tabs sync without refresh

**All checked = Perfect! System is fully operational.** ✅

---

## 📚 Full Documentation

For detailed guides, see:
- **Setup Issues**: `SETUP_GUIDE.md`
- **Testing Guide**: `TEST_SYNC.md`
- **Complete Summary**: `SYNC_FIX_SUMMARY.md`
- **Auto Verify**: `node verify-sync.js`

---

## 🎯 Your Next Step

**Install Node.js** from https://nodejs.org/ (LTS version)

Then run:
```powershell
cd "d:\Grand Web"
npm install
node backend-data.js
```

Done! 🎉

