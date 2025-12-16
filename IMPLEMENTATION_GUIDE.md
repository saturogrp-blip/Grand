# Grand Interview - Implementation Guide

## HTML Structure Patterns

### Page Layout Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grand Interview</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Navigation -->
    <header class="top-nav">
        <div class="top-nav-inner">
            <div class="brand">
                <div class="brand-badge">LOGO</div>
                <div class="brand-text">
                    <div class="brand-title">Grand Interview</div>
                    <div class="brand-sub">Question Management</div>
                </div>
            </div>
            <nav class="top-links">
                <!-- Navigation pills -->
            </nav>
            <div class="top-actions">
                <!-- Theme toggle, etc -->
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-container">
        <!-- Page sections -->
    </main>

    <script src="script.js"></script>
</body>
</html>
```

### Form Input Group
```html
<div class="form-group">
    <label for="inputId">Label Text</label>
    <input type="text" id="inputId" placeholder="Placeholder..." 
           required aria-label="Accessible label">
</div>
```

### Button Patterns

#### Primary Button with Icon
```html
<button class="generate-btn" type="button" aria-live="polite">
    <span class="btn-spinner" aria-hidden="true"></span>
    <span class="btn-text">Generate Questions</span>
</button>
```

#### Icon Button
```html
<button class="icon-btn" title="Delete" aria-label="Delete question">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" 
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- SVG content -->
    </svg>
</button>
```

#### Button Group
```html
<div class="action-btns" style="display: flex; gap: 0.4rem;">
    <button class="icon-btn">Edit</button>
    <button class="icon-btn danger">Delete</button>
</div>
```

### Card Component
```html
<div class="question-item" style="display: grid; grid-template-columns: 1fr auto; 
     gap: 1rem; align-items: center; padding: 1rem; background: var(--card-bg); 
     border: 1px solid var(--input-border); border-radius: 8px;">
    <div class="question-text">Question content</div>
    <div class="action-btns"><!-- Buttons --></div>
</div>
```

### Radio Button Group (Quality Selection)
```html
<fieldset class="quality-options" role="radiogroup" aria-label="Number of questions">
    <input type="radio" id="q30" name="quality" value="30" checked>
    <label for="q30">
        <div class="pill-number">30</div>
        <div class="pill-desc">Quick interview</div>
    </label>
    <!-- Additional radio options -->
</fieldset>
```

### Custom Dropdown
```html
<div id="customOrgSelect" class="custom-select" tabindex="0" 
     aria-haspopup="listbox" aria-expanded="false">
    <div class="custom-select-value">Choose an organization...</div>
    <div class="custom-select-list" role="listbox" aria-label="Organizations" hidden>
        <div class="custom-select-item" role="option" data-value="FIB">
            <span class="dot color-FIB"></span>
            <div class="item-label">Federal Investigation Bureau (FIB)</div>
        </div>
    </div>
</div>
```

### Tab Navigation
```html
<div class="tab-nav" style="display: flex; gap: 0.5rem; 
     border-bottom: 1px solid var(--input-border);">
    <button class="tab-button active" onclick="switchTab('tab-1')">
        Tab 1
    </button>
    <button class="tab-button" onclick="switchTab('tab-2')">
        Tab 2
    </button>
</div>

<div id="tab-1" class="tab-content active"><!-- Content --></div>
<div id="tab-2" class="tab-content"><!-- Content --></div>
```

### Message/Toast Notification
```html
<div id="messageContainer"></div>

<script>
function showMessage(text, type = 'info') {
    const container = document.getElementById('messageContainer');
    const msg = document.createElement('div');
    msg.className = `message ${type} show`;
    msg.textContent = text;
    container.appendChild(msg);
    setTimeout(() => msg.remove(), 4000);
}

