<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	// Mock wallet data
	const balance = {
		total: '$40.68',
		cash: '$35.68',
		bonus: '$5.00'
	};

	const paymentMethods = [
		{
			id: 1,
			type: 'visa',
			last4: '4242',
			expiry: '12/27',
			isDefault: true
		},
		{
			id: 2,
			type: 'mastercard',
			last4: '8888',
			expiry: '06/26',
			isDefault: false
		}
	];

	const transactions = [
		{
			id: 'TXN-2026-001',
			date: 'Jan 5, 2026',
			description: 'Reading with Psychic Sarah',
			type: 'debit',
			amount: '-$28.80',
			balance: '$40.68'
		},
		{
			id: 'TXN-2026-002',
			date: 'Jan 3, 2026',
			description: 'Reading with Mystic Milo',
			type: 'debit',
			amount: '-$21.60',
			balance: '$69.48'
		},
		{
			id: 'TXN-2026-003',
			date: 'Jan 1, 2026',
			description: 'Added Funds',
			type: 'credit',
			amount: '+$50.00',
			balance: '$91.08'
		},
		{
			id: 'TXN-2025-004',
			date: 'Dec 28, 2025',
			description: 'Reading with Tarot Luna',
			type: 'debit',
			amount: '-$15.00',
			balance: '$41.08'
		},
		{
			id: 'TXN-2025-005',
			date: 'Dec 25, 2025',
			description: 'Bonus Credit - Holiday Special',
			type: 'bonus',
			amount: '+$5.00',
			balance: '$56.08'
		},
		{
			id: 'TXN-2025-006',
			date: 'Dec 20, 2025',
			description: 'Added Funds',
			type: 'credit',
			amount: '+$25.00',
			balance: '$51.08'
		}
	];

	const fundAmounts = [10, 25, 50, 100];
	let selectedAmount = $state(25);
	let customAmount = $state('');
	let promoCode = $state('');
	let autoRefill = $state(true);
	let refillThreshold = $state(10);
	let refillAmount = $state(25);
</script>

