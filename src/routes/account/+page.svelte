<script lang="ts">
	import SignOutButton from 'clerk-sveltekit/client/SignOutButton.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>My Account - Clairvora</title>
</svelte:head>

<div class="page">
	<div class="container">
		<h1>Welcome!</h1>
		<p class="subtitle">You're signed in to Clairvora.</p>

		<div class="user-info">
			<div class="info-row">
				<span class="label">Session ID</span>
				<span class="value">{data.user?.sessionId || 'N/A'}</span>
			</div>
			<div class="info-row">
				<span class="label">User ID</span>
				<span class="value">{data.user?.userId || 'N/A'}</span>
			</div>
		</div>

		<p class="coming-soon">Dashboard coming soon...</p>

		<div class="actions">
			<a href="/" class="btn-secondary">Back to Home</a>
			<SignOutButton>
				<button class="btn-primary">Sign Out</button>
			</SignOutButton>
		</div>
	</div>
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f8fafc;
		padding: 2rem;
	}

	.container {
		background: white;
		border-radius: 16px;
		padding: 3rem;
		max-width: 480px;
		width: 100%;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	h1 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #1a1a2e;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #64748b;
		margin-bottom: 2rem;
	}

	.user-info {
		background: #f8fafc;
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 2rem;
	}

	.info-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid #e2e8f0;
	}

	.info-row:last-child {
		border-bottom: none;
	}

	.label {
		color: #64748b;
		font-size: 0.9rem;
	}

	.value {
		color: #1a1a2e;
		font-weight: 500;
		font-size: 0.9rem;
	}

	.coming-soon {
		text-align: center;
		color: #94a3b8;
		font-style: italic;
		margin-bottom: 2rem;
	}

	.actions {
		display: flex;
		gap: 1rem;
	}

	.btn-secondary {
		flex: 1;
		padding: 0.875rem 1.5rem;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 50px;
		color: #1a1a2e;
		font-weight: 600;
		text-decoration: none;
		text-align: center;
		transition: background 0.2s, border-color 0.2s;
	}

	.btn-secondary:hover {
		background: #f8fafc;
		border-color: #cbd5e1;
	}

	.btn-primary {
		flex: 1;
		padding: 0.875rem 1.5rem;
		background: linear-gradient(135deg, #7638FA 0%, #D300C5 100%);
		border: none;
		border-radius: 50px;
		color: white;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(211, 0, 197, 0.4);
	}
</style>
