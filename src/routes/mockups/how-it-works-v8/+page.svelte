<script lang="ts">
	// V8: Dark solid background, large step numbers, clean modern layout
</script>

<section class="how-it-works">
	<div class="container">
		<div class="image-col">
			<div class="image-glow"></div>
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="content-col">
			<h2>How It Works</h2>
			<p class="subtitle">Get the guidance you need in just a few simple steps.</p>

			<div class="steps">
				{#each [
					{ num: '01', title: 'Choose Your Advisor', desc: 'Browse our handpicked selection of gifted psychics. Each advisor\'s profile includes their specialties, reviews, and availability.' },
					{ num: '02', title: 'Select Your Reading Style', desc: 'Decide how you\'d like to connect: choose from call, text, or chat readings that fit your schedule.' },
					{ num: '03', title: 'Create Your Account', desc: 'Setting up an account is quick and easy. This ensures a secure and personalized experience.' },
					{ num: '04', title: 'Begin Your Reading', desc: 'Connect with your chosen advisor and embark on your journey to clarity and insight.' }
				] as step}
					<div class="step">
						<span class="step-num">{step.num}</span>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<a href="/psychics" class="cta">
				Find Your Advisor
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: #1a1a2e;
		padding: 0;
		color: white;
		min-height: 100vh;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		min-height: 100vh;
		align-items: center;
	}

	.image-col {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 2rem;
		position: relative;
	}

	.image-glow {
		position: absolute;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(118, 56, 250, 0.4) 0%, transparent 70%);
		bottom: 20%;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
	}

	.image-col img {
		max-height: 90vh;
		width: auto;
		object-fit: contain;
		position: relative;
		z-index: 1;
	}

	.content-col {
		padding: 4rem;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 3rem;
		max-width: 500px;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		margin-bottom: 3rem;
	}

	.step {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.step-num {
		font-size: 2.5rem;
		font-weight: 800;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1;
		flex-shrink: 0;
		width: 60px;
	}

	.step-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.step-content p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		text-decoration: none;
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
			padding: 3rem 2rem 0;
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

		.step-num {
			font-size: 2rem;
			width: 45px;
		}

		.steps {
			gap: 2rem;
		}
	}
</style>
