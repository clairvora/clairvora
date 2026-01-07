<!-- Advisors V4a: Gradient glassmorphism - 2-column layout with larger cards -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: '/psychics/profile-1.jpg', price: 3.99, status: 'online', bio: 'Gifted empath specializing in twin flames and soulmate connections.' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: '/psychics/profile-2.jpg', price: 4.99, status: 'online', bio: 'Former analyst turned spiritual advisor for professional guidance.' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: '/psychics/profile-3.jpg', price: 2.99, status: 'busy', bio: 'Third-generation tarot reader revealing hidden truths.' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: '/psychics/profile-4.jpg', price: 5.99, status: 'online', bio: 'Awakened healer helping you discover your soul purpose.' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: '/psychics/profile-5.jpg', price: 3.49, status: 'online', bio: 'Dream interpreter unlocking messages from your subconscious.' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: '/psychics/profile-6.jpg', price: 2.99, status: 'offline', bio: 'Past life specialist revealing karmic patterns and soul lessons.' },
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

<style>
	.advisors-section {
		background: #ffffff;
		padding: 6rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.floating-orbs {
		display: none;
	}

	.container {
		max-width: 1000px;
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
</style>
