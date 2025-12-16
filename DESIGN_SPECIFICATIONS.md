# Grand Interview - Visual Design Specifications

## Design System Overview

### Design Philosophy
- **Modern & Professional**: Clean, minimal interface with contemporary styling
- **Accessible**: WCAG compliant colors, keyboard navigation, semantic HTML
- **Responsive**: Mobile-first design that scales gracefully
- **Theme-aware**: Light and dark modes with automatic contrast adjustment
- **Delightful**: Smooth animations and micro-interactions

---

## Button Design System

### Button Hierarchy

#### Level 1: Primary Action Buttons
**Used for**: Main user actions (Generate, Save, Add)
```
Border Radius: 999px (pill shape)
Padding: 0.7rem 1.6rem
Font Weight: 700
Font Size: 1rem
Background: Linear gradient (top to bottom)
  Light: #0b66c2 → #0956a8
  Dark: #5fb3ff → #3b9ef5
Color: White
Box Shadow: 0 10px 26px rgba(11,102,194,0.12)
Transition: all 0.18s ease

States:
  Default:    gradient background, normal shadow
  Hover:      transform translateY(-3px), shadow 0 18px 40px
  Active:     scale(0.98)
  Disabled:   opacity 0.55, cursor not-allowed, no effects
  Focus:      outline 3px solid rgba(11,102,194,.18) with 3px offset
```

#### Level 2: Secondary Action Buttons
**Used for**: Less important actions (Cancel, Back, Edit)
```
Border Radius: 8px
Padding: 0.6rem 1.2rem
Font Weight: 600
Font Size: 0.95rem
Background: var(--surface)
Color: var(--text)
Border: 1px solid var(--input-border)
Box Shadow: None
Transition: all 0.2s ease

States:
  Default:    light background, subtle border
  Hover:      background var(--accent), color white, 
              border-color var(--accent), transform translateY(-2px)
  Active:     scale(0.98)
  Focus:      outline similar to primary
```

#### Level 3: Icon Buttons
**Used for**: Small actions in compact spaces (Edit, Delete in lists)
```
Shape: Square with rounded corners
Size: 36x36px
Border Radius: 6px
Background: var(--surface)
Color: var(--text)
Border: None
Padding: 0 (flex centered)
Display: flex, align-items center, justify-content center
Transition: all 0.2s ease

States:
  Default:    surface background, text color
  Hover:      background var(--accent), color white, 
              transform translateY(-2px)
  Focus:      box-shadow 0 0 0 3px rgba(11,102,194,.2)
  
Danger variant (delete):
  Hover:      background var(--danger) instead of accent
```

#### Level 4: Text/Ghost Buttons
**Used for**: Navigation, links, lightweight actions
```
Background: transparent
Color: var(--text) or var(--muted)
Border: None or subtle
Padding: Minimal
Transition: all 0.2s ease

States:
  Default:    text only, no background
  Hover:      color var(--accent), background subtle
  Underline:  Optional decoration
```

### Button with Icons
```
Display: inline-flex
Gap: 0.6rem
Align-Items: center
Justify-Content: center
Icon Size: 16px-20px
Icon Color: currentColor (inherits from button)
```

### Button Loading State
```
Spinner:
  Width/Height: 16px
  Border: 3px solid rgba(255,255,255,0.25)
  Border-Top-Color: white
  Border-Radius: 50%
  Animation: spin 900ms linear infinite (rotate 360deg)
  
Loading Class: .loading
  Text Opacity: 0.95
  Button State: Cursor wait (or similar)
```

---

## Form Design System

### Input Fields

#### Text/URL Inputs
```
Height: auto (calculated from padding/font)
Padding: 0.6rem
Font Size: 1rem
Font Family: inherit
Border: 1px solid var(--input-border)
Border Radius: 6px or 8px
Background: var(--input-bg)
Color: var(--input-text)
Transition: all 0.12s ease

States:
  Default:    subtle border, normal background
  Hover:      box-shadow slight increase
  Focus:      outline none, border-color var(--accent),
              box-shadow 0 0 0 3px rgba(11,102,194,0.1),
              background var(--surface)
  Disabled:   opacity 0.6, cursor not-allowed
  Error:      border-color #dc3545 (or red variant)
```

