import styles from './FrameLines.module.css'

/**
 * Cadre de sélection décoratif (signature visuelle) : quatre filets fins qui
 * traversent toute la section, avec un point lumineux à chaque intersection.
 *
 * À placer dans un parent en `position: relative`. Le parent de la section
 * doit couper le débordement (classe `.backdrop` ou `overflow: clip`).
 * Le cadre déborde légèrement du contenu (--frame-pad) pour lui laisser de l'air.
 */
export default function FrameLines() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <span className={`${styles.line} ${styles.top}`} />
      <span className={`${styles.line} ${styles.bottom}`} />
      <span className={`${styles.line} ${styles.left}`} />
      <span className={`${styles.line} ${styles.right}`} />
      <span className={`${styles.node} ${styles.topLeft}`} />
      <span className={`${styles.node} ${styles.topRight}`} />
      <span className={`${styles.node} ${styles.bottomLeft}`} />
      <span className={`${styles.node} ${styles.bottomRight}`} />
    </div>
  )
}
