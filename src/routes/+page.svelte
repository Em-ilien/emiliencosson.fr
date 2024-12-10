<script>
	import Spider from './Spider.svelte';

	const projects = [
		{
			href: 'https://geocartie.fr',
			title: 'Géocartie',
			description: 'Apprendre et découvrir les départements français',
			target: '_blank'
		},
		{
			href: 'psw-g',
			title: 'PasswordGenerator',
			description: 'Générer un mot de passe'
		},
		{
			href: 'https://spotify-player.em-ilien.fr',
			title: 'Spotify Player',
			description: 'Commander votre tracklist sur Spotify',
			target: '_blank'
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
	<div class="infos">
		<header>
			<div class="left">
				<img src="emilien.png" alt="Emilien" width="100" />
				<div class="names">
					<h1>Emilien Cosson</h1>
					<h2>Em_ilien</h2>
				</div>
			</div>
			<nav>
				<a href="#projects">Projets</a>
				<a href="/blog">Blog</a>
				<a href="https://notes.em-ilien.fr" target="_blank" rel="follow">Notes</a>
				<a href="https://notes.em-ilien.fr/contact" target="_blank" rel="follow">Contact</a>
				<a href="#about">À propos</a>
			</nav>
		</header>
		<h3>Projets</h3>
		<ul>
			{#each projects as { href, title, description, target }}
				<li>
					<a {href} {target}>
						<span>{title}</span>
						<span>{description}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<Spider />
</div>

<style>
	:global(body) {
		background-color: #f7f9fc;
	}
	.home-ctn {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.infos {
		height: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: 6em;
		text-align: center;
	}

	.infos header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 1em;
		margin-top: 3em;
		flex-wrap: wrap-reverse;
		gap: 3em 0;
	}

	.infos header .left {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}

	.infos header .names {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
	}

	.infos .names > * {
		margin: 0;
	}
	.infos h2 {
		font-style: italic;
		color: #fff;
		letter-spacing: 16px;
		text-shadow:
			-3px 0 #eee,
			0 3px #eee,
			3px 0 #eee,
			0 -3px #eee;
		font-size: 3rem;
		margin-left: 16px;
	}

	.infos h1 {
		color: #666;
		font-size: 2em;
		font-weight: 400;
		line-height: 1.5em;
	}

	.infos header nav {
		z-index: 30;
		display: flex;
		flex-wrap: nowrap;
	}

	.infos nav a {
		color: #1e88e5;
		padding: 0.5em 1em;
		text-decoration: none;
		width: max-content;
	}
	.infos nav a:hover {
		text-decoration: underline;
	}
	.infos nav a:first-child {
		margin-left: -1em;
	}

	.infos h3 {
		font-size: 1.7em;
		color: #555;
		font-weight: 400;
		margin-top: 2em;
		text-align: left;
	}

	.infos ul {
		list-style: none;
		width: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0em 2.5em;
	}
	.infos ul li {
		z-index: 30;
	}
	.infos ul li a {
		text-decoration: none;
		display: block;
		padding: 0.5em;
		border-radius: 0.25em;
		border: 1px solid;
		margin: 1em 0;
		width: fit-content;
		border-color: rgba(0, 102, 204, 0.26);
		max-width: calc(100% - 1em);

		text-decoration: none;
		color: #1e88e5;
		font-size: 1.3rem;
		display: inline-block;
		padding: 15px 25px;
		border-radius: 10px;
		background-color: #ffffff;
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease,
			transform 0.3s ease;
		position: relative;
		overflow: hidden;
		width: 15em;
		height: 6em;
		display: flex;
		flex-direction: column;
		gap: 0.325em;
	}
	.infos ul li a:hover {
		border-color: rgba(0, 102, 204, 1);
		background-color: #e3f2fd;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
		transform: translateY(-5px);
	}
	.infos ul li a,
	.infos ul li a:visited {
		color: #0066cc;
	}

	.infos ul li a::before {
		content: '';
		position: absolute;
		top: -50px;
		left: -50px;
		width: 150px;
		height: 150px;
		background-color: rgba(30, 136, 229, 0.1);
		border-radius: 50%;
		z-index: 1;
		transition: transform 0.3s ease;
	}

	.infos ul li a:hover::before {
		transform: scale(1.5);
	}

	.infos ul li a span {
		position: relative;
		z-index: 2;
		display: block;
	}

	.infos ul li a span:first-child {
		font-weight: 600;
		font-size: 1.25em;
	}

	.infos ul li a span:last-child {
		text-align: left;
		color: #666;
		font-size: 0.9em;
	}

	.infos ul li a:hover span {
		color: #1565c0;
	}
</style>
