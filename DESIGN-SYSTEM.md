# Clairvora Design System & UI/UX Guidelines

This document describes the visual design language, component patterns, and UX conventions used on the Clairvora homepage. Use this as a reference when building other pages.

---

## Brand Colors

### Primary Gradient
The signature Clairvora gradient flows through four key colors:
```css
background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
```

| Color | Hex | Usage |
|-------|-----|-------|
| Purple | `#7638FA` | Primary brand, buttons, icons |
| Magenta | `#D300C5` | Primary accent, CTAs, links |
| Pink | `#FF0069` | Gradient accent |
| Orange | `#FF7A00` | Gradient accent, warmth |

### Secondary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Terracotta | `#D96C4B` | Feature icons (Why Choose section) |
| Gold/Yellow | `#FFD600` | Star ratings, highlights |
| Green | `#22c55e` | Online status indicators |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Dark Navy | `#1a1a2e` | Headings, footer background, dark sections |
| Deep Purple | `#2d1b4e` | Dark section gradients |
| Slate | `#64748b` | Body text, subtitles |
| Light Slate | `#cbd5e1` | Dividers, muted elements |

### Background Colors
| Color | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Default page background |
| Cream | `#FFF9F0` | Warm section backgrounds (Why Choose) |
| Soft Purple Gradient | `#faf5ff → #fdf2f8 → #fff7ed` | Guarantee section |

---

## Typography

### Font Stack
The site uses the system font stack for optimal performance:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Logo
- Text-based logo: "Clairvora"
- Font size: 1.5rem
- Font weight: 700
- Letter spacing: -0.02em
- Color: White (on gradient) / `#1a1a2e` (on white)

### Type Scale

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| Hero Headline | 3.5rem (56px) | 700 | 1.1 | White |
| Hero Headline (mobile) | 2.75rem (44px) | 800 | 1.1 | White |
| Section Title | 2.75rem (44px) | 700 | 1.2 | `#1a1a2e` |
| Section Title (mobile) | 2rem (32px) | 700 | 1.2 | `#1a1a2e` |
| Subsection Title | 1.2rem (19px) | 600 | 1.4 | `#1a1a2e` |
| Body Large | 1.25rem (20px) | 400 | 1.6 | `#64748b` |
| Body | 1rem (16px) | 400 | 1.6 | `#64748b` |
| Body Small | 0.875rem (14px) | 400 | 1.5 | `#64748b` |
| Caption | 0.75rem (12px) | 500 | 1.4 | varies |

### Text Treatments

**Eyebrow Text**: Small uppercase labels above headings
```css
font-size: 0.875rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.1em;
background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Gradient Text** (dark backgrounds):
```css
background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Spacing System

### Container Widths
| Container | Max Width | Padding |
|-----------|-----------|---------|
| Header | 1200px | 2rem horizontal |
| Hero | 1200px | 2rem |
| Content sections | 1000-1200px | 2rem |
| Footer | 1100px | 2rem |

### Section Padding
| Viewport | Vertical Padding |
|----------|------------------|
| Desktop | 6rem (96px) |
| Tablet | 4rem (64px) |
| Mobile | 3-4rem (48-64px) |

### Component Spacing
- Gap between grid items: 1.5-2rem
- Gap between icon and text: 0.5-1rem
- Margin between heading and subtitle: 0.75-1rem
- Margin between sections: 0 (sections flow edge-to-edge)

---

## Components

### Buttons

**Primary CTA** (hero, main actions):
```css
background: white; /* on gradient bg */
/* OR */
background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%); /* on white bg */
color: #D300C5; /* or white */
padding: 1rem 2.5rem;
border-radius: 50px;
font-weight: 600;
font-size: 1.1rem;
```
Hover: `translateY(-2px)`, box-shadow increase

