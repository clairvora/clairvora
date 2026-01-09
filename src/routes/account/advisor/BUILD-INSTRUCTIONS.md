# Advisor Dashboard Build Instructions

Use `/account/advisor/+page.svelte` (Overview) as the template for all pages. Copy the entire file, then modify the content section while keeping the header, stats bar, and styling consistent.

---

## Template Structure (Copy for Each Page)

```svelte
<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';
	// Page-specific state here
</script>

<svelte:head>
	<title>[Page Title] - Clairvora</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner (KEEP SAME) -->
	<header class="hero">
		<nav class="top-bar">...</nav>
		<div class="hero-section">
			<div class="hero-content">
				<div class="hero-text">
					<span class="tier-badge">Top Rated Advisor</span>
					<h1>{getGreeting()}, {advisor.firstName}</h1>
					<p>Your balance is <strong>${advisor.balance.toFixed(2)}</strong></p>
				</div>
				<div class="hero-actions">
					<button class="btn-primary">View Queue</button>
					<a href="/account/advisor/schedule" class="btn-secondary">Set Schedule</a>
				</div>
			</div>
		</div>
		<div class="tabs-wrapper">
			<div class="tabs">
				<!-- UPDATE active CLASS FOR CURRENT PAGE -->
				<a href="/account/advisor" class="tab">Overview</a>
				<a href="/account/advisor/readings" class="tab active">Readings</a>
				...
			</div>
		</div>
	</header>

	<!-- Stats Bar (KEEP SAME) -->
	<section class="stats-bar-section">...</section>

	<!-- Main Content (MODIFY THIS) -->
	<main class="main">
		<div class="container">
			<!-- PAGE-SPECIFIC CONTENT HERE -->
		</div>
	</main>
</div>

<style>
	/* COPY ALL STYLES FROM OVERVIEW PAGE */
	/* ADD PAGE-SPECIFIC STYLES AT THE END */
</style>
```

---

## File Structure to Create

```
src/routes/account/advisor/
├── +page.svelte                 ✅ DONE (Overview)
├── readings/
│   └── +page.svelte             ❌ TODO
├── clients/
│   └── +page.svelte             ❌ TODO
├── earnings/
│   └── +page.svelte             ❌ TODO
├── schedule/
│   └── +page.svelte             ❌ TODO
└── settings/
    └── +page.svelte             ❌ TODO
```

---

## Page 1: Readings (`/readings/+page.svelte`)

### Purpose
View history of all completed readings with filtering and pagination.

### Mock Data
```typescript
let readings = $state([
	{
		id: 1,
		clientName: 'Sarah M.',
		clientInitials: 'SM',
		type: 'chat', // 'chat' | 'call' | 'text'
		timestamp: '2026-01-09T14:30:00Z',
		duration: 23, // minutes
		commission: 24.50,
		status: 'completed' // 'completed' | 'cancelled'
	},
	// ... more readings
]);

let filter = $state({
	type: 'all', // 'all' | 'chat' | 'call' | 'text'
	sort: 'newest' // 'newest' | 'oldest'
});

let pagination = $state({
	page: 1,
	perPage: 15,
	total: 247
});

let stats = $state({
	total: 1847,
	chat: 892,
	call: 623,
	text: 332
});
```

### Content Sections

#### 1. Reading Stats Cards (4-column grid)
```html
<div class="metrics-grid">
	<div class="metric-card">
		<span class="metric-value">1,847</span>
		<span class="metric-label">All Readings</span>
	</div>
	<div class="metric-card">
		<span class="metric-value">892</span>
		<span class="metric-label">Chat Readings</span>
	</div>
	<div class="metric-card">
		<span class="metric-value">623</span>
		<span class="metric-label">Call Readings</span>
	</div>
	<div class="metric-card">
		<span class="metric-value">332</span>
		<span class="metric-label">Text Readings</span>
	</div>
</div>
```