<svelte:head>
	<title>Wallet - Clairvora</title>
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
				<a href="/account/client/wallet" class="tab active">Wallet</a>
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
			<div class="wallet-grid">
				<!-- Left Column -->
				<div class="wallet-left">
					<!-- Balance Card -->
					<section class="balance-card">
						<div class="balance-header">
							<h2>Your Balance</h2>
						</div>
						<div class="balance-amount">{balance.total}</div>
						<div class="balance-breakdown">
							<div class="balance-item">
								<span class="balance-label">Cash Balance</span>
								<span class="balance-value">{balance.cash}</span>
							</div>
							<div class="balance-item">
								<span class="balance-label">Bonus Credits</span>
								<span class="balance-value bonus">{balance.bonus}</span>
							</div>
						</div>
					</section>

					<!-- Add Funds -->
					<section class="add-funds-card">
						<h3>Add Funds</h3>
						<div class="amount-options">
							{#each fundAmounts as amount}
								<button
									class="amount-btn"
									class:selected={selectedAmount === amount && !customAmount}
									onclick={() => { selectedAmount = amount; customAmount = ''; }}
								>
									${amount}
								</button>
							{/each}
						</div>
						<div class="custom-amount">
							<label for="custom">Custom Amount</label>
							<div class="custom-input-wrapper">
								<span class="currency-symbol">$</span>
								<input
									type="number"
									id="custom"
									bind:value={customAmount}
									placeholder="0.00"
									min="5"
									max="500"
								/>
							</div>
						</div>
						<div class="promo-code">
							<label for="promo">Promo Code</label>
							<div class="promo-input-wrapper">
								<input
									type="text"
									id="promo"
									bind:value={promoCode}
									placeholder="Enter code"
								/>
								<button class="apply-btn">Apply</button>
							</div>
						</div>
						<button class="add-funds-btn">
							Add ${customAmount || selectedAmount} to Wallet
						</button>
					</section>

					<!-- Payment Methods -->
					<section class="payment-methods-card">
						<div class="card-header-row">
							<h3>Payment Methods</h3>
							<button class="add-card-btn">+ Add Card</button>
						</div>
						<div class="payment-list">
							{#each paymentMethods as method}
								<div class="payment-method" class:default={method.isDefault}>
									<div class="card-icon {method.type}">
										{#if method.type === 'visa'}
											<span>VISA</span>
										{:else}
											<span>MC</span>
										{/if}
									</div>
									<div class="card-info">
										<span class="card-number">•••• •••• •••• {method.last4}</span>
										<span class="card-expiry">Expires {method.expiry}</span>
									</div>
									<div class="card-actions">
										{#if method.isDefault}
											<span class="default-badge">Default</span>
										{:else}
											<button class="set-default-btn">Set Default</button>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</section>

					<!-- Auto-Refill Settings -->
					<section class="auto-refill-card">
						<div class="card-header-row">
							<h3>Auto-Refill</h3>
							<label class="toggle">
								<input type="checkbox" bind:checked={autoRefill} />
								<span class="toggle-slider"></span>
							</label>
						</div>
						{#if autoRefill}
							<p class="refill-description">
								Automatically add funds when your balance falls below a threshold.
							</p>
							<div class="refill-settings">
								<div class="refill-setting">
									<label for="threshold">When balance falls below</label>
									<select id="threshold" bind:value={refillThreshold}>
										<option value={5}>$5</option>
										<option value={10}>$10</option>
										<option value={15}>$15</option>
										<option value={20}>$20</option>
									</select>
								</div>
								<div class="refill-setting">
									<label for="refill-amount">Add this amount</label>
									<select id="refill-amount" bind:value={refillAmount}>
										<option value={10}>$10</option>
										<option value={25}>$25</option>
										<option value={50}>$50</option>
										<option value={100}>$100</option>
									</select>
								</div>
							</div>
						{/if}
					</section>
				</div>

				<!-- Right Column - Transaction History -->
				<div class="wallet-right">
					<section class="transactions-card">
						<div class="section-header">
							<h3>Transaction History</h3>
							<a href="/account/client/wallet/transactions">View All →</a>
						</div>
						<div class="transactions-list">
							{#each transactions as txn}
								<div class="transaction">
									<div class="txn-info">
										<span class="txn-description">{txn.description}</span>
										<span class="txn-date">{txn.date}</span>
									</div>
									<div class="txn-amounts">
										<span class="txn-amount {txn.type}">{txn.amount}</span>
										<span class="txn-balance">Balance: {txn.balance}</span>
									</div>
								</div>
							{/each}
						</div>
					</section>
				</div>
			</div>

			<!-- Tips Section -->
			<section class="tips-section">
				<h3>Wallet Tips</h3>
				<div class="tips-row">
					<div class="tip-item">
						<strong>Save time</strong> by adding funds in advance — no interruptions during readings.
					</div>
					<div class="tip-item">
						<strong>Auto-refill</strong> ensures you're always ready when your favorite advisor is online.
					</div>
					<div class="tip-item">
						<strong>Bonus credits</strong> from promotions are applied automatically to your readings.
					</div>
					<div class="tip-item">
						<strong>Secure payments</strong> powered by Authorize.Net with bank-level encryption.
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

	/* Wallet Grid */
	.wallet-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.wallet-left {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Balance Card */
	.balance-card {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 20px;
		padding: 2rem;
		color: white;
	}

	.balance-header h2 {
		font-size: 1rem;
		font-weight: 500;
		opacity: 0.9;
		margin-bottom: 0.5rem;
	}

	.balance-amount {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	.balance-breakdown {
		display: flex;
		gap: 2rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.balance-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.balance-label {
		font-size: 0.8rem;
		opacity: 0.8;
	}

	.balance-value {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.balance-value.bonus {
		color: #FFD600;
	}

	/* Add Funds Card */
	.add-funds-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.add-funds-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.amount-options {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		margin-bottom: 1.25rem;
	}

	.amount-btn {
		padding: 1rem;
		border: 2px solid #e2e8f0;
		border-radius: 12px;
		background: white;
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		cursor: pointer;
		transition: all 0.2s;
	}

	.amount-btn:hover {
		border-color: #D300C5;
	}

	.amount-btn.selected {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border-color: transparent;
	}

	.custom-amount,
	.promo-code {
		margin-bottom: 1rem;
	}

	.custom-amount label,
	.promo-code label {
		display: block;
		font-size: 0.85rem;
		font-weight: 500;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.custom-input-wrapper {
		position: relative;
	}

	.currency-symbol {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		color: #64748b;
		font-weight: 500;
	}

	.custom-input-wrapper input {
		width: 100%;
		padding: 0.875rem 1.25rem 0.875rem 2rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 1rem;
	}

	.custom-input-wrapper input:focus {
		outline: none;
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	.promo-input-wrapper {
		display: flex;
		gap: 0.5rem;
	}

	.promo-input-wrapper input {
		flex: 1;
		padding: 0.875rem 1.25rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 1rem;
	}

	.promo-input-wrapper input:focus {
		outline: none;
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	.apply-btn {
		padding: 0.875rem 1.25rem;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-weight: 600;
		color: #64748b;
		cursor: pointer;
	}

	.add-funds-btn {
		width: 100%;
		padding: 1rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.add-funds-btn:hover {
		transform: translateY(-2px);
	}

	/* Payment Methods */
	.payment-methods-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-header-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.card-header-row h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.add-card-btn {
		background: none;
		border: none;
		color: #D300C5;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
	}

	.payment-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.payment-method {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		transition: border-color 0.2s;
	}

	.payment-method.default {
		border-color: #D300C5;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.02), rgba(211, 0, 197, 0.02));
	}

	.card-icon {
		width: 50px;
		height: 32px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		font-weight: 700;
		color: white;
	}

	.card-icon.visa {
		background: linear-gradient(135deg, #1a1f71 0%, #2d4db8 100%);
	}

	.card-icon.mastercard {
		background: linear-gradient(135deg, #eb001b 0%, #f79e1b 100%);
	}

	.card-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.card-number {
		font-weight: 600;
		color: #1a1a2e;
		font-size: 0.9rem;
	}

	.card-expiry {
		font-size: 0.8rem;
		color: #64748b;
	}

	.default-badge {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.15), rgba(211, 0, 197, 0.15));
		color: #7638FA;
		padding: 0.25rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.set-default-btn {
		background: none;
		border: none;
		color: #64748b;
		font-size: 0.8rem;
		cursor: pointer;
	}

	.set-default-btn:hover {
		color: #D300C5;
	}

	/* Auto-Refill */
	.auto-refill-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.auto-refill-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
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

	.refill-description {
		font-size: 0.85rem;
		color: #64748b;
		margin: 1rem 0;
	}

	.refill-settings {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.refill-setting label {
		display: block;
		font-size: 0.8rem;
		color: #64748b;
		margin-bottom: 0.5rem;
	}

	.refill-setting select {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 0.9rem;
		color: #1a1a2e;
		cursor: pointer;
	}

	.refill-setting select:focus {
		outline: none;
		border-color: #D300C5;
	}

	/* Transactions */
	.transactions-card {
		background: white;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		height: fit-content;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.section-header h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.section-header a {
		color: #D300C5;
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.transactions-list {
		display: flex;
		flex-direction: column;
	}

	.transaction {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.transaction:last-child {
		border-bottom: none;
	}

	.txn-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.txn-description {
		font-weight: 500;
		color: #1a1a2e;
		font-size: 0.9rem;
	}

	.txn-date {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.txn-amounts {
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.txn-amount {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.txn-amount.debit {
		color: #1a1a2e;
	}

	.txn-amount.credit {
		color: #16a34a;
	}

	.txn-amount.bonus {
		color: #7638FA;
	}

	.txn-balance {
		font-size: 0.75rem;
		color: #94a3b8;
	}

	/* Tips Section */
	.tips-section {
		background: rgba(118, 56, 250, 0.04);
		border-radius: 16px;
		padding: 1.5rem 2rem;
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
		.wallet-grid {
			grid-template-columns: 1fr;
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

		.amount-options {
			grid-template-columns: repeat(2, 1fr);
		}

		.refill-settings {
			grid-template-columns: 1fr;
		}

		.balance-breakdown {
			flex-direction: column;
			gap: 1rem;
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
