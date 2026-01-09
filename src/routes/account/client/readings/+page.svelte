<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock reading data
	const readings = [
		{
			id: 'RDG-2025-1234',
			advisor: { name: 'Psychic Sarah', image: '/advisors/profile-1.jpg' },
			type: 'Chat',
			date: 'Jan 5, 2026',
			time: '2:30 PM',
			duration: '24 min',
			cost: '$28.80',
			status: 'Completed',
			hasReview: true
		},
		{
			id: 'RDG-2025-1233',
			advisor: { name: 'Mystic Milo', image: '/advisors/profile-2.jpg' },
			type: 'Phone',
			date: 'Jan 3, 2026',
			time: '10:15 AM',
			duration: '18 min',
			cost: '$21.60',
			status: 'Completed',
			hasReview: false
		},
		{
			id: 'RDG-2025-1232',
			advisor: { name: 'Tarot Luna', image: '/advisors/profile-3.jpg' },
			type: 'Email',
			date: 'Dec 28, 2025',
			time: '4:00 PM',
			duration: '—',
			cost: '$15.00',
			status: 'Completed',
			hasReview: true
		},
		{
			id: 'RDG-2025-1231',
			advisor: { name: 'Astrologer Amy', image: '/advisors/profile-4.jpg' },
			type: 'Chat',
			date: 'Dec 25, 2025',
			time: '8:45 PM',
			duration: '32 min',
			cost: '$38.40',
			status: 'Completed',
			hasReview: true
		},
		{
			id: 'RDG-2025-1230',
			advisor: { name: 'Psychic Sarah', image: '/advisors/profile-1.jpg' },
			type: 'Phone',
			date: 'Dec 20, 2025',
			time: '11:00 AM',
			duration: '15 min',
			cost: '$18.00',
			status: 'Completed',
			hasReview: false
		},
		{
			id: 'RDG-2025-1229',
			advisor: { name: 'Medium Marcus', image: '/advisors/profile-5.jpg' },
			type: 'Chat',
			date: 'Dec 15, 2025',
			time: '3:20 PM',
			duration: '28 min',
			cost: '$33.60',
			status: 'Completed',
			hasReview: true
		}
	];

	let filterType = $state('all');
	let sortOrder = $state('newest');
</script>

