<!-- Advisors V4: Gradient continuation, 6 cards, glassmorphism style -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: 'https://i.pravatar.cc/300?img=1', price: 3.99, status: 'online' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: 'https://i.pravatar.cc/300?img=3', price: 4.99, status: 'online' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: 'https://i.pravatar.cc/300?img=5', price: 2.99, status: 'busy' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: 'https://i.pravatar.cc/300?img=8', price: 5.99, status: 'online' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: 'https://i.pravatar.cc/300?img=9', price: 3.49, status: 'online' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: 'https://i.pravatar.cc/300?img=11', price: 2.99, status: 'offline' },
	];
</script>

<section class="advisors-section">
	<div class="floating-orbs">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>

	<div class="container">
		<div class="section-header">
			<h2 class="section-title">Psychic Advisors</h2>
			<p class="section-subtitle">Discover guidance from our gifted community</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-glow"></div>
					<div class="card-inner">
						<div class="avatar-section">
							<div class="avatar-container">
								<img src={advisor.image} alt={advisor.name} class="avatar" />
								{#if advisor.status === 'online'}
									<span class="online-dot"></span>
								{/if}
							</div>
							<div class="price-badge">${advisor.price}/min</div>
						</div>

						<h3 class="advisor-name">{advisor.name}</h3>
						<p class="advisor-specialty">{advisor.specialty}</p>

						<div class="stats-row">
							<div class="stat">
								<span class="stat-value">★ {advisor.rating}</span>
							</div>
							<div class="stat-divider"></div>
							<div class="stat">
								<span class="stat-value">{advisor.reviews.toLocaleString()}</span>
								<span class="stat-label">reviews</span>
							</div>
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

<style>
	.advisors-section {
		background: linear-gradient(180deg, #D300C5 0%, #FF0069 50%, #FF7A00 100%);
		padding: 6rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.floating-orbs {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.4;
	}

	.orb-1 {
		width: 400px;
		height: 400px;
		background: #7638FA;
		top: -100px;
		left: -100px;
		animation: float 12s ease-in-out infinite;
	}

	.orb-2 {
		width: 300px;
		height: 300px;
		background: #FFD600;
		bottom: -50px;
		right: -50px;
		animation: float 10s ease-in-out infinite reverse;
	}

	.orb-3 {
		width: 200px;
		height: 200px;
		background: white;
		top: 50%;
		left: 50%;
		animation: float 8s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translate(0, 0); }
		50% { transform: translate(30px, -30px); }
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 2.75rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.75rem;
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.85);
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 100%);
		border-radius: 24px;
		z-index: 0;
	}

	.card-inner {
		position: relative;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(20px);
		border-radius: 23px;
		padding: 2rem 1.5rem;
		text-align: center;
		z-index: 1;
	}

	.avatar-section {
		position: relative;
		display: inline-block;
		margin-bottom: 1rem;
	}

	.avatar-container {
		position: relative;
		width: 150px;
		height: 150px;
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid rgba(255, 255, 255, 0.5);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
	}

	.online-dot {
		position: absolute;
		bottom: 4px;
		right: 4px;
		width: 16px;
		height: 16px;
		background: #22c55e;
		border-radius: 50%;
		border: 3px solid rgba(255, 255, 255, 0.8);
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
	}

	.price-badge {
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		color: #D300C5;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		white-space: nowrap;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.advisor-name {
		font-size: 1.25rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.25rem;
		margin-top: 0.5rem;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.75);
		margin-bottom: 1rem;
	}

	.stats-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.25rem;
	}

	.stat {
		display: flex;
		align-items: baseline;
		gap: 0.25rem;
	}

	.stat-value {
		color: white;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.stat-label {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.8rem;
	}

	.stat-divider {
		width: 1px;
		height: 16px;
		background: rgba(255, 255, 255, 0.3);
	}

	.connect-btn {
		width: 100%;
		background: white;
		color: #D300C5;
		border: none;
		padding: 0.875rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.connect-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
	}

	.section-footer {
		text-align: center;
		margin-top: 3rem;
	}

	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s, transform 0.2s;
	}

	.view-all-btn:hover {
		background: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
	}

	@media (max-width: 1024px) {
		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.advisors-grid {
			grid-template-columns: 1fr;
			max-width: 320px;
			margin: 0 auto;
		}

		.card-inner {
			padding: 1.5rem 1.25rem;
		}
	}
</style>
