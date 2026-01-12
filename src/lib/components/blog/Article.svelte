<script lang="ts">
	import Link from '$lib/components/project/Link.svelte';

	export let data: {
		meta: {
			title: string;
			description: string;
			keywords?: string;
		};
		content: any;
	};
</script>

<svelte:head>
	<title>{data.meta.title} | Em_ilien - Developpeur Web Freelance</title>
	<meta name="description" content={data.meta.description} />
	{#if data.meta.keywords}
		<meta name="keywords" content={data.meta.keywords} />
	{/if}
	<meta property="og:title" content="{data.meta.title} | Em_ilien" />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<header>
	<Link href="/services" text="Retour aux services" --margin-left="0" />
</header>

<article>
	<svelte:component this={data.content} />
</article>

<style>
	header {
		margin-bottom: 2em;
	}

	article {
		font-family: 'Georgia', serif;
		color: #333;
		line-height: 1.8;
	}

	article :global(h1) {
		color: #333;
		font-size: 2.5em;
		font-weight: 600;
		margin-bottom: 0.25em;
		line-height: 1.2;
	}

	article :global(.subtitle) {
		color: #666;
		font-size: 1.2em;
		font-style: italic;
		margin-bottom: 2em;
		padding-bottom: 1.5em;
		border-bottom: 2px solid #e0e0e0;
	}

	article :global(h2) {
		color: #1e88e5;
		font-size: 1.6em;
		font-weight: 600;
		margin-bottom: 0.75em;
		margin-top: 1.5em;
	}

	article :global(h3) {
		color: #444;
		font-size: 1.25em;
		font-weight: 600;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
	}

	article :global(h4) {
		color: #1e88e5;
		font-size: 1.1em;
		font-weight: 600;
		margin-bottom: 0.5em;
	}

	article :global(p) {
		color: #555;
		margin-bottom: 1em;
		text-align: justify;
	}

	article :global(ul) {
		margin: 1em 0 1.5em 1.5em;
		color: #555;
	}

	article :global(li) {
		margin-bottom: 0.5em;
	}

	article :global(li strong) {
		color: #333;
	}

	@media (max-width: 600px) {
		.content {
			padding: 1.5em;
		}

		article :global(h1) {
			font-size: 2em;
		}

		article :global(h2) {
			font-size: 1.4em;
		}
	}
</style>
