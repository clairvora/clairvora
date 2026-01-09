<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock user data
	let profile = $state({
		firstName: 'Jason',
		lastName: 'Miller',
		email: 'jason.miller@example.com',
		phone: '(555) 123-4567',
		timezone: 'America/New_York'
	});

	let notifications = $state({
		specialOffers: true,
		newsletter: true,
		surveys: false,
		feedbackRequests: true,
		referralProgram: true
	});

	let isEditingProfile = $state(false);
	let isChangingPassword = $state(false);
	let showCurrentPassword = $state(false);
	let showNewPassword = $state(false);

	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');

	const timezones = [
		{ group: 'US & Canada', options: [
			{ value: 'America/New_York', label: 'Eastern Time (ET)' },
			{ value: 'America/Chicago', label: 'Central Time (CT)' },
			{ value: 'America/Denver', label: 'Mountain Time (MT)' },
			{ value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
			{ value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
			{ value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' }
		]},
		{ group: 'Europe', options: [
			{ value: 'Europe/London', label: 'London (GMT)' },
			{ value: 'Europe/Paris', label: 'Paris (CET)' },
			{ value: 'Europe/Berlin', label: 'Berlin (CET)' }
		]},
		{ group: 'Asia Pacific', options: [
			{ value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
			{ value: 'Australia/Sydney', label: 'Sydney (AEST)' }
		]}
	];

	function toggleAllNotifications(enabled: boolean) {
		notifications.specialOffers = enabled;
		notifications.newsletter = enabled;
		notifications.surveys = enabled;
		notifications.feedbackRequests = enabled;
		notifications.referralProgram = enabled;
	}

	const allEnabled = $derived(
		notifications.specialOffers &&
		notifications.newsletter &&
		notifications.surveys &&
		notifications.feedbackRequests &&
		notifications.referralProgram
	);
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
				<a href="/account/client/favorites" class="tab">Favorites</a>
				<a href="/account/client/wallet" class="tab">Wallet</a>
				<a href="/account/client/settings" class="tab active">Settings</a>
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
			<div class="settings-grid">
				<!-- Profile Section -->
				<section class="settings-card">
					<div class="card-header">
						<h2>Profile Information</h2>
						{#if !isEditingProfile}
							<button class="edit-btn" onclick={() => isEditingProfile = true}>Edit</button>
						{/if}
					</div>

					{#if isEditingProfile}
						<form class="profile-form" onsubmit={(e) => { e.preventDefault(); isEditingProfile = false; }}>
							<div class="form-row">
								<div class="form-group">
									<label for="firstName">First Name</label>
									<input type="text" id="firstName" bind:value={profile.firstName} />
								</div>
								<div class="form-group">
									<label for="lastName">Last Name</label>
									<input type="text" id="lastName" bind:value={profile.lastName} />
								</div>
							</div>
							<div class="form-group">
								<label for="email">Email Address</label>
								<input type="email" id="email" bind:value={profile.email} />
							</div>
							<div class="form-group">
								<label for="phone">Phone Number</label>
								<input type="tel" id="phone" bind:value={profile.phone} />
							</div>
							<div class="form-group">
								<label for="timezone">Timezone</label>
								<select id="timezone" bind:value={profile.timezone}>
									{#each timezones as group}
										<optgroup label={group.group}>
											{#each group.options as tz}
												<option value={tz.value}>{tz.label}</option>
											{/each}
										</optgroup>
									{/each}
								</select>
							</div>
							<div class="form-actions">
								<button type="button" class="cancel-btn" onclick={() => isEditingProfile = false}>Cancel</button>
								<button type="submit" class="save-btn">Save Changes</button>
							</div>
						</form>
					{:else}
						<div class="profile-display">
							<div class="profile-row">
								<span class="profile-label">Name</span>
								<span class="profile-value">{profile.firstName} {profile.lastName}</span>
							</div>
							<div class="profile-row">
								<span class="profile-label">Email</span>
								<span class="profile-value">{profile.email}</span>
							</div>
							<div class="profile-row">
								<span class="profile-label">Phone</span>
								<span class="profile-value">{profile.phone}</span>
							</div>
							<div class="profile-row">
								<span class="profile-label">Timezone</span>
								<span class="profile-value">Eastern Time (ET)</span>
							</div>
							<div class="profile-row">
								<span class="profile-label">Account Status</span>
								<span class="status-badge active">Active</span>
							</div>
						</div>
					{/if}
				</section>

				<!-- Password Section -->
				<section class="settings-card">
					<div class="card-header">
						<h2>Password & Security</h2>
						{#if !isChangingPassword}
							<button class="edit-btn" onclick={() => isChangingPassword = true}>Change Password</button>
						{/if}
					</div>

					{#if isChangingPassword}
						<form class="password-form" onsubmit={(e) => { e.preventDefault(); isChangingPassword = false; currentPassword = ''; newPassword = ''; confirmPassword = ''; }}>
							<div class="form-group">
								<label for="currentPassword">Current Password</label>
								<div class="password-input">
									<input
										type={showCurrentPassword ? 'text' : 'password'}
										id="currentPassword"
										bind:value={currentPassword}
										placeholder="Enter current password"
									/>
									<button
										type="button"
										class="toggle-password"
										onclick={() => showCurrentPassword = !showCurrentPassword}
									>
										{showCurrentPassword ? 'Hide' : 'Show'}
									</button>
								</div>
							</div>
							<div class="form-group">
								<label for="newPassword">New Password</label>
								<div class="password-input">
									<input
										type={showNewPassword ? 'text' : 'password'}
										id="newPassword"
										bind:value={newPassword}
										placeholder="Enter new password"
									/>
									<button
										type="button"
										class="toggle-password"
										onclick={() => showNewPassword = !showNewPassword}
									>
										{showNewPassword ? 'Hide' : 'Show'}
									</button>
								</div>
								<span class="password-hint">At least 8 characters with a mix of letters and numbers</span>
							</div>
							<div class="form-group">
								<label for="confirmPassword">Confirm New Password</label>
								<input
									type="password"
									id="confirmPassword"
									bind:value={confirmPassword}
									placeholder="Confirm new password"
								/>
							</div>
							<div class="form-actions">
								<button type="button" class="cancel-btn" onclick={() => { isChangingPassword = false; currentPassword = ''; newPassword = ''; confirmPassword = ''; }}>Cancel</button>
								<button type="submit" class="save-btn">Update Password</button>
							</div>
						</form>
					{:else}
						<div class="security-info">
							<p>Your password was last changed <strong>30 days ago</strong>.</p>
							<p class="security-note">For your security, we recommend changing your password regularly.</p>
						</div>
					{/if}
				</section>

				<!-- Notifications Section -->
				<section class="settings-card">
					<div class="card-header">
						<h2>Email Notifications</h2>
						<button class="toggle-all-btn" onclick={() => toggleAllNotifications(!allEnabled)}>
							{allEnabled ? 'Disable All' : 'Enable All'}
						</button>
					</div>

					<div class="notification-list">
						<div class="notification-item">
							<div class="notification-info">
								<span class="notification-title">Special Offers</span>
								<span class="notification-desc">Exclusive deals and discounts on readings</span>
							</div>
							<label class="toggle">
								<input type="checkbox" bind:checked={notifications.specialOffers} />
								<span class="toggle-slider"></span>
							</label>
						</div>

						<div class="notification-item">
							<div class="notification-info">
								<span class="notification-title">Newsletter</span>
								<span class="notification-desc">Spiritual insights and advisor spotlights</span>
							</div>
							<label class="toggle">
								<input type="checkbox" bind:checked={notifications.newsletter} />
								<span class="toggle-slider"></span>
							</label>
						</div>

						<div class="notification-item">
							<div class="notification-info">
								<span class="notification-title">Surveys</span>
								<span class="notification-desc">Help us improve with your feedback</span>
							</div>
							<label class="toggle">
								<input type="checkbox" bind:checked={notifications.surveys} />
								<span class="toggle-slider"></span>
							</label>
						</div>

						<div class="notification-item">
							<div class="notification-info">
								<span class="notification-title">Feedback Requests</span>
								<span class="notification-desc">Rate your experience after readings</span>
							</div>
							<label class="toggle">
								<input type="checkbox" bind:checked={notifications.feedbackRequests} />
								<span class="toggle-slider"></span>
							</label>
						</div>

						<div class="notification-item">
							<div class="notification-info">
								<span class="notification-title">Referral Program</span>
								<span class="notification-desc">Updates about your referrals and rewards</span>
							</div>
							<label class="toggle">
								<input type="checkbox" bind:checked={notifications.referralProgram} />
								<span class="toggle-slider"></span>
							</label>
						</div>
					</div>
				</section>

				<!-- Account Actions -->
				<section class="settings-card danger-zone">
					<div class="card-header">
						<h2>Account Actions</h2>
					</div>

					<div class="account-actions">
						<div class="action-item">
							<div class="action-info">
								<span class="action-title">Download Your Data</span>
								<span class="action-desc">Get a copy of your account data and reading history</span>
							</div>
							<button class="action-btn secondary">Download</button>
						</div>

						<div class="action-item">
							<div class="action-info">
								<span class="action-title">Deactivate Account</span>
								<span class="action-desc">Temporarily disable your account</span>
							</div>
							<button class="action-btn secondary">Deactivate</button>
						</div>

						<div class="action-item danger">
							<div class="action-info">
								<span class="action-title">Delete Account</span>
								<span class="action-desc">Permanently delete your account and all data</span>
							</div>
							<button class="action-btn danger">Delete</button>
						</div>
					</div>
				</section>
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

	/* Settings Grid */
	.settings-grid {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.settings-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.card-header h2 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.edit-btn {
		background: none;
		border: none;
		color: #D300C5;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.toggle-all-btn {
		background: none;
		border: none;
		color: #64748b;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.toggle-all-btn:hover {
		color: #D300C5;
	}

	/* Profile Display */
	.profile-display {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.profile-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 1rem;
		border-bottom: 1px solid #f1f5f9;
	}

	.profile-row:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.profile-label {
		font-size: 0.9rem;
		color: #64748b;
	}

	.profile-value {
		font-weight: 500;
		color: #1a1a2e;
	}

	.status-badge.active {
		background: #dcfce7;
		color: #16a34a;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	/* Profile Form */
	.profile-form,
	.password-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
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
		color: #64748b;
	}

	.form-group input,
	.form-group select {
		padding: 0.875rem 1.25rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 1rem;
		color: #1a1a2e;
	}

	.form-group input:focus,
	.form-group select:focus {
		outline: none;
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	.password-input {
		position: relative;
	}

	.password-input input {
		width: 100%;
		padding-right: 4rem;
	}

	.toggle-password {
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		color: #64748b;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.toggle-password:hover {
		color: #D300C5;
	}

	.password-hint {
		font-size: 0.75rem;
		color: #94a3b8;
	}

	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.cancel-btn {
		padding: 0.75rem 1.5rem;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 50px;
		font-weight: 600;
		color: #64748b;
		cursor: pointer;
	}

	.save-btn {
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border: none;
		border-radius: 50px;
		font-weight: 600;
		color: white;
		cursor: pointer;
	}

	/* Security Info */
	.security-info {
		color: #64748b;
		font-size: 0.9rem;
	}

	.security-info strong {
		color: #1a1a2e;
	}

	.security-note {
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: #94a3b8;
	}

	/* Notifications */
	.notification-list {
		display: flex;
		flex-direction: column;
	}

	.notification-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.notification-item:last-child {
		border-bottom: none;
	}

	.notification-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.notification-title {
		font-weight: 500;
		color: #1a1a2e;
	}

	.notification-desc {
		font-size: 0.85rem;
		color: #94a3b8;
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
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #e2e8f0;
		border-radius: 26px;
		transition: 0.3s;
	}

	.toggle-slider:before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		left: 3px;
		bottom: 3px;
		background: white;
		border-radius: 50%;
		transition: 0.3s;
	}

	.toggle input:checked + .toggle-slider {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
	}

	.toggle input:checked + .toggle-slider:before {
		transform: translateX(22px);
	}

	/* Account Actions */
	.account-actions {
		display: flex;
		flex-direction: column;
	}

	.action-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.action-item:last-child {
		border-bottom: none;
	}

	.action-item.danger {
		padding-top: 1.5rem;
		margin-top: 0.5rem;
		border-top: 1px solid #fecaca;
		border-bottom: none;
	}

	.action-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.action-title {
		font-weight: 500;
		color: #1a1a2e;
	}

	.action-item.danger .action-title {
		color: #dc2626;
	}

	.action-desc {
		font-size: 0.85rem;
		color: #94a3b8;
	}

	.action-btn {
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.action-btn.secondary {
		background: white;
		border: 1px solid #e2e8f0;
		color: #64748b;
	}

	.action-btn.secondary:hover {
		border-color: #D300C5;
		color: #D300C5;
	}

	.action-btn.danger {
		background: #fef2f2;
		border: 1px solid #fecaca;
		color: #dc2626;
	}

	.action-btn.danger:hover {
		background: #dc2626;
		color: white;
	}

	/* Responsive */
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

		.form-row {
			grid-template-columns: 1fr;
		}

		.profile-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}

		.notification-item,
		.action-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.toggle {
			align-self: flex-end;
		}

		.action-btn {
			width: 100%;
		}
	}
</style>
