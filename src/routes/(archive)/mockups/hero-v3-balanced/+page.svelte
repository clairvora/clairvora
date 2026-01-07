<!-- Hero Mockup V3: Balanced -->
<!-- Gradient takes prominent role but paired with cream sections, clear blend of both worlds -->

<div class="hero-section">
	<div class="gradient-side">
		<div class="gradient-content">
			<h1 class="headline">
				Clarity in<br />Uncertainty.
			</h1>
			<p class="tagline">Psychic Paths to Understanding</p>
		</div>
	</div>
	<div class="cream-side">
		<div class="cream-content">
			<div class="image-wrapper">
				<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
			</div>
			<div class="info-card">
				<p class="description">
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
		</div>
	</div>
</div>

<style>
	.hero-section {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.gradient-side {
		background: linear-gradient(160deg, #7638FA 0%, #D300C5 50%, #FF7A00 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem;
	}

	.gradient-content {
		color: white;
	}

	.headline {
		font-size: 4.5rem;
		font-weight: 700;
		line-height: 1.05;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: 1.5rem;
		opacity: 0.9;
		font-weight: 400;
	}

	.cream-side {
		background: linear-gradient(135deg, #FFF9F0 0%, #FFF5E6 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem;
	}

	.cream-content {
		max-width: 500px;
	}

	.image-wrapper {
		margin-bottom: 2rem;
	}

	.hero-image {
		width: 100%;
		height: auto;
	}

	.info-card {
		background: white;
		padding: 2rem;
		border-radius: 16px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
	}

	.description {
		font-size: 1.1rem;
		color: #555;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.cta-primary {
		background: linear-gradient(135deg, #D300C5 0%, #FF0069 100%);
		color: white;
		padding: 0.875rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
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
		padding: 0.875rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		border: 2px solid #e0e0e0;
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
		font-size: 0.9rem;
	}

	.stars {
		color: #FF7A00;
	}

	@media (max-width: 968px) {
		.hero-section {
			grid-template-columns: 1fr;
		}

		.gradient-side {
			padding: 3rem 2rem;
			text-align: center;
		}

		.headline {
			font-size: 3rem;
		}

		.cream-side {
			padding: 2rem;
		}

		.cta-group {
			flex-direction: column;
		}

		.trust-badge {
			justify-content: center;
		}
	}
</style>
