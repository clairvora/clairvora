<script lang="ts">
	// V4A-4: Stacked sections layout
	// Full-width horizontal sections, clean separation
</script>

<svelte:head>
	<title>Account V4A-4 - Stacked Sections</title>
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
				<a href="/mockups/account-v4a-4" class="tab active">Overview</a>
				<a href="/mockups/account-v4a-4" class="tab">My Readings</a>
				<a href="/mockups/account-v4a-4" class="tab">Favorites</a>
				<a href="/mockups/account-v4a-4" class="tab">Wallet</a>
				<a href="/mockups/account-v4a-4" class="tab">Settings</a>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="main">
		<!-- Quick Stats Section -->
		<section class="section stats-section">
			<div class="container">
				<div class="stats-bar">
					<div class="stat">
						<span class="stat-value">$40.68</span>
						<span class="stat-label">Balance</span>
						<a href="/wallet" class="stat-link">Add Funds</a>
					</div>
					<div class="stat-divider"></div>
					<div class="stat">
						<span class="stat-value">3</span>
						<span class="stat-label">Unread Messages</span>
						<a href="/messages" class="stat-link">View All</a>
					</div>
					<div class="stat-divider"></div>
					<div class="stat">
						<span class="stat-value">12</span>
						<span class="stat-label">Total Readings</span>
						<a href="/readings" class="stat-link">History</a>
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

		<!-- Favorites Section -->
		<section class="section">
			<div class="container">
				<div class="section-header">
					<h2>Favorite Advisors</h2>
					<a href="/account/favorites">View All Favorites →</a>
				</div>
				<div class="favorites-row">
					<div class="favorite-card">
						<div class="online-indicator"></div>
						<img src="/advisors/profile-5.jpg" alt="Oracle Olivia" />
						<div class="card-body">
							<h3>Oracle Olivia</h3>
							<span class="rating">★★★★★ <span>5.0</span></span>
							<span class="specialty">Life Path</span>
							<span class="status online">Online Now</span>
						</div>
						<button class="card-btn primary">Connect</button>
					</div>

					<div class="favorite-card">
						<img src="/advisors/profile-6.jpg" alt="Clairvoyant Chris" />
						<div class="card-body">
							<h3>Clairvoyant Chris</h3>
							<span class="rating">★★★★★ <span>4.8</span></span>
							<span class="specialty">Dreams & Visions</span>
							<span class="status offline">Offline</span>
						</div>
						<button class="card-btn">Notify Me</button>
					</div>

					<div class="favorite-card">
						<div class="online-indicator"></div>
						<img src="/advisors/profile-7.jpg" alt="Astro Andy" />
						<div class="card-body">
							<h3>Astro Andy</h3>
							<span class="rating">★★★★★ <span>4.9</span></span>
							<span class="specialty">Astrology</span>
							<span class="status online">Online Now</span>
						</div>
						<button class="card-btn primary">Connect</button>
					</div>

					<div class="favorite-card add-card">
						<div class="add-icon">+</div>
						<span>Add Favorite</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Recent Advisors Section -->
		<section class="section alt-bg">
			<div class="container">
				<div class="section-header">
					<h2>Recent Advisors</h2>
					<a href="/account/advisors">View All →</a>
				</div>
				<div class="table-wrapper">
					<table class="advisors-table">
						<thead>
							<tr>
								<th>Advisor</th>
								<th>Specialty</th>
								<th>Rating</th>
								<th>Last Session</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="advisor-cell">
										<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
										<span>Psychic Sarah</span>
									</div>
								</td>
								<td>Love & Relationships</td>
								<td><span class="stars">★★★★★</span> 4.9</td>
								<td>Dec 28, 2025</td>
								<td><span class="status-badge online">Online</span></td>
								<td><button class="table-btn">Connect</button></td>
							</tr>
							<tr>
								<td>
									<div class="advisor-cell">
										<img src="/advisors/profile-2.jpg" alt="Mystic Milo" />
										<span>Mystic Milo</span>
									</div>
								</td>
								<td>Career & Finance</td>
								<td><span class="stars">★★★★★</span> 4.8</td>
								<td>Dec 25, 2025</td>
								<td><span class="status-badge offline">Offline</span></td>
								<td><button class="table-btn secondary">Notify</button></td>
							</tr>
							<tr>
								<td>
									<div class="advisor-cell">
										<img src="/advisors/profile-3.jpg" alt="Tarot Luna" />
										<span>Tarot Luna</span>
									</div>
								</td>
								<td>Tarot & Spirituality</td>
								<td><span class="stars">★★★★★</span> 4.7</td>
								<td>Dec 20, 2025</td>
								<td><span class="status-badge online">Online</span></td>
								<td><button class="table-btn">Connect</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="section cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>Clear away the doubt with a reading</h2>
					<p>Read with one of our top-rated psychics and find the clarity you seek.</p>
					<button class="cta-btn">Read Now</button>
				</div>
			</div>
		</section>

		<!-- Tips Section -->
		<section class="section">
			<div class="container">
				<div class="section-header">
					<h2>Tips for Your Next Reading</h2>
					<a href="/support/faq">View All Tips →</a>
				</div>
				<div class="tips-row">
					<div class="tip-card">
						<div class="tip-number">1</div>
						<h4>Reflect on Key Life Areas</h4>
						<p>Think about relationships, career, health, or personal growth before your session.</p>
					</div>
					<div class="tip-card">
						<div class="tip-number">2</div>
						<h4>Write Down Questions</h4>
						<p>Having a list of specific questions helps direct the psychic's focus more effectively.</p>
					</div>
					<div class="tip-card">
						<div class="tip-number">3</div>
						<h4>Meditate or Relax</h4>
						<p>Clear your mind with a brief meditation to open yourself to receiving insights.</p>
					</div>
					<div class="tip-card">
						<div class="tip-number">4</div>
						<h4>Set Realistic Expectations</h4>
						<p>Readings offer guidance and insights, not absolute predictions of the future.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Blog Section -->
		<section class="section alt-bg">
			<div class="container">
				<div class="section-header">
					<h2>From the Blog</h2>
					<a href="/blog">View All Posts →</a>
				</div>
				<div class="blog-row">
					<article class="blog-card">
						<div class="blog-image" style="background: linear-gradient(135deg, #7638FA, #D300C5)"></div>
						<div class="blog-content">
							<span class="blog-category">Spirituality</span>
							<h3>Understanding Your Aura Colors</h3>
							<p>Discover what each color reveals about your energy and spiritual state. Learn to read your own aura.</p>
							<div class="blog-meta">
								<span class="date">Jan 5, 2026</span>
								<span class="read-time">5 min read</span>
							</div>
						</div>
					</article>
					<article class="blog-card">
						<div class="blog-image" style="background: linear-gradient(135deg, #D300C5, #FF0069)"></div>
						<div class="blog-content">
							<span class="blog-category">Tarot</span>
							<h3>The Major Arcana Explained</h3>
							<p>A comprehensive guide to the 22 trump cards and their deep symbolic meanings in tarot readings.</p>
							<div class="blog-meta">
								<span class="date">Jan 3, 2026</span>
								<span class="read-time">8 min read</span>
							</div>
						</div>
					</article>
					<article class="blog-card">
						<div class="blog-image" style="background: linear-gradient(135deg, #FF0069, #FF7A00)"></div>
						<div class="blog-content">
							<span class="blog-category">Astrology</span>
							<h3>Mercury Retrograde Survival Guide</h3>
							<p>Navigate the next retrograde period with confidence. Tips for communication and travel.</p>
							<div class="blog-meta">
								<span class="date">Jan 1, 2026</span>
								<span class="read-time">6 min read</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		background: white;
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
		padding: 0;
	}

	.section {
		padding: 3rem 2rem;
	}

	.section.alt-bg {
		background: #f8fafc;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
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

	.section-header a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	/* Stats Section */
	.stats-section {
		background: white;
		border-bottom: 1px solid #e2e8f0;
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

	/* Favorites Row */
	.favorites-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.favorite-card {
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 1.5rem;
		text-align: center;
		position: relative;
		transition: box-shadow 0.2s;
	}

	.favorite-card:hover {
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}

	.online-indicator {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 12px;
		height: 12px;
		background: #22c55e;
		border-radius: 50%;
		border: 2px solid white;
	}

	.favorite-card img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	.card-body h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.rating {
		display: block;
		color: #FFD600;
		font-size: 0.85rem;
		margin-bottom: 0.25rem;
	}

	.rating span {
		color: #64748b;
	}

	.specialty {
		display: block;
		font-size: 0.8rem;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.status {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		margin-bottom: 1rem;
	}

	.status.online {
		background: #dcfce7;
		color: #16a34a;
	}

	.status.offline {
		background: #f1f5f9;
		color: #64748b;
	}

	.card-btn {
		width: 100%;
		background: #f1f5f9;
		color: #1a1a2e;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.card-btn.primary {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	.add-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 2px dashed #e2e8f0;
		background: transparent;
		cursor: pointer;
	}

	.add-card:hover {
		border-color: #D300C5;
	}

	.add-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #f1f5f9;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		color: #64748b;
		margin-bottom: 0.75rem;
	}

	.add-card span {
		color: #64748b;
		font-size: 0.9rem;
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
		padding: 1rem 1.5rem;
		font-size: 0.8rem;
		font-weight: 600;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: #f8fafc;
		border-bottom: 1px solid #e2e8f0;
	}

	.advisors-table td {
		padding: 1rem 1.5rem;
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

	.stars {
		color: #FFD600;
	}

	.status-badge {
		display: inline-block;
		font-size: 0.75rem;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-weight: 600;
	}

	.status-badge.online {
		background: #dcfce7;
		color: #16a34a;
	}

	.status-badge.offline {
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
	}

	.table-btn.secondary {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	/* CTA Section */
	.cta-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		text-align: center;
		padding: 4rem 2rem;
	}

	.cta-content h2 {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}

	.cta-content p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.cta-btn {
		background: white;
		color: #D300C5;
		border: none;
		padding: 1rem 3rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
	}

	/* Tips Row */
	.tips-row {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.tip-card {
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 1.5rem;
	}

	.tip-number {
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.tip-card h4 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.tip-card p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	/* Blog Row */
	.blog-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.blog-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		transition: transform 0.2s;
		cursor: pointer;
	}

	.blog-card:hover {
		transform: translateY(-4px);
	}

	.blog-image {
		height: 160px;
	}

	.blog-content {
		padding: 1.5rem;
	}

	.blog-category {
		font-size: 0.7rem;
		text-transform: uppercase;
		color: #D300C5;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.blog-content h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin: 0.5rem 0;
	}

	.blog-content p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.blog-meta {
		display: flex;
		gap: 1rem;
		font-size: 0.8rem;
		color: #94a3b8;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.stats-bar {
			flex-wrap: wrap;
		}

		.stat {
			flex: 1 1 calc(33% - 1rem);
		}

		.stat-divider {
			display: none;
		}

		.favorites-row {
			grid-template-columns: repeat(2, 1fr);
		}

		.tips-row {
			grid-template-columns: repeat(2, 1fr);
		}

		.blog-row {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.top-bar,
		.hero-section,
		.tabs-wrapper {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		.section {
			padding: 2rem 1.5rem;
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
			flex: 1 1 100%;
			border-bottom: 1px solid #e2e8f0;
			padding: 1.25rem;
		}

		.stat:last-child {
			border-bottom: none;
		}

		.favorites-row {
			grid-template-columns: 1fr;
		}

		.tips-row {
			grid-template-columns: 1fr;
		}

		.advisors-table th,
		.advisors-table td {
			padding: 0.75rem 1rem;
		}
	}
</style>
