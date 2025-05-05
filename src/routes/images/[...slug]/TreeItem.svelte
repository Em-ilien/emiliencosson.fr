<script lang="ts">
	export let item: any;
</script>

{#if item.type === 'folder'}
	<li>
		<a href={item.path} target="_self">{item.name}/</a>
		<ul>
			{#each item.children as child}
				<svelte:self item={child} />
			{/each}
		</ul>
	</li>
{:else}
	<li>
		<a href={item.path} target="_self">{item.name}</a>
	</li>
{/if}

<style>
	ul {
		list-style: none;
	}

	li {
		list-style: none;
	}
</style>