// Usage:
// showMessage('Success!', 'success');
// showMessage('Error occurred', 'error');
// showMessage('Info message', 'info');
</script>
```

---

## CSS Implementation Patterns

### CSS Variables System
```css
:root {
    /* Colors */
    --bg: #f6fbff;
    --text: #07203a;
    --muted: #4b6b86;
    --surface: #ffffff;
    --accent: #0b66c2;
    --accent-dark: #0956a8;
    --danger: #dc3545;
    --input-bg: #ffffff;
    --input-border: rgba(7,32,58,.12);
    --input-text: #07203a;
    
    /* Dimensions */
    --control-height: 56px;
    --page-scale: 1;
    
    /* Shadows */
    --shadow: rgba(11,102,194,.08);
}

:root[data-theme='dark'] {
    --bg: #0d1419;
    --text: #ecf2f9;
    --muted: #c5d9ec;
    --surface: #151d2a;
    --accent: #5fb3ff;
    --accent-dark: #3b9ef5;
    --danger: #ff7373;
    --input-bg: #1a2333;
    --input-border: rgba(236,242,249,.15);
    --input-text: #ecf2f9;
}
```

### Responsive Flex Container
```css
.controls-row {
    display: flex;
    gap: 1.4rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}

@media (max-width: 600px) {
    .controls-row {
        flex-direction: column;
        gap: 1rem;
    }
}
```

### Responsive Grid
```css
.organizations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

@media (max-width: 600px) {
    .organizations-grid {
        grid-template-columns: 1fr;
    }
}
```

### Button Base Styles
```css
.btn {
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn:active {
    transform: translateY(0);
}

.btn:focus {
    outline: 3px solid rgba(11,102,194,.18);
    outline-offset: 3px;
}
```

### Focus State Template
```css
.element:focus,
.element:focus-visible {
    outline: 3px solid rgba(95,179,255,0.14);
    outline-offset: 2px;
}
```

### Dark Mode Input Style
```css
input,
select,
textarea {
    background: var(--input-bg);
    color: var(--input-text);
    border: 1px solid var(--input-border);
    transition: all 0.12s ease;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(95,179,255,.15);
}
```

---

## JavaScript Patterns

### Theme Toggle
```javascript
function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    localStorage.setItem('grand_theme', current);
}

// Initialize on load
window.addEventListener('load', () => {
    const saved = localStorage.getItem('grand_theme');
    const theme = saved || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
});
```

### Custom Select Implementation
```javascript
function setupCustomSelect(nativeElement, customElement) {
    const valueDisplay = customElement.querySelector('.custom-select-value');
    const list = customElement.querySelector('.custom-select-list');
    const items = list.querySelectorAll('.custom-select-item');
    
    // Open/close dropdown
    customElement.addEventListener('click', (e) => {
        e.stopPropagation();
        list.hidden ? list.hidden = false : list.hidden = true;
    });
    
    // Close on outside click
    document.addEventListener('click', () => {
        list.hidden = true;
    });
    
    // Select item
    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            nativeElement.value = value;
            nativeElement.dispatchEvent(new Event('change'));
            list.hidden = true;
        });
    });
    
    // Keyboard navigation
    customElement.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            list.hidden = false;
            items[0]?.focus();
        } else if (e.key === 'Escape') {
            list.hidden = true;
        }
    });
}
```

### Form Validation
```javascript
function validateForm(formData) {
    const errors = [];
    
    if (!formData.organization) {
        errors.push('Organization is required');
    }
    
    if (formData.url && !isValidUrl(formData.url)) {
        errors.push('Invalid URL format');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}
```

### API/Data Fetching Pattern
```javascript
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        showMessage(`Error: ${error.message}`, 'error');
        return null;
    }
}

// Usage:
const data = await fetchData('/api/questions');
```

### localStorage Patterns
```javascript
const STORAGE_KEY = 'grand_data_v1';

function getData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function setData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

