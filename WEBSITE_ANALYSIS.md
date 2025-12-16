# Grand Interview - Comprehensive Website Analysis

## 1. LAYOUT STRUCTURE

### Overall Layout Type
- **Primary**: Full-width responsive layout with centered content containers
- **Secondary**: Top navigation bar (header) + main content area with optional sidebars
- **Container**: Max-width 1100px centered with responsive padding (1rem on mobile, 2rem on desktop)

### Header/Top Bar Design
- **Height**: Fixed, minimal (~56px with padding)
- **Background**: Transparent, no visible border-bottom (subtle rgba border: 1px solid rgba(255,255,255,0.03))
- **Content Layout**:
  - **Left**: Brand section with logo badge (44x44px rounded square) + text (title + subtitle)
  - **Center**: Navigation pills (3 main items: Generator, Admin, Analytics)
  - **Right**: Theme toggle button (sun/moon icons)
  - Uses flexbox with space-between alignment
  - Max-width container (1100px) maintains consistency with main content

### Navigation Structure
- **Location**: Top-right of header
- **Type**: Horizontal pill buttons with icons + text
- **Button Style**: 
  - Padding: 0.45rem 0.85rem
  - Border-radius: 8px
  - Transition: all 0.3s ease
  - Active state: background color rgba(255,255,255,0.02), text color changes to var(--text)
  - Inactive state: color var(--muted)
- **Icons**: 18x18px SVG icons displayed inline with text
- **Active Indicator**: Subtle bottom border or background change (not a traditional underline)

### Main Content Area Organization
- **Page layout**: Flex column layout centered on screen
- **Sections from top to bottom**:
  1. **Hero Section**: Title only ("Interview Question")
  2. **Controls Row**: Organization selector (select dropdown)
  3. **Quality Row**: Radio button group (30/50/70 questions)
  4. **Applicant Container**: 2-column form (Applicant Name, Application URL)
  5. **Curator Container**: 2-column form (Curator, Senior Curator) - shown conditionally
  6. **Action Row**: Generate Questions button (centered)
  7. **Print Actions**: Copy and Export PDF buttons
  8. **Results Container**: Empty state or generated questions list

### Sidebar/Secondary Navigation
- **None on index.html** - fully centered, single-column layout
- **Admin page**: Tab navigation (horizontal, below header)
  - Tabs: Mandatory Questions, Organizations, Curators
  - Uses border-bottom styling for active indicator

---

## 2. DESIGN ELEMENTS

### Color Scheme

