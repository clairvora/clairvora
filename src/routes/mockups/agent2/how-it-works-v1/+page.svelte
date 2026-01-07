<!-- How It Works V1: Starter template -->
<!-- TODO: Create 3-step process section -->
<script lang="ts">
	const steps = [
		{ number: 1, title: 'Choose Your Advisor', description: 'Browse our verified psychics and find the perfect match for your needs.' },
		{ number: 2, title: 'Connect Instantly', description: 'Start a chat, call, or video session with your chosen advisor.' },
		{ number: 3, title: 'Get Clarity', description: 'Receive personalized guidance and insights for your journey.' },
	];
</script>

<section class="how-it-works">
	<div class="container">
		<h2>How It Works</h2>
		<p>Your journey to clarity in 3 simple steps</p>

		<!-- Build your design here -->
		<div class="steps">
			{#each steps as step}
				<div class="step">
					<span class="step-number">{step.number}</span>
					<h3>{step.title}</h3>
					<p>{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/*
	Design tokens:
	- Vibrant gradient (hero only): linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%)
	- Soft gradient (sections): linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%)
	- Or use: white, #f8fafc, #FFF9F0
	- Brand purple: #7638FA
	- Brand magenta: #D300C5
	- Brand pink: #FF0069
	- Brand orange: #FF7A00
	*/

	.how-it-works {
		padding: 6rem 2rem;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}

	.step {
		padding: 2rem;
	}

	.step-number {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		color: white;
		border-radius: 50%;
		font-weight: 700;
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.step h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.step p {
		color: #64748b;
		line-height: 1.6;
	}
</style>
