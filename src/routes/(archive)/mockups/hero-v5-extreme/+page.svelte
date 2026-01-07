<!-- Hero Mockup V5: Extreme -->
<!-- Full send - bold gradient hero, Instagram-level vibrancy -->

<div class="hero-section">
	<div class="animated-bg">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>
	<div class="hero-content">
		<div class="center-content">
			<div class="badge">
				<span class="pulse"></span>
				<span>Live Advisors Online Now</span>
			</div>
			<h1 class="headline">
				Clarity in Uncertainty.
			</h1>
			<p class="tagline">Psychic Paths to Understanding</p>
			<p class="subtext">
				Connect with trusted advisors for guidance on love, career, and life's biggest questions.
			</p>
			<div class="cta-group">
				<button class="cta-primary">
					<span>Get Started</span>
					<span class="arrow">→</span>
				</button>
				<button class="cta-secondary">Browse Psychics</button>
			</div>
			<div class="trust-row">
				<div class="avatars">
					<div class="avatar"></div>
					<div class="avatar"></div>
					<div class="avatar"></div>
					<div class="avatar"></div>
				</div>
				<div class="trust-text">
					<span class="stars">★★★★★</span>
					<span>50,000+ readings completed</span>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-image-container">
		<img src="/hero-couple.png" alt="Couple embracing" class="hero-image" />
	</div>
</div>

<style>
	.hero-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 35%, #FF0069 65%, #FF7A00 100%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		position: relative;
		overflow: hidden;
	}

	.animated-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.5;
		animation: float 8s ease-in-out infinite;
	}

	.orb-1 {
		width: 400px;
		height: 400px;
		background: #FFD600;
		top: -100px;
		right: -100px;
		animation-delay: 0s;
	}

	.orb-2 {
		width: 300px;
		height: 300px;
		background: #7638FA;
		bottom: -50px;
		left: -50px;
		animation-delay: -3s;
	}

	.orb-3 {
		width: 250px;
		height: 250px;
		background: #FF0069;
		top: 50%;
		left: 50%;
		animation-delay: -5s;
	}

	@keyframes float {
		0%, 100% { transform: translate(0, 0) scale(1); }
		50% { transform: translate(30px, -30px) scale(1.1); }
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		color: white;
		max-width: 800px;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.9rem;
		margin-bottom: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.pulse {
		width: 8px;
		height: 8px;
		background: #00FF88;
		border-radius: 50%;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(1.2); }
	}

	.headline {
		font-size: 5rem;
		font-weight: 800;
		line-height: 1;
		margin-bottom: 0.5rem;
		text-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
	}

	.tagline {
		font-size: 2rem;
		font-weight: 300;
		opacity: 0.9;
		margin-bottom: 1.5rem;
	}

	.subtext {
		font-size: 1.2rem;
		opacity: 0.85;
		margin-bottom: 2.5rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.6;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 3rem;
	}

	.cta-primary {
		background: white;
		color: #D300C5;
		padding: 1.125rem 2.5rem;
		border-radius: 50px;
		font-weight: 700;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: all 0.3s;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.cta-primary:hover {
		transform: translateY(-3px) scale(1.02);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
	}

	.cta-primary .arrow {
		transition: transform 0.3s;
	}

	.cta-primary:hover .arrow {
		transform: translateX(4px);
	}

	.cta-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		padding: 1.125rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		cursor: pointer;
		transition: all 0.3s;
		backdrop-filter: blur(10px);
	}

	.cta-secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
	}

	.trust-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.avatars {
		display: flex;
	}

	.avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 2px solid white;
		margin-left: -10px;
		background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
	}

	.avatar:first-child {
		margin-left: 0;
	}

	.trust-text {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		opacity: 0.9;
	}

	.stars {
		color: #FFD600;
	}

	.hero-image-container {
		position: absolute;
		bottom: -60px;
		right: 5%;
		z-index: 0;
		opacity: 0.15;
	}

	.hero-image {
		width: 400px;
		height: auto;
	}

	@media (max-width: 768px) {
		.headline {
			font-size: 3rem;
		}

		.tagline {
			font-size: 1.5rem;
		}

		.cta-group {
			flex-direction: column;
			align-items: center;
		}

		.trust-row {
			flex-direction: column;
		}

		.hero-image-container {
			display: none;
		}
	}
</style>
