<script lang="ts">
	import PageLayout from '$lib/components/PageLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: posts = data.posts ?? [];
</script>

<svelte:head>
	<title>Em-ilien.fr - Blog</title>
	<meta name="description" content="Blog d'Emilien Cosson" />
</svelte:head>

<PageLayout>
	<h1>Mon Blog</h1>

		{#if posts.length > 0}
			<div class="card-container">
				{#each posts as post}
					<a href={post.path}>
						<h2>{post.meta.title}</h2>
						<p class="excerpt">{post.meta.description}</p>
					</a>
				{/each}
			</div>
		{:else}
			<div>
				<span class="empty">Aucun article pour le moment.</span>
			</div>
		{/if}
</PageLayout>

<style>
	:global(h1) {
		margin-bottom: 2em;
	}

	.card-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
	}

	.card-container > * {
		background-color: white;
		border-radius: 15px;
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
		padding: 25px;
		transition:
			transform 0.4s ease,
			box-shadow 0.4s ease;
		overflow: hidden;
		position: relative;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	.card-container > *::before {
		content: '';
		position: absolute;
		top: -50px;
		left: -50px;
		width: 150px;
		height: 150px;
		background-color: rgba(30, 136, 229, 0.1);
		border-radius: 50%;
		z-index: 1;
		transition: all 0.4s ease;
	}

	.card-container > *:hover::before {
		transform: scale(1.5);
	}

	.card-container > *:hover {
		transform: translateY(-10px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}

	.card-container > * h2 {
		margin-top: 0;
		font-size: 1.8rem;
		color: #1e88e5;
		position: relative;
		z-index: 2;
		font-weight: 600;
		margin-bottom: 0.75em;
	}

	.card-container > * p.meta {
		margin: 10px 0;
		font-size: 0.95rem;
		color: #666;
		position: relative;
		z-index: 2;
	}

	.card-container > * p.excerpt {
		margin: 20px 0 0;
		font-size: 1rem;
		line-height: 1.6;
		position: relative;
		z-index: 2;
	}

	@media (min-width: 768px) {
		.card-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.card-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.empty {
		color: #666;
		margin-top: 50px;
	}
</style>
