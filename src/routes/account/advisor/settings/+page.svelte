<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock advisor data
	let advisor = $state({
		firstName: 'Luna',
		displayName: 'Mystic Luna',
		balance: 1247.50,
		isOnline: true,
		rating: 4.9,
		totalReadings: 1847,
		chatReadings: 892,
		callReadings: 623,
		textReadings: 332,
		todayEarnings: 127.50,
		queueCount: 3
	});

	// Profile settings
	let profile = $state({
		displayName: 'Mystic Luna',
		subtitle: 'Intuitive Tarot Reader',
		yearsExperience: 8,
		style: 'Compassionate',
		about: 'With over 8 years of experience in tarot reading and spiritual guidance, I help clients navigate life\'s challenges with compassion and clarity. My readings focus on providing actionable insights for love, career, and personal growth.',
		specialties: ['Love & Relationships', 'Career', 'Life Path'],
		tools: ['Tarot Cards', 'Oracle Cards', 'Pendulum'],
		readingTypes: ['Chat', 'Phone', 'Text']
	});

	// Rates settings
	let rates = $state({
		chat: 4.99,
		call: 5.99,
		text: 9.99,
		commission: 60
	});

	// Notification settings
	let notifications = $state({
		newClient: true,
		queueAlert: true,
		payoutNotification: true,
		emailUpdates: false
	});

	// Account settings
	let account = $state({
		status: 'Active',
		timezone: 'America/New_York',
		email: 'luna@email.com',
		phone: '+1 555-123-4567'
	});

	// Edit states
	let isEditingProfile = $state(false);
	let isEditingRates = $state(false);

	// Get time of day greeting
	function getGreeting(): string {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good morning';
		if (hour < 17) return 'Good afternoon';
		return 'Good evening';
	}

	// Handle form submissions
	function saveProfile(e: Event) {
		e.preventDefault();
		isEditingProfile = false;
	}

	function saveRates(e: Event) {
		e.preventDefault();
		isEditingRates = false;
	}
</script>

<svelte:head>
	<title>Settings - Clairvora</title>
</svelte:head>

