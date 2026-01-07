<!-- Why Choose V5: Compact with inline features -->
<script lang="ts">
	import {
		UsersFour, Sparkle, GlobeHemisphereWest, CheckCircle,
		ShieldCheck, Lightbulb, Eye, Heart, Star
	} from 'phosphor-svelte';
</script>

<section class="why-choose">
	<div class="container">
		<div class="top-row">
			<div class="text-block">
				<h2>Why Choose Clairvora?</h2>
				<p class="intro">At Clairvora, we believe that everyone deserves access to authentic, world-class psychic guidance. Whether you're seeking clarity, comfort, or direction, our carefully selected psychics are here to help you unlock the answers you seek.</p>
			</div>

			<div class="badges-block">
				<div class="badges">
					<div class="badge"><UsersFour size={16} weight="fill" /> Trusted Psychics</div>
					<div class="badge"><Sparkle size={16} weight="fill" /> Flexible Readings</div>
					<div class="badge"><Star size={16} weight="fill" /> Growing Reputation</div>
					<div class="badge"><CheckCircle size={16} weight="fill" /> Tailored Guidance</div>
					<div class="badge"><GlobeHemisphereWest size={16} weight="fill" /> Global Reach</div>
					<div class="badge"><Heart size={16} weight="fill" /> Convenient</div>
					<div class="badge"><ShieldCheck size={16} weight="fill" /> Private</div>
					<div class="badge"><Lightbulb size={16} weight="fill" /> Clarity & Insight</div>
					<div class="badge"><Eye size={16} weight="fill" /> Authentic</div>
				</div>
			</div>
		</div>

		<div class="features-row">
			<div class="feature">
				<div class="feature-icon">
					<GlobeHemisphereWest size={22} weight="fill" />
				</div>
				<h3>Global Talent</h3>
				<p>We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.</p>
			</div>

			<div class="feature">
				<div class="feature-icon">
					<UsersFour size={22} weight="fill" />
				</div>
				<h3>Personalized Options</h3>
				<p>Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.</p>
			</div>

			<div class="feature">
				<div class="feature-icon">
					<Sparkle size={22} weight="fill" />
				</div>
				<h3>Fresh Perspective</h3>
				<p>As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.why-choose {
		padding: 5rem 2rem;
		background: #ffffff;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.top-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid #f1f1f1;
	}

	h2 {
		font-size: 2.25rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.intro {
		font-size: 1rem;
		color: #64748b;
		line-height: 1.7;
	}

	.badges {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: #1a1a2e;
		padding: 0.5rem 0;
	}

	.badge :global(svg) {
		color: #D300C5;
		flex-shrink: 0;
	}

	.features-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.feature {
		text-align: left;
	}

	.feature-icon {
		width: 44px;
		height: 44px;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.1) 0%, rgba(211, 0, 197, 0.1) 100%);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #D300C5;
		margin-bottom: 1rem;
	}

	.feature h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature p {
		font-size: 0.875rem;
		color: #64748b;
		line-height: 1.5;
	}

	@media (max-width: 868px) {
		.top-row {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		h2 {
			font-size: 2rem;
		}

		.badges {
			grid-template-columns: repeat(2, 1fr);
		}

		.features-row {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 3rem 1.5rem;
		}

		.badges {
			grid-template-columns: 1fr;
		}
	}
</style>