#### 2. Filter Controls
```html
<div class="filter-bar">
	<select class="filter-select" bind:value={filter.type}>
		<option value="all">All Types</option>
		<option value="chat">Chat Only</option>
		<option value="call">Call Only</option>
		<option value="text">Text Only</option>
	</select>
	<select class="filter-select" bind:value={filter.sort}>
		<option value="newest">Newest First</option>
		<option value="oldest">Oldest First</option>
	</select>
</div>
```

**Filter Bar CSS:**
```css
.filter-bar {
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
}

.filter-select {
	padding: 0.5rem 1rem;
	border: 1px solid #e2e8f0;
	border-radius: 8px;
	font-size: 0.9rem;
	color: #475569;
	background: white;
	cursor: pointer;
}

.filter-select:focus {
	outline: none;
	border-color: #D300C5;
}
```

#### 3. Readings Table
| Column | Content |
|--------|---------|
| Date/Time | Formatted timestamp |
| Client | Avatar initials + name |
| Type | Badge (chat/call/text) |
| Duration | X min |
| Amount | $XX.XX |
| Actions | "View" button |

#### 4. Pagination
```html
<div class="pagination">
	<span class="pagination-info">Showing 1-15 of 247 readings</span>
	<div class="pagination-controls">
		<button class="pagination-btn" disabled>Previous</button>
		<button class="pagination-btn active">1</button>
		<button class="pagination-btn">2</button>
		<button class="pagination-btn">3</button>
		<span class="pagination-ellipsis">...</span>
		<button class="pagination-btn">17</button>
		<button class="pagination-btn">Next</button>
	</div>
</div>
```

**Pagination CSS:**
```css
.pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.5rem;
	padding-top: 1.5rem;
	border-top: 1px solid #e2e8f0;
}

.pagination-info {
	font-size: 0.85rem;
	color: #64748b;
}

.pagination-controls {
	display: flex;
	gap: 0.5rem;
}

.pagination-btn {
	padding: 0.5rem 0.75rem;
	border: 1px solid #e2e8f0;
	border-radius: 8px;
	background: white;
	font-size: 0.85rem;
	color: #475569;
	cursor: pointer;
}

.pagination-btn:hover:not(:disabled) {
	border-color: #D300C5;
	color: #D300C5;
}

.pagination-btn.active {
	background: linear-gradient(135deg, #7638FA, #D300C5);
	color: white;
	border-color: transparent;
}

.pagination-btn:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.pagination-ellipsis {
	padding: 0.5rem;
	color: #64748b;
}
```

---

## Page 2: Clients (`/clients/+page.svelte`)

### Purpose
View and manage client relationships.

### Mock Data
```typescript
let clients = $state([
	{
		id: 1,
		name: 'Sarah M.',
		initials: 'SM',
		email: 'sarah.m@email.com',
		totalReadings: 12,
		totalSpent: 487.50,
		lastReading: '2026-01-09T14:30:00Z',
		isFavorite: true,
		isRegular: true // 5+ readings
	},
	// ... more clients
]);

let searchQuery = $state('');
```

### Content Sections

#### 1. Search Bar
```html
<div class="search-bar">
	<input
		type="text"
		placeholder="Search clients..."
		bind:value={searchQuery}
		class="search-input"
	/>
</div>
```

**Search CSS:**
```css
.search-bar {
	margin-bottom: 1.5rem;
}

.search-input {
	width: 100%;
	max-width: 400px;
	padding: 0.75rem 1rem;
	border: 1px solid #e2e8f0;
	border-radius: 12px;
	font-size: 0.9rem;
}

.search-input:focus {
	outline: none;
	border-color: #D300C5;
	box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
}
```

#### 2. Clients Table
| Column | Content |
|--------|---------|
| Client | Avatar + name + email (smaller, gray) |
| Total Readings | Number |
| Total Spent | $XXX.XX |
| Last Reading | Formatted date |
| Status | "Regular" badge if 5+ readings |
| Actions | "View History" button |