**Secondary/Ghost Button**:
```css
background: transparent;
border: 2px solid #D300C5; /* or rgba(255,255,255,0.5) */
color: #D300C5; /* or white */
padding: 1rem 2rem;
border-radius: 50px;
```
Hover: Fill background, color invert

**Small Button** (cards):
```css
padding: 0.75rem 1.5rem;
font-size: 0.9rem;
```

### Cards

**Advisor Card**:
- Border radius: 24px
- Background: White with subtle gradient glow border
- Shadow: `0 4px 24px rgba(0,0,0,0.06)`
- Hover: `translateY(-8px)`

Glow effect (pseudo-element):
```css
background: linear-gradient(135deg,
  rgba(211, 0, 197, 0.15) 0%,
  rgba(118, 56, 250, 0.1) 50%,
  rgba(255, 122, 0, 0.15) 100%);
```

**Feature Card** (Guarantee section):
- Border radius: 20px
- Background: White
- Shadow: `0 4px 20px rgba(118, 56, 250, 0.1)`
- Hover: `translateY(-4px)`, shadow increase

### Badges & Pills

**Eyebrow Badge** (glass effect):
```css
background: rgba(255, 255, 255, 0.2);
padding: 0.5rem 1rem;
border-radius: 50px;
backdrop-filter: blur(10px);
```

**Price Badge**:
```css
background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
color: white;
padding: 0.25rem 0.75rem;
border-radius: 20px;
font-size: 0.75rem;
font-weight: 700;
```

### Avatars

**Standard Avatar** (advisor cards):
- Size: 120px (desktop), 210px (mobile single column)
- Border: 3px solid white
- Border radius: 50%
- Shadow: `0 8px 24px rgba(0,0,0,0.12)`

**Online Indicator**:
```css
width: 18px;
height: 18px;
background: #22c55e;
border: 3px solid white;
box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
position: absolute; /* bottom-right of avatar */
```

**Avatar Grid** (Find Your Advisor):
- Avatars overlap with negative margin: -10px
- Gradient border wrapper with padding
- Hover: `scale(1.15) translateY(-8px)`
- Floating animation with staggered delay

### Icons

**Feature Icons** (boxed):
```css
width: 48-64px;
height: 48-64px;
background: linear-gradient(...); /* or subtle bg */
border-radius: 12-16px;
display: flex;
align-items: center;
justify-content: center;
```

**Inline Icons**: 20-24px, stroke-width 2, currentColor

Icon library: **Phosphor Icons** (via `phosphor-svelte`)
- Use `weight="fill"` for feature icons
- Use `weight="bold"` for inline icons

---

## Section Patterns

### Hero Section
- Full viewport height, gradient background
- Two-column grid (text left, image right)
- Image extends beyond container (140% width, negative margin)
- Wave SVG divider at bottom transitioning to white
- Mobile: Single column, centered text, hide image, show animated orbs

### Content Section (White Background)
- Clean white background
- Centered header with title + subtitle
- Content in 2-column grid (cards) or centered

### Feature Section (Dark Background)
- Dark gradient: `#1a1a2e → #2d1b4e → #1a1a2e`
- Two-column: Image on one side, content on other
- Content uses vertical timeline/steps layout
- Light text with reduced opacity for secondary text

### Feature Section (Warm Background)
- Cream background: `#FFF9F0`
- Two-column: Content left, image right
- Highlight grid with small icon + text pairs
- Feature list with larger boxed icons

### CTA Section (Vibrant Background)
- Magenta/pink gradient
- Centered content
- Avatar showcase (overlapping circular images)
- Stats bar with glass effect
- Strong white CTA button

### Guarantee/Trust Section
- Soft gradient background (purple → pink → orange, very light)
- Centered content
- 3-column card grid for features
- Trust indicators row at bottom

---

## Layout Grids

### Two Column (50/50)
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3-4rem;
align-items: center;
```

### Two Column Cards
```css
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.5rem;
```

### Three Column Cards
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
```

