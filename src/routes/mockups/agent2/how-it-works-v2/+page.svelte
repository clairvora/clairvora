<!-- How It Works V2: Horizontal Timeline with Connecting Lines -->
<script lang="ts">
	const steps = [
		{
			number: 1,
			title: 'Choose Your Advisor',
			description: 'Browse profiles, read reviews, and find an advisor who specializes in your questions.',
			icon: '🔍'
		},
		{
			number: 2,
			title: 'Connect Instantly',
			description: 'Start a live chat, phone call, or video session whenever you\'re ready.',
			icon: '💬'
		},
		{
			number: 3,
			title: 'Get Clarity',
			description: 'Receive personalized insights and guidance to help you move forward with confidence.',
			icon: '✨'
		}
	];
</script>

<section class="how-it-works">
	<div class="container">
		<span class="eyebrow">Simple Process</span>
		<h2>How It Works</h2>
		<p class="subtitle">Your journey to clarity in 3 simple steps</p>

		<div class="timeline">
			{#each steps as step, index}
				<div class="step">
					<div class="step-icon-wrapper">
						<div class="step-icon">
							<span class="icon">{step.icon}</span>
						</div>
						{#if index < steps.length - 1}
							<div class="connector"></div>
						{/if}
					</div>
					<div class="step-content">
						<span class="step-number">Step {step.number}</span>
						<h3>{step.title}</h3>
						<p>{step.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="cta-wrapper">
			<button class="cta-button">Get Started Free</button>
			<span class="cta-note">3 free minutes for new clients</span>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		padding: 5rem 2rem;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		text-align: center;
	}

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.subtitle {
		font-size: 1.125rem;
		color: #64748b;
		margin-bottom: 4rem;
	}

	.timeline {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 4rem;
	}

	.step {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.step-icon-wrapper {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.step-icon {
		width: 80px;
		height: 80px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 32px rgba(118, 56, 250, 0.15);
		position: relative;
		z-index: 2;
		border: 3px solid transparent;
		background-image: linear-gradient(white, white), linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		background-origin: border-box;
		background-clip: padding-box, border-box;
	}

	.icon {
		font-size: 2rem;
	}

	.connector {
		position: absolute;
		left: calc(50% + 45px);
		right: calc(-50% + 45px);
		height: 3px;
		background: linear-gradient(90deg, #7638FA 0%, #D300C5 50%, #FF0069 100%);
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}

	.step-content {
		max-width: 280px;
	}

	.step-number {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 600;
		color: #D300C5;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.step h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.75rem;
	}

	.step p {
		color: #64748b;
		line-height: 1.6;
		font-size: 0.95rem;
	}

	.cta-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.cta-button {
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

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(118, 56, 250, 0.35);
	}

	.cta-note {
		font-size: 0.875rem;
		color: #64748b;
	}

	/* Tablet */
	@media (max-width: 768px) {
		.how-it-works {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.timeline {
			flex-direction: column;
			gap: 2rem;
		}

		.step {
			flex-direction: row;
			text-align: left;
			gap: 1.5rem;
		}

		.step-icon-wrapper {
			width: auto;
			margin-bottom: 0;
			flex-shrink: 0;
		}

		.connector {
			display: none;
		}

		.step-icon {
			width: 64px;
			height: 64px;
		}

		.icon {
			font-size: 1.5rem;
		}

		.step-content {
			max-width: none;
		}
	}

	/* Mobile */
	@media (max-width: 480px) {
		.how-it-works {
			padding: 3rem 1rem;
		}

		h2 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 1rem;
			margin-bottom: 2.5rem;
		}

		.step-icon {
			width: 56px;
			height: 56px;
		}

		.icon {
			font-size: 1.25rem;
		}

		.step h3 {
			font-size: 1.1rem;
		}

		.step p {
			font-size: 0.9rem;
		}

		.cta-button {
			width: 100%;
			max-width: 280px;
		}
	}
</style>
