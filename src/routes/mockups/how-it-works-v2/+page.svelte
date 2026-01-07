<script lang="ts">
	import { MagnifyingGlass, ChatCircle, UserCirclePlus, Sparkle, ArrowRight } from 'phosphor-svelte';
</script>

<!-- V2: Dark purple solid, numbered circles with connecting line -->
<section class="how-it-works">
	<div class="container">
		<div class="header">
			<span class="eyebrow">Get Started</span>
			<h2>Four Steps to Clarity</h2>
		</div>

		<div class="timeline">
			<div class="line"></div>
			{#each [
				{ icon: MagnifyingGlass, num: '1', title: 'Find Your Advisor', desc: 'Browse our curated selection of gifted psychics. Read reviews, check specialties, and find your perfect match.' },
				{ icon: ChatCircle, num: '2', title: 'Pick How to Connect', desc: 'Choose your preferred reading style — phone call, live chat, or text message. Whatever feels right.' },
				{ icon: UserCirclePlus, num: '3', title: 'Quick Account Setup', desc: 'Create your free account in seconds. Secure, private, and ready when you are.' },
				{ icon: Sparkle, num: '4', title: 'Begin Your Journey', desc: 'Connect instantly with your advisor and receive the guidance you\'ve been seeking.' }
			] as step, i}
				<div class="step">
					<div class="step-marker">
						<span class="num">{step.num}</span>
					</div>
					<div class="step-content">
						<div class="icon-badge">
							<svelte:component this={step.icon} size={24} weight="fill" />
						</div>
						<h3>{step.title}</h3>
						<p>{step.desc}</p>
					</div>
				</div>
			{/each}
		</div>

		<a href="#" class="cta-link">
			Start Your Reading
			<ArrowRight size={20} weight="bold" />
		</a>
	</div>
</section>

<style>
	.how-it-works {
		background: #1a1a2e;
		padding: 6rem 2rem;
		color: white;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
	}

	.timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.line {
		position: absolute;
		left: 24px;
		top: 60px;
		bottom: 60px;
		width: 2px;
		background: linear-gradient(180deg, #7638FA, #D300C5, #FF0069, #FF7A00);
		border-radius: 2px;
	}

	.step {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
	}

	.step-marker {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
		z-index: 1;
	}

	.num {
		font-size: 1.25rem;
		font-weight: 700;
	}

	.step-content {
		flex: 1;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 1.5rem 2rem;
	}

	.icon-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		background: linear-gradient(135deg, #7638FA, #D300C5);
		border-radius: 12px;
		margin-bottom: 1rem;
	}

	.step-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.step-content p {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
	}

	.cta-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 3rem;
		padding: 1rem 2.5rem;
		background: white;
		color: #D300C5;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2.25rem;
		}

		.line {
			left: 19px;
		}

		.step-marker {
			width: 40px;
			height: 40px;
		}

		.num {
			font-size: 1rem;
		}

		.step-content {
			padding: 1.25rem;
		}
	}
</style>
