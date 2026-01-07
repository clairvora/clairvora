<!-- Why Choose V1: Clean two-column with badge grid and stacked features -->
<script lang="ts">
	import {
		UsersFour, Sparkle, GlobeHemisphereWest, CheckCircle,
		ShieldCheck, Lightbulb, Eye, Heart, Star
	} from 'phosphor-svelte';
</script>

<section class="why-choose">
	<div class="container">
		<div class="layout">
			<div class="left-col">
				<h2>Why Choose Clairvora?</h2>
				<p class="intro">At Clairvora, we believe that everyone deserves access to authentic, world-class psychic guidance. Whether you're seeking clarity, comfort, or direction, our carefully selected psychics are here to help you unlock the answers you seek.</p>

				<div class="badges">
					<div class="badge"><UsersFour size={18} weight="bold" /> Trusted Psychics</div>
					<div class="badge"><Sparkle size={18} weight="bold" /> Flexible Readings</div>
					<div class="badge"><Star size={18} weight="bold" /> Growing Reputation</div>
					<div class="badge"><CheckCircle size={18} weight="bold" /> Tailored Guidance</div>
					<div class="badge"><GlobeHemisphereWest size={18} weight="bold" /> Global Reach</div>
					<div class="badge"><Heart size={18} weight="bold" /> Convenient</div>
					<div class="badge"><ShieldCheck size={18} weight="bold" /> Private</div>
					<div class="badge"><Lightbulb size={18} weight="bold" /> Clarity & Insight</div>
					<div class="badge"><Eye size={18} weight="bold" /> Authentic</div>
				</div>
			</div>

			<div class="right-col">
				<div class="feature">
					<div class="feature-icon">
						<GlobeHemisphereWest size={24} weight="fill" />
					</div>
					<div class="feature-content">
						<h3>Global Talent</h3>
						<p>We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon">
						<UsersFour size={24} weight="fill" />
					</div>
					<div class="feature-content">
						<h3>Personalized Options</h3>
						<p>Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon">
						<Sparkle size={24} weight="fill" />
					</div>
					<div class="feature-content">
						<h3>Fresh Perspective</h3>
						<p>As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.layout {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.intro {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.badges {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		font-weight: 500;
		color: #1a1a2e;
	}

	.badge :global(svg) {
		color: #7638FA;
		flex-shrink: 0;
	}

	.right-col {
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
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D300C5;
		flex-shrink: 0;
	}

	.feature-content h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.35rem;
	}

	.feature-content p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	@media (max-width: 868px) {
		.layout {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		h2 {
			font-size: 2rem;
		}

		.badges {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.badges {
			grid-template-columns: 1fr;
		}
	}
</style>
