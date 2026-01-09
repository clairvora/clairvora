<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Copyright Policy - Clairvora</title>
	<meta name="description" content="Learn about Clairvora's copyright policy and DMCA procedures." />
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
		<h1 class="headline">Copyright Policy</h1>
		<p class="subtext">
			Our policy on intellectual property and DMCA procedures.
		</p>
	</div>
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</section>

<!-- Content Section -->
<section class="content-section">
	<div class="container">
		<div class="content-grid">
			<div class="main-content">
				<p class="effective-date">Effective date: January 1st, 2026</p>

				<div class="terms-content">
					<section class="term-section">
						<p>This website is operated by Stellar Insights LLC, a company registered in the United States. We provide psychic reading services by phone, chat, text message, and other means of communication.</p>
						<p>We respect the intellectual property rights of others and expect our users to do the same. We do not claim any ownership or responsibility for the content that our users or third parties may post, upload, transmit, or otherwise make available on our website or through our services. Such content is the sole responsibility of the person who originated it.</p>
						<p>We have adopted and implemented a policy that provides for the removal of any infringing or unauthorized content from our website or services in accordance with the Digital Millennium Copyright Act (DMCA) and other applicable laws.</p>
					</section>

					<section class="term-section">
						<h2>Filing a Copyright Infringement Notice</h2>
						<p>If you believe that your work has been copied, reproduced, distributed, or otherwise used in a way that constitutes copyright infringement, please provide us with the following information:</p>
						<ul>
							<li>A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright that is allegedly infringed;</li>
							<li>A description of the copyrighted work that you claim has been infringed or, if multiple copyrighted works are involved, a representative list of such works;</li>
							<li>A description of the material that you claim is infringing or is the subject of infringing activity, including information such as the URL or other means of identifying where it is located on our website or services;</li>
							<li>Your name, address, telephone number, and email address;</li>
							<li>A statement by you that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law;</li>
							<li>A statement by you, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf.</li>
						</ul>
					</section>

					<section class="term-section">
						<h2>Contact Information</h2>
						<p>Please send your notice of alleged infringement to our designated copyright agent at:</p>
						<p><strong>Stellar Insights LLC</strong><br />Email: dmca@clairvora.com</p>
						<p>We will respond to your notice as soon as possible and take appropriate action, which may include removing or disabling access to the allegedly infringing material, terminating the accounts of repeat infringers, or notifying the affected users.</p>
						<p>Please note that under the DMCA, any person who knowingly materially misrepresents that material or activity is infringing or that material or activity was removed or disabled by mistake or misidentification may be subject to liability.</p>
					</section>

					<section class="term-section">
						<h2>Counter-Notice Procedures</h2>
						<p>If you believe that your material has been removed or disabled by mistake or misidentification, please provide us with the following information:</p>
						<ul>
							<li>A physical or electronic signature of the person authorized to act on behalf of the owner of the material that has been removed or disabled;</li>
							<li>A description of the material that has been removed or disabled and the location where it appeared before it was removed or disabled;</li>
							<li>A statement by you that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification;</li>
							<li>Your name, address, telephone number, and email address;</li>
							<li>A statement by you that you consent to the jurisdiction of the federal district court for the judicial district in which your address is located, or if your address is outside of the United States, the Southern District of New York, and that you will accept service of process from the person who provided the notice of alleged infringement or an agent of such person.</li>
						</ul>
						<p>Please send your counter-notice to our designated copyright agent at the same address as above.</p>
						<p>We will respond to your counter-notice as soon as possible and take appropriate action, which may include restoring or enabling access to the material that was removed or disabled, unless we receive notice from the original complainant that a legal action has been filed seeking to restrain you from engaging in the infringing activity.</p>
						<p>Please note that under the DMCA, any person who knowingly materially misrepresents that material or activity was removed or disabled by mistake or misidentification may be subject to liability.</p>
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
						<a href="/about/refunds-cancellations">Refunds & Cancellations</a>
						<a href="/about/copyright-policy" class="active">Copyright Policy</a>
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
		padding: 4rem 2rem 6rem;
		background: white;
		margin-top: -2px;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
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

	.term-section ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.term-section li {
		font-size: 1rem;
		color: #4a5568;
		line-height: 1.8;
		padding-left: 1.5rem;
		position: relative;
	}

	.term-section li::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0.75rem;
		width: 6px;
		height: 6px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
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

		.term-section p,
		.term-section li {
			font-size: 0.95rem;
		}

		.wave-divider {
			height: 100px;
		}
	}
</style>
