import { useContent } from '../i18n/LocaleContext.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { ROUTES } from '../routes.js'
import Button from '../components/ui/Button.jsx'
import FrameLines from '../components/ui/FrameLines.jsx'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  const { person, notFound } = useContent().site
  useDocumentTitle(`${notFound.title} - ${person.name}`)

  return (
    <div className={`backdrop ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <FrameLines />
        <p className={styles.code}>404</p>
        <h1 className={`display ${styles.title}`}>{notFound.title}</h1>
        <p className={styles.text}>{notFound.text}</p>
        <Button to={ROUTES.home}>{notFound.cta}</Button>
      </div>
    </div>
  )
}
