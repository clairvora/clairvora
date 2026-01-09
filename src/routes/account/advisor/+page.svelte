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

	// Mock recent readings
	let recentReadings = $state([
		{
			id: 1,
			clientName: 'Sarah M.',
			type: 'chat',
			timestamp: '2026-01-09T14:30:00Z',
			commission: 24.50
		},
		{
			id: 2,
			clientName: 'Michael R.',
			type: 'call',
			timestamp: '2026-01-09T11:15:00Z',
			commission: 38.75
		},
		{
			id: 3,
			clientName: 'Jennifer L.',
			type: 'text',
			timestamp: '2026-01-08T16:45:00Z',
			commission: 15.00
		},
		{
			id: 4,
			clientName: 'David K.',
			type: 'chat',
			timestamp: '2026-01-08T09:20:00Z',
			commission: 31.25
		},
		{
			id: 5,
			clientName: 'Amanda S.',
			type: 'call',
			timestamp: '2026-01-07T18:00:00Z',
			commission: 52.00
		}
	]);

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
</script>

<svelte:head>
	<title>Advisor Dashboard - Clairvora</title>
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
				<a href="/account/advisor" class="tab active">Overview</a>
				<a href="/account/advisor/readings" class="tab">Readings</a>
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
					<a href="#queue" class="stat-link">View Queue</a>
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
			<!-- Queue Section -->
			<section class="section" id="queue">
				<div class="section-header">
					<h2>Clients in Queue</h2>
					<span class="queue-count">{advisor.queueCount} waiting</span>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Client</th>
								<th>Wait Time</th>
								<th>Reading Type</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="client-cell">
										<div class="avatar">SM</div>
										<span>Sarah M.</span>
									</div>
								</td>
								<td>2 min</td>
								<td><span class="type-badge chat">Chat</span></td>
								<td><button class="table-btn">Start Reading</button></td>
							</tr>
							<tr>
								<td>
									<div class="client-cell">
										<div class="avatar">JL</div>
										<span>Jennifer L.</span>
									</div>
								</td>
								<td>5 min</td>
								<td><span class="type-badge phone">Phone</span></td>
								<td><button class="table-btn">Start Reading</button></td>
							</tr>
							<tr>
								<td>
									<div class="client-cell">
										<div class="avatar">MR</div>
										<span>Michael R.</span>
									</div>
								</td>
								<td>8 min</td>
								<td><span class="type-badge chat">Chat</span></td>
								<td><button class="table-btn">Start Reading</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<!-- Balance & Messages Row -->
			<div class="two-column">
				<div class="card">
					<div class="card-header">
						<h3 class="card-title">Balance</h3>
					</div>
					<div class="card-body-center">
						<span class="balance-amount">${advisor.balance.toFixed(2)}</span>
					</div>
					<div class="card-footer">
						<a href="/account/advisor/earnings" class="table-btn">My Wallet</a>
					</div>
				</div>
				<div class="card">
					<div class="card-header">
						<h3 class="card-title">Messages</h3>
					</div>
					<div class="card-body-center">
						<svg class="messages-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
					</div>
					<div class="card-footer">
						<a href="/account/advisor/messages" class="table-btn">View Messages</a>
					</div>
				</div>
			</div>

			<!-- Recent Readings -->
			<section class="section">
				<div class="section-header">
					<h2>Last 5 Readings</h2>
					<a href="/account/advisor/readings">View all readings →</a>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Date/Time</th>
								<th>Client</th>
								<th>Type</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{#each recentReadings as reading}
								<tr>
									<td>{formatDate(reading.timestamp)}</td>
									<td>{reading.clientName}</td>
									<td><span class="type-badge {reading.type}">{reading.type.charAt(0).toUpperCase() + reading.type.slice(1)}</span></td>
									<td>${reading.commission.toFixed(2)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<!-- Reading Metrics -->
			<section class="section">
				<div class="section-header">
					<h2>Reading Metrics</h2>
				</div>
				<div class="metrics-grid">
					<div class="metric-card">
						<span class="metric-value">{advisor.totalReadings.toLocaleString()}</span>
						<span class="metric-label">Total Readings</span>
						<a href="/account/advisor/readings" class="table-btn secondary">View</a>
					</div>
					<div class="metric-card">
						<span class="metric-value">{advisor.chatReadings.toLocaleString()}</span>
						<span class="metric-label">Chat Readings</span>
						<a href="/account/advisor/readings?type=chat" class="table-btn secondary">View</a>
					</div>
					<div class="metric-card">
						<span class="metric-value">{advisor.callReadings.toLocaleString()}</span>
						<span class="metric-label">Call Readings</span>
						<a href="/account/advisor/readings?type=call" class="table-btn secondary">View</a>
					</div>
					<div class="metric-card">
						<span class="metric-value">{advisor.textReadings.toLocaleString()}</span>
						<span class="metric-label">Text Readings</span>
						<a href="/account/advisor/readings?type=text" class="table-btn secondary">View</a>
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
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.queue-count {
		font-size: 0.9rem;
		color: #64748b;
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

	/* Two Column */
	.two-column {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-header {
		margin-bottom: 1rem;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.card-body-center {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.balance-amount {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.messages-icon {
		color: #94a3b8;
	}

	.card-footer {
		display: flex;
		justify-content: center;
	}

	/* Metrics Grid */
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
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
		margin: 0.5rem 0 1rem;
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

		.two-column {
			grid-template-columns: 1fr;
		}

		.metrics-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
