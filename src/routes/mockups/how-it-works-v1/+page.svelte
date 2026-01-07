<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle } from 'phosphor-svelte';
</script>

<!-- V1: Dark gradient background, large icons, horizontal layout -->
<section class="how-it-works">
	<div class="container">
		<div class="header">
			<span class="eyebrow">Simple Process</span>
			<h2>How It Works</h2>
			<p class="subtitle">Connect with your perfect advisor in minutes</p>
		</div>

		<div class="steps">
			{#each [
				{ icon: MagnifyingGlass, num: '1', title: 'Browse Advisors', desc: 'Explore profiles, specialties, and reviews' },
				{ icon: ChatCircle, num: '2', title: 'Choose Your Style', desc: 'Call, text, or chat — your preference' },
				{ icon: UserCirclePlus, num: '3', title: 'Create Account', desc: 'Quick signup, instant access' },
				{ icon: Sparkle, num: '4', title: 'Get Your Reading', desc: 'Connect and receive guidance' }
			] as step}
				<div class="step">
					<div class="icon-wrapper">
						<svelte:component this={step.icon} size={36} weight="fill" />
					</div>
					<span class="step-num">{step.num}</span>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</div>
			{/each}
		</div>

		<div class="cta-row">
			<button class="cta-primary">Get Started</button>
			<button class="cta-secondary">Browse Psychics</button>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 6rem 2rem;
		color: white;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 4rem;
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
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.subtitle {
		font-size: 1.25rem;
		opacity: 0.9;
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.step {
		text-align: center;
		position: relative;
	}

	.icon-wrapper {
		width: 80px;
		height: 80px;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		transition: transform 0.3s, background 0.3s;
	}

	.step:hover .icon-wrapper {
		transform: scale(1.1);
		background: rgba(255, 255, 255, 0.25);
	}

	.step-num {
		display: block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		opacity: 0.7;
		margin-bottom: 0.5rem;
	}

	.step h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.step p {
		font-size: 0.95rem;
		opacity: 0.85;
		line-height: 1.5;
	}

	.cta-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.cta-primary {
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

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.cta-secondary {
		background: transparent;
		color: white;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: 2px solid rgba(255, 255, 255, 0.5);
		cursor: pointer;
		transition: border-color 0.2s, background 0.2s;
	}

	.cta-secondary:hover {
		border-color: white;
		background: rgba(255, 255, 255, 0.1);
	}

	@media (max-width: 900px) {
		.steps {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 2.25rem;
		}

		.steps {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.cta-row {
			flex-direction: column;
			align-items: center;
		}

		.cta-primary, .cta-secondary {
			width: 100%;
			max-width: 280px;
		}
	}
</style>
