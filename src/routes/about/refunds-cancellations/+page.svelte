<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Refunds & Cancellations - Clairvora</title>
	<meta name="description" content="Learn about Clairvora's refund and cancellation policy for psychic reading services." />
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
		<span class="eyebrow">Legal</span>
		<h1 class="headline">Refunds & Cancellations</h1>
		<p class="subtext">
			Our policy for refunds and cancellations of psychic reading services.
		</p>
	</div>
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</section>

<!-- Content Section -->
<section class="content-section">
	<div class="page-container">
		<div class="content-grid">
			<div class="main-content">
				<p class="effective-date">Effective date: January 1st, 2026</p>

				<div class="terms-content">
					<section class="term-section">
						<p>This website is operated by Stellar Insights LLC, a company registered in the United States. We provide psychic reading services by phone, chat, text message, and other means of communication.</p>
						<p>Clairvora is a platform connecting you with talented psychic advisors for phone, chat, and text message readings. We understand that life can be unpredictable, and sometimes you may need to reschedule or cancel a reading.</p>
					</section>

					<section class="term-section">
						<h2>Our Commitment to You</h2>
						<p>Clairvora is dedicated to providing a safe and satisfying experience for both users and advisors. The company carefully vets independent contractor advisors for professionalism and ethical conduct. However, the platform cannot guarantee accuracy or effectiveness of psychic readings, which are solely for entertainment purposes only.</p>
					</section>

					<section class="term-section">
						<h2>Cancellations</h2>
						<p>Before a reading begins, customers may cancel and receive a full refund. Contact options include the website, app, or phone. The policy notes that refunds are not typically provided but credits toward future readings may be available subject to the discretion of Stellar Insights/Clairvora.</p>
					</section>

					<section class="term-section">
						<h2>Refunds</h2>
						<p>Customers should know that Clairvora is not liable for any financial or emotional impacts from readings. All requests undergo case-by-case review, and the company reserves the right to deny a refund at our discretion.</p>
						<p>Technical disruptions resulting from platform issues qualify for full refunds or future reading credits.</p>
					</section>

					<section class="term-section">
						<h2>Dispute Resolution</h2>
						<p>Customers with concerns should contact the support team for prompt review of denied requests.</p>
					</section>
				</div>
			</div>

			<aside class="sidebar">
				<div class="sidebar-box">
					<h3>Legal Pages</h3>
					<nav class="legal-nav">
						<a href="/about/terms-conditions">Terms & Conditions</a>
						<a href="/about/privacy-policy">Privacy Policy</a>
						<a href="/about/cookie-policy">Cookie Policy</a>
						<a href="/about/refunds-cancellations" class="active">Refunds & Cancellations</a>
						<a href="/about/copyright-policy">Copyright Policy</a>
						<a href="/about/satisfaction-guarantee">Satisfaction Guarantee</a>
					</nav>
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero-section {
		position: relative;
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 6rem 2rem 5.875rem;
		overflow: hidden;
		margin-bottom: -1px;
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
		width: 100%;
		max-width: 1200px;
		margin: 15px auto 0;
		text-align: left;
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
		margin-bottom: 0.75rem;
	}

	.subtext {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.6;
		max-width: 600px;
		margin: 0;
	}

	.wave-divider {
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 150px;
		display: block;
	}

	/* Content Section */
	.content-section {
		padding: 4rem 0 6rem;
		background: white;
		margin-top: -2px;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: 4rem;
	}

	.main-content {
		min-width: 0;
	}

	.sidebar {
		position: relative;
	}

	.sidebar-box {
		position: sticky;
		top: 2rem;
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.sidebar-box h3 {
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #64748b;
		margin-bottom: 1rem;
	}

	.legal-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.legal-nav a {
		color: #4a5568;
		text-decoration: none;
		font-size: 0.95rem;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		transition: background 0.2s, color 0.2s;
	}

	.legal-nav a:hover {
		background: #e2e8f0;
		color: #1a1a2e;
	}

	.legal-nav a.active {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		font-weight: 500;
	}

	.effective-date {
		font-size: 0.95rem;
		color: #64748b;
		margin-bottom: 3rem;
	}

	.terms-content {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.term-section h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		text-align: left;
	}

	.term-section p {
		font-size: 1rem;
		color: #4a5568;
		line-height: 1.8;
		margin-bottom: 1rem;
		text-align: left;
	}

	.term-section p:last-child {
		margin-bottom: 0;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.content-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.sidebar {
			order: -1;
		}

		.sidebar-box {
			position: static;
		}

		.legal-nav {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.legal-nav a {
			font-size: 0.85rem;
			padding: 0.4rem 0.6rem;
		}
	}

	@media (max-width: 768px) {
		.hero-section {
			padding: 7rem 1.5rem 5rem;
			min-height: 40vh;
		}

		.headline {
			font-size: 2.5rem;
		}

		.subtext {
			font-size: 1.1rem;
		}

		.content-section {
			padding: 3rem 1.5rem 4rem;
		}

		.term-section h2 {
			font-size: 1.25rem;
		}

		.term-section p {
			font-size: 0.95rem;
		}

		.wave-divider {
			height: 100px;
		}
	}
</style>
