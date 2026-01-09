<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ChatCircleDots, UserCirclePlus, Sparkle, ShieldCheck, Star, ArrowRight, Phone, ChatCircle, EnvelopeSimple, CheckCircle, CaretRight, Play, CreditCard, Lock, Headset } from 'phosphor-svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	let scrolled = $state(false);
	let activeStep = $state(0);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const steps = [
		{
			num: '1',
			title: 'Explore Our Advisors',
			shortTitle: 'Explore',
			description: 'Browse our carefully curated network of gifted psychic advisors. Each profile showcases their unique abilities, specialties, experience, and authentic client reviews.',
			details: [
				'Filter by specialty (love, career, spiritual)',
				'Read verified client reviews and ratings',
				'View availability and pricing',
				'Save favorites to your account'
			],
			icon: MagnifyingGlass,
			image: '/woman-phone-chair-3.png'
		},
		{
			num: '2',
			title: 'Choose Your Style',
			shortTitle: 'Choose',
			description: 'Select the reading method that works best for your situation. Whether you prefer the intimacy of voice or the convenience of text, we\'ve got you covered.',
			details: [
				'Phone: Voice-to-voice for deep connection',
				'Chat: Real-time text for quick guidance',
				'Text: Thoughtful written exchanges',
				'All methods available 24/7'
			],
			icon: ChatCircleDots,
			image: '/hero-couple.png'
		},
		{
			num: '3',
			title: 'Create Account',
			shortTitle: 'Sign Up',
			description: 'Join Clairvora in seconds. Your account gives you access to secure payments, reading history, favorite advisors, and personalized recommendations.',
			details: [
				'Quick email registration',
				'Secure wallet for funds',
				'Save your favorite advisors',
				'Access your reading history anytime'
			],
			icon: UserCirclePlus,
			image: '/woman-happy.jpg'
		},
		{
			num: '4',
			title: 'Get Your Reading',
			shortTitle: 'Connect',
			description: 'Connect with your chosen advisor and receive personalized guidance. Our psychics use their intuitive gifts to help you find clarity on love, career, and life.',
			details: [
				'Connect instantly when advisors are available',
				'Receive personalized insights',
				'Ask follow-up questions',
				'Leave reviews to help others'
			],
			icon: Sparkle,
			image: '/woman-phone-chair-3.png'
		}
	];

	const readingTypes = [
		{
			icon: Phone,
			title: 'Phone Readings',
			description: 'Real-time voice conversations',
			features: ['Personal connection', 'Immediate answers', 'Emotional nuance']
		},
		{
			icon: ChatCircle,
			title: 'Live Chat',
			description: 'Instant text-based sessions',
			features: ['Type at your pace', 'Save transcripts', 'Discreet & private']
		},
		{
			icon: EnvelopeSimple,
			title: 'Text Readings',
			description: 'Thoughtful written exchanges',
			features: ['Detailed responses', 'Take your time', 'Keep forever']
		}
	];

	function nextStep() {
		activeStep = (activeStep + 1) % steps.length;
	}

	function prevStep() {
		activeStep = (activeStep - 1 + steps.length) % steps.length;
	}
</script>

<svelte:head>
	<title>How It Works - Clairvora</title>
</svelte:head>

<header class="header" class:scrolled>
	<div class="header-content">
		<a href="/" class="logo">Clairvora</a>
		<nav class="nav">
			<a href="/psychics" class="nav-link">Psychics</a>
			<a href="/how-it-works" class="nav-link active">How It Works</a>
			<a href="/about" class="nav-link">About</a>
		</nav>
		<div class="header-actions">
			<SignedOut>
				<a href="/login" class="login-link">Sign In</a>
				<a href="/signup" class="cta-button">Get Started</a>
			</SignedOut>
			<SignedIn>
				<a href="/account/client" class="login-link">Account</a>
			</SignedIn>
		</div>
	</div>
</header>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<span class="eyebrow">Simple Process</span>
		<h1>Your Journey to Clarity Starts Here</h1>
		<p class="hero-subtitle">Getting guidance from a trusted psychic advisor is easier than you think. Click through the steps below to see how it works.</p>
	</div>
</section>

