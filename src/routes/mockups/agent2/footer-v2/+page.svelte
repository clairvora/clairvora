<!-- Footer V2: Centered Brand with Horizontal Link Groups -->
<script lang="ts">
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
</script>

<footer class="footer">
	<!-- App Banner - Full width gradient stripe -->
	<div class="app-banner">
		<div class="app-banner-inner">
			<div class="app-info">
				<img src="/app-coming-soon.png" alt="Clairvora mobile app coming soon!" class="app-mockup" width="180" />
				<div>
					<h3>Clairvora App Coming Soon!</h3>
					<p>Find the best advisors for all types of readings</p>
				</div>
			</div>
			<div class="app-badges">
				<a href={appStoreLinks.apple} class="store-badge">
					<svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor">
						<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
					</svg>
					<div class="badge-content">
						<span class="badge-small">Download on the</span>
						<span class="badge-large">App Store</span>
					</div>
				</a>
				<a href={appStoreLinks.google} class="store-badge">
					<svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor">
						<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
					</svg>
					<div class="badge-content">
						<span class="badge-small">GET IT ON</span>
						<span class="badge-large">Google Play</span>
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- Main Footer - Centered brand, horizontal link groups -->
	<div class="footer-main">
		<div class="footer-container">
			<!-- Centered Brand -->
			<div class="footer-brand">
				<a href="/" class="logo">Clairvora</a>
				<p class="tagline">Your trusted source for psychic guidance</p>
				<a href="tel:8446340009" class="phone">(844) 634-0009</a>
				<div class="social-row">
					<a href={socialLinks.facebook} aria-label="Facebook">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
					</a>
					<a href={socialLinks.twitter} aria-label="Twitter">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
					</a>
					<a href={socialLinks.whatsapp} aria-label="WhatsApp">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
					</a>
					<a href={socialLinks.telegram} aria-label="Telegram">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
					</a>
				</div>
			</div>

			<!-- Link Sections - Horizontal rows -->
			<div class="links-section">
				<div class="link-group">
					<h4>About</h4>
					<div class="link-row">
						{#each aboutLinks as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</div>
				</div>

				<div class="link-group">
					<h4>Legal</h4>
					<div class="link-row">
						{#each legalLinks as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</div>
				</div>

				<div class="link-group">
					<h4>Reading Categories</h4>
					<div class="link-row">
						{#each categoryLinks as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="footer-bottom">
		<div class="bottom-inner">
			<p>Thank you for using Clairvora | Copyright © 2024-2026 Stellar Insights LLC</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #1a1a2e;
		color: white;
	}

	/* App Banner */
	.app-banner {
		background: linear-gradient(90deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		padding: 1.25rem 2rem;
	}

	.app-banner-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.app-info {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.app-mockup {
		flex-shrink: 0;
	}

	.app-info h3 {
		font-size: 1.125rem;
		font-weight: 700;
		margin-bottom: 0.125rem;
	}

	.app-info p {
		font-size: 0.875rem;
		opacity: 0.9;
	}

	.app-badges {
		display: flex;
		gap: 0.75rem;
	}

	.store-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(0, 0, 0, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 8px;
		text-decoration: none;
		color: white;
		transition: background 0.2s;
	}

	.store-badge:hover {
		background: rgba(0, 0, 0, 0.5);
	}

	.badge-content {
		display: flex;
		flex-direction: column;
	}

	.badge-small {
		font-size: 0.6rem;
		opacity: 0.8;
	}

	.badge-large {
		font-size: 0.9rem;
		font-weight: 600;
	}

	/* Main Footer */
	.footer-main {
		padding: 4rem 2rem;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* Brand - Centered */
	.footer-brand {
		text-align: center;
		padding-bottom: 3rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		margin-bottom: 2.5rem;
	}

	.logo {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
		display: block;
		margin-bottom: 0.5rem;
	}

	.tagline {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.phone {
		display: inline-block;
		color: #D300C5;
		font-weight: 600;
		text-decoration: none;
		margin-bottom: 1.25rem;
		transition: color 0.2s;
	}

	.phone:hover {
		color: #FF0069;
	}

	.social-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.social-row a {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.7);
		transition: all 0.2s;
	}

	.social-row a:hover {
		background: #7638FA;
		color: white;
		transform: translateY(-2px);
	}

	/* Link Sections */
	.links-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.link-group h4 {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 0.75rem;
		text-align: center;
	}

	.link-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 1.5rem;
	}

	.link-row a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 0.875rem;
		padding: 0.25rem 0;
		transition: color 0.2s;
	}

	.link-row a:hover {
		color: #D300C5;
	}

	/* Bottom Bar */
	.footer-bottom {
		background: rgba(0, 0, 0, 0.2);
		padding: 1.25rem 2rem;
	}

	.bottom-inner {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.8rem;
		margin: 0;
	}

	/* Tablet */
	@media (max-width: 768px) {
		.app-banner-inner {
			flex-direction: column;
			text-align: center;
		}

		.app-info {
			flex-direction: column;
		}

		.link-row {
			gap: 0.375rem 1rem;
		}
	}

	/* Mobile */
	@media (max-width: 480px) {
		.app-banner {
			padding: 1.25rem 1rem;
		}

		.app-badges {
			flex-direction: column;
			width: 100%;
		}

		.store-badge {
			justify-content: center;
		}

		.footer-main {
			padding: 2.5rem 1rem;
		}

		.link-row a {
			font-size: 0.8rem;
		}
	}
</style>
