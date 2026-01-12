<script lang="ts">
	type Row = {
		label: string;
		col1: string;
		col2: string;
	};

	export let headers: string[] = ['Critere', 'Option 1', 'Option 2'];
	export let rows: Row[] = [];
</script>

<div class="comparison-table">
	<div class="comparison-row header">
		{#each headers as header}
			<div class="comparison-cell">{header}</div>
		{/each}
	</div>
	{#each rows as row}
		<div class="comparison-row">
			<div class="comparison-cell">{row.label}</div>
			<div class="comparison-cell">{row.col1}</div>
			<div class="comparison-cell">{row.col2}</div>
		</div>
	{/each}
</div>

<style>
	.comparison-table {
		margin: 1.5em 0;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.comparison-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.comparison-row.header {
		background: #1e88e5;
		color: #fff;
		font-weight: 600;
	}

	.comparison-row:not(.header) {
		background: #fff;
	}

	.comparison-row:not(.header):nth-child(odd) {
		background: #f8f9fa;
	}

	.comparison-cell {
		padding: 0.75em 1em;
		font-size: 0.95em;
		text-align: center;
	}

	.comparison-row:not(.header) .comparison-cell:first-child {
		font-weight: 500;
		color: #333;
		text-align: left;
	}

	@media (max-width: 600px) {
		.comparison-table {
			font-size: 0.85em;
		}

		.comparison-cell {
			padding: 0.5em;
		}
	}
</style>
