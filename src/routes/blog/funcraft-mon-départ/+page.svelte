<script>
	let darkmod = false;

	const changeColorMod = () => {
		darkmod = !darkmod;
	};

	let showHost = false;
	const handleShowHostButton = () => {
		showHost = true;
	};
	const handleHideHost = () => {
		showHost = false;
	};

	// let images = document.querySelectorAll('article>img');
	// images.forEach((img) => {
	// 	img.addEventListener('click', function (event) {
	// 		if (img.classList.contains('zoomed')) return;

	// 		img.classList.add('zoomed');
	// 		img.focus();

	// 		let close = document.createElement('div');
	// 		close.classList.add('close-img');
	// 		document.body.appendChild(close);

	// 		close.addEventListener('click', function (e) {
	// 			images.forEach((img) => {
	// 				img.classList.remove('zoomed');
	// 			});

	// 			close.remove();
	// 		});
	// 	});
	// });
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@Em_ixocle" />
	<meta name="twitter:title" content="FunCraft - mon départ" />
	<meta
		name="twitter:description"
		content="Après deux ans et dix mois, je décide de laisser le soin à d'autres de participer à la modération de FunCraft."
	/>
	<meta name="twitter:image" content="https://pbs.twimg.com/media/DyW_2TgX4AA5mTF.jpg" />
	<meta name="twitter:image:alt" content="Illustration de FunCraft" />
	<title>Mon départ de FunCraft | Blog Em_ilien</title>
</svelte:head>

