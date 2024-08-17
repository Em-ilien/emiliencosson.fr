<script>
	import Spider from './Spider.svelte';
</script>

<svelte:head>
	<title>Em-ilien.fr - Accueil</title>
	<meta name="description" content="Site web personnel d'Emilien Cosson" />
</svelte:head>

<div class="home-ctn">
	<div class="infos">
		<div class="names">
			<h1><b>Em_i</b><span>lien</span></h1>
			<h2>Emilien Cosson</h2>
		</div>
		<ul>
			<li>
				<a href="https://geocartie.fr" target="_blank">
					<span class="service-title">Géocartie</span>
					<span class="service-description">Apprendre et découvrir les départements français</span>
				</a>
			</li>
			<li>
				<a href="blog">
					<span class="service-title">Blog</span>
					<span class="service-description">Lire les articles</span>
				</a>
			</li>
			<li>
				<a href="psw-g">
					<span class="service-title">PasswordGenerator</span>
					<span class="service-description">Générer un mot de passe</span>
				</a>
			</li>
			<li>
				<a href="clock">
					<span class="service-title">Clock</span>
					<span class="service-description">Lire l'heure</span>
				</a>
			</li>
		</ul>
	</div>

	<Spider />
</div>

<style>
	.home-ctn {
		height: 100vh;
		background-color: #f7f9fc;
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
	.infos .names {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
		margin-top: 3em;
	}
	.infos .names > * {
		margin: 0;
	}
	.infos h1 {
		font-size: 4rem;
		color: #333;
	}
	.infos h1 b {
		font-weight: 600;
	}
	.infos h1 span {
		font-style: italic;
		color: #fff;
		letter-spacing: 16px;
		text-shadow:
			-3px 0 #eee,
			0 3px #eee,
			3px 0 #eee,
			0 -3px #eee;
		font-size: 4rem;
		margin-left: 16px;
	}
	.infos h2 {
		color: #bbb;
		font-size: 2em;
		font-weight: 400;
		line-height: 1.5em;
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
		font-size: 1.25em;
		display: block;
		padding: 0.5em;
		border-radius: 0.25em;
		border: 1px solid;
		margin: 1em 0;
		width: fit-content;
		border-color: rgba(0, 102, 204, 0.26);
		max-width: calc(100% - 1em);
		background: #ffffff50;

		text-decoration: none;
		color: #1e88e5;
		font-size: 1.5rem;
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
		color: rgba(0, 102, 204);
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
