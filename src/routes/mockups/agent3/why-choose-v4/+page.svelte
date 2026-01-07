<!-- Why Choose V4: Minimal with numbered features -->
<script lang="ts">
	import {
		UsersFour, Sparkle, GlobeHemisphereWest, CheckCircle,
		ShieldCheck, Lightbulb, Eye, Heart, Star
	} from 'phosphor-svelte';
</script>

<section class="why-choose">
	<div class="container">
		<div class="header">
			<h2>Why Choose <span class="highlight">Clairvora</span>?</h2>
			<p class="intro">At Clairvora, we believe that everyone deserves access to authentic, world-class psychic guidance. Whether you're seeking clarity, comfort, or direction, our carefully selected psychics are here to help you unlock the answers you seek.</p>
		</div>

		<div class="badges-strip">
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
			<div class="feature">
				<div class="feature-num">01</div>
				<div class="feature-content">
					<div class="feature-header">
						<GlobeHemisphereWest size={20} weight="fill" />
						<h3>Global Talent</h3>
					</div>
					<p>We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.</p>
				</div>
			</div>

			<div class="feature">
				<div class="feature-num">02</div>
				<div class="feature-content">
					<div class="feature-header">
						<UsersFour size={20} weight="fill" />
						<h3>Personalized Options</h3>
					</div>
					<p>Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.</p>
				</div>
			</div>

			<div class="feature">
				<div class="feature-num">03</div>
				<div class="feature-content">
					<div class="feature-header">
						<Sparkle size={20} weight="fill" />
						<h3>Fresh Perspective</h3>
					</div>
					<p>As a newer platform, we bring a fresh approach to psychic readings, focusing on trust, accuracy, and client satisfaction.</p>
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
		max-width: 900px;
		margin: 0 auto;
	}

	.header {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.highlight {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.intro {
		font-size: 1.05rem;
		color: #64748b;
		line-height: 1.7;
		max-width: 650px;
	}

	.badges-strip {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(118, 56, 250, 0.1);
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.4rem 0.875rem;
		background: white;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 500;
		color: #1a1a2e;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
	}

	.badge :global(svg) {
		color: #7638FA;
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.feature {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		padding: 1.5rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 2px 12px rgba(118, 56, 250, 0.06);
		transition: transform 0.3s;
	}

	.feature:hover {
		transform: translateX(6px);
	}

	.feature-num {
		font-size: 1.25rem;
		font-weight: 700;
		color: rgba(118, 56, 250, 0.2);
		font-family: monospace;
		flex-shrink: 0;
	}

	.feature-content {
		flex: 1;
	}

	.feature-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.35rem;
		color: #D300C5;
	}

	.feature-header h3 {
		font-size: 1.05rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.feature-content p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 2rem;
		}

		.feature {
			padding: 1.25rem;
		}
	}

	@media (max-width: 480px) {
		.why-choose {
			padding: 4rem 1.5rem;
		}

		.badges-strip {
			gap: 0.4rem;
		}

		.badge {
			padding: 0.35rem 0.65rem;
			font-size: 0.75rem;
		}
	}
</style>
