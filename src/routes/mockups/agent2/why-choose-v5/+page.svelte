<!-- Why Choose Clairvora V5: Minimal Clean with Large Image -->
<script lang="ts">
	const features = [
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
			title: 'Global Talent',
			description: 'Handpicked gifted psychics from around the world.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			title: 'Personalized Options',
			description: 'Call, text, or chat—whatever suits you best.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
			title: 'Fresh Perspective',
			description: 'Modern approach focused on trust and accuracy.'
		}
	];

	const stats = [
		{ value: '50K+', label: 'Clients Helped' },
		{ value: '4.9', label: 'Star Rating' },
		{ value: '200+', label: 'Advisors' }
	];
</script>

<section class="why-choose">
	<div class="container">
		<div class="layout">
			<div class="content-column">
				<h2>Why Choose<br />Clairvora?</h2>
				<p class="intro">
					At Clairvora, we believe everyone deserves access to authentic, world-class
					psychic guidance. Our carefully selected psychics help you unlock the answers you seek.
				</p>

				<div class="features">
					{#each features as feature}
						<div class="feature">
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

				<div class="stats-row">
					{#each stats as stat}
						<div class="stat">
							<span class="stat-value">{stat.value}</span>
							<span class="stat-label">{stat.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<div class="image-column">
				<div class="image-wrapper">
					<img src="/woman-happy.jpg" alt="Happy Clairvora client" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 6rem 2rem;
		background: #ffffff;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.layout {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 5rem;
		align-items: center;
	}

	h2 {
		font-size: 3.25rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1.5rem;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.intro {
		font-size: 1.1rem;
		color: #666;
		line-height: 1.7;
		margin-bottom: 2.5rem;
		max-width: 440px;
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}

	.feature {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.feature-icon {
		width: 48px;
		height: 48px;
		background: #FFF9F0;
		border-radius: 12px;
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
		margin-bottom: 0.25rem;
	}

	.feature-text p {
		font-size: 0.9rem;
		color: #777;
		line-height: 1.5;
	}

	.stats-row {
		display: flex;
		gap: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.stat {
		display: flex;
		flex-direction: column;
	}

	.stat-value {
		font-size: 2rem;
		font-weight: 800;
		color: #D96C4B;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.stat-label {
		font-size: 0.8rem;
		color: #888;
		margin-top: 0.375rem;
		font-weight: 500;
	}

	.image-column {
		position: relative;
	}

	.image-wrapper {
		position: relative;
		overflow: hidden;
		border-radius: 32px;
	}

	.image-wrapper img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.layout {
			gap: 3rem;
		}

		h2 {
			font-size: 2.5rem;
		}

		.stats-row {
			gap: 2rem;
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
			font-size: 2.25rem;
		}

		h2 br {
			display: none;
		}

		.intro {
			max-width: none;
		}

		.image-wrapper {
			border-radius: 24px;
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 3rem 1rem;
		}

		h2 {
			font-size: 2rem;
		}

		.intro {
			font-size: 1rem;
		}

		.stats-row {
			gap: 1.5rem;
		}

		.stat-value {
			font-size: 1.5rem;
		}

		.feature-icon {
			width: 40px;
			height: 40px;
		}

		.image-wrapper {
			border-radius: 20px;
		}
	}
</style>
