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

	// Mock readings data
	let readings = $state([
		{
			id: 1,
			clientName: 'Sarah M.',
			clientInitials: 'SM',
			type: 'chat',
			timestamp: '2026-01-09T14:30:00Z',
			duration: 23,
			commission: 24.50,
			status: 'completed'
		},
		{
			id: 2,
			clientName: 'Michael R.',
			clientInitials: 'MR',
			type: 'call',
			timestamp: '2026-01-09T11:15:00Z',
			duration: 45,
			commission: 38.75,
			status: 'completed'
		},
		{
			id: 3,
			clientName: 'Jennifer L.',
			clientInitials: 'JL',
			type: 'text',
			timestamp: '2026-01-08T16:45:00Z',
			duration: 0,
			commission: 15.00,
			status: 'completed'
		},
		{
			id: 4,
			clientName: 'David K.',
			clientInitials: 'DK',
			type: 'chat',
			timestamp: '2026-01-08T09:20:00Z',
			duration: 31,
			commission: 31.25,
			status: 'completed'
		},
		{
			id: 5,
			clientName: 'Amanda S.',
			clientInitials: 'AS',
			type: 'call',
			timestamp: '2026-01-07T18:00:00Z',
			duration: 52,
			commission: 52.00,
			status: 'completed'
		},
		{
			id: 6,
			clientName: 'Robert T.',
			clientInitials: 'RT',
			type: 'chat',
			timestamp: '2026-01-07T14:30:00Z',
			duration: 18,
			commission: 18.00,
			status: 'cancelled'
		},
		{
			id: 7,
			clientName: 'Emily W.',
			clientInitials: 'EW',
			type: 'text',
			timestamp: '2026-01-07T10:00:00Z',
			duration: 0,
			commission: 12.50,
			status: 'completed'
		},
		{
			id: 8,
			clientName: 'Chris P.',
			clientInitials: 'CP',
			type: 'call',
			timestamp: '2026-01-06T16:20:00Z',
			duration: 38,
			commission: 42.00,
			status: 'completed'
		},
		{
			id: 9,
			clientName: 'Lisa H.',
			clientInitials: 'LH',
			type: 'chat',
			timestamp: '2026-01-06T11:45:00Z',
			duration: 27,
			commission: 27.50,
			status: 'completed'
		},
		{
			id: 10,
			clientName: 'Kevin M.',
			clientInitials: 'KM',
			type: 'text',
			timestamp: '2026-01-05T19:30:00Z',
			duration: 0,
			commission: 15.00,
			status: 'completed'
		},
		{
			id: 11,
			clientName: 'Nancy B.',
			clientInitials: 'NB',
			type: 'chat',
			timestamp: '2026-01-05T15:00:00Z',
			duration: 42,
			commission: 45.00,
			status: 'completed'
		},
		{
			id: 12,
			clientName: 'Thomas G.',
			clientInitials: 'TG',
			type: 'call',
			timestamp: '2026-01-05T09:15:00Z',
			duration: 35,
			commission: 38.50,
			status: 'completed'
		},
		{
			id: 13,
			clientName: 'Rachel F.',
			clientInitials: 'RF',
			type: 'chat',
			timestamp: '2026-01-04T17:30:00Z',
			duration: 19,
			commission: 19.00,
			status: 'completed'
		},
		{
			id: 14,
			clientName: 'Daniel J.',
			clientInitials: 'DJ',
			type: 'text',
			timestamp: '2026-01-04T12:00:00Z',
			duration: 0,
			commission: 9.99,
			status: 'completed'
		},
		{
			id: 15,
			clientName: 'Michelle C.',
			clientInitials: 'MC',
			type: 'call',
			timestamp: '2026-01-03T14:45:00Z',
			duration: 28,
			commission: 32.00,
			status: 'completed'
		}
	]);

	let filter = $state({
		type: 'all',
		sort: 'newest'
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

	// Filtered readings
	let filteredReadings = $derived(() => {
		let result = [...readings];

		if (filter.type !== 'all') {
			result = result.filter(r => r.type === filter.type);
		}

		if (filter.sort === 'oldest') {
			result.reverse();
		}

		return result;
	});

	// Format date for display
	function formatDate(dateString: string): string {
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

	// Get total pages
	let totalPages = $derived(Math.ceil(pagination.total / pagination.perPage));
</script>

<svelte:head>
	<title>Reading History - Clairvora</title>
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
				<a href="/account/advisor/readings" class="tab active">Readings</a>
				<a href="/account/advisor/clients" class="tab">Clients</a>
				<a href="/account/advisor/earnings" class="tab">Earnings</a>
				<a href="/account/advisor/schedule" class="tab">Schedule</a>
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
			<!-- Reading Stats Cards -->
			<div class="metrics-grid">
				<div class="metric-card">
					<span class="metric-value">{stats.total.toLocaleString()}</span>
					<span class="metric-label">All Readings</span>
				</div>
				<div class="metric-card">
					<span class="metric-value">{stats.chat.toLocaleString()}</span>
					<span class="metric-label">Chat Readings</span>
				</div>
				<div class="metric-card">
					<span class="metric-value">{stats.call.toLocaleString()}</span>
					<span class="metric-label">Call Readings</span>
				</div>
				<div class="metric-card">
					<span class="metric-value">{stats.text.toLocaleString()}</span>
					<span class="metric-label">Text Readings</span>
				</div>
			</div>

			<!-- Filter Controls -->
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

			<!-- Readings Table -->
			<section class="section">
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Date/Time</th>
								<th>Client</th>
								<th>Type</th>
								<th>Duration</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each filteredReadings() as reading}
								<tr>
									<td>{formatDate(reading.timestamp)}</td>
									<td>
										<div class="client-cell">
											<div class="avatar">{reading.clientInitials}</div>
											<span>{reading.clientName}</span>
										</div>
									</td>
									<td><span class="type-badge {reading.type}">{reading.type.charAt(0).toUpperCase() + reading.type.slice(1)}</span></td>
									<td>{reading.type === 'text' ? '—' : `${reading.duration} min`}</td>
									<td>${reading.commission.toFixed(2)}</td>
									<td><button class="table-btn secondary">View</button></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<!-- Pagination -->
				<div class="pagination">
					<span class="pagination-info">Showing 1-{pagination.perPage} of {pagination.total} readings</span>
					<div class="pagination-controls">
						<button class="pagination-btn" disabled={pagination.page === 1}>Previous</button>
						<button class="pagination-btn active">1</button>
						<button class="pagination-btn">2</button>
						<button class="pagination-btn">3</button>
						<span class="pagination-ellipsis">...</span>
						<button class="pagination-btn">{totalPages}</button>
						<button class="pagination-btn" disabled={pagination.page === totalPages}>Next</button>
					</div>
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

	/* Metrics Grid */
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.metric-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.metric-value {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		display: block;
	}

	.metric-label {
		font-size: 0.85rem;
		color: #64748b;
		display: block;
		margin: 0.5rem 0 0;
	}

	/* Filter Bar */
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

	.client-cell {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.client-cell span {
		font-weight: 600;
		color: #1a1a2e;
	}

	.type-badge {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
	}

	.type-badge.chat {
		background: #dbeafe;
		color: #1d4ed8;
	}

	.type-badge.phone,
	.type-badge.call {
		background: #dcfce7;
		color: #16a34a;
	}

	.type-badge.text,
	.type-badge.email {
		background: #fef3c7;
		color: #d97706;
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

	/* Pagination */
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

	/* Responsive */
	@media (max-width: 1024px) {
		.metrics-grid {
			grid-template-columns: repeat(2, 1fr);
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

		.metrics-grid {
			grid-template-columns: 1fr 1fr;
		}

		.filter-bar {
			flex-direction: column;
		}

		.pagination {
			flex-direction: column;
			gap: 1rem;
		}

		.pagination-controls {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
