<!-- Footer V5: Split Design - Gradient Panel Left + Dark Right -->
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
	<!-- Split Layout -->
	<div class="footer-split">
		<!-- Gradient Left Panel - Brand & App -->
		<div class="panel-gradient">
			<div class="panel-content">
				<a href="/" class="logo">Clairvora</a>
				<p class="tagline">Find clarity. Discover guidance. Connect with trusted advisors.</p>

				<div class="contact-block">
					<span class="contact-label">Call Us</span>
					<a href="tel:8446340009" class="phone">(844) 634-0009</a>
				</div>

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

				<!-- App Promo -->
				<div class="app-promo">
					<img src="/app-coming-soon.png" alt="Clairvora mobile app coming soon!" class="app-mockup" width="160" />
					<h4>Get the App</h4>
					<p>Coming soon to iOS & Android</p>
					<div class="app-btns">
						<a href={appStoreLinks.apple} class="app-btn">
							<svg width="16" height="20" viewBox="0 0 384 512" fill="currentColor">
								<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
							</svg>
							<span>App Store</span>
						</a>
						<a href={appStoreLinks.google} class="app-btn">
							<svg width="14" height="16" viewBox="0 0 512 512" fill="currentColor">
								<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
							</svg>
							<span>Google Play</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Dark Right Panel - Links -->
		<div class="panel-dark">
			<div class="panel-dark-content">
				<!-- Links Section -->
				<div class="links-area">
					<div class="link-col">
						<h4>Company</h4>
						<ul>
							{#each aboutLinks as link}
								<li><a href={link.href}>{link.label}</a></li>
							{/each}
						</ul>
					</div>

					<div class="link-col">
						<h4>Legal</h4>
						<ul>
							{#each legalLinks as link}
								<li><a href={link.href}>{link.label}</a></li>
							{/each}
						</ul>
					</div>

					<div class="link-col link-col-categories">
						<h4>Reading Categories</h4>
						<ul class="cat-list">
							{#each categoryLinks as link}
								<li><a href={link.href}>{link.label}</a></li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="footer-bottom">
		<p>Thank you for using Clairvora | Copyright © 2024-2026 Stellar Insights LLC</p>
	</div>
</footer>

<style>
	.footer {
		background: #1a1a2e;
	}

	/* Split Layout */
	.footer-split {
		display: grid;
		grid-template-columns: 380px 1fr;
		min-height: 500px;
	}

	/* Gradient Panel */
	.panel-gradient {
		background: linear-gradient(180deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 3rem 2.5rem;
		display: flex;
		flex-direction: column;
	}

	.panel-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.logo {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.tagline {
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.contact-block {
		margin-bottom: 1.5rem;
	}

	.contact-label {
		display: block;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 0.375rem;
	}

	.phone {
		color: white;
		text-decoration: none;
		font-size: 1.25rem;
		font-weight: 600;
		transition: opacity 0.2s;
	}

	.phone:hover {
		opacity: 0.8;
	}

	.social-row {
		display: flex;
		gap: 0.625rem;
		margin-bottom: 2rem;
	}

	.social-row a {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		transition: all 0.2s;
	}

	.social-row a:hover {
		background: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}

	/* App Promo */
	.app-promo {
		margin-top: auto;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.app-mockup {
		display: block;
		margin-bottom: 0.75rem;
	}

	.app-promo h4 {
		font-size: 0.9rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.app-promo p {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1rem;
	}

	.app-btns {
		display: flex;
		gap: 0.625rem;
	}

	.app-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.875rem;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		color: white;
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 500;
		transition: all 0.2s;
	}

	.app-btn:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Dark Panel */
	.panel-dark {
		background: #1a1a2e;
		color: white;
		padding: 3rem;
	}

	.panel-dark-content {
		max-width: 800px;
	}

	/* Links Area */
	.links-area {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.link-col h4 {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.5);
		margin-bottom: 1rem;
	}

	.link-col ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.link-col li {
		margin-bottom: 0.5rem;
	}

	.link-col a {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 0.85rem;
		transition: color 0.2s;
	}

	.link-col a:hover {
		color: #D300C5;
	}

	.link-col-categories .cat-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.375rem 1rem;
	}

	/* Bottom Bar */
	.footer-bottom {
		background: rgba(0, 0, 0, 0.3);
		padding: 1.25rem 2rem;
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.8rem;
		margin: 0;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.footer-split {
			grid-template-columns: 1fr;
		}

		.panel-gradient {
			padding: 2.5rem 2rem;
		}

		.panel-content {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2rem;
			justify-content: space-between;
			align-items: flex-start;
		}

		.tagline {
			max-width: 280px;
			margin-bottom: 0;
		}

		.contact-block {
			margin-bottom: 0;
		}

		.social-row {
			margin-bottom: 0;
		}

		.app-promo {
			width: 100%;
			margin-top: 2rem;
			padding-top: 2rem;
		}

		.app-btns {
			justify-content: flex-start;
		}

		.links-area {
			grid-template-columns: repeat(2, 1fr);
		}

		.link-col-categories {
			grid-column: 1 / -1;
		}

		.link-col-categories .cat-list {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.panel-gradient {
			padding: 2rem 1.5rem;
		}

		.panel-content {
			flex-direction: column;
			align-items: flex-start;
		}

		.tagline {
			max-width: none;
			margin-bottom: 1.5rem;
		}

		.contact-block {
			margin-bottom: 1rem;
		}

		.social-row {
			margin-bottom: 1.5rem;
		}

		.panel-dark {
			padding: 2rem 1.5rem;
		}

		.links-area {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.link-col-categories .cat-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Mobile */
	@media (max-width: 480px) {
		.panel-gradient {
			padding: 1.5rem 1rem;
		}

		.app-btns {
			flex-direction: column;
		}

		.app-btn {
			justify-content: center;
		}

		.panel-dark {
			padding: 1.5rem 1rem;
		}

		.link-col-categories .cat-list {
			grid-template-columns: 1fr;
		}
	}
</style>
