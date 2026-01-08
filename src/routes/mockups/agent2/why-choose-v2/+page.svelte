<!-- Why Choose Clairvora V2: Modern Split Layout with Image -->
<script lang="ts">
	const features = [
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
			title: 'Global Talent',
			description: 'We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			title: 'Personalized Options',
			description: 'Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
			title: 'Fresh Perspective',
			description: 'As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.'
		}
	];

	const highlights = [
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`, text: 'Trusted Psychics' },
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, text: 'Private & Secure' },
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, text: '24/7 Available' },
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, text: 'Authentic Readings' },
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, text: 'Global Reach' },
		{ icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, text: 'Growing Reputation' }
	];
</script>

<section class="why-choose">
	<div class="container">
		<div class="content-grid">
			<div class="content-side">
				<span class="eyebrow">Why Clairvora</span>
				<h2>Why Choose Clairvora?</h2>
				<p class="intro">
					At Clairvora, we believe that everyone deserves access to authentic, world-class
					psychic guidance. Whether you're seeking clarity, comfort, or direction, our
					carefully selected psychics are here to help you unlock the answers you seek.
				</p>

				<div class="highlights-grid">
					{#each highlights as highlight}
						<div class="highlight">
							<span class="highlight-icon">{@html highlight.icon}</span>
							<span class="highlight-text">{highlight.text}</span>
						</div>
					{/each}
				</div>

				<div class="features">
					{#each features as feature}
						<div class="feature">
							<div class="feature-icon">
								{@html feature.icon}
							</div>
							<div class="feature-content">
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="image-side">
				<div class="image-wrapper">
					<img src="/woman-happy.jpg?v=2" alt="Happy Clairvora client" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 6rem 2rem;
		background: #FFF9F0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.content-side {
		padding-right: 2rem;
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

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1.25rem;
		line-height: 1.2;
	}

	.intro {
		font-size: 1.05rem;
		color: #555;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem 1rem;
		margin-bottom: 2.5rem;
	}

	.highlight {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.highlight-icon {
		color: #D96C4B;
		display: flex;
		align-items: center;
	}

	.highlight-text {
		font-size: 0.9rem;
		color: #444;
		font-weight: 500;
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.feature {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.feature-icon {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, rgba(217, 108, 75, 0.1) 0%, rgba(217, 108, 75, 0.15) 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D96C4B;
		flex-shrink: 0;
	}

	.feature-content h3 {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.375rem;
	}

	.feature-content p {
		font-size: 0.925rem;
		color: #666;
		line-height: 1.6;
	}

	.image-side {
		position: relative;
	}

	.image-wrapper {
		position: relative;
	}

	.image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.content-grid {
			gap: 3rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.highlights-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Mobile */
	@media (max-width: 768px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.content-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.content-side {
			padding-right: 0;
			order: 2;
		}

		.image-side {
			order: 1;
		}

		h2 {
			font-size: 2rem;
		}

		.highlights-grid {
			grid-template-columns: repeat(2, 1fr);
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

		.highlights-grid {
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
		}

		.highlight-text {
			font-size: 0.85rem;
		}

		.feature-icon {
			width: 40px;
			height: 40px;
		}
	}
</style>
