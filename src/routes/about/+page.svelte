<script lang="ts">
	import { Globe, Heart, Lock, ChatCircle, Phone, EnvelopeSimple, Sparkle } from 'phosphor-svelte';
	import Header from '$lib/components/Header.svelte';

	const readingFormats = [
		{
			icon: Phone,
			title: 'Call Readings',
			description: 'Real-time conversational guidance with your chosen advisor over the phone.'
		},
		{
			icon: ChatCircle,
			title: 'Chat Readings',
			description: 'Live chat combining the responsiveness of calls with written communication.'
		},
		{
			icon: EnvelopeSimple,
			title: 'Text Readings',
			description: 'Submit written questions and receive thoughtful, detailed insights.'
		}
	];

	const differentiators = [
		{
			icon: Globe,
			title: 'Globally Vetted Advisors',
			description: 'Our advisors are sourced worldwide and carefully screened to meet our high professional standards.'
		},
		{
			icon: Sparkle,
			title: 'Modern Approach',
			description: 'We blend traditional psychic practice with modern technology for a seamless experience.'
		},
		{
			icon: Lock,
			title: 'Privacy First',
			description: 'Strong privacy protections ensure your readings remain confidential and secure.'
		},
		{
			icon: Heart,
			title: 'Empowering Guidance',
			description: 'Non-judgmental guidance focused on empowering you to make confident decisions.'
		}
	];

	const categories = [
		'Love & Relationships',
		'Career & Money',
		'Spiritual Guidance',
		'Tarot Reading',
		'Past Lives',
		'Dream Interpretation',
		'Life Path',
		'Family & Friends',
		'Astrology',
		'Numerology',
		'Pet Readings',
		'Grief Support',
		'Energy Healing'
	];
</script>

<svelte:head>
	<title>About Us - Clairvora</title>
	<meta name="description" content="Learn about Clairvora, a global psychic reading platform connecting you with trusted advisors for guidance on love, career, and life's biggest questions." />
</svelte:head>

<Header />

<!-- Hero Section -->
<section class="hero-section">
	<div class="animated-bg">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>
	<div class="hero-content">
		<span class="eyebrow">About Clairvora</span>
		<h1 class="headline">Guidance for Life's<br />Biggest Questions</h1>
		<p class="subtext">
			Connecting you with trusted advisors worldwide for authentic insights on love, career, and your life path.
		</p>
	</div>
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</section>

<!-- Mission Section -->
<section class="mission-section">
	<div class="container">
		<div class="mission-grid">
			<div class="mission-content">
				<span class="eyebrow-dark">Our Mission</span>
				<h2>Empowering Clarity & Confidence</h2>
				<p class="mission-text">
					Clairvora was founded with a single purpose: to provide a space where everyone can find the guidance they need to make life's decisions with confidence.
				</p>
				<p class="mission-text">
					We believe in meaningful connections between clients and advisors. Our platform helps people navigate life's challenges through authentic guidance from carefully selected professionals who truly care about your journey.
				</p>
				<p class="mission-text">
					Whether you're seeking clarity on relationships, career direction, or spiritual growth, we're here to connect you with the insights you need.
				</p>
			</div>
			<div class="mission-image">
				<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
			</div>
		</div>
	</div>
</section>

