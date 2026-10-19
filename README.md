# Portfolio - Antoine Chilewski

Portfolio personnel de développeur full stack PHP/Symfony & React.
React 18 + Vite, React Router, CSS Modules. Pensé pour être déployé sur **Vercel**.

---

## 1. Lancer le projet en local

### Prérequis

- **Node.js 18 ou plus récent** (version LTS recommandée) : <https://nodejs.org>
  Vérifier l'installation : `node -v` et `npm -v`.

### Commandes

```bash
npm install       # installe les dépendances (une seule fois)
npm run dev       # serveur de développement → http://localhost:5173
npm run build     # build de production dans /dist
npm run preview   # sert le build de production en local pour le vérifier
```

---

## 2. Déployer sur Vercel

### Option A - depuis GitHub (recommandée)

1. Créer un dépôt GitHub et y pousser le projet :
   ```bash
   git init
   git add .
   git commit -m "Premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/AntoineChil/portfolio.git
   git push -u origin main
   ```
2. Sur <https://vercel.com>, se connecter avec GitHub → **Add New… → Project** → importer le dépôt.
3. Vercel détecte **Vite** automatiquement. Les réglages par défaut sont les bons :
   - Build Command : `npm run build`
   - Output Directory : `dist`
4. Cliquer sur **Deploy**. Chaque `git push` sur `main` redéploie ensuite le site automatiquement.

### Option B - en ligne de commande

```bash
npm install -g vercel
vercel          # premier déploiement (aperçu)
vercel --prod   # mise en production
```

### Pourquoi un fichier `vercel.json` ?

Le site utilise un routing côté client (`/projets/biobanque`). Sans configuration,
recharger cette page renverrait une erreur 404. La règle de `vercel.json`
redirige toutes les URLs vers `index.html`, et React Router affiche la bonne page.
Les fichiers réels (PDF, images, favicon) restent servis normalement.

---

## 3. Avant la mise en ligne : à compléter

| À faire | Où |
|---|---|
| Déposer le CV sous le nom `cv-antoine-chilewski.pdf` | `public/` |
| Créer une image d'aperçu 1200×630 px `og-image.png`, puis décommenter la balise `og:image` avec l'URL Vercel | `public/` et `index.html` |

---

## 4. Modifier le contenu

**Tout le texte du site est dans `src/content/fr/`**, jamais dans les composants :

| Fichier | Contenu |
|---|---|
| `site.js` | Identité, liens (e-mail, LinkedIn, GitHub, CV), accueil, navigation, contact |
| `biobank.js` | Projet phare : résumé de l'accueil et étude de cas complète |
| `tripeasy.js` | Projet TripEasy |
| `skills.js` | Stack technique et formation |

### Ajouter des captures d'écran (optionnel)

L'étude de cas n'affiche pas de captures pour l'instant : la section
« Aperçu de l'application » reste masquée tant que la liste est vide,
et apparaît automatiquement dès qu'une image est ajoutée.

1. Déposer l'image dans `src/assets/projects/biobank/` (ex. `stockage.png`).
2. En haut de `src/content/fr/biobank.js`, l'importer :
   ```js
   import stockage from '../../assets/projects/biobank/stockage.png'
   ```
3. L'ajouter dans `caseStudy.gallery.images` :
   ```js
   images: [
     { src: stockage, alt: 'Description précise de la capture', caption: 'Structure de stockage d’un frigo', width: 1600, height: 1000 },
   ],
   ```
   `width`/`height` (taille réelle en pixels) évitent les décalages de mise en page au chargement.
   Conseil : exporter en `.webp` ou `.jpg`, environ 1600 px de large.

---

## 5. Ajouter une version anglaise (plus tard)

L'architecture est prête, aucun composant n'est à modifier :

1. Dupliquer `src/content/fr/` en `src/content/en/` et traduire les **valeurs** (garder les clés).
2. Dans `src/content/index.js` :
   ```js
   import en from './en/index.js'
   const dictionaries = { fr, en }
   ```
3. Ajouter un sélecteur de langue (par ex. dans le Header) qui appelle `setLocale('en')`,
   récupéré via `useLocale()` depuis `src/i18n/LocaleContext.jsx`.

L'attribut `<html lang>` se met à jour automatiquement.

---

## 6. Modifier le design

Toute l'identité visuelle est centralisée dans **`src/styles/tokens.css`** :
couleurs, dégradés, lueurs, polices, échelle typographique, espacements.

Direction « nuit électrique », alignée sur les visuels LinkedIn :

- **Palette** : noir profond glissant vers un bleu électrique, texte blanc bleuté,
  accent bleu clair lumineux. Thème sombre unique.
- **Typographie** : Inter Tight en gras serré pour les titres et le texte, Pixelify Sans
  pour les accents « pixel ». Polices auto-hébergées via `@fontsource` (importées dans `src/main.jsx`).
- **Mots en pixel** : dans les fichiers de contenu, un mot entre `[crochets]` s'affiche en
  police pixel dans les grands titres (ex. `parmi [600 000]`). Retirer les crochets suffit.
- **Signatures visuelles** (utilitaires dans `src/styles/global.css` et `src/components/ui/`) :
  - `.display` : titre en dégradé blanc → bleu avec halo ;
  - `.backdrop` : fond noir → lueur bleue avec colonnes de lumière ;
  - `<FrameLines />` : cadre de sélection (filets fins + points lumineux aux intersections) ;
  - boutons et badges en pilule « verre bleu ».

La photo du hero est `src/assets/photo-antoine-chilewski.jpg` (800×800 px).
Pour la changer, remplacer le fichier en gardant le même nom, ou modifier `hero.photo` dans `site.js`.

---

## 7. Structure du projet

```
├─ public/                    fichiers servis tels quels (favicon, CV, og-image)
├─ src/
│  ├─ main.jsx                point d'entrée (polices, styles, routeur, langue)
│  ├─ App.jsx                 layout commun + définition des routes
│  ├─ routes.js               chemins des pages
│  ├─ pages/                  HomePage, BiobankCaseStudy, NotFoundPage
│  ├─ components/
│  │  ├─ layout/              Header, Footer, SkipLink, ScrollManager
│  │  ├─ sections/            sections de l'accueil (Hero, Projects, Skills, Contact)
│  │  ├─ projects/            cartes de projets
│  │  ├─ case-study/          blocs de l'étude de cas
│  │  └─ ui/                  composants réutilisables (Button, TagList, ProjectImage…)
│  ├─ content/fr/             TOUT le texte du site
│  ├─ i18n/                   contexte de langue (useContent, useLocale)
│  ├─ hooks/  utils/          petits utilitaires
│  └─ styles/                 tokens.css (design) + global.css (base)
├─ index.html                 meta SEO / Open Graph + script anti-flash du thème
└─ vercel.json                règle de routing pour Vercel
```

## 8. Accessibilité

- Lien « Aller au contenu » au premier appui sur Tab, focus clavier visible partout.
- Hiérarchie de titres respectée, landmarks (`header`, `nav`, `main`, `footer`).
- Contrastes WCAG AA (texte clair sur fonds noir et bleu).
- Animations désactivées si `prefers-reduced-motion` est activé.
- Liens externes annoncés « s'ouvre dans un nouvel onglet » aux lecteurs d'écran.
- Au changement de page, le focus est replacé sur le contenu principal.