### Responsive Breakpoints
| Breakpoint | Description |
|------------|-------------|
| 1024px | Tablet - stack 2-col layouts |
| 768px | Mobile landscape - single column |
| 600px | Mobile - compact spacing |
| 480px | Small mobile - minimal spacing |

---

## Animations & Transitions

### Hover Effects
- Buttons: `translateY(-2px)`, box-shadow increase
- Cards: `translateY(-4px to -8px)`, shadow increase
- Links: Color change to `#D300C5`

### Transition Timing
```css
transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
transition: transform 0.3s; /* cards */
```

### Floating Animation (avatars)
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
animation: float 3s ease-in-out infinite;
animation-delay: var(--delay); /* stagger */
```

### Mobile Orbs (hero background)
```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}
```

---

## Header Behavior

**Initial State** (transparent):
- Fixed position, transparent background
- White logo and nav links
- White CTA button with magenta text

**Scrolled State** (after 100px):
```css
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(12px);
box-shadow: 0 2px 20px rgba(0,0,0,0.08);
```
- Dark logo and nav links
- Gradient CTA button with white text

---

## Footer Structure

### Sections
1. **App Banner**: Light gradient bg, phone mockup, app store badges
2. **Main Footer**: Dark bg, 5-column grid (brand + 4 link columns)
3. **Bottom Bar**: Copyright, subtle top border

### Footer Grid
```css
grid-template-columns: 180px repeat(4, 1fr);
```

### Social Icons
```css
width: 36px;
height: 36px;
background: rgba(255,255,255,0.1);
border-radius: 50%;
```
Hover: `background: #7638FA`

---

## Accessibility Considerations

- All interactive elements have hover/focus states
- Sufficient color contrast (light text on dark, dark text on light)
- Status indicators include visual cues beyond color (e.g., text labels)
- Touch targets are 44px minimum on mobile
- Images have alt text

---

## Form Elements

### Input Fields
*(Not yet implemented on homepage - define when building forms)*

Recommended styling based on design language:
```css
padding: 0.875rem 1.25rem;
border-radius: 12px;
border: 1px solid #e2e8f0;
font-size: 1rem;
transition: border-color 0.2s, box-shadow 0.2s;
```
Focus state:
```css
border-color: #D300C5;
box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
```

### Select Dropdowns
Follow input field styling with custom chevron icon.

### Checkboxes & Radio Buttons
Use brand gradient for checked state.

---

## Status Indicators

### Advisor Status
| Status | Visual | Button Text |
|--------|--------|-------------|
| Online | Green dot with glow (`#22c55e`) | "Connect Now" |
| Busy | No indicator shown | "Join Queue" |
| Offline | No indicator shown | "Schedule" |

### Rating Display
- Star character: ★ (U+2605)
- Color: `#FFD600` (gold) for stars, `#1a1a2e` for rating number
- Format: `★ 4.9` or `★★★★★`

---

## Stats & Metrics Display

### Stats Bar (glass effect)
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
padding: 1.5rem 3rem;
border-radius: 20px;
```

### Stat Item
- Value: 1.75rem, weight 700, white
- Label: 0.85rem, 85% opacity

### Dividers between stats
- Vertical: 1px × 40px, `rgba(255,255,255,0.3)`
- Horizontal (mobile): 60px × 1px

---

## Timeline / Steps Pattern

Used in "How It Works" section:

```
[dot]─────[content]
  │
  │ (connecting line)
  │
[dot]─────[content]
```

### Dot
```css
width: 14px;
height: 14px;
background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
border-radius: 50%;
box-shadow: 0 0 16px rgba(211, 0, 197, 0.6);
```

### Connecting Line
```css
width: 2px;
background: linear-gradient(180deg, rgba(118, 56, 250, 0.6) 0%, rgba(118, 56, 250, 0.2) 100%);
min-height: 50px;
```

---

## Link Styles

### Navigation Links
```css
color: rgba(255, 255, 255, 0.9); /* on dark */
color: #64748b; /* on light */
font-size: 0.95rem;
font-weight: 500;
```
Hover: Full opacity / `#1a1a2e`

