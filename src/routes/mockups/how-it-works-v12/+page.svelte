<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ChatCircleDots, UserCirclePlus, Sparkle, ShieldCheck, Star, CreditCard, Phone, ChatCircle, EnvelopeSimple, ArrowRight, CheckCircle } from 'phosphor-svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const steps = [
		{
			num: '01',
			title: 'Create Your Account',
			description: 'Sign up in seconds with just your email. Your account gives you access to our entire network of gifted advisors, secure messaging, and your personal reading history.',
			icon: UserCirclePlus,
			highlights: ['Quick email signup', 'Secure account', 'Save favorites']
		},
		{
			num: '02',
			title: 'Browse Our Advisors',
			description: 'Explore detailed profiles of our handpicked psychics. Read reviews, check specialties, and find the perfect advisor who resonates with your needs.',
			icon: MagnifyingGlass,
			highlights: ['Detailed profiles', 'Real reviews', 'Filter by specialty']
		},
		{
			num: '03',
			title: 'Choose Your Connection',
			description: 'Select how you\'d like to connect — phone calls for in-depth readings, live chat for quick guidance, or text messages for thoughtful exchanges.',
			icon: ChatCircleDots,
			highlights: ['Phone readings', 'Live chat', 'Text messages']
		},
		{
			num: '04',
			title: 'Receive Your Guidance',
			description: 'Connect with your chosen advisor and receive personalized insights. Our psychics use their unique gifts to help you find clarity on love, career, and life\'s biggest questions.',
			icon: Sparkle,
			highlights: ['Personalized insights', 'Expert guidance', 'Life clarity']
		}
	];

	const connectionTypes = [
		{ icon: Phone, label: 'Phone', desc: 'Voice readings' },
		{ icon: ChatCircle, label: 'Chat', desc: 'Live text sessions' },
		{ icon: EnvelopeSimple, label: 'Text', desc: 'Email readings' }
	];
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
		<span class="eyebrow">Simple & Secure</span>
		<h1>Your Path to Clarity</h1>
		<p class="hero-subtitle">Connect with trusted psychic advisors in just a few simple steps. Whether you're seeking guidance on love, career, or life's biggest questions — we make it easy.</p>
		<div class="hero-cta">
			<a href="/signup" class="btn-primary">
				Get Started Free
				<ArrowRight size={20} weight="bold" />
			</a>
			<a href="/psychics" class="btn-secondary">Browse Advisors</a>
		</div>
	</div>
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</section>

