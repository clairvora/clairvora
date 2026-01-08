<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle } from 'phosphor-svelte';
	// V9: Dark gradient, icon-based steps with gradient borders
</script>

<section class="how-it-works">
	<div class="container">
		<div class="image-col">
			<img src="/woman-phone-chair-3.png" alt="Woman enjoying a psychic reading" />
		</div>

		<div class="content-col">
			<h2>How It Works</h2>
			<p class="subtitle">Your path to insight is simple and seamless. Start your journey today.</p>

			<div class="steps">
				{#each [
					{ icon: MagnifyingGlass, title: 'Browse Advisors', desc: 'Explore our curated selection of gifted psychics with detailed profiles and authentic reviews.' },
					{ icon: ChatCircle, title: 'Pick Your Style', desc: 'Choose how to connect — call, text, or live chat. Whatever fits your comfort and schedule.' },
					{ icon: UserCirclePlus, title: 'Quick Sign Up', desc: 'Create your secure account in seconds for a personalized reading experience.' },
					{ icon: Sparkle, title: 'Get Guidance', desc: 'Connect instantly with your advisor and discover the clarity you\'ve been seeking.' }
				] as step}
					<div class="step-card">
						<div class="icon-wrapper">
							<svelte:component this={step.icon} size={24} weight="fill" />
						</div>
						<div class="step-content">
							<h3>{step.title}</h3>
							<p>{step.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="cta-row">
				<a href="/psychics" class="cta-primary">Get Started</a>
				<a href="/how-it-works" class="cta-secondary">Learn More</a>
			</div>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(180deg, #1a1a2e 0%, #2d1b4e 100%);
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
		filter: drop-shadow(0 20px 60px rgba(211, 0, 197, 0.25));
	}

	.content-col {
		padding: 4rem;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 2.5rem;
		max-width: 480px;
		line-height: 1.6;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	.step-card {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
		padding: 1.25rem;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		transition: all 0.3s ease;
	}

	.step-card:hover {
		background: rgba(255, 255, 255, 0.06);
		border-color: rgba(211, 0, 197, 0.3);
		transform: translateX(4px);
	}

	.icon-wrapper {
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.step-content h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.375rem;
	}

	.step-content p {
		color: rgba(255, 255, 255, 0.55);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.cta-row {
		display: flex;
		gap: 1rem;
	}

	.cta-primary {
		display: inline-flex;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 1rem 2.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 40px rgba(211, 0, 197, 0.4);
	}

	.cta-secondary {
		display: inline-flex;
		background: transparent;
		color: white;
		padding: 1rem 2.25rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.3);
		transition: all 0.2s;
	}

	.cta-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.05);
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

		.cta-row {
			flex-direction: column;
		}

		.cta-primary, .cta-secondary {
			text-align: center;
			justify-content: center;
		}
	}
</style>
