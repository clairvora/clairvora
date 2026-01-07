<!-- Footer V1: Starter template -->
<!-- TODO: Create footer with links, legal, contact -->
<script lang="ts">
	const footerLinks = {
		services: [
			{ label: 'Chat Readings', href: '#' },
			{ label: 'Phone Readings', href: '#' },
			{ label: 'Video Readings', href: '#' },
			{ label: 'Email Readings', href: '#' },
		],
		company: [
			{ label: 'About Us', href: '#' },
			{ label: 'How It Works', href: '#' },
			{ label: 'Become an Advisor', href: '#' },
			{ label: 'Contact', href: '#' },
		],
		support: [
			{ label: 'Help Center', href: '#' },
			{ label: 'FAQs', href: '#' },
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Terms of Service', href: '#' },
		],
	};
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<h3 class="logo">Clairvora</h3>
				<p>Connect with trusted psychic advisors for guidance on love, career, and life's biggest questions.</p>
			</div>

			<div class="footer-links">
				<div class="link-group">
					<h4>Services</h4>
					<ul>
						{#each footerLinks.services as link}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				</div>

				<div class="link-group">
					<h4>Company</h4>
					<ul>
						{#each footerLinks.company as link}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				</div>

				<div class="link-group">
					<h4>Support</h4>
					<ul>
						{#each footerLinks.support as link}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; 2024 Clairvora. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	/*
	Design tokens:
	- Vibrant gradient (hero only): linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%)
	- Soft gradient (sections): linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%)
	- Dark option: #1a1a2e
	- Brand purple: #7638FA
	- Brand magenta: #D300C5
	- Brand pink: #FF0069
	- Brand orange: #FF7A00
	*/

	.footer {
		background: #1a1a2e;
		color: white;
		padding: 4rem 2rem 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1.5fr 2fr;
		gap: 4rem;
		margin-bottom: 3rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.footer-brand p {
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
		max-width: 300px;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.link-group h4 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.link-group ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.link-group li {
		margin-bottom: 0.5rem;
	}

	.link-group a {
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.link-group a:hover {
		color: white;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 2rem;
		text-align: center;
	}

	.footer-bottom p {
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.875rem;
	}
</style>