#### 3. Regular Clients Highlight
Show a section at top for clients with 5+ readings:
```html
<section class="section">
	<div class="section-header">
		<h2>Regular Clients</h2>
		<span class="badge-count">8 clients</span>
	</div>
	<!-- Same table but filtered to regulars -->
</section>
```

---

## Page 3: Earnings (`/earnings/+page.svelte`)

### Purpose
View account balance, earnings breakdown, and manage withdrawals.

### Mock Data
```typescript
let balance = $state({
	total: 1247.50,
	pending: 127.50, // Last 14 days, not yet available
	available: 1120.00,
	withdrawalMethod: 'Payoneer'
});

let earnings = $state({
	today: 127.50,
	thisWeek: 487.25,
	thisMonth: 1892.00,
	byType: {
		chat: 892.50,
		call: 723.00,
		text: 276.50
	}
});

let transactions = $state([
	{
		id: 1,
		date: '2026-01-09T14:30:00Z',
		clientName: 'Sarah M.',
		type: 'chat',
		amount: 24.50,
		status: 'completed' // 'completed' | 'pending'
	},
	// ... more transactions
]);

let payouts = $state([
	{
		id: 1,
		date: '2026-01-01T00:00:00Z',
		amount: 500.00,
		method: 'Payoneer',
		status: 'completed' // 'completed' | 'processing' | 'pending'
	},
	// ... more payouts
]);
```

### Content Sections

#### 1. Balance Card (Full Width)
```html
<div class="balance-card-large">
	<div class="balance-row">
		<div class="balance-item">
			<span class="balance-label">Total Balance</span>
			<span class="balance-value large">${balance.total.toFixed(2)}</span>
		</div>
		<div class="balance-divider"></div>
		<div class="balance-item">
			<span class="balance-label">Pending</span>
			<span class="balance-value">${balance.pending.toFixed(2)}</span>
			<span class="balance-note">Last 14 days</span>
		</div>
		<div class="balance-divider"></div>
		<div class="balance-item">
			<span class="balance-label">Available</span>
			<span class="balance-value highlight">${balance.available.toFixed(2)}</span>
		</div>
		<div class="balance-divider"></div>
		<div class="balance-item">
			<span class="balance-label">Withdrawal Method</span>
			<span class="balance-value">{balance.withdrawalMethod}</span>
		</div>
	</div>
	<div class="balance-actions">
		<button class="btn-primary">Request Withdrawal</button>
	</div>
</div>
```

**Balance Card CSS:**
```css
.balance-card-large {
	background: white;
	border-radius: 16px;
	padding: 2rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	margin-bottom: 2rem;
}

.balance-row {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 1.5rem;
}

.balance-item {
	text-align: center;
}

.balance-label {
	display: block;
	font-size: 0.85rem;
	color: #64748b;
	margin-bottom: 0.5rem;
}

.balance-value {
	display: block;
	font-size: 1.5rem;
	font-weight: 700;
	color: #1a1a2e;
}

.balance-value.large {
	font-size: 2.5rem;
}

.balance-value.highlight {
	color: #16a34a;
}

.balance-note {
	display: block;
	font-size: 0.75rem;
	color: #94a3b8;
	margin-top: 0.25rem;
}

.balance-divider {
	width: 1px;
	height: 60px;
	background: #e2e8f0;
}

.balance-actions {
	display: flex;
	justify-content: center;
	padding-top: 1.5rem;
	border-top: 1px solid #e2e8f0;
}
```

#### 2. Earnings Breakdown (3-column grid)
```html
<div class="earnings-grid">
	<div class="earnings-card">
		<span class="earnings-label">Chat Earnings</span>
		<span class="earnings-value">$892.50</span>
		<div class="earnings-bar chat" style="width: 60%"></div>
	</div>
	<div class="earnings-card">
		<span class="earnings-label">Call Earnings</span>
		<span class="earnings-value">$723.00</span>
		<div class="earnings-bar call" style="width: 45%"></div>
	</div>
	<div class="earnings-card">
		<span class="earnings-label">Text Earnings</span>
		<span class="earnings-value">$276.50</span>
		<div class="earnings-bar text" style="width: 20%"></div>
	</div>
</div>
```

