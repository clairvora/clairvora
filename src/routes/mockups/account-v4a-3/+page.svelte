<script lang="ts">
	// V4A-3: Two-column split layout
	// Left: Account info & stats, Right: Advisors & activity
</script>

<svelte:head>
	<title>Account V4A-3 - Two Column Split</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner (LOCKED - DO NOT MODIFY) -->
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
				<a href="/mockups/account-v4a-3" class="tab active">Overview</a>
				<a href="/mockups/account-v4a-3" class="tab">My Readings</a>
				<a href="/mockups/account-v4a-3" class="tab">Favorites</a>
				<a href="/mockups/account-v4a-3" class="tab">Wallet</a>
				<a href="/mockups/account-v4a-3" class="tab">Settings</a>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="main">
		<div class="container">
			<div class="two-column">
				<!-- Left Column: Account Summary -->
				<div class="left-column">
					<div class="panel account-panel">
						<h3>Account Summary</h3>

						<div class="summary-item">
							<div class="summary-label">Balance</div>
							<div class="summary-value large">$40.68</div>
							<button class="summary-btn">Add Funds</button>
						</div>

						<div class="divider"></div>

						<div class="summary-item">
							<div class="summary-label">Messages</div>
							<div class="summary-row">
								<span class="summary-value">3 unread</span>
								<a href="/messages">View All</a>
							</div>
						</div>

						<div class="divider"></div>

						<div class="summary-item">
							<div class="summary-label">Total Readings</div>
							<div class="summary-row">
								<span class="summary-value">12 sessions</span>
								<a href="/readings">History</a>
							</div>
						</div>
					</div>

					<div class="panel rewards-panel">
						<h3>Rewards Status</h3>

						<div class="tier-display">
							<div class="tier-badge-large">Premier</div>
							<span class="tier-level">Tier 3 of 4</span>
						</div>

						<div class="progress-container">
							<div class="progress-bar">
								<div class="progress-fill" style="width: 75%"></div>
							</div>
							<div class="progress-labels">
								<span>75% to Elite</span>
							</div>
						</div>

						<div class="perks-list">
							<h4>Your Perks</h4>
							<div class="perk-item active">
								<span class="perk-icon">✓</span>
								<span>20% off all readings</span>
							</div>
							<div class="perk-item active">
								<span class="perk-icon">✓</span>
								<span>Priority support</span>
							</div>
							<div class="perk-item available">
								<span class="perk-icon">★</span>
								<span>1 Free Reading</span>
								<button class="claim-btn">Claim</button>
							</div>
						</div>

						<div class="next-tier">
							<h4>Next Tier: Elite</h4>
							<div class="perk-item locked">
								<span class="perk-icon">🔒</span>
								<span>30% off all readings</span>
							</div>
							<div class="perk-item locked">
								<span class="perk-icon">🔒</span>
								<span>2 Free Readings/year</span>
							</div>
						</div>
					</div>

					<div class="panel tips-panel">
						<h3>Reading Tips</h3>
						<ul class="tips-list">
							<li><strong>Reflect</strong> on key life areas before your session</li>
							<li><strong>Write</strong> specific questions to ask</li>
							<li><strong>Relax</strong> and clear your mind</li>
							<li><strong>Stay open</strong> to the insights you receive</li>
						</ul>
						<a href="/support/faq" class="tips-link">More tips →</a>
					</div>
				</div>

				<!-- Right Column: Advisors & Activity -->
				<div class="right-column">
					<div class="panel favorites-panel">
						<div class="panel-header">
							<h3>Favorite Advisors</h3>
							<a href="/account/favorites">View All</a>
						</div>

						<div class="favorites-grid">
							<div class="favorite-card online">
								<div class="status-dot"></div>
								<img src="/advisors/profile-5.jpg" alt="Oracle Olivia" />
								<div class="favorite-info">
									<h4>Oracle Olivia</h4>
									<span class="rating">★★★★★ 5.0</span>
									<span class="specialty">Life Path</span>
								</div>
								<button class="connect-btn">Connect Now</button>
							</div>

							<div class="favorite-card">
								<img src="/advisors/profile-6.jpg" alt="Clairvoyant Chris" />
								<div class="favorite-info">
									<h4>Clairvoyant Chris</h4>
									<span class="rating">★★★★★ 4.8</span>
									<span class="specialty">Dreams & Visions</span>
								</div>
								<button class="connect-btn secondary">Notify Me</button>
							</div>

							<div class="favorite-card online">
								<div class="status-dot"></div>
								<img src="/advisors/profile-7.jpg" alt="Astro Andy" />
								<div class="favorite-info">
									<h4>Astro Andy</h4>
									<span class="rating">★★★★★ 4.9</span>
									<span class="specialty">Astrology</span>
								</div>
								<button class="connect-btn">Connect Now</button>
							</div>
						</div>
					</div>

					<div class="panel recent-panel">
						<div class="panel-header">
							<h3>Recent Advisors</h3>
							<a href="/account/advisors">View All</a>
						</div>

						<div class="recent-list">
							<a href="/advisor/1" class="recent-item">
								<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
								<div class="recent-info">
									<h4>Psychic Sarah</h4>
									<span class="specialty">Love & Relationships</span>
									<span class="last-session">Last reading: Dec 28, 2025</span>
								</div>
								<div class="recent-rating">
									<span class="stars">★★★★★</span>
									<span class="score">4.9</span>
								</div>
							</a>

							<a href="/advisor/2" class="recent-item">
								<img src="/advisors/profile-2.jpg" alt="Mystic Milo" />
								<div class="recent-info">
									<h4>Mystic Milo</h4>
									<span class="specialty">Career & Finance</span>
									<span class="last-session">Last reading: Dec 25, 2025</span>
								</div>
								<div class="recent-rating">
									<span class="stars">★★★★★</span>
									<span class="score">4.8</span>
								</div>
							</a>

							<a href="/advisor/3" class="recent-item">
								<img src="/advisors/profile-3.jpg" alt="Tarot Luna" />
								<div class="recent-info">
									<h4>Tarot Luna</h4>
									<span class="specialty">Tarot & Spirituality</span>
									<span class="last-session">Last reading: Dec 20, 2025</span>
								</div>
								<div class="recent-rating">
									<span class="stars">★★★★★</span>
									<span class="score">4.7</span>
								</div>
							</a>
						</div>
					</div>

					<div class="cta-banner">
						<div class="cta-content">
							<h3>Clear away the doubt with a reading</h3>
							<p>Read with one of our top-rated psychics.</p>
						</div>
						<button class="cta-btn">Read Now</button>
					</div>

					<div class="panel blog-panel">
						<div class="panel-header">
							<h3>From the Blog</h3>
							<a href="/blog">View All</a>
						</div>

						<div class="blog-list">
							<a href="/blog/1" class="blog-item">
								<div class="blog-thumb" style="background: linear-gradient(135deg, #7638FA, #D300C5)"></div>
								<div class="blog-info">
									<span class="blog-tag">Spirituality</span>
									<h4>Understanding Your Aura Colors</h4>
									<span class="blog-date">Jan 5, 2026</span>
								</div>
							</a>
							<a href="/blog/2" class="blog-item">
								<div class="blog-thumb" style="background: linear-gradient(135deg, #D300C5, #FF0069)"></div>
								<div class="blog-info">
									<span class="blog-tag">Tarot</span>
									<h4>The Major Arcana Explained</h4>
									<span class="blog-date">Jan 3, 2026</span>
								</div>
							</a>
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

	/* Hero - LOCKED */
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

	/* Main Content */
	.main {
		padding: 2rem 2rem 4rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* Two Column Layout */
	.two-column {
		display: grid;
		grid-template-columns: 380px 1fr;
		gap: 2rem;
	}

	.left-column,
	.right-column {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Panels */
	.panel {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.panel h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1.25rem;
	}

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.25rem;
	}

	.panel-header h3 {
		margin-bottom: 0;
	}

	.panel-header a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	/* Account Panel */
	.summary-item {
		padding: 0.75rem 0;
	}

	.summary-label {
		font-size: 0.8rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.summary-value {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.summary-value.large {
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.summary-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.summary-row a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
	}

	.summary-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.divider {
		height: 1px;
		background: #e2e8f0;
		margin: 0.5rem 0;
	}

	/* Rewards Panel */
	.tier-display {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.tier-badge-large {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.tier-level {
		color: #64748b;
		font-size: 0.9rem;
	}

	.progress-container {
		margin-bottom: 1.5rem;
	}

	.progress-bar {
		height: 8px;
		background: #e2e8f0;
		border-radius: 50px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50px;
	}

	.progress-labels {
		text-align: right;
		font-size: 0.8rem;
		color: #64748b;
	}

	.perks-list h4,
	.next-tier h4 {
		font-size: 0.85rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.perk-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 0;
		font-size: 0.9rem;
		color: #475569;
	}

	.perk-item.active .perk-icon {
		color: #16a34a;
	}

	.perk-item.available {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1), rgba(211, 0, 197, 0.1));
		padding: 0.75rem;
		border-radius: 8px;
		margin: 0.5rem 0;
	}

	.perk-item.available .perk-icon {
		color: #D300C5;
	}

	.perk-item.locked {
		color: #94a3b8;
	}

	.claim-btn {
		margin-left: auto;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.75rem;
		cursor: pointer;
	}

	.next-tier {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #e2e8f0;
	}

	/* Tips Panel */
	.tips-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1rem 0;
	}

	.tips-list li {
		padding: 0.5rem 0;
		font-size: 0.9rem;
		color: #475569;
		border-bottom: 1px solid #f1f5f9;
	}

	.tips-list li:last-child {
		border-bottom: none;
	}

	.tips-link {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	/* Favorites Panel */
	.favorites-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.favorite-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 12px;
		position: relative;
	}

	.favorite-card.online {
		border: 2px solid #22c55e;
	}

	.status-dot {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		width: 10px;
		height: 10px;
		background: #22c55e;
		border-radius: 50%;
	}

	.favorite-card img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
	}

	.favorite-info {
		flex: 1;
	}

	.favorite-info h4 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.rating {
		display: block;
		font-size: 0.8rem;
		color: #FFD600;
		margin-bottom: 0.125rem;
	}

	.specialty {
		font-size: 0.8rem;
		color: #64748b;
	}

	.connect-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
	}

	.connect-btn.secondary {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	/* Recent Panel */
	.recent-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.recent-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: #f8fafc;
		border-radius: 12px;
		text-decoration: none;
		transition: background 0.2s;
	}

	.recent-item:hover {
		background: #f1f5f9;
	}

	.recent-item img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.recent-info {
		flex: 1;
	}

	.recent-info h4 {
		font-size: 0.95rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.125rem;
	}

	.recent-info .specialty {
		display: block;
	}

	.last-session {
		display: block;
		font-size: 0.75rem;
		color: #94a3b8;
		margin-top: 0.25rem;
	}

	.recent-rating {
		text-align: right;
	}

	.stars {
		display: block;
		color: #FFD600;
		font-size: 0.85rem;
	}

	.score {
		font-size: 0.8rem;
		color: #64748b;
	}

	/* CTA Banner */
	.cta-banner {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		border-radius: 16px;
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cta-content h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.25rem;
	}

	.cta-content p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.95rem;
	}

	.cta-btn {
		background: white;
		color: #D300C5;
		border: none;
		padding: 0.875rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		flex-shrink: 0;
	}

	/* Blog Panel */
	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.blog-item {
		display: flex;
		gap: 1rem;
		text-decoration: none;
		padding: 0.5rem;
		border-radius: 8px;
		transition: background 0.2s;
	}

	.blog-item:hover {
		background: #f8fafc;
	}

	.blog-thumb {
		width: 80px;
		height: 60px;
		border-radius: 8px;
		flex-shrink: 0;
	}

	.blog-info {
		flex: 1;
	}

	.blog-tag {
		font-size: 0.7rem;
		text-transform: uppercase;
		color: #D300C5;
		font-weight: 600;
	}

	.blog-info h4 {
		font-size: 0.9rem;
		font-weight: 600;
		color: #1a1a2e;
		margin: 0.25rem 0;
	}

	.blog-date {
		font-size: 0.75rem;
		color: #94a3b8;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.two-column {
			grid-template-columns: 1fr;
		}

		.left-column {
			order: 2;
		}

		.right-column {
			order: 1;
		}
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-section,
		.tabs-wrapper {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
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

		.cta-banner {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.favorite-card {
			flex-direction: column;
			text-align: center;
		}

		.recent-item {
			flex-direction: column;
			text-align: center;
		}

		.recent-rating {
			text-align: center;
		}
	}
</style>
