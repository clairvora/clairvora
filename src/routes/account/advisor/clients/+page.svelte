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

	// Mock clients data
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
			isRegular: true
		},
		{
			id: 2,
			name: 'Michael R.',
			initials: 'MR',
			email: 'michael.r@email.com',
			totalReadings: 8,
			totalSpent: 342.00,
			lastReading: '2026-01-09T11:15:00Z',
			isFavorite: false,
			isRegular: true
		},
		{
			id: 3,
			name: 'Jennifer L.',
			initials: 'JL',
			email: 'jennifer.l@email.com',
			totalReadings: 15,
			totalSpent: 623.75,
			lastReading: '2026-01-08T16:45:00Z',
			isFavorite: true,
			isRegular: true
		},
		{
			id: 4,
			name: 'David K.',
			initials: 'DK',
			email: 'david.k@email.com',
			totalReadings: 6,
			totalSpent: 248.00,
			lastReading: '2026-01-08T09:20:00Z',
			isFavorite: false,
			isRegular: true
		},
		{
			id: 5,
			name: 'Amanda S.',
			initials: 'AS',
			email: 'amanda.s@email.com',
			totalReadings: 22,
			totalSpent: 945.50,
			lastReading: '2026-01-07T18:00:00Z',
			isFavorite: true,
			isRegular: true
		},
		{
			id: 6,
			name: 'Robert T.',
			initials: 'RT',
			email: 'robert.t@email.com',
			totalReadings: 3,
			totalSpent: 127.50,
			lastReading: '2026-01-07T14:30:00Z',
			isFavorite: false,
			isRegular: false
		},
		{
			id: 7,
			name: 'Emily W.',
			initials: 'EW',
			email: 'emily.w@email.com',
			totalReadings: 7,
			totalSpent: 298.25,
			lastReading: '2026-01-07T10:00:00Z',
			isFavorite: false,
			isRegular: true
		},
		{
			id: 8,
			name: 'Chris P.',
			initials: 'CP',
			email: 'chris.p@email.com',
			totalReadings: 2,
			totalSpent: 89.00,
			lastReading: '2026-01-06T16:20:00Z',
			isFavorite: false,
			isRegular: false
		},
		{
			id: 9,
			name: 'Lisa H.',
			initials: 'LH',
			email: 'lisa.h@email.com',
			totalReadings: 11,
			totalSpent: 467.00,
			lastReading: '2026-01-06T11:45:00Z',
			isFavorite: true,
			isRegular: true
		},
		{
			id: 10,
			name: 'Kevin M.',
			initials: 'KM',
			email: 'kevin.m@email.com',
			totalReadings: 4,
			totalSpent: 178.00,
			lastReading: '2026-01-05T19:30:00Z',
			isFavorite: false,
			isRegular: false
		}
	]);

	let searchQuery = $state('');

	// Filtered clients based on search
	let filteredClients = $derived(() => {
		if (!searchQuery) return clients;
		const query = searchQuery.toLowerCase();
		return clients.filter(c =>
			c.name.toLowerCase().includes(query) ||
			c.email.toLowerCase().includes(query)
		);
	});

	// Regular clients (5+ readings)
	let regularClients = $derived(() => {
		return clients.filter(c => c.isRegular);
	});

	// Format date for display
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	// Get time of day greeting
	function getGreeting(): string {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good morning';
		if (hour < 17) return 'Good afternoon';
		return 'Good evening';
	}
</script>

<svelte:head>
	<title>My Clients - Clairvora</title>
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
				<a href="/account/advisor/clients" class="tab active">Clients</a>
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
			<!-- Search Bar -->
			<div class="search-bar">
				<input
					type="text"
					placeholder="Search clients..."
					bind:value={searchQuery}
					class="search-input"
				/>
			</div>

			<!-- Regular Clients Section -->
			<section class="section">
				<div class="section-header">
					<h2>Regular Clients</h2>
					<span class="badge-count">{regularClients().length} clients</span>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Client</th>
								<th>Total Readings</th>
								<th>Total Spent</th>
								<th>Last Reading</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each regularClients() as client}
								<tr>
									<td>
										<div class="client-cell">
											<div class="avatar">{client.initials}</div>
											<div class="client-info">
												<span class="client-name">{client.name}</span>
												<span class="client-email">{client.email}</span>
											</div>
										</div>
									</td>
									<td>{client.totalReadings}</td>
									<td>${client.totalSpent.toFixed(2)}</td>
									<td>{formatDate(client.lastReading)}</td>
									<td><span class="status-badge regular">Regular</span></td>
									<td><button class="table-btn secondary">View History</button></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<!-- All Clients Section -->
			<section class="section">
				<div class="section-header">
					<h2>All Clients</h2>
					<span class="badge-count">{filteredClients().length} clients</span>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Client</th>
								<th>Total Readings</th>
								<th>Total Spent</th>
								<th>Last Reading</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each filteredClients() as client}
								<tr>
									<td>
										<div class="client-cell">
											<div class="avatar">{client.initials}</div>
											<div class="client-info">
												<span class="client-name">{client.name}</span>
												<span class="client-email">{client.email}</span>
											</div>
										</div>
									</td>
									<td>{client.totalReadings}</td>
									<td>${client.totalSpent.toFixed(2)}</td>
									<td>{formatDate(client.lastReading)}</td>
									<td>
										{#if client.isRegular}
											<span class="status-badge regular">Regular</span>
										{:else}
											<span class="status-badge new">New</span>
										{/if}
									</td>
									<td><button class="table-btn secondary">View History</button></td>
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

	.badge-count {
		font-size: 0.85rem;
		color: #64748b;
		background: #f1f5f9;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
	}

	/* Search Bar */
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
		flex-shrink: 0;
	}

	.client-info {
		display: flex;
		flex-direction: column;
	}

	.client-name {
		font-weight: 600;
		color: #1a1a2e;
	}

	.client-email {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.status-badge {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
	}

	.status-badge.regular {
		background: #dbeafe;
		color: #1d4ed8;
	}

	.status-badge.new {
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
		/* Styles for tablet */
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

		.search-input {
			max-width: 100%;
		}
	}
</style>