<!-- Timeline Steps Section -->
<section class="steps-section">
	<div class="container">
		<div class="section-header">
			<h2>How It Works</h2>
			<p>Four simple steps to get the guidance you need</p>
		</div>

		<div class="timeline">
			<!-- Vertical line down the center -->
			<div class="timeline-line"></div>

			{#each steps as step, i}
				<div class="step">
					<!-- Left column -->
					<div class="step-left" class:has-content={i % 2 === 0}>
						{#if i % 2 === 0}
							<div class="step-content align-right">
								<span class="step-num">{step.num}</span>
								<h3>{step.title}</h3>
								<p>{step.description}</p>
								<ul class="step-highlights align-right">
									{#each step.highlights as highlight}
										<li>
											<CheckCircle size={18} weight="fill" />
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>

					<!-- Center icon -->
					<div class="step-center">
						<div class="step-icon-wrapper">
							<svelte:component this={step.icon} size={48} weight="fill" />
						</div>
					</div>

					<!-- Right column -->
					<div class="step-right" class:has-content={i % 2 === 1}>
						{#if i % 2 === 1}
							<div class="step-content align-left">
								<span class="step-num">{step.num}</span>
								<h3>{step.title}</h3>
								<p>{step.description}</p>
								<ul class="step-highlights align-left">
									{#each step.highlights as highlight}
										<li>
											<CheckCircle size={18} weight="fill" />
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Connection Types Section -->
<section class="connection-section">
	<div class="container">
		<div class="section-header light">
			<h2>Multiple Ways to Connect</h2>
			<p>Choose the reading style that fits your life</p>
		</div>

		<div class="connection-grid">
			{#each connectionTypes as type}
				<div class="connection-card">
					<div class="connection-icon">
						<svelte:component this={type.icon} size={36} weight="fill" />
					</div>
					<h3>{type.label}</h3>
					<p>{type.desc}</p>
				</div>
			{/each}
		</div>

		<p class="availability-note">Available 24/7, 365 days a year</p>
	</div>
</section>

<!-- Trust Section -->
<section class="trust-section">
	<div class="container">
		<div class="section-header">
			<h2>Why Trust Clairvora?</h2>
			<p>Your satisfaction and security are our top priorities</p>
		</div>

		<div class="trust-grid">
			<div class="trust-card">
				<div class="trust-icon">
					<ShieldCheck size={32} weight="fill" />
				</div>
				<h3>100% Satisfaction Guarantee</h3>
				<p>Not satisfied with your reading? We'll refund your purchase or match you with a new advisor — no questions asked.</p>
			</div>
			<div class="trust-card">
				<div class="trust-icon">
					<Star size={32} weight="fill" />
				</div>
				<h3>Handpicked Advisors</h3>
				<p>Every psychic in our network passes a rigorous screening process to ensure authentic, high-quality readings.</p>
			</div>
			<div class="trust-card">
				<div class="trust-icon">
					<CreditCard size={32} weight="fill" />
				</div>
				<h3>Secure Payments</h3>
				<p>Bank-level 256-bit encryption protects all transactions. Your financial information is always safe.</p>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA Section -->
<section class="cta-section">
	<div class="container">
		<h2>Ready to Begin Your Journey?</h2>
		<p>Join thousands who have found clarity and guidance through Clairvora</p>
		<div class="cta-buttons">
			<a href="/signup" class="btn-primary-white">
				Create Free Account
				<ArrowRight size={20} weight="bold" />
			</a>
		</div>
		<div class="new-customer-offer">
			<span class="offer-badge">New Customer Offer</span>
			<span class="offer-text">Get $20 + $80 bonus = $100 in reading credit</span>
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
		letter-spacing: -0.02em;
		transition: color 0.3s;
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
		transition: color 0.3s;
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
		transition: color 0.3s;
	}

	.cta-button {
		background: white;
		color: #D300C5;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: transform 0.2s, box-shadow 0.2s, background 0.3s, color 0.3s;
	}

	.header.scrolled {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(12px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
	}

	.header.scrolled .logo {
		color: #1a1a2e;
	}

	.header.scrolled .nav-link {
		color: #64748b;
	}

	.header.scrolled .nav-link:hover,
	.header.scrolled .nav-link.active {
		color: #1a1a2e;
	}

	.header.scrolled .login-link {
		color: #64748b;
	}

	.header.scrolled .cta-button {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 10rem 2rem 12rem;
		text-align: center;
		position: relative;
		color: white;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.15;
		margin-bottom: 1.25rem;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		opacity: 0.9;
		line-height: 1.7;
		margin-bottom: 2.5rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-cta {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: white;
		color: #D300C5;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.05rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.05rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		transition: border-color 0.2s, background 0.2s;
	}

	.btn-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	.wave-divider {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 150px;
	}

	/* Steps Section */
	.steps-section {
		padding: 6rem 2rem;
		background: white;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.section-header p {
		font-size: 1.125rem;
		color: #64748b;
	}

	.section-header.light h2,
	.section-header.light p {
		color: white;
	}

	.section-header.light p {
		opacity: 0.9;
	}

	.timeline {
		position: relative;
	}

	/* Vertical line running through center */
	.timeline-line {
		position: absolute;
		left: 50%;
		top: 50px;
		bottom: 50px;
		width: 2px;
		background: linear-gradient(180deg, rgba(118, 56, 250, 0.4) 0%, rgba(211, 0, 197, 0.3) 50%, rgba(118, 56, 250, 0.4) 100%);
		transform: translateX(-50%);
		z-index: 1;
	}

	.step {
		display: grid;
		grid-template-columns: 1fr 120px 1fr;
		gap: 2rem;
		align-items: center;
		margin-bottom: 4rem;
		position: relative;
	}

	.step:last-child {
		margin-bottom: 0;
	}

	.step-left,
	.step-right {
		min-height: 1px;
	}

	.step-center {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.step-content {
		padding: 0 1rem;
	}

	.step-content.align-right {
		text-align: right;
	}

	.step-content.align-left {
		text-align: left;
	}

	.step-num {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 700;
		color: #D300C5;
		margin-bottom: 0.5rem;
		letter-spacing: 0.05em;
	}

	.step-content h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.step-content p {
		font-size: 1rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.step-highlights {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.step-highlights.align-right {
		justify-content: flex-end;
	}

	.step-highlights.align-left {
		justify-content: flex-start;
	}

	.step-highlights li {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.875rem;
		color: #7638FA;
		font-weight: 500;
	}

	.step-icon-wrapper {
		width: 100px;
		height: 100px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		box-shadow: 0 8px 32px rgba(118, 56, 250, 0.3);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.step:hover .step-icon-wrapper {
		transform: scale(1.1);
		box-shadow: 0 12px 40px rgba(118, 56, 250, 0.4);
	}

	/* Connection Section */
	.connection-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
	}

	.connection-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.connection-card {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		transition: transform 0.3s, background 0.3s;
	}

	.connection-card:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.12);
	}

	.connection-icon {
		width: 72px;
		height: 72px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
		color: white;
	}

	.connection-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.5rem;
	}

	.connection-card p {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.availability-note {
		text-align: center;
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.95rem;
	}

	/* Trust Section */
	.trust-section {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.trust-card {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.08);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.trust-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.trust-icon {
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

	.trust-card h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.trust-card p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
	}

	/* CTA Section */
	.cta-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		text-align: center;
		color: white;
	}

	.cta-section h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.cta-section > .container > p {
		font-size: 1.125rem;
		opacity: 0.9;
		margin-bottom: 2rem;
	}

	.cta-buttons {
		margin-bottom: 2rem;
	}

	.btn-primary-white {
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

	.btn-primary-white:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.new-customer-offer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.offer-badge {
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.offer-text {
		font-size: 1rem;
		opacity: 0.9;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.timeline-line {
			display: none;
		}

		.step {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			text-align: center;
		}

		.step-left,
		.step-right {
			display: none;
		}

		.step-left.has-content,
		.step-right.has-content {
			display: block;
		}

		.step-content.align-right,
		.step-content.align-left {
			text-align: center;
		}

		.step-highlights.align-right,
		.step-highlights.align-left {
			justify-content: center;
		}

		.step-center {
			order: -1;
		}

		.connection-grid,
		.trust-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (max-width: 768px) {
		.nav {
			display: none;
		}

		.login-link {
			display: none;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.1rem;
		}

		.hero-cta {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 280px;
			justify-content: center;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		.cta-section h2 {
			font-size: 2rem;
		}
	}
</style>
