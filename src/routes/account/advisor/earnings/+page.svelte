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

	// Balance info
	let balance = $state({
		total: 1247.50,
		pending: 127.50,
		available: 1120.00,
		withdrawalMethod: 'Payoneer'
	});

	// Earnings breakdown
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

	// Transaction history
	let transactions = $state([
		{
			id: 1,
			date: '2026-01-09T14:30:00Z',
			clientName: 'Sarah M.',
			type: 'chat',
			amount: 24.50,
			status: 'completed'
		},
		{
			id: 2,
			date: '2026-01-09T11:15:00Z',
			clientName: 'Michael R.',
			type: 'call',
			amount: 38.75,
			status: 'completed'
		},
		{
			id: 3,
			date: '2026-01-08T16:45:00Z',
			clientName: 'Jennifer L.',
			type: 'text',
			amount: 15.00,
			status: 'completed'
		},
		{
			id: 4,
			date: '2026-01-08T09:20:00Z',
			clientName: 'David K.',
			type: 'chat',
			amount: 31.25,
			status: 'pending'
		},
		{
			id: 5,
			date: '2026-01-07T18:00:00Z',
			clientName: 'Amanda S.',
			type: 'call',
			amount: 52.00,
			status: 'completed'
		},
		{
			id: 6,
			date: '2026-01-07T14:30:00Z',
			clientName: 'Robert T.',
			type: 'chat',
			amount: 18.00,
			status: 'completed'
		},
		{
			id: 7,
			date: '2026-01-07T10:00:00Z',
			clientName: 'Emily W.',
			type: 'text',
			amount: 12.50,
			status: 'pending'
		}
	]);

	// Payout history
	let payouts = $state([
		{
			id: 1,
			date: '2026-01-01T00:00:00Z',
			amount: 500.00,
			method: 'Payoneer',
			status: 'completed'
		},
		{
			id: 2,
			date: '2025-12-15T00:00:00Z',
			amount: 750.00,
			method: 'Payoneer',
			status: 'completed'
		},
		{
			id: 3,
			date: '2025-12-01T00:00:00Z',
			amount: 425.00,
			method: 'Payoneer',
			status: 'completed'
		},
		{
			id: 4,
			date: '2025-11-15T00:00:00Z',
			amount: 600.00,
			method: 'Payoneer',
			status: 'completed'
		}
	]);

	// Calculate max bar width
	let maxEarning = $derived(Math.max(earnings.byType.chat, earnings.byType.call, earnings.byType.text));

	// Format date for display
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

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
</script>

<svelte:head>
	<title>Earnings - Clairvora</title>
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
				<a href="/account/advisor/earnings" class="tab active">Earnings</a>
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
			<!-- Balance Card -->
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

			<!-- Earnings Breakdown -->
			<div class="earnings-grid">
				<div class="earnings-card">
					<span class="earnings-label">Chat Earnings</span>
					<span class="earnings-value">${earnings.byType.chat.toFixed(2)}</span>
					<div class="earnings-bar chat" style="width: {(earnings.byType.chat / maxEarning) * 100}%"></div>
				</div>
				<div class="earnings-card">
					<span class="earnings-label">Call Earnings</span>
					<span class="earnings-value">${earnings.byType.call.toFixed(2)}</span>
					<div class="earnings-bar call" style="width: {(earnings.byType.call / maxEarning) * 100}%"></div>
				</div>
				<div class="earnings-card">
					<span class="earnings-label">Text Earnings</span>
					<span class="earnings-value">${earnings.byType.text.toFixed(2)}</span>
					<div class="earnings-bar text" style="width: {(earnings.byType.text / maxEarning) * 100}%"></div>
				</div>
			</div>

			<!-- Transaction History -->
			<section class="section">
				<div class="section-header">
					<h2>Recent Transactions</h2>
					<a href="/account/advisor/readings">View All →</a>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Date</th>
								<th>Client</th>
								<th>Type</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{#each transactions as transaction}
								<tr>
									<td>{formatDateTime(transaction.date)}</td>
									<td>{transaction.clientName}</td>
									<td><span class="type-badge {transaction.type}">{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</span></td>
									<td>${transaction.amount.toFixed(2)}</td>
									<td><span class="status-badge {transaction.status}">{transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</span></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<!-- Payout History -->
			<section class="section">
				<div class="section-header">
					<h2>Payout History</h2>
				</div>
				<div class="table-wrapper">
					<table class="data-table">
						<thead>
							<tr>
								<th>Date</th>
								<th>Amount</th>
								<th>Method</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{#each payouts as payout}
								<tr>
									<td>{formatDate(payout.date)}</td>
									<td>${payout.amount.toFixed(2)}</td>
									<td>{payout.method}</td>
									<td><span class="status-badge {payout.status}">{payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}</span></td>
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

	.section-header a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Balance Card */
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

	/* Earnings Grid */
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

	/* Responsive */
	@media (max-width: 1024px) {
		.earnings-grid {
			grid-template-columns: 1fr;
		}

		.balance-row {
			flex-wrap: wrap;
			gap: 1.5rem;
		}

		.balance-divider {
			display: none;
		}

		.balance-item {
			flex: 1 1 40%;
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

		.balance-card-large {
			padding: 1.5rem;
		}

		.balance-value.large {
			font-size: 2rem;
		}

		.balance-item {
			flex: 1 1 100%;
		}
	}
</style>
