<!-- Hero Mockup V1: Subtle -->
<!-- Mostly current cream/warm feel, gradient only in small accents (button, text highlight) -->

<div class="hero-section">
	<div class="hero-content">
		<div class="text-content">
			<h1 class="headline">
				Clarity in Uncertainty.<br />
				<span class="gradient-text">Psychic Paths</span> to Understanding
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
			<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
		</div>
	</div>
</div>

<style>
	.hero-section {
		background: linear-gradient(135deg, #FFF9F0 0%, #FFF5E6 50%, #FFFAF5 100%);
		min-height: 90vh;
		display: flex;
		align-items: center;
		padding: 2rem;
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		color: #1a1a1a;
		margin-bottom: 1.5rem;
	}

	.gradient-text {
		background: linear-gradient(90deg, #7638FA 0%, #D300C5 50%, #FF7A00 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtext {
		font-size: 1.25rem;
		color: #555;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.cta-primary {
		background: linear-gradient(135deg, #FF7A00 0%, #FF0069 50%, #D300C5 100%);
		color: white;
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
		box-shadow: 0 10px 30px rgba(211, 0, 197, 0.3);
	}

	.cta-secondary {
		background: transparent;
		color: #1a1a1a;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid #ddd;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.cta-secondary:hover {
		border-color: #D300C5;
	}

	.trust-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #666;
		font-size: 0.95rem;
	}

	.stars {
		color: #FF7A00;
	}

	.image-content {
		position: relative;
	}

	.hero-image {
		width: 100%;
		height: auto;
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
