import { useContent } from '../../i18n/LocaleContext.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  const { person, footer } = useContent().site
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {year} {person.name}
        </p>
        <p>{footer.credit}</p>
      </div>
    </footer>
  )
}
