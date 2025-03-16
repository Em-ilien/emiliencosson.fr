<script>
	import ProjectTable from './ProjectsTable.svelte';

	import Link from '$lib/components/project/Link.svelte';

	const navLinks = [
		{ href: '#projects', title: 'Projets' },
		{ href: '/blog', title: 'Blog' },
		{ href: '#about', title: 'À propos' },
		{ href: 'https://github.com/Em-ilien/', title: 'GitHub', target: '_blank' },
		{ href: 'https://notes.em-ilien.fr/contact', title: 'Contact', target: '_blank' }
	];

	const projects = [
		{
			href: 'https://geocartie.fr',
			title: 'Géocartie',
			description: 'Apprendre et découvrir les départements français',
			target: '_blank'
		},
		{
			href: 'https://spotify-player.em-ilien.fr',
			title: 'Spotify Player',
			description: 'Commander votre tracklist sur Spotify',
			target: '_blank'
		},
		{
			href: 'psw-g',
			title: 'PasswordGenerator',
			description: 'Générer un mot de passe'
		},
		{
			href: 'clock',
			title: 'Clock',
			description: "Lire l'heure"
		}
	];
</script>

<svelte:head>
	<title>Em-ilien.fr - Accueil</title>
	<meta name="description" content="Site web personnel d'Emilien Cosson" />
</svelte:head>

<div class="home-ctn">
	<div>
		<header>
			<div class="left">
				<img src="emilien.png" alt="Emilien" width="100" />
				<div class="names">
					<h1>Emilien Cosson</h1>
					<h2>Em_ilien</h2>
				</div>
			</div>
			<nav>
				{#each navLinks as { href, title }}
					<Link {href} text={title} --margin-left="0" />
				{/each}
			</nav>
		</header>
		<h3 id="projects">Projets</h3>
		<ProjectsTable />
		<h3 id="about">who am i?</h3>
		<div class="p-ctn">
			<p>
				Je m'appelle <strong>Emilien Cosson</strong>, et c'est en grandissant dans les Alpes
				mancelles que je me suis passionné pour <strong>le droit et le développement web</strong>.
			</p>
			<p>
				J'ai étudié l'<strong>informatique</strong> à <strong>l'IUT de Laval</strong>.
			</p>
			<p></p>
			<p>
				Je suis <strong>développeur d'applications web en freelance</strong>.
			</p>
			<p>
				J'aime aussi concevoir des projets personnels utiles et ludiques. <a
					href="https://geocartie.fr">Géocartie</a
				> est un projet qui me tient à coeur. C'est une carte interactive pour apprendre et découvrir
				les départements français.
			</p>
			<p>
				J'aime apprendre et découvrir de nouvelles technologies. J'aime le plus travailler avec <a
					href="https://dev.java/">Java</a
				>
				et <a href="https://svelte.dev/">Svelte</a>.
			</p>
			<p>
				J'accorde de la valeur à la précision, l'honnêteté, la clarté, la qualité, l'information.
				Dans cet ordre !
			</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f7f9fc;
	}
	.home-ctn {
		height: 100vh;
		display: flex;
		justify-content: center;
	}

	.home-ctn > div {
		display: flex;
		flex-direction: column;
		height: fit-content;
		padding: 2em;
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap-reverse;
		gap: 3em 8em;
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

	h3 {
		font-size: 1.7em;
		color: #555;
		font-weight: 400;
		margin-top: 2em;
		text-align: left;
		margin-bottom: 0.75em;
	}

	.p-ctn {
		max-width: 800px;
	}

	p {
		color: #444;
		line-height: 1.5em;
		margin: 0.75em 0;
	}

	@media (max-width: 800px) {
		header nav {
			flex-wrap: wrap;
		}

		.home-ctn > div {
			padding: 2em;
		}

		header .left {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
