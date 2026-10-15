import { useContent } from '../../i18n/LocaleContext.jsx'
import styles from './SkipLink.module.css'

/** Lien « Aller au contenu » : invisible, il apparaît au premier Tab au clavier. */
export default function SkipLink() {
  const { ui } = useContent().site
  return (
    <a href="#contenu" className={styles.skip}>
      {ui.skipLink}
    </a>
  )
}