### Footer Links
```css
color: rgba(255, 255, 255, 0.8);
font-size: 0.875rem;
```
Hover: `#D300C5`

### Inline Text Links
Use `#D300C5` with underline on hover.

---

## Image Treatments

### Hero Image
- Oversized: 140% width with -20% left margin
- Allows image to extend beyond container
- Hidden on mobile

### Lifestyle Photos
- Full width within container
- Drop shadow for floating effect:
  ```css
  filter: drop-shadow(0 20px 60px rgba(118, 56, 250, 0.3));
  ```

### Avatar Photos
- Always circular (border-radius: 50%)
- Object-fit: cover
- White border for separation

---

## SVG Patterns

### Wave Divider
Used to transition between sections:
```html
<svg viewBox="0 0 1440 150" preserveAspectRatio="none">
  <path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
</svg>
```
- Position: absolute bottom
- Width: 100%
- Height: 150px (desktop), 100px (mobile)

### Arrow Icon (CTAs)
```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
```

---

## Mobile Navigation

### Current Implementation
- Desktop nav hidden on mobile (< 768px)
- Sign In link hidden on mobile
- Only logo + CTA button visible
- *(Hamburger menu not yet implemented)*

### Recommended Mobile Menu
When implementing:
- Full-screen overlay with gradient background
- Large touch-friendly nav links
- Close button in header position

---

## Content Patterns

### Section Header (Centered)
```html
<div class="section-header">
  <h2 class="section-title">Section Title</h2>
  <p class="section-subtitle">Supporting description text</p>
</div>
```
- Margin bottom: 3rem

### Section with Eyebrow
```html
<span class="eyebrow">Eyebrow Text</span>
<h2 class="title">Main Title</h2>
<p class="intro">Introduction paragraph...</p>
```

### Feature List with Icons
Horizontal icon + text pairs for quick scanning:
```html
<div class="highlights"> <!-- 3-col grid -->
  <div class="highlight">
    <span class="icon">[svg]</span>
    <span class="text">Feature Name</span>
  </div>
</div>
```

---

## Data Structures

### Advisor Object
```typescript
interface Advisor {
  name: string;
  specialty: string;
  rating: number;      // 0-5
  reviews: number;
  image: string;       // path to photo
  price: number;       // per minute
  status: 'online' | 'busy' | 'offline';
  bio: string;
}
```

### Navigation Link
```typescript
interface NavLink {
  label: string;
  href: string;
}
```

---

## File Organization

```
src/
├── routes/
│   └── +page.svelte          # Page with embedded styles
├── lib/
│   └── components/           # Shared components (to be created)
└── app.css                   # Tailwind import + resets

static/
├── advisors/                 # Advisor profile photos
├── psychics/                 # Psychic profile photos
├── hero/                     # Hero section images
├── types/                    # Reading type icons
└── [root images]             # Hero, lifestyle photos
```

---

## Component Checklist for New Pages

When building new pages, ensure:

- [ ] Header is included (transparent → scrolled behavior)
- [ ] Footer is included (all three sections)
- [ ] Section backgrounds alternate appropriately
- [ ] CTAs use correct button styles
- [ ] Cards follow established patterns
- [ ] Typography uses defined scale
- [ ] Mobile breakpoints are handled
- [ ] Hover/transition effects are consistent
- [ ] Icons from Phosphor library
- [ ] Spacing follows system (6rem sections, 1.5-2rem gaps)

---

## Reusable Components to Extract

The following components should be extracted from the homepage for reuse:

### High Priority
1. **Header** - Fixed header with scroll state
2. **Footer** - Complete 3-section footer
3. **AdvisorCard** - Card with avatar, info, status, CTA
4. **Button** - Primary, secondary, ghost variants
5. **SectionHeader** - Title + subtitle pattern