<!-- Reading Formats Section -->
<section class="formats-section">
	<div class="container">
		<div class="section-header">
			<span class="eyebrow-dark">How We Connect</span>
			<h2>Three Flexible Reading Formats</h2>
			<p class="section-subtitle">Choose the communication style that works best for you</p>
		</div>

		<div class="formats-grid">
			{#each readingFormats as format}
				<div class="format-card">
					<div class="format-icon">
						<format.icon size={32} weight="fill" />
					</div>
					<h3>{format.title}</h3>
					<p>{format.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Why Choose Us Section -->
<section class="differentiators-section">
	<div class="container">
		<div class="diff-grid">
			<div class="diff-content">
				<span class="eyebrow-light">Why Clairvora</span>
				<h2>What Sets Us Apart</h2>
				<p class="diff-intro">
					We've built Clairvora to be more than just a psychic reading platform. We're committed to providing authentic, empowering guidance in a modern, secure environment.
				</p>

				<div class="diff-list">
					{#each differentiators as item}
						<div class="diff-item">
							<div class="diff-icon">
								<item.icon size={24} weight="bold" />
							</div>
							<div class="diff-text">
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="diff-image">
				<img src="/misc/psychic-1.png" alt="Psychic advisor providing guidance" />
			</div>
		</div>
	</div>
</section>

<!-- Categories Section -->
<section class="categories-section">
	<div class="container">
		<div class="section-header">
			<span class="eyebrow-dark">Specializations</span>
			<h2>Reading Categories</h2>
			<p class="section-subtitle">Our advisors offer guidance across a wide range of life topics</p>
		</div>

		<div class="categories-grid">
			{#each categories as category}
				<div class="category-tag">{category}</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonial Section -->
<section class="testimonial-section">
	<div class="container">
		<div class="testimonial-card">
			<div class="quote-icon">
				<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
					<path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"/>
				</svg>
			</div>
			<blockquote>
				"My experience with Clairvora was more than a reading—it was a life-changing experience. The guidance I received was personalized, profound, and gave me the direction I needed."
			</blockquote>
			<div class="testimonial-author">
				<div class="author-avatar">
					<img src="/advisors/profile-8.jpg" alt="Happy client" />
				</div>
				<div class="author-info">
					<span class="author-name">Sarah M.</span>
					<span class="author-detail">Verified Client</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Ready to Find Your Clarity?</h2>
			<p>Connect with a trusted advisor today and take the first step on your journey.</p>
			<div class="cta-buttons">
				<a href="/signup" class="cta-primary">Get Started</a>
				<a href="/psychics" class="cta-secondary">Browse Advisors</a>
			</div>
			<div class="contact-info">
				<span>Questions? Call us at <a href="tel:+18446340009">(844) 634-0009</a></span>
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero-section {
		position: relative;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 8rem 2rem 6rem;
		text-align: center;
		overflow: hidden;
	}

	.animated-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.4;
		animation: float 8s ease-in-out infinite;
	}

	.orb-1 {
		width: 400px;
		height: 400px;
		background: rgba(255, 255, 255, 0.3);
		top: -100px;
		left: -100px;
		animation-delay: 0s;
	}

	.orb-2 {
		width: 300px;
		height: 300px;
		background: rgba(255, 122, 0, 0.3);
		bottom: -50px;
		right: -50px;
		animation-delay: 2s;
	}

	.orb-3 {
		width: 200px;
		height: 200px;
		background: rgba(118, 56, 250, 0.4);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-delay: 4s;
	}

	@keyframes float {
		0%, 100% { transform: translate(0, 0) scale(1); }
		50% { transform: translate(20px, -20px) scale(1.1); }
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 800px;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 600;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		color: white;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.subtext {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto;
	}

	.wave-divider {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 150px;
	}

	/* Mission Section */
	.mission-section {
		padding: 6rem 2rem;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.mission-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.eyebrow-dark {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
	}

	.mission-content h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}

	.mission-text {
		font-size: 1.1rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.mission-image img {
		width: 100%;
		filter: drop-shadow(0 20px 60px rgba(118, 56, 250, 0.2));
	}

	/* Formats Section */
	.formats-section {
		padding: 6rem 2rem;
		background: #f8fafc;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.section-subtitle {
		font-size: 1.1rem;
		color: #64748b;
	}

	.formats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.format-card {
		background: white;
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.format-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.format-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		color: white;
	}

	.format-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.format-card p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
	}

	/* Differentiators Section */
	.differentiators-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
	}

	.diff-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.eyebrow-light {
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #D300C5;
		margin-bottom: 1rem;
	}

	.diff-content h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: white;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.diff-intro {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.diff-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.diff-item {
		display: flex;
		gap: 1rem;
	}

	.diff-icon {
		width: 48px;
		height: 48px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D300C5;
		flex-shrink: 0;
	}

	.diff-text h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.25rem;
	}

	.diff-text p {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.5;
	}

	.diff-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.diff-image img {
		max-width: 380px;
		width: 100%;
		height: auto;
		filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3));
	}

	/* Categories Section */
	.categories-section {
		padding: 6rem 2rem;
		background: white;
	}

	.categories-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	.category-tag {
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		color: #7638FA;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-size: 0.95rem;
		font-weight: 500;
		transition: transform 0.2s, background 0.2s;
	}

	.category-tag:hover {
		transform: translateY(-2px);
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	/* Testimonial Section */
	.testimonial-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
	}

	.testimonial-card {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.quote-icon {
		color: #D300C5;
		opacity: 0.3;
		margin-bottom: 1.5rem;
	}

	.testimonial-card blockquote {
		font-size: 1.5rem;
		color: #1a1a2e;
		line-height: 1.6;
		font-style: italic;
		margin-bottom: 2rem;
	}

	.testimonial-author {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.author-avatar img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.author-info {
		text-align: left;
	}

	.author-name {
		display: block;
		font-weight: 600;
		color: #1a1a2e;
	}

	.author-detail {
		display: block;
		font-size: 0.85rem;
		color: #64748b;
	}

	/* CTA Section */
	.cta-section {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #D300C5 0%, #FF0069 100%);
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}

	.cta-content > p {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.cta-primary {
		background: white;
		color: #D300C5;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: transform 0.2s;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
	}

	.cta-secondary {
		background: transparent;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.5);
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: background 0.2s, border-color 0.2s;
	}

	.cta-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
	}

	.contact-info {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.9);
	}

	.contact-info a {
		color: white;
		font-weight: 600;
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.mission-grid,
		.diff-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.mission-image,
		.diff-image {
			order: -1;
		}

		.formats-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin: 0 auto;
		}
	}

	@media (max-width: 768px) {
		.hero-section {
			padding: 7rem 1.5rem 5rem;
			min-height: 50vh;
		}

		.headline {
			font-size: 2.5rem;
		}

		.subtext {
			font-size: 1.1rem;
		}

		.mission-section,
		.formats-section,
		.differentiators-section,
		.categories-section,
		.testimonial-section,
		.cta-section {
			padding: 4rem 1.5rem;
		}

		.mission-content h2,
		.section-header h2,
		.diff-content h2,
		.cta-content h2 {
			font-size: 2rem;
		}

		.testimonial-card blockquote {
			font-size: 1.25rem;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.wave-divider {
			height: 100px;
		}
	}
</style>
