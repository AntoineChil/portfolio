import styles from './CaseStep.module.css'

/**
 * Une étape de l'étude de cas : numéro à gauche (collant sur desktop),
 * titre + contenu libre à droite.
 */
export default function CaseStep({ index, id, title, children }) {
  return (
    <section className={styles.step} aria-labelledby={id}>
      <p className={styles.index} aria-hidden="true">
        {index}
      </p>
      <div>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
