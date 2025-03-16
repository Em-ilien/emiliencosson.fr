<script>
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

<ul class="projects">
	{#each projects as { href, title, description, target }}
		<li>
			<a {href} {target}>
				<span>{title}</span>
				<span>{description}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul.projects {
		list-style: none;
		width: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2.5em;

		text-align: center;
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;

		flex-direction: column;
		width: 100%;
		gap: 0;

		font-family: inherit;
		text-align: left;
		font-size: 1em;
	}
	ul.projects li a {
		border-color: rgba(0, 102, 204, 0.26);

		text-decoration: none;
		color: #1e88e5;
		background-color: #ffffff;
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease,
			transform 0.3s ease;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 0.325em;

		width: 100%;
		max-width: 100%;
		background: none;
		box-shadow: none;
		margin: 0;
		border-radius: 0;
		height: auto;
		padding: 0.5em 0.25em 1em;
		font-size: 1.1em;
		border: none;
		border-top: 1px solid #e4e4e4;
	}

	ul.projects li:last-child a,
	ul.projects li:last-child a:hover {
		border-bottom: 1px solid #e4e4e4;
	}

	ul.projects li a::before {
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
		transform: scale(0);
	}

	ul.projects a::before {
		content: none;
	}
	ul.projects li a:hover::before {
		transform: scale(1.5);
	}

	ul.projects a:hover {
		transform: none;
		background: none;
		box-shadow: none;
		background: none;
		box-shadow: none;
		transform: translateX(2px);
	}

	ul.projects li a span {
		position: relative;
		z-index: 2;
		display: block;
	}

	ul.projects li a span:first-child {
		font-weight: 600;
		font-size: 1.25em;
	}

	ul.projects li a:hover span:first-child {
		text-decoration: underline;
	}

	ul.projects li a span:last-child {
		text-align: left;
		color: #666;
		font-size: 0.9em;
	}
</style>
