/**
 * Projet phare : gestion de biobanque (INSERM).
 *
 * `card`      → résumé affiché sur la page d'accueil
 * `caseStudy` → étude de cas complète (/projets/biobanque)
 *
 * CAPTURES D'ÉCRAN (optionnelles) : la section « Aperçu de l'application »
 * reste masquée tant que `caseStudy.gallery.images` ne contient aucune image.
 * Pour en ajouter une :
 *   1. déposer le fichier dans src/assets/projects/biobank/
 *   2. l'importer en haut de ce fichier :
 *        import stockage from '../../assets/projects/biobank/stockage.png'
 *   3. l'ajouter dans `gallery.images` :
 *        { src: stockage, alt: 'Description précise', caption: 'Légende', width: 1600, height: 1000 }
 */

const biobank = {
  card: {
    kicker: 'Projet phare · INSERM',
    title: 'Gestion de biobanque',
    summary:
      'Application web développée de A à Z pour un laboratoire de recherche, gérant jusqu’à 600 000 échantillons biologiques.',
    highlights: [
      'Modélisation du stockage physique avec Doctrine ORM',
      'Import CSV massif avec mapping dynamique des colonnes',
      'Sortie d’échantillons vérifiée en temps réel',
      'Clonage de la structure d’un frigo existant',
    ],
    stackLabel: 'Technologies',
    stack: ['Symfony', 'React', 'MariaDB', 'Doctrine ORM'],
    cta: 'Lire l’étude de cas',
    // Illustration décorative : localisation d'un échantillon (emplacement fictif)
    illustration: {
      path: ['Frigo 03', 'Étagère 2', 'Rack B', 'Boîte 14', 'Position E7'],
      target: { row: 4, col: 6 }, // index à partir de 0 → ligne E, colonne 7
      caption: 'Illustration - localiser un échantillon dans une boîte 9×9',
    },
  },

  caseStudy: {
    metaTitle: 'Étude de cas : gestion de biobanque',
    backLabel: 'Tous les projets',
    kicker: 'Étude de cas · INSERM',
    title: 'Retrouver un échantillon parmi [600 000]',
    lede:
      'Une application web de gestion de biobanque, développée de A à Z pour un laboratoire de recherche : de la modélisation du stockage physique jusqu’aux interfaces pensées pour le quotidien du laboratoire.',

    facts: [
      { label: 'Contexte', value: 'Laboratoire de recherche, INSERM' },
      { label: 'Rôle', value: 'Développement de A à Z' },
      { label: 'Volume', value: 'Jusqu’à 600 000 échantillons' },
      { label: 'Stack', value: 'Symfony · React · MariaDB · Doctrine ORM' },
    ],

    // 01 - Contexte et problème
    context: {
      title: 'Contexte et problème',
      paragraphs: [
        'Un laboratoire de recherche conserve ses échantillons biologiques dans des frigos, eux-mêmes organisés en étagères, racks, tiroirs, boîtes et positions.',
        'Avec un volume pouvant atteindre 600 000 échantillons, la question est simple à poser et difficile à résoudre : comment savoir exactement où se trouve chaque échantillon, et le retrouver en quelques secondes ?',
      ],
      hierarchyLabel: 'Hiérarchie du stockage physique',
      hierarchy: ['Frigo', 'Étagère', 'Rack', 'Tiroir', 'Boîte', 'Position'],
    },

    // 02 - Ma démarche
    approach: {
      title: 'Ma démarche',
      intro:
        'L’application part de la réalité physique du stockage, puis outille chaque étape du travail au laboratoire : modéliser, alimenter, configurer, sortir, gérer.',
      features: [
        {
          title: 'Modéliser le stockage réel',
          text: 'Chaque niveau - frigo, étagère, rack, tiroir, boîte, position - est représenté dans le modèle de données avec Doctrine ORM.',
        },
        {
          title: 'Alimenter la base en masse',
          text: 'Import massif par fichier CSV, avec un mapping dynamique des colonnes et la création automatique des structures manquantes.',
        },
        {
          title: 'Configurer plus vite',
          text: 'Clonage de la structure d’un frigo existant pour accélérer la configuration.',
        },
        {
          title: 'Sortir les bons échantillons',
          text: 'Module de sortie avec vérification en temps réel, par scan ou saisie manuelle, et surbrillance des correspondances.',
        },
        {
          title: 'Gérer au quotidien',
          text: 'Interfaces CRUD en React, pensées pour un usage quotidien au laboratoire.',
        },
      ],
    },

    // 03 - Choix techniques
    tech: {
      title: 'Choix techniques',
      choices: [
        {
          name: 'Symfony',
          text: 'Socle back-end de l’application et de sa logique métier.',
        },
        {
          name: 'Doctrine ORM',
          text: 'Traduction de la hiérarchie physique du stockage en entités reliées entre elles, du frigo jusqu’à la position.',
        },
        {
          name: 'MariaDB',
          text: 'Base de données relationnelle, adaptée à une structure fortement hiérarchisée.',
        },
        {
          name: 'React',
          text: 'Interfaces CRUD et module de sortie, où la vérification par scan ou saisie se fait en temps réel.',
        },
      ],
    },

    // 04 - Résultat (uniquement des faits, aucun chiffre inventé)
    result: {
      title: 'Résultat',
      paragraphs: [
        'Une application web complète, développée de A à Z, qui couvre toute la chaîne : modélisation du stockage, import massif, configuration des frigos et sortie vérifiée des échantillons.',
        'Un outil conçu pour gérer jusqu’à 600 000 échantillons, avec des interfaces pensées pour le travail quotidien au laboratoire.',
      ],
      confidentialityLabel: 'Confidentialité',
      confidentiality:
        'Projet non open source : le code et les données du laboratoire ne sont pas publics.',
    },

    gallery: {
      title: 'Aperçu de l’application',
      // Vide pour l'instant : la section n'est pas affichée (voir en haut du fichier)
      images: [],
    },

    next: {
      title: 'Envie d’en savoir plus sur ce projet ?',
      ctaContact: 'Me contacter',
      ctaNext: 'Projet suivant : TripEasy',
    },
  },
}

export default biobank
