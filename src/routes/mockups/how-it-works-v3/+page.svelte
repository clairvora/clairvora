<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle } from 'phosphor-svelte';
</script>

<!-- V3: Dark gradient, large step numbers, stacked horizontal cards -->
<section class="how-it-works">
	<div class="container">
		<span class="eyebrow">How It Works</span>
		<h2>Your Path to Clarity</h2>

		<div class="steps">
			{#each [
				{ icon: MagnifyingGlass, num: '01', title: 'Choose Your Advisor', desc: 'Browse profiles, read reviews, and find your perfect psychic match.' },
				{ icon: ChatCircle, num: '02', title: 'Select Your Style', desc: 'Connect via phone, chat, or text — whatever suits you best.' },
				{ icon: UserCirclePlus, num: '03', title: 'Create Account', desc: 'Sign up in seconds. Secure, private, and ready instantly.' },
				{ icon: Sparkle, num: '04', title: 'Start Your Reading', desc: 'Connect with your advisor and receive the guidance you seek.' }
			] as step}
				<div class="step-card">
					<span class="big-num">{step.num}</span>
					<div class="step-icon">
						<svelte:component this={step.icon} size={28} weight="fill" />
					</div>
					<div class="step-text">
						<h3>{step.title}</h3>
						<p>{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="cta-row">
			<button class="cta-primary">Find Your Advisor</button>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(160deg, #2d1b4e 0%, #1a1a2e 50%, #0f172a 100%);
		padding: 6rem 2rem;
		color: white;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA, #D300C5, #FF0069);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 3.5rem;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 3rem;
	}

	.step-card {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		padding: 1.5rem 2rem;
		text-align: left;
		transition: background 0.3s, border-color 0.3s;
	}

	.step-card:hover {
		background: rgba(255, 255, 255, 0.06);
		border-color: rgba(255, 255, 255, 0.15);
	}

	.big-num {
		font-size: 3rem;
		font-weight: 800;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1;
		min-width: 70px;
	}

	.step-icon {
		width: 56px;
		height: 56px;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.step-text {
		flex: 1;
	}

	.step-text h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.step-text p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.cta-row {
		margin-top: 2rem;
	}

	.cta-primary {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		color: white;
		padding: 1rem 3rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		border: none;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 40px rgba(211, 0, 197, 0.4);
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2.25rem;
		}

		.step-card {
			flex-wrap: wrap;
			padding: 1.25rem;
		}

		.big-num {
			font-size: 2rem;
			min-width: 50px;
		}

		.step-icon {
			width: 48px;
			height: 48px;
		}

		.step-text {
			width: 100%;
			margin-top: 0.5rem;
		}
	}
</style>