// Usage:
const data = getData();
data.lastModified = new Date().toISOString();
setData(data);
```

### Event Handling Pattern
```javascript
function setupEventListeners() {
    const generateBtn = document.getElementById('generateBtn');
    const orgSelect = document.getElementById('orgSelect');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            await handleGenerate();
        });
    }
    
    if (orgSelect) {
        orgSelect.addEventListener('change', (e) => {
            handleOrgChange(e.target.value);
        });
    }
}

async function handleGenerate() {
    const btn = document.getElementById('generateBtn');
    btn.classList.add('loading');
    btn.setAttribute('aria-busy', 'true');
    
    try {
        const results = await generateQuestions();
        renderResults(results);
    } catch (error) {
        showMessage(`Error: ${error.message}`, 'error');
    } finally {
        btn.classList.remove('loading');
        btn.removeAttribute('aria-busy');
    }
}

function handleOrgChange(org) {
    if (!org) {
        clearForm();
        return;
    }
    
    loadOrgData(org);
    updateUI();
}
```

### DOM Manipulation Best Practices
```javascript
// ✓ Good: Using document fragments for batch updates
function renderList(items) {
    const fragment = document.createDocumentFragment();
    items.forEach((item, idx) => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    const list = document.getElementById('list');
    list.innerHTML = '';
    list.appendChild(fragment);
}

// ✓ Good: Using event delegation
document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.classList.contains('item-btn')) {
        handleItemAction(e.target);
    }
});

