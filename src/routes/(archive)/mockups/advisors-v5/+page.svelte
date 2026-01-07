<!-- Advisors V5: Split background (gradient top / white bottom), 8 cards, minimal modern -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: 'https://i.pravatar.cc/300?img=1', status: 'online' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: 'https://i.pravatar.cc/300?img=3', status: 'online' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: 'https://i.pravatar.cc/300?img=5', status: 'busy' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: 'https://i.pravatar.cc/300?img=8', status: 'online' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: 'https://i.pravatar.cc/300?img=9', status: 'offline' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: 'https://i.pravatar.cc/300?img=11', status: 'online' },
		{ name: 'Willow Grace', specialty: 'Energy Healing', rating: 4.9, reviews: 1543, image: 'https://i.pravatar.cc/300?img=16', status: 'online' },
		{ name: 'Jasper Truth', specialty: 'Mediumship', rating: 4.8, reviews: 987, image: 'https://i.pravatar.cc/300?img=12', status: 'busy' },
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'online': return '#22c55e';
			case 'busy': return '#f59e0b';
			default: return '#94a3b8';
		}
	};
</script>

<section class="advisors-section">
	<div class="gradient-bg"></div>

	<div class="container">
		<div class="section-header">
			<h2 class="section-title">Psychic Advisors</h2>
			<p class="section-subtitle">Connect with gifted readers for personalized guidance</p>

			<div class="filter-tabs">
				<button class="filter-tab active">All</button>
				<button class="filter-tab">Available Now</button>
				<button class="filter-tab">Top Rated</button>
				<button class="filter-tab">New</button>
			</div>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-top">
						<img src={advisor.image} alt={advisor.name} class="avatar" />
						<span class="status-dot" style="background: {getStatusColor(advisor.status)}"></span>
					</div>

					<div class="card-body">
						<h3 class="advisor-name">{advisor.name}</h3>
						<p class="advisor-specialty">{advisor.specialty}</p>

						<div class="rating-line">
							<span class="star">★</span>
							<span class="rating-value">{advisor.rating}</span>
							<span class="divider">·</span>
							<span class="reviews">{advisor.reviews.toLocaleString()}</span>
						</div>
					</div>

					<button class="card-btn">
						<span>Connect</span>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M5 12h14M12 5l7 7-7 7"/>
						</svg>
					</button>
				</article>
			{/each}
		</div>

		<div class="section-cta">
			<a href="/psychics" class="browse-link">
				Browse all 200+ advisors
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.advisors-section {
		position: relative;
		padding: 0;
	}

	.gradient-bg {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 320px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF7A00 100%);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 5rem 2rem 6rem;
		position: relative;
		z-index: 1;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}

	.section-subtitle {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.85);
		margin-bottom: 2rem;
	}

	.filter-tabs {
		display: inline-flex;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.375rem;
		border-radius: 50px;
	}

	.filter-tab {
		background: transparent;
		color: rgba(255, 255, 255, 0.8);
		border: none;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s;
	}

	.filter-tab:hover {
		color: white;
	}

	.filter-tab.active {
		background: white;
		color: #D300C5;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
	}

	.advisor-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
		transition: transform 0.3s, box-shadow 0.3s;
		display: flex;
		flex-direction: column;
	}

	.advisor-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
	}

	.card-top {
		position: relative;
		padding: 1.5rem 1.5rem 0;
		display: flex;
		justify-content: center;
	}

	.avatar {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		object-fit: cover;
	}

	.status-dot {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.card-body {
		padding: 1rem 1.5rem;
		text-align: center;
		flex: 1;
	}

	.advisor-name {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.125rem;
	}

	.advisor-specialty {
		font-size: 0.8rem;
		color: #64748b;
		margin-bottom: 0.625rem;
	}

	.rating-line {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.375rem;
		font-size: 0.8rem;
	}

	.star {
		color: #FFD600;
	}

	.rating-value {
		color: #1a1a2e;
		font-weight: 600;
	}

	.divider {
		color: #cbd5e1;
	}

	.reviews {
		color: #94a3b8;
	}

	.card-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		background: #f8fafc;
		color: #D300C5;
		border: none;
		border-top: 1px solid #f1f5f9;
		padding: 0.875rem;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.card-btn:hover {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
	}

	.section-cta {
		text-align: center;
		margin-top: 3rem;
	}

	.browse-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #D300C5;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: gap 0.2s;
	}

	.browse-link:hover {
		gap: 0.75rem;
	}

	@media (max-width: 1024px) {
		.advisors-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.gradient-bg {
			height: 400px;
		}

		.section-title {
			font-size: 2rem;
		}

		.filter-tabs {
			flex-wrap: wrap;
			justify-content: center;
		}

		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.card-top {
			padding: 1rem 1rem 0;
		}

		.avatar {
			width: 60px;
			height: 60px;
		}

		.card-body {
			padding: 0.75rem 1rem;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 4rem 1rem 5rem;
		}

		.advisors-grid {
			grid-template-columns: 1fr 1fr;
		}

		.advisor-name {
			font-size: 0.9rem;
		}

		.card-btn {
			padding: 0.75rem;
			font-size: 0.8rem;
		}
	}
</style>
