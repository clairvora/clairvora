<!-- Advisors V2a: White background - 4-column compact grid with hover details -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: 'https://i.pravatar.cc/400?img=1', price: 3.99, status: 'online' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: 'https://i.pravatar.cc/400?img=3', price: 4.99, status: 'online' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: 'https://i.pravatar.cc/400?img=5', price: 2.99, status: 'busy' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: 'https://i.pravatar.cc/400?img=8', price: 5.99, status: 'online' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: 'https://i.pravatar.cc/400?img=9', price: 3.49, status: 'online' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: 'https://i.pravatar.cc/400?img=11', price: 2.99, status: 'offline' },
		{ name: 'Willow Grace', specialty: 'Energy Healing', rating: 4.9, reviews: 1543, image: 'https://i.pravatar.cc/400?img=16', price: 4.49, status: 'online' },
		{ name: 'Jasper Truth', specialty: 'Mediumship', rating: 4.8, reviews: 987, image: 'https://i.pravatar.cc/400?img=12', price: 5.49, status: 'busy' },
	];
</script>

<section class="advisors-section">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Our Psychics</span>
			<h2 class="section-title">Meet Your Advisors</h2>
			<p class="section-subtitle">Hand-picked experts ready to guide you on your journey</p>
		</div>

		<div class="advisors-grid">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-image">
						<img src={advisor.image} alt={advisor.name} />
						{#if advisor.status === 'online'}
							<span class="live-badge">● Live</span>
						{/if}
						<div class="card-overlay">
							<button class="overlay-btn">Chat Now</button>
						</div>
					</div>
					<div class="card-content">
						<h3 class="advisor-name">{advisor.name}</h3>
						<p class="advisor-specialty">{advisor.specialty}</p>
						<div class="card-footer">
							<div class="rating">
								<span class="star">★</span>
								<span>{advisor.rating}</span>
							</div>
							<span class="price">${advisor.price}/min</span>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="section-footer">
			<a href="/psychics" class="view-all-link">
				View All Advisors
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M7 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.advisors-section {
		background: white;
		padding: 6rem 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-tag {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
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
		max-width: 500px;
		margin: 0 auto;
	}

	.advisors-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.advisor-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
	}

	.card-image {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.advisor-card:hover .card-image img {
		transform: scale(1.08);
	}

	.live-badge {
		position: absolute;
		top: 10px;
		left: 10px;
		background: rgba(34, 197, 94, 0.95);
		color: white;
		padding: 0.25rem 0.625rem;
		border-radius: 20px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 1rem;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.advisor-card:hover .card-overlay {
		opacity: 1;
	}

	.overlay-btn {
		background: white;
		color: #D300C5;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transform: translateY(10px);
		transition: transform 0.3s;
	}

	.advisor-card:hover .overlay-btn {
		transform: translateY(0);
	}

	.card-content {
		padding: 1rem;
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
		margin-bottom: 0.75rem;
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.star {
		color: #FFD600;
	}

	.price {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.section-footer {
		text-align: center;
		margin-top: 3rem;
	}

	.view-all-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #D300C5;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: gap 0.2s;
	}

	.view-all-link:hover {
		gap: 0.75rem;
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
	}

	@media (max-width: 480px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.advisors-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}

		.card-content {
			padding: 0.75rem;
		}

		.advisor-name {
			font-size: 0.9rem;
		}
	}
</style>
