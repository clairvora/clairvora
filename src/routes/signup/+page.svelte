<script lang="ts">
	import SignUp from 'clerk-sveltekit/client/SignUp.svelte';
</script>

<svelte:head>
	<title>Sign Up - Clairvora</title>
</svelte:head>

<div class="page">
	<!-- Left: Branding Panel -->
	<div class="brand-panel">
		<div class="brand-content">
			<a href="/"><img src="/logo/clairvora-logo.png" alt="Clairvora" class="brand-logo" /></a>
			<h2 class="brand-tagline">Begin Your Journey</h2>
			<p class="brand-description">
				Join thousands finding clarity through trusted psychic guidance on love, career, and life's path.
			</p>
			<div class="brand-stats">
				<div class="stat">
					<div class="stat-value">500+</div>
					<div class="stat-label">Advisors</div>
				</div>
				<div class="stat">
					<div class="stat-value">50K+</div>
					<div class="stat-label">Clients</div>
				</div>
				<div class="stat">
					<div class="stat-value">4.9</div>
					<div class="stat-label">Rating</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Right: Form Panel -->
	<div class="form-panel">
		<div class="form-container">
			<a href="/" class="mobile-logo">Clairvora</a>

			<a href="/" class="back-link">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M19 12H5M12 19l-7-7 7-7"/>
				</svg>
				Back to home
			</a>

			<div class="form-header">
				<h1>Create your account</h1>
				<p>Start your journey to clarity today</p>
			</div>

			<div class="clerk-container">
				<SignUp
					redirectUrl="/account/client"
					signInUrl="/login"
					appearance={{
						elements: {
							rootBox: 'clerk-root',
							card: 'clerk-card',
							formButtonPrimary: 'clerk-btn-primary',
							socialButtonsBlockButton: 'clerk-social-btn',
							formFieldInput: 'clerk-input',
							footerActionLink: 'clerk-link'
						}
					}}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
	}

	/* Left Panel - Branding */
	.brand-panel {
		flex: 1;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 40%, #FF0069 70%, #FF7A00 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem;
		position: relative;
		overflow: hidden;
	}

	.brand-panel::before {
		content: '';
		position: absolute;
		top: -100px;
		right: -100px;
		width: 400px;
		height: 400px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
	}

	.brand-panel::after {
		content: '';
		position: absolute;
		bottom: -150px;
		left: -150px;
		width: 500px;
		height: 500px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 50%;
	}

	.brand-content {
		position: relative;
		z-index: 1;
		text-align: left;
		color: white;
		max-width: 400px;
	}

	.brand-logo {
		height: 27px;
		width: auto;
		margin-bottom: 3rem;
	}

	.brand-tagline {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.3;
		margin-bottom: 1rem;
	}

	.brand-description {
		font-size: 1.1rem;
		opacity: 0.9;
		line-height: 1.6;
		margin-bottom: 3rem;
	}

	.brand-stats {
		display: flex;
		justify-content: flex-start;
		gap: 3rem;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.85rem;
		opacity: 0.8;
	}

	/* Right Panel - Form */
	.form-panel {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem;
		background: white;
	}

	.form-container {
		max-width: 400px;
		margin: 0 auto;
		width: 100%;
	}

	.mobile-logo {
		display: none;
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a2e;
		text-decoration: none;
		letter-spacing: -0.02em;
		margin-bottom: 2rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #64748b;
		text-decoration: none;
		font-size: 0.9rem;
		margin-bottom: 2rem;
	}

	.back-link:hover {
		color: #1a1a2e;
	}

	.back-link svg {
		width: 16px;
		height: 16px;
	}

	.form-header {
		margin-bottom: 2rem;
	}

	.form-header h1 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.form-header p {
		color: #64748b;
		font-size: 1rem;
	}

	/* Clerk Component Styling */
	.clerk-container {
		margin-top: 1rem;
	}

	.clerk-container :global(.cl-rootBox) {
		width: 100%;
	}

	.clerk-container :global(.cl-card) {
		background: transparent;
		box-shadow: none;
		padding: 0;
		margin: 0;
	}

	/* Remove internal padding from Clerk's main container */
	.clerk-container :global(.cl-main) {
		padding: 0;
	}

	/* Ensure form content aligns with our header */
	.clerk-container :global(.cl-form) {
		padding: 0;
	}

	/* Restyle Clerk branding badge - remove background, subtle gray text */
	.clerk-container :global(.cl-internal-b3fm6y) {
		position: relative !important;
		transform: none !important;
		writing-mode: horizontal-tb !important;
		margin-top: 2rem !important;
		margin-left: 0 !important;
		margin-right: auto !important;
		left: auto !important;
		right: auto !important;
		top: auto !important;
		background: transparent !important;
		color: #94a3b8 !important;
		padding: 0 !important;
	}

	.clerk-container :global(.cl-internal-b3fm6y svg) {
		color: #94a3b8 !important;
		fill: #94a3b8 !important;
	}

	/* Hide duplicate header from Clerk */
	.clerk-container :global(.cl-headerTitle),
	.clerk-container :global(.cl-headerSubtitle) {
		display: none !important;
	}

	.clerk-container :global(.cl-formButtonPrimary) {
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border-radius: 50px;
		font-weight: 600;
		padding: 1rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.clerk-container :global(.cl-formButtonPrimary:hover) {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(211, 0, 197, 0.4);
	}

	.clerk-container :global(.cl-socialButtonsBlockButton) {
		border-radius: 12px;
		border: 1px solid #e2e8f0;
		font-weight: 500;
	}

	.clerk-container :global(.cl-socialButtonsBlockButton:hover) {
		background: #f8fafc;
		border-color: #cbd5e1;
	}

	.clerk-container :global(.cl-formFieldInput) {
		border-radius: 12px;
		border: 1px solid #e2e8f0;
		padding: 0.875rem 1.25rem;
	}

	.clerk-container :global(.cl-formFieldInput:focus) {
		border-color: #D300C5;
		box-shadow: 0 0 0 3px rgba(211, 0, 197, 0.1);
	}

	.clerk-container :global(.cl-footerActionLink) {
		color: #D300C5;
		font-weight: 600;
	}

	/* Mobile Responsive */
	@media (max-width: 900px) {
		.brand-panel {
			display: none;
		}

		.form-panel {
			padding: 2rem;
		}

		.mobile-logo {
			display: block;
			text-align: center;
		}
	}
</style>