<div class="article-container" class:darkmod>
	<article>
		<header>
			<h1>
				Après deux ans et dix mois, je décide de laisser le soin à d'autres de participer à la
				modération de FunCraft.
			</h1>

			<aside>
				<button on:click={changeColorMod} class="darkmod-button">Mode sombre</button>

				<a target="_blank" href="https://twitter.com/Asc_Em_i"
					><img
						src="https://pbs.twimg.com/profile_images/1354840160626683904/X4qPApTt_400x400.jpg"
						alt="Photo de profil Twitter"
					/></a
				>
			</aside>
		</header>

		<hr />
		<p>
			Alors que l'année 2020-2021 s'achève et que je me dirige vers de nouveaux horizons la rentrée
			suivante, je ressens dès le mois de mai 2021 l'envie de ne plus continuer mes activités en
			lien avec le serveur.
		</p>
		<p>
			La décision que je formule aujourd'hui étant motivée par plusieurs raisons et, souhaitant
			aussi partager certains souvenirs au moment où je pars, je m'applique à fournir dans ce qui
			suit autant de détails que possible. J'espère que cette consignation sera en particulier utile
			à des personnes intéressées par l'exercice d'activités semblables à celles dont je me suis
			affairées.
		</p>
		<br />
		<p>
			Le fait que je ne joue quasiment plus à Minecraft depuis plus de trois ans est la première
			raison qui me pousse à quitter le serveur. J'ai de moins en moins de plaisir à jouer ; seule
			la modération me retenant sur le jeu. En effet, les mois qui ont précédé mon intégration à
			l'équipe de modération de FunCraft, je ne jouais déjà plus sur le serveur, m'y connectant
			surtout pour son tchat. Une fois devenu membre de l'équipe de modération, je ne jouais
			toujours pas beaucoup plus, aimant davantage vaquer à mes activités propres de modérateur.
			J'aimais le jeu, MineCraft ; j'aimais mes missions ; mais je n'aimais plus <em>jouer</em> au
			<em>jeu</em>.
		</p>
		<p>
			Or, aujourd'hui, après près de trois ans de modération, mes goûts ont évolué. Le temps m'a
			lassé de mes missions qui m'ont été confiées le sept novembre 2018, m'encourageant lui aussi à
			m'éloigner un peu plus de FunCraft et par extension de Minecraft.
		</p>
		<p>
			J'anticipe une question évidente et que beaucoup m'ont posée sous une autre forme, pendant des
			mois : « pourquoi ne veux-tu pas devenir Modo ». En effet, on pourrait penser que si je me
			suis lassé de réprimer les infractions-tchat et d'aider les joueurs, me concentrer sur la
			triche pourrait varier quelque peu mes habitudes. Qui plus est, le rang Modo est un rang
			conférant plus de permissions de modération que le Helper ; bien que toutes ses permissions
			supplémentaires ont pour but de réaliser la seule mission exclusive qu'ont les Modos par
			rapport aux Helpers : sanctionner la triche. Or, j'ai toujours été plus intéressé par l'étude
			des mouvements des roches que par le bannissement des tricheurs, c'est dire. Je me serais
			lassé de ce rôle en un jour ; et c'est pourquoi en termes de modération, je préfère être
			Helper ou rien, plutôt que Modo.
		</p>
		<p>
			Comme cité en avant-propos, au moment où j'écris ces mots, j'intègrerai dans quelques jours le
			monde universitaire où j'y consoliderai mes connaissances en informatique ; et je souhaite y
			consacrer du temps qui m'aurait inévitablement manqué en continuant cette activité bénévole.
			Aussi, la distance que doivent me faire prendre l'âge et l'assurance semble m'éloigner petit à
			petit des nouvelles tendances et modes liées au jeu.
		</p>
		<br />
		<p>
			Ce que j'ai aimé le plus, dans mes missions, fut l'aide apportée aux joueurs ; plus encore
			dans le tchat qu'ailleurs. La plupart des demandes d'aides TeamSpeak n'apportent effectivement
			pas plus de satisfaction aux joueurs qu'au bénévole que j'étais, car les demandes exposées sur
			le TeamSpeak sont plus souvent impossibles à résoudre. En revanche, les réponses aux
			interrogations, les conseils, les solutions aux problèmes confèrent au modérateur un bonheur
			inestimable qui ne peut lui être volé par rien au monde, dès lors que le modérateur est ouvert
			aux autres.
		</p>
		<p>
			Véritablement, aider est plus satisfaisant que sanctionner. La sanction qui musèle le joueur
			ne ravit guère le modérateur, malgré son utilité, malgré sa nécessité, bien que juste, bien
			que loyale. En effet, sanction signifie infraction ainsi que privation de permissions. Les
			seules sanctions dont je suis fier sont celles qui ont protégé les autres joueurs ; et celles
			qui ont été mes premières et qui m'ont inspiré un sentiment honteux de puissance qui, très
			rapidement, s'est dissipé ; naturellement, mais surtout fort heureusement.
		</p>
		<p>
			Ce que j'ai préféré en sanctionnant les messages, n'était pas de sanctionner, mais d'exécuter
			le bon motif. D'être <em>juste</em>. Ça me motivait beaucoup.
		</p>
		<p>
			Vouloir entrer dans l'équipe de FunCraft pour le prestige, pour le pouvoir, pour la gloire est
			une erreur. J'ai vu trop de joueurs tenter cela pour les mauvaises raisons. À mon sens, il
			faut aimer aider les joueurs avant tout, apprécier le serveur, aussi ; et enfin affectionner
			un certain degré d'ordre.
		</p>
		<p>
			Un autre conseil que je veux offrir aux personnes intéressées est celui qui leur permettra de
			ne pas souffrir en traitant les infractions-tchat, tel que je le décris ci-dessus. Il faut
			tout simplement oublier que vous sanctionnez des joueurs ; mais que vous sanctionnez seulement
			leurs actes qui, à un instant T, n'ont pas été les bons. Vous ne les jugez pas, vous ne jugez
			que leurs messages. Certes, des personnes commettent plus d'infractions que d'autres ; mais
			d'aucun droit il nous est permis de les considérer ou de les traiter avec mépris. Les seuls
			buts d'une sanction ne devraient être que de dissuader de commettre une infraction, ou
			d'empêcher d'en commettre une si la récidive est plus que probable ; mais en aucun cas la
			vengeance.
		</p>
		<p>
			Parfois, je me suis surpris, en traitant les infractions, être en train de penser que cela ne
			servait à rien, que les insultes continueraient quoi qu'il arrive. Très vite peut naître un
			sentiment d'impuissance. C'est le signal qu'une pause serait bien utile... Certes, les
			infractions continuent toujours ; néanmoins leur sentence incite une partie des joueurs à ne
			plus recommencer. Il peut arriver qu'une infraction signalée ne soit jamais sanctionnée. Il
			faut savoir se détacher un peu du serveur pour ne pas sombrer dans la tourmente à cette
			pensée.
		</p>
		<p>
			Une recommandation, maintenant. Il faut apprendre les “mutes” par coeur, ne faire appel à son
			bon sens que lorsqu'il est le seul capable de nous aider. Un message qui a été signalé et que
			vous devez traiter ne doit pas être sanctionné selon votre jugement propre, selon votre
			expérience ; mais selon la méthodologie commune qui a été définie au fil des années
			d'existence du serveur. Et pour cause : le message qui vous a été assigné ne vous appartient
			pas, bien qu'il vous revienne de le traiter. Il aurait pu en effet l'être par votre camarade.
			Dans l'idéal, vous devriez apporter tous les deux la même réponse à un même message. En
			agissant selon votre bon sens personnel, parfois (et ce n'est pas rare !), vous commettrez ce
			que certains qualifient d'”erreur”. Certains messages que vous sanctionneriez a priori ne
			doivent pas l'être. Certains que vous classeriez comme insulte ne sont que de la provocation.
			Cela vous apparaît comme contre-intuitif. Mais il s'agit pourtant d'une “erreur”.
		</p>
		<p>
			Vous commettrez inévitablement des erreurs, même en faisant de votre mieux. Tenez : ma
			première sanction en était une. Le premier joueur à qui j'ai infligé une sanction avait posté
			un message qui, en réalité, ne devait pas être sanctionné. En apprenant les “mutes”, en posant
			des questions aux autres modérateurs, avec un peu d'expérience, aussi, mon taux d'erreur s'est
			réduit pour <em>tendre</em> vers zéro.
		</p>
		<br />
		<p>Venons-en aux qualités du modérateur idéal, là encore, selon moi.</p>
		<ul>
			<li>
				Patience. Pour supporter d'innombrables heures en <i><i>Demande d'aide</i></i> où, parfois, votre
				interlocuteur ne comprend pas bien ce que vous voulez lui dire ou bien où vous voulez mener votre
				discussion.
			</li>
			<li>
				Calme. Il en faudrait toujours davantage. Le plus gros incident à ma connaissance est le
				suivant : accompagné d'un modérateur pour une <i>Demande d'aide</i>, il a perdu son
				sang-froid, devant deux joueurs qui ne cessaient de parler en hurlant presque, en leur
				demandant vulgairement de se taire — moi-même ayant été à la limite de glisser quelque chose
				du genre. Il m'a confié plus tard que sa nervosité était en cause, alors même que ce
				modérateur est/était de nature calme (et excellent, par la même occasion). Cela prouve donc
				que le calme est plus que nécessaire et que nous n'en sommes jamais assez pourvus.
			</li>
			<li>
				Audace. Il faut avoir l'audace de poser ses limites lorsqu'un joueur en <i>Demande d'aide</i
				> commence à empiéter sur votre sérénité, sur votre temps, sur le respect qu'il vous doit. En
				d'autres termes, il ne faut pas se laisser faire, parfois. Mais ; et c'est tout l'art de cette
				tâche, il faut le faire poliment et respectueusement. Doser le ton d'une colère et d'un étonnement
				factices, légers et contrôlés est une méthode qui a pour ma part fait ses preuves.
			</li>
			<li>
				Pragmatisme. Pour résoudre les problèmes des joueurs ou les convaincre avec méthode, il faut
				être pragmatique.
			</li>
			<li>Intelligence. Un bon complément du pragmatisme. Utile dans tous les domaines.</li>
			<li>
				Orthographe. Peut-être vais-je casser des espoirs, mais mieux vaut apprendre à écrire sans
				faute plutôt que de tuer son temps à produire une candidature. Si vous êtes sujet à un
				problème quelconque vous handicapant en orthographe, je vous préconiserais de trouver
				d'autres objectifs...
			</li>
		</ul>
		<br />
		<p>
			Le savoir-faire des développeurs d'Ascentia est immense. Je notifie ici que nathan818 est
			excellent dans son domaine lorsqu'il s'en donne les moyens. J'ai remarqué, aussi, que les
			modérateurs d'Ascentia sont tous très vifs d'esprit. Ce fut un plaisir apprécié que de traiter
			avec eux.
		</p>
		<br />
		<p>
			En parlant d'eux, on m'a déjà demandé s'il n'arrivait donc jamais aux modérateurs de
			s'embrouiller entre eux. Il m'amuse beaucoup de répondre à cette question.
		</p>
		<p>
			Nous sommes une quarantaine de modérateurs. Imaginez quarante esprits autour de vous, qui ont
			naturellement certaines opinions différentes. Comment serait-il possible que vous les
			appréciez tous individuellement ? Avez-vous toujours apprécié les élèves de votre classe, à
			l'école, au collège, au lycée ? Il y a toujours des personnes qu'on apprécie plus que
			d'autres. Ainsi, évidemment, il arrive que de brèves tensions apparaissent, des mini-disputes,
			aussi. Certaines personnes doivent probablement s'éviter si elles ne s'aiment pas
			réciproquement. Tout cela est naturel et n'est ni grave, ni important. Il est davantage
			audible la bonne ambiance que la moins bonne.
		</p>
		<br />
		<p>
			Je regrette le peu de reconnaissance que les administrateurs ont su manifester à l'égard de
			leurs modérateurs et espère qu'ils sauront au plus vite exprimer leur estime dont ils sont
			pourtant doués.
		</p>
		<p>
			Je dénonce la rancoeur des joueurs qui, pris sur le fait et sanctionnés, sont de mauvaise foi,
			insultent, provoquent, menacent, mentent, tentent de corrompre, d'intimider, d'amadouer,
			d'embobiner ou qui usent d'autres méthodes qui m'échappent et dont ils sont les seuls maîtres.
		</p>
		<p>
			Je remercie les joueurs qui nous font sourire dans le tchat ; qui, bien qu'un peu lourds
			parfois, partagent leurs blagues. Je remercie mes amis, avec qui j'ai pu passer du bon temps,
			réfléchir ; et rire, il est vrai.
		</p>
		<p>
			Je présente mes plus plates excuses, aux joueurs à qui j'ai sûrement dû causer de la peine ;
			et à toutes les personnes qui se reconnaîtront avoir été les victimes de mon apparent dédain :
			ce n'était pas le cas, m'exprimer en défendant mes idées ne peut se faire sans difficulté.
		</p>
		<br />
		<p>
			Je quitte par la même occasion la section Rédaction de l'<a
				target="_blank"
				href="https://twitter.com/funcraft_af">Association Funcraft</a
			>
			et son excellent <a target="_blank" href="http://asso-fc.fr/jdg">Journal de FunCraft</a> que j'ai
			été fier de co-produire. Mais, lassé du jeu, je le suis tout autant d'écrire à son sujet. Les membres
			de la section sauront faire face aux nouveaux défis qui les affrontent et qui leur demandent de
			se réinventer. Ils ont tout mon soutien.
		</p>
		<p>
			Je me concentrerai à la conception d'<a target="_blank" href="http://twitter.com/Emixocle"
				>Emixocle</a
			> à l'avenir, jouer au jeu m'ayant lassé, le modérer également, la programmation pas encore et
			jamais, je l'espère.
		</p>
		<br />
		<p>Quelques détails des circonstances de mon départ m'importent d'être communiqués.</p>
		<p>
			Styleure a été averti au moment de l'ouverture des recrutements d'Helpers de mon départ
			prochain, afin de lui permettre d'anticiper les conséquences ; malgré bien sûr mon inactivité
			croissante de plus longue date.
		</p>
		<p>
			Secondement, puisque j'ai initié l'année dernière, en 2020, un plug-in utilitaire pour les
			modérateurs du serveur TeamSpeak d'Ascentia, que je n'ai pas finalisé mais que je souhaite
			terminer, j'ai demandé à Styleure de me laisser pour quelques semaines ou mois encore les
			seules permissions sur TeamSpeak dont j'ai besoin pour tester et m'assurer du bon
			fonctionnement de cet outil.
		</p>
		<br />
		<p>
			Pour finir, de belles paroles devront faire l'affaire. <em
				>Le sens des mots change avec le temps, aussi ce message évoluera-t-il.</em
			>
		</p>
		<!-- <br />
		<br />
		<br />
		<br />
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891691251349463100/2020-10-24_00.19.00.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891691380534042624/2020-10-31_21.26.59.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891691805597384764/2020-12-27_23.29.05.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891691902586486844/2020-12-27_23.33.33_2.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692184288522271/2021-03-05_16.22.26.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692299929677844/2021-03-20_11.54.20.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692399670206464/2021-04-05_20.03.08.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692481366876160/2021-09-26_16.18.52.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692854701867078/2018-12-26_14.37.55.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891693816887775252/unknown.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891694984854655026/unknown.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891692535926362212/2021-09-26_16.17.58.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891695509792763944/2019-03-12_18.13.11.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891695946033950730/2019-04-11_09.54.36.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891696623221084220/2019-06-28_16.19.16.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891696634981916692/2019-06-28_16.19.21.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891696760467124294/2019-06-28_16.31.07.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891697091104096305/2019-09-07_19.52.22.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891698424615960646/2020-04-19_14.49.21_2.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891696941694615573/2019-07-13_00.45.00.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891691166934904862/2020-10-22_23.06.11.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891697137333723146/2019-09-08_00.18.58.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891697496395509801/2019-10-25_18.01.06.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891698223322918912/2020-03-16_22.37.51.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891690851061882890/2020-09-12_16.15.13.png"
		/>
		<img
			alt="Screen"
			src="https://media.discordapp.net/attachments/891690793620869161/891696350666850344/2019-06-14_20.42.50.png"
		/>
		<img src="" alt="" /> -->
	</article>

	<footer on:keydown={handleHideHost}>
		<h1>Mentions légales</h1>
		<p>Ce site ne collecte aucune donnée personnelle.</p>
		<p>Ce site de dépose aucun cookie.</p>
		<p>L'administration de ce site est assurée par une personne physique.</p>
		<p><button on:click={handleShowHostButton}>Afficher le prestataire d'hébergement</button></p>
		<p>
			Ce site est soumis à la propriété intellectuelle. Toute reproduction partielle ou entière de
			ce site est proscrite sans l'accord écrit de l'administrateur.
		</p>
		<p>
			Vous pouvez contacter l'administrateur du site à
			<a href="mailto:web-admin@em-ilien.fr">cette adresse électronique</a>
			.
		</p>
		{#if showHost}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<div class="host" on:click={handleHideHost} role="dialog">
				<div>
					<div><span>Hébergeur : IONOS SARL</span></div>
					<div class="address">
						<span>7, place de la Gare</span><span>BP 70109</span><span
							>57200 Sarreguemines Cedex</span
						><span>France</span>
					</div>
					<div><span>Tél. : 0970 808 911</span></div>
					<div><span>Mél. : info@ionos.fr</span></div>
				</div>
			</div>
		{/if}
	</footer>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	/* DOCUMENT */

	.article-container {
		height: 100vh;
		overflow-y: scroll;
		scrollbar-color: #bea793 #f5e9cb;
		background: #f5e9cb;
	}
	.article-container.darkmod {
		scrollbar-color: #bea793 rgb(52, 54, 61);
		background: rgb(52, 54, 61);
	}

	/* ARTICLE */

	/* ENTÊTE DE L'ARTICLE */

	article h1 {
		margin-bottom: 0.5em;
		font-size: 1.5em;
		font-weight: bold;
	}

	article hr {
		color: #bea793;
		margin-bottom: 1em;
	}

	aside {
		display: flex;
		margin: 1.5em 0 0.5em;
		justify-content: space-between;
		align-items: flex-end;
	}

	aside a {
		width: max-content;
		height: max-content;
		display: block;
		position: relative;
		margin: 0 0.5em -4px 0;
	}

	aside a img {
		border-radius: 100%;
		width: 3em;
	}
	aside a img:hover {
		transform: scale(1.1);
		transition: 0.3s;
	}

	aside button {
		padding: 1em;
		margin-left: 0.5em;
		height: 50%;
		background: inherit;
		border: solid 1px #666;
		border-radius: 40px;
		cursor: pointer;
	}
	aside button:active {
		outline: none;
	}
	.darkmod aside button {
		border-color: white;
		color: white;
	}
	aside button:hover {
		transition: 0.3s;
		background: #64646d;
		color: white;
		transform: scale(1.1);
	}

	/* Écran assez large pour placer les boutons sur les côtés */
	@media screen and (min-width: 850px) {
		aside a {
			position: fixed;
			top: 0.6em;
			right: 1.5em;
		}

		aside button {
			position: fixed;
			top: 1em;
			left: 1em;
			height: max-content;
		}

		/* Écran assez large pour afficher le bouton sur la gauche mais trop petit pour l'afficher en taille régulière */
		@media screen and (min-width: 850px) and (max-width: 910px) {
			aside button {
				padding-left: 0.5em;
				padding-right: 0.5em;
				margin-left: -10px;
			}
		}

		header h1 {
			margin-bottom: 2em;
		}
	}

	/* CORPS DE L'ARTICLE */

	article {
		width: 600px;
		max-width: 100%;
		padding: 3em 0;
		margin: 0 auto;
		text-align: justify;
		font-family: sans-serif;
		color: #60432c;
		font-size: 1.2em;
	}
	.darkmod article {
		color: white;
	}

	/* Article couvre toute la largeur hormis une marge de 3em */
	@media screen and (max-width: 730px) {
		article {
			margin: 0 3em;
			padding: 3em 0;
			width: inherit;
		}

		/* Écran encore moins large. Remplacement de la marge de 3em par 1em */
		@media (max-width: 600px) {
			article {
				margin: 0 1em;
				padding: 1em 0;
			}
		}
	}

	*::selection {
		background: #d1c39f;
	}
	.darkmod article *::selection {
		background: #6e6754;
	}

	article p {
		padding: 0.7em 0;
		line-height: 1.5em;
	}

	article br {
		display: block;
		margin: 0.7em;
	}

	article ul {
		margin-left: 1em;
	}

	article li {
		margin: 0.3em 0;
	}

	article p a {
		text-decoration: none;
		color: rgb(226, 71, 226);
		font-weight: 600;
	}
	.darkmod article p a {
		color: rgb(71, 164, 226);
	}

	article em {
		font-style: italic;
	}

	article img {
		border-radius: 10px;
		width: 48%;
		margin: 0.4em 0;
		cursor: pointer;
	}

	article img:hover {
		transform: scale(1.05);
		transition: 1s;
	}

	article img.zoomed {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		transition: 0.3s;
		max-width: 80%;
		max-height: 80%;
		object-fit: contain;
		box-shadow: none;
		cursor: unset;
		z-index: 3;
	}

	@media screen and (max-width: 730px) {
		article img.zoomed {
			max-width: 92%;
			max-height: 92%;
			width: unset;
			margin: 0;
		}
	}

	.close-img {
		width: 100%;
		height: 100%;
		background: #0009;
		position: fixed;
		top: 0;
		right: 0;
	}

	/* PIED DE PAGE */

	footer {
		background: #484046;
		color: #f2d9d0;
		line-height: 2em;
		margin-top: 15%;
		padding: 3em 3em 1em;
		font-family: sans-serif;
		font-size: 1em;
	}

	.darkmod footer {
		background: inherit;
		border-top: 1px solid white;
		color: white;
		padding-top: 1em;
	}

	footer h1,
	footer p {
		transform: translateX(-50%);
		margin-left: 50%;
	}

	footer h1 {
		padding-bottom: 1.5em;
	}

	footer a,
	footer button {
		color: rgb(255, 184, 53);
	}

	footer button {
		background: inherit;
		border: inherit;
		font: inherit;
		cursor: pointer;
	}

	footer .host {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #0009;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer .host > div {
		background: #000a;
		padding: 1em;
		border-radius: 0.625em;
	}

	footer .host div {
		margin: 0.75em;
	}

	footer .host .address span {
		display: block;
	}

	/* Écran trop peu large pour une marge du footer */
	@media screen and (max-width: 730px) {
		footer {
			padding: 3em 1em 1em;
		}

		footer h1 {
			margin: 0;
			transform: none;
			text-align: center;
		}

		footer p {
			margin-left: 0;
			transform: none;
		}
	}
</style>
