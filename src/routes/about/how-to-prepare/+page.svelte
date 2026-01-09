<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { Phone, ChatCircle, EnvelopeSimple, Lightbulb, NotePencil, CheckCircle } from 'phosphor-svelte';
</script>

<svelte:head>
	<title>How to Prepare for Your Psychic Reading - Clairvora</title>
	<meta name="description" content="Get the most out of your psychic reading with our preparation guide. Tips for call, chat, and text readings plus sample questions to ask your advisor." />
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
		<span class="eyebrow">Reading Guide</span>
		<h1 class="headline">How to Prepare for Your<br />Psychic Reading</h1>
		<p class="subtext">
			Get the most out of your session with these simple preparation tips.
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
				<!-- General Tips -->
				<div id="general-tips" class="guide-section">
					<div class="section-icon">
						<Lightbulb size={28} weight="fill" />
					</div>
					<h2>General Tips for Any Reading</h2>
					<p class="intro-text">No matter which format you choose, these foundational tips will help you make the most of your psychic reading experience.</p>

					<ul class="tip-list">
						<li>
							<CheckCircle size={20} weight="fill" class="check-icon" />
							<span><strong>Set clear intentions</strong> about what you hope to gain from your reading</span>
						</li>
						<li>
							<CheckCircle size={20} weight="fill" class="check-icon" />
							<span><strong>Prepare specific written questions</strong> in advance, such as "What does my romantic future look like?" or "What career path aligns with my purpose?"</span>
						</li>
						<li>
							<CheckCircle size={20} weight="fill" class="check-icon" />
							<span><strong>Create a calm, quiet environment</strong> with minimal distractions</span>
						</li>
						<li>
							<CheckCircle size={20} weight="fill" class="check-icon" />
							<span><strong>Maintain an open-minded approach</strong> to receive guidance effectively</span>
						</li>
						<li>
							<CheckCircle size={20} weight="fill" class="check-icon" />
							<span><strong>Take notes during the session</strong> for later reflection</span>
						</li>
					</ul>
				</div>

				<!-- Reading Format Sections -->
				<div class="formats-section">
					<h2>Preparation by Reading Format</h2>

					<div id="call-reading" class="format-card">
						<div class="format-header">
							<div class="format-icon">
								<Phone size={24} weight="fill" />
							</div>
							<h3>Call Reading Preparation</h3>
						</div>
						<ul class="tip-list">
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Schedule during uninterrupted time with no competing demands</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Verify phone battery and signal strength beforehand</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Articulate questions clearly to help the advisor tune into your energy</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Keep pen and paper available for note-taking</span>
							</li>
						</ul>
					</div>

					<div id="text-reading" class="format-card">
						<div class="format-header">
							<div class="format-icon">
								<EnvelopeSimple size={24} weight="fill" />
							</div>
							<h3>Text Reading Preparation</h3>
						</div>
						<ul class="tip-list">
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Craft specific, concise questions suited to written format</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Allow time to process the advisor's written responses</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Review message history to track alignment with original intentions</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Use a comfortable typing device to minimize errors</span>
							</li>
						</ul>
					</div>

					<div id="chat-reading" class="format-card">
						<div class="format-header">
							<div class="format-icon">
								<ChatCircle size={24} weight="fill" />
							</div>
							<h3>Chat Reading Preparation</h3>
						</div>
						<ul class="tip-list">
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Log in early and familiarize yourself with the platform interface</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Formulate questions thoughtfully while maintaining natural conversation flow</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Stay actively engaged and responsive throughout the session</span>
							</li>
							<li>
								<CheckCircle size={20} weight="fill" class="check-icon" />
								<span>Save the conversation transcript for future reference</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- Sample Questions -->
				<div id="sample-questions" class="guide-section">
					<div class="section-icon">
						<NotePencil size={28} weight="fill" />
					</div>
					<h2>Sample Questions to Ask</h2>
					<p class="intro-text">Not sure what to ask? Here are some thoughtful questions organized by topic to help guide your reading.</p>

					<div class="questions-grid">
						<div class="question-category">
							<h4>Love & Relationships</h4>
							<ul>
								<li>"What do I need to know about my current relationship?"</li>
								<li>"What is blocking me from finding love?"</li>
								<li>"What qualities should I look for in a partner?"</li>
							</ul>
						</div>
						<div class="question-category">
							<h4>Career & Money</h4>
							<ul>
								<li>"What career path aligns with my true purpose?"</li>
								<li>"Should I pursue this job opportunity?"</li>
								<li>"What's holding me back from financial abundance?"</li>
							</ul>
						</div>
						<div class="question-category">
							<h4>Life Purpose</h4>
							<ul>
								<li>"What is my soul's purpose in this lifetime?"</li>
								<li>"What lessons am I meant to learn right now?"</li>
								<li>"How can I best serve others with my gifts?"</li>
							</ul>
						</div>
						<div class="question-category">
							<h4>Spiritual Guidance</h4>
							<ul>
								<li>"What messages do my spirit guides have for me?"</li>
								<li>"How can I strengthen my intuition?"</li>
								<li>"What past life influences are affecting me now?"</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Post-Reading Reflection -->
				<div id="after-reading" class="guide-section reflection-section">
					<h2>After Your Reading</h2>
					<p class="intro-text">The insights you receive don't end when the session does. Here's how to continue benefiting from your reading:</p>

					<div class="reflection-tips">
						<div class="reflection-item">
							<strong>Journal Your Insights</strong>
							<p>Write down the key messages, feelings, and any symbols or imagery that came through. This helps integrate the guidance into your conscious awareness.</p>
						</div>
						<div class="reflection-item">
							<strong>Meditate on the Lessons</strong>
							<p>Take quiet time to sit with what you learned. Allow the deeper meanings to unfold naturally over the coming days.</p>
						</div>
						<div class="reflection-item">
							<strong>Create an Action Plan</strong>
							<p>Based on the guidance received, identify concrete steps you can take to move forward on your path.</p>
						</div>
					</div>
				</div>
			</div>

			<aside class="sidebar">
				<div class="sidebar-sticky">
					<div class="sidebar-box cta-box">
						<h3>Ready for Your Reading?</h3>
						<p>Connect with a trusted advisor and get the guidance you're seeking.</p>
						<a href="/psychics" class="sidebar-cta">Find an Advisor</a>
					</div>

					<div class="sidebar-box">
						<h3>Quick Navigation</h3>
						<nav class="quick-nav">
							<a href="#general-tips">General Tips</a>
							<a href="#call-reading">Call Readings</a>
							<a href="#text-reading">Text Readings</a>
							<a href="#chat-reading">Chat Readings</a>
							<a href="#sample-questions">Sample Questions</a>
							<a href="#after-reading">After Your Reading</a>
						</nav>
					</div>
				</div>
			</aside>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Start Your Journey Today</h2>
			<p>Now that you're prepared, connect with a trusted advisor and discover the clarity you seek.</p>
			<div class="cta-buttons">
				<a href="/signup" class="cta-primary">Get Started</a>
				<a href="/psychics" class="cta-secondary">Browse Advisors</a>
			</div>
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

	/* Guide Sections */
	.guide-section {
		margin-bottom: 4rem;
	}

	.section-icon {
		width: 56px;
		height: 56px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin-bottom: 1.5rem;
	}

	.guide-section h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.intro-text {
		font-size: 1.1rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	/* Tip Lists */
	.tip-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tip-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		font-size: 1rem;
		color: #4a5568;
		line-height: 1.6;
	}

	.tip-list :global(.check-icon) {
		color: #7638FA;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.tip-list strong {
		color: #1a1a2e;
	}

	/* Format Cards */
	.formats-section {
		margin-bottom: 4rem;
	}

	.formats-section h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 2rem;
	}

	.format-card {
		background: #f8fafc;
		border-radius: 16px;
		padding: 2rem;
		margin-bottom: 1.5rem;
	}

	.format-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.format-icon {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.format-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	/* Questions Grid */
	.questions-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.question-category {
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.question-category h4 {
		font-size: 1rem;
		font-weight: 600;
		color: #7638FA;
		margin-bottom: 1rem;
	}

	.question-category ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.question-category li {
		font-size: 0.95rem;
		color: #4a5568;
		line-height: 1.5;
		padding-left: 1rem;
		border-left: 2px solid #e2e8f0;
	}

	/* Reflection Section */
	.reflection-section {
		background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
		border-radius: 20px;
		padding: 2.5rem;
		margin-bottom: 0;
	}

	.reflection-tips {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.reflection-item {
		background: white;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.reflection-item strong {
		display: block;
		font-size: 1.1rem;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.reflection-item p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
		margin: 0;
	}

	/* Sidebar */
	.sidebar {
		position: relative;
	}

	.sidebar-sticky {
		position: sticky;
		top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.sidebar-box {
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

	.quick-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.quick-nav a {
		color: #4a5568;
		text-decoration: none;
		font-size: 0.95rem;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		transition: background 0.2s, color 0.2s;
	}

	.quick-nav a:hover {
		background: #e2e8f0;
		color: #1a1a2e;
	}

	.cta-box {
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%);
	}

	.cta-box h3 {
		color: rgba(255, 255, 255, 0.7);
	}

	.cta-box p {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.sidebar-cta {
		display: block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		text-align: center;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.sidebar-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(118, 56, 250, 0.4);
	}

	/* CTA Section */
	.cta-section {
		padding: 5rem 2rem;
		background: linear-gradient(135deg, #D300C5 0%, #FF0069 100%);
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}

	.cta-content > p {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
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

	/* Responsive */
	@media (max-width: 900px) {
		.content-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.sidebar {
			order: -1;
		}

		.sidebar-sticky {
			position: static;
		}

		.quick-nav {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.quick-nav a {
			font-size: 0.85rem;
			padding: 0.4rem 0.6rem;
		}

		.questions-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.hero-section {
			padding: 7rem 1.5rem 5rem;
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

		.guide-section h2,
		.formats-section h2 {
			font-size: 1.5rem;
		}

		.format-card {
			padding: 1.5rem;
		}

		.reflection-section {
			padding: 1.5rem;
		}

		.cta-content h2 {
			font-size: 2rem;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.wave-divider {
			height: 100px;
		}
	}
</style>
