<!-- Find Your Advisor V1: Gradient Background with Floating Avatars -->
<script lang="ts">
	const advisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Advisor 1' },
		{ image: '/advisors/profile-2.jpg', name: 'Advisor 2' },
		{ image: '/advisors/profile-3.jpg', name: 'Advisor 3' },
		{ image: '/advisors/profile-4.jpg', name: 'Advisor 4' },
		{ image: '/advisors/profile-5.jpg', name: 'Advisor 5' },
		{ image: '/advisors/profile-6.jpg', name: 'Advisor 6' },
		{ image: '/advisors/profile-7.jpg', name: 'Advisor 7' },
		{ image: '/advisors/profile-8.jpg', name: 'Advisor 8' },
		{ image: '/advisors/profile-9.jpg', name: 'Advisor 9' },
		{ image: '/advisors/profile-10.jpg', name: 'Advisor 10' },
		{ image: '/advisors/profile-11.jpg', name: 'Advisor 11' },
		{ image: '/advisors/profile-12.jpg', name: 'Advisor 12' },
		{ image: '/advisors/profile-13.jpg', name: 'Advisor 13' },
	];
</script>

<section class="find-advisor">
	<div class="container">
		<div class="content">
			<span class="eyebrow">Our Advisors</span>
			<h2>Find Your Advisor</h2>
			<p class="description">
				Discover the perfect psychic to guide you on your journey. Each of our gifted psychics brings unique talents and specialties, ready to provide you with clarity, insight, and direction.
			</p>
		</div>

		<div class="avatars-row">
			{#each advisors as advisor, i}
				<div class="avatar-wrapper" style="--delay: {i * 0.1}s">
					<img src={advisor.image} alt={advisor.name} class="avatar" />
					<div class="avatar-glow"></div>
				</div>
			{/each}
		</div>

		<button class="cta-button">
			<span>Find an Advisor</span>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14M12 5l7 7-7 7"/>
			</svg>
		</button>
	</div>
</section>

<style>
	.find-advisor {
		padding: 6rem 2rem;
		background: linear-gradient(135deg, #D300C5 0%, #FF0069 50%, #FF7A00 100%);
		position: relative;
		overflow: hidden;
	}

	.find-advisor::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
					radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
		pointer-events: none;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.content {
		text-align: center;
		margin-bottom: 3rem;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
	}

	.description {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.9);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.avatars-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.avatar-wrapper {
		position: relative;
		animation: float 3s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid rgba(255, 255, 255, 0.8);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.avatar:hover {
		transform: scale(1.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
	}

	.avatar-glow {
		position: absolute;
		inset: -4px;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), transparent);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	.avatar-wrapper:hover .avatar-glow {
		opacity: 1;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: white;
		color: #D300C5;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 768px) {
		.find-advisor {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.avatar {
			width: 60px;
			height: 60px;
		}

		.avatars-row {
			gap: 0.75rem;
		}
	}

	@media (max-width: 480px) {
		h2 {
			font-size: 1.875rem;
		}

		.description {
			font-size: 1rem;
		}

		.avatar {
			width: 50px;
			height: 50px;
		}
	}
</style>
