<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle, ArrowRight } from 'phosphor-svelte';
</script>

<!-- V5: Deep purple with subtle gradient, minimal elegant design -->
<section class="how-it-works">
	<div class="container">
		<h2>How It Works</h2>

		<div class="steps-row">
			{#each [
				{ icon: MagnifyingGlass, title: 'Browse', desc: 'Find your advisor' },
				{ icon: ChatCircle, title: 'Choose', desc: 'Pick your style' },
				{ icon: UserCirclePlus, title: 'Sign Up', desc: 'Create account' },
				{ icon: Sparkle, title: 'Connect', desc: 'Get guidance' }
			] as step, i}
				{#if i > 0}
					<div class="arrow">
						<ArrowRight size={24} weight="bold" />
					</div>
				{/if}
				<div class="step">
					<div class="step-circle">
						<svelte:component this={step.icon} size={28} weight="fill" />
					</div>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</div>
			{/each}
		</div>

		<button class="cta">
			Start Your Reading
			<ArrowRight size={20} weight="bold" />
		</button>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(180deg, #1a1a2e 0%, #2d1b4e 100%);
		padding: 5rem 2rem;
		color: white;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 4rem;
		background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.steps-row {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 4rem;
	}

	.arrow {
		color: rgba(255, 255, 255, 0.3);
		padding-top: 2rem;
	}

	.step {
		flex: 1;
		max-width: 180px;
	}

	.step-circle {
		width: 72px;
		height: 72px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.step:hover .step-circle {
		transform: scale(1.1);
		box-shadow: 0 0 40px rgba(211, 0, 197, 0.5);
	}

	.step h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.step p {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.6);
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

	@media (max-width: 700px) {
		.steps-row {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
		}

		.arrow {
			transform: rotate(90deg);
			padding: 0;
		}

		.step {
			max-width: 250px;
		}
	}
</style>
