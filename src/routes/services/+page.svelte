<script>
	import PageLayout from '$lib/components/PageLayout.svelte';
	import ServicesGrid from '../ServicesGrid.svelte';

	const services = [
		{
			id: 'sites-web',
			title: '1. Développement de sites web',
			items: [
				{
					name: 'Sites vitrines / institutionnels',
					description: 'Pour entreprises, artisans, associations.',
					slug: 'sites-vitrines'
				},
				{
					name: 'Blogs et portfolios',
					description: 'Avec CMS custom ou WordPress/Strapi/NetlifyCMS.',
					slug: 'blogs-portfolios'
				},
				{
					name: 'Sites e-commerce',
					description:
						'Boutiques Shopify, WooCommerce, Prestashop, ou solutions sur-mesure avec panier, paiement, gestion produits.',
					slug: 'sites-ecommerce'
				},
				{
					name: 'Landing pages / campagnes marketing',
					description: 'Pages uniques optimisées pour la conversion.',
					slug: 'landing-pages'
				}
			]
		},
		{
			id: 'apps-web',
			title: '2. Développement d\'applications web',
			items: [
				{
					name: 'Applications SaaS',
					description:
						'Plateformes en ligne pour gérer données ou services (ex : CRM, outils de réservation, gestion interne).',
					slug: 'applications-saas'
				},
				{
					name: 'Dashboards et outils de gestion',
					description: 'Suivi de KPI, tableaux de bord administratifs.',
					slug: 'dashboards-outils-gestion'
				},
				{
					name: 'Portails clients / espaces membres',
					description: 'Accès sécurisé à des données ou services personnalisés.',
					slug: 'portails-clients'
				},
				{
					name: 'Applications de visio, chat, ou collaboration',
					description: 'Intégration WebRTC, WebSocket, notifications temps réel.',
					slug: 'applications-collaboration'
				}
			]
		},
		{
			id: 'api-integrations',
			title: '3. API et intégrations',
			items: [
				{
					name: 'Création d\'API REST ou GraphQL',
					description: 'Pour connecter des services externes ou internes.',
					slug: 'api-rest-graphql'
				},
				{
					name: 'Intégration d\'API tierces',
					description: 'Paiement (Stripe, PayPal), emailing (SendGrid, Mailjet), SMS, réseaux sociaux.',
					slug: 'integration-api-tierces'
				},
				{
					name: 'Automatisation et workflows',
					description: 'Connecter différents outils pour automatiser des processus (Zapier, Make, n8n).',
					slug: 'automatisation-workflows'
				}
			]
		},
		{
			id: 'architecture',
			title: '4. Architecture technique',
			items: [
				{
					name: 'Conception d\'architectures',
					description: 'Architectures web et logicielles scalables et sécurisées.',
					slug: 'conception-architectures'
				},
				{
					name: 'Choix technologiques',
					description: 'Définition des bases de données, frameworks, cloud.',
					slug: 'choix-technologiques'
				},
				{
					name: 'Optimisation des flux',
					description: 'Performance, sécurité et maintenabilité des flux de données.',
					slug: 'optimisation-flux'
				}
			]
		},
		{
			id: 'maintenance',
			title: '5. Optimisation et maintenance',
			items: [
				{
					name: 'Refonte ou optimisation',
					description: 'Amélioration de la vitesse, SEO, accessibilité de site/app.',
					slug: 'refonte-optimisation'
				},
				{
					name: 'Correction de bugs et maintenance',
					description: 'Patchs, mises à jour de sécurité, support technique.',
					slug: 'maintenance-bugs'
				},
				{
					name: 'Monitoring et analytics',
					description: 'Suivi des performances, rapports d\'utilisation.',
					slug: 'monitoring-analytics'
				}
			]
		},
		{
			id: 'produits',
			title: '6. Produits numériques',
			items: [
				{
					name: 'Templates et composants frontend',
					description: 'Composants réutilisables prêts à l\'emploi.',
					slug: 'templates-composants'
				},
				{
					name: 'Plugins et modules',
					description: 'Extensions pour CMS et frameworks.',
					slug: 'plugins-modules'
				},
				{
					name: 'Applications SaaS sur-mesure',
					description: 'Petites applications vendues sous licence ou abonnement.',
					slug: 'saas-sur-mesure'
				},
				{
					name: 'Scripts et outils d\'automatisation',
					description: 'Solutions d\'automatisation personnalisées pour clients.',
					slug: 'scripts-automatisation'
				}
			]
		},
		{
			id: 'conseil',
			title: '7. Conseil et accompagnement',
			items: [
				{
					name: 'Audit technique',
					description: 'Analyse de l\'architecture, sécurité, performance.',
					slug: 'audit-technique'
				},
				{
					name: 'Stratégie digitale',
					description: 'Choix technos, roadmap produit.',
					slug: 'strategie-digitale'
				},
				{
					name: 'Formation',
					description: 'Former des équipes internes sur un framework ou une stack technique.',
					slug: 'formation'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Em-ilien.fr - Services</title>
	<meta
		name="description"
		content="Découvrez mes services de développement web : sites vitrines, e-commerce, applications SaaS, API, conseil technique et plus."
	/>
</svelte:head>

<PageLayout>
	<h1>Mes Services</h1>
		<p class="intro">
			Développeur web freelance, je vous accompagne dans la conception et la réalisation de vos
			projets numériques. Voici l'ensemble des services que je propose.
		</p>

		<h3>Sommaire</h3>
		<div class="sommaire">
			<ServicesGrid {services} baseHref="#" />
		</div>

		{#each services as category}
			<section id={category.id}>
				<h2>{category.title}</h2>
				<div class="services-grid">
					{#each category.items as service}
						<a href="/blog/{service.slug}" class="service-card">
							<h3>{service.name}</h3>
							<p>{service.description}</p>
							<span class="read-more">En savoir plus</span>
						</a>
					{/each}
				</div>
			</section>
		{/each}

		<section class="cta">
			<h2>Intéressé par mes services ?</h2>
			<p>
				N'hésitez pas à me contacter pour discuter de votre projet. Je vous répondrai dans les plus
				brefs délais.
			</p>
			<a href="https://www.malt.fr/profile/emiliencosson" class="btn" target="_blank" rel="noopener"
				>Me contacter</a
			>
		</section>
</PageLayout>

<style>
	h1 {
		color: #333;
		font-size: 2.5em;
		font-weight: 500;
		margin: 0 0 0.75em 0;
	}

	.intro {
		color: #555;
		font-size: 1.1em;
		line-height: 1.6;
		margin-bottom: 3.5em;
	}

	h3 {
		font-size: 1.7em;
		color: #555;
		font-weight: 400;
		margin: 0 0 1.5em 0;
	}

	.sommaire {
		margin-bottom: 3.5em;
	}

	section {
		margin-bottom: 4em;
	}

	section h2 {
		color: #444;
		font-size: 1.5em;
		font-weight: 500;
		margin: 0 0 1.5em 0;
		padding-bottom: 0.75em;
		border-bottom: 2px solid #e0e0e0;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5em;
	}

	.service-card {
		display: block;
		background: #fff;
		border-radius: 8px;
		padding: 1.5em;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	.service-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	.service-card h3 {
		color: #333;
		font-size: 1.1em;
		font-weight: 500;
		margin-bottom: 0.5em;
	}

	.service-card p {
		color: #666;
		font-size: 0.95em;
		line-height: 1.5;
		margin-bottom: 1em;
	}

	.service-card .read-more {
		color: #1e88e5;
		font-size: 0.9em;
		transition: text-decoration 0.2s ease;
	}

	.service-card:hover .read-more {
		text-decoration: underline;
	}

	.cta {
		background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
		border-radius: 12px;
		padding: 3em;
		text-align: center;
		margin-top: 4em;
	}

	.cta h2 {
		color: #fff;
		border-bottom: none;
		margin: 0 0 0.75em 0;
		font-size: 1.8em;
	}

	.cta p {
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 2em 0;
		font-size: 1.05em;
		line-height: 1.6;
	}

	.btn {
		display: inline-block;
		background: #fff;
		color: #1e88e5;
		padding: 0.75em 2em;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		text-decoration: none;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2em;
		}

		h3 {
			margin-top: 0;
		}

		.sommaire {
			margin-bottom: 2.5em;
		}

		section {
			margin-bottom: 3em;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.cta {
			padding: 2em 1.5em;
			margin-top: 3em;
		}

		.cta h2 {
			font-size: 1.5em;
		}
	}
</style>
