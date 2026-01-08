<!-- Find Your Advisor V2: Staggered Grid with Gradient Orbs -->
<script lang="ts">
	const advisors = [
		{ image: '/advisors/profile-1.jpg', name: 'Luna Rose' },
		{ image: '/advisors/profile-2.jpg', name: 'Marcus Divine' },
		{ image: '/advisors/profile-3.jpg', name: 'Celeste Moon' },
		{ image: '/advisors/profile-4.jpg', name: 'Phoenix Star' },
		{ image: '/advisors/profile-5.jpg', name: 'Aurora Sage' },
		{ image: '/advisors/profile-6.jpg', name: 'River Stone' },
		{ image: '/advisors/profile-7.jpg', name: 'Mystic Maya' },
		{ image: '/advisors/profile-8.jpg', name: 'Sage Wilson' },
		{ image: '/advisors/profile-9.jpg', name: 'Crystal Dawn' },
		{ image: '/advisors/profile-10.jpg', name: 'Orion Blake' },
		{ image: '/advisors/profile-11.jpg', name: 'Stella Night' },
		{ image: '/advisors/profile-12.jpg', name: 'Jasper Moon' },
	];
</script>

<section class="find-advisor">
	<div class="bg-orbs">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>

	<div class="container">
		<div class="header">
			<span class="eyebrow">Discover Your Guide</span>
			<h2>Find Your Advisor</h2>
			<p class="description">
				Each of our gifted psychics brings unique talents and specialties. Click on a picture to learn more about each psychic and find the one who resonates with you.
			</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor, i}
				<div class="advisor-item" style="--index: {i}">
					<div class="avatar-ring">
						<img src={advisor.image} alt={advisor.name} />
					</div>
					<span class="advisor-name">{advisor.name}</span>
				</div>
			{/each}
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
		padding: 6rem 2rem;
		background: linear-gradient(160deg, #7638FA 0%, #D300C5 40%, #FF0069 100%);
		position: relative;
		overflow: hidden;
	}

	.bg-orbs {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.4;
	}

	.orb-1 {
		width: 400px;
		height: 400px;
		background: #FFD600;
		top: -100px;
		right: -100px;
		animation: drift 8s ease-in-out infinite;
	}

	.orb-2 {
		width: 300px;
		height: 300px;
		background: #00D4FF;
		bottom: -50px;
		left: -50px;
		animation: drift 10s ease-in-out infinite reverse;
	}

	.orb-3 {
		width: 200px;
		height: 200px;
		background: #FF7A00;
		top: 50%;
		left: 30%;
		animation: drift 12s ease-in-out infinite;
	}

	@keyframes drift {
		0%, 100% { transform: translate(0, 0); }
		50% { transform: translate(30px, -20px); }
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	h2 {
		font-size: 3.25rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.85);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 2rem 1.5rem;
		margin-bottom: 3rem;
	}

	.advisor-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		animation: fadeUp 0.6s ease-out forwards;
		animation-delay: calc(var(--index) * 0.05s);
		opacity: 0;
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.avatar-ring {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 3px;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
		transition: transform 0.3s, box-shadow 0.3s;
		cursor: pointer;
	}

	.avatar-ring:hover {
		transform: scale(1.1);
		box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
	}

	.avatar-ring img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.advisor-name {
		font-size: 0.85rem;
		color: white;
		font-weight: 500;
		text-align: center;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.advisor-item:hover .advisor-name {
		opacity: 1;
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

	@media (max-width: 900px) {
		.advisors-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 600px) {
		.find-advisor {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2.25rem;
		}

		.advisors-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem 1rem;
		}

		.avatar-ring {
			width: 80px;
			height: 80px;
		}
	}

	@media (max-width: 400px) {
		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
