import styles from './TagList.module.css'

/** Liste d'étiquettes (technologies, compétences). */
export default function TagList({ items, label, className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  )
}
