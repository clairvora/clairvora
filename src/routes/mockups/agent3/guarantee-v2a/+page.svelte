<!-- Satisfaction Guarantee V2A: Light gradient with soft card shadows -->
<script lang="ts">
	import { ShieldCheck, Lock, CreditCard, UserCircle, LockKey, Headset } from 'phosphor-svelte';
</script>

<section class="guarantee">
	<div class="container">
		<div class="content">
			<span class="eyebrow">Our Promise to You</span>
			<h2>Your Satisfaction Guaranteed</h2>
			<p class="description">If you are ever dissatisfied with a reading, contact us and we'll find a reader more suited for you — or refund your purchase. Your peace of mind is our priority.</p>

			<div class="features">
				<div class="feature">
					<div class="feature-icon">
						<ShieldCheck size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3>Money-Back Guarantee</h3>
						<p>Not satisfied? Get a full refund, no questions asked.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon">
						<LockKey size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3>Secure Payments</h3>
						<p>Bank-level 256-bit SSL encryption protects your data.</p>
					</div>
				</div>

				<div class="feature">
					<div class="feature-icon">
						<UserCircle size={32} weight="fill" />
					</div>
					<div class="feature-text">
						<h3>Privacy Protected</h3>
						<p>Your readings and personal info stay completely private.</p>
					</div>
				</div>
			</div>

			<div class="trust-row">
				<div class="trust-item">
					<Lock size={20} weight="bold" />
					<span>SSL Secured</span>
				</div>
				<div class="trust-item">
					<CreditCard size={20} weight="bold" />
					<span>Visa / MC / Amex</span>
				</div>
				<div class="trust-item">
					<Headset size={20} weight="bold" />
					<span>24/7 Support</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.guarantee {
		padding: 6rem 2rem;
		background: linear-gradient(180deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%);
		position: relative;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.content {
		text-align: center;
	}

	.eyebrow {
		display: inline-block;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		color: white;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 2.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}

	.description {
		font-size: 1.125rem;
		color: #64748b;
		max-width: 650px;
		margin: 0 auto 3rem;
		line-height: 1.7;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.feature {
		background: white;
		border-radius: 20px;
		padding: 2rem 1.5rem;
		text-align: center;
		box-shadow: 0 4px 20px rgba(118, 56, 250, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.feature:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 30px rgba(118, 56, 250, 0.15);
	}

	.feature-icon {
		width: 64px;
		height: 64px;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
		color: white;
	}

	.feature-text h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.feature-text p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.5;
	}

	.trust-row {
		display: flex;
		justify-content: center;
		gap: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(118, 56, 250, 0.15);
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #7638FA;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.guarantee {
			padding: 4rem 1.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.features {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.feature {
			padding: 1.5rem;
		}

		.trust-row {
			flex-wrap: wrap;
			gap: 1.5rem;
		}
	}
</style>
