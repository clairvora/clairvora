<script lang="ts">
	// V4B: Dashboard Grid with Quick Actions
	// Bento box style with action-focused widgets
</script>

<svelte:head>
	<title>Account V4B - Bento Grid</title>
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
			<a href="/mockups/account-v4b" class="tab active">Overview</a>
			<a href="/mockups/account-v4b" class="tab">My Readings</a>
			<a href="/mockups/account-v4b" class="tab">Favorites</a>
			<a href="/mockups/account-v4b" class="tab">Wallet</a>
			<a href="/mockups/account-v4b" class="tab">Settings</a>
		</div>
	</header>

	<!-- Main Content: Bento Grid Layout -->
	<main class="main">
		<div class="container">
			<div class="bento-grid">
				<!-- Quick Actions - Large -->
				<div class="bento-card quick-actions">
					<h3>Quick Actions</h3>
					<div class="actions-grid">
						<button class="action-btn chat">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
							<span>Chat Reading</span>
						</button>
						<button class="action-btn call">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
							<span>Voice Call</span>
						</button>
						<button class="action-btn video">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
							<span>Video Call</span>
						</button>
						<button class="action-btn email">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
							<span>Email Reading</span>
						</button>
					</div>
				</div>

				<!-- Balance Card -->
				<div class="bento-card balance-card">
					<div class="balance-top">
						<span class="balance-label">Available Balance</span>
						<button class="add-funds-btn">+ Add</button>
					</div>
					<span class="balance-amount">$40.68</span>
					<div class="balance-stats">
						<div class="mini-stat">
							<span class="mini-value">$127.50</span>
							<span class="mini-label">This month</span>
						</div>
						<div class="mini-stat">
							<span class="mini-value">12</span>
							<span class="mini-label">Readings</span>
						</div>
					</div>
				</div>

				<!-- Free Reading Card -->
				<div class="bento-card free-reading">
					<div class="free-badge">FREE</div>
					<h3>You have a free reading!</h3>
					<p>Use your premier member benefit</p>
					<button class="claim-btn">Claim Now</button>
				</div>

				<!-- Online Advisors - Wide -->
				<div class="bento-card advisors-online">
					<div class="section-header">
						<h3>Online Now</h3>
						<span class="online-count">3 advisors</span>
					</div>
					<div class="advisors-row">
						<div class="advisor-mini">
							<div class="avatar-wrapper online">
								<img src="/advisors/profile-1.jpg" alt="Psychic Sarah" />
							</div>
							<span class="advisor-name">Psychic Sarah</span>
							<span class="advisor-rate">$0.80/min</span>
						</div>
						<div class="advisor-mini">
							<div class="avatar-wrapper online">
								<img src="/advisors/profile-2.jpg" alt="Mystic Milo" />
							</div>
							<span class="advisor-name">Mystic Milo</span>
							<span class="advisor-rate">$1.50/min</span>
						</div>
						<div class="advisor-mini">
							<div class="avatar-wrapper online">
								<img src="/advisors/profile-5.jpg" alt="Angel Guide" />
							</div>
							<span class="advisor-name">Angel Guide</span>
							<span class="advisor-rate">$1.20/min</span>
						</div>
						<button class="see-all-btn">See All →</button>
					</div>
				</div>

				<!-- Recent Reading -->
				<div class="bento-card recent-reading">
					<span class="card-label">Last Reading</span>
					<div class="reading-preview">
						<img src="/advisors/profile-1.jpg" alt="Advisor" />
						<div class="reading-info">
							<h4>Psychic Sarah</h4>
							<span>Chat • 15 min • Dec 28</span>
						</div>
					</div>
					<div class="reading-actions">
						<button class="action-link">View Transcript</button>
						<button class="action-link">Leave Review</button>
					</div>
				</div>

				<!-- Messages -->
				<div class="bento-card messages-card">
					<div class="section-header">
						<h3>Messages</h3>
						<span class="unread-badge">2</span>
					</div>
					<div class="message-item">
						<img src="/advisors/profile-1.jpg" alt="Advisor" />
						<div class="message-text">
							<strong>Psychic Sarah</strong>
							<p>Thank you for the reading! I wanted to follow up...</p>
						</div>
					</div>
					<button class="view-all-link">View All Messages</button>
				</div>

				<!-- Rewards Progress -->
				<div class="bento-card rewards-card">
					<div class="rewards-header">
						<span class="tier-name">Premier</span>
						<span class="tier-status">Max Tier!</span>
					</div>
					<div class="perks-list">
						<span class="perk-tag">20% Off</span>
						<span class="perk-tag">Priority Queue</span>
						<span class="perk-tag">Exclusive Access</span>
					</div>
				</div>

				<!-- Schedule Card -->
				<div class="bento-card schedule-card">
					<h3>Upcoming</h3>
					<div class="schedule-empty">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
						<p>No upcoming readings</p>
						<button class="schedule-btn">Schedule Now</button>
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

	/* Bento Grid */
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: minmax(120px, auto);
		gap: 1rem;
	}

	.bento-card {
		background: white;
		border-radius: 20px;
		padding: 1.25rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	/* Quick Actions */
	.quick-actions {
		grid-column: span 2;
		grid-row: span 2;
	}

	.quick-actions h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.actions-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	.action-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1.25rem;
		border-radius: 16px;
		border: none;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.action-btn:hover {
		transform: translateY(-2px);
	}

	.action-btn svg {
		width: 28px;
		height: 28px;
	}

	.action-btn span {
		font-size: 0.85rem;
		font-weight: 600;
	}

	.action-btn.chat {
		background: linear-gradient(135deg, #7638FA 0%, #9F5CFA 100%);
		color: white;
	}

	.action-btn.call {
		background: linear-gradient(135deg, #D300C5 0%, #E84BC5 100%);
		color: white;
	}

	.action-btn.video {
		background: linear-gradient(135deg, #FF0069 0%, #FF4D8D 100%);
		color: white;
	}

	.action-btn.email {
		background: linear-gradient(135deg, #FF7A00 0%, #FFA04D 100%);
		color: white;
	}

	/* Balance Card */
	.balance-card {
		grid-column: span 1;
		grid-row: span 1;
		display: flex;
		flex-direction: column;
	}

	.balance-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.balance-label {
		font-size: 0.75rem;
		color: #64748b;
	}

	.add-funds-btn {
		background: #f1f5f9;
		border: none;
		color: #7638FA;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		font-size: 0.7rem;
		font-weight: 600;
		cursor: pointer;
	}

	.balance-amount {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: auto;
	}

	.balance-stats {
		display: flex;
		gap: 1rem;
		padding-top: 0.75rem;
		border-top: 1px solid #f1f5f9;
	}

	.mini-stat {
		display: flex;
		flex-direction: column;
	}

	.mini-value {
		font-size: 0.9rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.mini-label {
		font-size: 0.7rem;
		color: #94a3b8;
	}

	/* Free Reading */
	.free-reading {
		grid-column: span 1;
		grid-row: span 1;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.free-badge {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: white;
		color: #D300C5;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		font-size: 0.7rem;
		font-weight: 700;
	}

	.free-reading h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.free-reading p {
		font-size: 0.8rem;
		opacity: 0.9;
		margin-bottom: 1rem;
	}

	.claim-btn {
		background: white;
		color: #D300C5;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		align-self: flex-start;
	}

	/* Online Advisors */
	.advisors-online {
		grid-column: span 2;
		grid-row: span 1;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.section-header h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.online-count {
		font-size: 0.8rem;
		color: #22c55e;
		font-weight: 500;
	}

	.advisors-row {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.advisor-mini {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.avatar-wrapper {
		position: relative;
		margin-bottom: 0.5rem;
	}

	.avatar-wrapper img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
	}

	.avatar-wrapper.online::after {
		content: '';
		position: absolute;
		bottom: 2px;
		right: 2px;
		width: 14px;
		height: 14px;
		background: #22c55e;
		border: 2px solid white;
		border-radius: 50%;
	}

	.advisor-name {
		font-size: 0.8rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.advisor-rate {
		font-size: 0.7rem;
		color: #64748b;
	}

	.see-all-btn {
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
		margin-left: auto;
	}

	/* Recent Reading */
	.recent-reading {
		grid-column: span 1;
	}

	.card-label {
		font-size: 0.7rem;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.reading-preview {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		margin: 0.75rem 0;
	}

	.reading-preview img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		object-fit: cover;
	}

	.reading-info h4 {
		font-size: 0.9rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.reading-info span {
		font-size: 0.75rem;
		color: #64748b;
	}

	.reading-actions {
		display: flex;
		gap: 1rem;
	}

	.action-link {
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		padding: 0;
	}

	/* Messages */
	.messages-card {
		grid-column: span 1;
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

	.message-item {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem;
		background: #f8fafc;
		border-radius: 12px;
		margin-bottom: 0.75rem;
	}

	.message-item img {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		object-fit: cover;
	}

	.message-text strong {
		display: block;
		font-size: 0.8rem;
		color: #1a1a2e;
	}

	.message-text p {
		font-size: 0.75rem;
		color: #64748b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 150px;
	}

	.view-all-link {
		display: block;
		text-align: center;
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
	}

	/* Rewards */
	.rewards-card {
		grid-column: span 1;
	}

	.rewards-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.tier-name {
		font-size: 1.1rem;
		font-weight: 700;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tier-status {
		font-size: 0.7rem;
		color: #22c55e;
		font-weight: 500;
	}

	.perks-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.perk-tag {
		background: #f0f0ff;
		color: #7638FA;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	/* Schedule */
	.schedule-card {
		grid-column: span 1;
	}

	.schedule-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.schedule-empty {
		text-align: center;
		color: #94a3b8;
	}

	.schedule-empty svg {
		width: 32px;
		height: 32px;
		margin-bottom: 0.5rem;
	}

	.schedule-empty p {
		font-size: 0.8rem;
		margin-bottom: 0.75rem;
	}

	.schedule-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
	}

	@media (max-width: 1024px) {
		.bento-grid {
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

		.bento-grid {
			grid-template-columns: 1fr;
		}

		.quick-actions,
		.advisors-online {
			grid-column: span 1;
		}

		.advisors-row {
			flex-wrap: wrap;
		}
	}
</style>
