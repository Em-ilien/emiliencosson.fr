<script lang="ts">
	export let title = 'Lancez votre projet';
	export let description =
		"Discutons ensemble de vos besoins et definissons la meilleure solution pour votre projet.";
	export let buttonText = 'Me contacter';
	export let href = 'https://www.malt.fr/profile/emiliencosson';
</script>

<section class="cta">
	<h2>{title}</h2>
	<p>{description}</p>
	<a {href} class="btn" target="_blank" rel="noopener">
		{buttonText}
	</a>
</section>

<style>
	.cta {
		background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
		border-radius: 12px;
		padding: 2.5em;
		text-align: center;
		margin-top: 2em;
	}

	.cta h2 {
		color: #fff;
		margin-top: 0;
		font-size: 1.6em;
		font-weight: 600;
		margin-bottom: 0.75em;
	}

	.cta p {
		color: rgba(255, 255, 255, 0.9);
		text-align: center;
		margin-bottom: 1.5em;
	}

	.btn {
		display: inline-block;
		background: #fff;
		color: #1e88e5;
		padding: 0.75em 2em;
		border-radius: 6px;
		text-decoration: none;
		font-family: sans-serif;
		font-weight: 500;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		text-decoration: none;
	}

	@media (max-width: 600px) {
		.cta {
			padding: 1.5em;
		}
	}
</style>
