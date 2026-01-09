<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock favorites data
	const favorites = [
		{
			id: 1,
			name: 'Psychic Sarah',
			image: '/advisors/profile-1.jpg',
			specialty: 'Love & Relationships',
			rating: 4.9,
			reviews: 1247,
			status: 'online',
			pricePerMin: '$1.20',
			lastReading: 'Dec 28, 2025',
			notifyEnabled: false
		},
		{
			id: 2,
			name: 'Tarot Luna',
			image: '/advisors/profile-3.jpg',
			specialty: 'Tarot & Spirituality',
			rating: 4.7,
			reviews: 892,
			status: 'online',
			pricePerMin: '$1.00',
			lastReading: 'Dec 20, 2025',
			notifyEnabled: false
		},
		{
			id: 3,
			name: 'Mystic Milo',
			image: '/advisors/profile-2.jpg',
			specialty: 'Career & Finance',
			rating: 4.8,
			reviews: 1056,
			status: 'offline',
			pricePerMin: '$1.50',
			lastReading: 'Dec 25, 2025',
			notifyEnabled: true
		},
		{
			id: 4,
			name: 'Astrologer Amy',
			image: '/advisors/profile-4.jpg',
			specialty: 'Astrology & Horoscopes',
			rating: 4.6,
			reviews: 734,
			status: 'busy',
			pricePerMin: '$0.90',
			lastReading: 'Dec 25, 2025',
			notifyEnabled: false
		},
		{
			id: 5,
			name: 'Medium Marcus',
			image: '/advisors/profile-5.jpg',
			specialty: 'Mediumship & Spirit',
			rating: 4.9,
			reviews: 1589,
			status: 'offline',
			pricePerMin: '$1.80',
			lastReading: 'Dec 15, 2025',
			notifyEnabled: true
		},
		{
			id: 6,
			name: 'Crystal Claire',
			image: '/advisors/profile-6.jpg',
			specialty: 'Crystal Healing',
			rating: 4.5,
			reviews: 456,
			status: 'online',
			pricePerMin: '$0.85',
			lastReading: 'Dec 10, 2025',
			notifyEnabled: false
		}
	];

	function getStatusText(status: string) {
		switch (status) {
			case 'online': return 'Online';
			case 'busy': return 'Busy';
			case 'offline': return 'Offline';
			default: return status;
		}
	}

	function getButtonText(status: string) {
		switch (status) {
			case 'online': return 'Connect';
			case 'busy': return 'Join Queue';
			case 'offline': return 'Notify Me';
			default: return 'View';
		}
	}
</script>

