<script lang="ts">
	// V7: Full hero gradient, glass cards for steps, image left
</script>

<section class="how-it-works">
	<div class="glow glow-1"></div>
	<div class="glow glow-2"></div>

	<div class="container">
		<div class="image-col">
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="content-col">
			<span class="eyebrow">Simple & Easy</span>
			<h2>How It Works</h2>
			<p class="subtitle">Your journey to clarity begins here. Connect with trusted advisors in four simple steps.</p>

			<div class="steps">
				{#each [
					{ num: '1', title: 'Choose Your Advisor', desc: 'Browse gifted psychics with detailed profiles and reviews.' },
					{ num: '2', title: 'Select Your Style', desc: 'Pick from call, text, or live chat readings.' },
					{ num: '3', title: 'Create Account', desc: 'Quick signup for a personalized experience.' },
					{ num: '4', title: 'Begin Reading', desc: 'Connect instantly and find your answers.' }
				] as step}
					<div class="step-card">
						<div class="step-num">{step.num}</div>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<button class="cta">Start Your Reading</button>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 0;
		color: white;
		min-height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.3;
		pointer-events: none;
	}

	.glow-1 {
		width: 500px;
		height: 500px;
		background: #FFD600;
		top: -150px;
		right: -100px;
	}

	.glow-2 {
		width: 400px;
		height: 400px;
		background: #7638FA;
		bottom: -100px;
		left: 20%;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 100vh;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.image-col {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 2rem;
	}

	.image-col img {
		max-height: 85vh;
		width: auto;
		object-fit: contain;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3));
	}

	.content-col {
		padding: 4rem;
	}

	.eyebrow {
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.125rem;
		opacity: 0.9;
		margin-bottom: 2.5rem;
		max-width: 450px;
		line-height: 1.6;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.step-card {
		display: flex;
		gap: 1rem;
		align-items: center;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 1.25rem 1.5rem;
		transition: transform 0.3s, background 0.3s;
	}

	.step-card:hover {
		transform: translateX(8px);
		background: rgba(255, 255, 255, 0.15);
	}

	.step-num {
		width: 36px;
		height: 36px;
		background: white;
		color: #D300C5;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.95rem;
		flex-shrink: 0;
	}

	.step-content h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.step-content p {
		opacity: 0.85;
		font-size: 0.9rem;
	}

	.cta {
		display: inline-flex;
		background: white;
		color: #D300C5;
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
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 1024px) {
		.container {
			grid-template-columns: 1fr;
		}

		.image-col {
			order: -1;
			padding: 3rem 2rem 0;
		}

		.image-col img {
			max-height: 45vh;
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

		.step-card {
			padding: 1rem;
		}
	}
</style>
