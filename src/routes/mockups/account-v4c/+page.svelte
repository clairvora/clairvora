<script lang="ts">
	// V4C: Focus on Advisors with Large Cards
	// Advisor-centric layout with prominent advisor cards
</script>

<svelte:head>
	<title>Account V4C - Advisor Focus</title>
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
			<a href="/mockups/account-v4c" class="tab active">Overview</a>
			<a href="/mockups/account-v4c" class="tab">My Readings</a>
			<a href="/mockups/account-v4c" class="tab">Favorites</a>
			<a href="/mockups/account-v4c" class="tab">Wallet</a>
			<a href="/mockups/account-v4c" class="tab">Settings</a>
		</div>
	</header>

	<!-- Main Content: Advisor-Focused Layout -->
	<main class="main">
		<div class="container">
			<!-- Alert Banner -->
			<div class="alert-banner">
				<div class="alert-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				</div>
				<div class="alert-content">
					<strong>3 of your favorite advisors are online!</strong>
					<p>Connect now for a reading</p>
				</div>
				<button class="alert-action">View Advisors</button>
			</div>

			<!-- Your Advisors Section -->
			<section class="section">
				<div class="section-header">
					<h2>Your Advisors</h2>
					<div class="filter-tabs">
						<button class="filter-tab active">Online Now</button>
						<button class="filter-tab">Favorites</button>
						<button class="filter-tab">Recent</button>
					</div>
				</div>

				<div class="advisors-grid">
					<div class="advisor-card featured">
						<div class="card-header">
							<span class="status online">Online</span>
							<button class="favorite-btn active">
								<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
							</button>
						</div>
						<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" class="advisor-photo" />
						<div class="advisor-details">
							<h3>Psychic Sarah</h3>
							<span class="specialty">Love & Relationships</span>
							<div class="rating">
								<span class="stars">★★★★★</span>
								<span class="count">4.9 (1,247 reviews)</span>
							</div>
							<p class="bio">Compassionate and intuitive, specializing in matters of the heart. Let me guide you through your relationship journey.</p>
							<div class="pricing">
								<span class="rate">$0.80<small>/min</small></span>
								<span class="premier-rate">Premier: $0.64/min</span>
							</div>
						</div>
						<div class="card-actions">
							<button class="btn-chat">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
								Chat Now
							</button>
							<button class="btn-call">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
								Call
							</button>
						</div>
						<div class="last-reading">
							<span>Last reading: Dec 28, 2025</span>
							<a href="#">View transcript →</a>
						</div>
					</div>

					<div class="advisor-card">
						<div class="card-header">
							<span class="status online">Online</span>
							<button class="favorite-btn active">
								<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
							</button>
						</div>
						<img src="/advisors/profile-2.jpg" alt="Mystic Milo" class="advisor-photo" />
						<div class="advisor-details">
							<h3>Mystic Milo</h3>
							<span class="specialty">Career & Finance</span>
							<div class="rating">
								<span class="stars">★★★★★</span>
								<span class="count">4.8 (892 reviews)</span>
							</div>
							<p class="bio">Expert guidance on career decisions and financial matters. Let me help you see the path to success.</p>
							<div class="pricing">
								<span class="rate">$1.50<small>/min</small></span>
								<span class="premier-rate">Premier: $1.20/min</span>
							</div>
						</div>
						<div class="card-actions">
							<button class="btn-chat">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
								Chat Now
							</button>
							<button class="btn-call">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
								Call
							</button>
						</div>
						<div class="last-reading">
							<span>Last reading: Dec 25, 2025</span>
							<a href="#">View transcript →</a>
						</div>
					</div>

					<div class="advisor-card">
						<div class="card-header">
							<span class="status offline">Offline</span>
							<button class="favorite-btn active">
								<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
							</button>
						</div>
						<img src="/advisors/profile-3.jpg" alt="Tarot Luna" class="advisor-photo" />
						<div class="advisor-details">
							<h3>Tarot Luna</h3>
							<span class="specialty">Tarot Reading</span>
							<div class="rating">
								<span class="stars">★★★★★</span>
								<span class="count">5.0 (2,103 reviews)</span>
							</div>
							<p class="bio">Master tarot reader with 15 years of experience. Deep insights through the ancient art of tarot.</p>
							<div class="pricing">
								<span class="rate">$2.00<small>/min</small></span>
								<span class="premier-rate">Premier: $1.60/min</span>
							</div>
						</div>
						<div class="card-actions">
							<button class="btn-schedule">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
								Schedule
							</button>
							<button class="btn-notify">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
								Notify Me
							</button>
						</div>
						<div class="last-reading">
							<span>Last reading: Dec 15, 2025</span>
							<a href="#">View transcript →</a>
						</div>
					</div>
				</div>

				<button class="view-all-advisors">View All Favorite Advisors →</button>
			</section>

			<!-- Bottom Row -->
			<div class="bottom-grid">
				<!-- Recent Readings -->
				<div class="card recent-card">
					<h3>Recent Readings</h3>
					<div class="reading-list">
						<div class="reading-item">
							<img src="/advisors/profile-1.jpg" alt="Advisor" />
							<div class="reading-details">
								<strong>Chat with Psychic Sarah</strong>
								<span>Dec 28 • 15 min • $12.50</span>
							</div>
							<span class="stars">★★★★★</span>
						</div>
						<div class="reading-item">
							<img src="/advisors/profile-2.jpg" alt="Advisor" />
							<div class="reading-details">
								<strong>Call with Mystic Milo</strong>
								<span>Dec 25 • 30 min • $45.00</span>
							</div>
							<span class="stars">★★★★★</span>
						</div>
					</div>
					<a href="#" class="card-link">View All Readings →</a>
				</div>

				<!-- Quick Stats -->
				<div class="card stats-card">
					<h3>Your Stats</h3>
					<div class="stats-grid">
						<div class="stat">
							<span class="stat-value">12</span>
							<span class="stat-label">Total Readings</span>
						</div>
						<div class="stat">
							<span class="stat-value">5</span>
							<span class="stat-label">Favorites</span>
						</div>
						<div class="stat">
							<span class="stat-value">$450</span>
							<span class="stat-label">All Time Spent</span>
						</div>
						<div class="stat">
							<span class="stat-value">4.9</span>
							<span class="stat-label">Avg Rating Given</span>
						</div>
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
		padding: 2rem 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Alert Banner */
	.alert-banner {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
		border: 1px solid rgba(34, 197, 94, 0.3);
		border-radius: 16px;
		padding: 1rem 1.5rem;
		margin-bottom: 2rem;
	}

	.alert-icon {
		width: 48px;
		height: 48px;
		background: #22c55e;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.alert-icon svg {
		width: 24px;
		height: 24px;
		color: white;
	}

	.alert-content {
		flex: 1;
	}

	.alert-content strong {
		display: block;
		color: #1a1a2e;
		font-size: 0.95rem;
	}

	.alert-content p {
		color: #64748b;
		font-size: 0.85rem;
	}

	.alert-action {
		background: #22c55e;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	/* Section */
	.section {
		margin-bottom: 2rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.section-header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.filter-tabs {
		display: flex;
		gap: 0.5rem;
	}

	.filter-tab {
		background: white;
		border: 1px solid #e2e8f0;
		color: #64748b;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
	}

	.filter-tab.active {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border-color: transparent;
	}

	/* Advisors Grid */
	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.advisor-card {
		background: white;
		border-radius: 24px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.advisor-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
	}

	.advisor-card.featured {
		border: 2px solid #D300C5;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.status {
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.status.online {
		background: #dcfce7;
		color: #16a34a;
	}

	.status.offline {
		background: #f1f5f9;
		color: #64748b;
	}

	.favorite-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: #e2e8f0;
	}

	.favorite-btn.active {
		color: #ef4444;
	}

	.favorite-btn svg {
		width: 24px;
		height: 24px;
	}

	.advisor-photo {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border-radius: 16px;
		margin-bottom: 1rem;
	}

	.advisor-details h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.specialty {
		display: block;
		color: #D300C5;
		font-size: 0.85rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.stars {
		color: #FFD600;
		font-size: 0.9rem;
	}

	.count {
		color: #64748b;
		font-size: 0.8rem;
	}

	.bio {
		color: #64748b;
		font-size: 0.85rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.pricing {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 1rem;
	}

	.rate {
		font-size: 1.25rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.rate small {
		font-size: 0.8rem;
		font-weight: 500;
		color: #64748b;
	}

	.premier-rate {
		font-size: 0.8rem;
		color: #22c55e;
		font-weight: 500;
	}

	.card-actions {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.btn-chat {
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.btn-chat svg {
		width: 18px;
		height: 18px;
	}

	.btn-call {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background: white;
		color: #7638FA;
		border: 1px solid #7638FA;
		padding: 0.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.btn-call svg {
		width: 18px;
		height: 18px;
	}

	.btn-schedule,
	.btn-notify {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.btn-schedule svg,
	.btn-notify svg {
		width: 18px;
		height: 18px;
	}

	.last-reading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem;
		border-top: 1px solid #f1f5f9;
		font-size: 0.8rem;
	}

	.last-reading span {
		color: #94a3b8;
	}

	.last-reading a {
		color: #D300C5;
		text-decoration: none;
		font-weight: 500;
	}

	.view-all-advisors {
		display: block;
		width: 100%;
		background: transparent;
		color: #D300C5;
		border: 2px dashed #e2e8f0;
		padding: 1rem;
		border-radius: 16px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		margin-top: 1.5rem;
	}

	.view-all-advisors:hover {
		border-color: #D300C5;
	}

	/* Bottom Grid */
	.bottom-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1.5rem;
	}

	.card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.reading-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.reading-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem;
		background: #f8fafc;
		border-radius: 12px;
	}

	.reading-item img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.reading-details {
		flex: 1;
	}

	.reading-details strong {
		display: block;
		font-size: 0.9rem;
		color: #1a1a2e;
	}

	.reading-details span {
		font-size: 0.8rem;
		color: #64748b;
	}

	.card-link {
		display: block;
		text-align: center;
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #f1f5f9;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.stat {
		text-align: center;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 12px;
	}

	.stat-value {
		display: block;
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.stat-label {
		font-size: 0.75rem;
		color: #64748b;
	}

	@media (max-width: 1024px) {
		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.bottom-grid {
			grid-template-columns: 1fr;
		}
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

		.section-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.advisors-grid {
			grid-template-columns: 1fr;
		}

		.alert-banner {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
