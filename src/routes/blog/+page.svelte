<svelte:head>
	<title>Em-ilien.fr - Blog</title>
	<meta name="description" content="Blog d'Emilien Cosson" />
</svelte:head>

<div class="blog-ctn">
	<header>
		<h1>Mon Blog - em-ilien.fr</h1>
	</header>

	<main>
		<a href=".." class="btn-home">Accueil</a>

		<!-- <div class="card-container">
			<a href="/blog/funcraft-mon-départ">
				<h2>FunCraft - Mon départ</h2>
				<p class="meta">Publié le 26 septembre 2024 | Par Em_i</p>
				<p class="excerpt">
					Après deux ans et dix mois, je décide de laisser le soin à d'autres de participer à la
					modération de FunCraft.
				</p>
			</a>
		</div> -->
	</main>
</div>

<style>
	.blog-ctn {
		height: 100vh;
		background-color: #f7f9fc;
		color: #333;
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
</style>