**Earnings Grid CSS:**
```css
.earnings-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-bottom: 2rem;
}

.earnings-card {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.earnings-label {
	display: block;
	font-size: 0.85rem;
	color: #64748b;
	margin-bottom: 0.5rem;
}

.earnings-value {
	display: block;
	font-size: 1.5rem;
	font-weight: 700;
	color: #1a1a2e;
	margin-bottom: 1rem;
}

.earnings-bar {
	height: 8px;
	border-radius: 4px;
}

.earnings-bar.chat {
	background: #1d4ed8;
}

.earnings-bar.call {
	background: #16a34a;
}

.earnings-bar.text {
	background: #d97706;
}
```

#### 3. Transaction History Table
| Column | Content |
|--------|---------|
| Date | Formatted timestamp |
| Client | Name |
| Type | Badge |
| Amount | $XX.XX |
| Status | "Completed" or "Pending" badge |

#### 4. Payout History Table
| Column | Content |
|--------|---------|
| Date | Formatted date |
| Amount | $XXX.XX |
| Method | Payoneer |
| Status | Badge (completed/processing/pending) |

**Status Badge CSS:**
```css
.status-badge {
	display: inline-block;
	padding: 0.25rem 0.75rem;
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 600;
}

.status-badge.completed {
	background: #dcfce7;
	color: #16a34a;
}

.status-badge.pending {
	background: #fef3c7;
	color: #d97706;
}

.status-badge.processing {
	background: #dbeafe;
	color: #1d4ed8;
}
```

---

## Page 4: Schedule (`/schedule/+page.svelte`)

### Purpose
Manage weekly availability and time-off periods.

### Mock Data
```typescript
let schedule = $state({
	Monday: [
		{ start: '09:00', end: '12:00' },
		{ start: '14:00', end: '18:00' }
	],
	Tuesday: [
		{ start: '09:00', end: '17:00' }
	],
	Wednesday: [], // Day off
	Thursday: [
		{ start: '10:00', end: '16:00' }
	],
	Friday: [
		{ start: '09:00', end: '12:00' }
	],
	Saturday: [],
	Sunday: []
});

let timeOff = $state([
	{
		id: 1,
		start: '2026-01-15T09:00:00Z',
		end: '2026-01-15T12:00:00Z',
		isActive: false // true if currently in this time-off period
	},
	{
		id: 2,
		start: '2026-01-20T00:00:00Z',
		end: '2026-01-22T23:59:00Z',
		isActive: false
	}
]);

let timezone = $state('America/New_York');
```

### Content Sections

#### 1. Timezone Display
```html
<div class="timezone-bar">
	<span>Your timezone: <strong>{timezone}</strong></span>
	<a href="/account/advisor/settings">Change in Settings →</a>
</div>
```

#### 2. Weekly Schedule Grid
```html
<div class="schedule-card">
	<div class="card-header">
		<h3 class="card-title">Weekly Availability</h3>
		<button class="table-btn">+ Add Time Slot</button>
	</div>

	<div class="schedule-grid">
		{#each Object.entries(schedule) as [day, slots]}
			<div class="schedule-day">
				<span class="day-name">{day}</span>
				{#if slots.length === 0}
					<span class="day-off">Day off</span>
				{:else}
					{#each slots as slot}
						<div class="time-slot">
							<span>{formatTime(slot.start)} — {formatTime(slot.end)}</span>
							<button class="slot-edit">Edit</button>
							<button class="slot-delete">×</button>
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
</div>
```

