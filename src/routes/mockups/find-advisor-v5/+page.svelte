<!-- Find Your Advisor V5: Overlapping Circles Wave -->
<script lang="ts">
	const topRowAdvisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage' },
		{ image: '/advisors/profile-6.jpg', name: 'River Stone' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya' },
	];

	const bottomRowAdvisors = [
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn' },
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon' },
		{ image: '/advisors/profile-13.jpg', name: 'Willow Grace' },
	];
</script>

<section class="find-advisor">
	<div class="mesh-gradient"></div>

	<div class="container">
		<div class="header">
			<span class="badge">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
				</svg>
				<span>Trusted Advisors</span>
			</span>
			<h2>Find Your Advisor</h2>
			<p class="description">
				Discover the perfect psychic to guide you on your journey. Each brings unique talents and specialties, ready to provide you with clarity and insight.
			</p>
		</div>

		<div class="avatars-section">
			<div class="avatar-row top-row">
				{#each topRowAdvisors as advisor, i}
					<div class="avatar-wrapper" style="--delay: {i * 0.08}s">
						<div class="avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
			<div class="avatar-row bottom-row">
				{#each bottomRowAdvisors as advisor, i}
					<div class="avatar-wrapper" style="--delay: {(i + 7) * 0.08}s">
						<div class="avatar-border">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="stats-row">
			<div class="stat">
				<span class="stat-value">500+</span>
				<span class="stat-label">Verified Advisors</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-value">50K+</span>
				<span class="stat-label">Happy Clients</span>
			</div>
			<div class="stat-divider"></div>
			<div class="stat">
				<span class="stat-value">4.9</span>
				<span class="stat-label">Average Rating</span>
			</div>
		</div>

		<div class="cta-wrapper">
			<button class="cta-button">
				<span>Find an Advisor</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</button>
			<span class="cta-subtext">Browse by specialty, availability, or rating</span>
		</div>
	</div>
</section>

<style>
	.find-advisor {
		padding: 6rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.mesh-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #C800BA 0%, #D300C5 60%, #E5007A 100%);
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1.25rem;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.description {
		font-size: 1.15rem;
		color: rgba(255, 255, 255, 0.9);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.avatars-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		margin-bottom: 3rem;
	}

	.avatar-row {
		display: flex;
		justify-content: center;
	}

	.top-row {
		margin-bottom: -25px;
		z-index: 1;
	}

	.bottom-row {
		z-index: 0;
	}

	.avatar-wrapper {
		margin: 0 -10px;
		animation: popIn 0.5s ease-out forwards, float 3s ease-in-out infinite;
		animation-delay: var(--delay), calc(var(--delay) + 0.5s);
		opacity: 0;
	}

	@keyframes popIn {
		from {
			opacity: 0;
			transform: scale(0.8);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}

	.avatar-border {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 4px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s, box-shadow 0.3s;
		cursor: pointer;
	}

	.avatar-border:hover {
		transform: scale(1.15) translateY(-8px);
		box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
		z-index: 10;
		position: relative;
	}

	.avatar-border img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.stats-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		margin-bottom: 2.5rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		padding: 1.5rem 3rem;
		border-radius: 20px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.stat {
		text-align: center;
		color: white;
	}

	.stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.85rem;
		opacity: 0.85;
	}

	.stat-divider {
		width: 1px;
		height: 40px;
		background: rgba(255, 255, 255, 0.3);
	}

	.cta-wrapper {
		text-align: center;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: white;
		color: #7638FA;
		padding: 1.125rem 2.75rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
		margin-bottom: 0.75rem;
	}

	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
	}

	.cta-subtext {
		display: block;
		color: rgba(255, 255, 255, 0.75);
		font-size: 0.9rem;
	}

	@media (max-width: 900px) {
		.avatar-border {
			width: 80px;
			height: 80px;
		}

		.top-row {
			margin-bottom: -20px;
		}

		.stats-row {
			gap: 1.5rem;
			padding: 1.25rem 2rem;
		}

		.stat-value {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 600px) {
		.find-advisor {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2.5rem;
		}

		.avatar-row {
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.avatar-wrapper {
			margin: 0;
		}

		.top-row {
			margin-bottom: 0.5rem;
		}

		.avatar-border {
			width: 70px;
			height: 70px;
		}

		.stats-row {
			flex-direction: column;
			gap: 1rem;
			padding: 1.5rem;
		}

		.stat-divider {
			width: 60px;
			height: 1px;
		}
	}
</style>
