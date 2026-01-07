<!-- Why Choose V2: Centered header with 3-column feature cards -->
<script lang="ts">
	import {
		UsersFour, Sparkle, GlobeHemisphereWest, CheckCircle,
		ShieldCheck, Lightbulb, Eye, Heart, Star
	} from 'phosphor-svelte';
</script>

<section class="why-choose">
	<div class="container">
		<div class="header">
			<h2>Why Choose Clairvora?</h2>
			<p class="intro">At Clairvora, we believe that everyone deserves access to authentic, world-class psychic guidance. Whether you're seeking clarity, comfort, or direction, our carefully selected psychics are here to help you unlock the answers you seek.</p>
		</div>

		<div class="badges-row">
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

		<div class="features">
			<div class="feature-card">
				<div class="feature-icon">
					<GlobeHemisphereWest size={28} weight="fill" />
				</div>
				<h3>Global Talent</h3>
				<p>We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<UsersFour size={28} weight="fill" />
				</div>
				<h3>Personalized Options</h3>
				<p>Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<Sparkle size={28} weight="fill" />
				</div>
				<h3>Fresh Perspective</h3>
				<p>As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.</p>
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
		max-width: 1000px;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.intro {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
		max-width: 700px;
		margin: 0 auto;
	}

	.badges-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 1rem;
		background: white;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 500;
		color: #1a1a2e;
		box-shadow: 0 2px 8px rgba(118, 56, 250, 0.08);
	}

	.badge :global(svg) {
		color: #7638FA;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.feature-card {
		background: white;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.08);
		transition: transform 0.3s;
	}

	.feature-card:hover {
		transform: translateY(-4px);
	}

	.feature-icon {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin: 0 auto 1.25rem;
	}

	.feature-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature-card p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 2rem;
		}

		.features {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.feature-card {
			padding: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.badges-row {
			gap: 0.5rem;
		}

		.badge {
			padding: 0.4rem 0.75rem;
			font-size: 0.75rem;
		}
	}
</style>
