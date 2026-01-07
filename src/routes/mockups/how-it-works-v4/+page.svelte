<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle } from 'phosphor-svelte';
</script>

<!-- V4: Full gradient hero style, floating glass cards in a row -->
<section class="how-it-works">
	<div class="glow glow-1"></div>
	<div class="glow glow-2"></div>

	<div class="container">
		<div class="header">
			<span class="eyebrow">Simple & Fast</span>
			<h2>How It Works</h2>
			<p class="subtitle">From curiosity to clarity in four easy steps</p>
		</div>

		<div class="cards">
			{#each [
				{ icon: MagnifyingGlass, num: '1', title: 'Browse', desc: 'Find your perfect advisor' },
				{ icon: ChatCircle, num: '2', title: 'Choose', desc: 'Call, chat, or text' },
				{ icon: UserCirclePlus, num: '3', title: 'Sign Up', desc: 'Quick & secure' },
				{ icon: Sparkle, num: '4', title: 'Connect', desc: 'Get your reading' }
			] as step}
				<div class="card">
					<div class="card-inner">
						<div class="step-num">{step.num}</div>
						<div class="icon">
							<svelte:component this={step.icon} size={32} weight="fill" />
						</div>
						<h3>{step.title}</h3>
						<p>{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="cta-group">
			<button class="cta-primary">Get Started</button>
			<button class="cta-secondary">View Advisors</button>
		</div>

		<div class="trust-badge">
			<span class="stars">★★★★★</span>
			<span>Trusted by 50,000+ clients</span>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		padding: 6rem 2rem;
		color: white;
		position: relative;
		overflow: hidden;
	}

	.glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.3;
		pointer-events: none;
	}

	.glow-1 {
		width: 400px;
		height: 400px;
		background: #FFD600;
		top: -100px;
		right: -100px;
	}

	.glow-2 {
		width: 300px;
		height: 300px;
		background: #7638FA;
		bottom: -80px;
		left: -80px;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.header {
		margin-bottom: 3.5rem;
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
		margin-bottom: 0.75rem;
	}

	.subtitle {
		font-size: 1.25rem;
		opacity: 0.9;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.card {
		position: relative;
	}

	.card-inner {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 24px;
		padding: 2rem 1.5rem;
		transition: transform 0.3s, background 0.3s;
	}

	.card:hover .card-inner {
		transform: translateY(-8px);
		background: rgba(255, 255, 255, 0.15);
	}

	.step-num {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		color: #D300C5;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		font-size: 0.875rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		margin-bottom: 1rem;
	}

	.card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.375rem;
	}

	.card p {
		font-size: 0.9rem;
		opacity: 0.85;
	}

	.cta-group {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
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

	.trust-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.stars {
		color: #FFD600;
	}

	@media (max-width: 900px) {
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 2.5rem;
		}

		.cards {
			grid-template-columns: 1fr;
			max-width: 300px;
			margin-left: auto;
			margin-right: auto;
		}

		.cta-group {
			flex-direction: column;
			align-items: center;
		}

		.cta-primary, .cta-secondary {
			width: 100%;
			max-width: 280px;
		}
	}
</style>
