<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>Logo Mockup - Clairvora</title>
</svelte:head>

<!-- Modified Header with Icon -->
<header class="header" class:scrolled>
	<div class="header-content">
		<a href="/mockups/logo-with-icon" class="logo">
			<img src="/logo/clairvora-logo-icon.png" alt="" class="logo-icon" />
			Clairvora
		</a>
		<nav class="nav">
			<a href="/psychics" class="nav-link">Psychics</a>
			<a href="/how-it-works" class="nav-link">How It Works</a>
			<a href="/about" class="nav-link">About</a>
		</nav>
		<div class="header-actions">
			<a href="/login" class="login-link">Sign In</a>
			<a href="/signup" class="cta-button">Get Started</a>
		</div>
	</div>
</header>

<!-- Demo content to test scrolling -->
<main class="demo-content">
	<section class="hero">
		<h1>Logo Mockup</h1>
		<p>Testing the logo icon in front of "Clairvora"</p>
	</section>

	<section class="scroll-section">
		<h2>Scroll down to see the header change</h2>
		<p>The header background becomes white when scrolled, and the logo icon should remain visible in both states.</p>
	</section>

	<section class="scroll-section">
		<h2>Icon Details</h2>
		<p>The icon is positioned to the left of the text with a small gap.</p>
	</section>

	<section class="scroll-section">
		<h2>More Content</h2>
		<p>Keep scrolling to test the header transition.</p>
	</section>
</main>

<style>
	/* Header Styles */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1.25rem 2rem;
		transition: background 0.3s, box-shadow 0.3s;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
		letter-spacing: -0.02em;
		transition: color 0.3s;
	}

	.logo-icon {
		width: 24px;
		height: 24px;
		object-fit: contain;
		transition: filter 0.3s;
	}

	.nav {
		display: flex;
		gap: 2.5rem;
	}

	.nav-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		transition: color 0.3s;
	}

	.nav-link:hover {
		color: white;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.login-link {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		transition: color 0.3s;
	}

	.login-link:hover {
		color: white;
	}

	.cta-button {
		background: white;
		color: #D300C5;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: transform 0.2s, box-shadow 0.2s, background 0.3s, color 0.3s;
	}

	.cta-button:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	}

	/* Scrolled header state */
	.header.scrolled {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
	}

	.header.scrolled .logo {
		color: #1a1a2e;
	}

	.header.scrolled .logo-icon {
		/* Invert the white icon to dark for scrolled state */
		filter: brightness(0) saturate(100%);
	}

	.header.scrolled .nav-link {
		color: #64748b;
	}

	.header.scrolled .nav-link:hover {
		color: #1a1a2e;
	}

	.header.scrolled .login-link {
		color: #64748b;
	}

	.header.scrolled .login-link:hover {
		color: #1a1a2e;
	}

	.header.scrolled .cta-button {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	/* Demo Content Styles */
	.demo-content {
		min-height: 300vh;
	}

	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF5E5B 100%);
		color: white;
		padding: 2rem;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.hero p {
		font-size: 1.25rem;
		opacity: 0.9;
	}

	.scroll-section {
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 4rem 2rem;
		background: white;
	}

	.scroll-section:nth-child(odd) {
		background: #f8f9fa;
	}

	.scroll-section h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 1rem;
	}

	.scroll-section p {
		font-size: 1.1rem;
		color: #64748b;
		max-width: 600px;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.header {
			padding: 1rem;
		}

		.nav {
			display: none;
		}

		.login-link {
			display: none;
		}

		.logo-icon {
			width: 21px;
			height: 21px;
		}
	}
</style>