### Medium Priority
6. **Badge/Pill** - Eyebrow badges, price badges
7. **Avatar** - With optional status indicator
8. **StatBar** - Glass-effect stats display
9. **FeatureCard** - Icon + title + description
10. **Timeline** - Vertical steps with dots/lines

### Patterns (not components)
- Wave divider SVG
- Gradient backgrounds
- Glass/blur effects

---

## CSS Custom Properties (Recommended)

For consistency, consider defining these as CSS variables:

```css
:root {
  /* Brand colors */
  --color-purple: #7638FA;
  --color-magenta: #D300C5;
  --color-pink: #FF0069;
  --color-orange: #FF7A00;

  /* Neutrals */
  --color-navy: #1a1a2e;
  --color-slate: #64748b;
  --color-slate-light: #cbd5e1;

  /* Status */
  --color-online: #22c55e;
  --color-star: #FFD600;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
  --gradient-button: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
  --gradient-dark: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);

  /* Spacing */
  --section-padding: 6rem;
  --section-padding-mobile: 4rem;
  --container-max: 1200px;

  /* Border radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 24px;
  --radius-full: 50px;

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 8px 30px rgba(118, 56, 250, 0.15);
  --shadow-glow: 0 0 16px rgba(211, 0, 197, 0.6);
}
```

---

## Client Account Dashboard

The client dashboard uses a distinct layout from public pages with a gradient hero header, stats bar, and content sections.

### Dashboard Header Structure

Two-level wrapper pattern for consistent 1200px max-width:
```
.top-bar (outer padding: 1.25rem 2rem)
  └── .top-bar-content (max-width: 1200px, margin: 0 auto)

.hero-section (outer padding: 2rem 2rem 3rem)
  └── .hero-content (max-width: 1200px, margin: 0 auto)

.tabs-wrapper (outer padding: 0 2rem)
  └── .tabs (max-width: 1200px, margin: 0 auto)
```

### Dashboard Hero
- Full-width gradient background (brand gradient)
- Contains: top bar nav, hero content, tab navigation
- No user avatar in header (clients don't have profile images)

**Top Bar Nav**:
```css
.top-bar {
  padding: 1.25rem 2rem;
}
.top-bar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Nav Right Actions**:
- Help button (ghost style)
- Add Funds button (glass pill style)
- Log Out button (ghost style, via Clerk SignOutButton)

```css
.btn-ghost {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-add {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  backdrop-filter: blur(10px);
}
```

**Hero Content**:
- Two-column flex layout (text left, actions right)
- Tier badge, welcome heading, wallet balance
- Primary and secondary action buttons

```css
.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tier-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.375rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.hero-text h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
}

.hero-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}
```

### Dashboard Tabs
- Horizontal tab navigation at bottom of hero
- White text, white underline for active state
- 3px bottom border indicator

```css
.tabs {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
}

.tab {
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-bottom: 3px solid transparent;
}

.tab:hover {
  color: white;
}

.tab.active {
  color: white;
  border-bottom-color: white;
}
```

### Stats Bar
- White background strip below hero
- Horizontal flex layout with vertical dividers
- Each stat: value, label, action link
- Special stats: rewards tier with progress bar, free reading with claim button

```css
.stats-bar-section {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 2rem;
}

.stats-bar {
  display: flex;
  align-items: stretch;
}

