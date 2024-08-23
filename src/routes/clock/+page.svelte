<script lang="ts">
	import { Clock } from 'clock.svelte';
</script>

<svelte:head>
	<title>Em-ilien.fr - Clock</title>
	<meta name="description" content="Clock" />
</svelte:head>

<div class="clock-ctn">
	<header>
		<h1>Clock - em-ilien.fr</h1>
	</header>

	<main>
		<a href=".." class="btn-home">Accueil</a>
		<Clock />
	</main>
</div>

<style>
	.clock-ctn {
		height: 100vh;
		background-color: #f7f9fc;
		color: #333;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	header {
		background-color: #343a40;
		color: white;
		padding: 30px;
		text-align: center;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}

	header h1 {
		margin: 0;
		font-size: 2.5rem;
		letter-spacing: 2px;
	}

	main {
		max-width: 1100px;
		margin: 40px auto;
		padding: 0 20px;
	}

	.btn-home {
		display: inline-block;
		margin-bottom: 30px;
		padding: 12px 25px;
		background-color: #1e88e5;
		color: white;
		text-decoration: none;
		border-radius: 25px;
		font-size: 1rem;
		box-shadow: 0 4px 8px rgba(30, 136, 229, 0.3);
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;
	}

	.btn-home:hover {
		background-color: #1565c0;
		box-shadow: 0 6px 12px rgba(21, 101, 192, 0.4);
	}
</style>