#### Textareas
```
Padding: 0.5rem to 0.8rem
Font Size: 0.9rem to 1rem
Font Family: inherit (or monospace for code)
Min Height: 60px to 150px
Resize: vertical (allows user resize)
All other properties same as text inputs

Edit Mode Textarea:
  Border: 2px solid var(--accent)
  Min Height: 100px
```

#### Select Dropdowns (Native)
```
Width: 380px, max-width 90vw
Height: 56px (--control-height)
Padding: 0 1rem
Font Size: 1rem
Border: 1px solid var(--input-border)
Border Radius: 10px
Background: var(--input-bg) with SVG arrow
Background Image: Custom dropdown arrow SVG
  Position: right 12px center
  Size: 14px
  Color: currentColor
Box Shadow: 0 6px 18px var(--shadow)
Cursor: pointer
Text Align: center
Transition: all 0.12s ease

States:
  Default:    subtle shadow, normal border
  Hover:      transform translateY(-2px),
              box-shadow 0 8px 22px var(--shadow)
  Focus:      border-color var(--accent),
              box-shadow 0 12px 28px var(--shadow)
```

#### Custom Select Dropdowns (Styled Replacement)
```
Container:
  Width: 380px, max-width 90vw
  Background: var(--surface)
  Border: 1px solid rgba(255,255,255,0.03-0.04)
  Border Radius: 10px
  Box Shadow: 0 8px 20px rgba(2,6,23,0.25)
  Position: relative
  
Value Display:
  Display: flex
  Gap: 0.75rem
  Padding: 0 12px
  Height: 56px
  Align Items: center
  Font Weight: 700
  Color: var(--text)
  
Dropdown List:
  Position: absolute
  Top: calc(100% + 6px)
  Width: 100%
  Background: var(--surface)
  Border: 1px solid rgba(255,255,255,0.03)
  Border Radius: 10px
  Box Shadow: 0 12px 40px rgba(2,6,23,0.6)
  Max Height: 260px
  Overflow Y: auto
  Padding: 8px 6px
  Opacity Animation: 0.18s ease
  Transform Animation: slideY 0.18s cubic-bezier(0.2,0.9,0.2,1)
  
List Items:
  Display: flex
  Gap: 0.6rem
  Padding: 0.6rem 0.9rem
  Border Radius: 8px
  Color: var(--muted)
  Cursor: pointer
  Font Size: 0.95rem
  
Item States:
  Default:    muted color, no background
  Hover:      background rgba(95,179,255,0.04),
              color var(--text)
  Selected:   background rgba(95,179,255,0.06),
              color var(--text),
              font-weight 700,
              border-left highlight (optional)
              
Colored Dot:
  Display: 12x12px circle
  Border Radius: 50%
  Margin Right: Built into gap
  Colors: Per organization (see color tokens)
```

### Form Labels
```
Display: block
Font Weight: 600
Font Size: 0.95rem to 1rem
Color: var(--text)
Margin Bottom: 0.4rem to 0.5rem
Line Height: 1.4
```

### Form Groups
```
Display: flex
Flex Direction: column
Gap: 0.4rem (between label and input)
Margin Bottom: 1rem (between groups)
```

### Form Row (Multi-column)
```
Display: grid
Grid Template Columns: 1fr 1fr (2-column)
Gap: 1rem
Responsive: 1fr (single column) on < 600px
```

