<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock advisor data
	let advisor = $state({
		firstName: 'Luna',
		displayName: 'Mystic Luna',
		balance: 1247.50,
		isOnline: true,
		rating: 4.9,
		totalReadings: 1847,
		chatReadings: 892,
		callReadings: 623,
		textReadings: 332,
		todayEarnings: 127.50,
		queueCount: 3
	});

	// Schedule data
	let schedule = $state({
		Monday: [
			{ start: '09:00', end: '12:00' },
			{ start: '14:00', end: '18:00' }
		],
		Tuesday: [
			{ start: '09:00', end: '17:00' }
		],
		Wednesday: [],
		Thursday: [
			{ start: '10:00', end: '16:00' }
		],
		Friday: [
			{ start: '09:00', end: '12:00' }
		],
		Saturday: [],
		Sunday: []
	});

	// Time off periods
	let timeOff = $state([
		{
			id: 1,
			start: '2026-01-15T09:00:00Z',
			end: '2026-01-15T12:00:00Z',
			isActive: false
		},
		{
			id: 2,
			start: '2026-01-20T00:00:00Z',
			end: '2026-01-22T23:59:00Z',
			isActive: false
		}
	]);

	let timezone = $state('America/New_York');

	// Format time for display (convert 24h to 12h)
	function formatTime(time: string): string {
		const [hours, minutes] = time.split(':').map(Number);
		const period = hours >= 12 ? 'PM' : 'AM';
		const displayHours = hours % 12 || 12;
		return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
	}

	// Format date for display
	function formatDateTime(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: '2-digit',
			hour12: true
		});
	}

	// Get time of day greeting
	function getGreeting(): string {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good morning';
		if (hour < 17) return 'Good afternoon';
		return 'Good evening';
	}

	// Quick break functions (mock)
	function takeBreak(duration: string) {
		console.log(`Taking a ${duration} break`);
	}
</script>

