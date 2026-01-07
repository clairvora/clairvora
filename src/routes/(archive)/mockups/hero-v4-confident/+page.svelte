<!-- Hero Mockup V4: Confident -->
<!-- Gradient more dominant, warm tones still present in content area and secondary elements -->

<div class="hero-section">
	<div class="hero-content">
		<div class="text-content">
			<span class="eyebrow">Find Your Guide</span>
			<h1 class="headline">
				Clarity in Uncertainty.<br />
				Psychic Paths to Understanding
			</h1>
			<p class="subtext">
				Connect with trusted advisors for guidance on love, career, and life's biggest questions.
			</p>
			<div class="cta-group">
				<button class="cta-primary">Get Started</button>
				<button class="cta-secondary">Browse Psychics</button>
			</div>
			<div class="trust-badge">
				<span class="stars">★★★★★</span>
				<span>Trusted by 50,000+ clients</span>
			</div>
		</div>
		<div class="image-content">
			<div class="image-glow"></div>
			<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
		</div>
	</div>
	<div class="cream-strip"></div>
</div>

<style>
	.hero-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.cream-strip {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120px;
		background: linear-gradient(to top, #FFF9F0 0%, transparent 100%);
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.text-content {
		color: white;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.subtext {
		font-size: 1.25rem;
		opacity: 0.9;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.cta-primary {
		background: white;
		color: #D300C5;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.cta-secondary {
		background: transparent;
		color: white;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		cursor: pointer;
		transition: border-color 0.2s, background 0.2s;
	}

	.cta-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	.trust-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.stars {
		color: #FFD600;
	}

	.image-content {
		position: relative;
	}

	.image-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 120%;
		height: 120%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
		pointer-events: none;
	}

	.hero-image {
		width: 140%;
		max-width: none;
		height: auto;
		position: relative;
		z-index: 1;
		margin-left: -20%;
	}

	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.headline {
			font-size: 2.5rem;
		}

		.cta-group {
			justify-content: center;
			flex-wrap: wrap;
		}

		.trust-badge {
			justify-content: center;
		}
	}
</style>