#### Light Theme (Default)
- **Primary Background**: #f6fbff (light blue)
- **Background Gradient**: linear-gradient(180deg, #f6fbff 0%, #ffffff 100%)
- **Text (Primary)**: #07203a (dark blue)
- **Text (Muted)**: #4b6b86 (medium gray-blue)
- **Surface**: #ffffff (white)
- **Card Background**: rgba(11,102,194,.03) (very light blue)
- **Accent (Primary Action)**: #0b66c2 (bright blue)
- **Accent (Dark)**: #0956a8 (darker blue)
- **Danger**: #dc3545 (red)
- **Input Background**: #ffffff
- **Input Border**: rgba(7,32,58,.12) (subtle dark blue)
- **Input Text**: #07203a
- **Shadow**: rgba(11,102,194,.08) (blue shadow)

#### Dark Theme
- **Primary Background**: #0d1419 (very dark blue-gray)
- **Background Gradient**: linear-gradient(135deg, #080c11 0%, #0d1419 100%)
- **Text (Primary)**: #ecf2f9 (off-white blue)
- **Text (Muted)**: #c5d9ec (light gray-blue)
- **Surface**: #151d2a (dark blue)
- **Card Background**: rgba(236,242,249,.08)
- **Accent (Primary)**: #5fb3ff (bright light blue)
- **Accent (Dark)**: #3b9ef5
- **Danger**: #ff7373 (lighter red)
- **Input Background**: #1a2333 (dark)
- **Input Border**: rgba(236,242,249,.15)
- **Input Text**: #ecf2f9
- **Shadow**: rgba(0,0,0,.6)

### Button Styles

#### Primary Buttons (Generate Questions)
- **Shape**: Pill/rounded (border-radius: 999px)
- **Background**: Linear gradient (180deg, var(--accent) to var(--accent-dark))
- **Color**: White text
- **Padding**: 0.7rem 1.6rem
- **Border**: None
- **Box Shadow**: 0 10px 26px rgba(11,102,194,0.12)
- **Hover State**: 
  - Transform: translateY(-3px)
  - Box Shadow: 0 18px 40px rgba(11,102,194,0.14)
- **Active State**: scale(0.98)
- **Font Weight**: 700
- **Font Size**: 1rem
- **Contains**: Spinner (16x16px, 3px border) + text
- **Disabled State**: opacity 0.55, cursor not-allowed, no transform

#### Secondary Buttons (Navigation Pills)
- **Shape**: Rounded rectangle (border-radius: 8px)
- **Background**: transparent or var(--surface)
- **Color**: var(--muted) or var(--text) when active
- **Padding**: 0.45rem 0.85rem
- **Border**: 1px solid var(--input-border)
- **Hover**: background var(--accent), color white, transform translateY(-2px)
- **Active**: Different background color (semi-transparent), text color var(--text)

#### Icon Buttons (Edit, Delete)
- **Shape**: Square with rounded corners (36x36px)
- **Background**: var(--surface)
- **Border**: None
- **Padding**: 0
- **Display**: Flex center
- **Color**: var(--text)
- **Hover**: background var(--accent), color white, transform translateY(-2px)
- **Danger variant**: background var(--danger) on hover

#### Copy & Export PDF Buttons
- **Copy Button**: 
  - Inline-flex with gap 0.5rem
  - Padding: 0.5rem 1rem
  - Border-radius: 8px
  - Border: 1px solid rgba(255,255,255,0.08)
  - Background: transparent
  - Color: var(--text)
  - Hover: background rgba(34,211,238,0.1), border-color rgba(34,211,238,0.3)
- **Export PDF Button**:
  - Background: linear-gradient(180deg, #2563eb, #1d4ed8)
  - Color: white
  - Border: 0
  - Hover: background linear-gradient(180deg, #1d4ed8, #1e40af), transform translateY(-3px), box-shadow 0 8px 20px rgba(37,99,235,0.3)

#### Quality Selection Pills (Radio Buttons)
- **Layout**: Horizontal flex with gap 0.9rem
- **Background**: transparent
- **Label Styling**:
  - Display: flex column, align-items center, justify-content center
  - Padding: 0.4rem 0.6rem
  - Border-radius: 16px
  - Min-width: 80px, max-width: 100px
  - Min-height: 56px
  - Background: var(--surface)
  - Border: 2px solid var(--input-border)
  - Color: var(--muted)
  - Transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Checked Label**:
  - Background: transparent
  - Color: var(--accent)
  - Transform: scale(1.08)
  - Box-shadow: 0 6px 20px rgba(45,132,255,0.25)
  - Border: 2px solid var(--accent)
  - Animation: pillPulse 0.4s
- **Hover Label**:
  - Border-color: rgba(95,179,255,0.4)
  - Background: rgba(95,179,255,0.05)
  - Box-shadow: 0 4px 12px rgba(95,179,255,0.1)
- **Number Display**:
  - Width/Height: 42px (when checked)
  - Font-size: 18px
  - Font-weight: 700
  - Border-radius: 999px
  - Animation: badgePop 0.4s

### Form Elements

#### Input Fields
- **Type**: text, url, email
- **Padding**: 0.6rem
- **Border**: 1px solid var(--input-border) or 1.5px depending on context
- **Border-radius**: 6px or 8px
- **Background**: var(--input-bg)
- **Color**: var(--input-text)
- **Font-size**: 1rem
- **Transition**: all 0.12s ease
- **Focus State**:
  - Outline: none
  - Border-color: var(--accent)
  - Box-shadow: 0 0 0 3px rgba(95,179,255,0.15) or 0 0 0 3px rgba(11,102,194,0.1)
  - Background: var(--surface)

#### Textareas
- **Padding**: 0.5rem to 0.8rem
- **Border**: 1px solid var(--input-border)
- **Border-radius**: 6px
- **Background**: var(--input-bg)
- **Color**: var(--input-text)
- **Font-size**: 0.9rem to 1rem
- **Font-family**: inherit or monospace (for code areas)
- **Min-height**: 60px to 150px
- **Resize**: vertical
- **Focus**: border-color var(--accent), box-shadow 0 0 0 3px rgba(95,179,255,0.1)

#### Select Dropdowns (Native)
- **Width**: 380px, max-width 90vw
- **Padding**: 0 1rem
- **Height**: var(--control-height) = 56px
- **Font-size**: 1rem
- **Border-radius**: 10px
- **Border**: 1px solid var(--input-border)
- **Background**: var(--input-bg) with custom arrow SVG
- **Background-image**: Custom dropdown arrow (SVG)
- **Background-position**: right 12px center
- **Background-size**: 14px
- **Box-shadow**: 0 6px 18px var(--shadow)
- **Cursor**: pointer
- **Transition**: all 0.12s ease
- **Focus**: outline none, border-color var(--accent), box-shadow 0 12px 28px var(--shadow)
- **Hover**: transform translateY(-2px), box-shadow 0 8px 22px var(--shadow)
- **Text-align**: center

#### Custom Select Dropdown (Styled Replacement)
- **Width**: 380px, max-width 90vw
- **Background**: var(--surface)
- **Border-radius**: 10px
- **Border**: 1px solid rgba(255,255,255,0.03) to 0.04
- **Box-shadow**: 0 8px 20px rgba(2,6,23,0.25)
- **Value Section**:
  - Display: flex with gap 0.75rem
  - Padding: 0 12px
  - Height: var(--control-height) = 56px
  - Font-weight: 700
  - Color: var(--text)
- **List Container**:
  - Position: absolute
  - Margin-top: 6px
  - Max-height: 260px
  - Overflow-y: auto
  - Border-radius: 10px
  - Padding: 8px 6px
  - Box-shadow: 0 12px 40px rgba(2,6,23,0.6)
  - Opacity animation: fade in/out 0.18s ease
  - Transform animation: translateY 0.18s cubic-bezier(0.2, 0.9, 0.2, 1)
- **List Items**:
  - Display: flex with gap 0.6rem
  - Padding: 0.6rem 0.9rem
  - Border-radius: 8px
  - Color: var(--muted)
  - Cursor: pointer
  - Hover: background rgba(95,179,255,0.04), color var(--text)
  - Selected: background rgba(95,179,255,0.06), color var(--text), font-weight 700
- **Colored Dots**: Before each option (12x12px, border-radius 50%)
  - FIB: #2b8cff (blue)
  - LSPD: #06b6d4 (cyan)
  - SAHP: #fb923c (orange)
  - GOV: #7c3aed (purple)
  - LI: #ef476f (red)
  - NG: #10b981 (green)
  - EMS: #e11d48 (pink)

#### Radio Button Groups
- **Role**: radiogroup
- **Display**: flex with gap
- **Input**: hidden (position absolute, opacity 0)
- **Label**: becomes the clickable element

#### Checkboxes
- **Not prominently featured** - minimal usage

### Typography

#### Headings
- **H1 (Page Title)**:
  - Font-size: 28px
  - Font-weight: 700
  - Line-height: 1.1
  - Letter-spacing: 0.4px
  - Text-align: center
  - Color: var(--text)
  - Margin: 0

- **H2 (Section Headers)**:
  - Font-size: 1.1rem to 1.5rem
  - Font-weight: 700
  - Color: var(--text)
  - Margin: 0 0 1rem 0

- **H3 (Subsections)**:
  - Font-size: 1rem to 1.05rem
  - Font-weight: 600
  - Color: var(--muted) or var(--text)
  - Text-align: center
  - Margin: 0

#### Body Text
- **Font-family**: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- **Font-size**: 1rem (default), 0.95rem (regular), 0.9rem (small), 0.85rem (smaller)
- **Line-height**: 1.4 to 1.5
- **Color**: var(--text) for primary, var(--muted) for secondary

#### Labels
- **Font-weight**: 600
- **Font-size**: 0.95rem to 1rem
- **Color**: var(--text) or var(--muted)
- **Display**: block
- **Margin-bottom**: 0.4rem to 0.5rem

#### Stat Values (Admin)
- **Font-size**: 2rem
- **Font-weight**: 800
- **Margin**: 0.5rem 0

### Spacing/Padding Patterns

#### Global Scale
- **Control Height**: 56px (buttons, inputs, selects)
- **Page Padding**: 2rem (desktop), 1rem (mobile)
- **Content Max-width**: 1100px
- **Gap (flex)**: 0.5rem to 1.5rem depending on context

#### Container Spacing
- **Section Margin-bottom**: 1.5rem to 2rem
- **Section Padding**: 1.5rem to 2rem
- **Form Group Margin**: 1rem
- **Form Group Gap**: 0.4rem

#### Component Spacing
- **Button Padding**: 0.6rem to 0.8rem horizontal, 0.7rem to 0.8rem vertical
- **Input Padding**: 0.6rem
- **Textarea Padding**: 0.5rem to 0.8rem
- **List Item Padding**: 0.8rem to 1rem
- **Card Padding**: 1rem to 2rem

#### Grid Systems
- **Quality Options**: grid with auto-fit, minmax(150px, 1fr), gap 1rem
- **Organizations Grid**: grid with repeat(auto-fill, minmax(280px, 1fr)), gap 1.5rem
- **Questions Grid**: gap 0.8rem

### Icons Used and Style
- **Size**: Primarily 16x16px, 18x18px, 20x20px, 24x24px
- **Type**: SVG, inline
- **Stroke**: 2px stroke-width (most icons)
- **Fill**: Some filled, mostly stroked
- **Color**: currentColor (inherits from parent)
- **Icons Used**:
  - Home icon (house with roof line)
  - Settings/gear icon
  - Analytics/chart icon
  - Sun icon (theme toggle, light mode)
  - Moon icon (theme toggle, dark mode)
  - Chevron down (dropdown indicator)
  - Plus icon (add)
  - Delete/trash icon
  - Edit/pencil icon
  - Download arrow icon
  - Upload arrow icon
  - People/users icon
  - Copy/clipboard icon
  - Save/file icon
  - Reset/refresh icon
  - Check mark (selectors)
  - X/close icon

### Card/Container Styling

#### Standard Card
- **Background**: var(--surface) or var(--card-bg)
- **Border**: 1px solid var(--input-border)
- **Border-radius**: 8px to 10px
- **Padding**: 1rem to 1.5rem
- **Box-shadow**: 0 2px 8px var(--shadow)
- **Transition**: all 0.2s ease
- **Hover**: border-color var(--accent), box-shadow 0 2px 8px var(--shadow)

#### Empty State Card
- **Width**: 100%, max-width 860px
- **Margin**: 1.6rem auto
- **Padding**: 2.6rem
- **Border-radius**: 12px
- **Background**: #f1f7fb (light) or var(--card-bg) (dark)
- **Border**: 1px solid rgba(11,102,194,0.06)
- **Display**: flex column, align-items center, gap 0.6rem
- **Icon**: 56x56px circle, background #e9f4ff, color var(--muted), font-size 20px

#### Modal/Overlay
- **Position**: fixed, top 0, left 0, width 100%, height 100%
- **Background**: rgba(0,0,0,0.6)
- **Display**: flex, align-items center, justify-content center
- **Z-index**: 1000 to 1200
- **Inner Container**:
  - Background: var(--card-bg)
  - Padding: 2rem
  - Border-radius: 10px
  - Box-shadow: 0 10px 40px rgba(0,0,0,0.3)
  - Max-width: 600px
  - Width: 90%
  - Max-height: 80vh
  - Overflow-y: auto

### Border Radius Values
- **Extra small**: 4px (some icons, small elements)
- **Small**: 6px (form inputs in some contexts)
- **Medium**: 8px (buttons, cards, tabs)
- **Large**: 10px (sections, modals, selects)
- **Extra large**: 12px (empty state card)
- **Pill/Full**: 16px to 999px (pill buttons, toggle switches)

### Shadow/Elevation Styles

#### Shadow Palette
- **Light Shadow**: 0 2px 8px var(--shadow)
- **Medium Shadow**: 0 8px 22px var(--shadow)
- **Heavy Shadow**: 0 10px 26px rgba(11,102,194,0.12)
- **Deep Shadow**: 0 12px 40px rgba(2,6,23,0.6)
- **Inset Shadow**: inset 0 -6px 24px rgba(0,0,0,0.12) (dark theme selected button)
- **Glow Effect**: 0 0 10px rgba(11,102,194,0.4) or 0 0 10px rgba(220,53,69,0.4) (for answer buttons)

#### Elevation States
- **Default**: 0 2px 8px shadow
- **Hover**: 0 4px 12px shadow (buttons), 0 8px 22px shadow (larger elements)
- **Active/Pressed**: 0 0px 0px (appears pressed down)
- **Focus**: 0 12px 28px shadow + outline

---

## 3. PAGES/SECTIONS VISIBLE

### Main Page (index.html)

#### Top Navigation Section
- **Logo Badge**: 44x44px rounded square with "LOGO" text
- **Brand Text**: "Grand Interview" (title) + "Question Management" (subtitle)
- **Nav Pills**: Generator (active), Admin, Analytics
- **Theme Toggle**: Sun/Moon icon button

#### Hero Section
- **Title**: "Interview Question"
- **Subtitle**: Optional sub-heading (not shown in default state)

#### Organization Selection Section
- **Label**: "Select Organization"
- **Control**: Custom styled dropdown (380px width, 56px height)
- **Options**: 
  - Federal Investigation Bureau (FIB) - blue dot
  - Los Santos Police Department (LSPD) - cyan dot
  - San Andreas Highway Patrol (SAHP) - orange dot
  - Government (GOV) - purple dot
  - Lifeinvaider (LI) - red dot
  - National Guard (NG) - green dot
  - Emergency Medical Service (EMS) - pink dot

#### Question Count Selection Section
- **Label**: "Question Count"
- **Control**: 3-pill radio button group
  - Pill 1: "30" / "Quick interview"
  - Pill 2: "50" / "Standard"
  - Pill 3: "70" / "Comprehensive"
- **Default**: 30 selected

#### Applicant Information Section
- **Title**: "Applicant Information"
- **Fields**: 2-column layout
  - Applicant Name (text input, placeholder "Enter applicant name")
  - Application URL (url input, placeholder "https://example.com/application")
- **Width**: max-width 860px, centered
- **Background**: rgba(95,179,255,.05)
- **Border**: 2px solid var(--input-border)

#### Curator Information Section
- **Title**: "Curator Information"
- **Visibility**: Only shown when organization selected
- **Fields**: 2-column layout
  - Curator (text input, placeholder "Enter curator name")
  - Senior Curator (text input, placeholder "Enter senior curator name")
- **Auto-population**: Fields auto-populate from CuratorDB when org selected
- **Read-only**: Fields become disabled/read-only if data found in database

#### Generate Button Section
- **Button**: Large primary pill button "Generate Questions"
- **Spinner**: Circular spinner (3px border) shown during generation
- **State**: Disabled if no organization selected
- **Alignment**: Centered, grid with 3 columns (action-left, action-center, action-right)

#### Action Buttons Section
- **Copy Button**: Inline button with copy icon, shown after generation
- **Export PDF Button**: Inline button with download icon, shown after generation
- **Alignment**: Centered flex with gap 0.75rem

#### Empty State Section
- **Icon**: "?" in blue circle (56x56px)
- **Title**: "No Questions Generated"
- **Message**: "Select an organization and click 'Generate Questions' to create your interview question set."
- **Display**: Visible by default, hidden after generation

#### Results Section
- **Title**: "Questions" (hidden by default)
- **Container**: Numbered ordered list with light blue background
- **List Items** (after generation):
  - Question number and text
  - Two answer buttons: "Correct" (blue border) and "Incorrect" (red border)
  - Notes textarea (placeholder "Add notes or observations...")
  - Interactive: buttons toggle background color when clicked
  - Minimum height: 60px for textarea

---

### Admin Page (admin.html)

#### Header Section
- **Left**: Back arrow + "Admin Panel" title + description
- **Right**: Export button, Import button, Reset button

#### Message Container
- **Position**: Below header
- **Messages**: Success (green), Error (red), Info (blue)
- **Animation**: slideDown 0.3s ease
- **Duration**: Auto-hide after 4000ms

#### Tab Navigation
- **Tabs**:
  1. Mandatory Questions (default active)
  2. Organizations
  3. Curators (with icon)
- **Style**: Border-bottom for active tab, color change
- **Transition**: fadeIn 0.3s ease

#### TAB 1: Mandatory Questions

##### Section Header
- **Title**: "Mandatory Questions" + count badge
- **Description**: "These questions will appear at the beginning of every generated set."
- **Buttons**:
  - "Add Question" (blue pill button with + icon)
  - "Save" (green pill button with save icon)

##### Add Question Form (Hidden by Default)
- **Textarea**: "New Question" (placeholder "Enter question...", min-height 80px)
- **Buttons**: Cancel (gray) and Add (blue)
- **Background**: var(--card-bg), 1px border
- **Border-radius**: 8px

##### Questions Grid
- **Layout**: Grid of question items
- **Question Item**:
  - Display: grid with 2 columns (1fr, auto)
  - Left: Question number + question text
  - Right: Action buttons (Edit icon, Delete icon)
  - Background: var(--card-bg)
  - Border: 1px solid var(--input-border)
  - Border-radius: 8px
  - Padding: 1rem
  - Hover: border-color var(--accent), box-shadow

##### Edit State
- **Textarea**: Full-width, 2px blue border, min-height 100px
- **Action Buttons**: 
  - Save (green) with save icon
  - Cancel (gray) with X icon
- **Flex layout**: Row, gap 0.6rem, justify-content flex-end

#### TAB 2: Organizations

##### Organizations Grid
- **Layout**: Grid with repeat(auto-fill, minmax(280px, 1fr)), gap 1.5rem
- **Card per Org**:
  - Background: var(--surface)
  - Border: 1px solid var(--input-border)
  - Border-radius: 10px
  - Padding: 1.5rem
  - Content:
    - Org code (h3): "FIB", "LSPD", etc.
    - Full name (p): "Federal Investigation Bureau", etc.
    - Count: "X Questions"
    - Edit button (blue)
  - Cursor: pointer
  - Hover: border-color var(--accent), box-shadow

#### TAB 3: Curators Management

##### Senior Curator Section
- **Input + Button Layout**: flex with gap 0.5rem
- **Input**: Full-width (flex 1), placeholder "Senior curator name"
- **Button**: "Update" (blue)
- **Background**: var(--card-bg), 1px border, 8px border-radius

##### Organization Selector Section
- **Label**: "Select Organization"
- **Select**: Full-width dropdown with 7 org options
- **Padding**: 0.6rem
- **Background**: var(--input-bg)

##### Curators List Container (Hidden Until Org Selected)

###### Container Header
- **Title**: Organization name (e.g., "FIB Curators")
- **Margin**: 0 0 1rem 0

###### Add Curator Section
- **Input + Button Layout**: flex with gap 0.5rem
- **Input**: Full-width, placeholder "Enter curator name..."
- **Button**: "+ Add" (blue)

###### Curators List
- **Layout**: Grid with gap 0.5rem, max-height 400px, overflow-y auto
- **Curator Item**:
  - Display: grid with 2 columns (1fr, auto)
  - Left: Curator name (bold)
  - Right: Delete button (trash icon)
  - Background: var(--card-bg)
  - Border: 1px solid var(--input-border)
  - Border-radius: 6px
  - Padding: 0.8rem
  - Hover: Delete button background changes to danger color

---

## 4. INTERACTIVE FEATURES

### Navigation Behavior
- **Page Navigation**: Clicking nav pills navigates between pages
  - Generator pill: Links to index.html (home)
  - Admin pill: Links to admin.html
  - Analytics pill: Not yet implemented (stub)
- **Tab Switching**: Click tab button to switch between tab-content sections
  - Uses switchTab() function
  - Adds/removes .active class
  - Smooth fadeIn animation
- **Back Button**: Arrow button on admin page navigates back to index.html

### Button Functionality

#### Generate Questions Button
- **Primary Action**: Triggers generateQuestions() on click
- **Loading State**:
  - Adds .loading class
  - Shows spinner with animation (spin 900ms linear infinite)
  - Changes text to "Generating..."
  - 600ms delay to show loading state
- **Disabled State**: Disabled if no organization selected
- **After Generation**:
  - Removes loading state
  - Renders questions list
  - Shows Copy and Export PDF buttons
  - Hides empty state

#### Copy Button
- **Action**: Copies all generated questions to clipboard
- **Feedback**: Text changes to "Copied!" for 2000ms
- **Fallback**: Uses deprecated execCommand if navigator.clipboard unavailable
- **Extraction**: Gets text from question divs in the generated list

#### Export PDF Button
- **Action**: Generates PDF with formatted questions, answers, and notes
- **Content**:
  - Header with org name and "INTERVIEW"
  - All questions with answer states (Correct/Incorrect/Unmarked)
  - Notes for each question
  - Summary table with applicant info, counts
- **Library**: html2pdf.js (CDN)
- **Filename**: ${ORG}_interview_${ApplicantName}.pdf
- **Page Format**: A4 portrait, 10mm margins, with page-break-inside-avoid for questions

#### Answer Buttons (True/False)
- **Correct Button**: 
  - Click toggles background to var(--accent), text to white
  - Adds glow effect: 0 0 10px rgba(11,102,194,0.4)
  - Deselects Incorrect button
- **Incorrect Button**:
  - Click toggles background to var(--danger), text to white
  - Adds glow effect: 0 0 10px rgba(220,53,69,0.4)
  - Deselects Correct button
- **State Persistence**: Stored in button styles (not persisted to storage)

#### Edit/Delete Buttons (Admin)
- **Edit Button**: 
  - Converts question item to edit mode
  - Shows textarea with question text
  - Replaces action buttons with Save/Cancel
  - Clears styling when canceled
- **Delete Button**: 
  - Confirmation dialog
  - Removes item from data
  - Re-renders list
- **Add Button**: 
  - Toggles form visibility
  - Adds new question to list
  - Resets form
  - Shows success message

### Form Interactions

#### Organization Select Dropdown
- **Native Select**: Hidden (position absolute, opacity 0)
- **Custom Dropdown**: 
  - **Open/Close**: Click to toggle open state
  - **Keyboard Navigation**:
    - Arrow Down/Up: Navigate list items
    - Enter/Space: Select item
    - Escape: Close list
  - **Mouse Selection**: Click item to select
  - **Auto-sync**: Native select stays in sync
  - **Auto-close**: Closes after selection
  - **Scroll**: Scrollable when items exceed 260px max-height

#### Quality Selection Radio Buttons
- **Keyboard Navigation**:
  - Arrow Right/Down: Select next radio
  - Arrow Left/Up: Select previous radio
  - Wraps around ends
- **Mouse**: Click label to select radio
- **Visual Feedback**: Checked radio shows accent color and scale(1.08)

#### Organization Change Handler
- **Auto-actions** when org selected:
  - Fetches questions from BANKS[org]
  - Populates curator fields with CuratorDB data
  - Makes curator fields read-only if data found
  - Shows curator container
  - Updates generated questions to use org-specific pool
- **Auto-actions** when org cleared:
  - Hides curator container
  - Clears curator fields
  - Makes curator fields editable

#### Form Validation
- **Organization**: Required before generation
- **Mandatory Fields**: None for applicant/curator (optional)
- **Alerts**: Shows alert() for missing required data

### Page Transitions
- **Fade In/Out**: Tab content uses animation: fadeIn 0.3s ease
- **Opacity/Transform**: Some buttons use transform translateY for 3D effect
- **Smooth Scrolling**: No explicit scroll behavior defined (browser default)

### Animations and Effects

#### Button Animations
- **Hover Effect**: 
  - translate(Y, -2px to -3px)
  - Shadow increases
  - Duration: 0.2s ease
- **Active/Press**: scale(0.98)
- **Loading Spinner**: 
  - Animation: spin 900ms linear infinite (rotate 360deg)
  - 3px border, transparent except top
- **Pill Pulse** (quality selection):
  - 0%: scale(1)
  - 50%: scale(1.12)
  - 100%: scale(1.08)
  - Duration: 0.4s
- **Badge Pop** (quality selection number):
  - 0%: scale(0.8), opacity 0
  - 50%: scale(1.15)
  - 100%: scale(1), opacity 1
  - Duration: 0.4s

#### Dropdown Animation
- **Open**: 
  - opacity: 0 → 1
  - transform: translateY(-6px) → translateY(0)
  - Duration: 0.18s ease
- **Close**: 
  - Reverse of open
  - Pointer-events disabled during transition

#### Message Animation
- **Slide Down**: 
  - opacity: 0 → 1
  - transform: translateY(-10px) → translateY(0)
  - Duration: 0.3s ease

#### Theme Toggle Animation
- **Icon Swap**: Instant display change (no animation)
- **Button Hover**: scale(1.08), box-shadow increase

### Custom Select Opening/Closing
- **Click outside**: Closes dropdown
- **Arrow key**: Opens dropdown if closed
- **Click on control**: Toggles open/close
- **Animation**: Smooth fade + slide using opacity and transform

### Organization Bank Auto-loading
- **localStorage keys**: org_bank_{CODE}_v1 and org_meta_{CODE}_v1
- **Auto-sync**: On page load, scans localStorage for custom orgs
- **Mutation Observer**: Watches orgSelect options for changes
- **Custom orgs**: Added to dropdown automatically

---

## 5. SPECIFIC ADMIN FEATURES

### Question Management

#### Display Format
- **Numbered List**: Questions shown as ordered list with index
- **Cards**: Each question in a card container with:
  - Number + text on left
  - Edit and delete buttons on right
  - Hover effects for interactivity

#### Add Questions
- **Modal/Inline Form**: Initially hidden form toggles visible
- **Form Fields**: Single textarea for question text
- **Actions**: Cancel button (clears form, hides), Add button (validates, adds to list)
- **Validation**: Question cannot be empty
- **Feedback**: Success message after adding

#### Edit Questions
- **In-place Editing**: Question card converts to edit mode
- **Control**: Textarea replaces text display
- **Actions**: Save (updates data and re-renders) or Cancel (discards changes)
- **Visual State**: Card gets .editing class for styling

#### Delete Questions
- **Confirmation**: confirm() dialog before deletion
- **Permanent**: Removes from MANDATORY_QUESTIONS array
- **Feedback**: Success message after deletion

#### Search/Filter
- **Not Visible**: No search box in current implementation
- **Could be added**: Would filter list by text match

#### Bulk Operations
- **Export**: exportQuestions() creates JSON file with all data
- **Import**: importQuestions() from JSON file
- **Reset**: resetToDefaults() restores original question banks

---

### Curator Management

#### Display Format
- **Senior Curator**: Single input field with Update button
- **Organization Curators**: 
  - Org selector dropdown
  - List of curators (when org selected)
  - Each curator in a small card with delete button

#### Add Curators
- **Form**: Input field + "Add" button
- **Only Visible**: When organization selected
- **Validation**: Name cannot be empty
- **Duplicate Prevention**: Case-insensitive check prevents duplicates
- **Feedback**: Success message after adding

#### Edit Curators
- **Senior Curator**: Can be updated by changing input and clicking Update
- **Organization Curators**: No in-place editing (delete and re-add)

#### Delete Curators
- **Confirmation**: confirm() dialog
- **Action**: Removes curator from org list
- **Visual**: Item disappears from list
- **Feedback**: Success message

#### Add Organization Curators
- **Form**: Text input + button
- **Trigger**: Select an organization from dropdown
- **Validation**: Name not empty, not duplicate
- **Scope**: Curators are org-specific

#### Curator Sync
- **localStorage Key**: curators_database_v2
- **Persistence**: All changes saved to localStorage
- **Cross-tab Sync**: 
  - Storage event listener watches for changes from other tabs
  - Custom event 'curatorDbChanged' dispatched on updates
  - Index.html page listens and syncs curator display

---

### Organization Management

#### Display Format
- **Grid**: Organizations shown as card grid
- **Card Content**:
  - Org code (FIB, LSPD, etc.)
  - Full name
  - Question count
  - Edit button

#### Organization Data
- **Pre-defined Orgs**: 7 organizations (FIB, LSPD, SAHP, GOV, LI, NG, EMS)
- **Storage**: Questions stored in window.BANKS[org] (from JS files)
- **localStorage**: Custom orgs can be stored as org_bank_{CODE}_v1

#### Edit Organization
- **Not Fully Implemented**: Modal or edit page could be added
- **Feature Ready**: Button exists, click shows info message
- **Could Include**: Add/edit/delete questions for org

#### Custom Organizations
- **Creation**: Modal form in index.html (currently hidden)
- **Functions**: showOrgManager(), closeOrgManager(), saveNewOrganization()
- **Form Fields**:
  - Organization Name (short code, e.g., "FIRE")
  - Full Organization Name
  - Questions (textarea, one per line)
- **Validation**: Code and name required, at least one question
- **Storage**: Saved to localStorage with org_bank_ and org_meta_ keys
- **Auto-sync**: Added to select dropdown automatically

#### Organization Question Banks
- **Source 1 - Pre-defined**: 
  - FIB.js, LSPD.js, SAHP.js, GOV.js, LI.js, NG.js, EMS.js
  - Contains window.BANKS[ORG] = [questions...]
- **Source 2 - Mandatory**: 
  - mandatory.js contains MANDATORY_QUESTIONS
  - Prepended to all generated sets
- **Source 3 - Custom**: 
  - Created via Organization Manager modal
  - Stored in localStorage

---

### Search/Filter Functionality

#### Current Implementation
- **Not Visible**: No search UI in current version
- **Could be Added**: Would need:
  - Input field in question list header
  - Filter logic on display
  - Highlight matching terms

#### Potential Search Targets
- Question text
- Organization name
- Curator name

---

### Add/Edit/Delete Capabilities

#### Add New Items
- **Mandatory Questions**: 
  - Click "Add Question" button
  - Enter text in textarea
  - Click "Add" button
  - Uses addMandatoryQuestion() function
  
- **Curators**:
  - Select organization
  - Enter curator name
  - Click "+ Add" button
  - Uses addNewCurator() function

- **Organizations**:
  - Click "Add New Organization" button (modal)
  - Enter code, full name, questions
  - Click "Create Organization" button
  - Uses saveNewOrganization() function

#### Edit Items
- **Mandatory Questions**:
  - Click edit icon on question card
  - Card converts to edit mode with textarea
  - Make changes
  - Click "Save" button
  - Uses editMandatoryQuestion() and saveMandatoryQuestion()
  
- **Senior Curator**:
  - Change text in input field
  - Click "Update" button
  - Uses updateSeniorCurator() function

#### Delete Items
- **Mandatory Questions**:
  - Click delete icon on question card
  - Confirmation dialog appears
  - Click "OK" to delete
  - Uses deleteMandatoryQuestion() function
  
- **Curators**:
  - Click delete icon next to curator name
  - Confirmation dialog appears
  - Uses removeCuratorFromOrg() function

#### Cascading Operations
- **Reset to Defaults**: Resets all questions and curators
- **Export/Import**: Bulk operations for all data

---

### Export/Import Features

#### Export Functionality
- **What's Exported**: All questions organized by category
  - Mandatory questions
  - Organization question banks
  - Curator assignments
- **Format**: JSON file
- **Filename**: `questions_YYYY-MM-DD.json`
- **User Action**: Click "Export" button
- **Function**: exportQuestions()

#### Import Functionality
- **What's Imported**: JSON file with question structure
- **Process**:
  1. Click "Import" button
  2. Hidden file input triggered
  3. Select JSON file
  4. File parsed and validated
  5. Data loaded into allQuestions
  6. Views re-rendered
- **Validation**: Basic JSON parsing, structure check
- **Error Handling**: Alert if invalid JSON
- **Function**: importQuestions()

#### PDF Export (from Generator)
- **Triggered**: Click "Export PDF" button after generating questions
- **Content**: 
  - Organization name and "INTERVIEW" header
  - All questions with answer selections
  - Notes for each question
  - Summary table:
    - Applicant name
    - Application URL
    - Curator names
    - Question statistics (correct, incorrect, unanswered)
- **Styling**: 
  - Professional formatting
  - Page break avoidance for questions
  - Color-coded answers (blue for correct, red for incorrect)
  - Blue left border on notes
- **Library**: html2pdf.js
- **Filename**: `{ORG}_interview_{ApplicantName}.pdf`

---

## 6. RESPONSIVE DESIGN BREAKPOINTS

### Breakpoints
- **Very Small**: < 320px
  - Quality pills stack: flex-wrap wrap
- **Small**: < 420px
  - Heading size reduced to 1.5rem
  - Select width: 90vw
- **Medium**: < 600px
  - Form row: 1 column instead of 2
  - Header layout: flex-direction column
- **Large**: > 820px
  - Full 2-column layouts enabled
  - Side-by-side controls visible

### Responsive Behavior
- **Padding**: Reduces from 2rem to 1rem on mobile
- **Max-widths**: Enforced on containers to prevent too-wide content
- **Flexbox Wrapping**: Multiple elements wrap on small screens
- **Touch Targets**: Buttons maintain 36-44px minimum height for touch
- **Text Scaling**: Uses relative units (rem, em) for zoom-friendly sizing

---

## 7. THEME SYSTEM

### Theme Toggle
- **Location**: Top-right of header
- **Control**: Sun/Moon icon button
- **Storage**: localStorage key 'grand_theme'
- **Default**: System preference (prefers-color-scheme media query)

### CSS Variables
- **Root level** (--variable-name):
  - Colors (--bg, --text, --accent, --danger, etc.)
  - Elevations (--shadow)
  - Spacing (--control-height, --page-scale)
  - Gradients (--bg-gradient)

### Dark Theme Implementation
- **Selector**: :root[data-theme='dark']
- **All colors inverted**: Light backgrounds → dark, vice versa
- **Contrast maintained**: Ensures readability in both modes

---

## SUMMARY

This is a modern, professional **Interview Question Management System** with:

1. **Clean, centered layout** with top navigation
2. **Comprehensive color system** with light/dark theme support
3. **Polished, interactive UI** with smooth animations and transitions
4. **Admin panel** for managing questions, curators, and organizations
5. **PDF export** with formatted interview sheets
6. **localStorage persistence** for custom data
7. **Accessibility features**: ARIA labels, keyboard navigation, focus states
8. **Responsive design** that works on mobile, tablet, and desktop
9. **Curator database system** with cross-tab synchronization
10. **Question bank management** (add/edit/delete operations)

All design choices use CSS variables for theme support, making it easy to customize colors and spacing globally.
