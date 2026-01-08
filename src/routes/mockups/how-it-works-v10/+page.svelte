<script lang="ts">
	// V10: Elegant dark with accent glow, minimal timeline dots, premium feel
</script>

<section class="how-it-works">
	<div class="accent-glow"></div>

	<div class="container">
		<div class="image-col">
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="content-col">
			<div class="header">
				<span class="badge">4 Simple Steps</span>
				<h2>How It Works</h2>
				<p class="subtitle">Discover how easy it is to get the guidance you need. Our streamlined process ensures you connect with the perfect advisor quickly and effortlessly.</p>
			</div>

			<div class="steps">
				{#each [
					{ title: 'Choose Your Advisor', desc: 'Browse our handpicked selection of gifted psychics. Each advisor\'s profile includes their specialties, reviews, and availability.' },
					{ title: 'Select Your Reading Style', desc: 'Decide how you\'d like to connect: choose from call, text, or chat readings.' },
					{ title: 'Create Your Account', desc: 'If you\'re new to Clairvora, setting up an account is quick and easy.' },
					{ title: 'Begin Your Reading', desc: 'Connect with your chosen advisor and embark on your journey to clarity.' }
				] as step, i}
					<div class="step">
						<div class="step-indicator">
							<div class="dot"></div>
							{#if i < 3}<div class="line"></div>{/if}
						</div>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<a href="/psychics" class="cta">
				Start Your Reading
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<path d="M5 12h14M12 5l7 7-7 7"/>
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: #0f0f1a;
		padding: 0;
		color: white;
		min-height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.accent-glow {
		position: absolute;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(211, 0, 197, 0.15) 0%, transparent 70%);
		top: 50%;
		left: 30%;
		transform: translate(-50%, -50%);
		pointer-events: none;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1.1fr;
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
		max-height: 90vh;
		width: auto;
		object-fit: contain;
	}

	.content-col {
		padding: 4rem;
	}

	.header {
		margin-bottom: 3rem;
	}

	.badge {
		display: inline-block;
		background: linear-gradient(135deg, rgba(118, 56, 250, 0.2) 0%, rgba(211, 0, 197, 0.2) 100%);
		border: 1px solid rgba(211, 0, 197, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 500;
		color: #D300C5;
		margin-bottom: 1.25rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.05rem;
		color: rgba(255, 255, 255, 0.5);
		max-width: 500px;
		line-height: 1.7;
	}

	.steps {
		display: flex;
		flex-direction: column;
		margin-bottom: 2.5rem;
	}

	.step {
		display: flex;
		gap: 1.5rem;
	}

	.step-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.25rem;
	}

	.dot {
		width: 12px;
		height: 12px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		flex-shrink: 0;
		box-shadow: 0 0 20px rgba(211, 0, 197, 0.5);
	}

	.line {
		width: 2px;
		flex: 1;
		background: linear-gradient(180deg, rgba(211, 0, 197, 0.5) 0%, rgba(211, 0, 197, 0.1) 100%);
		margin: 0.5rem 0;
	}

	.step-content {
		padding-bottom: 2rem;
	}

	.step-content h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.step-content p {
		color: rgba(255, 255, 255, 0.45);
		font-size: 0.9rem;
		line-height: 1.6;
		max-width: 400px;
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
		font-size: 1rem;
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

		.step-content {
			padding-bottom: 1.5rem;
		}
	}
</style>
