/**
 * Contenu global du site — version française.
 *
 * Tout le texte affiché vit dans ce dossier, jamais dans les composants.
 * Pour une version anglaise : dupliquer `content/fr/` en `content/en/`,
 * traduire les VALEURS (pas les clés), puis l'enregistrer dans `content/index.js`.
 *
 * Typographie française : les espaces insécables ( ) avant « : ? ! »
 * évitent qu'un signe de ponctuation se retrouve seul en début de ligne.
 *
 * Mots entre [crochets] : affichés en police pixel dans les grands titres
 * (voir utils/pixelAccents.jsx). Supprimer les crochets suffit à les retirer.
 */
import photo from '../../assets/photo-antoine-chilewski.jpg'

// Liens centralisés : un seul endroit à modifier.
const links = {
  email: 'chilewski.a@gmail.com',
  linkedin: 'https://www.linkedin.com/in/antoine-chilewski/',
  github: 'https://github.com/AntoineChil',
  // Fichier à déposer dans /public (voir README)
  cv: '/cv-antoine-chilewski.pdf',
}

const site = {
  meta: {
    title: 'Antoine Chilewski — Développeur Full Stack PHP/Symfony & React',
  },

  person: {
    name: 'Antoine Chilewski',
    initials: 'AC',
    title: 'Développeur Full Stack PHP/Symfony & React',
    location: 'Paris, Île-de-France',
    availability: 'Ouvert au CDI',
  },

  links,

  // Libellés d'interface (boutons, aides à l'accessibilité...)
  ui: {
    skipLink: 'Aller au contenu',
    mainNavLabel: 'Navigation principale',
    homeLabel: 'Accueil',
    newTabHint: '(s’ouvre dans un nouvel onglet)',
    imagePlaceholder: 'Capture d’écran à venir',
  },

  nav: [
    { label: 'Projets', href: '/#projets' },
    { label: 'Compétences', href: '/#competences' },
    { label: 'Contact', href: '/#contact' },
  ],

  hero: {
    hookQuestion:
      'Un échantillon biologique, quelque part parmi [600 000] : comment le retrouver en quelques secondes ?',
    hookAnswer: 'C’est le problème que j’ai résolu de [A à Z] à l’INSERM.',
    intro:
      'Développeur full stack, passé par l’UX/UI avant de me spécialiser en développement. Je conçois des applications web de la base de données jusqu’à l’interface.',
    ctaCv: 'Télécharger mon CV',
    ctaLinkedin: 'Voir mon LinkedIn',
    photo: {
      src: photo,
      alt: 'Portrait d’Antoine Chilewski',
      width: 800,
      height: 800,
    },
  },

  // Numéro + titre de chaque section de la page d'accueil
  sections: {
    projects: { index: '01', label: 'Projets' },
    skills: { index: '02', label: 'Stack & compétences' },
    contact: { index: '03', label: 'Contact' },
  },

  contact: {
    title: 'Vous recrutez un développeur [full stack] ?',
    text: 'Je recherche un CDI en PME ou en ESN en Île-de-France. Le plus simple pour échanger : un e-mail ou un message sur LinkedIn.',
    items: [
      { label: 'E-mail', value: links.email, href: `mailto:${links.email}`, kind: 'mail' },
      { label: 'LinkedIn', value: 'in/antoine-chilewski', href: links.linkedin, kind: 'external' },
      { label: 'GitHub', value: 'AntoineChil', href: links.github, kind: 'external' },
      { label: 'CV', value: 'Télécharger le PDF', href: links.cv, kind: 'download' },
    ],
  },

  footer: {
    credit: 'Conçu et développé par Antoine Chilewski.',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'Cette page n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
}

export default site
