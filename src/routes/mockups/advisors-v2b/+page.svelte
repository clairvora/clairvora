<!-- Advisors V2b: White background - list view with full-width cards -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: 'https://i.pravatar.cc/400?img=1', price: 3.99, status: 'online', bio: 'Gifted empath with 15+ years helping souls find their destined connections. Specializing in twin flames and soulmate readings.' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: 'https://i.pravatar.cc/400?img=3', price: 4.99, status: 'online', bio: 'Former Wall Street analyst turned spiritual advisor. I blend intuition with practical guidance for your professional path.' },
		{ name: 'Celeste Moon', specialty: 'Tarot Reading', rating: 4.8, reviews: 2103, image: 'https://i.pravatar.cc/400?img=5', price: 2.99, status: 'busy', bio: 'Third-generation tarot reader. My cards reveal hidden truths and illuminate the path forward with clarity.' },
		{ name: 'Phoenix Star', specialty: 'Spiritual Guidance', rating: 5.0, reviews: 654, image: 'https://i.pravatar.cc/400?img=8', price: 5.99, status: 'online', bio: 'Awakened healer and lightworker. I help you reconnect with your higher self and discover your soul purpose.' },
		{ name: 'Aurora Sage', specialty: 'Dream Analysis', rating: 4.9, reviews: 1876, image: 'https://i.pravatar.cc/400?img=9', price: 3.49, status: 'online', bio: 'Dream interpreter and sleep guide. Unlock the messages your subconscious mind sends you every night.' },
	];
</script>

<section class="advisors-section">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Our Psychics</span>
			<h2 class="section-title">Meet Your Advisors</h2>
			<p class="section-subtitle">Hand-picked experts ready to guide you on your journey</p>
		</div>

		<div class="advisors-list">
			{#each advisors as advisor}
				<article class="advisor-card">
					<div class="card-image">
						<img src={advisor.image} alt={advisor.name} />
						{#if advisor.status === 'online'}
							<span class="status-badge online">Available</span>
						{:else if advisor.status === 'busy'}
							<span class="status-badge busy">In Session</span>
						{:else}
							<span class="status-badge offline">Offline</span>
						{/if}
					</div>
					<div class="card-content">
						<div class="card-main">
							<div class="card-header">
								<h3 class="advisor-name">{advisor.name}</h3>
								<span class="advisor-specialty">{advisor.specialty}</span>
							</div>
							<p class="advisor-bio">{advisor.bio}</p>
							<div class="rating-row">
								<div class="stars">
									{#each Array(5) as _, i}
										<svg class="star {i < Math.floor(advisor.rating) ? 'filled' : ''}" viewBox="0 0 20 20" fill="currentColor">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									{/each}
								</div>
								<span class="rating-value">{advisor.rating}</span>
								<span class="review-count">({advisor.reviews.toLocaleString()} reviews)</span>
							</div>
						</div>
						<div class="card-actions">
							<div class="price">${advisor.price}<span>/min</span></div>
							<div class="buttons">
								<button class="btn-chat">
									{#if advisor.status === 'online'}
										Chat Now
									{:else if advisor.status === 'busy'}
										Join Queue
									{:else}
										Schedule
									{/if}
								</button>
								<button class="btn-profile">View Profile</button>
							</div>
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
		background: #f8fafc;
		padding: 6rem 2rem;
	}

	.container {
		max-width: 900px;
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

	.advisors-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.advisor-card {
		background: white;
		border-radius: 16px;
		overflow: hidden;
		display: flex;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.advisor-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
	}

	.card-image {
		position: relative;
		width: 180px;
		flex-shrink: 0;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.status-badge {
		position: absolute;
		bottom: 12px;
		left: 12px;
		padding: 0.375rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.status-badge.online {
		background: rgba(34, 197, 94, 0.95);
		color: white;
	}

	.status-badge.busy {
		background: rgba(245, 158, 11, 0.95);
		color: white;
	}

	.status-badge.offline {
		background: rgba(100, 116, 139, 0.95);
		color: white;
	}

	.card-content {
		flex: 1;
		padding: 1.5rem;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}

	.card-main {
		flex: 1;
	}

	.card-header {
		margin-bottom: 0.5rem;
	}

	.advisor-name {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.125rem;
	}

	.advisor-specialty {
		font-size: 0.875rem;
		color: #D300C5;
		font-weight: 500;
	}

	.advisor-bio {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
		margin-bottom: 0.75rem;
	}

	.rating-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
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

	.rating-value {
		font-weight: 600;
		color: #1a1a2e;
		font-size: 0.9rem;
	}

	.review-count {
		font-size: 0.85rem;
		color: #94a3b8;
	}

	.card-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		gap: 1rem;
	}

	.price {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
	}

	.price span {
		font-size: 0.95rem;
		font-weight: 500;
		color: #64748b;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.btn-chat {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border: none;
		padding: 0.75rem 2rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
		white-space: nowrap;
	}

	.btn-chat:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(211, 0, 197, 0.3);
	}

	.btn-profile {
		background: transparent;
		color: #64748b;
		border: 1px solid #e2e8f0;
		padding: 0.75rem 2rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: border-color 0.2s, color 0.2s;
		white-space: nowrap;
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

	@media (max-width: 768px) {
		.advisor-card {
			flex-direction: column;
		}

		.card-image {
			width: 100%;
			height: 200px;
		}

		.card-content {
			flex-direction: column;
			gap: 1rem;
		}

		.card-actions {
			align-items: stretch;
		}

		.price {
			text-align: center;
		}

		.buttons {
			flex-direction: row;
		}

		.btn-chat, .btn-profile {
			flex: 1;
		}

		.section-title {
			font-size: 2rem;
		}
	}

	@media (max-width: 480px) {
		.advisors-section {
			padding: 4rem 1rem;
		}

		.buttons {
			flex-direction: column;
		}
	}
</style>
