import { Link } from 'react-router-dom'

import { useContent } from '../../i18n/LocaleContext.jsx'
import { ROUTES } from '../../routes.js'
import styles from './Header.module.css'

/** En-tête collant et translucide : monogramme pixel + nom, navigation par ancres. */
export default function Header() {
  const { person, nav, ui } = useContent().site

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to={ROUTES.home} className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            {person.initials}
          </span>
          {/* Masqué visuellement sur mobile, mais toujours lu par les lecteurs d'écran */}
          <span className={styles.brandName}>{person.name}</span>
        </Link>

        <nav aria-label={ui.mainNavLabel}>
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
