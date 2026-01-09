<script lang="ts">
	// V4: Full-width hero banner with tabs
	// More immersive, lifestyle-focused design
</script>

<svelte:head>
	<title>Account V4 - Hero Banner</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner -->
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

		<!-- Tabs -->
		<div class="tabs">
			<a href="/mockups/account-v4" class="tab active">Overview</a>
			<a href="/mockups/account-v4" class="tab">My Readings</a>
			<a href="/mockups/account-v4" class="tab">Favorites</a>
			<a href="/mockups/account-v4" class="tab">Wallet</a>
			<a href="/mockups/account-v4" class="tab">Settings</a>
		</div>
	</header>

	<!-- Main Content -->
	<main class="main">
		<div class="container">
			<!-- Perks Banner -->
			<div class="perks-banner">
				<div class="perk">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
					<span><strong>20% Off</strong> Every Reading</span>
				</div>
				<div class="perk">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<span><strong>1 Free Reading</strong> Available</span>
				</div>
				<div class="perk">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
					<span><strong>Priority Queue</strong> Access</span>
				</div>
			</div>

			<!-- Content Grid -->
			<div class="content-grid">
				<!-- Left Column -->
				<div class="left-column">
					<!-- Quick Connect -->
					<section class="section">
						<h2>Quick Connect</h2>
						<p class="section-subtitle">Your favorite advisors who are online right now</p>
						<div class="advisors-grid">
							<div class="advisor-card online">
								<img src="/advisors/profile-1.jpg" alt="Advisor" />
								<div class="advisor-info">
									<h4>Psychic Sarah</h4>
									<span class="specialty">Love & Relationships</span>
									<div class="rating">★★★★★ <span>4.9</span></div>
								</div>
								<button class="btn-connect">Connect Now</button>
							</div>
							<div class="advisor-card online">
								<img src="/advisors/profile-2.jpg" alt="Advisor" />
								<div class="advisor-info">
									<h4>Mystic Milo</h4>
									<span class="specialty">Career & Finance</span>
									<div class="rating">★★★★★ <span>4.8</span></div>
								</div>
								<button class="btn-connect">Connect Now</button>
							</div>
							<div class="advisor-card">
								<img src="/advisors/profile-3.jpg" alt="Advisor" />
								<div class="advisor-info">
									<h4>Tarot Luna</h4>
									<span class="specialty">Tarot Reading</span>
									<div class="rating">★★★★★ <span>5.0</span></div>
								</div>
								<button class="btn-schedule">Schedule</button>
							</div>
						</div>
					</section>

					<!-- Recent Readings -->
					<section class="section">
						<div class="section-header">
							<h2>Recent Readings</h2>
							<a href="/mockups/account-v4">View All</a>
						</div>
						<div class="readings-list">
							<div class="reading-card">
								<img src="/advisors/profile-1.jpg" alt="Advisor" />
								<div class="reading-info">
									<h4>Chat with Psychic Sarah</h4>
									<span>December 28, 2025 • 15 minutes</span>
									<div class="reading-rating">
										<span class="stars">★★★★★</span>
										<span class="review-text">Great reading! Very insightful...</span>
									</div>
								</div>
								<div class="reading-actions">
									<span class="reading-cost">$12.50</span>
									<button class="btn-text">View Transcript</button>
								</div>
							</div>
							<div class="reading-card">
								<img src="/advisors/profile-2.jpg" alt="Advisor" />
								<div class="reading-info">
									<h4>Call with Mystic Milo</h4>
									<span>December 25, 2025 • 30 minutes</span>
									<div class="reading-rating">
										<span class="stars">★★★★★</span>
										<span class="review-text">Amazing career guidance...</span>
									</div>
								</div>
								<div class="reading-actions">
									<span class="reading-cost">$45.00</span>
									<button class="btn-text">Leave Review</button>
								</div>
							</div>
						</div>
					</section>
				</div>

				<!-- Right Column -->
				<div class="right-column">
					<!-- Wallet Card -->
					<div class="wallet-card">
						<h3>Your Wallet</h3>
						<div class="balance">
							<span class="amount">$40.68</span>
							<span class="label">Available Balance</span>
						</div>
						<button class="btn-add-funds">Add Funds</button>
						<div class="wallet-stats">
							<div class="wallet-stat">
								<span class="value">$127.50</span>
								<span class="label">This Month</span>
							</div>
							<div class="wallet-stat">
								<span class="value">$450.00</span>
								<span class="label">All Time</span>
							</div>
						</div>
					</div>

					<!-- Rewards Progress -->
					<div class="rewards-card">
						<h3>Rewards Progress</h3>
						<div class="tier-info">
							<span class="current-tier">Premier Member</span>
							<span class="tier-max">Max Tier Achieved!</span>
						</div>
						<div class="progress-bar">
							<div class="progress-fill" style="width: 100%"></div>
						</div>
						<div class="tier-perks">
							<div class="perk-item">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								<span>20% off all readings</span>
							</div>
							<div class="perk-item">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								<span>Priority queue access</span>
							</div>
							<div class="perk-item">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								<span>Exclusive advisor access</span>
							</div>
						</div>
					</div>

					<!-- Messages -->
					<div class="messages-card">
						<div class="messages-header">
							<h3>Messages</h3>
							<span class="unread-badge">2</span>
						</div>
						<div class="message-preview">
							<img src="/advisors/profile-1.jpg" alt="Advisor" />
							<div class="message-content">
								<h4>Psychic Sarah</h4>
								<p>Thank you for the reading! I wanted to follow up...</p>
							</div>
						</div>
						<a href="/mockups/account-v4" class="view-all-link">View All Messages</a>
					</div>
				</div>
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

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	/* Tabs */
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
		transition: color 0.2s, border-color 0.2s;
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
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3rem;
	}

	/* Perks Banner */
	.perks-banner {
		display: flex;
		gap: 2rem;
		background: white;
		padding: 1.25rem 2rem;
		border-radius: 16px;
		margin-bottom: 2rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.perk {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: #1a1a2e;
		font-size: 0.9rem;
	}

	.perk svg {
		width: 20px;
		height: 20px;
		color: #D300C5;
	}

	/* Content Grid */
	.content-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
	}

	.section {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.section h2 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.section-subtitle {
		color: #64748b;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.section-header a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	/* Advisors Grid */
	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.advisor-card {
		background: #f8fafc;
		border-radius: 16px;
		padding: 1.25rem;
		text-align: center;
		transition: transform 0.2s;
	}

	.advisor-card:hover {
		transform: translateY(-4px);
	}

	.advisor-card.online {
		border: 2px solid #22c55e;
	}

	.advisor-card img {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 0.75rem;
	}

	.advisor-info h4 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.specialty {
		display: block;
		font-size: 0.8rem;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.rating {
		color: #FFD600;
		font-size: 0.8rem;
		margin-bottom: 1rem;
	}

	.rating span {
		color: #1a1a2e;
		font-weight: 600;
	}

	.btn-connect {
		background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
		color: white;
		border: none;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		width: 100%;
	}

	.btn-schedule {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		width: 100%;
	}

	/* Readings List */
	.readings-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.reading-card {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 12px;
	}

	.reading-card img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
	}

	.reading-info {
		flex: 1;
	}

	.reading-info h4 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.reading-info > span {
		font-size: 0.8rem;
		color: #64748b;
	}

	.reading-rating {
		margin-top: 0.5rem;
	}

	.reading-rating .stars {
		color: #FFD600;
		font-size: 0.8rem;
	}

	.review-text {
		font-size: 0.8rem;
		color: #64748b;
		margin-left: 0.5rem;
	}

	.reading-actions {
		text-align: right;
	}

	.reading-cost {
		display: block;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.btn-text {
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
	}

	/* Right Column Cards */
	.wallet-card,
	.rewards-card,
	.messages-card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.wallet-card h3,
	.rewards-card h3,
	.messages-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.balance {
		text-align: center;
		margin-bottom: 1rem;
	}

	.balance .amount {
		display: block;
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.balance .label {
		font-size: 0.85rem;
		color: #64748b;
	}

	.btn-add-funds {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		width: 100%;
		margin-bottom: 1rem;
	}

	.wallet-stats {
		display: flex;
		gap: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #e2e8f0;
	}

	.wallet-stat {
		flex: 1;
		text-align: center;
	}

	.wallet-stat .value {
		display: block;
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.wallet-stat .label {
		font-size: 0.75rem;
		color: #64748b;
	}

	/* Rewards */
	.tier-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}

	.current-tier {
		font-weight: 600;
		color: #D300C5;
	}

	.tier-max {
		font-size: 0.75rem;
		color: #22c55e;
	}

	.progress-bar {
		height: 8px;
		background: #e2e8f0;
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 1rem;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
	}

	.tier-perks {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.perk-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #64748b;
	}

	.perk-item svg {
		width: 16px;
		height: 16px;
		color: #22c55e;
	}

	/* Messages */
	.messages-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.unread-badge {
		background: #D300C5;
		color: white;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		font-size: 0.7rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.message-preview {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem;
		background: #f8fafc;
		border-radius: 12px;
		margin-bottom: 1rem;
	}

	.message-preview img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		object-fit: cover;
	}

	.message-content h4 {
		font-size: 0.85rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.message-content p {
		font-size: 0.8rem;
		color: #64748b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 180px;
	}

	.view-all-link {
		display: block;
		text-align: center;
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-content,
		.tabs,
		.container {
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

		.perks-banner {
			flex-direction: column;
			gap: 1rem;
		}

		.advisors-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
