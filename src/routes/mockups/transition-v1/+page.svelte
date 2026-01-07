<!-- Transition V1: Extended gradient fade - hero gradient continues and fades into section -->
<script lang="ts">
	const advisors = [
		{ name: 'Luna Rose', specialty: 'Love & Relationships', rating: 5.0, reviews: 1247, image: '/psychics/profile-1.jpg', price: 3.99, status: 'online' },
		{ name: 'Marcus Divine', specialty: 'Career & Finance', rating: 4.9, reviews: 892, image: '/psychics/profile-2.jpg', price: 4.99, status: 'online' },
	];
</script>

<div class="hero-stub">
	<div class="hero-content">
		<span class="label">Hero Section Above</span>
	</div>
</div>

<!-- V1: Extended gradient that fades to white -->
<div class="transition-zone"></div>

<section class="advisors-section">
	<div class="container">
		<h2>Psychic Advisors</h2>
		<p class="subtitle">Discover guidance from our gifted community</p>
		<div class="cards">
			{#each advisors as advisor}
				<div class="card">
					<img src={advisor.image} alt={advisor.name} />
					<h3>{advisor.name}</h3>
					<p>{advisor.specialty}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero-stub {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		min-height: 300px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 2rem;
	}

	.hero-content {
		text-align: center;
	}

	.label {
		color: white;
		font-size: 1.5rem;
		font-weight: 600;
		opacity: 0.8;
	}

	/* V1: Extended gradient fade zone */
	.transition-zone {
		height: 200px;
		background: linear-gradient(
			180deg,
			#FF7A00 0%,
			rgba(255, 122, 0, 0.5) 20%,
			rgba(255, 122, 0, 0.2) 40%,
			rgba(255, 122, 0, 0.05) 70%,
			#ffffff 100%
		);
	}

	.advisors-section {
		background: #ffffff;
		padding: 4rem 2rem 6rem;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #64748b;
		font-size: 1.1rem;
		margin-bottom: 3rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.card {
		background: white;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
		text-align: center;
	}

	.card img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1rem;
	}

	.card h3 {
		font-size: 1.1rem;
		color: #1a1a2e;
		margin-bottom: 0.25rem;
	}

	.card p {
		color: #D300C5;
		font-size: 0.9rem;
	}
</style>
