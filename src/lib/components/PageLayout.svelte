<script>
	import PageHeader from './PageHeader.svelte';
</script>

<div class="page-ctn">
	<div>
		<PageHeader />
		<slot />
	</div>
</div>

<style>
	:global(body) {
		background-color: #f7f9fc;
	}

	.page-ctn {
		min-height: 100vh;
		display: flex;
		justify-content: center;
	}

	.page-ctn > div {
		display: flex;
		flex-direction: column;
		max-width: 900px;
		padding: 3em 2em;
		width: 100%;
	}

	@media (max-width: 600px) {
		.page-ctn > div {
			padding: 2em 1.5em;
		}
	}
</style>
