# 🔙🦩Challenge 48H : Fallback Flamant

## :warning: Avant de commencer

Il est important de savoir que nous avons travaillé sur 2 repositories différents lors de ce challenge. Voici donc les liens des 2 repositories :

- [fallback-flamant-front](https://github.com/matheoleger/fallback-flamant-front)
- [fallback-flamant-back](https://github.com/matheoleger/fallback-flamant-back)

Si vous voulez les utiliser afin d'avoir le résultat complet (CRUD entièrement fonctionnel, etc...), suivez les README :wink:

## Projet
Ce projet a été réalisé dans le cadre du Challenge 48 Heures 2023 de Nantes ynov Campus.

Le principal objectif était de décentraliser les sites de 1522 commerçants. Cela leur permettrait d'avoir plus de visibilité car il formerait un [fediverse](https://serveur410.com/le-fediverse-cest-quoi-et-comment-lutiliser/).

La décentralisation a plusieurs avantages, notamment le fait de pouvoir se créer un compte sur un serveur et pouvoir se connecter sur un autre serveur via ce même compte. Conséquemment, l'utilisateur peut acheter les articles d'un marchand sur le site d'un autre marchand (seulement s'il accepte de bien vouloir vendre ces produits) car chaque serveur peut avoir ses propres règles de gestion et choix d'affichage ! De sus, cela permet de ne pas devoir se créer un compte sur chaque serveur, ce qui apporte un gros gain de place pour stocker les données et améliore l'expérience utilisateur.

Concrètement, nous devions former un réseau de serveurs servants chacun leurs propres produits ainsi que les produits des autres serveurs auxquels ils sont connectés, et ceci *sans entité centrale*.

[ENONCÉ](https://tardigrade.land/campus/0/module/7/assignment/0?share=72c63dde-8aac-4a34-8ca4-dc36851b137f)

## TECHNOLOGIES UTILISÉES + INSTALLATIONS

* PostgreSQL (SGBDR)

Voici un lien pour pouvoir télécharger PostgreSQL : https://www.postgresql.org/download

* PgAdmin (pour environnement local)

Une fois que vous avez téléchargé PostgreSQL, téléchargez [pgAdmin](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.19/).

* AdonisJS (NodeJs)

Voici le site officiel d'AdonisJS pour le télécharger : https://docs.adonisjs.com/guides/installation

* Postman

[PostMan](https://www.postman.com/downloads/) est utilisé afin d'interroger les APIs à l'aide de requêtes HTTP.

* React (TypeScript) / HTML / CSS

Voici un lien pour télécharger React sous Windows : https://learn.microsoft.com/fr-fr/windows/dev-environment/javascript/react-on-windows

* Docker (conteneurisation des serveurs)

Téléchargez Docker ici : https://docs.docker.com/get-docker/

## LANCER UNE INSTANCE

Afin de pouvoir lancer une instance de notre projet, il suffit de faire la commande :

```bash
docker compose up
```

Une fois ceci fait, le projet devrait se lancer.

> 💡 Il est important que les variables d’environnement du fichier `.env` correspondent avec celle du fichier `docker-compose` ainsi que le `port`

Dans certains cas, lors de la modification de certaine variable d'environnement, vous pourrez avoir besoin d'utiliser la commande :

```bash
docker-compose build --no-cache
# puis ensuite faire la commande suivante pour lancer les conteneurs
docker compose up
```

## SOLUTION ENVISAGÉE

Nous avions comme idée de mettre en place sur Docker un container par site avec dedans, chaque élément dont on avait besoin (back/front/api). Chaque site aurait ses propres données mais respecterait certaines règles quant à la disposition de leur API.

Pour rechercher ou changer une information, on enverrait une requête qui parcourerait chaque API de tous les noeuds possibles tant qu'elle n'aurait pas trouvé la valeur (si la valeur n'existe pas on enverrait un message une fois tous les noeuds parcourus).

### POUR ALLER PLUS LOIN 

Nous avions pensé à pouvoir rassembler les serveurs/base de données en fonction des personnes qui les fréquentent. Par exemple, si 2 sites internet reçoivent des clients très rapprochés, il faudrait les renseignés sur des noeuds voisins dans le but de pouvoir parcourir et récupérer les données utiles plus rapidement.

## SOLUTION APPORTÉE 

Nous avons pu développer l'API ainsi qu'un Docker mais faute de temps, nous n'avons pas réussi à lier les sites entre eux ou à récupérer les valeurs d'un autre site depuis un site. Mais avec plus de temps, nous sommes sûrs que nous aurions réussi à pouvoir lier les API ainsi que les sites.

Ce que nous aurions mis en place avec plus de temps, c'est une API fonctionnelle, permettant de récupérer les valeurs d'un serveur à un autre.

Dans le projet, on peut voir **certains éléments expliquant cela** comme dans la branche [feature/decentralization](https://github.com/matheoleger/fallback-flamant-back/tree/feature/decentralization) qui nous montre le début de la récupération d'un serveur à l'autre en passant par une table faisant office de répertoire des adresses des serveurs connus par l'instance.

Chaque instance aurait donc eu son propre répertoire, inscrit dans la table ``address_list``, qui aurait permit de faire des appelles à l'API d'une instance à l'autre et de remonter l'information jusqu'à l'instance qui demandait la donnée à l'origine.

## PERFORMANCE 

Notre méthode est performante dans le sens où si elle trouve une valeur dans les noeuds proches de notre site, on aura parcouru un nombre minime de données, ce qui nous évite des tas de calculs inutiles. Notamment dans le cas où on tirait les sites dans les noeuds en fonction des personnes qui s'y connectent.

Avec la décentralisation, il y a également une économie des données, on peut utiliser des plus petits serveurs sans pour autant diminuer le nombre de sites.

Concernant Docker, nous l'avons choisi car il permet une grande mobilité de déploiement et une forte scalabilité comparée à des VMs classiques.

Imaginons que l'utilisateur fait une recherche sur un article, le temps d'attente peut être très long s'il y a un nombre considérable d'éléments. C'est pour cela que l'on utiliserait des promesses, cela permettrait que lorsque l'on reçoit les informations d'un noeud, on l'affiche directement à l'écran de l'utilisateur plutôt que d'attendre tous les éléments puis enfin de les afficher. Cela lui permettra de ne pas attendre trop longtemps ou que le temps ne lui paraisse pas long.

La décentralisation est un nouveau moyen de naviguer et améliore grandement l'expérience utilisateur. L'utilisateur n'a pas besoin de sortir du site pour rechercher un article, ce qui fait gagner en ergonomie.

# Infrastructure d'une instance (sous Docker)

Pour commencer l'infrastructure se compose 5 conteneurs.

Tous reliés entre eux

- 1 conteneur avec la base de données ``postgres``

- 1 conteneur ``back1`` 

- 1 conteneur ``back2``

- 1 conteneur ``front``

- 1 conteneur ``nginx``


le conteneur de base de données est relié à l'ensemble des conteneurs.

Comme leur nom l'indique, ``back1`` et ``back2`` permettent l'utilisation de l'API, nous avons intégré node.js dedans pour monter l'API.

le conteneur ``front`` relie la partie du code front de la page web. 

le conteneur ``nginx`` permet le load balancing ``back1`` et ``back2`` ainsi que la redirection vers les bons ports

Question sécurité possible à mettre en place:


Pour la sécurisation de docker en general:

- Créer un Utilisateur spécifique pour administrer les conteneurs et ne pas laisser le Root par défaut

- Il faut bien sûr utilisé des images officielles et évité au maximum d'utiliser des images dites non vérifié.

- Il faut bien sûr tenir à jour tous les logiciels qu'on utilise dans le conteneur par exemple postgresql , node.js etc.., car ils permettront de corriger les failles de sécurité.

- Utilisé un logiciel d'analyse de conteneur pour le vérifier avant un déploiement (AppArmor).

- Il faut créer des liens entre les conteneurs pour qu'il communique que entre eux.

Pour le contenur Postgresql

- Fermer tous les autres ports non utilisé que celui par défault qui est le 5432

- Par default postgresql écoute sur toutes les adresses réseaux, il faut modifier se paramètre pour qu'il écoute que les connexions local.

- Mettre en place le TLS Transport Level Security postgresql supporte cette technologie. Pour la mettre en place, on peut utiliser Let's Encrypt ou alors, on peut le créer localement grâce au cli de postgres

ensuite on peut créer aussi un certificat client pour confirmer l'identité de la connexion à la base de données pour rajouter une couche de sécurité supplémentaire.

- Limité les privilèges des utilisateurs de la base de données. En effet postgres permet de définir des rôles aux utilisateurs de la base de données par exemple un utilisateur doit seulement accéder à la base de données pour s'y connecter grâce au rôle LOGIN. Cependant, il ne pourra pas faire de modification dans la base de données. Ici on rajoute une restriction en cas de vole de compte d'un compte utilisateur de la base de données, la personne ne pourra pas faire de modification ni de suppression ce qui limite grandement l'attaque malveillante.

- Mettre en place une récolte des logs de connexions pour monitorer la base de données.

Pour le conteneur nginx:

- Mettre en place le certificat SSL

- Désactivé les protocoles SSL 3, TLS 1.0 et TLS 1.1 car ils sont vulnérables et laisser que TLS 1.2 

- Désactiver la suite de chiffrement faible

- Installer un Certificat de chaîne

- Sécuriser Diffie-Hellman pour TLS permet de partagé un clés publique de façon sécurisé

- Désactiver les méthodes HTTP indésirables TRACE, DELETE, PUT, OPTIONS

- Désactiver tous les modules non nécessaires de nginx

- Injécter la ligne X-FRAME-OPTIONS dans l'en-tête HTTP pour empêcher une attaque de détournement de clic

- Injectez en-tête HTTP avec protection X-XSS pour atténuer les attaques de script intersite

- Ajoutez un pare-feu de sécurité web nommé WAF (Web Application Security)

- tenir à jour ngninx


# CONTRIBUTEURS

* [Nathan SCHNEIDER](https://github.com/NatSch45) - B3 IA/Data
* Romain DUVERGER - B3 Cybersec
* [Mathéo LEGER](https://github.com/matheoleger) - B3 Dev
* [Flavio CORMERAIS](https://github.com/FCORMERAIS) - B2
* Jordan ZOKPODO - B2
* [Tilio BOURIGAULT](https://github.com/Tilio44) - B1
* Mathis SILOTIA - B1