**Schedule Grid CSS:**
```css
.timezone-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f8fafc;
	padding: 1rem 1.5rem;
	border-radius: 12px;
	margin-bottom: 1.5rem;
	font-size: 0.9rem;
	color: #475569;
}

.timezone-bar a {
	color: #D300C5;
	text-decoration: none;
	font-weight: 500;
}

.schedule-card {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	margin-bottom: 2rem;
}

.schedule-grid {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.schedule-day {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	padding: 1rem 0;
	border-bottom: 1px solid #f1f5f9;
}

.schedule-day:last-child {
	border-bottom: none;
}

.day-name {
	width: 100px;
	font-weight: 600;
	color: #1a1a2e;
}

.day-off {
	color: #94a3b8;
	font-style: italic;
}

.time-slot {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background: #f8fafc;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	font-size: 0.9rem;
}

.slot-edit,
.slot-delete {
	background: none;
	border: none;
	color: #94a3b8;
	cursor: pointer;
	padding: 0.25rem;
}

.slot-edit:hover,
.slot-delete:hover {
	color: #D300C5;
}
```

#### 3. Quick Time-Off Buttons
```html
<div class="quick-timeoff">
	<h4>Quick Break</h4>
	<div class="quick-buttons">
		<button class="quick-btn">15 min</button>
		<button class="quick-btn">30 min</button>
		<button class="quick-btn">1 hour</button>
		<button class="quick-btn">2 hours</button>
		<button class="quick-btn">Rest of Today</button>
	</div>
</div>
```

**Quick Buttons CSS:**
```css
.quick-timeoff {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	margin-bottom: 2rem;
}

.quick-timeoff h4 {
	font-size: 1rem;
	font-weight: 600;
	color: #1a1a2e;
	margin-bottom: 1rem;
}

.quick-buttons {
	display: flex;
	gap: 0.75rem;
	flex-wrap: wrap;
}

.quick-btn {
	padding: 0.5rem 1rem;
	border: 1px solid #e2e8f0;
	border-radius: 8px;
	background: white;
	font-size: 0.85rem;
	color: #475569;
	cursor: pointer;
	transition: all 0.2s;
}

.quick-btn:hover {
	border-color: #D300C5;
	color: #D300C5;
}
```

#### 4. Scheduled Time Off Table
| Column | Content |
|--------|---------|
| Start | Date & time |
| End | Date & time (or "Ongoing") |
| Status | "Active Now" (red) or "Upcoming" (gray) badge |
| Actions | Delete button |

---

## Page 5: Settings (`/settings/+page.svelte`)

### Purpose
Manage profile, rates, notifications, and account settings.

### Mock Data
```typescript
let profile = $state({
	displayName: 'Mystic Luna',
	subtitle: 'Intuitive Tarot Reader',
	yearsExperience: 8,
	style: 'Compassionate', // 'Inspirational' | 'Compassionate' | 'Straightforward' | 'Wise'
	about: 'With over 8 years of experience...',
	specialties: ['Love & Relationships', 'Career', 'Life Path'],
	tools: ['Tarot Cards', 'Oracle Cards', 'Pendulum'],
	readingTypes: ['Chat', 'Phone', 'Text']
});

let rates = $state({
	chat: 4.99,
	call: 5.99,
	text: 9.99, // per question
	commission: 60 // percentage advisor keeps
});

let notifications = $state({
	newClient: true,
	queueAlert: true,
	payoutNotification: true,
	emailUpdates: false
});

let account = $state({
	status: 'Active', // 'Active' | 'Under Review' | 'Suspended'
	timezone: 'America/New_York',
	email: 'luna@email.com',
	phone: '+1 555-123-4567'
});

let isEditingProfile = $state(false);
let isEditingRates = $state(false);
```

### Content Sections

