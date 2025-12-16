# Grand Interview - Design & Code Quick Reference

## Color Tokens
```css
/* Light Theme */
--bg: #f6fbff
--text: #07203a
--muted: #4b6b86
--surface: #ffffff
--card-bg: rgba(11,102,194,.03)
--accent: #0b66c2
--accent-dark: #0956a8
--danger: #dc3545
--input-bg: #ffffff
--input-border: rgba(7,32,58,.12)
--input-text: #07203a
--shadow: rgba(11,102,194,.08)

/* Dark Theme */
--bg: #0d1419
--text: #ecf2f9
--muted: #c5d9ec
--surface: #151d2a
--accent: #5fb3ff
--accent-dark: #3b9ef5
--danger: #ff7373
```

## Typography Sizes
- Page Title (h1): 28px, weight 700
- Section Header (h2): 1.1rem-1.5rem, weight 700
- Subsection (h3): 1rem, weight 600
- Body: 1rem, weight 400
- Small: 0.9rem-0.95rem, weight 400
- Label: 0.95rem-1rem, weight 600

## Component Sizes
- Control Height: 56px
- Button Padding: 0.7rem 1.6rem (large), 0.6rem 1.2rem (medium)
- Input Padding: 0.6rem
- Icon Size: 16px-20px
- Card Border-radius: 8px-10px
- Pill Border-radius: 16px-999px

## Spacing Scale
- xs: 0.25rem
- sm: 0.5rem-0.6rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- Container Gap: 0.5rem-1.5rem

## Shadows
- Light: 0 2px 8px var(--shadow)
- Medium: 0 8px 22px var(--shadow)
- Heavy: 0 10px 26px rgba(11,102,194,0.12)
- Deep: 0 12px 40px rgba(2,6,23,0.6)

## Org Color Codes
- FIB: #2b8cff (blue)
- LSPD: #06b6d4 (cyan)
- SAHP: #fb923c (orange)
- GOV: #7c3aed (purple)
- LI: #ef476f (red)
- NG: #10b981 (green)
- EMS: #e11d48 (pink)

## Key CSS Classes
```
.top-nav              - Header navigation bar
.brand                - Logo + title section
.nav-pill             - Navigation button
.hero                 - Page title section
.controls-row         - Organization select row
.quality-row          - Question count pills
.quality-options      - Radio button group container
.applicant-container  - Form section
.curator-container    - Form section
.generate-btn         - Primary action button
.results-container    - Questions list wrapper
.generated-list       - Ordered list of questions
.empty-state          - No content display
.admin-section        - Admin card container
.tab-nav              - Tab navigation bar
.tab-content          - Tab pane (content)
.question-item        - Individual question card
.question-textarea    - Question edit mode
.curator-item         - Curator list item
.custom-select        - Styled dropdown replacement
.custom-select-list   - Dropdown menu
.message              - Toast notification
```

## Key JavaScript Functions

### Index (Generator)
```javascript
generateQuestions()           // Create question set
renderList(items)             // Display questions
getSelectedOrg()              // Get selected organization
getSelectedQuantity()         // Get question count
generateGoogleFormOutput()    // Create PDF
loadCustomOrganizations()     // Load from localStorage
showOrgManager()              // Show organization modal
saveNewOrganization()         // Create custom org
toggleTheme()                 // Switch light/dark
```

### Admin
```javascript
addMandatoryQuestion()        // Add question
editMandatoryQuestion(idx)    // Start edit mode
saveMandatoryQuestion(idx)    // Save changes
deleteMandatoryQuestion(idx)  // Remove question
addNewCurator()               // Add curator
removeCuratorFromOrg()        // Delete curator
updateSeniorCurator()         // Update senior curator
exportQuestions()             // Export to JSON
importQuestions()             // Import from JSON
switchTab(tabName)            // Change tab view
renderMandatoryQuestions()    // Display questions list
renderOrganizations()         // Display org grid
renderCuratorsList(org)       // Display curator list
```

### CuratorDB (Database)
```javascript
CuratorDB.getCurators(org)           // Get org curators
CuratorDB.addCurator(org, name)      // Add curator
CuratorDB.removeCurator(org, name)   // Delete curator
CuratorDB.setSeniorCurator(name)     // Update senior
CuratorDB.getSeniorCurator()         // Get senior
CuratorDB.exportToJSON()             // Export data
CuratorDB.importFromJSON(json)       // Import data
CuratorDB.resetToDefaults()          // Reset to default
```

## LocalStorage Keys
```
grand_theme                   // Theme preference (light/dark)
curators_database_v2          // Curator data
org_bank_{CODE}_v1            // Custom org questions
org_meta_{CODE}_v1            // Custom org metadata
grand_used_questions_v1::{ORG} // Tracking for questions
```

## Global Variables
```javascript
ALL_QUESTIONS             // Current question pool (array)
window.BANKS              // All org question banks (object)
window.MANDATORY_QUESTIONS // Base questions for all sets
window.CuratorDB          // Curator database API
window.CURATORS           // Legacy curator mapping
window.SENIOR_CURATOR     // Senior curator name
```

## Form Validation Rules
- Organization: Required to generate
- Applicant Name: Optional
- Application URL: Optional (must be valid URL if provided)
- Curator: Auto-populated if in database
- Senior Curator: Auto-populated from database
- Questions: At least 1 required per organization

## PDF Export Format
- Filename: `{ORG}_interview_{ApplicantName}.pdf`
- Page Size: A4 portrait
- Margins: 10mm
- Font: Arial 12px
- Header: Org name + "INTERVIEW" text
- Content: Questions with answer states and notes
- Summary: Table with applicant info and statistics
- Page Breaks: Avoided inside question blocks

## Animations
```css
pillPulse         /* 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) */
badgePop          /* 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) */
fadeIn            /* 0.3s ease */
slideDown         /* 0.3s ease */
spin              /* 900ms linear infinite */
```

## Keyboard Navigation
- **Tab**: Focus next element
- **Shift+Tab**: Focus previous element
- **Enter/Space**: Activate button/link
- **Arrow Keys**: Navigate options (selects, radio groups)
- **Escape**: Close dropdown/modal

## Mobile Breakpoints
- **< 320px**: Stack layouts, reduce text
- **< 420px**: Reduce headings, 90vw selects
- **< 600px**: Single column forms, stack buttons
- **> 820px**: Full 2-column layouts, show all actions

## Theme Toggle Icon Behavior
```
Light Mode: Moon icon visible, Sun hidden
Dark Mode:  Sun icon visible, Moon hidden
```

## Document Structure
```
index.html          - Main generator page
admin.html          - Admin panel
style.css           - All shared styles + theme variables
curator.js          - Curator data mapping
curator-db.js       - Curator database system
mandatory.js        - Mandatory questions pool
FIB.js              - FIB question bank
LSPD.js             - LSPD question bank
SAHP.js             - SAHP question bank
GOV.js              - Government question bank
LI.js               - Lifeinvaider question bank
NG.js               - National Guard question bank
EMS.js              - EMS question bank
```

## State Management
- **Theme**: localStorage
- **Curators**: localStorage (curators_database_v2)
- **Custom Orgs**: localStorage (org_bank_*, org_meta_*)
- **Used Questions**: localStorage (grand_used_questions_v1)
- **UI State**: DOM element properties (no state library)

## Cross-Tab Communication
- **Storage Event**: Watches localStorage changes
- **Custom Event**: 'curatorDbChanged' dispatched on curator updates
- **Listeners**: index.html listens for curator database changes
