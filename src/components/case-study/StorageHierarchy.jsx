import styles from './StorageHierarchy.module.css'

/** Schéma de la hiérarchie physique : Frigo → Étagère → … → Position. */
export default function StorageHierarchy({ levels, label }) {
  return (
    <ol className={styles.list} aria-label={label}>
      {levels.map((level, i) => (
        <li key={level} className={styles.item}>
          <span className={styles.level}>{level}</span>
          {i < levels.length - 1 && (
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
