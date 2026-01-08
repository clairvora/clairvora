<!-- Find Your Advisor V3: Horizontal Scroll Carousel with Glass Cards -->
<script lang="ts">
	const advisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose', specialty: 'Love & Relationships' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine', specialty: 'Career Guidance' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon', specialty: 'Tarot Reading' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star', specialty: 'Spiritual Healing' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage', specialty: 'Dream Analysis' },
		{ image: '/advisors/profile-6.jpg', name: 'River Stone', specialty: 'Past Life Reading' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya', specialty: 'Energy Work' },
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson', specialty: 'Mediumship' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn', specialty: 'Astrology' },
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake', specialty: 'Life Path' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night', specialty: 'Intuitive Guidance' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon', specialty: 'Numerology' },
		{ image: '/advisors/profile-13.jpg', name: 'Willow Grace', specialty: 'Angel Reading' },
	];
</script>

<section class="find-advisor">
	<div class="gradient-bg"></div>

	<div class="container">
		<div class="header">
			<h2>Find Your Advisor</h2>
			<p class="description">
				Discover the perfect psychic to guide you on your journey. Each of our gifted psychics brings unique talents and specialties.
			</p>
		</div>

		<div class="carousel-wrapper">
			<div class="carousel">
				{#each advisors as advisor}
					<div class="advisor-card">
						<div class="card-inner">
							<img src={advisor.image} alt={advisor.name} />
							<div class="card-overlay">
								<span class="advisor-name">{advisor.name}</span>
								<span class="advisor-specialty">{advisor.specialty}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="cta-wrapper">
			<button class="cta-button">
				<span>Find an Advisor</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</button>
		</div>
	</div>
</section>

<style>
	.find-advisor {
		padding: 6rem 0;
		position: relative;
		overflow: hidden;
	}

	.gradient-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #D300C5 0%, #FF0069 60%, #FF7A00 100%);
	}

	.gradient-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		opacity: 0.03;
		pointer-events: none;
	}

	.container {
		position: relative;
		z-index: 1;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 0 2rem;
	}

	h2 {
		font-size: 3.25rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.9);
		max-width: 550px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.carousel-wrapper {
		width: 100%;
		overflow-x: auto;
		padding: 1rem 0 2rem;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.carousel-wrapper::-webkit-scrollbar {
		display: none;
	}

	.carousel {
		display: flex;
		gap: 1.25rem;
		padding: 0 2rem;
		width: max-content;
	}

	.advisor-card {
		flex-shrink: 0;
		width: 160px;
	}

	.card-inner {
		position: relative;
		width: 100%;
		aspect-ratio: 3/4;
		border-radius: 20px;
		overflow: hidden;
		cursor: pointer;
		transition: transform 0.3s;
	}

	.card-inner:hover {
		transform: scale(1.05);
	}

	.card-inner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1rem;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.card-inner:hover .card-overlay {
		opacity: 1;
	}

	.advisor-name {
		color: white;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.advisor-specialty {
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.8rem;
	}

	.cta-wrapper {
		text-align: center;
		padding: 0 2rem;
		margin-top: 1rem;
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
	}

	.cta-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		.find-advisor {
			padding: 4rem 0;
		}

		h2 {
			font-size: 2.25rem;
		}

		.advisor-card {
			width: 130px;
		}
	}

	@media (max-width: 480px) {
		h2 {
			font-size: 1.875rem;
		}

		.description {
			font-size: 1rem;
		}

		.advisor-card {
			width: 110px;
		}

		.card-inner {
			border-radius: 16px;
		}
	}
</style>