#### 1. Profile Information Card
```html
<div class="settings-card">
	<div class="card-header">
		<h3 class="card-title">Profile Information</h3>
		<button class="table-btn secondary" onclick={() => isEditingProfile = !isEditingProfile}>
			{isEditingProfile ? 'Cancel' : 'Edit'}
		</button>
	</div>

	{#if isEditingProfile}
		<!-- Edit Form -->
		<form class="settings-form">
			<div class="form-group">
				<label>Display Name</label>
				<input type="text" bind:value={profile.displayName} />
			</div>
			<div class="form-group">
				<label>Subtitle</label>
				<input type="text" bind:value={profile.subtitle} />
			</div>
			<div class="form-group">
				<label>Years of Experience</label>
				<input type="number" bind:value={profile.yearsExperience} />
			</div>
			<div class="form-group">
				<label>Reading Style</label>
				<select bind:value={profile.style}>
					<option>Inspirational</option>
					<option>Compassionate</option>
					<option>Straightforward</option>
					<option>Wise</option>
				</select>
			</div>
			<div class="form-group">
				<label>About Me</label>
				<textarea rows="5" bind:value={profile.about}></textarea>
			</div>
			<div class="form-actions">
				<button type="submit" class="btn-primary">Save Changes</button>
			</div>
		</form>
	{:else}
		<!-- Display View -->
		<div class="settings-list">
			<div class="settings-item">
				<span class="settings-label">Display Name</span>
				<span class="settings-value">{profile.displayName}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Subtitle</span>
				<span class="settings-value">{profile.subtitle}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Years of Experience</span>
				<span class="settings-value">{profile.yearsExperience}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Reading Style</span>
				<span class="settings-value">{profile.style}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Specialties</span>
				<span class="settings-value">{profile.specialties.join(', ')}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Tools</span>
				<span class="settings-value">{profile.tools.join(', ')}</span>
			</div>
			<div class="settings-item">
				<span class="settings-label">Reading Types</span>
				<span class="settings-value">{profile.readingTypes.join(', ')}</span>
			</div>
		</div>
	{/if}
</div>
```

**Settings Form CSS:**
```css
.settings-card {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	margin-bottom: 1.5rem;
}

.settings-list {
	display: flex;
	flex-direction: column;
}

.settings-item {
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid #f1f5f9;
}

.settings-item:last-child {
	border-bottom: none;
}

.settings-label {
	font-size: 0.9rem;
	color: #64748b;
}

.settings-value {
	font-size: 0.9rem;
	color: #1a1a2e;
	font-weight: 500;
}

.settings-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.form-group label {
	font-size: 0.85rem;
	font-weight: 500;
	color: #475569;
}

.form-group input,
.form-group select,
.form-group textarea {
	padding: 0.75rem 1rem;
	border: 1px solid #e2e8f0;
	border-radius: 12px;
	font-size: 0.9rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
	outline: none;
	border-color: #D300C5;
	box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
}

.form-actions {
	display: flex;
	justify-content: flex-end;
	padding-top: 1rem;
}
```

#### 2. Pricing Settings Card
Same pattern as Profile - display view with Edit button, form view when editing.

| Field | Type | Note |
|-------|------|------|
| Chat Rate | Number input | $/minute |
| Call Rate | Number input | $/minute |
| Text Rate | Number input | $/question |
| Commission | Display only | X% (set by admin) |

#### 3. Notification Preferences Card
```html
<div class="settings-card">
	<div class="card-header">
		<h3 class="card-title">Notifications</h3>
	</div>
	<div class="toggle-list">
		<div class="toggle-item">
			<div class="toggle-info">
				<span class="toggle-label">New Client Alerts</span>
				<span class="toggle-desc">Get notified when a new client joins your queue</span>
			</div>
			<label class="toggle">
				<input type="checkbox" bind:checked={notifications.newClient} />
				<span class="toggle-slider"></span>
			</label>
		</div>
		<!-- More toggle items -->
	</div>
</div>
```

