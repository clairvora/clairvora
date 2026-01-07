<!-- Advisors V2: White background, 6 cards, rectangular photos with rounded corners -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: 'https://i.pravatar.cc/400?img=1', price: 3.99, status: 'online' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: 'https://i.pravatar.cc/400?img=3', price: 4.99, status: 'online' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: 'https://i.pravatar.cc/400?img=5', price: 2.99, status: 'busy' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: 'https://i.pravatar.cc/400?img=8', price: 5.99, status: 'online' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: 'https://i.pravatar.cc/400?img=9', price: 3.49, status: 'online' },
		{ name: 'River Stone', specialty: 'Past Life Reading', rating: 4.7, reviews: 432, image: 'https://i.pravatar.cc/400?img=11', price: 2.99, status: 'offline' },
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
							<span class="live-badge">● Live Now</span>
						{/if}
					</div>
					<div class="card-content">
						<div class="card-header">
							<h3 class="advisor-name">{advisor.name}</h3>
							<span class="price">${advisor.price}/min</span>
						</div>
						<p class="advisor-specialty">{advisor.specialty}</p>
						<div class="rating-row">
							<div class="stars">
								{#each Array(5) as _, i}
									<svg class="star {i < Math.floor(advisor.rating) ? 'filled' : ''}" viewBox="0 0 20 20" fill="currentColor">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								{/each}
							</div>
							<span class="review-count">{advisor.reviews.toLocaleString()} reviews</span>
						</div>
						<div class="card-actions">
							<button class="btn-chat">Chat Now</button>
							<button class="btn-profile">Profile</button>
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
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.advisor-card {
		background: #f8fafc;
		border-radius: 16px;
		overflow: hidden;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	.card-image {
		position: relative;
		aspect-ratio: 4/3;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s;
	}

	.advisor-card:hover .card-image img {
		transform: scale(1.05);
	}

	.live-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		background: rgba(34, 197, 94, 0.95);
		color: white;
		padding: 0.375rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.card-content {
		padding: 1.5rem;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.25rem;
	}

	.advisor-name {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
	}

	.price {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 700;
		font-size: 0.95rem;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: #64748b;
		margin-bottom: 0.75rem;
	}

	.rating-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.stars {
		display: flex;
		gap: 2px;
	}

	.star {
		width: 16px;
		height: 16px;
		color: #e2e8f0;
	}

	.star.filled {
		color: #FFD600;
	}

	.review-count {
		font-size: 0.8rem;
		color: #94a3b8;
	}

	.card-actions {
		display: flex;
		gap: 0.75rem;
	}

	.btn-chat {
		flex: 1;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem 1rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-chat:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(211, 0, 197, 0.3);
	}

	.btn-profile {
		background: white;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.75rem 1rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s;
	}

	.btn-profile:hover {
		border-color: #D300C5;
		color: #D300C5;
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
			max-width: 400px;
			margin: 0 auto;
		}
	}
</style>
