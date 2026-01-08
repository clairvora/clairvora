<!-- Why Choose Clairvora V4: Numbered Features with Vertical Line -->
<script lang="ts">
	const features = [
		{
			number: '01',
			title: 'Global Talent',
			description: 'We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.',
			highlight: 'psychics'
		},
		{
			number: '02',
			title: 'Personalized Options',
			description: 'Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.',
			highlight: null
		},
		{
			number: '03',
			title: 'Fresh Perspective',
			description: 'As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.',
			highlight: null
		}
	];

	const quickFeatures = [
		'Trusted Psychics',
		'Flexible Readings',
		'Growing Reputation',
		'Tailored Guidance',
		'Global Reach',
		'Convenient',
		'Private',
		'Clarity & Insight',
		'Authentic'
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
					<a href="/psychics">psychic guidance</a>. Whether you're seeking clarity, comfort, or direction, our
					carefully selected psychics are here to help you unlock the answers you seek.
				</p>

				<div class="quick-features">
					{#each quickFeatures as feature}
						<span class="quick-feature">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
								<polyline points="20 6 9 17 4 12"/>
							</svg>
							{feature}
						</span>
					{/each}
				</div>

				<div class="numbered-features">
					{#each features as feature, index}
						<div class="numbered-feature">
							<div class="number-column">
								<span class="number">{feature.number}</span>
								{#if index < features.length - 1}
									<div class="connector-line"></div>
								{/if}
							</div>
							<div class="feature-content">
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="image-column">
				<div class="image-frame">
					<img src="/woman-happy.jpg" alt="Happy Clairvora client" />
					<div class="frame-accent"></div>
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

	.layout {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 5rem;
		align-items: center;
	}

	.eyebrow {
		display: inline-block;
		color: #D96C4B;
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

	.intro a {
		color: #D96C4B;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.intro a:hover {
		color: #c25a3a;
	}

	.quick-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.625rem 1rem;
		margin-bottom: 2.5rem;
	}

	.quick-feature {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		font-size: 0.875rem;
		color: #444;
		font-weight: 500;
	}

	.quick-feature svg {
		color: #D96C4B;
	}

	.numbered-features {
		display: flex;
		flex-direction: column;
	}

	.numbered-feature {
		display: flex;
		gap: 1.25rem;
	}

	.number-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
	}

	.number {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #D96C4B 0%, #E8956A 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 0.875rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.connector-line {
		flex: 1;
		width: 2px;
		background: linear-gradient(180deg, #D96C4B 0%, rgba(217, 108, 75, 0.2) 100%);
		margin: 0.5rem 0;
		min-height: 40px;
	}

	.feature-content {
		padding-bottom: 1.75rem;
	}

	.feature-content h3 {
		font-size: 1.125rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature-content p {
		font-size: 0.925rem;
		color: #666;
		line-height: 1.65;
	}

	.image-column {
		position: relative;
	}

	.image-frame {
		position: relative;
	}

	.image-frame img {
		width: 100%;
		height: auto;
		border-radius: 20px;
		box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.18);
		position: relative;
		z-index: 2;
	}

	.frame-accent {
		position: absolute;
		top: -1rem;
		right: -1rem;
		width: 60%;
		height: 60%;
		border: 3px solid #D96C4B;
		border-radius: 20px;
		z-index: 1;
		opacity: 0.3;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.layout {
			gap: 3rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.frame-accent {
			top: -0.75rem;
			right: -0.75rem;
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

		.quick-features {
			gap: 0.5rem 0.75rem;
		}

		.quick-feature {
			font-size: 0.8rem;
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

		.number {
			width: 40px;
			height: 40px;
			font-size: 0.75rem;
		}

		.numbered-feature {
			gap: 1rem;
		}

		.feature-content h3 {
			font-size: 1rem;
		}

		.frame-accent {
			display: none;
		}
	}
</style>
