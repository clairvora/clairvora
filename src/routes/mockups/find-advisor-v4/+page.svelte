<!-- Find Your Advisor V4: Centered Hexagon Pattern -->
<script lang="ts">
	const featuredAdvisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage' },
		{ image: '/advisors/profile-6.jpg', name: 'River Stone' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya' },
	];

	const outerAdvisors = [
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn' },
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon' },
		{ image: '/advisors/profile-13.jpg', name: 'Willow Grace' },
	];
</script>

<section class="find-advisor">
	<div class="bg-pattern"></div>

	<div class="container">
		<div class="two-col-layout">
			<div class="content-col">
				<span class="eyebrow">Meet Our Team</span>
				<h2>Find Your Advisor</h2>
				<p class="description">
					Discover the perfect psychic to guide you on your journey. Each of our gifted psychics brings unique talents and specialties, ready to provide you with clarity, insight, and direction.
				</p>
				<button class="cta-button">
					<span>Find an Advisor</span>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</button>
			</div>

			<div class="avatars-col">
				<div class="avatar-cluster">
					<!-- Center avatar (larger) -->
					<div class="avatar-item center">
						<img src={featuredAdvisors[0].image} alt={featuredAdvisors[0].name} />
					</div>
					<!-- Inner ring -->
					{#each featuredAdvisors.slice(1) as advisor, i}
						<div class="avatar-item inner" style="--angle: {i * 60}deg">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					{/each}
					<!-- Outer ring -->
					{#each outerAdvisors as advisor, i}
						<div class="avatar-item outer" style="--angle: {i * 60 + 30}deg">
							<img src={advisor.image} alt={advisor.name} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.find-advisor {
		padding: 6rem 2rem;
		background: linear-gradient(160deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		position: relative;
		overflow: hidden;
	}

	.bg-pattern {
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 35%);
		pointer-events: none;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.two-col-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.content-col {
		color: white;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		line-height: 1.1;
	}

	.description {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.7;
		margin-bottom: 2.5rem;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: white;
		color: #7638FA;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
	}

	.avatars-col {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.avatar-cluster {
		position: relative;
		width: 400px;
		height: 400px;
	}

	.avatar-item {
		position: absolute;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid rgba(255, 255, 255, 0.8);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s, box-shadow 0.3s;
		cursor: pointer;
	}

	.avatar-item:hover {
		transform: scale(1.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	.avatar-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.avatar-item.center {
		width: 120px;
		height: 120px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.avatar-item.center:hover {
		transform: translate(-50%, -50%) scale(1.1);
	}

	.avatar-item.inner {
		width: 80px;
		height: 80px;
		top: 50%;
		left: 50%;
		--radius: 110px;
		transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--radius))) rotate(calc(-1 * var(--angle)));
	}

	.avatar-item.inner:hover {
		transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--radius))) rotate(calc(-1 * var(--angle))) scale(1.15);
	}

	.avatar-item.outer {
		width: 60px;
		height: 60px;
		top: 50%;
		left: 50%;
		--radius: 180px;
		transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--radius))) rotate(calc(-1 * var(--angle)));
		opacity: 0.85;
	}

	.avatar-item.outer:hover {
		transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * var(--radius))) rotate(calc(-1 * var(--angle))) scale(1.2);
		opacity: 1;
	}

	@media (max-width: 1024px) {
		.two-col-layout {
			grid-template-columns: 1fr;
			gap: 3rem;
			text-align: center;
		}

		.content-col {
			order: 1;
		}

		.avatars-col {
			order: 0;
		}

		h2 {
			font-size: 2.75rem;
		}
	}

	@media (max-width: 600px) {
		.find-advisor {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.avatar-cluster {
			width: 300px;
			height: 300px;
		}

		.avatar-item.center {
			width: 90px;
			height: 90px;
		}

		.avatar-item.inner {
			width: 60px;
			height: 60px;
			--radius: 80px;
		}

		.avatar-item.outer {
			width: 45px;
			height: 45px;
			--radius: 130px;
		}
	}
</style>
