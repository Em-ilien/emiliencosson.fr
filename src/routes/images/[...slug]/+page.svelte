<script lang="ts">
	import { page } from '$app/state';
	import TreeItem from './TreeItem.svelte';

	export let data: any;
</script>

<h1>Folder Index: {page.url.pathname}</h1>
<ul>
	{#each data.tree as item}
		<TreeItem {item} />
	{/each}
</ul>

<footer>
	<hr />
	Emilien Cosson - {new Date().getFullYear()}
</footer>

<style>
	h1 {
		margin-bottom: 1em;
	}

	ul :global(li) {
		margin: 0 2em;
	}

	footer {
		margin-top: 2em;
		padding: 1em;
	}
</style>
