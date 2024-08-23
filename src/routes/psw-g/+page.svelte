<script lang="ts">
	import { PasswordGeneratorSvelte } from 'password-generator-svelte';
</script>

<svelte:head>
	<title>Em-ilien.fr - Générateur de mots de passe</title>
	<meta name="description" content="Générateur de mots de passe" />
</svelte:head>

<div class="psw-g-ctn">
	<header>
		<h1>Générateur de mots de passe - em-ilien.fr</h1>
	</header>

	<main>
		<a href=".." class="btn-home">Accueil</a>
		<PasswordGeneratorSvelte />
	</main>

	<footer>
		<div>
			<h2>À propos de ce générateur</h2>
			<p>
				Le code source de ce générateur est disponible sur GitHub. Toute contribution est la
				bienvenue.
			</p>
			<p>
				Vous avez le droit d'utiliser ce générateur pour vos besoins personnels ou professionnels,
				de copier, de modifier et de redistribuer le code source, selon les termes de la licence
				MIT.
			</p>
			<p>
				Les mots de passe générés ne sont ni sauvegardés ni convoyés par le programme. Les fichiers
				sources de cette page Web qui n'use que de Javascript, HTML et CSS sont entièrement
				consultables pour analyse.
			</p>
		</div>
	</footer>
</div>

<style>
	.psw-g-ctn {
		height: 100vh;
		background-color: #f7f9fc;
		color: #333;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	header {
		background-color: #343a40;
		color: white;
		padding: 30px;
		text-align: center;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}

	header h1 {
		margin: 0;
		font-size: 2.5rem;
		letter-spacing: 2px;
	}

	main {
		max-width: 1100px;
		margin: 40px auto;
		padding: 0 20px;
	}

	.btn-home {
		display: inline-block;
		margin-bottom: 30px;
		padding: 12px 25px;
		background-color: #1e88e5;
		color: white;
		text-decoration: none;
		border-radius: 25px;
		font-size: 1rem;
		box-shadow: 0 4px 8px rgba(30, 136, 229, 0.3);
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;
	}

	.btn-home:hover {
		background-color: #1565c0;
		box-shadow: 0 6px 12px rgba(21, 101, 192, 0.4);
	}

	footer {
		background-color: #343a40;
		color: white;
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
		width: 100%;
		margin: 40px auto 0;
		text-align: left;
		padding: 3em;
		font-size: 0.8em;
	}

	footer div {
		max-width: 1100px;
		margin: auto;
	}

	footer h2 {
		margin-top: 0;
		font-size: 1.8em;
		color: #1e88e5;
		margin-bottom: 1em;
	}

	footer p {
		font-size: 1em;
		line-height: 1.8;
		color: #ddd;
	}
</style>
