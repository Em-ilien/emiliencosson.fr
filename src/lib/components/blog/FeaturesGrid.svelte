<script lang="ts">
	type Feature = {
		title: string;
		description: string;
	};

	export let features: Feature[] = [];
</script>

<div class="features-grid">
	{#each features as feature}
		<div class="feature">
			<h4>{feature.title}</h4>
			<p>{feature.description}</p>
		</div>
	{/each}
</div>

<style>
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5em;
		margin-top: 1.5em;
	}

	.feature {
		background: #fff;
		border-radius: 8px;
		padding: 1.25em;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.feature:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	.feature h4 {
		color: #1e88e5;
		font-size: 1.1em;
		font-weight: 600;
		margin-bottom: 0.5em;
	}

	.feature p {
		font-size: 0.9em;
		margin-bottom: 0;
		text-align: left;
		color: #555;
	}

	@media (max-width: 600px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
