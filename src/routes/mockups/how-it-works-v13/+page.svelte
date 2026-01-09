<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ChatCircleDots, UserCirclePlus, Sparkle, ShieldCheck, Heart, Clock, Wallet, Phone, ChatCircle, EnvelopeSimple, ArrowRight, Star, Lock } from 'phosphor-svelte';
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
			num: '1',
			title: 'Explore Our Advisors',
			description: 'Browse detailed profiles of our vetted psychic advisors. Filter by specialty, read real reviews, and find someone who truly resonates with your energy.',
			icon: MagnifyingGlass
		},
		{
			num: '2',
			title: 'Pick Your Reading Style',
			description: 'Choose how you want to connect — phone calls for deep conversations, live chat for quick guidance, or thoughtful text exchanges at your own pace.',
			icon: ChatCircleDots
		},
		{
			num: '3',
			title: 'Create Your Account',
			description: 'Quick signup with just your email. Securely add funds to your wallet and you\'re ready to connect with any advisor, anytime.',
			icon: UserCirclePlus
		},
		{
			num: '4',
			title: 'Begin Your Journey',
			description: 'Connect instantly with your chosen advisor. Receive personalized insights and guidance on love, career, and life\'s most important questions.',
			icon: Sparkle
		}
	];

	const features = [
		{ icon: ShieldCheck, title: '100% Satisfaction', desc: 'Money-back guarantee' },
		{ icon: Clock, title: '24/7 Available', desc: 'Anytime you need us' },
		{ icon: Lock, title: 'Fully Private', desc: 'Your readings stay yours' },
		{ icon: Heart, title: 'Genuine Psychics', desc: 'Carefully screened' }
	];

	const readingTypes = [
		{
			icon: Phone,
			title: 'Phone Readings',
			description: 'Voice-to-voice connection for in-depth, personal sessions. Perfect for complex questions.',
			features: ['Real-time dialogue', 'Deeper connection', 'Immediate answers']
		},
		{
			icon: ChatCircle,
			title: 'Live Chat Readings',
			description: 'Text-based sessions in real time. Ideal for quick guidance when you can\'t talk.',
			features: ['Instant messaging', 'Save transcripts', 'Read at your pace']
		},
		{
			icon: EnvelopeSimple,
			title: 'Text Readings',
			description: 'Send your questions, receive detailed written responses. Great for thoughtful reflection.',
			features: ['Take your time', 'Detailed responses', 'Keep forever']
		}
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
		<h1>Getting Clarity Has Never Been Easier</h1>
		<p class="hero-subtitle">Connect with gifted psychic advisors in minutes. Phone, chat, or text — choose what works for you.</p>
		<div class="features-bar">
			{#each features as feature}
				<div class="feature-item">
					<svelte:component this={feature.icon} size={20} weight="fill" />
					<div>
						<span class="feature-title">{feature.title}</span>
						<span class="feature-desc">{feature.desc}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Steps Section - Card Grid -->
<section class="steps-section">
	<div class="container">
		<div class="section-header">
			<span class="eyebrow">The Process</span>
			<h2>Four Simple Steps to Guidance</h2>
			<p>From browsing to your first reading in minutes</p>
		</div>

		<div class="steps-grid">
			{#each steps as step}
				<div class="step-card">
					<div class="step-header">
						<span class="step-num">{step.num}</span>
						<div class="step-icon">
							<svelte:component this={step.icon} size={28} weight="fill" />
						</div>
					</div>
					<h3>{step.title}</h3>
					<p>{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Reading Types Section -->
<section class="reading-types">
	<div class="container">
		<div class="section-header">
			<span class="eyebrow">Connection Methods</span>
			<h2>Choose Your Reading Style</h2>
			<p>Three ways to connect, each designed for different needs</p>
		</div>

		<div class="types-grid">
			{#each readingTypes as type}
				<div class="type-card">
					<div class="type-icon">
						<svelte:component this={type.icon} size={36} weight="fill" />
					</div>
					<h3>{type.title}</h3>
					<p class="type-desc">{type.description}</p>
					<ul class="type-features">
						{#each type.features as feature}
							<li>
								<Star size={14} weight="fill" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
					<button class="type-cta">Learn More</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Guarantee Section -->
<section class="guarantee-section">
	<div class="container">
		<div class="guarantee-content">
			<div class="guarantee-icon">
				<ShieldCheck size={48} weight="fill" />
			</div>
			<h2>Our Satisfaction Guarantee</h2>
			<p>Your happiness matters most. If you're not completely satisfied with your reading, contact us and we'll either match you with a new advisor or refund your purchase. No questions asked.</p>
			<div class="guarantee-stats">
				<div class="stat">
					<span class="stat-value">50K+</span>
					<span class="stat-label">Happy Clients</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">4.9</span>
					<span class="stat-label">Average Rating</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat">
					<span class="stat-value">500+</span>
					<span class="stat-label">Verified Advisors</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Ready to Find Your Path?</h2>
			<p>Join thousands who have discovered clarity and direction through Clairvora</p>
			<a href="/signup" class="btn-primary">
				Get Started Today
				<ArrowRight size={20} weight="bold" />
			</a>
			<span class="cta-note">New customers: Get $20 + $80 bonus credits</span>
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
	.header.scrolled .nav-link,
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

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 10rem 2rem 6rem;
		color: white;
	}

	.hero-content {
		max-width: 1100px;
		margin: 0 auto;
		text-align: center;
	}

	.hero h1 {
		font-size: 3.25rem;
		font-weight: 700;
		line-height: 1.15;
		margin-bottom: 1.25rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		opacity: 0.9;
		line-height: 1.6;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.features-bar {
		display: flex;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.feature-item > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.feature-title {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.feature-desc {
		font-size: 0.8rem;
		opacity: 0.8;
	}

	/* Steps Section */
	.steps-section {
		padding: 6rem 2rem;
		background: white;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.eyebrow {
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

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.step-card {
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 20px;
		padding: 1.75rem;
		transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
	}

	.step-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(118, 56, 250, 0.12);
		border-color: rgba(211, 0, 197, 0.3);
	}

	.step-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}

	.step-num {
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-weight: 700;
		font-size: 1rem;
	}

	.step-icon {
		color: #D300C5;
	}

	.step-card h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.step-card p {
		font-size: 0.925rem;
		color: #64748b;
		line-height: 1.6;
	}

	/* Reading Types */
	.reading-types {
		padding: 6rem 2rem;
		background: #f8fafc;
	}

	.types-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.type-card {
		background: white;
		border-radius: 24px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.type-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(118, 56, 250, 0.15);
	}

	.type-icon {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		color: #D300C5;
	}

	.type-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.type-desc {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.type-features {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem 0;
		text-align: left;
	}

	.type-features li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: #1a1a2e;
		padding: 0.375rem 0;
		border-bottom: 1px solid #f1f5f9;
	}

	.type-features li:last-child {
		border-bottom: none;
	}

	.type-features li :global(svg) {
		color: #FFD600;
	}

	.type-cta {
		background: transparent;
		color: #D300C5;
		border: 2px solid #D300C5;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.type-cta:hover {
		background: #D300C5;
		color: white;
	}

	/* Guarantee Section */
	.guarantee-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		color: white;
	}

	.guarantee-content {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
	}

	.guarantee-icon {
		width: 90px;
		height: 90px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
	}

	.guarantee-content h2 {
		font-size: 2.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.guarantee-content > p {
		font-size: 1.1rem;
		opacity: 0.9;
		line-height: 1.7;
		margin-bottom: 2.5rem;
	}

	.guarantee-stats {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		padding: 1.5rem 2.5rem;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.85rem;
		opacity: 0.8;
	}

	.stat-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 255, 255, 0.3);
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

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.cta-content > p {
		font-size: 1.125rem;
		opacity: 0.9;
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

	.cta-note {
		display: block;
		margin-top: 1.25rem;
		font-size: 0.95rem;
		opacity: 0.85;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.steps-grid {
			grid-template-columns: repeat(2, 1fr);
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
			font-size: 2.25rem;
		}

		.features-bar {
			gap: 1.5rem;
		}

		.feature-item {
			flex: 1 1 40%;
		}

		.steps-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}

		.types-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}

		.guarantee-stats {
			flex-direction: column;
			gap: 1.5rem;
		}

		.stat-divider {
			width: 60px;
			height: 1px;
		}

		.section-header h2,
		.guarantee-content h2,
		.cta-content h2 {
			font-size: 2rem;
		}
	}
</style>
