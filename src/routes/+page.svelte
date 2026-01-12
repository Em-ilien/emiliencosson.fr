<script>
	import ProjectsTable from './ProjectsTable.svelte';
	import ServicesGrid from './ServicesGrid.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';

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

<PageLayout>
	<h3 id="projects">Projets</h3>
		<ProjectsTable />
		<h3 id="services">Services</h3>
		<ServicesGrid />
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
</PageLayout>

<style>


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

</style>
