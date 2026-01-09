<script lang="ts">
	// V4A: Single column feed layout
	// Activity-focused, social media style feed
</script>

<svelte:head>
	<title>Account V4A - Activity Feed</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner (same as V4) -->
	<header class="hero">
		<nav class="top-bar">
			<div class="top-bar-content">
				<a href="/" class="logo">Clairvora</a>
				<div class="nav-right">
					<button class="btn-ghost">Help</button>
					<button class="btn-add">+ Add Funds</button>
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
				<a href="/mockups/account-v4a" class="tab active">Overview</a>
				<a href="/mockups/account-v4a" class="tab">My Readings</a>
				<a href="/mockups/account-v4a" class="tab">Favorites</a>
				<a href="/mockups/account-v4a" class="tab">Wallet</a>
				<a href="/mockups/account-v4a" class="tab">Settings</a>
			</div>
		</div>
	</header>

	<!-- Main Content: Single Column Activity Feed -->
	<main class="main">
		<div class="container">
			<!-- Quick Stats Row -->
			<div class="stats-row">
				<div class="stat-card">
					<span class="stat-value">$40.68</span>
					<span class="stat-label">Balance</span>
				</div>
				<div class="stat-card">
					<span class="stat-value">12</span>
					<span class="stat-label">Readings</span>
				</div>
				<div class="stat-card">
					<span class="stat-value">5</span>
					<span class="stat-label">Favorites</span>
				</div>
				<div class="stat-card highlight">
					<span class="stat-value">1</span>
					<span class="stat-label">Free Reading</span>
				</div>
			</div>

			<!-- Activity Feed -->
			<div class="feed">
				<h2 class="feed-title">Recent Activity</h2>

				<!-- Advisor Online Alert -->
				<div class="feed-item alert">
					<div class="feed-icon online">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
					</div>
					<div class="feed-content">
						<h4>Psychic Sarah is online now!</h4>
						<p>One of your favorite advisors just became available</p>
						<span class="feed-time">Just now</span>
					</div>
					<button class="btn-connect-small">Connect</button>
				</div>

				<!-- Reading Completed -->
				<div class="feed-item">
					<img src="/advisors/profile-1.jpg" alt="Advisor" class="feed-avatar" />
					<div class="feed-content">
						<h4>Chat reading with Psychic Sarah</h4>
						<p>15 minute session completed • <span class="cost">$12.50</span></p>
						<div class="feed-rating">
							<span class="stars">★★★★★</span>
							<button class="btn-text">Leave a Review</button>
						</div>
						<span class="feed-time">December 28, 2025</span>
					</div>
					<button class="btn-transcript">View Transcript</button>
				</div>

				<!-- Funds Added -->
				<div class="feed-item">
					<div class="feed-icon wallet">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
					</div>
					<div class="feed-content">
						<h4>Added $50.00 to wallet</h4>
						<p>Payment via •••• 4242</p>
						<span class="feed-time">December 27, 2025</span>
					</div>
				</div>

				<!-- Reading Completed -->
				<div class="feed-item">
					<img src="/advisors/profile-2.jpg" alt="Advisor" class="feed-avatar" />
					<div class="feed-content">
						<h4>Voice call with Mystic Milo</h4>
						<p>30 minute session completed • <span class="cost">$45.00</span></p>
						<div class="feed-rating rated">
							<span class="stars">★★★★★</span>
							<span class="review-snippet">"Amazing career guidance..."</span>
						</div>
						<span class="feed-time">December 25, 2025</span>
					</div>
					<button class="btn-transcript">View Details</button>
				</div>

				<!-- Tier Upgrade -->
				<div class="feed-item celebration">
					<div class="feed-icon achievement">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
					</div>
					<div class="feed-content">
						<h4>Congratulations! You reached Premier status</h4>
						<p>Enjoy 20% off all readings and priority queue access</p>
						<span class="feed-time">December 20, 2025</span>
					</div>
				</div>

				<!-- Message Received -->
				<div class="feed-item">
					<img src="/advisors/profile-3.jpg" alt="Advisor" class="feed-avatar" />
					<div class="feed-content">
						<h4>New message from Tarot Luna</h4>
						<p>"Thank you for the wonderful session! I wanted to share..."</p>
						<span class="feed-time">December 18, 2025</span>
					</div>
					<button class="btn-reply">Reply</button>
				</div>

				<button class="load-more">Load More Activity</button>
			</div>
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

	/* Main */
	.main {
		padding: 2rem 0;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Stats Row */
	.stats-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.stat-card {
		background: white;
		border-radius: 16px;
		padding: 1.25rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.stat-card.highlight {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
	}

	.stat-card.highlight .stat-value,
	.stat-card.highlight .stat-label {
		color: white;
	}

	.stat-value {
		display: block;
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.stat-label {
		font-size: 0.8rem;
		color: #64748b;
	}

	/* Feed */
	.feed {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.feed-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #e2e8f0;
	}

	.feed-item {
		display: flex;
		gap: 1rem;
		padding: 1.25rem 0;
		border-bottom: 1px solid #f1f5f9;
		align-items: flex-start;
	}

	.feed-item:last-of-type {
		border-bottom: none;
	}

	.feed-item.alert {
		background: #f0fdf4;
		margin: 0 -1.5rem;
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		border: 1px solid #bbf7d0;
	}

	.feed-item.celebration {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.05) 0%, rgba(211, 0, 197, 0.05) 100%);
		margin: 0 -1.5rem;
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
	}

	.feed-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.feed-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1f5f9;
		flex-shrink: 0;
	}

	.feed-icon svg {
		width: 24px;
		height: 24px;
		color: #64748b;
	}

	.feed-icon.online {
		background: #dcfce7;
	}

	.feed-icon.online svg {
		color: #22c55e;
	}

	.feed-icon.wallet {
		background: #ede9fe;
	}

	.feed-icon.wallet svg {
		color: #7638FA;
	}

	.feed-icon.achievement {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
	}

	.feed-icon.achievement svg {
		color: white;
	}

	.feed-content {
		flex: 1;
	}

	.feed-content h4 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.feed-content p {
		font-size: 0.85rem;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.cost {
		color: #1a1a2e;
		font-weight: 600;
	}

	.feed-time {
		font-size: 0.75rem;
		color: #94a3b8;
	}

	.feed-rating {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.stars {
		color: #FFD600;
		font-size: 0.85rem;
	}

	.review-snippet {
		font-size: 0.8rem;
		color: #64748b;
		font-style: italic;
	}

	.btn-text {
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		padding: 0;
	}

	.btn-connect-small {
		background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
		color: white;
		border: none;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		white-space: nowrap;
	}

	.btn-transcript,
	.btn-reply {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-weight: 500;
		font-size: 0.8rem;
		cursor: pointer;
		white-space: nowrap;
	}

	.load-more {
		display: block;
		width: 100%;
		background: #f8fafc;
		color: #64748b;
		border: none;
		padding: 1rem;
		border-radius: 12px;
		font-weight: 500;
		font-size: 0.9rem;
		cursor: pointer;
		margin-top: 1rem;
	}

	.load-more:hover {
		background: #f1f5f9;
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-section,
		.tabs-wrapper {
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

		.stats-row {
			grid-template-columns: repeat(2, 1fr);
		}

		.feed-item {
			flex-wrap: wrap;
		}

		.btn-connect-small,
		.btn-transcript,
		.btn-reply {
			margin-top: 0.75rem;
			width: 100%;
		}
	}
</style>
