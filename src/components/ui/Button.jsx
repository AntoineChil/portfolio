import { Link } from 'react-router-dom'

import { useContent } from '../../i18n/LocaleContext.jsx'
import { externalLinkProps } from '../../utils/links.js'
import styles from './Button.module.css'

/**
 * Bouton-lien (call to action).
 *
 * - `to`       → lien interne (React Router)
 * - `href`     → lien classique ; ajouter `external` pour un nouvel onglet
 *                ou `download` pour un fichier à télécharger
 * - `variant`  → 'primary' (plein) ou 'secondary' (contour)
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  external = false,
  download = false,
  className = '',
  children,
}) {
  const { ui } = useContent().site
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  // Flèche indicative : ↓ téléchargement, ↗ site externe, → navigation
  const arrow = download ? '↓' : external ? '↗' : '→'
  const inner = (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        {arrow}
      </span>
      {external && <span className="visually-hidden"> {ui.newTabHint}</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? externalLinkProps : {})}
      {...(download ? { download: true } : {})}
    >
      {inner}
    </a>
  )
}
