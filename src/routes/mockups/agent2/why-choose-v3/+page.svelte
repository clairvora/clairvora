<!-- Why Choose Clairvora V3: Floating Feature Cards with Image -->
<script lang="ts">
	const features = [
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
			title: 'Global Talent',
			description: 'Handpicked gifted psychics from around the world for genuine, insightful readings.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			title: 'Personalized Options',
			description: 'Choose your ideal connection—call, text, or chat readings tailored to your lifestyle.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
			title: 'Fresh Perspective',
			description: 'A modern approach focused on trust, accuracy, and client satisfaction.'
		}
	];

	const badges = [
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`, text: 'Trusted Psychics' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, text: 'Flexible Readings' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, text: 'Growing Reputation' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, text: 'Private' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, text: 'Global Reach' },
		{ icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, text: 'Convenient' }
	];
</script>

<section class="why-choose">
	<div class="container">
		<div class="layout">
			<div class="content-column">
				<span class="eyebrow">Why Choose Us</span>
				<h2>Why Choose Clairvora?</h2>
				<p class="intro">
					At Clairvora, we believe that everyone deserves access to authentic, world-class
					psychic guidance. Whether you're seeking clarity, comfort, or direction, our
					carefully selected psychics are here to help you unlock the answers you seek.
				</p>

				<div class="badges">
					{#each badges as badge}
						<span class="badge">
							{@html badge.icon}
							{badge.text}
						</span>
					{/each}
				</div>

				<div class="feature-cards">
					{#each features as feature}
						<div class="feature-card">
							<div class="feature-icon">
								{@html feature.icon}
							</div>
							<div class="feature-text">
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="image-column">
				<div class="image-container">
					<div class="image-bg"></div>
					<img src="/woman-happy.jpg" alt="Happy Clairvora client" />
					<div class="floating-stat top">
						<span class="stat-number">50k+</span>
						<span class="stat-label">Happy Clients</span>
					</div>
					<div class="floating-stat bottom">
						<span class="stat-number">4.9</span>
						<span class="stat-label">Average Rating</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #ffffff 0%, #FFF9F0 100%);
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

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #D96C4B 0%, #E8956A 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1.25rem;
		line-height: 1.15;
	}

	.intro {
		font-size: 1.05rem;
		color: #555;
		line-height: 1.7;
		margin-bottom: 1.75rem;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2.5rem;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.375rem 0.75rem;
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 100px;
		font-size: 0.8rem;
		color: #555;
		font-weight: 500;
	}

	.badge :global(svg) {
		color: #D96C4B;
	}

	.feature-cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-card {
		display: flex;
		gap: 1rem;
		padding: 1.25rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		border: 1px solid rgba(0, 0, 0, 0.04);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	}

	.feature-icon {
		width: 44px;
		height: 44px;
		background: linear-gradient(135deg, #FFF0EB 0%, #FFE4DB 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D96C4B;
		flex-shrink: 0;
	}

	.feature-text h3 {
		font-size: 1rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.feature-text p {
		font-size: 0.875rem;
		color: #666;
		line-height: 1.5;
	}

	.image-column {
		position: relative;
	}

	.image-container {
		position: relative;
	}

	.image-bg {
		position: absolute;
		top: 2rem;
		left: 2rem;
		right: -1rem;
		bottom: -1rem;
		background: linear-gradient(135deg, #D96C4B 0%, #E8956A 100%);
		border-radius: 24px;
		opacity: 0.15;
	}

	.image-container img {
		position: relative;
		width: 100%;
		height: auto;
		border-radius: 24px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
	}

	.floating-stat {
		position: absolute;
		background: white;
		padding: 0.875rem 1.25rem;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
		display: flex;
		flex-direction: column;
		z-index: 10;
	}

	.floating-stat.top {
		top: 1.5rem;
		right: -1rem;
	}

	.floating-stat.bottom {
		bottom: 2rem;
		left: -1rem;
	}

	.stat-number {
		font-size: 1.5rem;
		font-weight: 800;
		color: #D96C4B;
		line-height: 1;
	}

	.stat-label {
		font-size: 0.75rem;
		color: #888;
		font-weight: 500;
		margin-top: 0.25rem;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.layout {
			gap: 3rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.floating-stat.top {
			right: 0.5rem;
		}

		.floating-stat.bottom {
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

		.image-bg {
			top: 1rem;
			left: 1rem;
			right: -0.5rem;
			bottom: -0.5rem;
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
			font-size: 0.75rem;
			padding: 0.25rem 0.625rem;
		}

		.feature-card {
			padding: 1rem;
		}

		.floating-stat {
			padding: 0.625rem 1rem;
		}

		.stat-number {
			font-size: 1.25rem;
		}
	}
</style>