<svelte:head>
	<title>My Readings - Clairvora</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner -->
	<header class="hero">
		<nav class="top-bar">
			<div class="top-bar-content">
				<a href="/" class="logo">Clairvora</a>
				<div class="nav-right">
					<button class="btn-ghost">Help</button>
					<button class="btn-add">+ Add Funds</button>
					<SignOutButton signOutOptions={{ redirectUrl: '/' }}>
						<button class="btn-ghost">Log Out</button>
					</SignOutButton>
				</div>
			</div>
		</nav>

		<div class="hero-section">
			<div class="hero-content">
				<div class="hero-text">
					<span class="tier-badge">Premier Member</span>
					<h1>Welcome back, Jason</h1>
					<p>Your spiritual journey awaits. You have <strong>$40.68</strong> in your wallet.</p>
				</div>
				<div class="hero-actions">
					<button class="btn-primary">Start a Reading</button>
					<button class="btn-secondary">Browse Advisors</button>
				</div>
			</div>
		</div>

		<div class="tabs-wrapper">
			<div class="tabs">
				<a href="/account/client" class="tab">Overview</a>
				<a href="/account/client/readings" class="tab active">My Readings</a>
				<a href="/account/client/favorites" class="tab">Favorites</a>
				<a href="/account/client/wallet" class="tab">Wallet</a>
				<a href="/account/client/settings" class="tab">Settings</a>
			</div>
		</div>
	</header>

	<!-- Stats Bar -->
	<section class="stats-bar-section">
		<div class="container">
			<div class="stats-bar">
				<div class="stat">
					<span class="stat-value">$40.68</span>
					<span class="stat-label">Balance</span>
					<a href="/account/client/wallet" class="stat-link">Add Funds</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">3</span>
					<span class="stat-label">Unread Messages</span>
					<a href="/account/client/messages" class="stat-link">View All</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">12</span>
					<span class="stat-label">Total Readings</span>
					<a href="/account/client/readings" class="stat-link">History</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat rewards-stat">
					<div class="stat-row">
						<span class="stat-value">Premier</span>
						<span class="stat-perk">20% off</span>
					</div>
					<span class="stat-label">Rewards Tier (3 of 4)</span>
					<div class="mini-progress">
						<div class="mini-fill" style="width: 75%"></div>
					</div>
				</div>
				<div class="stat-divider"></div>
				<div class="stat free-reading-stat">
					<span class="stat-badge">Available</span>
					<span class="stat-label">1 Free Reading</span>
					<button class="claim-btn">Claim Now</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<main class="main">
		<div class="container">
			<!-- Filters -->
			<section class="section">
				<div class="section-header">
					<h2>Reading History</h2>
					<div class="filters">
						<select bind:value={filterType} class="filter-select">
							<option value="all">All Types</option>
							<option value="chat">Chat</option>
							<option value="phone">Phone</option>
							<option value="email">Email</option>
						</select>
						<select bind:value={sortOrder} class="filter-select">
							<option value="newest">Newest First</option>
							<option value="oldest">Oldest First</option>
						</select>
					</div>
				</div>

				<div class="table-wrapper">
					<table class="advisors-table readings-table">
						<thead>
							<tr>
								<th>Advisor</th>
								<th>Type</th>
								<th>Date & Time</th>
								<th>Duration</th>
								<th>Cost</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{#each readings as reading}
								<tr>
									<td>
										<div class="advisor-cell">
											<img src={reading.advisor.image} alt={reading.advisor.name} />
											<span>{reading.advisor.name}</span>
										</div>
									</td>
									<td>
										<span class="type-badge {reading.type.toLowerCase()}">{reading.type}</span>
									</td>
									<td>
										<div class="date-cell">
											<span class="date">{reading.date}</span>
											<span class="time">{reading.time}</span>
										</div>
									</td>
									<td>{reading.duration}</td>
									<td class="cost">{reading.cost}</td>
									<td>
										<span class="status-badge completed">{reading.status}</span>
									</td>
									<td>
										<div class="action-buttons">
											{#if reading.type !== 'Phone'}
												<button class="table-btn secondary">Transcript</button>
											{/if}
											{#if !reading.hasReview}
												<button class="table-btn">Review</button>
											{:else}
												<button class="table-btn secondary">Connect</button>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<!-- Pagination -->
				<div class="pagination">
					<button class="page-btn" disabled>← Previous</button>
					<div class="page-numbers">
						<button class="page-num active">1</button>
						<button class="page-num">2</button>
						<button class="page-num">3</button>
					</div>
					<button class="page-btn">Next →</button>
				</div>
			</section>

			<!-- Reading Stats Summary -->
			<section class="reading-stats">
				<div class="reading-stat-card">
					<span class="reading-stat-value">12</span>
					<span class="reading-stat-label">Total Readings</span>
				</div>
				<div class="reading-stat-card">
					<span class="reading-stat-value">8</span>
					<span class="reading-stat-label">Chat Sessions</span>
				</div>
				<div class="reading-stat-card">
					<span class="reading-stat-value">3</span>
					<span class="reading-stat-label">Phone Calls</span>
				</div>
				<div class="reading-stat-card">
					<span class="reading-stat-value">1</span>
					<span class="reading-stat-label">Email Readings</span>
				</div>
			</section>

			<!-- Tips Section -->
			<section class="tips-section">
				<h3>Get More From Your Readings</h3>
				<div class="tips-row">
					<div class="tip-item">
						<strong>Review</strong> your past readings to track patterns and insights over time.
					</div>
					<div class="tip-item">
						<strong>Leave reviews</strong> for advisors to help others find the right connection.
					</div>
					<div class="tip-item">
						<strong>Reconnect</strong> with advisors who resonated with you for deeper guidance.
					</div>
					<div class="tip-item">
						<strong>Try different methods</strong> — chat, phone, and email each offer unique experiences.
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

	.stat-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

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
		margin-top: 0.5rem;
	}

	.mini-fill {
		height: 100%;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50px;
	}

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
		cursor: pointer;
		margin-top: 0.5rem;
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

	/* Filters */
	.filters {
		display: flex;
		gap: 0.75rem;
	}

	.filter-select {
		padding: 0.5rem 1rem;
		border-radius: 8px;
		border: 1px solid #e2e8f0;
		font-size: 0.875rem;
		color: #475569;
		background: white;
		cursor: pointer;
	}

	.filter-select:focus {
		outline: none;
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	/* Table */
	.table-wrapper {
		overflow-x: auto;
	}

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

	.advisors-table tr:last-child td {
		border-bottom: none;
	}

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

	/* Type Badges */
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

	.type-badge.phone {
		background: #dcfce7;
		color: #16a34a;
	}

	.type-badge.email {
		background: #fef3c7;
		color: #d97706;
	}

	/* Date Cell */
	.date-cell {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.date-cell .date {
		font-weight: 500;
		color: #1a1a2e;
	}

	.date-cell .time {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.cost {
		font-weight: 600;
		color: #1a1a2e;
	}

	.status-badge {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
	}

	.status-badge.completed {
		background: #dcfce7;
		color: #16a34a;
	}

	.status-badge.in-progress {
		background: #dbeafe;
		color: #1d4ed8;
	}

	.status-badge.scheduled {
		background: #fef3c7;
		color: #d97706;
	}

	/* Action Buttons */
	.action-buttons {
		display: flex;
		gap: 0.5rem;
	}

	.table-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.75rem;
		cursor: pointer;
		white-space: nowrap;
	}

	.table-btn.secondary {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	/* Pagination */
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.page-btn {
		background: white;
		border: 1px solid #e2e8f0;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		font-size: 0.875rem;
		color: #64748b;
		cursor: pointer;
	}

	.page-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-numbers {
		display: flex;
		gap: 0.5rem;
	}

	.page-num {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		font-size: 0.875rem;
		color: #64748b;
		cursor: pointer;
	}

	.page-num.active {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
	}

	/* Reading Stats */
	.reading-stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.reading-stat-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.reading-stat-value {
		display: block;
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.reading-stat-label {
		font-size: 0.85rem;
		color: #64748b;
	}

	/* Tips Section */
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
		gap: 0;
	}

	.tip-item {
		padding: 0 1.25rem;
		font-size: 0.9rem;
		color: #475569;
		line-height: 1.5;
		border-right: 1px solid rgba(118, 56, 250, 0.15);
	}

	.tip-item:first-child {
		padding-left: 0;
	}

	.tip-item:last-child {
		padding-right: 0;
		border-right: none;
	}

	.tip-item strong {
		color: #7638FA;
		font-weight: 600;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.reading-stats {
			grid-template-columns: repeat(2, 1fr);
		}

		.tips-row {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.tip-item {
			border-right: none;
			padding: 0;
		}

		.tip-item:nth-child(1),
		.tip-item:nth-child(2) {
			padding-bottom: 1rem;
			border-bottom: 1px solid rgba(118, 56, 250, 0.15);
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

		.section-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.filters {
			width: 100%;
		}

		.filter-select {
			flex: 1;
		}

		.reading-stats {
			grid-template-columns: repeat(2, 1fr);
		}

		.tips-section {
			padding: 1.25rem;
		}

		.tips-row {
			grid-template-columns: 1fr;
		}

		.tip-item:nth-child(1),
		.tip-item:nth-child(2),
		.tip-item:nth-child(3) {
			padding-bottom: 1rem;
			border-bottom: 1px solid rgba(118, 56, 250, 0.15);
		}

		.action-buttons {
			flex-direction: column;
		}
	}
</style>
