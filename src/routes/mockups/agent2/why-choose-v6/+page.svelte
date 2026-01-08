<!-- Why Choose Clairvora V6: Accent Border Cards with Gradient -->
<script lang="ts">
	const features = [
		{
			icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
			title: 'Global Talent',
			description: 'We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.'
		},
		{
			icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			title: 'Personalized Options',
			description: 'Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.'
		},
		{
			icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
			title: 'Fresh Perspective',
			description: 'As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.'
		}
	];

	const badges = [
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`, text: 'Trusted Psychics' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, text: 'Flexible Readings' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, text: 'Global Reach' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, text: 'Private & Secure' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, text: 'Convenient' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, text: 'Growing Reputation' }
	];
</script>

<section class="why-choose">
	<div class="container">
		<div class="layout">
			<div class="content-column">
				<div class="header">
					<span class="eyebrow">Our Promise</span>
					<h2>Why Choose Clairvora?</h2>
					<p class="intro">
						At Clairvora, we believe that everyone deserves access to authentic, world-class
						<a href="/psychics">psychic guidance</a>. Whether you're seeking clarity, comfort, or direction, our
						carefully selected psychics are here to help you unlock the answers you seek.
					</p>
				</div>

				<div class="badges-wrap">
					{#each badges as badge}
						<span class="badge">
							{@html badge.icon}
							{badge.text}
						</span>
					{/each}
				</div>

				<div class="feature-cards">
					{#each features as feature, index}
						<div class="feature-card" style="--accent-offset: {index * 0.1}">
							<div class="card-accent"></div>
							<div class="card-content">
								<div class="feature-icon">
									{@html feature.icon}
								</div>
								<div class="feature-text">
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="image-column">
				<div class="image-container">
					<div class="gradient-bg"></div>
					<div class="image-frame">
						<img src="/woman-happy.jpg" alt="Happy Clairvora client" />
					</div>
					<div class="trust-badge">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
						<div class="trust-text">
							<span class="trust-title">Trusted Platform</span>
							<span class="trust-subtitle">50,000+ readings delivered</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #FFF9F0 0%, #ffffff 50%, #FFF9F0 100%);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.layout {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.header {
		margin-bottom: 1.5rem;
	}

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #D96C4B 0%, #E8956A 100%);
		color: white;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 0.375rem 0.875rem;
		border-radius: 100px;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		line-height: 1.15;
	}

	.intro {
		font-size: 1.025rem;
		color: #555;
		line-height: 1.7;
	}

	.intro a {
		color: #D96C4B;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.intro a:hover {
		color: #c25a3a;
	}

	.badges-wrap {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2rem;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.7rem;
		background: white;
		border: 1px solid #e8e8e8;
		border-radius: 100px;
		font-size: 0.775rem;
		color: #555;
		font-weight: 500;
	}

	.badge :global(svg) {
		color: #D96C4B;
		flex-shrink: 0;
	}

	.feature-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-card {
		position: relative;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		overflow: hidden;
	}

	.card-accent {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, #D96C4B 0%, #E8956A 100%);
	}

	.card-content {
		display: flex;
		gap: 1rem;
		padding: 1.25rem 1.25rem 1.25rem 1.5rem;
	}

	.feature-icon {
		width: 52px;
		height: 52px;
		background: linear-gradient(135deg, #FFF0EB 0%, #FFE8E0 100%);
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D96C4B;
		flex-shrink: 0;
	}

	.feature-text h3 {
		font-size: 1.05rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.35rem;
	}

	.feature-text p {
		font-size: 0.875rem;
		color: #666;
		line-height: 1.55;
	}

	.image-column {
		position: relative;
	}

	.image-container {
		position: relative;
	}

	.gradient-bg {
		position: absolute;
		top: 2rem;
		left: 2rem;
		right: -0.5rem;
		bottom: -0.5rem;
		background: linear-gradient(135deg, #D96C4B 0%, #E8956A 50%, #F4B896 100%);
		border-radius: 28px;
		opacity: 0.2;
	}

	.image-frame {
		position: relative;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.2);
	}

	.image-frame img {
		width: 100%;
		height: auto;
		display: block;
	}

	.trust-badge {
		position: absolute;
		bottom: 1.5rem;
		left: -1rem;
		background: white;
		padding: 0.875rem 1.25rem;
		border-radius: 14px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		gap: 0.75rem;
		z-index: 10;
	}

	.trust-badge svg {
		color: #D96C4B;
	}

	.trust-text {
		display: flex;
		flex-direction: column;
	}

	.trust-title {
		font-size: 0.9rem;
		font-weight: 700;
		color: #1a1a2e;
		line-height: 1.2;
	}

	.trust-subtitle {
		font-size: 0.75rem;
		color: #888;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.layout {
			gap: 3rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.gradient-bg {
			top: 1.5rem;
			left: 1.5rem;
		}

		.trust-badge {
			left: 0.5rem;
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.layout {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.content-column {
			order: 2;
		}

		.image-column {
			order: 1;
		}

		h2 {
			font-size: 2rem;
		}

		.gradient-bg {
			top: 1rem;
			left: 1rem;
			right: -0.25rem;
			bottom: -0.25rem;
		}

		.trust-badge {
			left: 50%;
			transform: translateX(-50%);
			bottom: -1rem;
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 3rem 1rem;
		}

		h2 {
			font-size: 1.75rem;
		}

		.intro {
			font-size: 1rem;
		}

		.badge {
			font-size: 0.725rem;
			padding: 0.3rem 0.6rem;
		}

		.card-content {
			padding: 1rem 1rem 1rem 1.25rem;
		}

		.feature-icon {
			width: 44px;
			height: 44px;
		}

		.trust-badge {
			padding: 0.75rem 1rem;
		}

		.gradient-bg {
			display: none;
		}
	}
</style>
