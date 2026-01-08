<script lang="ts">
	// V6: Dark gradient background, vertical timeline with gradient line, image left
</script>

<section class="how-it-works">
	<div class="container">
		<div class="image-col">
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="content-col">
			<h2>How It Works</h2>
			<p class="subtitle">Discover how easy it is to get the guidance you need with Clairvora.</p>

			<div class="steps">
				{#each [
					{ num: '1', title: 'Choose Your Advisor', desc: 'Browse our handpicked selection of gifted psychics. Each profile includes specialties, reviews, and availability.' },
					{ num: '2', title: 'Select Your Reading Style', desc: 'Decide how you\'d like to connect: choose from call, text, or chat readings.' },
					{ num: '3', title: 'Create Your Account', desc: 'If you\'re new to Clairvora, setting up an account is quick and easy.' },
					{ num: '4', title: 'Begin Your Reading', desc: 'Connect with your chosen advisor and embark on your journey to clarity and insight.' }
				] as step}
					<div class="step">
						<div class="step-num">{step.num}</div>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<button class="cta">Get Started Now</button>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
		padding: 0;
		color: white;
		min-height: 100vh;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 100vh;
		align-items: center;
	}

	.image-col {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 2rem;
	}

	.image-col img {
		max-height: 90vh;
		width: auto;
		object-fit: contain;
		filter: drop-shadow(0 20px 60px rgba(118, 56, 250, 0.3));
	}

	.content-col {
		padding: 4rem;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 3rem;
		max-width: 500px;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 3rem;
		position: relative;
		padding-left: 1rem;
	}

	.steps::before {
		content: '';
		position: absolute;
		left: 20px;
		top: 24px;
		bottom: 24px;
		width: 2px;
		background: linear-gradient(180deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
	}

	.step {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
		position: relative;
	}

	.step-num {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1rem;
		flex-shrink: 0;
		position: relative;
		z-index: 1;
	}

	.step-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.step-content p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 40px rgba(211, 0, 197, 0.4);
	}

	@media (max-width: 1024px) {
		.container {
			grid-template-columns: 1fr;
		}

		.image-col {
			order: -1;
			padding: 2rem 2rem 0;
		}

		.image-col img {
			max-height: 50vh;
		}

		.content-col {
			padding: 2rem;
		}

		h2 {
			font-size: 2.5rem;
		}
	}

	@media (max-width: 600px) {
		.content-col {
			padding: 1.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.steps {
			padding-left: 0;
		}

		.steps::before {
			left: 19px;
		}
	}
</style>
