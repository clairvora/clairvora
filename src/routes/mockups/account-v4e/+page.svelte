<script lang="ts">
	// V4E: Magazine/Editorial Style
	// Large imagery, editorial typography, story-driven
</script>

<svelte:head>
	<title>Account V4E - Editorial</title>
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
			<a href="/mockups/account-v4e" class="tab active">Overview</a>
			<a href="/mockups/account-v4e" class="tab">My Readings</a>
			<a href="/mockups/account-v4e" class="tab">Favorites</a>
			<a href="/mockups/account-v4e" class="tab">Wallet</a>
			<a href="/mockups/account-v4e" class="tab">Settings</a>
		</div>
	</header>

	<!-- Main Content: Editorial Layout -->
	<main class="main">
		<div class="container">
			<!-- Featured Story Section -->
			<section class="featured-section">
				<div class="featured-card">
					<div class="featured-image">
						<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
						<span class="live-badge">
							<span class="pulse"></span>
							Live Now
						</span>
					</div>
					<div class="featured-content">
						<span class="featured-label">Your Favorite Advisor</span>
						<h2>Psychic Sarah is online and ready</h2>
						<p>Continue your journey with Sarah. Your last session uncovered important insights about your relationship path. She's available now to explore what comes next.</p>
						<div class="featured-meta">
							<span class="rating">★★★★★ 4.9</span>
							<span class="sessions">47 sessions together</span>
							<span class="price">$0.64/min with Premier</span>
						</div>
						<button class="featured-cta">Connect Now</button>
					</div>
				</div>
			</section>

			<!-- Two Column Editorial -->
			<section class="editorial-grid">
				<div class="editorial-main">
					<!-- Your Journey Section -->
					<article class="journey-article">
						<header class="article-header">
							<span class="article-label">Your Journey</span>
							<h3>12 Readings. Countless Insights.</h3>
						</header>
						<div class="journey-timeline">
							<div class="timeline-item">
								<div class="timeline-marker recent"></div>
								<div class="timeline-content">
									<h4>Chat with Psychic Sarah</h4>
									<p>Explored themes of trust and vulnerability in your current relationship.</p>
									<span class="timeline-date">December 28, 2025</span>
								</div>
							</div>
							<div class="timeline-item">
								<div class="timeline-marker"></div>
								<div class="timeline-content">
									<h4>Voice Call with Mystic Milo</h4>
									<p>Career guidance session focused on the upcoming opportunity.</p>
									<span class="timeline-date">December 25, 2025</span>
								</div>
							</div>
							<div class="timeline-item">
								<div class="timeline-marker milestone"></div>
								<div class="timeline-content">
									<h4>Achieved Premier Status</h4>
									<p>Your dedication unlocked exclusive benefits and deeper savings.</p>
									<span class="timeline-date">December 20, 2025</span>
								</div>
							</div>
						</div>
						<a href="#" class="article-link">View Complete Journey →</a>
					</article>

					<!-- Advisors Grid -->
					<article class="advisors-article">
						<header class="article-header">
							<span class="article-label">Your Circle</span>
							<h3>Trusted Advisors</h3>
						</header>
						<div class="advisors-editorial-grid">
							<div class="advisor-editorial online">
								<img src="/advisors/profile-2.jpg" alt="Mystic Milo" />
								<div class="advisor-overlay">
									<span class="advisor-status">Online</span>
									<h4>Mystic Milo</h4>
									<span>Career & Finance</span>
								</div>
							</div>
							<div class="advisor-editorial">
								<img src="/advisors/profile-3.jpg" alt="Tarot Luna" />
								<div class="advisor-overlay">
									<span class="advisor-status offline">Offline</span>
									<h4>Tarot Luna</h4>
									<span>Tarot Reading</span>
								</div>
							</div>
							<div class="advisor-editorial">
								<img src="/advisors/profile-5.jpg" alt="Angel Guide" />
								<div class="advisor-overlay">
									<span class="advisor-status offline">Offline</span>
									<h4>Angel Guide</h4>
									<span>Spiritual Healing</span>
								</div>
							</div>
						</div>
						<a href="#" class="article-link">Explore All Advisors →</a>
					</article>
				</div>

				<aside class="editorial-sidebar">
					<!-- Wallet Card -->
					<div class="sidebar-card wallet">
						<span class="card-label">Your Balance</span>
						<span class="balance-large">$40.68</span>
						<div class="wallet-actions">
							<button class="wallet-btn">Add Funds</button>
							<a href="#">View Transactions</a>
						</div>
					</div>

					<!-- Stats Card -->
					<div class="sidebar-card stats">
						<span class="card-label">This Month</span>
						<div class="stat-row">
							<span class="stat-label">Readings</span>
							<span class="stat-value">4</span>
						</div>
						<div class="stat-row">
							<span class="stat-label">Minutes</span>
							<span class="stat-value">67</span>
						</div>
						<div class="stat-row">
							<span class="stat-label">Spent</span>
							<span class="stat-value">$127.50</span>
						</div>
						<div class="stat-row">
							<span class="stat-label">Saved</span>
							<span class="stat-value highlight">$31.88</span>
						</div>
					</div>

					<!-- Messages Card -->
					<div class="sidebar-card messages">
						<div class="card-header">
							<span class="card-label">Messages</span>
							<span class="unread">2 new</span>
						</div>
						<div class="message-preview">
							<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
							<div class="message-text">
								<strong>Psychic Sarah</strong>
								<p>Thank you for the reading! I wanted to follow up on what we discussed...</p>
							</div>
						</div>
						<a href="#" class="card-link">View All Messages</a>
					</div>

					<!-- Benefits Card -->
					<div class="sidebar-card benefits">
						<span class="card-label">Premier Benefits</span>
						<ul class="benefits-list">
							<li>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								20% off every reading
							</li>
							<li>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								Priority queue access
							</li>
							<li>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								1 free reading monthly
							</li>
							<li>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
								Exclusive advisor access
							</li>
						</ul>
					</div>
				</aside>
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
		padding: 3rem 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Featured Section */
	.featured-section {
		margin-bottom: 3rem;
	}

	.featured-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background: white;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
	}

	.featured-image {
		position: relative;
		min-height: 400px;
	}

	.featured-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.live-badge {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(34, 197, 94, 0.95);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.pulse {
		width: 8px;
		height: 8px;
		background: white;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.featured-content {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #D300C5;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.featured-content h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a2e;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.featured-content p {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.featured-meta {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2rem;
		font-size: 0.9rem;
	}

	.featured-meta .rating {
		color: #FFD600;
	}

	.featured-meta .sessions,
	.featured-meta .price {
		color: #64748b;
	}

	.featured-cta {
		background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
		color: white;
		border: none;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		align-self: flex-start;
		transition: transform 0.2s;
	}

	.featured-cta:hover {
		transform: translateY(-2px);
	}

	/* Editorial Grid */
	.editorial-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
	}

	.editorial-main {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/* Article Styles */
	.journey-article,
	.advisors-article {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.article-header {
		margin-bottom: 1.5rem;
	}

	.article-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #D300C5;
		font-weight: 600;
	}

	.article-header h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-top: 0.5rem;
	}

	.journey-timeline {
		position: relative;
		padding-left: 2rem;
	}

	.journey-timeline::before {
		content: '';
		position: absolute;
		left: 6px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: #e2e8f0;
	}

	.timeline-item {
		position: relative;
		padding-bottom: 1.5rem;
	}

	.timeline-item:last-child {
		padding-bottom: 0;
	}

	.timeline-marker {
		position: absolute;
		left: -2rem;
		top: 4px;
		width: 14px;
		height: 14px;
		background: white;
		border: 2px solid #e2e8f0;
		border-radius: 50%;
	}

	.timeline-marker.recent {
		background: #D300C5;
		border-color: #D300C5;
	}

	.timeline-marker.milestone {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border: none;
	}

	.timeline-content h4 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.timeline-content p {
		font-size: 0.9rem;
		color: #64748b;
		margin-bottom: 0.25rem;
	}

	.timeline-date {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.article-link {
		display: inline-block;
		margin-top: 1.5rem;
		color: #D300C5;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
	}

	/* Advisors Editorial Grid */
	.advisors-editorial-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.advisor-editorial {
		position: relative;
		aspect-ratio: 3/4;
		border-radius: 16px;
		overflow: hidden;
		cursor: pointer;
	}

	.advisor-editorial img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.advisor-editorial:hover img {
		transform: scale(1.05);
	}

	.advisor-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1.5rem 1rem 1rem;
		background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
		color: white;
	}

	.advisor-status {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #22c55e;
	}

	.advisor-status.offline {
		color: #94a3b8;
	}

	.advisor-overlay h4 {
		font-size: 1rem;
		font-weight: 600;
		margin: 0.25rem 0;
	}

	.advisor-overlay span:last-child {
		font-size: 0.8rem;
		opacity: 0.8;
	}

	/* Sidebar */
	.editorial-sidebar {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidebar-card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		font-weight: 600;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.unread {
		font-size: 0.75rem;
		color: #D300C5;
		font-weight: 600;
	}

	/* Wallet Card */
	.balance-large {
		display: block;
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin: 0.5rem 0 1rem;
	}

	.wallet-actions {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.wallet-btn {
		background: #1a1a2e;
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: 50px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
	}

	.wallet-actions a {
		text-align: center;
		color: #64748b;
		text-decoration: none;
		font-size: 0.85rem;
	}

	/* Stats Card */
	.stat-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.stat-row:first-of-type {
		margin-top: 0.75rem;
	}

	.stat-row:last-child {
		border-bottom: none;
	}

	.stat-label {
		color: #64748b;
		font-size: 0.9rem;
	}

	.stat-value {
		font-weight: 600;
		color: #1a1a2e;
	}

	.stat-value.highlight {
		color: #22c55e;
	}

	/* Messages Card */
	.message-preview {
		display: flex;
		gap: 0.75rem;
		padding: 1rem;
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

	.message-text strong {
		display: block;
		font-size: 0.85rem;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.message-text p {
		font-size: 0.8rem;
		color: #64748b;
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-link {
		display: block;
		text-align: center;
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	/* Benefits Card */
	.benefits-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
	}

	.benefits-list li {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0;
		font-size: 0.9rem;
		color: #1a1a2e;
	}

	.benefits-list svg {
		width: 18px;
		height: 18px;
		color: #22c55e;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.featured-card {
			grid-template-columns: 1fr;
		}

		.featured-image {
			min-height: 300px;
		}

		.editorial-grid {
			grid-template-columns: 1fr;
		}

		.editorial-sidebar {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
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

		.advisors-editorial-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.editorial-sidebar {
			grid-template-columns: 1fr;
		}
	}
</style>
