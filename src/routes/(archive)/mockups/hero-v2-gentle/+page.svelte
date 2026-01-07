<!-- Hero Mockup V2: Gentle -->
<!-- Soft gradient wash, gradient elements present but still predominantly warm/light -->

<div class="hero-section">
	<div class="gradient-wash"></div>
	<div class="hero-content">
		<div class="text-content">
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
			<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
		</div>
	</div>
</div>

<style>
	.hero-section {
		background: #FFF9F0;
		min-height: 90vh;
		display: flex;
		align-items: center;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.gradient-wash {
		position: absolute;
		top: -50%;
		right: -20%;
		width: 80%;
		height: 150%;
		background: radial-gradient(ellipse at center, rgba(118, 56, 250, 0.08) 0%, rgba(211, 0, 197, 0.05) 40%, transparent 70%);
		pointer-events: none;
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

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		color: #1a1a1a;
		margin-bottom: 1.5rem;
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
		background: linear-gradient(135deg, #FF7A00 0%, #FF0069 100%);
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
		box-shadow: 0 10px 30px rgba(255, 0, 105, 0.3);
	}

	.cta-secondary {
		background: white;
		color: #1a1a1a;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid #e0e0e0;
		cursor: pointer;
		transition: border-color 0.2s, background 0.2s;
	}

	.cta-secondary:hover {
		border-color: #D300C5;
		background: #fff;
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

		.gradient-wash {
			top: -30%;
			right: -50%;
			width: 150%;
		}
	}
</style>
