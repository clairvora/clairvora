<!-- Advisors V3: Dark purple background, 4 cards, large horizontal cards -->
<script lang="ts">
	const advisors = [
		{
			name: 'Luna Rose',
			specialty: 'Love & Relationships',
			rating: 5.0,
			reviews: 1247,
			image: 'https://i.pravatar.cc/400?img=1',
			price: 3.99,
			status: 'online',
			bio: 'Gifted empath with 15+ years helping souls find their destined connections. Specializing in twin flames and soulmate readings.'
		},
		{
			name: 'Marcus Divine',
			specialty: 'Career & Finance',
			rating: 4.9,
			reviews: 892,
			image: 'https://i.pravatar.cc/400?img=3',
			price: 4.99,
			status: 'online',
			bio: 'Former Wall Street analyst turned spiritual advisor. I blend intuition with practical guidance for your professional path.'
		},
		{
			name: 'Celeste Moon',
			specialty: 'Tarot Reading',
			rating: 4.8,
			reviews: 2103,
			image: 'https://i.pravatar.cc/400?img=5',
			price: 2.99,
			status: 'busy',
			bio: 'Third-generation tarot reader. My cards reveal hidden truths and illuminate the path forward with clarity.'
		},
		{
			name: 'Phoenix Star',
			specialty: 'Spiritual Guidance',
			rating: 5.0,
			reviews: 654,
			image: 'https://i.pravatar.cc/400?img=8',
			price: 5.99,
			status: 'online',
			bio: 'Awakened healer and lightworker. I help you reconnect with your higher self and discover your soul purpose.'
		},
	];
</script>

<section class="advisors-section">
	<div class="container">
		<div class="section-header">
			<h2 class="section-title">Featured Advisors</h2>
			<p class="section-subtitle">Our highest-rated psychics, ready to guide you</p>
		</div>

		<div class="advisors-list">
			{#each advisors as advisor, index}
				<article class="advisor-card {index % 2 === 1 ? 'reversed' : ''}">
					<div class="card-image">
						<img src={advisor.image} alt={advisor.name} />
						<div class="image-overlay"></div>
						{#if advisor.status === 'online'}
							<div class="status-indicator">
								<span class="pulse"></span>
								Available Now
							</div>
						{/if}
					</div>
					<div class="card-content">
						<div class="specialty-tag">{advisor.specialty}</div>
						<h3 class="advisor-name">{advisor.name}</h3>
						<p class="advisor-bio">{advisor.bio}</p>
						<div class="card-meta">
							<div class="rating">
								<span class="stars">★★★★★</span>
								<span class="rating-value">{advisor.rating}</span>
								<span class="review-count">({advisor.reviews.toLocaleString()} reviews)</span>
							</div>
							<div class="price-tag">${advisor.price}<span>/min</span></div>
						</div>
						<div class="card-actions">
							<button class="btn-primary">Start Reading</button>
							<button class="btn-secondary">View Profile</button>
						</div>
					</div>
				</article>
			{/each}
		</div>

		<div class="section-cta">
			<button class="explore-btn">Explore All Advisors</button>
		</div>
	</div>
</section>

<style>
	.advisors-section {
		background: linear-gradient(180deg, #1a1a2e 0%, #16162a 100%);
		padding: 6rem 2rem;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
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
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.advisors-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.advisor-card {
		display: grid;
		grid-template-columns: 300px 1fr;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 24px;
		overflow: hidden;
		transition: transform 0.3s, border-color 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-4px);
		border-color: rgba(211, 0, 197, 0.3);
	}

	.advisor-card.reversed {
		grid-template-columns: 1fr 300px;
	}

	.advisor-card.reversed .card-image {
		order: 2;
	}

	.advisor-card.reversed .card-content {
		order: 1;
	}

	.card-image {
		position: relative;
		aspect-ratio: 1;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.image-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.2) 0%, rgba(211, 0, 197, 0.2) 100%);
	}

	.status-indicator {
		position: absolute;
		bottom: 16px;
		left: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(10px);
		color: #22c55e;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.pulse {
		width: 8px;
		height: 8px;
		background: #22c55e;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(1.2); }
	}

	.card-content {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
	}

	.specialty-tag {
		display: inline-block;
		width: fit-content;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.2) 0%, rgba(211, 0, 197, 0.2) 100%);
		color: #D300C5;
		padding: 0.375rem 1rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.advisor-name {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.75rem;
	}

	.advisor-bio {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		margin-bottom: 1.5rem;
		flex: 1;
	}

	.card-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.stars {
		color: #FFD600;
		font-size: 0.95rem;
	}

	.rating-value {
		color: white;
		font-weight: 700;
	}

	.review-count {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.875rem;
	}

	.price-tag {
		color: white;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.price-tag span {
		font-size: 0.875rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.5);
	}

	.card-actions {
		display: flex;
		gap: 1rem;
	}

	.btn-primary {
		flex: 1;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 1rem 1.5rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(211, 0, 197, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 1rem 1.5rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s;
	}

	.btn-secondary:hover {
		border-color: rgba(255, 255, 255, 0.5);
		color: white;
	}

	.section-cta {
		text-align: center;
		margin-top: 4rem;
	}

	.explore-btn {
		background: transparent;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.3);
		padding: 1rem 3rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s, border-color 0.2s;
	}

	.explore-btn:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 900px) {
		.advisor-card,
		.advisor-card.reversed {
			grid-template-columns: 1fr;
		}

		.advisor-card.reversed .card-image,
		.advisor-card.reversed .card-content {
			order: unset;
		}

		.card-image {
			aspect-ratio: 16/9;
		}
	}

	@media (max-width: 640px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.card-content {
			padding: 1.5rem;
		}

		.advisor-name {
			font-size: 1.5rem;
		}

		.card-actions {
			flex-direction: column;
		}
	}
</style>