<div class="page">
	<!-- Hero Banner -->
	<header class="hero">
		<nav class="top-bar">
			<div class="top-bar-content">
				<a href="/" class="logo">Clairvora</a>
				<div class="nav-right">
					<button class="btn-ghost">Help</button>
					<button class="btn-add">Go Online</button>
					<SignOutButton signOutOptions={{ redirectUrl: '/' }}>
						<span class="btn-ghost">Log Out</span>
					</SignOutButton>
				</div>
			</div>
		</nav>

		<div class="hero-section">
			<div class="hero-content">
				<div class="hero-text">
					<span class="tier-badge">Top Rated Advisor</span>
					<h1>{getGreeting()}, {advisor.firstName}</h1>
					<p>Your balance is <strong>${advisor.balance.toFixed(2)}</strong></p>
				</div>
				<div class="hero-actions">
					<button class="btn-primary">View Queue</button>
					<a href="/account/advisor/schedule" class="btn-secondary">Set Schedule</a>
				</div>
			</div>
		</div>

		<div class="tabs-wrapper">
			<div class="tabs">
				<a href="/account/advisor" class="tab">Overview</a>
				<a href="/account/advisor/readings" class="tab">Readings</a>
				<a href="/account/advisor/clients" class="tab">Clients</a>
				<a href="/account/advisor/earnings" class="tab">Earnings</a>
				<a href="/account/advisor/schedule" class="tab">Schedule</a>
				<a href="/account/advisor/settings" class="tab active">Settings</a>
			</div>
		</div>
	</header>

	<!-- Stats Bar -->
	<section class="stats-bar-section">
		<div class="container">
			<div class="stats-bar">
				<div class="stat">
					<span class="stat-value">${advisor.todayEarnings.toFixed(2)}</span>
					<span class="stat-label">Today's Earnings</span>
					<a href="/account/advisor/earnings" class="stat-link">View All</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.queueCount}</span>
					<span class="stat-label">Clients in Queue</span>
					<a href="/account/advisor#queue" class="stat-link">View Queue</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.rating} ★</span>
					<span class="stat-label">Rating</span>
					<a href="/account/advisor/reviews" class="stat-link">Reviews</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">{advisor.totalReadings.toLocaleString()}</span>
					<span class="stat-label">Total Readings</span>
					<a href="/account/advisor/readings" class="stat-link">History</a>
				</div>
				<div class="stat-divider"></div>
				<div class="stat status-stat">
					<span class="stat-badge online">Online</span>
					<span class="stat-label">Current Status</span>
					<button class="status-btn">Go Offline</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<main class="main">
		<div class="container">
			<!-- Profile Information Card -->
			<div class="settings-card">
				<div class="card-header">
					<h3 class="card-title">Profile Information</h3>
					<button class="table-btn secondary" onclick={() => isEditingProfile = !isEditingProfile}>
						{isEditingProfile ? 'Cancel' : 'Edit'}
					</button>
				</div>

				{#if isEditingProfile}
					<form class="settings-form" onsubmit={saveProfile}>
						<div class="form-group">
							<label for="displayName">Display Name</label>
							<input type="text" id="displayName" bind:value={profile.displayName} />
						</div>
						<div class="form-group">
							<label for="subtitle">Subtitle</label>
							<input type="text" id="subtitle" bind:value={profile.subtitle} />
						</div>
						<div class="form-group">
							<label for="yearsExperience">Years of Experience</label>
							<input type="number" id="yearsExperience" bind:value={profile.yearsExperience} />
						</div>
						<div class="form-group">
							<label for="style">Reading Style</label>
							<select id="style" bind:value={profile.style}>
								<option>Inspirational</option>
								<option>Compassionate</option>
								<option>Straightforward</option>
								<option>Wise</option>
							</select>
						</div>
						<div class="form-group">
							<label for="about">About Me</label>
							<textarea id="about" rows="5" bind:value={profile.about}></textarea>
						</div>
						<div class="form-actions">
							<button type="submit" class="btn-primary">Save Changes</button>
						</div>
					</form>
				{:else}
					<div class="settings-list">
						<div class="settings-item">
							<span class="settings-label">Display Name</span>
							<span class="settings-value">{profile.displayName}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Subtitle</span>
							<span class="settings-value">{profile.subtitle}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Years of Experience</span>
							<span class="settings-value">{profile.yearsExperience}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Reading Style</span>
							<span class="settings-value">{profile.style}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Specialties</span>
							<span class="settings-value">{profile.specialties.join(', ')}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Tools</span>
							<span class="settings-value">{profile.tools.join(', ')}</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Reading Types</span>
							<span class="settings-value">{profile.readingTypes.join(', ')}</span>
						</div>
					</div>
				{/if}
			</div>

			<!-- Pricing Settings Card -->
			<div class="settings-card">
				<div class="card-header">
					<h3 class="card-title">Pricing</h3>
					<button class="table-btn secondary" onclick={() => isEditingRates = !isEditingRates}>
						{isEditingRates ? 'Cancel' : 'Edit'}
					</button>
				</div>

				{#if isEditingRates}
					<form class="settings-form" onsubmit={saveRates}>
						<div class="form-group">
							<label for="chatRate">Chat Rate ($/minute)</label>
							<input type="number" id="chatRate" step="0.01" bind:value={rates.chat} />
						</div>
						<div class="form-group">
							<label for="callRate">Call Rate ($/minute)</label>
							<input type="number" id="callRate" step="0.01" bind:value={rates.call} />
						</div>
						<div class="form-group">
							<label for="textRate">Text Rate ($/question)</label>
							<input type="number" id="textRate" step="0.01" bind:value={rates.text} />
						</div>
						<div class="form-actions">
							<button type="submit" class="btn-primary">Save Changes</button>
						</div>
					</form>
				{:else}
					<div class="settings-list">
						<div class="settings-item">
							<span class="settings-label">Chat Rate</span>
							<span class="settings-value">${rates.chat.toFixed(2)}/min</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Call Rate</span>
							<span class="settings-value">${rates.call.toFixed(2)}/min</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Text Rate</span>
							<span class="settings-value">${rates.text.toFixed(2)}/question</span>
						</div>
						<div class="settings-item">
							<span class="settings-label">Commission</span>
							<span class="settings-value">{rates.commission}% (set by admin)</span>
						</div>
					</div>
				{/if}
			</div>

			<!-- Notification Preferences Card -->
			<div class="settings-card">
				<div class="card-header">
					<h3 class="card-title">Notifications</h3>
				</div>
				<div class="toggle-list">
					<div class="toggle-item">
						<div class="toggle-info">
							<span class="toggle-label">New Client Alerts</span>
							<span class="toggle-desc">Get notified when a new client joins your queue</span>
						</div>
						<label class="toggle">
							<input type="checkbox" bind:checked={notifications.newClient} />
							<span class="toggle-slider"></span>
						</label>
					</div>
					<div class="toggle-item">
						<div class="toggle-info">
							<span class="toggle-label">Queue Alerts</span>
							<span class="toggle-desc">Get notified when your queue reaches a certain size</span>
						</div>
						<label class="toggle">
							<input type="checkbox" bind:checked={notifications.queueAlert} />
							<span class="toggle-slider"></span>
						</label>
					</div>
					<div class="toggle-item">
						<div class="toggle-info">
							<span class="toggle-label">Payout Notifications</span>
							<span class="toggle-desc">Get notified when payouts are processed</span>
						</div>
						<label class="toggle">
							<input type="checkbox" bind:checked={notifications.payoutNotification} />
							<span class="toggle-slider"></span>
						</label>
					</div>
					<div class="toggle-item">
						<div class="toggle-info">
							<span class="toggle-label">Email Updates</span>
							<span class="toggle-desc">Receive promotional emails and platform updates</span>
						</div>
						<label class="toggle">
							<input type="checkbox" bind:checked={notifications.emailUpdates} />
							<span class="toggle-slider"></span>
						</label>
					</div>
				</div>
			</div>

			<!-- Account Settings Card -->
			<div class="settings-card">
				<div class="card-header">
					<h3 class="card-title">Account</h3>
				</div>
				<div class="settings-list">
					<div class="settings-item">
						<span class="settings-label">Account Status</span>
						<span class="status-badge active-status">{account.status}</span>
					</div>
					<div class="settings-item">
						<span class="settings-label">Timezone</span>
						<div class="settings-value-with-action">
							<span class="settings-value">{account.timezone}</span>
							<button class="change-link">Change</button>
						</div>
					</div>
					<div class="settings-item">
						<span class="settings-label">Email</span>
						<span class="settings-value">{account.email}</span>
					</div>
					<div class="settings-item">
						<span class="settings-label">Phone</span>
						<span class="settings-value">{account.phone}</span>
					</div>
				</div>
			</div>

			<!-- Danger Zone Card -->
			<div class="settings-card danger">
				<div class="card-header">
					<h3 class="card-title">Danger Zone</h3>
				</div>
				<div class="danger-actions">
					<div class="danger-item">
						<div>
							<span class="danger-label">Deactivate Account</span>
							<span class="danger-desc">Temporarily hide your profile from clients</span>
						</div>
						<button class="btn-danger-outline">Deactivate</button>
					</div>
					<div class="danger-item">
						<div>
							<span class="danger-label">Delete Account</span>
							<span class="danger-desc">Permanently delete your account and all data</span>
						</div>
						<button class="btn-danger">Delete Account</button>
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
		text-decoration: none;
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

	.stat-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.stat-badge.online {
		background: #dcfce7;
		color: #16a34a;
	}

	.status-btn {
		background: transparent;
		border: 1px solid #e2e8f0;
		color: #64748b;
		padding: 0.35rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 500;
		cursor: pointer;
		margin-top: 0.25rem;
	}

	/* Main */
	.main {
		padding: 2rem 2rem 4rem;
	}

	/* Settings Card */
	.settings-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		margin-bottom: 1.5rem;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
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
		text-decoration: none;
		display: inline-block;
	}

	.table-btn.secondary {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
	}

	/* Settings List */
	.settings-list {
		display: flex;
		flex-direction: column;
	}

	.settings-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.settings-item:last-child {
		border-bottom: none;
	}

	.settings-label {
		font-size: 0.9rem;
		color: #64748b;
	}

	.settings-value {
		font-size: 0.9rem;
		color: #1a1a2e;
		font-weight: 500;
	}

	.settings-value-with-action {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.change-link {
		background: none;
		border: none;
		color: #D300C5;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
	}

	.status-badge.active-status {
		background: #dcfce7;
		color: #16a34a;
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	/* Settings Form */
	.settings-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-group label {
		font-size: 0.85rem;
		font-weight: 500;
		color: #475569;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: 0.75rem 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 0.9rem;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	.form-actions {
		display: flex;
		justify-content: flex-end;
		padding-top: 1rem;
	}

	/* Toggle List */
	.toggle-list {
		display: flex;
		flex-direction: column;
	}

	.toggle-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.toggle-item:last-child {
		border-bottom: none;
	}

	.toggle-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.toggle-label {
		font-size: 0.9rem;
		font-weight: 500;
		color: #1a1a2e;
	}

	.toggle-desc {
		font-size: 0.8rem;
		color: #64748b;
	}

	.toggle {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 26px;
	}

	.toggle input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.toggle-slider {
		position: absolute;
		cursor: pointer;
		inset: 0;
		background: #cbd5e1;
		border-radius: 26px;
		transition: 0.3s;
	}

	.toggle-slider::before {
		content: '';
		position: absolute;
		height: 20px;
		width: 20px;
		left: 3px;
		bottom: 3px;
		background: white;
		border-radius: 50%;
		transition: 0.3s;
	}

	.toggle input:checked + .toggle-slider {
		background: linear-gradient(135deg, #7638FA, #D300C5);
	}

	.toggle input:checked + .toggle-slider::before {
		transform: translateX(22px);
	}

	/* Danger Zone */
	.settings-card.danger {
		border: 1px solid #fecaca;
	}

	.danger-actions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.danger-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #fef2f2;
		border-radius: 12px;
	}

	.danger-label {
		display: block;
		font-size: 0.9rem;
		font-weight: 500;
		color: #1a1a2e;
	}

	.danger-desc {
		display: block;
		font-size: 0.8rem;
		color: #64748b;
	}

	.btn-danger-outline {
		padding: 0.5rem 1rem;
		border: 1px solid #dc2626;
		border-radius: 8px;
		background: white;
		color: #dc2626;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
	}

	.btn-danger {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 8px;
		background: #dc2626;
		color: white;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		/* Tablet styles */
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

		.settings-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.toggle-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.danger-item {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
	}
</style>