<!-- Interactive Steps Section -->
<section class="steps-section">
	<div class="container">
		<!-- Tab Navigation -->
		<div class="step-tabs">
			{#each steps as step, i}
				<button
					class="step-tab"
					class:active={activeStep === i}
					onclick={() => activeStep = i}
				>
					<span class="tab-num">{step.num}</span>
					<span class="tab-title">{step.shortTitle}</span>
				</button>
				{#if i < steps.length - 1}
					<div class="tab-connector">
						<CaretRight size={16} weight="bold" />
					</div>
				{/if}
			{/each}
		</div>

		<!-- Step Content -->
		<div class="step-content-wrapper">
			<div class="step-display">
				<div class="step-image">
					<img src={steps[activeStep].image} alt={steps[activeStep].title} />
					<div class="step-number-overlay">{steps[activeStep].num}</div>
				</div>
				<div class="step-info">
					<div class="step-icon">
						<svelte:component this={steps[activeStep].icon} size={32} weight="fill" />
					</div>
					<h2>{steps[activeStep].title}</h2>
					<p class="step-description">{steps[activeStep].description}</p>
					<ul class="step-details">
						{#each steps[activeStep].details as detail}
							<li>
								<CheckCircle size={18} weight="fill" />
								<span>{detail}</span>
							</li>
						{/each}
					</ul>

					<!-- Navigation Buttons -->
					<div class="step-nav">
						<button class="nav-btn prev" onclick={prevStep} disabled={activeStep === 0}>
							Previous
						</button>
						{#if activeStep === steps.length - 1}
							<a href="/signup" class="nav-btn primary">
								Get Started
								<ArrowRight size={18} weight="bold" />
							</a>
						{:else}
							<button class="nav-btn next" onclick={nextStep}>
								Next Step
								<ArrowRight size={18} weight="bold" />
							</button>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Progress Dots -->
		<div class="progress-dots">
			{#each steps as _, i}
				<button
					class="dot"
					class:active={activeStep === i}
					onclick={() => activeStep = i}
					aria-label="Go to step {i + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<!-- Reading Types Grid -->
<section class="types-section">
	<div class="container">
		<div class="section-header">
			<h2>Three Ways to Connect</h2>
			<p>Choose the reading style that fits your life</p>
		</div>

		<div class="types-grid">
			{#each readingTypes as type}
				<div class="type-card">
					<div class="type-icon">
						<svelte:component this={type.icon} size={32} weight="fill" />
					</div>
					<h3>{type.title}</h3>
					<p>{type.description}</p>
					<div class="type-features">
						{#each type.features as feature}
							<span class="feature-tag">{feature}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<p class="availability">All reading types available <strong>24/7, 365 days a year</strong></p>
	</div>
</section>

<!-- Trust Badges Section -->
<section class="trust-section">
	<div class="container">
		<div class="trust-grid">
			<div class="trust-card main">
				<ShieldCheck size={48} weight="fill" />
				<h3>100% Satisfaction Guarantee</h3>
				<p>Not happy? We'll refund your purchase or match you with a new advisor. No questions asked.</p>
			</div>
			<div class="trust-card">
				<CreditCard size={32} weight="fill" />
				<h3>Secure Payments</h3>
				<p>Bank-level 256-bit SSL encryption</p>
			</div>
			<div class="trust-card">
				<Lock size={32} weight="fill" />
				<h3>Private & Confidential</h3>
				<p>Your readings stay completely private</p>
			</div>
			<div class="trust-card">
				<Headset size={32} weight="fill" />
				<h3>24/7 Support</h3>
				<p>Always here when you need help</p>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<span class="offer-badge">New Customer Offer</span>
			<h2>Ready to Begin?</h2>
			<p>Get <strong>$20 + $80 bonus = $100</strong> in reading credit when you sign up today.</p>
			<a href="/signup" class="btn-primary">
				Create Your Free Account
				<ArrowRight size={20} weight="bold" />
			</a>
			<span class="trust-line">
				<CheckCircle size={16} weight="fill" />
				Join 50,000+ satisfied clients
			</span>
		</div>
	</div>
</section>

<style>
	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1.25rem 2rem;
		transition: background 0.3s, box-shadow 0.3s;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
	}

	.nav {
		display: flex;
		gap: 2.5rem;
	}

	.nav-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
	}

	.nav-link:hover, .nav-link.active {
		color: white;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.login-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
	}

	.cta-button {
		background: white;
		color: #D300C5;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.header.scrolled {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(12px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
	}

	.header.scrolled .logo,
	.header.scrolled .login-link {
		color: #1a1a2e;
	}

	.header.scrolled .nav-link {
		color: #64748b;
	}

	.header.scrolled .nav-link:hover,
	.header.scrolled .nav-link.active {
		color: #1a1a2e;
	}

	.header.scrolled .cta-button {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	/* Hero */
	.hero {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 9rem 2rem 5rem;
		text-align: center;
		color: white;
	}

	.hero-content {
		max-width: 700px;
		margin: 0 auto;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.25rem;
	}

	.hero h1 {
		font-size: 2.75rem;
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.hero-subtitle {
		font-size: 1.15rem;
		opacity: 0.9;
		line-height: 1.7;
	}

	/* Steps Section */
	.steps-section {
		padding: 4rem 2rem 5rem;
		background: white;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	/* Tab Navigation */
	.step-tabs {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 3rem;
	}

	.step-tab {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: #f8fafc;
		border: 2px solid #e2e8f0;
		border-radius: 50px;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		transition: all 0.3s;
	}

	.step-tab:hover {
		border-color: #D300C5;
	}

	.step-tab.active {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-color: transparent;
		color: white;
	}

	.tab-num {
		width: 24px;
		height: 24px;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.step-tab.active .tab-num {
		background: rgba(255, 255, 255, 0.25);
	}

	.tab-title {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.tab-connector {
		color: #cbd5e1;
	}

	/* Step Content */
	.step-content-wrapper {
		margin-bottom: 2rem;
	}

	.step-display {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		background: #f8fafc;
		border-radius: 24px;
		overflow: hidden;
	}

	.step-image {
		position: relative;
		height: 450px;
	}

	.step-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.step-number-overlay {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.75rem;
		font-weight: 800;
		box-shadow: 0 8px 24px rgba(118, 56, 250, 0.4);
	}

	.step-info {
		padding: 3rem;
	}

	.step-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #7638FA;
		margin-bottom: 1.25rem;
	}

	.step-info h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.step-description {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.step-details {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	.step-details li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
		color: #1a1a2e;
		padding: 0.5rem 0;
	}

	.step-details li :global(svg) {
		color: #22c55e;
		flex-shrink: 0;
	}

	/* Navigation Buttons */
	.step-nav {
		display: flex;
		gap: 1rem;
	}

	.nav-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s;
		text-decoration: none;
	}

	.nav-btn.prev {
		background: white;
		border: 2px solid #e2e8f0;
		color: #64748b;
	}

	.nav-btn.prev:hover:not(:disabled) {
		border-color: #D300C5;
		color: #D300C5;
	}

	.nav-btn.prev:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.nav-btn.next,
	.nav-btn.primary {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border: none;
		color: white;
	}

	.nav-btn.next:hover,
	.nav-btn.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(118, 56, 250, 0.35);
	}

	/* Progress Dots */
	.progress-dots {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #e2e8f0;
		border: none;
		cursor: pointer;
		transition: all 0.3s;
	}

	.dot.active {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		width: 32px;
		border-radius: 5px;
	}

	.dot:hover:not(.active) {
		background: #cbd5e1;
	}

	/* Types Section */
	.types-section {
		padding: 5rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		color: white;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.section-header p {
		font-size: 1.1rem;
		opacity: 0.8;
	}

	.types-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.type-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		transition: transform 0.3s, background 0.3s;
	}

	.type-card:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.1);
	}

	.type-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.type-card h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.type-card > p {
		font-size: 0.95rem;
		opacity: 0.8;
		margin-bottom: 1.25rem;
	}

	.type-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.feature-tag {
		background: rgba(255, 255, 255, 0.1);
		padding: 0.375rem 0.75rem;
		border-radius: 50px;
		font-size: 0.8rem;
	}

	.availability {
		text-align: center;
		font-size: 0.95rem;
		opacity: 0.8;
	}

	.availability strong {
		opacity: 1;
	}

	/* Trust Section */
	.trust-section {
		padding: 5rem 2rem;
		background: #f8fafc;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	.trust-card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		text-align: center;
	}

	.trust-card :global(svg) {
		color: #7638FA;
		margin-bottom: 1rem;
	}

	.trust-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.trust-card p {
		font-size: 0.875rem;
		color: #64748b;
		line-height: 1.5;
	}

	.trust-card.main {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.05) 0%, rgba(211, 0, 197, 0.05) 100%);
		border: 1px solid rgba(118, 56, 250, 0.15);
		grid-row: span 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2.5rem;
	}

	.trust-card.main h3 {
		font-size: 1.25rem;
	}

	.trust-card.main p {
		font-size: 1rem;
	}

	/* CTA Section */
	.cta-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
	}

	.cta-content {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.offer-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.cta-content > p {
		font-size: 1.2rem;
		opacity: 0.95;
		margin-bottom: 2rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: white;
		color: #D300C5;
		padding: 1.125rem 2.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.trust-line {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.trust-grid {
			grid-template-columns: 1fr 1fr;
		}

		.trust-card.main {
			grid-column: span 2;
			grid-row: auto;
		}
	}

	@media (max-width: 900px) {
		.step-tabs {
			flex-wrap: wrap;
		}

		.tab-connector {
			display: none;
		}

		.step-display {
			grid-template-columns: 1fr;
		}

		.step-image {
			height: 280px;
		}

		.step-info {
			padding: 2rem;
		}

		.types-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (max-width: 768px) {
		.nav,
		.login-link {
			display: none;
		}

		.hero h1 {
			font-size: 2rem;
		}

		.step-tabs {
			gap: 0.5rem;
		}

		.step-tab {
			padding: 0.5rem 1rem;
		}

		.tab-title {
			display: none;
		}

		.section-header h2,
		.cta-content h2 {
			font-size: 1.875rem;
		}

		.trust-grid {
			grid-template-columns: 1fr;
		}

		.trust-card.main {
			grid-column: auto;
		}
	}
</style>
