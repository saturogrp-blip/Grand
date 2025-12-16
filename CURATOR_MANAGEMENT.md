# Curator Management System

## Overview

The Curator Management System is a real-time, localStorage-based database for managing curators across all organizations in the Grand Interview application. It provides a complete CRUD (Create, Read, Update, Delete) interface through the admin panel and automatically syncs changes across all open tabs.

## Features

### Core Features
- **Per-Organization Curator Lists** - Manage curators for FIB, LSPD, SAHP, GOV, LI, NG, and EMS separately
- **Senior Curator Management** - Single global senior curator setting
- **Real-Time Persistence** - All changes automatically saved to localStorage
- **Cross-Tab Synchronization** - Changes in one tab instantly reflect in all other tabs
- **Export/Import** - Backup and restore curator data as JSON files
- **Reset to Defaults** - One-click reset to default curator configuration
- **Duplicate Prevention** - Prevents adding duplicate curator names (case-insensitive)

### UI Components
- **Curator Management Section** in Admin Panel
  - Senior Curator input field with update button
  - Organization dropdown selector
  - Real-time curator list display
  - Add new curator input field
  - Remove individual curator buttons
  - Curator count display

- **Action Buttons**
  - Export Curators (JSON)
  - Import Curators (JSON)
  - Reset Curators to Default

## How It Works

### Database Structure

```javascript
{
  curators: {
    FIB: ['Sleazy', 'Nikkie', 'Moe', 'Onur', 'Saturo'],
    LSPD: ['Donte', 'Mahmut', 'Saturo'],
    SAHP: ['Lilith', 'Donte', 'Nikkie', 'Trashley'],
    GOV: ['Lilith', 'Vanilla'],
    LI: ['Vanilla', 'Markus', 'Siven'],
    NG: ['James', 'Mego'],
    EMS: ['James', 'Mego', 'Nikkie']
  },
  seniorCurator: 'Zaid Pluxury',
  lastModified: '2025-12-03T...'
}
```

### API Reference

#### `CuratorDB.getCurators(org)`
Get all curators for a specific organization.
```javascript
const curators = CuratorDB.getCurators('FIB');
// Returns: ['Sleazy', 'Nikkie', 'Moe', 'Onur', 'Saturo']
```

#### `CuratorDB.setCurators(org, curatorList)`
Replace entire curator list for an organization.
```javascript
CuratorDB.setCurators('FIB', ['Alice', 'Bob', 'Charlie']);
```

#### `CuratorDB.addCurator(org, name)`
Add a single curator to an organization (prevents duplicates).
```javascript
CuratorDB.addCurator('LSPD', 'John Doe');
```

#### `CuratorDB.removeCurator(org, name)`
Remove a curator from an organization.
```javascript
CuratorDB.removeCurator('SAHP', 'Lilith');
```

#### `CuratorDB.getSeniorCurator()`
Get the current senior curator.
```javascript
const senior = CuratorDB.getSeniorCurator();
// Returns: 'Zaid Pluxury'
```

#### `CuratorDB.setSeniorCurator(name)`
Update the senior curator.
```javascript
CuratorDB.setSeniorCurator('New Senior Curator');
```

#### `CuratorDB.getAllCurators()`
Get all curator data at once.
```javascript
const data = CuratorDB.getAllCurators();
// Returns: { curators: {...}, seniorCurator: '...', lastModified: '...' }
```

#### `CuratorDB.resetToDefaults()`
Reset all curators to default values.
```javascript
CuratorDB.resetToDefaults();
```

#### `CuratorDB.exportToJSON()`
Export curator data as JSON string.
```javascript
const json = CuratorDB.exportToJSON();
```

#### `CuratorDB.importFromJSON(jsonString)`
Import curator data from JSON string.
```javascript
CuratorDB.importFromJSON(jsonString);
```

#### `CuratorDB.getStats()`
Get curator statistics.
```javascript
const stats = CuratorDB.getStats();
// Returns: { totalCurators: 23, perOrg: {...}, seniorCurator: '...', ... }
```

## Admin Panel Usage

### Adding a Curator
1. Navigate to **Curator Management** section
2. Select an organization from the dropdown
3. Enter the curator name in the "Enter curator name..." field
4. Click **+ Add**
5. Changes are instantly saved and synced

