/**
 * Stack technique et formation.
 * Ajouter une compétence = ajouter une chaîne dans le tableau `items` du bon groupe.
 */

const skills = {
  groups: [
    { title: 'Back-end', items: ['PHP 8', 'Symfony', 'Doctrine ORM', 'API REST'] },
    { title: 'Front-end', items: ['React', 'JavaScript (ES6+)', 'Vite'] },
    { title: 'Bases de données', items: ['PostgreSQL', 'MariaDB'] },
    { title: 'Outils', items: ['Docker', 'Git', 'Linux'] },
    { title: 'Design', items: ['Figma', 'Suite Adobe'] },
  ],

  educationTitle: 'Formation',
  education: [
    {
      title: 'Développeur full stack — certification RNCP niveau 6',
      school: 'Le Wagon',
    },
    {
      title: 'Bachelor Design Web (UX/UI)',
      school: 'Webstart',
    },
  ],
}

export default skills
