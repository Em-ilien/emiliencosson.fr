<script>
	export let services = [
		{ id: 'sites-web', title: '1. Développement de sites web' },
		{ id: 'apps-web', title: '2. Développement d\'applications web' },
		{ id: 'api-integrations', title: '3. API et intégrations' },
		{ id: 'architecture', title: '4. Architecture technique' },
		{ id: 'maintenance', title: '5. Optimisation et maintenance' },
		{ id: 'produits', title: '6. Produits numériques' },
		{ id: 'conseil', title: '7. Conseil et accompagnement' }
	];
	export let baseHref = '/services#';
</script>

<ul class="services">
	{#each services as { id, title }}
		<li>
			<a href={baseHref + id}>
				<span>{title}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul.services {
		list-style: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0;

		font-family: inherit;
		text-align: left;
		font-size: 1em;
		margin: 0;
		padding: 0;
	}

	ul.services li a {
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

	ul.services li:last-child a,
	ul.services li:last-child a:hover {
		border-bottom: 1px solid #e4e4e4;
	}

	ul.services li a::before {
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

	ul.services li a:hover::before {
		transform: scale(1.5);
	}

	ul.services a:hover {
		transform: translateX(2px);
	}

	ul.services li a span {
		position: relative;
		z-index: 2;
		display: block;
		font-weight: 600;
		font-size: 1.25em;
	}

	ul.services li a:hover span {
		text-decoration: underline;
	}
</style>
