<!-- Why Choose V3: Dark section with glowing accents -->
<script lang="ts">
	import {
		UsersFour, Sparkle, GlobeHemisphereWest, CheckCircle,
		ShieldCheck, Lightbulb, Eye, Heart, Star
	} from 'phosphor-svelte';
</script>

<section class="why-choose">
	<div class="glow glow-1"></div>
	<div class="glow glow-2"></div>

	<div class="container">
		<div class="layout">
			<div class="left-col">
				<span class="eyebrow">Why Us</span>
				<h2>Why Choose Clairvora?</h2>
				<p class="intro">At Clairvora, we believe that everyone deserves access to authentic, world-class psychic guidance. Whether you're seeking clarity, comfort, or direction, our carefully selected psychics are here to help you unlock the answers you seek.</p>

				<div class="badges">
					<div class="badge"><UsersFour size={16} weight="bold" /> Trusted Psychics</div>
					<div class="badge"><Sparkle size={16} weight="bold" /> Flexible Readings</div>
					<div class="badge"><Star size={16} weight="bold" /> Growing Reputation</div>
					<div class="badge"><CheckCircle size={16} weight="bold" /> Tailored Guidance</div>
					<div class="badge"><GlobeHemisphereWest size={16} weight="bold" /> Global Reach</div>
					<div class="badge"><Heart size={16} weight="bold" /> Convenient</div>
					<div class="badge"><ShieldCheck size={16} weight="bold" /> Private</div>
					<div class="badge"><Lightbulb size={16} weight="bold" /> Clarity & Insight</div>
					<div class="badge"><Eye size={16} weight="bold" /> Authentic</div>
				</div>
			</div>

			<div class="right-col">
				<div class="feature">
					<div class="feature-icon icon-1">
						<GlobeHemisphereWest size={24} weight="fill" />
					</div>
					<div class="feature-content">
						<h3>Global Talent</h3>
						<p>We handpick the most gifted psychics from around the world to ensure you receive genuine, insightful readings.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon icon-2">
						<UsersFour size={24} weight="fill" />
					</div>
					<div class="feature-content">
						<h3>Personalized Options</h3>
						<p>Choose the type of connection that suits you best—call, text, or chat readings—all designed to fit seamlessly into your life.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon icon-3">
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
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%);
		position: relative;
		overflow: hidden;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.25;
		pointer-events: none;
	}

	.glow-1 {
		width: 400px;
		height: 400px;
		background: #7638FA;
		top: -100px;
		left: -100px;
	}

	.glow-2 {
		width: 300px;
		height: 300px;
		background: #FF0069;
		bottom: -50px;
		right: -50px;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.layout {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.eyebrow {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		color: #D300C5;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.intro {
		font-size: 1.05rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.badges {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.6rem;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
	}

	.badge :global(svg) {
		color: #D300C5;
		flex-shrink: 0;
	}

	.right-col {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.feature {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 1.25rem;
		backdrop-filter: blur(10px);
		transition: transform 0.3s, background 0.3s;
	}

	.feature:hover {
		transform: translateX(8px);
		background: rgba(255, 255, 255, 0.08);
	}

	.feature-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.icon-1 { background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%); }
	.icon-2 { background: linear-gradient(135deg, #D300C5 0%, #FF0069 100%); }
	.icon-3 { background: linear-gradient(135deg, #FF0069 0%, #FF7A00 100%); }

	.feature-content h3 {
		font-size: 1rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.25rem;
	}

	.feature-content p {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.6);
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

		.feature {
			flex-direction: column;
			text-align: center;
		}

		.feature-icon {
			margin: 0 auto;
		}
	}
</style>
