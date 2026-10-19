import styles from './SectionLabel.module.css'

/**
 * Étiquette numérotée façon registre : « 01 -- PROJETS ».
 * C'est un vrai titre (h2 par défaut) pour garder une hiérarchie accessible.
 */
export default function SectionLabel({ index, id, as: Heading = 'h2', children }) {
  return (
    <div className={styles.label}>
      <span className={styles.index} aria-hidden="true">
        {index}
      </span>
      <span className={styles.rule} aria-hidden="true" />
      <Heading id={id} className={styles.text}>
        {children}
      </Heading>
    </div>
  )
}
