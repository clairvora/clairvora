<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ChatCircleDots, UserCirclePlus, Sparkle, ShieldCheck, Star, ArrowRight, Phone, ChatCircle, EnvelopeSimple, Lightning, Heart, Clock, Users } from 'phosphor-svelte';
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
			title: 'Browse Our Gifted Advisors',
			description: 'Explore detailed profiles of our handpicked psychic advisors. Each profile includes their unique gifts, specialties, years of experience, and authentic reviews from real clients. Use our intuitive filters to find advisors who specialize in love, career, spiritual growth, or any area where you need guidance.',
			icon: MagnifyingGlass,
			color: '#7638FA'
		},
		{
			num: '02',
			title: 'Select Your Reading Style',
			description: 'Choose how you\'d like to receive your guidance. Phone readings offer the warmth of a live conversation. Live chat provides real-time text interaction for those who prefer typing. Text readings allow you to craft thoughtful questions and receive detailed written responses you can revisit anytime.',
			icon: ChatCircleDots,
			color: '#D300C5'
		},
		{
			num: '03',
			title: 'Create Your Free Account',
			description: 'Setting up your Clairvora account takes just moments. Provide your email, create a secure password, and you\'re ready to begin. Your account gives you access to your reading history, favorite advisors, secure wallet, and personalized recommendations.',
			icon: UserCirclePlus,
			color: '#FF0069'
		},
		{
			num: '04',
			title: 'Receive Personalized Guidance',
			description: 'Connect with your chosen advisor and open yourself to insight. Our psychics combine their intuitive gifts with tools like tarot, astrology, and numerology to provide you with clear, actionable guidance. Walk away with clarity on your most pressing questions about love, career, and life.',
			icon: Sparkle,
			color: '#FF7A00'
		}
	];

	const stats = [
		{ value: '500+', label: 'Verified Advisors', icon: Users },
		{ value: '50K+', label: 'Happy Clients', icon: Heart },
		{ value: '24/7', label: 'Always Available', icon: Clock },
		{ value: '4.9★', label: 'Average Rating', icon: Star }
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

<!-- Hero with Stats -->
<section class="hero">
	<div class="hero-content">
		<span class="eyebrow">
			<Lightning size={16} weight="fill" />
			Quick & Easy
		</span>
		<h1>From Question to Clarity in Minutes</h1>
		<p class="hero-subtitle">Connecting with a trusted psychic advisor has never been simpler. Follow these four steps and discover the guidance you've been seeking.</p>

		<div class="stats-bar">
			{#each stats as stat}
				<div class="stat">
					<svelte:component this={stat.icon} size={20} weight="fill" />
					<span class="stat-value">{stat.value}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
	<svg class="wave-divider" viewBox="0 0 1440 100" preserveAspectRatio="none">
		<path d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z" fill="#ffffff"/>
	</svg>
</section>

<!-- Numbered Steps with Big Numbers -->
<section class="steps-section">
	<div class="container">
		{#each steps as step, i}
			<div class="step" class:reverse={i % 2 === 1}>
				<div class="step-number" style="--step-color: {step.color}">
					<span>{step.num}</span>
				</div>
				<div class="step-content">
					<div class="step-icon" style="--step-color: {step.color}">
						<svelte:component this={step.icon} size={28} weight="fill" />
					</div>
					<h2>{step.title}</h2>
					<p>{step.description}</p>
				</div>
			</div>
			{#if i < steps.length - 1}
				<div class="step-connector" class:reverse={i % 2 === 1}>
					<svg viewBox="0 0 100 60" preserveAspectRatio="none">
						<path d={i % 2 === 0 ? "M0,0 Q50,60 100,30" : "M0,30 Q50,0 100,60"} fill="none" stroke="url(#gradient-{i})" stroke-width="2" stroke-dasharray="8 4"/>
						<defs>
							<linearGradient id="gradient-{i}" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" style="stop-color: {step.color}" />
								<stop offset="100%" style="stop-color: {steps[i + 1].color}" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			{/if}
		{/each}
	</div>
</section>

<!-- Connection Types -->
<section class="connection-section">
	<div class="container">
		<div class="section-header">
			<h2>Three Ways to Get Guidance</h2>
			<p>Choose the reading method that fits your lifestyle</p>
		</div>

		<div class="connection-cards">
			<div class="connection-card">
				<div class="card-header">
					<Phone size={32} weight="fill" />
					<h3>Phone Readings</h3>
				</div>
				<p>Experience the warmth and connection of a voice-to-voice reading. Perfect for in-depth sessions where you want immediate dialogue and emotional nuance.</p>
				<ul>
					<li>Real-time conversation</li>
					<li>Deeper emotional connection</li>
					<li>Immediate follow-up questions</li>
				</ul>
			</div>
			<div class="connection-card featured">
				<div class="featured-badge">Most Popular</div>
				<div class="card-header">
					<ChatCircle size={32} weight="fill" />
					<h3>Live Chat</h3>
				</div>
				<p>Get real-time guidance through text when you can't talk. Ideal for quick questions or when you prefer to read and respond at your own pace.</p>
				<ul>
					<li>Type at your own pace</li>
					<li>Save chat transcripts</li>
					<li>Discreet sessions anywhere</li>
				</ul>
			</div>
			<div class="connection-card">
				<div class="card-header">
					<EnvelopeSimple size={32} weight="fill" />
					<h3>Text Readings</h3>
				</div>
				<p>Send detailed questions and receive thoughtful, written responses. Great for complex matters requiring careful consideration and permanent records.</p>
				<ul>
					<li>Take time to articulate thoughts</li>
					<li>Detailed, written responses</li>
					<li>Keep forever for reference</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Trust & Guarantee -->
<section class="trust-section">
	<div class="container">
		<div class="trust-content">
			<div class="trust-badge">
				<ShieldCheck size={64} weight="fill" />
			</div>
			<h2>Your Satisfaction is Guaranteed</h2>
			<p>We stand behind every reading. If you're not completely satisfied, we'll either match you with a new advisor who better fits your needs or provide a full refund. No questions, no hassle — just our commitment to your happiness.</p>
			<div class="trust-features">
				<div class="trust-feature">
					<span class="check">✓</span>
					<span>100% Money-Back Guarantee</span>
				</div>
				<div class="trust-feature">
					<span class="check">✓</span>
					<span>Bank-Level Security</span>
				</div>
				<div class="trust-feature">
					<span class="check">✓</span>
					<span>Complete Privacy Protection</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="cta-section">
	<div class="container">
		<h2>Ready to Discover Your Path?</h2>
		<p>Join thousands who have found clarity, direction, and peace of mind through Clairvora.</p>
		<div class="cta-buttons">
			<a href="/signup" class="btn-primary">
				Start Your Journey
				<ArrowRight size={20} weight="bold" />
			</a>
			<a href="/psychics" class="btn-secondary">Browse Advisors</a>
		</div>
		<div class="new-offer">
			<strong>New Customer Special:</strong> Get $20 + $80 bonus = $100 in reading credit
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
		padding: 10rem 2rem 8rem;
		text-align: center;
		color: white;
		position: relative;
	}

	.hero-content {
		max-width: 900px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		font-size: 3.25rem;
		font-weight: 700;
		line-height: 1.15;
		margin-bottom: 1.25rem;
	}

	.hero-subtitle {
		font-size: 1.2rem;
		opacity: 0.9;
		line-height: 1.7;
		margin-bottom: 3rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.stats-bar {
		display: flex;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.85rem;
		opacity: 0.85;
	}

	.wave-divider {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100px;
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

	.step {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: 3rem;
		align-items: flex-start;
		margin-bottom: 2rem;
	}

	.step.reverse {
		grid-template-columns: 1fr 160px;
	}

	.step.reverse .step-number {
		order: 2;
		text-align: left;
	}

	.step.reverse .step-content {
		text-align: right;
	}

	.step.reverse .step-icon {
		margin-left: auto;
	}

	.step-number {
		text-align: right;
	}

	.step-number span {
		font-size: 6rem;
		font-weight: 800;
		line-height: 1;
		background: linear-gradient(135deg, var(--step-color) 0%, rgba(26, 26, 46, 0.1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		opacity: 0.6;
	}

	.step-icon {
		width: 56px;
		height: 56px;
		background: var(--step-color);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin-bottom: 1rem;
	}

	.step-content h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.step-content p {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
	}

	.step-connector {
		height: 60px;
		margin: 0 0 2rem 80px;
		width: calc(100% - 160px);
	}

	.step-connector.reverse {
		margin-left: auto;
		margin-right: 80px;
	}

	.step-connector svg {
		width: 100%;
		height: 100%;
	}

	/* Connection Section */
	.connection-section {
		padding: 6rem 2rem;
		background: #f8fafc;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2.25rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.section-header p {
		font-size: 1.1rem;
		color: #64748b;
	}

	.connection-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.connection-card {
		background: white;
		border-radius: 24px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s, box-shadow 0.3s;
		position: relative;
	}

	.connection-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(118, 56, 250, 0.15);
	}

	.connection-card.featured {
		border: 2px solid #D300C5;
	}

	.featured-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		padding: 0.375rem 1rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.card-header :global(svg) {
		color: #D300C5;
	}

	.card-header h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.connection-card > p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
		margin-bottom: 1.25rem;
	}

	.connection-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.connection-card li {
		font-size: 0.9rem;
		color: #1a1a2e;
		padding: 0.5rem 0;
		border-bottom: 1px solid #f1f5f9;
		padding-left: 1.5rem;
		position: relative;
	}

	.connection-card li:last-child {
		border-bottom: none;
	}

	.connection-card li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #22c55e;
		font-weight: bold;
	}

	/* Trust Section */
	.trust-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		color: white;
	}

	.trust-content {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
	}

	.trust-badge {
		width: 100px;
		height: 100px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
	}

	.trust-content h2 {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.trust-content > p {
		font-size: 1.1rem;
		opacity: 0.9;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.trust-features {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.trust-feature {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
	}

	.check {
		color: #22c55e;
		font-weight: bold;
	}

	/* CTA Section */
	.cta-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		text-align: center;
	}

	.cta-section h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.cta-section > .container > p {
		font-size: 1.15rem;
		opacity: 0.9;
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
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

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		background: transparent;
		color: white;
		padding: 1.125rem 2.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		transition: border-color 0.2s, background 0.2s;
	}

	.btn-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	.new-offer {
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.new-offer strong {
		font-weight: 600;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.step {
			grid-template-columns: 1fr;
			gap: 1rem;
			text-align: center;
		}

		.step.reverse {
			grid-template-columns: 1fr;
		}

		.step.reverse .step-number,
		.step.reverse .step-content {
			order: unset;
			text-align: center;
		}

		.step-number,
		.step.reverse .step-number {
			text-align: center;
		}

		.step-number span {
			font-size: 4rem;
		}

		.step-icon,
		.step.reverse .step-icon {
			margin-left: auto;
			margin-right: auto;
		}

		.step-connector {
			display: none;
		}

		.connection-cards {
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
			font-size: 2.25rem;
		}

		.stats-bar {
			gap: 1.5rem;
		}

		.stat {
			flex: 0 0 45%;
		}

		.section-header h2,
		.trust-content h2,
		.cta-section h2 {
			font-size: 1.875rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 280px;
			justify-content: center;
		}

		.trust-features {
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
