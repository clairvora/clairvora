<script lang="ts">
	import { onMount } from 'svelte';
	import { ShieldCheck, Lock, CreditCard, UserCircle, LockKey, Headset } from 'phosphor-svelte';

	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: '/psychics/profile-1.jpg', price: 3.99, status: 'online', bio: 'Gifted empath specializing in twin flames and soulmate connections.' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: '/psychics/profile-2.jpg', price: 4.99, status: 'online', bio: 'Former analyst turned spiritual advisor for professional guidance.' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: '/psychics/profile-3.jpg', price: 2.99, status: 'busy', bio: 'Third-generation tarot reader revealing hidden truths.' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: '/psychics/profile-4.jpg', price: 5.99, status: 'online', bio: 'Awakened healer helping you discover your soul purpose.' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: '/psychics/profile-5.jpg', price: 3.49, status: 'online', bio: 'Dream interpreter unlocking messages from your subconscious.' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: '/psychics/profile-6.jpg', price: 2.99, status: 'offline', bio: 'Past life specialist revealing karmic patterns and soul lessons.' },
	];

	const aboutLinks = [
		{ label: 'Homepage', href: '/' },
		{ label: 'How It Works', href: '/how-it-works' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Our Advisors', href: '/psychics' },
		{ label: 'Help & Support', href: '/help' },
		{ label: 'Contact Us', href: '/contact' },
		{ label: 'News', href: '/blog' }
	];

	const legalLinks = [
		{ label: 'Terms & Conditions', href: '/legal/terms' },
		{ label: 'Privacy Policy', href: '/legal/privacy' },
		{ label: 'Cookie Policy', href: '/legal/cookies' },
		{ label: 'Refunds & Cancellations', href: '/legal/refunds' },
		{ label: 'Copyright Policy', href: '/legal/copyright' }
	];

	const categoryLinks = [
		{ label: 'Find an Advisor', href: '/psychics' },
		{ label: 'Psychic Reading', href: '/psychics?category=psychic-reading' },
		{ label: 'Love & Relationship', href: '/psychics?category=love-relationship' },
		{ label: 'Soulmate Reading', href: '/psychics?category=soulmate' },
		{ label: 'Breakups & Divorce', href: '/psychics?category=breakups-divorce' },
		{ label: 'Career & Money', href: '/psychics?category=career-money' },
		{ label: 'Past Lives', href: '/psychics?category=past-lives' },
		{ label: 'Spiritual Guidance', href: '/psychics?category=spiritual-guidance' },
		{ label: 'Spirit Guides', href: '/psychics?category=spirit-guides' },
		{ label: 'Dream Interpretation', href: '/psychics?category=dream-interpretation' },
		{ label: 'Pet Reading', href: '/psychics?category=pet-reading' },
		{ label: 'Family & Friends', href: '/psychics?category=family-friends' },
		{ label: 'Deceased Loved Ones', href: '/psychics?category=deceased-loved-ones' }
	];

	const socialLinks = {
		facebook: 'https://facebook.com/clairvora',
		twitter: 'https://twitter.com/clairvora',
		whatsapp: 'https://wa.me/18446340009',
		telegram: 'https://t.me/clairvora'
	};

	const appStoreLinks = {
		apple: 'https://apps.apple.com/app/clairvora',
		google: 'https://play.google.com/store/apps/details?id=com.clairvora'
	};

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="header" class:scrolled>
	<div class="header-content">
		<a href="/" class="logo">Clairvora</a>
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
	<!-- Wave divider transition -->
	<svg class="wave-divider" viewBox="0 0 1440 150" preserveAspectRatio="none">
		<path d="M0,80 C360,150 720,10 1080,80 C1260,120 1380,100 1440,80 L1440,160 L0,160 Z" fill="#ffffff"/>
	</svg>
</div>

<!-- Psychic Advisors Section -->
<section class="advisors-section">
	<div class="advisors-container">
		<div class="section-header">
			<h2 class="section-title">Psychic Advisors</h2>
			<p class="section-subtitle">Discover guidance from our gifted community</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-glow"></div>
					<div class="card-inner">
						<div class="card-layout">
							<div class="avatar-section">
								<div class="avatar-container">
									<img src={advisor.image} alt={advisor.name} class="avatar" />
									{#if advisor.status === 'online'}
										<span class="online-dot"></span>
									{/if}
								</div>
							</div>
							<div class="info-section">
								<div class="name-row">
									<h3 class="advisor-name">{advisor.name}</h3>
									<div class="price-badge">${advisor.price}/min</div>
								</div>
								<p class="advisor-specialty">{advisor.specialty}</p>
								<p class="advisor-bio">{advisor.bio}</p>
								<div class="stats-row">
									<span class="stat-value">★ {advisor.rating}</span>
									<span class="stat-divider">·</span>
									<span class="stat-value">{advisor.reviews.toLocaleString()} reviews</span>
								</div>
								<button class="connect-btn">
									{#if advisor.status === 'online'}
										Connect Now
									{:else if advisor.status === 'busy'}
										Join Queue
									{:else}
										Schedule
									{/if}
								</button>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="section-footer">
			<button class="view-all-btn">
				<span>View All Advisors</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</button>
		</div>
	</div>
</section>

<!-- Satisfaction Guarantee Section -->
<section class="guarantee">
	<div class="guarantee-container">
		<div class="guarantee-content">
			<span class="guarantee-eyebrow">Our Promise to You</span>
			<h2 class="guarantee-title">Your Satisfaction Guaranteed</h2>
			<p class="guarantee-description">If you are ever dissatisfied with a reading, contact us and we'll find a reader more suited for you — or refund your purchase. Your peace of mind is our priority.</p>

			<div class="guarantee-features">
				<div class="guarantee-feature">
					<div class="feature-icon">
						<ShieldCheck size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Money-Back Guarantee</h3>
						<p class="feature-desc">Not satisfied? Get a full refund, no questions asked.</p>
					</div>
				</div>

				<div class="guarantee-feature">
					<div class="feature-icon">
						<LockKey size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Secure Payments</h3>
						<p class="feature-desc">Bank-level 256-bit SSL encryption protects your data.</p>
					</div>
				</div>

				<div class="guarantee-feature">
					<div class="feature-icon">
						<UserCircle size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3 class="feature-title">Privacy Protected</h3>
						<p class="feature-desc">Your readings and personal info stay completely private.</p>
					</div>
				</div>
			</div>

			<div class="trust-row">
				<div class="trust-item">
					<Lock size={20} weight="bold" />
					<span>SSL Secured</span>
				</div>
				<div class="trust-item">
					<CreditCard size={20} weight="bold" />
					<span>Visa / MC / Amex</span>
				</div>
				<div class="trust-item">
					<Headset size={20} weight="bold" />
					<span>24/7 Support</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="footer">
	<!-- Main Footer -->
	<div class="footer-main">
		<div class="footer-content">
			<!-- Brand Column -->
			<div class="footer-brand">
				<a href="/" class="footer-logo">Clairvora</a>
				<a href="tel:8446340009" class="phone-number">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
					</svg>
					(844) 634-0009
				</a>
				<div class="social-links">
					<a href={socialLinks.facebook} class="social-icon" aria-label="Facebook">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
						</svg>
					</a>
					<a href={socialLinks.twitter} class="social-icon" aria-label="Twitter">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
						</svg>
					</a>
					<a href={socialLinks.whatsapp} class="social-icon" aria-label="WhatsApp">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
						</svg>
					</a>
					<a href={socialLinks.telegram} class="social-icon" aria-label="Telegram">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Col 1: About -->
			<div class="footer-column">
				<h4>About</h4>
				<ul>
					{#each aboutLinks as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Col 2: Legal -->
			<div class="footer-column">
				<h4>Legal</h4>
				<ul>
					{#each legalLinks as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Col 3: Categories (first half) -->
			<div class="footer-column">
				<h4>Categories</h4>
				<ul>
					{#each categoryLinks.slice(0, 7) as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Col 4: Categories (second half) -->
			<div class="footer-column">
				<h4>&nbsp;</h4>
				<ul>
					{#each categoryLinks.slice(7) as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<!-- App Promo Banner -->
	<div class="app-banner">
		<div class="app-banner-content">
			<img src="/app-coming-soon.png" alt="Clairvora mobile app coming soon!" class="app-mockup" width="240" />
			<div class="app-text">
				<h3>Clairvora App Coming Soon!</h3>
				<p>Find the best advisors for all types of readings in our new Clairvora App!</p>
			</div>
			<div class="app-badges">
				<a href={appStoreLinks.apple} class="store-badge">
					<svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor">
						<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
					</svg>
					<div class="badge-text">
						<span class="badge-text-small">Download on the</span>
						<span class="badge-text-large">App Store</span>
					</div>
				</a>
				<a href={appStoreLinks.google} class="store-badge">
					<svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor">
						<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
					</svg>
					<div class="badge-text">
						<span class="badge-text-small">GET IT ON</span>
						<span class="badge-text-large">Google Play</span>
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="footer-bottom">
		<p>Thank you for using Clairvora | Copyright © 2024-2026 Stellar Insights LLC</p>
	</div>
</footer>

<style>
	/* Header: Minimal Transparent */
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
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
		letter-spacing: -0.02em;
		transition: color 0.3s;
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

	/* Hero styles */
	.hero-section {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 2rem;
		padding-top: 6rem;
		padding-bottom: 12rem;
		position: relative;
		overflow: hidden;
	}

	.animated-bg {
		display: none;
	}

	.wave-divider {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 150px;
		display: block;
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

	.headline-main::after {
		content: '\A';
		white-space: pre;
	}

	.headline-sub {
		display: block;
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

	/* Mobile: V5-style centered layout */
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

		.hero-section {
			justify-content: center;
			padding-top: 5rem;
		}

		.animated-bg {
			display: block;
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
			width: 300px;
			height: 300px;
			background: #FFD600;
			top: -80px;
			right: -80px;
			animation-delay: 0s;
		}

		.orb-2 {
			width: 200px;
			height: 200px;
			background: #7638FA;
			bottom: -40px;
			left: -40px;
			animation-delay: -3s;
		}

		.orb-3 {
			width: 180px;
			height: 180px;
			background: #FF0069;
			top: 50%;
			left: 50%;
			animation-delay: -5s;
		}

		@keyframes float {
			0%, 100% { transform: translate(0, 0) scale(1); }
			50% { transform: translate(20px, -20px) scale(1.1); }
		}

		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
			max-width: 500px;
		}

		.headline {
			font-size: 2.75rem;
			font-weight: 800;
			text-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		}

		.headline-main {
			display: block;
			margin-bottom: 0.25rem;
		}

		.headline-sub {
			font-size: 1.5rem;
			font-weight: 300;
			opacity: 0.9;
		}

		.subtext {
			font-size: 1.1rem;
			max-width: 400px;
			margin-left: auto;
			margin-right: auto;
		}

		.cta-group {
			flex-direction: column;
			align-items: center;
		}

		.cta-primary,
		.cta-secondary {
			width: 100%;
			max-width: 280px;
		}

		.trust-badge {
			justify-content: center;
		}

		.image-content {
			display: none;
		}

		.wave-divider {
			height: 100px;
		}
	}

	/* Psychic Advisors Section */
	.advisors-section {
		background: #ffffff;
		padding: 3rem 2rem 6rem;
		position: relative;
		overflow: hidden;
		margin-top: -2px;
	}

	.advisors-container {
		max-width: 1000px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
		border: none;
	}

	.section-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: #64748b;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.advisor-card {
		position: relative;
		border-radius: 24px;
		transition: transform 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-8px);
	}

	.card-glow {
		position: absolute;
		inset: -1px;
		background: linear-gradient(135deg, rgba(211, 0, 197, 0.15) 0%, rgba(118, 56, 250, 0.1) 50%, rgba(255, 122, 0, 0.15) 100%);
		border-radius: 24px;
		z-index: 0;
	}

	.card-inner {
		position: relative;
		background: white;
		border-radius: 23px;
		padding: 1.5rem;
		z-index: 1;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.card-layout {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.avatar-section {
		flex-shrink: 0;
	}

	.avatar-container {
		position: relative;
		width: 120px;
		height: 120px;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid white;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.online-dot {
		position: absolute;
		bottom: 8px;
		right: 8px;
		width: 18px;
		height: 18px;
		background: #22c55e;
		border-radius: 50%;
		border: 3px solid white;
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
	}

	.info-section {
		flex: 1;
		min-width: 0;
	}

	.name-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.25rem;
	}

	.advisor-name {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.price-badge {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: #D300C5;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.advisor-bio {
		font-size: 0.85rem;
		color: #64748b;
		line-height: 1.4;
		margin-bottom: 0.75rem;
	}

	.stats-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.stat-value {
		color: #1a1a2e;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.stat-divider {
		color: #cbd5e1;
	}

	.connect-btn {
		width: 100%;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.connect-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(211, 0, 197, 0.3);
	}

	.section-footer {
		text-align: center;
		margin-top: 3rem;
	}

	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		color: #D300C5;
		border: 2px solid #D300C5;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s, color 0.2s, transform 0.2s;
	}

	.view-all-btn:hover {
		background: #D300C5;
		color: white;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.advisors-grid {
			grid-template-columns: 1fr;
			max-width: 450px;
			margin: 0 auto;
		}
	}

	@media (max-width: 500px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.card-layout {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.name-row {
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}

		.stats-row {
			justify-content: center;
		}
	}

	/* Satisfaction Guarantee Section */
	.guarantee {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
		position: relative;
	}

	.guarantee-container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.guarantee-content {
		text-align: center;
	}

	.guarantee-eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1.5rem;
	}

	.guarantee-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.guarantee-description {
		font-size: 1.125rem;
		color: #64748b;
		max-width: 650px;
		margin: 0 auto 3rem;
		line-height: 1.7;
	}

	.guarantee-features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.guarantee-feature {
		background: white;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.guarantee-feature:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.feature-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
		color: white;
	}

	.feature-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature-desc {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	.trust-row {
		display: flex;
		justify-content: center;
		gap: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(118, 56, 250, 0.15);
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #7638FA;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.guarantee {
			padding: 4rem 1.5rem;
		}

		.guarantee-title {
			font-size: 2rem;
		}

		.guarantee-features {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.guarantee-feature {
			padding: 1.5rem;
		}

		.trust-row {
			flex-wrap: wrap;
			gap: 1.5rem;
		}
	}

	/* Footer */
	.footer {
		background: #1a1a2e;
		color: white;
	}

	/* App Banner */
	.app-banner {
		background: linear-gradient(135deg, #ffffff 0%, #f5f5f8 100%);
		padding: 2rem 2rem;
		border-radius: 12px 12px 0 0;
		margin: 0 1rem;
	}

	.app-banner-content {
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.app-mockup {
		flex-shrink: 0;
	}

	.app-text {
		flex: 1;
	}

	.app-text h3 {
		font-size: 1.375rem;
		font-weight: 700;
		margin-bottom: 0.375rem;
		color: #1a1a2e;
	}

	.app-text p {
		color: #555;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.app-badges {
		display: flex;
		gap: 0.75rem;
	}

	.store-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: #1a1a2e;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		text-decoration: none;
		color: white;
		transition: transform 0.2s, background 0.2s;
	}

	.store-badge:hover {
		background: #2a2a4e;
		transform: translateY(-2px);
	}

	.badge-text {
		display: flex;
		flex-direction: column;
	}

	.badge-text-small {
		font-size: 0.5rem;
		opacity: 0.8;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.badge-text-large {
		font-size: 1rem;
		font-weight: 600;
	}

	/* Main Footer */
	.footer-main {
		padding: 3rem 2rem;
	}

	.footer-content {
		max-width: 1100px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 180px repeat(4, 1fr);
		gap: 2rem;
	}

	/* Brand Column */
	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
	}

	.phone-number {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.phone-number:hover {
		color: white;
	}

	.social-links {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.social-icon {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		transition: background 0.2s, color 0.2s;
	}

	.social-icon:hover {
		background: #7638FA;
		color: white;
	}

	/* Footer Columns */
	.footer-column h4 {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 1rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.footer-column ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-column li {
		margin-bottom: 0.5rem;
	}

	.footer-column a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 0.875rem;
		transition: color 0.2s;
	}

	.footer-column a:hover {
		color: #D300C5;
	}

	/* Bottom Bar */
	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding: 1.25rem 2rem;
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.8rem;
		margin: 0;
	}

	/* Tablet */
	@media (max-width: 1024px) {
		.footer-content {
			grid-template-columns: repeat(2, 1fr);
		}

		.footer-brand {
			grid-column: 1 / -1;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 2rem;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 768px) {
		.app-banner {
			margin: 0 0.5rem;
		}

		.app-banner-content {
			flex-direction: column;
			text-align: center;
		}

		.app-badges {
			justify-content: center;
		}

		.footer-brand {
			flex-direction: column;
			text-align: center;
		}

		.social-links {
			justify-content: center;
		}
	}

	/* Mobile */
	@media (max-width: 480px) {
		.app-banner {
			padding: 1.5rem 1rem;
			margin: 0;
			border-radius: 0;
		}

		.app-mockup {
			width: 180px;
		}

		.app-text h3 {
			font-size: 1.125rem;
		}

		.app-badges {
			flex-direction: column;
			width: 100%;
		}

		.store-badge {
			justify-content: center;
		}

		.footer-main {
			padding: 2rem 1rem;
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-brand {
			padding-bottom: 1.5rem;
		}
	}
</style>
