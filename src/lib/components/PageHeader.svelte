<script>
	import Link from '$lib/components/project/Link.svelte';

	const navLinks = [
		{ href: '/#projects', title: 'Projets' },
		{ href: '/services', title: 'Services' },
		{ href: '/blog', title: 'Blog' },
		{ href: '/#about', title: 'À propos' },
		{ href: 'https://github.com/Em-ilien/', title: 'GitHub', target: '_blank' },
		{ href: 'https://notes.em-ilien.fr/contact', title: 'Contact', target: '_blank' }
	];
</script>

<header>
	<div class="left">
		<img src="/emilien.png" alt="Emilien" width="100" />
		<div class="names">
			<h1>Emilien Cosson</h1>
			<h2>Em_ilien</h2>
		</div>
	</div>
	<nav>
		{#each navLinks as { href, title, target }}
			<Link {href} text={title} --margin-left="0" {target} />
		{/each}
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap-reverse;
		gap: 3em 8em;
		margin-bottom: 2.5em;
	}

	header .left {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}

	header .names {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
	}

	header .names > * {
		margin: 0;
	}

	header .names h1 {
		color: #666;
		font-size: 2em;
		font-weight: 400;
		line-height: 1.5em;
	}

	header .names h2 {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-style: italic;
		color: #fff;
		letter-spacing: 16px;
		text-shadow:
			-3px 0 #dfdfdf,
			0 3px #dfdfdf,
			3px 0 #dfdfdf,
			0 -3px #dfdfdf;
		font-size: 3rem;
		margin-left: 16px;
	}

	header nav {
		display: flex;
		flex-wrap: nowrap;
		margin-left: -1em;
	}

	@media (max-width: 800px) {
		header nav {
			flex-wrap: wrap;
		}

		header .left {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
