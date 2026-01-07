<!-- Why Choose Clairvora V1: Starter template -->
<!-- TODO: Create trust/value props section -->
<script lang="ts">
	const reasons = [
		{ icon: '🔮', title: 'Verified Psychics', description: 'Every advisor passes our rigorous screening process.' },
		{ icon: '💬', title: '24/7 Availability', description: 'Connect with advisors anytime, day or night.' },
		{ icon: '🔒', title: 'Private & Secure', description: 'Your readings are completely confidential.' },
		{ icon: '💰', title: 'Satisfaction Guaranteed', description: 'Not happy? Get your money back.' },
	];
</script>

<section class="why-choose">
	<div class="container">
		<h2>Why Choose Clairvora</h2>
		<p>Trusted by over 50,000 clients worldwide</p>

		<!-- Build your design here -->
		<div class="reasons">
			{#each reasons as reason}
				<div class="reason">
					<span class="icon">{reason.icon}</span>
					<h3>{reason.title}</h3>
					<p>{reason.description}</p>
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

	.why-choose {
		padding: 6rem 2rem;
		background: #f8fafc;
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

	.reasons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}

	.reason {
		padding: 2rem;
		background: white;
		border-radius: 16px;
	}

	.icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: block;
	}

	.reason h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.reason p {
		color: #64748b;
		font-size: 0.9rem;
		line-height: 1.5;
	}
</style>