.stat {
  flex: 1;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-divider {
  width: 1px;
  background: #e2e8f0;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a2e;
}

.stat-label {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0.25rem 0 0.5rem;
}

.stat-link {
  font-size: 0.8rem;
  color: #D300C5;
  font-weight: 500;
}
```

**Rewards Tier Stat**:
```css
.stat-perk {
  background: linear-gradient(135deg, rgba(118, 56, 250, 0.15), rgba(211, 0, 197, 0.15));
  color: #7638FA;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.mini-progress {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 50px;
  overflow: hidden;
}

.mini-fill {
  height: 100%;
  background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
  border-radius: 50px;
}
```

**Free Reading Stat**:
```css
.stat-badge {
  background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.claim-btn {
  background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
}
```

### Dashboard Main Content
- Light gray background: `#f8fafc`
- Container: 1200px max-width, 2rem padding
- Section header: title left, "View All →" link right

```css
.main {
  padding: 2rem 2rem 4rem;
}

.section {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a2e;
}

.section-header a {
  color: #D300C5;
  font-size: 0.9rem;
  font-weight: 500;
}
```

### Data Tables
- White background, 16px border radius
- Subtle shadow: `0 4px 24px rgba(0, 0, 0, 0.06)`
- Header row: uppercase labels, slate gray, light background
- Cells: 1rem 1.25rem padding

```css
.advisors-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.advisors-table th {
  text-align: left;
  padding: 1rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.advisors-table td {
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
}
```

**Advisor Cell** (avatar + name):
```css
.advisor-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.advisor-cell img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.advisor-cell span {
  font-weight: 600;
  color: #1a1a2e;
}
```

**Table Action Buttons**:
```css
.table-btn {
  background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
}

.table-btn.secondary {
  background: white;
  color: #64748b;
  border: 1px solid #e2e8f0;
}
```

### Tips Section
- Subtle purple background tint: `rgba(118, 56, 250, 0.04)`
- 4-column grid with vertical dividers
- Purple bold keywords, "More tips →" link bottom-right

```css
.tips-section {
  background: rgba(118, 56, 250, 0.04);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
}

.tips-section h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.tips-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.tip-item {
  padding: 0 1.25rem;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.5;
  border-right: 1px solid rgba(118, 56, 250, 0.15);
}

.tip-item:first-child { padding-left: 0; }
.tip-item:last-child { padding-right: 0; border-right: none; }

.tip-item strong {
  color: #7638FA;
  font-weight: 600;
}

.tips-link {
  display: block;
  text-align: right;
  margin-top: 1rem;
  color: #7638FA;
  font-size: 0.85rem;
  font-weight: 500;
}
```

### Blog Cards (Dashboard)
- 3-column grid, 1.5rem gap
- Gradient image placeholder (140px height)
- Category label, title, description, meta

```css
.blog-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.blog-image {
  height: 140px;
}

.blog-content {
  padding: 1.25rem;
}

.blog-category {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #D300C5;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.blog-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0.5rem 0;
}

.blog-content p {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #94a3b8;
}
```

### Dashboard Responsive Breakpoints

**1024px (Tablet)**:
- Tips: 2-column grid with horizontal dividers
- Blog: Single column

**768px (Mobile)**:
- Padding reduced to 1.5rem
- Hero content stacks vertically, centered
- Stats bar stacks vertically
- Tabs: horizontal scroll
- Tips: Single column

---

## Known Gaps / Future Considerations

Items not yet defined that will be needed:

1. **Error States** - Form validation, error messages, error pages
2. **Loading States** - Skeleton screens, spinners, progress indicators
3. **Empty States** - No results, no data placeholders
4. **Notifications/Toasts** - Success, warning, error alerts
5. **Modals/Dialogs** - Overlays, confirmation dialogs
6. ~~**Tables** - Data display for dashboards~~ ✓ Defined
7. **Pagination** - Page navigation for lists
8. **Breadcrumbs** - Navigation hierarchy
9. ~~**Tabs** - Content switching~~ ✓ Defined (dashboard tabs)
10. **Accordions** - Expandable content (FAQ, etc.)
11. **Mobile Menu** - Hamburger navigation
12. **Search** - Search input with results
13. **Filters** - Category/filter controls
14. **Date/Time Pickers** - Scheduling UI
15. **Chat Interface** - Reading chat UI
16. **Audio/Video Controls** - Call reading UI