// ✗ Avoid: Inline event handlers
// <button onclick="handleClick()">Click me</button>
```

### Animation Helper
```javascript
function smoothScroll(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showElement(element) {
    element.style.display = 'block';
    element.offsetHeight; // Trigger reflow
    element.classList.add('fade-in');
}

function hideElement(element) {
    element.classList.remove('fade-in');
    element.addEventListener('animationend', () => {
        element.style.display = 'none';
    }, { once: true });
}
```

### Debounce and Throttle
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage:
const handleResize = debounce(() => {
    adjustPageScale();
}, 250);

window.addEventListener('resize', handleResize);
```

---

## Accessibility Checklist

### HTML
- [ ] Semantic HTML5 tags (header, nav, main, section, article)
- [ ] Language attribute on `<html>` tag
- [ ] Descriptive `<title>` tag
- [ ] Viewport meta tag for responsive
- [ ] Form labels linked with `for` attribute
- [ ] Fieldset/legend for grouped inputs
- [ ] Input types appropriate (email, url, number, etc.)
- [ ] Images have descriptive alt text
- [ ] SVG icons have aria-hidden="true"
- [ ] Buttons for actions, links for navigation

### ARIA
- [ ] aria-label for icon-only buttons
- [ ] aria-current="page" for active nav items
- [ ] aria-live="polite" for dynamic content
- [ ] aria-expanded for toggles
- [ ] aria-selected for tabs/lists
- [ ] aria-hidden="true" for decorative elements
- [ ] role attributes where needed
- [ ] Semantic HTML preferred over ARIA

### Keyboard
- [ ] Tab order logical (top to bottom, left to right)
- [ ] No keyboard traps
- [ ] Skip links for main content
- [ ] Arrow keys for menus/lists/carousels
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals/menus
- [ ] Focus visible on all interactive elements

### Vision
- [ ] Color contrast ≥ 4.5:1 for normal text
- [ ] Color contrast ≥ 3:1 for large text
- [ ] Focus indicator always visible
- [ ] Hover states visible
- [ ] Text can resize up to 200%
- [ ] No information conveyed by color alone
- [ ] Dark mode support

### Motion
- [ ] Respects prefers-reduced-motion
- [ ] No auto-playing animations
- [ ] No flickering/flashing content
- [ ] Smooth scrolling is optional, not required

### Mobile
- [ ] Touch targets ≥ 44x44px
- [ ] Readable font sizes (≥ 16px base)
- [ ] No horizontal scroll unless necessary
- [ ] Buttons not too close together
- [ ] Dropdowns work on touch devices

---

## Performance Optimization

### Critical Rendering Path
```javascript
// 1. Optimize CSS delivery
// - Inline critical CSS
// - Defer non-critical CSS
<link rel="preload" as="style" href="style.css">
<link rel="stylesheet" href="style.css">

// 2. Minimize JavaScript
// - Load scripts at end of body
// - Use async/defer where appropriate
<script async src="analytics.js"></script>
<script defer src="app.js"></script>

// 3. Optimize images
// - Use WebP with fallback
// - Lazy load below fold
// - Responsive images (srcset)
<img src="small.png" srcset="large.png 1200w" loading="lazy">
```

### Bundle Size
```javascript
// ✓ Good: Tree-shaking friendly
import { getCurators } from './curator-db.js';

// ✗ Avoid: Importing everything
import * as CuratorDB from './curator-db.js';
```

### Rendering Performance
```javascript
// ✓ Good: Use requestAnimationFrame
function updateDOM() {
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(100px)';
    });
}

// ✓ Good: Batch DOM updates
function batchUpdate(items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    list.appendChild(fragment); // Single reflow
}

// ✗ Avoid: Multiple reflows
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li); // Causes reflow each time
});
```

---

## Testing Guide

### Unit Test Example
```javascript
// curator-db.test.js
describe('CuratorDB', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('should add curator to organization', () => {
        const result = CuratorDB.addCurator('FIB', 'John Doe');
        expect(result).toBe(true);
        expect(CuratorDB.getCurators('FIB')).toContain('John Doe');
    });

    test('should prevent duplicate curators', () => {
        CuratorDB.addCurator('FIB', 'Jane Doe');
        const result = CuratorDB.addCurator('FIB', 'Jane Doe');
        expect(result).toBe(false);
    });
});
```

### Integration Test Example
```javascript
// forms.test.js
describe('Form Submission', () => {
    test('should generate questions with valid input', async () => {
        const orgSelect = document.getElementById('orgSelect');
        const generateBtn = document.getElementById('generateBtn');
        
        orgSelect.value = 'FIB';
        orgSelect.dispatchEvent(new Event('change'));
        generateBtn.click();
        
        await new Promise(resolve => setTimeout(resolve, 600));
        
        const list = document.getElementById('generated-list');
        expect(list.children.length).toBeGreaterThan(0);
    });
});
```

---

## Browser Support

### Required Support
- Chrome/Edge (Latest)
- Firefox (Latest 2 versions)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Fallbacks for Older Browsers
```javascript
// Feature detection
if (navigator.clipboard) {
    // Use modern API
    navigator.clipboard.writeText(text);
} else {
    // Fallback to older method
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
```

---

## Common Issues & Solutions

### Issue: Select dropdown not syncing
**Solution**: Dispatch change event after updating native select
```javascript
nativeSelect.value = newValue;
nativeSelect.dispatchEvent(new Event('change'));
```

### Issue: Modal not closing on Escape
**Solution**: Add keydown listener to document
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
```

### Issue: Theme not persisting on reload
**Solution**: Ensure localStorage key is consistent
```javascript
const THEME_KEY = 'grand_theme'; // Same key everywhere
const saved = localStorage.getItem(THEME_KEY);
```

### Issue: Focus lost after DOM update
**Solution**: Restore focus after rendering
```javascript
const focusedElement = document.activeElement;
renderList(items);
focusedElement?.focus();
```

---

## Deployment Checklist

- [ ] All console errors cleared
- [ ] All warnings addressed
- [ ] Performance metrics acceptable (Lighthouse > 90)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness tested
- [ ] Dark mode tested
- [ ] Print styles tested
- [ ] Images optimized
- [ ] Minify CSS/JS for production
- [ ] Remove console.log statements
- [ ] Update meta tags (description, keywords)
- [ ] Add favicon
- [ ] Set up analytics
- [ ] Configure CSP headers
- [ ] Enable GZIP compression
- [ ] Set up HTTPS/SSL