<svelte:head>
	<title>Schedule - Clairvora</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner -->
	<header class="hero">
		<nav class="top-bar">
			<div class="top-bar-content">
				<a href="/" class="logo">Clairvora</a>
				<div class="nav-right">
					<button class="btn-ghost">Help</button>
					<button class="btn-add">Go Online</button>
					<SignOutButton signOutOptions={{ redirectUrl: '/' }}>
						<span class="btn-ghost">Log Out</span>
					</SignOutButton>
				</div>
			</div>
		</nav>

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
				<a href="/account/advisor" class="tab">Overview</a>
				<a href="/account/advisor/readings" class="tab">Readings</a>
				<a href="/account/advisor/clients" class="tab">Clients</a>
				<a href="/account/advisor/earnings" class="tab">Earnings</a>
				<a href="/account/advisor/schedule" class="tab active">Schedule</a>
				<a href="/account/advisor/settings" class="tab">Settings</a>
			</div>
		</div>
	</header>

	<!-- Stats Bar -->
	<section class="stats-bar-section">
		<div class="container">
			<div class="stats-bar">
				<div class="stat">
					<span class="stat-value">${advisor.todayEarnings.toFixed(2)}</span>
					<span class="stat-label">Today's Earnings</span>
					<a href="/account/advisor/earnings" class="stat-link">View All</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.queueCount}</span>
					<span class="stat-label">Clients in Queue</span>
					<a href="/account/advisor#queue" class="stat-link">View Queue</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.rating} ★</span>
					<span class="stat-label">Rating</span>
					<a href="/account/advisor/reviews" class="stat-link">Reviews</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.totalReadings.toLocaleString()}</span>
					<span class="stat-label">Total Readings</span>
					<a href="/account/advisor/readings" class="stat-link">History</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat status-stat">
					<span class="stat-badge online">Online</span>
					<span class="stat-label">Current Status</span>
					<button class="status-btn">Go Offline</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<main class="main">
		<div class="container">
			<!-- Timezone Bar -->
			<div class="timezone-bar">
				<span>Your timezone: <strong>{timezone}</strong></span>
				<a href="/account/advisor/settings">Change in Settings →</a>
			</div>

			<!-- Quick Time-Off -->
			<div class="quick-timeoff">
				<h4>Quick Break</h4>
				<div class="quick-buttons">
					<button class="quick-btn" onclick={() => takeBreak('15 min')}>15 min</button>
					<button class="quick-btn" onclick={() => takeBreak('30 min')}>30 min</button>
					<button class="quick-btn" onclick={() => takeBreak('1 hour')}>1 hour</button>
					<button class="quick-btn" onclick={() => takeBreak('2 hours')}>2 hours</button>
					<button class="quick-btn" onclick={() => takeBreak('rest of today')}>Rest of Today</button>
				</div>
			</div>

			<!-- Weekly Schedule -->
			<div class="schedule-card">
				<div class="card-header">
					<h3 class="card-title">Weekly Availability</h3>
					<button class="table-btn">+ Add Time Slot</button>
				</div>

				<div class="schedule-grid">
					{#each Object.entries(schedule) as [day, slots]}
						<div class="schedule-day">
							<span class="day-name">{day}</span>
							<div class="day-slots">
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
						</div>
					{/each}
				</div>
			</div>

			<!-- Scheduled Time Off -->
			<section class="section">
				<div class="section-header">
					<h2>Scheduled Time Off</h2>
					<button class="table-btn">+ Schedule Time Off</button>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Start</th>
								<th>End</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each timeOff as period}
								<tr>
									<td>{formatDateTime(period.start)}</td>
									<td>{formatDateTime(period.end)}</td>
									<td>
										{#if period.isActive}
											<span class="status-badge active">Active Now</span>
										{:else}
											<span class="status-badge upcoming">Upcoming</span>
										{/if}
									</td>
									<td><button class="table-btn secondary">Delete</button></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		background: #f8fafc;
	}

	/* Hero */
	.hero {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding-bottom: 0;
	}

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

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
		letter-spacing: -0.02em;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.btn-ghost {
		background: transparent;
		border: none;
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
	}

	.btn-add {
		background: rgba(255, 255, 255, 0.2);
		border: none;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		backdrop-filter: blur(10px);
	}

	.hero-section {
		padding: 2rem 2rem 3rem;
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tier-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}

	.hero-text h1 {
		font-size: 2.25rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}

	.hero-text p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.1rem;
	}

	.hero-text strong {
		color: white;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
	}

	.btn-primary {
		background: white;
		color: #D300C5;
		border: none;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.5);
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		text-decoration: none;
	}

	.tabs-wrapper {
		padding: 0 2rem;
	}

	.tabs {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		gap: 0;
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

	/* Stats Bar */
	.stats-bar-section {
		background: white;
		border-bottom: 1px solid #e2e8f0;
		padding: 0 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
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
		text-decoration: none;
		font-weight: 500;
	}

	.stat-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.stat-badge.online {
		background: #dcfce7;
		color: #16a34a;
	}

	.status-btn {
		background: transparent;
		border: 1px solid #e2e8f0;
		color: #64748b;
		padding: 0.35rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 500;
		cursor: pointer;
		margin-top: 0.25rem;
	}

	/* Main */
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

	/* Timezone Bar */
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

	/* Quick Time Off */
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

	/* Schedule Card */
	.schedule-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		margin-bottom: 2rem;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.schedule-grid {
		display: flex;
		flex-direction: column;
		gap: 0;
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
		flex-shrink: 0;
	}

	.day-slots {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
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
		font-size: 0.85rem;
	}

	.slot-edit:hover,
	.slot-delete:hover {
		color: #D300C5;
	}

	/* Table */
	.table-wrapper {
		overflow-x: auto;
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.data-table th {
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

	.data-table td {
		padding: 1rem 1.25rem;
		font-size: 0.9rem;
		color: #475569;
		border-bottom: 1px solid #f1f5f9;
	}

	.data-table tr:last-child td {
		border-bottom: none;
	}

	.status-badge {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
	}

	.status-badge.active {
		background: #fecaca;
		color: #dc2626;
	}

	.status-badge.upcoming {
		background: #f1f5f9;
		color: #64748b;
	}

	.table-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
	}

	.table-btn.secondary {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.schedule-day {
			flex-direction: column;
			gap: 0.5rem;
		}

		.day-name {
			width: auto;
		}
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-section,
		.tabs-wrapper {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		.stats-bar-section {
			padding: 0 1.5rem;
		}

		.main {
			padding: 1.5rem;
		}

		.hero-content {
			flex-direction: column;
			text-align: center;
			gap: 1.5rem;
		}

		.hero-actions {
			flex-direction: column;
			width: 100%;
		}

		.tabs {
			overflow-x: auto;
		}

		.stats-bar {
			flex-direction: column;
		}

		.stat {
			border-bottom: 1px solid #e2e8f0;
			padding: 1.25rem;
		}

		.stat:last-child {
			border-bottom: none;
		}

		.stat-divider {
			display: none;
		}

		.timezone-bar {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
		}

		.quick-buttons {
			justify-content: center;
		}
	}
</style>