**Toggle CSS:**
```css
.toggle-list {
	display: flex;
	flex-direction: column;
}

.toggle-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid #f1f5f9;
}

.toggle-item:last-child {
	border-bottom: none;
}

.toggle-info {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.toggle-label {
	font-size: 0.9rem;
	font-weight: 500;
	color: #1a1a2e;
}

.toggle-desc {
	font-size: 0.8rem;
	color: #64748b;
}

.toggle {
	position: relative;
	display: inline-block;
	width: 48px;
	height: 26px;
}

.toggle input {
	opacity: 0;
	width: 0;
	height: 0;
}

.toggle-slider {
	position: absolute;
	cursor: pointer;
	inset: 0;
	background: #cbd5e1;
	border-radius: 26px;
	transition: 0.3s;
}

.toggle-slider::before {
	content: '';
	position: absolute;
	height: 20px;
	width: 20px;
	left: 3px;
	bottom: 3px;
	background: white;
	border-radius: 50%;
	transition: 0.3s;
}

.toggle input:checked + .toggle-slider {
	background: linear-gradient(135deg, #7638FA, #D300C5);
}

.toggle input:checked + .toggle-slider::before {
	transform: translateX(22px);
}
```

#### 4. Account Settings Card
Display-only info:
- Account Status (with colored badge)
- Timezone (with Change link)
- Email
- Phone

#### 5. Danger Zone Card
```html
<div class="settings-card danger">
	<div class="card-header">
		<h3 class="card-title">Danger Zone</h3>
	</div>
	<div class="danger-actions">
		<div class="danger-item">
			<div>
				<span class="danger-label">Deactivate Account</span>
				<span class="danger-desc">Temporarily hide your profile from clients</span>
			</div>
			<button class="btn-danger-outline">Deactivate</button>
		</div>
		<div class="danger-item">
			<div>
				<span class="danger-label">Delete Account</span>
				<span class="danger-desc">Permanently delete your account and all data</span>
			</div>
			<button class="btn-danger">Delete Account</button>
		</div>
	</div>
</div>
```

**Danger Zone CSS:**
```css
.settings-card.danger {
	border: 1px solid #fecaca;
}

.danger-actions {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.danger-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: #fef2f2;
	border-radius: 12px;
}

.danger-label {
	display: block;
	font-size: 0.9rem;
	font-weight: 500;
	color: #1a1a2e;
}

.danger-desc {
	display: block;
	font-size: 0.8rem;
	color: #64748b;
}

.btn-danger-outline {
	padding: 0.5rem 1rem;
	border: 1px solid #dc2626;
	border-radius: 8px;
	background: white;
	color: #dc2626;
	font-size: 0.85rem;
	font-weight: 500;
	cursor: pointer;
}

.btn-danger {
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 8px;
	background: #dc2626;
	color: white;
	font-size: 0.85rem;
	font-weight: 500;
	cursor: pointer;
}
```

---

## Common Patterns Reference

### Section Header
```html
<div class="section-header">
	<h2>Section Title</h2>
	<a href="/link">View All →</a>
</div>
```

### Table in Card
```html
<section class="section">
	<div class="section-header">
		<h2>Table Title</h2>
	</div>
	<div class="table-wrapper">
		<table class="data-table">
			<thead>...</thead>
			<tbody>...</tbody>
		</table>
	</div>
</section>
```

### Type Badges
- `.type-badge.chat` - Blue (#dbeafe / #1d4ed8)
- `.type-badge.call` or `.type-badge.phone` - Green (#dcfce7 / #16a34a)
- `.type-badge.text` or `.type-badge.email` - Yellow (#fef3c7 / #d97706)

### Status Badges
- `.status-badge.completed` - Green
- `.status-badge.pending` - Yellow
- `.status-badge.processing` - Blue
- `.status-badge.online` - Green
- `.status-badge.offline` - Gray

### Buttons
- `.btn-primary` - White bg, magenta text (hero actions)
- `.table-btn` - Gradient bg, white text (table actions)
- `.table-btn.secondary` - White bg, gray text, border (secondary actions)

---

## Checklist

- [ ] Create `/readings/+page.svelte`
- [ ] Create `/clients/+page.svelte`
- [ ] Create `/earnings/+page.svelte`
- [ ] Create `/schedule/+page.svelte`
- [ ] Create `/settings/+page.svelte`
- [ ] Test all pages at 1200px, 1024px, and 768px breakpoints
- [ ] Verify active tab state on each page
- [ ] Ensure consistent spacing and typography across all pages
