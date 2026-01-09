<svelte:head>
	<title>Logo Large - Clairvora</title>
</svelte:head>

<div class="container">
	<div class="logo">
		<img src="/logo/clairvora-logo.png" alt="Clairvora" class="logo-img" />
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.logo-img {
		height: 192px;
		width: auto;
		/* Invert white logo to black */
		filter: brightness(0) saturate(100%);
	}
</style>
