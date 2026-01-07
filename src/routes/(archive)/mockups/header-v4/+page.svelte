<!-- Header Mockup V4: Split Layout -->
<!-- Logo left, nav center, actions right with clear separation -->

<header class="header">
	<div class="header-content">
		<a href="/" class="logo">
			<div class="logo-mark">C</div>
			<span class="logo-text">Clairvora</span>
		</a>
		<nav class="nav">
			<a href="/psychics" class="nav-link">
				<span class="nav-icon">👁</span>
				Psychics
			</a>
			<a href="/how-it-works" class="nav-link">
				<span class="nav-icon">✨</span>
				How It Works
			</a>
			<a href="/about" class="nav-link">
				<span class="nav-icon">💫</span>
				About
			</a>
		</nav>
		<div class="header-actions">
			<a href="/login" class="login-link">Sign In</a>
			<a href="/signup" class="cta-button">
				<span>Get Started</span>
				<span class="arrow">→</span>
			</a>
		</div>
	</div>
</header>

<div class="hero-section">
	<div class="animated-bg">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>
	<div class="hero-content">
		<div class="text-content">
			<span class="eyebrow">Find Your Guide</span>
			<h1 class="headline">
				<span class="headline-main">Clarity in Uncertainty.</span>
				<span class="headline-sub">Psychic Paths to Understanding</span>
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
	/* Header V4: Split Layout */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.header-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0.875rem 2rem;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 2rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
	}

	.logo-mark {
		width: 36px;
		height: 36px;
		background: white;
		color: #D300C5;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 1.25rem;
	}

	.logo-text {
		font-size: 1.35rem;
		font-weight: 700;
		color: white;
		letter-spacing: -0.02em;
	}

	.nav {
		display: flex;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.1);
		padding: 0.375rem;
		border-radius: 50px;
	}

	.nav-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.nav-link:hover {
		background: rgba(255, 255, 255, 0.15);
		color: white;
	}

	.nav-icon {
		font-size: 0.85rem;
	}

	.header-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1.25rem;
	}

	.login-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.login-link:hover {
		color: white;
	}

	.cta-button {
		background: linear-gradient(135deg, #FF7A00 0%, #FF0069 100%);
		color: white;
		padding: 0.625rem 1.25rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: transform 0.2s, box-shadow 0.2s;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.cta-button:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 20px rgba(255, 0, 105, 0.4);
	}

	.cta-button .arrow {
		transition: transform 0.2s;
	}

	.cta-button:hover .arrow {
		transform: translateX(3px);
	}

	/* Hero styles */
	.hero-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 2rem;
		padding-top: 7rem;
		position: relative;
		overflow: hidden;
	}

	.animated-bg { display: none; }

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

	.text-content { color: white; }

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

	.headline-main::after { content: '\A'; white-space: pre; }
	.headline-sub { display: block; }

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

	.stars { color: #FFD600; }

	.image-content { position: relative; }

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

	@media (max-width: 968px) {
		.header-content { grid-template-columns: 1fr 1fr; }
		.nav { display: none; }
	}

	@media (max-width: 768px) {
		.header-content { padding: 0.75rem 1rem; }
		.logo-mark { width: 32px; height: 32px; font-size: 1.1rem; }
		.logo-text { font-size: 1.2rem; }
		.login-link { display: none; }
		.cta-button { padding: 0.5rem 1rem; font-size: 0.85rem; }
		.hero-section { justify-content: center; padding-top: 5.5rem; }
		.animated-bg { display: block; position: absolute; inset: 0; overflow: hidden; }
		.orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; animation: float 8s ease-in-out infinite; }
		.orb-1 { width: 300px; height: 300px; background: #FFD600; top: -80px; right: -80px; }
		.orb-2 { width: 200px; height: 200px; background: #7638FA; bottom: -40px; left: -40px; animation-delay: -3s; }
		.orb-3 { width: 180px; height: 180px; background: #FF0069; top: 50%; left: 50%; animation-delay: -5s; }
		@keyframes float { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(20px, -20px) scale(1.1); } }
		.hero-content { grid-template-columns: 1fr; text-align: center; max-width: 500px; }
		.headline { font-size: 2.75rem; font-weight: 800; text-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); }
		.headline-main { display: block; margin-bottom: 0.25rem; }
		.headline-sub { font-size: 1.5rem; font-weight: 300; opacity: 0.9; }
		.subtext { font-size: 1.1rem; max-width: 400px; margin-left: auto; margin-right: auto; }
		.cta-group { flex-direction: column; align-items: center; }
		.cta-primary, .cta-secondary { width: 100%; max-width: 280px; }
		.trust-badge { justify-content: center; }
		.image-content { display: none; }
		.cream-strip { height: 80px; }
	}
</style>
