<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';

	let scrolled = $state(false);

	// Get current path for active nav highlighting
	let currentPath = $derived($page.url.pathname);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function isActive(path: string): boolean {
		if (path === '/') {
			return currentPath === '/';
		}
		return currentPath.startsWith(path);
	}
</script>

<header class="header" class:scrolled>
	<div class="header-content">
		<a href="/" class="logo">
			<img
				src={scrolled ? "/logo/clairvora-logo-black.png" : "/logo/clairvora-logo.png"}
				alt="Clairvora"
				class="logo-img"
			/>
		</a>
		<nav class="nav">
			<a href="/psychics" class="nav-link" class:active={isActive('/psychics')}>Psychics</a>
			<a href="/how-it-works" class="nav-link" class:active={isActive('/how-it-works')}>How It Works</a>
			<a href="/about" class="nav-link" class:active={isActive('/about')}>About</a>
		</nav>
		<div class="header-actions">
			<SignedOut>
				<a href="/login" class="login-link">Sign In</a>
				<a href="/signup" class="cta-button">Get Started</a>
			</SignedOut>
			<SignedIn>
				<a href="/account/client" class="login-link">Account</a>
			</SignedIn>
		</div>
	</div>
</header>

<style>
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
		text-decoration: none;
	}

	.logo-img {
		height: 25px;
		width: auto;
		object-fit: contain;
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

	.nav-link:hover,
	.nav-link.active {
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

	.header.scrolled .nav-link {
		color: #64748b;
	}

	.header.scrolled .nav-link:hover,
	.header.scrolled .nav-link.active {
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
	}
</style>