### Radio Button Groups
```
Display: flex
Gap: 0.9rem
Background: transparent
Padding: 0.25rem
Border Radius: 14px
Border: 1px solid rgba(255,255,255,0.03)
Overflow: visible

Input:
  position: absolute
  opacity: 0
  width/height: 1px
  
Label (becomes visual control):
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  cursor: pointer
  padding: 0.4rem 0.6rem
  border-radius: 16px
  background: var(--surface)
  border: 2px solid var(--input-border)
  color: var(--muted)
  min-width: 80px
  max-width: 100px
  min-height: 56px
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)
  
Label States:
  Default:    surface background, muted text
  Hover:      border-color rgba(95,179,255,0.4),
              background rgba(95,179,255,0.05)
  Checked:    background transparent,
              color var(--accent),
              border-color var(--accent),
              transform scale(1.08),
              box-shadow 0 6px 20px rgba(45,132,255,0.25),
              animation pillPulse 0.4s
  Focus:      outline 3px solid rgba(95,179,255,0.14) with 2px offset
```

### Form Validation States
```
Valid:
  border-color: #22c55e (green)
  box-shadow: 0 0 0 3px rgba(34,197,94,0.1)
  
Invalid:
  border-color: #dc3545 (red)
  box-shadow: 0 0 0 3px rgba(220,53,69,0.1)
  
Required Field Indicator:
  Asterisk (*) in label
  Color: var(--danger)
  Font Weight: 700
```

---

## Card & Container Design

### Standard Cards
```
Background: var(--surface) or var(--card-bg)
Border: 1px solid var(--input-border)
Border Radius: 8px to 10px
Padding: 1rem to 1.5rem
Box Shadow: 0 2px 8px var(--shadow)
Transition: all 0.2s ease
Overflow: hidden

States:
  Default:    subtle shadow, normal border
  Hover:      border-color var(--accent),
              box-shadow 0 2px 8px var(--shadow)
  Focus:      box-shadow 0 0 0 3px rgba(11,102,194,0.1)
```

### Admin Section Cards
```
Background: var(--surface)
Border: 1px solid var(--input-border)
Border Radius: 10px
Padding: 1.5rem
Margin Bottom: 1.5rem
Box Shadow: 0 2px 8px var(--shadow)
Max Width: 900px to 1200px
Centered: margin 0 auto
```

### Question Item Cards
```
Display: grid
Grid Template Columns: 1fr auto (or stack on mobile)
Gap: 1rem
Padding: 1rem
Background: var(--card-bg)
Border: 1px solid var(--input-border)
Border Radius: 8px
Transition: all 0.2s ease

States:
  Default:    subtle styling
  Hover:      border-color var(--accent),
              box-shadow increase
  Editing:    background rgba(11,102,194,0.03),
              border-color var(--accent)
```

### Empty State Card
```
Width: 100%, max-width 860px
Margin: 1.6rem auto
Padding: 2.6rem
Border Radius: 12px
Background: #f1f7fb (light) or var(--card-bg) (dark)
Border: 1px solid rgba(11,102,194,0.06)
Display: flex
Flex Direction: column
Align Items: center
Gap: 0.6rem
Text Align: center

Icon:
  Width/Height: 56px
  Border Radius: 50%
  Display: flex
  Align Items: center
  Justify Content: center
  Background: #e9f4ff (light)
  Color: var(--muted)
  Font Weight: 700
  Font Size: 20px
  
Title:
  Font Size: 1.05rem
  Color: var(--text)
  Margin: 0
  
Message:
  Color: var(--muted)
  Max Width: 640px
  Font Size: 0.95rem
```

### Modal/Dialog
```
Position: fixed
Top/Left: 0
Width: 100%
Height: 100vh
Background: rgba(0,0,0,0.6)
Display: flex
Align Items: center
Justify Content: center
Z Index: 1000

Inner Container:
  Background: var(--card-bg)
  Padding: 2rem
  Border Radius: 10px
  Box Shadow: 0 10px 40px rgba(0,0,0,0.3)
  Max Width: 600px
  Width: 90%
  Max Height: 80vh
  Overflow Y: auto
  
Header:
  Display: flex
  Justify Content: space-between
  Align Items: center
  Margin Bottom: 1.5rem
  Border Bottom: 2px solid var(--accent)
  Padding Bottom: 1rem
  
Close Button:
  Background: none
  Border: none
  Font Size: 1.5rem
  Cursor: pointer
  Color: var(--text)
```

