<script lang="ts">
	// V4D: Minimalist with Large Whitespace
	// Clean, zen-like design with breathing room
</script>

<svelte:head>
	<title>Account V4D - Minimalist</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner (same as V4) -->
	<header class="hero">
		<nav class="top-bar">
			<a href="/" class="logo">Clairvora</a>
			<div class="nav-right">
				<button class="btn-ghost">Help</button>
				<button class="btn-add">+ Add Funds</button>
				<div class="user-menu">
					<img src="/advisors/profile-14.jpg" alt="User" />
				</div>
			</div>
		</nav>

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

		<div class="tabs">
			<a href="/mockups/account-v4d" class="tab active">Overview</a>
			<a href="/mockups/account-v4d" class="tab">My Readings</a>
			<a href="/mockups/account-v4d" class="tab">Favorites</a>
			<a href="/mockups/account-v4d" class="tab">Wallet</a>
			<a href="/mockups/account-v4d" class="tab">Settings</a>
		</div>
	</header>

	<!-- Main Content: Minimalist Layout -->
	<main class="main">
		<div class="container">
			<!-- Balance Display -->
			<section class="balance-section">
				<div class="balance-display">
					<span class="balance-label">Available Balance</span>
					<span class="balance-amount">$40.68</span>
					<div class="balance-actions">
						<button class="balance-btn primary">Add Funds</button>
						<button class="balance-btn">Transaction History</button>
					</div>
				</div>
			</section>

			<!-- Divider -->
			<hr class="divider" />

			<!-- Start a Reading Section -->
			<section class="start-section">
				<h2>Start a Reading</h2>
				<p class="section-description">Choose how you'd like to connect with an advisor</p>

				<div class="reading-options">
					<button class="option-card">
						<div class="option-icon chat">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
						</div>
						<h3>Chat</h3>
						<p>Text-based conversation</p>
					</button>

					<button class="option-card">
						<div class="option-icon voice">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						</div>
						<h3>Voice</h3>
						<p>Phone call reading</p>
					</button>

					<button class="option-card">
						<div class="option-icon video">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
						</div>
						<h3>Video</h3>
						<p>Face-to-face session</p>
					</button>

					<button class="option-card">
						<div class="option-icon email">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
						</div>
						<h3>Email</h3>
						<p>Detailed written response</p>
					</button>
				</div>
			</section>

			<!-- Divider -->
			<hr class="divider" />

			<!-- Favorites Section -->
			<section class="favorites-section">
				<div class="section-header">
					<h2>Favorite Advisors</h2>
					<a href="#" class="view-all">View All</a>
				</div>

				<div class="favorites-list">
					<div class="favorite-item online">
						<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
						<div class="favorite-info">
							<h4>Psychic Sarah</h4>
							<span class="specialty">Love & Relationships</span>
						</div>
						<div class="favorite-status">
							<span class="status-dot"></span>
							<span>Online</span>
						</div>
						<button class="connect-btn">Connect</button>
					</div>

					<div class="favorite-item online">
						<img src="/advisors/profile-2.jpg" alt="Mystic Milo" />
						<div class="favorite-info">
							<h4>Mystic Milo</h4>
							<span class="specialty">Career & Finance</span>
						</div>
						<div class="favorite-status">
							<span class="status-dot"></span>
							<span>Online</span>
						</div>
						<button class="connect-btn">Connect</button>
					</div>

					<div class="favorite-item">
						<img src="/advisors/profile-3.jpg" alt="Tarot Luna" />
						<div class="favorite-info">
							<h4>Tarot Luna</h4>
							<span class="specialty">Tarot Reading</span>
						</div>
						<div class="favorite-status offline">
							<span class="status-dot"></span>
							<span>Offline</span>
						</div>
						<button class="schedule-btn">Schedule</button>
					</div>
				</div>
			</section>

			<!-- Divider -->
			<hr class="divider" />

			<!-- Recent Activity -->
			<section class="activity-section">
				<div class="section-header">
					<h2>Recent Activity</h2>
					<a href="#" class="view-all">View All</a>
				</div>

				<div class="activity-list">
					<div class="activity-item">
						<div class="activity-date">
							<span class="day">28</span>
							<span class="month">Dec</span>
						</div>
						<div class="activity-content">
							<h4>Chat Reading with Psychic Sarah</h4>
							<p>15 minute session • $12.50</p>
						</div>
						<div class="activity-rating">
							<span class="stars">★★★★★</span>
						</div>
					</div>

					<div class="activity-item">
						<div class="activity-date">
							<span class="day">25</span>
							<span class="month">Dec</span>
						</div>
						<div class="activity-content">
							<h4>Voice Call with Mystic Milo</h4>
							<p>30 minute session • $45.00</p>
						</div>
						<div class="activity-rating">
							<span class="stars">★★★★★</span>
						</div>
					</div>

					<div class="activity-item">
						<div class="activity-date">
							<span class="day">20</span>
							<span class="month">Dec</span>
						</div>
						<div class="activity-content">
							<h4>Achieved Premier Member Status</h4>
							<p>Unlocked 20% discount on all readings</p>
						</div>
						<div class="activity-badge">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		background: #fafafa;
	}

	/* Hero */
	.hero {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding-bottom: 0;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
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
	}

	.user-menu img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.3);
		object-fit: cover;
	}

	.hero-content {
		padding: 2rem 3rem 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1400px;
		margin: 0 auto;
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

	.tabs {
		display: flex;
		gap: 0;
		padding: 0 3rem;
		background: rgba(0, 0, 0, 0.1);
		max-width: 1400px;
		margin: 0 auto;
	}

	.tab {
		padding: 1rem 1.5rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		border-bottom: 3px solid transparent;
	}

	.tab.active {
		color: white;
		border-bottom-color: white;
	}

	/* Main */
	.main {
		padding: 4rem 0;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Divider */
	.divider {
		border: none;
		border-top: 1px solid #e2e8f0;
		margin: 4rem 0;
	}

	/* Balance Section */
	.balance-section {
		text-align: center;
	}

	.balance-display {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.balance-label {
		font-size: 0.9rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}

	.balance-amount {
		font-size: 4rem;
		font-weight: 300;
		color: #1a1a2e;
		letter-spacing: -0.02em;
	}

	.balance-actions {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}

	.balance-btn {
		padding: 0.875rem 2rem;
		border-radius: 50px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s;
	}

	.balance-btn.primary {
		background: #1a1a2e;
		color: white;
		border: none;
	}

	.balance-btn.primary:hover {
		background: #2d2d4a;
	}

	.balance-btn:not(.primary) {
		background: transparent;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	.balance-btn:not(.primary):hover {
		border-color: #1a1a2e;
		color: #1a1a2e;
	}

	/* Start Section */
	.start-section {
		text-align: center;
	}

	.start-section h2 {
		font-size: 1.75rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.section-description {
		color: #64748b;
		font-size: 1rem;
		margin-bottom: 2.5rem;
	}

	.reading-options {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.option-card {
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		cursor: pointer;
		transition: all 0.2s;
		text-align: center;
	}

	.option-card:hover {
		border-color: #D300C5;
		box-shadow: 0 8px 32px rgba(211, 0, 197, 0.1);
		transform: translateY(-4px);
	}

	.option-icon {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
	}

	.option-icon svg {
		width: 28px;
		height: 28px;
	}

	.option-icon.chat {
		background: rgba(118, 56, 250, 0.1);
		color: #7638FA;
	}

	.option-icon.voice {
		background: rgba(211, 0, 197, 0.1);
		color: #D300C5;
	}

	.option-icon.video {
		background: rgba(255, 0, 105, 0.1);
		color: #FF0069;
	}

	.option-icon.email {
		background: rgba(255, 122, 0, 0.1);
		color: #FF7A00;
	}

	.option-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.option-card p {
		font-size: 0.85rem;
		color: #64748b;
	}

	/* Section Header */
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.section-header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.view-all {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Favorites */
	.favorites-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.favorite-item {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.25rem;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		transition: all 0.2s;
	}

	.favorite-item:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
	}

	.favorite-item img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
	}

	.favorite-info {
		flex: 1;
	}

	.favorite-info h4 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.favorite-info .specialty {
		font-size: 0.85rem;
		color: #64748b;
	}

	.favorite-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #22c55e;
	}

	.favorite-status.offline {
		color: #94a3b8;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
	}

	.connect-btn {
		background: #1a1a2e;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
	}

	.schedule-btn {
		background: transparent;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
	}

	/* Activity */
	.activity-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.activity-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.25rem;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
	}

	.activity-date {
		text-align: center;
		min-width: 48px;
	}

	.activity-date .day {
		display: block;
		font-size: 1.5rem;
		font-weight: 600;
		color: #1a1a2e;
		line-height: 1;
	}

	.activity-date .month {
		display: block;
		font-size: 0.75rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.activity-content {
		flex: 1;
	}

	.activity-content h4 {
		font-size: 1rem;
		font-weight: 500;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.activity-content p {
		font-size: 0.85rem;
		color: #64748b;
	}

	.activity-rating .stars {
		color: #FFD600;
		font-size: 1rem;
	}

	.activity-badge {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.activity-badge svg {
		width: 20px;
		height: 20px;
		color: white;
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-content,
		.tabs {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
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

		.balance-amount {
			font-size: 3rem;
		}

		.balance-actions {
			flex-direction: column;
			width: 100%;
		}

		.reading-options {
			grid-template-columns: repeat(2, 1fr);
		}

		.favorite-item {
			flex-wrap: wrap;
		}

		.favorite-status {
			order: 4;
			width: 100%;
			justify-content: center;
			margin-top: 0.5rem;
		}

		.connect-btn,
		.schedule-btn {
			width: 100%;
			margin-top: 0.75rem;
		}
	}
</style>
