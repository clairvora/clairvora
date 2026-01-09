<script lang="ts">
	import { onMount } from 'svelte';
	import { MagnifyingGlass, ChatCircleDots, UserCirclePlus, Sparkle, ShieldCheck, Star, ArrowRight, Phone, ChatCircle, EnvelopeSimple, CheckCircle, CreditCard, Headset, Lock } from 'phosphor-svelte';
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
			title: 'Find Your Perfect Advisor',
			description: 'Explore our curated network of gifted psychics. Each advisor\'s profile includes their specialties, experience level, client reviews, and current availability. Use our filters to narrow down by reading type, specialty, or price.',
			icon: MagnifyingGlass,
			image: '/woman-phone-chair-3.png'
		},
		{
			num: '02',
			title: 'Choose How You Connect',
			description: 'Pick the reading style that suits you best. Phone readings for voice-to-voice connection, live chat for real-time text sessions, or text readings for thoughtful, detailed exchanges at your own pace.',
			icon: ChatCircleDots,
			image: '/hero-couple.png'
		},
		{
			num: '03',
			title: 'Set Up Your Account',
			description: 'Creating an account takes just seconds. Simply enter your email, choose a password, and add funds to your secure wallet. Your account lets you save favorite advisors, view reading history, and manage preferences.',
			icon: UserCirclePlus,
			image: '/woman-happy.jpg'
		},
		{
			num: '04',
			title: 'Receive Your Guidance',
			description: 'Connect with your chosen advisor and begin your reading. Our psychics use their intuitive gifts, combined with tools like tarot and astrology, to provide you with personalized insights and clear direction.',
			icon: Sparkle,
			image: '/woman-phone-chair-3.png'
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

<!-- Compact Hero Section -->
<section class="hero">
	<div class="hero-content">
		<span class="eyebrow">Getting Started</span>
		<h1>How Clairvora Works</h1>
		<p class="hero-subtitle">Your journey to clarity is simple. From finding the right advisor to receiving personalized guidance — we've made every step effortless.</p>
	</div>
</section>

<!-- Split-Screen Steps Section -->
<section class="steps-section">
	{#each steps as step, i}
		<div class="step" class:reverse={i % 2 === 1}>
			<div class="step-image">
				<img src={step.image} alt={step.title} />
			</div>
			<div class="step-content">
				<div class="step-meta">
					<span class="step-num">Step {step.num}</span>
					<div class="step-icon">
						<svelte:component this={step.icon} size={24} weight="fill" />
					</div>
				</div>
				<h2>{step.title}</h2>
				<p>{step.description}</p>
				{#if i === steps.length - 1}
					<a href="/signup" class="step-cta">
						Get Started Now
						<ArrowRight size={18} weight="bold" />
					</a>
				{/if}
			</div>
		</div>
	{/each}
</section>

<!-- Connection Methods Banner -->
<section class="methods-section">
	<div class="container">
		<h2>Three Ways to Connect</h2>
		<div class="methods-grid">
			<div class="method-item">
				<div class="method-icon">
					<Phone size={28} weight="fill" />
				</div>
				<h3>Phone</h3>
				<p>Voice readings for deep, personal sessions</p>
			</div>
			<div class="method-item">
				<div class="method-icon">
					<ChatCircle size={28} weight="fill" />
				</div>
				<h3>Live Chat</h3>
				<p>Real-time text for quick guidance</p>
			</div>
			<div class="method-item">
				<div class="method-icon">
					<EnvelopeSimple size={28} weight="fill" />
				</div>
				<h3>Text</h3>
				<p>Thoughtful exchanges at your pace</p>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Section -->
<section class="why-section">
	<div class="container">
		<div class="section-header">
			<h2>Why Choose Clairvora?</h2>
			<p>We're committed to providing authentic, trustworthy psychic experiences</p>
		</div>

		<div class="why-grid">
			<div class="why-card featured">
				<ShieldCheck size={40} weight="fill" />
				<h3>100% Satisfaction Guaranteed</h3>
				<p>Not happy with your reading? We'll refund your purchase or match you with a new advisor. Your peace of mind is our priority.</p>
			</div>
			<div class="why-card">
				<Star size={32} weight="fill" />
				<h3>Vetted Advisors</h3>
				<p>Every psychic passes rigorous screening for authentic abilities and professionalism.</p>
			</div>
			<div class="why-card">
				<CreditCard size={32} weight="fill" />
				<h3>Secure Payments</h3>
				<p>Bank-level 256-bit SSL encryption protects all your transactions.</p>
			</div>
			<div class="why-card">
				<Headset size={32} weight="fill" />
				<h3>24/7 Support</h3>
				<p>Our team is always available to help with any questions or concerns.</p>
			</div>
			<div class="why-card">
				<Lock size={32} weight="fill" />
				<h3>Complete Privacy</h3>
				<p>Your readings and personal information are always kept confidential.</p>
			</div>
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<span class="cta-badge">New Customer Offer</span>
			<h2>Start Your Journey Today</h2>
			<p>Get $20 + $80 bonus = <strong>$100 in reading credit</strong></p>
			<a href="/signup" class="btn-primary">
				Create Free Account
				<ArrowRight size={20} weight="bold" />
			</a>
			<div class="trust-badges">
				<span><CheckCircle size={16} weight="fill" /> Satisfaction Guaranteed</span>
				<span><CheckCircle size={16} weight="fill" /> Secure & Private</span>
				<span><CheckCircle size={16} weight="fill" /> Cancel Anytime</span>
			</div>
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
		padding: 9rem 2rem 5rem;
		text-align: center;
		color: white;
	}

	.hero-content {
		max-width: 750px;
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
		font-size: 3rem;
		font-weight: 700;
		line-height: 1.15;
		margin-bottom: 1rem;
	}

	.hero-subtitle {
		font-size: 1.2rem;
		opacity: 0.9;
		line-height: 1.7;
	}

	/* Split-Screen Steps */
	.steps-section {
		background: white;
	}

	.step {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 550px;
	}

	.step.reverse .step-image {
		order: 2;
	}

	.step.reverse .step-content {
		order: 1;
	}

	.step-image {
		background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.step-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.step-content {
		padding: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.step-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.step-num {
		font-size: 0.875rem;
		font-weight: 700;
		color: #D300C5;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.step-icon {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #7638FA;
	}

	.step-content h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.step-content p {
		font-size: 1.1rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.step-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		width: fit-content;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.step-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(118, 56, 250, 0.35);
	}

	/* Methods Section */
	.methods-section {
		padding: 5rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		color: white;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.methods-section h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 3rem;
	}

	.methods-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.method-item {
		text-align: center;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s, background 0.3s;
	}

	.method-item:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.1);
	}

	.method-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.method-item h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.method-item p {
		font-size: 0.95rem;
		opacity: 0.8;
	}

	/* Why Section */
	.why-section {
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
		margin-bottom: 0.75rem;
	}

	.section-header p {
		font-size: 1.1rem;
		color: #64748b;
	}

	.why-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	.why-card {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.why-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.12);
	}

	.why-card.featured {
		grid-column: 1 / -1;
		text-align: center;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.05) 0%, rgba(211, 0, 197, 0.05) 100%);
		border: 1px solid rgba(118, 56, 250, 0.15);
	}

	.why-card.featured :global(svg) {
		margin-bottom: 1rem;
		color: #7638FA;
	}

	.why-card :global(svg) {
		color: #D300C5;
		margin-bottom: 1rem;
	}

	.why-card h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.why-card p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
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

	.cta-badge {
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

	.cta-content > p strong {
		font-weight: 700;
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

	.trust-badges {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.trust-badges span {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.9rem;
		opacity: 0.9;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.step {
			grid-template-columns: 1fr;
			min-height: auto;
		}

		.step.reverse .step-image,
		.step.reverse .step-content {
			order: unset;
		}

		.step-image {
			height: 300px;
		}

		.step-content {
			padding: 3rem 2rem;
		}

		.methods-grid {
			grid-template-columns: 1fr;
			max-width: 350px;
			margin-left: auto;
			margin-right: auto;
		}

		.why-grid {
			grid-template-columns: 1fr;
		}

		.why-card.featured {
			grid-column: auto;
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

		.step-content h2 {
			font-size: 1.75rem;
		}

		.section-header h2,
		.methods-section h2,
		.cta-content h2 {
			font-size: 1.875rem;
		}

		.trust-badges {
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
