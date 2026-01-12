<script lang="ts">
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Article from '$lib/components/blog/Article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageLayout>
	<Article {data} />
</PageLayout>
