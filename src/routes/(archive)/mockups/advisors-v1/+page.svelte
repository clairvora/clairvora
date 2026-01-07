<!-- Advisors V1: Cream background, 8 cards, circular photos (legacy-inspired) -->
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
</script>

<section class="advisors-section">
	<div class="container">
		<div class="section-header">
			<h2 class="section-title">Psychic Advisors</h2>
			<p class="section-subtitle">Connect with our most trusted and experienced advisors</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<div class="advisor-card">
					<div class="avatar-wrapper">
						<div class="avatar-ring">
							<img src={advisor.image} alt={advisor.name} class="avatar" />
						</div>
						<span class="status-badge {advisor.status}">{advisor.status}</span>
					</div>
					<h3 class="advisor-name">{advisor.name}</h3>
					<p class="advisor-specialty">{advisor.specialty}</p>
					<div class="rating">
						<span class="stars">{'★'.repeat(Math.floor(advisor.rating))}</span>
						<span class="rating-text">{advisor.rating} ({advisor.reviews.toLocaleString()} reviews)</span>
					</div>
					<button class="view-profile-btn">View Profile</button>
				</div>
			{/each}
		</div>

		<div class="section-cta">
			<button class="browse-all-btn">Browse All Advisors</button>
		</div>
	</div>
</section>

<style>
	.advisors-section {
		background: #FFF9F0;
		padding: 5rem 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: #666;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.advisor-card {
		background: white;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
	}

	.avatar-wrapper {
		position: relative;
		display: inline-block;
		margin-bottom: 1rem;
	}

	.avatar-ring {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 4px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF7A00 100%);
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid white;
	}

	.status-badge {
		position: absolute;
		bottom: 4px;
		right: 4px;
		padding: 0.25rem 0.5rem;
		border-radius: 10px;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		border: 2px solid white;
	}

	.status-badge.online {
		background: #22c55e;
		color: white;
	}

	.status-badge.busy {
		background: #f59e0b;
		color: white;
	}

	.status-badge.offline {
		background: #94a3b8;
		color: white;
	}

	.advisor-name {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: #888;
		margin-bottom: 0.75rem;
	}

	.rating {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		margin-bottom: 1rem;
	}

	.stars {
		color: #FFD600;
		font-size: 1rem;
	}

	.rating-text {
		font-size: 0.8rem;
		color: #666;
	}

	.view-profile-btn {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.view-profile-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(211, 0, 197, 0.3);
	}

	.section-cta {
		text-align: center;
		margin-top: 3rem;
	}

	.browse-all-btn {
		background: transparent;
		color: #D300C5;
		border: 2px solid #D300C5;
		padding: 0.875rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.browse-all-btn:hover {
		background: #D300C5;
		color: white;
	}

	@media (max-width: 1024px) {
		.advisors-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.advisor-card {
			padding: 1.5rem 1rem;
		}

		.avatar-ring {
			width: 80px;
			height: 80px;
		}
	}

	@media (max-width: 480px) {
		.advisors-section {
			padding: 3rem 1rem;
		}

		.advisors-grid {
			grid-template-columns: 1fr;
			max-width: 300px;
			margin: 0 auto;
		}
	}
</style>
