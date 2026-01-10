<script lang="ts">
	import { ShieldCheck, Lock, CreditCard, UserCircle, LockKey, Headset } from 'phosphor-svelte';
	import Header from '$lib/components/Header.svelte';

	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: '/psychics/profile-1.jpg', price: 3.99, status: 'online', bio: 'Gifted empath specializing in twin flames and soulmate connections.' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: '/psychics/profile-2.jpg', price: 4.99, status: 'online', bio: 'Former analyst turned spiritual advisor for professional guidance.' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: '/psychics/profile-3.jpg', price: 2.99, status: 'busy', bio: 'Third-generation tarot reader revealing hidden truths.' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: '/psychics/profile-4.jpg', price: 5.99, status: 'online', bio: 'Awakened healer helping you discover your soul purpose.' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: '/psychics/profile-5.jpg', price: 3.49, status: 'online', bio: 'Dream interpreter unlocking messages from your subconscious.' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: '/psychics/profile-6.jpg', price: 2.99, status: 'offline', bio: 'Past life specialist revealing karmic patterns and soul lessons.' },
	];

	// Desktop layout: 2 rows (7 + 6)
	const topRowAdvisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage' },
		{ image: '/advisors/profile-6.jpg', name: 'River Stone' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya' },
	];

	const bottomRowAdvisors = [
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn' },
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon' },
		{ image: '/advisors/profile-13.jpg', name: 'Willow Grace' },
	];

	// Mobile layout: 3 rows (5 + 4 + 5)
	const mobileRow1Advisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage' },
	];

	const mobileRow2Advisors = [
		{ image: '/advisors/profile-6.jpg', name: 'River Stone' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya' },
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn' },
	];

	const mobileRow3Advisors = [
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon' },
		{ image: '/advisors/profile-13.jpg', name: 'Willow Grace' },
		{ image: '/advisors/profile-14.jpg', name: 'Ember Sky' },
	];
</script>

<Header />

<div class="hero-section">
	<div class="animated-bg">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>
	<div class="hero-content">
		<div class="text-content">
			<span class="eyebrow">Find Your Guide</span>
			<h1 class="headline">
				<span class="headline-main">Clarity in Uncertainty.</span>
				<span class="headline-sub">Psychic Paths to Understanding</span>
			</h1>
			<p class="subtext">
				Connect with trusted advisors for guidance on love, career, and life's biggest questions.
			</p>
			<div class="cta-group">
				<button class="cta-primary">Get Started</button>
				<button class="cta-secondary">Browse Psychics</button>
			</div>
			<div class="trust-badge">
				<span class="stars">★★★★★</span>
				<span>Trusted by 50,000+ clients</span>
			</div>
		</div>
		<div class="image-content">
			<div class="image-glow"></div>
			<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
		</div>
	</div>
	<!-- Wave divider transition -->
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</div>

<!-- Psychic Advisors Section -->
<section class="advisors-section">
	<div class="advisors-container">
		<div class="section-header">
			<h2 class="section-title">Psychic Advisors</h2>
			<p class="section-subtitle">Discover guidance from our gifted community</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-glow"></div>
					<div class="card-inner">
						<div class="card-layout">
							<div class="avatar-section">
								<div class="avatar-container">
									<img src={advisor.image} alt={advisor.name} class="avatar" />
									{#if advisor.status === 'online'}
										<span class="online-dot"></span>
									{/if}
								</div>
							</div>
							<div class="info-section">
								<div class="name-row">
									<h3 class="advisor-name">{advisor.name}</h3>
									<div class="price-badge">${advisor.price}/min</div>
								</div>
								<p class="advisor-specialty">{advisor.specialty}</p>
								<p class="advisor-bio">{advisor.bio}</p>
								<div class="stats-row">
									<span class="stat-value">★ {advisor.rating}</span>
									<span class="stat-divider">·</span>
									<span class="stat-value">{advisor.reviews.toLocaleString()} reviews</span>
								</div>
								<button class="connect-btn">
									{#if advisor.status === 'online'}
										Connect Now
									{:else if advisor.status === 'busy'}
										Join Queue
									{:else}
										Schedule
									{/if}
								</button>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="section-footer">
			<button class="view-all-btn">
				<span>View All Advisors</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</button>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section class="how-it-works">
	<div class="hiw-container">
		<div class="hiw-image-col">
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="hiw-content-col">
			<h2 class="hiw-title">How It Works</h2>
			<p class="hiw-subtitle">Discover how easy it is to get the guidance you need with Clairvora.</p>

			<div class="hiw-steps">
				{#each [
					{ title: 'Choose Your Advisor', desc: 'Browse our handpicked selection of gifted psychics. Each advisor\'s profile includes their specialties, reviews, and availability.' },
					{ title: 'Select Your Reading Style', desc: 'Decide how you\'d like to connect: choose from call, text, or chat readings.' },
					{ title: 'Create Your Account', desc: 'If you\'re new to Clairvora, setting up an account is quick and easy.' },
					{ title: 'Begin Your Reading', desc: 'Connect with your chosen advisor and embark on your journey to clarity.' }
				] as step, i}
					<div class="hiw-step">
						<div class="hiw-step-indicator">
							<div class="hiw-dot"></div>
							{#if i < 3}<div class="hiw-line"></div>{/if}
						</div>
						<div class="hiw-step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<button class="hiw-cta">Get Started Now</button>
		</div>
	</div>
</section>

<!-- Why Choose Clairvora Section -->
<section class="why-choose">
	<div class="why-choose-container">
		<div class="why-choose-grid">
			<div class="why-choose-content">
				<span class="why-choose-eyebrow">Why Clairvora</span>
				<h2 class="why-choose-title">Why Choose Clairvora?</h2>
				<p class="why-choose-intro">
					At Clairvora, we believe that everyone deserves access to authentic, world-class
					psychic guidance. Whether you're seeking clarity, comfort, or direction, our
					carefully selected psychics are here to help you unlock the answers you seek.
				</p>

				<div class="why-choose-highlights">
					{#each [
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`, text: 'Trusted Psychics' },
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, text: 'Private & Secure' },
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, text: '24/7 Available' },
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, text: 'Authentic Readings' },
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, text: 'Global Reach' },
						{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, text: 'Growing Reputation' }
					] as highlight}
						<div class="why-choose-highlight">
							<span class="why-choose-highlight-icon">{@html highlight.icon}</span>
							<span class="why-choose-highlight-text">{highlight.text}</span>
						</div>
					{/each}
				</div>

				<div class="why-choose-features">
					{#each [
						{
							icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
							title: 'Global Talent',
							description: 'We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.'
						},
						{
							icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
							title: 'Personalized Options',
							description: 'Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.'
						},
						{
							icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
							title: 'Fresh Perspective',
							description: 'As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.'
						}
					] as feature}
						<div class="why-choose-feature">
							<div class="why-choose-feature-icon">
								{@html feature.icon}
							</div>
							<div class="why-choose-feature-content">
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="why-choose-image">
				<div class="why-choose-image-wrapper">
					<img src="/woman-happy.jpg?v=2" alt="Happy Clairvora client" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Find Your Advisor Section -->
<section class="find-advisor">
	<div class="find-advisor-bg"></div>
	<div class="find-advisor-container">
		<div class="find-advisor-header">
			<span class="find-advisor-badge">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
				</svg>
				<span>Trusted Advisors</span>
			</span>
			<h2 class="find-advisor-title">Find Your Advisor</h2>
			<p class="find-advisor-description">
				Discover the perfect psychic to guide you on your journey. Each brings unique talents and specialties, ready to provide you with clarity and insight.
			</p>
		</div>

		<!-- Desktop layout: 2 rows -->
		<div class="find-advisor-avatars find-advisor-desktop">
			<div class="find-advisor-row find-advisor-top-row">
				{#each topRowAdvisors as advisor, i}
					<div class="find-advisor-avatar-wrapper" style="--delay: {i * 0.08}s">
						<div class="find-advisor-avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
			<div class="find-advisor-row find-advisor-bottom-row">
				{#each bottomRowAdvisors as advisor, i}
					<div class="find-advisor-avatar-wrapper" style="--delay: {(i + 7) * 0.08}s">
						<div class="find-advisor-avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Mobile layout: 3 rows (5-4-5) -->
		<div class="find-advisor-avatars find-advisor-mobile">
			<div class="find-advisor-row find-advisor-mobile-row1">
				{#each mobileRow1Advisors as advisor, i}
					<div class="find-advisor-avatar-wrapper" style="--delay: {i * 0.08}s">
						<div class="find-advisor-avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
			<div class="find-advisor-row find-advisor-mobile-row2">
				{#each mobileRow2Advisors as advisor, i}
					<div class="find-advisor-avatar-wrapper" style="--delay: {(i + 5) * 0.08}s">
						<div class="find-advisor-avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
			<div class="find-advisor-row find-advisor-mobile-row3">
				{#each mobileRow3Advisors as advisor, i}
					<div class="find-advisor-avatar-wrapper" style="--delay: {(i + 9) * 0.08}s">
						<div class="find-advisor-avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="find-advisor-stats">
			<div class="find-advisor-stat">
				<span class="find-advisor-stat-value">500+</span>
				<span class="find-advisor-stat-label">Verified Advisors</span>
			</div>
			<div class="find-advisor-stat-divider"></div>
			<div class="find-advisor-stat">
				<span class="find-advisor-stat-value">50K+</span>
				<span class="find-advisor-stat-label">Happy Clients</span>
			</div>
			<div class="find-advisor-stat-divider"></div>
			<div class="find-advisor-stat">
				<span class="find-advisor-stat-value">4.9</span>
				<span class="find-advisor-stat-label">Average Rating</span>
			</div>
		</div>

		<div class="find-advisor-cta">
			<button class="find-advisor-button">
				<span>Find an Advisor</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</button>
			<span class="find-advisor-subtext">Browse by specialty, availability, or rating</span>
		</div>
	</div>
</section>

<!-- Satisfaction Guarantee Section -->
<section class="guarantee">
	<div class="guarantee-container">
		<div class="guarantee-content">
			<span class="guarantee-eyebrow">Our Promise to You</span>
			<h2 class="guarantee-title">Your Satisfaction Guaranteed</h2>
			<p class="guarantee-description">If you are ever dissatisfied with a reading, contact us and we'll find a reader more suited for you — or refund your purchase. Your peace of mind is our priority.</p>

			<div class="guarantee-features">
				<div class="guarantee-feature">
					<div class="feature-icon">
						<ShieldCheck size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Money-Back Guarantee</h3>
						<p class="feature-desc">Not satisfied? Get a full refund, no questions asked.</p>
					</div>
				</div>

				<div class="guarantee-feature">
					<div class="feature-icon">
						<LockKey size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Secure Payments</h3>
						<p class="feature-desc">Bank-level 256-bit SSL encryption protects your data.</p>
					</div>
				</div>

				<div class="guarantee-feature">
					<div class="feature-icon">
						<UserCircle size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Privacy Protected</h3>
						<p class="feature-desc">Your readings and personal info stay completely private.</p>
					</div>
				</div>
			</div>

			<div class="trust-row">
				<div class="trust-item">
					<Lock size={20} weight="bold" />
					<span>SSL Secured</span>
				</div>
				<div class="trust-item">
					<CreditCard size={20} weight="bold" />
					<span>Visa / MC / Amex</span>
				</div>
				<div class="trust-item">
					<Headset size={20} weight="bold" />
					<span>24/7 Support</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero styles */
	.hero-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 6rem;
		padding-bottom: 12rem;
		padding-left: 2rem;
		padding-right: 2rem;
		position: relative;
		overflow: hidden;
	}

	.animated-bg {
		display: none;
	}

	.wave-divider {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 150px;
		display: block;
	}

	.hero-content {
		width: 100%;
		max-width: 1170px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.text-content {
		color: white;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.headline-main::after {
		content: '\A';
		white-space: pre;
	}

	.headline-sub {
		display: block;
	}

	.subtext {
		font-size: 1.25rem;
		opacity: 0.9;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.cta-primary {
		background: white;
		color: #D300C5;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.cta-secondary {
		background: transparent;
		color: white;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		cursor: pointer;
		transition: border-color 0.2s, background 0.2s;
	}

	.cta-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	.trust-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.stars {
		color: #FFD600;
	}

	.image-content {
		position: relative;
	}

	.image-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 120%;
		height: 120%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
		pointer-events: none;
	}

	.hero-image {
		width: 140%;
		max-width: none;
		height: auto;
		position: relative;
		z-index: 1;
		margin-left: -20%;
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	}

	/* Mobile: V5-style centered layout */
	@media (max-width: 768px) {
		.hero-section {
			justify-content: center;
			padding-top: 5rem;
		}

		.animated-bg {
			display: block;
			position: absolute;
			inset: 0;
			overflow: hidden;
		}

		.orb {
			position: absolute;
			border-radius: 50%;
			filter: blur(80px);
			opacity: 0.5;
			animation: float 8s ease-in-out infinite;
		}

		.orb-1 {
			width: 300px;
			height: 300px;
			background: #FFD600;
			top: -80px;
			right: -80px;
			animation-delay: 0s;
		}

		.orb-2 {
			width: 200px;
			height: 200px;
			background: #7638FA;
			bottom: -40px;
			left: -40px;
			animation-delay: -3s;
		}

		.orb-3 {
			width: 180px;
			height: 180px;
			background: #FF0069;
			top: 50%;
			left: 50%;
			animation-delay: -5s;
		}

		@keyframes float {
			0%, 100% { transform: translate(0, 0) scale(1); }
			50% { transform: translate(20px, -20px) scale(1.1); }
		}

		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
			max-width: 500px;
		}

		.headline {
			font-size: 2.75rem;
			font-weight: 800;
			text-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		}

		.headline-main {
			display: block;
			margin-bottom: 0.25rem;
		}

		.headline-sub {
			font-size: 1.5rem;
			font-weight: 300;
			opacity: 0.9;
		}

		.subtext {
			font-size: 1.1rem;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}

		.cta-group {
			flex-direction: column;
			align-items: center;
		}

		.cta-primary,
		.cta-secondary {
			width: 100%;
			max-width: 280px;
		}

		.trust-badge {
			justify-content: center;
		}

		.image-content {
			display: none;
		}

		.wave-divider {
			height: 100px;
		}
	}

	/* Psychic Advisors Section */
	.advisors-section {
		background: #ffffff;
		padding: 3rem 0 6rem;
		position: relative;
		overflow: hidden;
		margin-top: -2px;
	}

	.advisors-container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
		border: none;
	}

	.section-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: #64748b;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.advisor-card {
		position: relative;
		border-radius: 24px;
		transition: transform 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-8px);
	}

	.card-glow {
		position: absolute;
		inset: -1px;
		background: linear-gradient(135deg, rgba(211, 0, 197, 0.15) 0%, rgba(118, 56, 250, 0.1) 50%, rgba(255, 122, 0, 0.15) 100%);
		border-radius: 24px;
		z-index: 0;
	}

	.card-inner {
		position: relative;
		background: white;
		border-radius: 23px;
		padding: 1.5rem;
		z-index: 1;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-layout {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.avatar-section {
		flex-shrink: 0;
	}

	.avatar-container {
		position: relative;
		width: 120px;
		height: 120px;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid white;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.online-dot {
		position: absolute;
		bottom: 8px;
		right: 8px;
		width: 18px;
		height: 18px;
		background: #22c55e;
		border-radius: 50%;
		border: 3px solid white;
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
	}

	.info-section {
		flex: 1;
		min-width: 0;
	}

	.name-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.25rem;
	}

	.advisor-name {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.price-badge {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: #D300C5;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.advisor-bio {
		font-size: 0.85rem;
		color: #64748b;
		line-height: 1.4;
		margin-bottom: 0.75rem;
	}

	.stats-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.stat-value {
		color: #1a1a2e;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.stat-divider {
		color: #cbd5e1;
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
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.connect-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(211, 0, 197, 0.3);
	}

	.section-footer {
		text-align: center;
		margin-top: 3rem;
	}

	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		color: #D300C5;
		border: 2px solid #D300C5;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s, color 0.2s, transform 0.2s;
	}

	.view-all-btn:hover {
		background: #D300C5;
		color: white;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.advisors-grid {
			grid-template-columns: 1fr;
			max-width: 450px;
			margin: 0 auto;
		}
	}

	@media (max-width: 500px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.card-layout {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.avatar-container {
			width: 210px;
			height: 210px;
		}

		.name-row {
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}

		.stats-row {
			justify-content: center;
		}
	}

	/* How It Works Section */
	.how-it-works {
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		padding: 6rem 0;
		color: white;
	}

	.hiw-container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		align-items: center;
		gap: 3rem;
	}

	.hiw-image-col {
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.hiw-image-col img {
		width: 100%;
		height: auto;
		object-fit: contain;
		filter: drop-shadow(0 20px 60px rgba(118, 56, 250, 0.3));
	}

	.hiw-content-col {
		padding: 2rem 0;
	}

	.hiw-title {
		font-size: 2.75rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hiw-subtitle {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 2.5rem;
		max-width: 450px;
	}

	.hiw-steps {
		display: flex;
		flex-direction: column;
		margin-bottom: 2.5rem;
	}

	.hiw-step {
		display: flex;
		gap: 1.5rem;
	}

	.hiw-step-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.35rem;
	}

	.hiw-dot {
		width: 14px;
		height: 14px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		flex-shrink: 0;
		box-shadow: 0 0 16px rgba(211, 0, 197, 0.6);
	}

	.hiw-line {
		width: 2px;
		flex: 1;
		background: linear-gradient(180deg, rgba(118, 56, 250, 0.6) 0%, rgba(118, 56, 250, 0.2) 100%);
		margin: 0.5rem 0;
		min-height: 50px;
	}

	.hiw-step-content {
		padding-bottom: 1.5rem;
	}

	.hiw-step-content h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.hiw-step-content p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.hiw-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.hiw-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 40px rgba(211, 0, 197, 0.4);
	}

	@media (max-width: 1024px) {
		.hiw-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hiw-image-col {
			order: -1;
		}

		.hiw-image-col img {
			width: 100%;
		}

		.hiw-title {
			font-size: 2.25rem;
		}
	}

	@media (max-width: 600px) {
		.how-it-works {
			padding: 4rem 1.5rem;
		}

		.hiw-title {
			font-size: 2rem;
		}

		.hiw-image-col img {
			max-width: 100%;
			width: 100%;
		}
	}

	/* Why Choose Clairvora Section */
	.why-choose {
		padding: 6rem 0;
		background: #FFF9F0;
	}

	.why-choose-container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.why-choose-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.why-choose-content {
		padding-right: 2rem;
	}

	.why-choose-eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
	}

	.why-choose-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1.25rem;
		line-height: 1.2;
	}

	.why-choose-intro {
		font-size: 1.05rem;
		color: #555;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.why-choose-highlights {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem 1rem;
		margin-bottom: 2.5rem;
	}

	.why-choose-highlight {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.why-choose-highlight-icon {
		color: #D96C4B;
		display: flex;
		align-items: center;
	}

	.why-choose-highlight-text {
		font-size: 0.9rem;
		color: #444;
		font-weight: 500;
	}

	.why-choose-features {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.why-choose-feature {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.why-choose-feature-icon {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, rgba(217, 108, 75, 0.1) 0%, rgba(217, 108, 75, 0.15) 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D96C4B;
		flex-shrink: 0;
	}

	.why-choose-feature-content h3 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.375rem;
	}

	.why-choose-feature-content p {
		font-size: 0.925rem;
		color: #666;
		line-height: 1.6;
	}

	.why-choose-image {
		position: relative;
	}

	.why-choose-image-wrapper {
		position: relative;
	}

	.why-choose-image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.why-choose-grid {
			gap: 3rem;
		}

		.why-choose-title {
			font-size: 2.25rem;
		}

		.why-choose-highlights {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.why-choose-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.why-choose-content {
			padding-right: 0;
			order: 2;
		}

		.why-choose-image {
			order: 1;
		}

		.why-choose-title {
			font-size: 2rem;
		}

		.why-choose-highlights {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 3rem 1rem;
		}

		.why-choose-title {
			font-size: 1.75rem;
		}

		.why-choose-intro {
			font-size: 1rem;
		}

		.why-choose-highlights {
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}

		.why-choose-highlight-text {
			font-size: 0.85rem;
		}

		.why-choose-feature-icon {
			width: 40px;
			height: 40px;
		}
	}

	/* Find Your Advisor Section */
	.find-advisor {
		padding: 6rem 0;
		position: relative;
		overflow: hidden;
	}

	.find-advisor-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #C800BA 0%, #D300C5 40%, #E5007A 100%);
	}

	.find-advisor-container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.find-advisor-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.find-advisor-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1.25rem;
	}

	.find-advisor-title {
		font-size: 3.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.find-advisor-description {
		font-size: 1.15rem;
		color: rgba(255, 255, 255, 0.9);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.find-advisor-avatars {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		margin-bottom: 3rem;
	}

	/* Desktop/mobile layout toggle */
	.find-advisor-desktop {
		display: flex;
	}

	.find-advisor-mobile {
		display: none;
	}

	.find-advisor-row {
		display: flex;
		justify-content: center;
	}

	.find-advisor-top-row {
		margin-bottom: -30px;
		z-index: 1;
	}

	.find-advisor-bottom-row {
		z-index: 0;
	}

	.find-advisor-avatar-wrapper {
		margin: 0 -10px;
		animation: findAdvisorFloat 3s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes findAdvisorFloat {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}

	.find-advisor-avatar-border {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		padding: 4px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s, box-shadow 0.3s;
		cursor: pointer;
	}

	.find-advisor-avatar-border:hover {
		transform: scale(1.15) translateY(-8px);
		box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
		z-index: 10;
		position: relative;
	}

	.find-advisor-avatar-border img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.find-advisor-stats {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		margin-bottom: 2.5rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		padding: 1.5rem 3rem;
		border-radius: 20px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.find-advisor-stat {
		text-align: center;
		color: white;
	}

	.find-advisor-stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.find-advisor-stat-label {
		font-size: 0.85rem;
		opacity: 0.85;
	}

	.find-advisor-stat-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 255, 255, 0.3);
	}

	.find-advisor-cta {
		text-align: center;
	}

	.find-advisor-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: white;
		color: #D300C5;
		padding: 1.125rem 2.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
		margin-bottom: 0.75rem;
	}

	.find-advisor-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
	}

	.find-advisor-subtext {
		display: block;
		color: rgba(255, 255, 255, 0.75);
		font-size: 0.9rem;
	}

	@media (max-width: 900px) {
		.find-advisor-avatar-border {
			width: 96px;
			height: 96px;
		}

		.find-advisor-top-row {
			margin-bottom: -24px;
		}

		.find-advisor-stats {
			gap: 1.5rem;
			padding: 1.25rem 2rem;
		}

		.find-advisor-stat-value {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 600px) {
		.find-advisor {
			padding: 4rem 1.5rem;
		}

		.find-advisor-title {
			font-size: 2.5rem;
		}

		/* Switch to mobile layout */
		.find-advisor-desktop {
			display: none;
		}

		.find-advisor-mobile {
			display: flex;
		}

		/* Mobile 3-row overlapping layout */
		.find-advisor-avatar-wrapper {
			margin: 0 -8px;
		}

		.find-advisor-mobile-row1 {
			margin-bottom: -15px;
			z-index: 2;
		}

		.find-advisor-mobile-row2 {
			margin-bottom: -15px;
			z-index: 1;
		}

		.find-advisor-mobile-row3 {
			z-index: 0;
		}

		.find-advisor-avatar-border {
			width: 82px;
			height: 82px;
		}

		.find-advisor-stats {
			flex-direction: column;
			gap: 1rem;
			padding: 1.5rem;
		}

		.find-advisor-stat-divider {
			width: 60px;
			height: 1px;
		}
	}

	/* Satisfaction Guarantee Section */
	.guarantee {
		padding: 6rem 0;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
		position: relative;
	}

	.guarantee-container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.guarantee-content {
		text-align: center;
	}

	.guarantee-eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1.5rem;
	}

	.guarantee-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.guarantee-description {
		font-size: 1.125rem;
		color: #64748b;
		max-width: 650px;
		margin: 0 auto 3rem;
		line-height: 1.7;
	}

	.guarantee-features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.guarantee-feature {
		background: white;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.guarantee-feature:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.feature-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
		color: white;
	}

	.feature-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature-desc {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	.trust-row {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #7638FA;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.guarantee {
			padding: 4rem 1.5rem;
		}

		.guarantee-title {
			font-size: 2rem;
		}

		.guarantee-features {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.guarantee-feature {
			padding: 1.5rem;
		}

		.trust-row {
			flex-wrap: wrap;
			gap: 1.5rem;
		}
	}
</style>