---

## Color & Contrast

### Contrast Ratios
- **Primary Text on Background**: 4.5:1 (WCAG AA)
- **Secondary Text on Background**: 3:1 (minimum)
- **Interactive Elements**: 3:1 (WCAG AA)
- **Focus Indicators**: High contrast, visible

### Light Theme Contrast Examples
- Dark text (#07203a) on white (#ffffff): 13.1:1 ✓
- Accent (#0b66c2) on white: 5.3:1 ✓
- Muted text (#4b6b86) on white: 4.8:1 ✓

### Dark Theme Contrast Examples
- Light text (#ecf2f9) on dark (#0d1419): 12.8:1 ✓
- Light accent (#5fb3ff) on dark: 6.2:1 ✓
- Light muted (#c5d9ec) on dark: 5.1:1 ✓

### Color Accessibility
- **Not color-only**: Important info uses icons + color
- **Organization colors**: Supported by dots/badges
- **Error states**: Combine color with icons/text

---

## Typography Scale

### Font Family Stack
```
system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```
This provides native system fonts on each platform for optimal readability.

### Font Sizes
```
1.5rem (24px)    - Page headings (mobile)
1.5rem (28px)    - Page headings (desktop)
1.1rem (18px)    - Section headers large
1rem (16px)      - Body text, buttons, inputs
0.95rem (15px)   - Button labels, secondary content
0.9rem (14px)    - Small text, captions
0.85rem (13px)   - Very small text, badges
0.8rem (13px)    - Tiny text
```

### Font Weights
```
400 - Regular (body text)
600 - Semibold (labels, navigation)
700 - Bold (headings, strong emphasis)
800 - Extra bold (stat values, badges)
```

### Line Heights
```
1.1 - Tight (headings)
1.4 - Normal (body text, small)
1.5 - Relaxed (longer form text)
1.6 - Very relaxed (accessibility, smaller screens)
```

### Letter Spacing
```
0.4px   - Headings (slight expansion)
0px     - Default (most text)
-0.5px  - Very tight (badges, labels)
2px     - Section titles in caps (uppercase text)
```

---

## Spacing Scale (Vertical Rhythm)

### Base Unit: 0.25rem (4px)
```
1x (0.25rem / 4px)    - xs
2x (0.5rem / 8px)     - sm
3x (0.75rem / 12px)   - 
4x (1rem / 16px)      - md (base)
5x (1.25rem / 20px)   -
6x (1.5rem / 24px)    - lg
8x (2rem / 32px)      - xl
```

### Layout Spacing
```
Page Padding:       2rem (desktop), 1rem (mobile)
Section Margin:     1.5rem-2rem
Section Padding:    1.5rem
Gap (horizontal):   0.75rem-1.5rem
Gap (vertical):     1rem-2rem
```

### Component Spacing
```
Form Group Gap:     0.4rem (label to input)
Form Groups:        1rem apart
Button Padding:     0.6rem-0.8rem (horizontal)
Card Padding:       1rem-2rem
List Item Padding:  0.8rem-1rem
Border Radius:      6px-10px (std), 999px (pills)
```

---

## Animations & Transitions

### Standard Timing Functions
```
ease           - Default (cubic-bezier(0.25, 0.46, 0.45, 0.94))
ease-in        - Accelerating (cubic-bezier(0.42, 0, 1, 1))
ease-out       - Decelerating (cubic-bezier(0, 0, 0.58, 1))
cubic-bezier() - Custom curves for specific feel
```

### Button Animations
```
Default Transition: all 0.18s ease (or 0.2s)
Hover Effect: translateY(-2px to -3px)
Click Effect: scale(0.98)
Duration: 200-300ms
```

### Form Element Animations
```
Input Focus: all 0.12s ease
Border Color: quick transition
Box Shadow: smooth 12ms transition
```

### Custom Animations
```
@keyframes pillPulse
  0%:   scale(1)
  50%:  scale(1.12)
  100%: scale(1.08)
  Duration: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

@keyframes badgePop
  0%:   scale(0.8), opacity 0
  50%:  scale(1.15)
  100%: scale(1), opacity 1
  Duration: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

@keyframes fadeIn
  0%:   opacity 0
  100%: opacity 1
  Duration: 0.3s ease

@keyframes slideDown
  0%:   opacity 0, translateY(-10px)
  100%: opacity 1, translateY(0)
  Duration: 0.3s ease

@keyframes spin
  0%:   transform rotate(0deg)
  100%: transform rotate(360deg)
  Duration: 900ms linear infinite
```

### Reduced Motion
```
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

---

## Responsive Grid Systems

### Grid for Cards
```
Display: grid
Grid Template Columns: repeat(auto-fill, minmax(280px, 1fr))
Gap: 1.5rem
Breakpoints:
  < 600px: 1 column
  600-900px: 2 columns
  > 900px: 3+ columns
```

### Grid for Stats
```
Display: grid
Grid Template Columns: repeat(auto-fit, minmax(150px, 1fr))
Gap: 1rem
Min-width: 150px per cell
```

### Grid for Questions
```
Display: grid
Gap: 0.8rem
On desktop: 1fr auto auto (text, edit, delete)
On mobile: full width, buttons below
```

---

## Accessibility Features

### Focus Indicators
```
Outline: 3px solid rgba(11,102,194,0.18) or similar
Outline Offset: 2-3px
Color: Contrasts with background
Visible: Always visible, even for mouse users
```

### ARIA Labels
```
aria-label="..."       - For icon buttons, controls
aria-current="page"    - For active nav items
aria-expanded="true"   - For toggleable elements
aria-selected="true"   - For selected items
aria-live="polite"     - For dynamic content updates
aria-hidden="true"     - For decorative SVGs
role="..."             - Semantic roles where needed
```

### Keyboard Navigation
```
Tab: Focus next focusable element
Shift+Tab: Focus previous element
Enter/Space: Activate button/link
Arrow Keys: Navigate within composite controls
Escape: Close modals/dropdowns
```

### Color Accessibility
```
- Never rely on color alone
- Use icons + color for states
- Maintain 3:1 contrast minimum
- 4.5:1 for normal text (AA)
- 7:1 for AAA compliance
```

---

## Dark Mode Implementation

### CSS Approach
```css
:root {
  /* Light theme - default variables */
}

:root[data-theme='dark'] {
  /* Dark theme - overridden variables */
}
```

### Key Differences
- **Backgrounds**: Light → Dark
- **Text**: Dark → Light
- **Surfaces**: White → Dark gray
- **Borders**: Subtle dark → Subtle light
- **Shadows**: Warm → Cool or reduced
- **Opacity**: Adjusted for dark backgrounds

### Safe Patterns
- Use CSS variables for all colors
- Test contrast ratios in both themes
- No hardcoded colors in component styles
- Use `currentColor` for inherited colors

---

## Print Styles

### PDF Export (via html2pdf)
```
Margin: 10mm
Page Size: A4
Orientation: Portrait
Background: Yes (for colored cards)
Page Break Mode: css and legacy
Font: Arial, 12px
Line Height: 1.4
```

### Print-Specific Styles
```
@media print {
  /* Hide unnecessary elements */
  .no-print { display: none; }
  
  /* Optimize for paper */
  background: white;
  color: black;
  box-shadow: none;
  page-break-inside: avoid; /* For important elements */
}
```

---

## Summary

This design system provides:

1. **Consistent Typography**: Clear hierarchy with 8 font sizes
2. **Responsive Grid**: Auto-fit columns that work at any screen size
3. **Comprehensive Colors**: Light/dark themes with accessible contrast
4. **Polished Interactions**: Smooth animations and hover effects
5. **Accessible UI**: WCAG AA compliant, keyboard navigable, high contrast
6. **Scalable Components**: Reusable patterns for buttons, cards, forms
7. **Professional Polish**: Subtle shadows, spacing, and micro-interactions
8. **Theme Support**: CSS variables enable instant light/dark switching