<svelte:head>
	<title>Favorites - Clairvora</title>
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
				<a href="/account/client/readings" class="tab">My Readings</a>
				<a href="/account/client/favorites" class="tab active">Favorites</a>
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
			<!-- Favorites Section -->
			<section class="section">
				<div class="section-header">
					<h2>Your Favorite Advisors</h2>
					<a href="/advisors">Browse All Advisors →</a>
				</div>

				{#if favorites.length === 0}
					<div class="empty-state">
						<div class="empty-icon">
							<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
							</svg>
						</div>
						<h3>No Favorites Yet</h3>
						<p>Save your favorite advisors to quickly connect with them later.</p>
						<button class="btn-primary-sm">Browse Advisors</button>
					</div>
				{:else}
					<div class="favorites-grid">
						{#each favorites as advisor}
							<div class="favorite-card">
								<div class="card-header">
									<button class="remove-btn" title="Remove from favorites">
										<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
											<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
										</svg>
									</button>
								</div>
								<div class="advisor-avatar">
									<img src={advisor.image} alt={advisor.name} />
									{#if advisor.status === 'online'}
										<span class="online-indicator"></span>
									{/if}
								</div>
								<h3 class="advisor-name">{advisor.name}</h3>
								<p class="advisor-specialty">{advisor.specialty}</p>
								<div class="advisor-rating">
									<span class="stars">★</span>
									<span class="rating-value">{advisor.rating}</span>
									<span class="review-count">({advisor.reviews})</span>
								</div>
								<div class="advisor-price">
									{advisor.pricePerMin}<span>/min</span>
								</div>
								<div class="advisor-status">
									<span class="status-dot {advisor.status}"></span>
									<span class="status-text">{getStatusText(advisor.status)}</span>
								</div>
								<div class="last-reading">
									Last reading: {advisor.lastReading}
								</div>
								<div class="card-actions">
									{#if advisor.status === 'online'}
										<button class="connect-btn">{getButtonText(advisor.status)}</button>
									{:else if advisor.status === 'busy'}
										<button class="connect-btn queue">{getButtonText(advisor.status)}</button>
									{:else}
										<button class="connect-btn notify" class:active={advisor.notifyEnabled}>
											{advisor.notifyEnabled ? 'Notifications On' : getButtonText(advisor.status)}
										</button>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</section>

			<!-- Tips Section -->
			<section class="tips-section">
				<h3>About Favorites</h3>
				<div class="tips-row">
					<div class="tip-item">
						<strong>Quick access</strong> to advisors you've connected with and trust.
					</div>
					<div class="tip-item">
						<strong>Get notified</strong> when your favorite offline advisors come online.
					</div>
					<div class="tip-item">
						<strong>Build relationships</strong> with advisors who understand your journey.
					</div>
					<div class="tip-item">
						<strong>Save time</strong> by going straight to advisors who resonate with you.
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
		margin-bottom: 1.5rem;
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

	/* Empty State */
	.empty-state {
		background: white;
		border-radius: 16px;
		padding: 4rem 2rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.empty-icon {
		color: #cbd5e1;
		margin-bottom: 1.5rem;
	}

	.empty-state h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.empty-state p {
		color: #64748b;
		margin-bottom: 1.5rem;
	}

	.btn-primary-sm {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	/* Favorites Grid */
	.favorites-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.favorite-card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		position: relative;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.favorite-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.card-header {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.remove-btn {
		background: none;
		border: none;
		color: #D300C5;
		cursor: pointer;
		padding: 0.25rem;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.remove-btn:hover {
		opacity: 1;
	}

	.advisor-avatar {
		position: relative;
		display: inline-block;
		margin-bottom: 1rem;
	}

	.advisor-avatar img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid white;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	.online-indicator {
		position: absolute;
		bottom: 6px;
		right: 6px;
		width: 18px;
		height: 18px;
		background: #22c55e;
		border: 3px solid white;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
	}

	.advisor-name {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.advisor-specialty {
		font-size: 0.85rem;
		color: #64748b;
		margin-bottom: 0.75rem;
	}

	.advisor-rating {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.stars {
		color: #FFD600;
	}

	.rating-value {
		font-weight: 600;
		color: #1a1a2e;
	}

	.review-count {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.advisor-price {
		font-size: 1.1rem;
		font-weight: 700;
		color: #7638FA;
		margin-bottom: 0.75rem;
	}

	.advisor-price span {
		font-size: 0.8rem;
		font-weight: 500;
		color: #64748b;
	}

	.advisor-status {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.status-dot.online {
		background: #22c55e;
	}

	.status-dot.busy {
		background: #f59e0b;
	}

	.status-dot.offline {
		background: #94a3b8;
	}

	.status-text {
		font-size: 0.85rem;
		color: #64748b;
	}

	.last-reading {
		font-size: 0.75rem;
		color: #94a3b8;
		margin-bottom: 1rem;
	}

	.card-actions {
		margin-top: auto;
	}

	.connect-btn {
		width: 100%;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.connect-btn:hover {
		transform: translateY(-2px);
	}

	.connect-btn.queue {
		background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
	}

	.connect-btn.notify {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	.connect-btn.notify.active {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1), rgba(211, 0, 197, 0.1));
		color: #7638FA;
		border-color: #7638FA;
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
		.favorites-grid {
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

		.favorites-grid {
			grid-template-columns: 1fr;
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
	}
</style>