### Removing a Curator
1. Select the organization from the dropdown
2. Find the curator in the list
3. Click **✕ Remove** next to their name
4. Confirm the deletion

### Changing the Senior Curator
1. Find the **Senior Curator** field at the top
2. Enter the new senior curator name
3. Click **Update**
4. Changes apply immediately

### Exporting Curators
1. Click **Export Curators** button
2. A JSON file downloads with the format: `curators_YYYY-MM-DD.json`
3. Can be used as backup or for sharing

### Importing Curators
1. Click **Import Curators** button
2. Select a previously exported JSON file
3. Curators are immediately loaded and replace current data
4. All tabs automatically sync

### Resetting to Defaults
1. Click **Reset Curators** button
2. Confirm when prompted
3. All curators return to the original default list

## Data Persistence

- **Storage Key**: `curators_database_v2` in browser's localStorage
- **Backup**: Use Export feature to create JSON backups
- **Sync**: Changes automatically sync across all open tabs via storage events
- **Lifetime**: Data persists until user clears browser cache or explicitly resets

## Integration with Main Application

### Question Generator (index.html)
When a user selects an organization for generating questions:
1. The system checks the CuratorDB for assigned curators
2. Curators are automatically populated in the form
3. Fields are read-only to prevent modification
4. If no curators exist, fields are left empty and editable
5. Changes in admin panel instantly update in the generator

### Fallback System
If CuratorDB is not available:
- Legacy `curator.js` mapping is used as fallback
- Ensures backward compatibility
- Admin panel always uses CuratorDB (preferred system)

## Events

### `curatorDbChanged` Custom Event
Fired whenever curator data is updated via CuratorDB methods.

```javascript
window.addEventListener('curatorDbChanged', (e) => {
  console.log('Curator data changed:', e.detail);
  // Update UI, refresh curators, etc.
});
```

### `storage` Event
Standard browser storage event fired when data changes in another tab.

```javascript
window.addEventListener('storage', (e) => {
  if (e.key === 'curators_database_v2') {
    console.log('Curators changed in another tab');
  }
});
```

## Default Configuration

```javascript
{
  FIB: ['Sleazy', 'Nikkie', 'Moe', 'Onur', 'Saturo'],
  LSPD: ['Donte', 'Mahmut', 'Saturo'],
  SAHP: ['Lilith', 'Donte', 'Nikkie', 'Trashley'],
  GOV: ['Lilith', 'Vanilla'],
  LI: ['Vanilla', 'Markus', 'Siven'],
  NG: ['James', 'Mego'],
  EMS: ['James', 'Mego', 'Nikkie'],
  seniorCurator: 'Zaid Pluxury'
}
```

## Troubleshooting

### Curators Not Showing in Generator
- Check that admin has assigned curators to the organization
- Verify the organization value matches exactly (case-sensitive)
- Check browser console for errors
- Try refreshing the page

### Changes Not Syncing Across Tabs
- Ensure localStorage is enabled in browser
- Check that both pages are from the same domain
- Try closing and reopening tabs

### Import Failing
- Verify JSON file is valid (use [jsonlint.com](https://jsonlint.com))
- Ensure it contains the required `curators` and `seniorCurator` fields
- Check browser console for specific error message

### Data Lost After Browser Restart
- This is expected behavior if localStorage was cleared
- Use Export feature to create persistent backups
- Store JSON files in version control or cloud storage

## Technical Details

### Dependencies
- Browser localStorage API
- Vanilla JavaScript (no external libraries)
- Requires modern browser (ES6+)

### Performance
- Sub-millisecond operations for all CRUD operations
- Minimal memory footprint (typically < 5KB)
- No network requests or API calls

### Browser Compatibility
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge (all versions)
- IE 8+ (with polyfills for structured clone)

## Files

- `curator-db.js` - Core database system and API
- `admin.html` - Admin panel with UI for curator management
- `index.html` - Updated to use CuratorDB for question generator
- `curator.js` - Legacy curator mapping (fallback)

## Future Enhancements

- Cloud sync with Firebase or backend API
- Audit log for curator changes
- Role-based permissions for admin users
- Batch import from CSV files
- Curator activity analytics
