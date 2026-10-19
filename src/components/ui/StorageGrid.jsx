import { Fragment } from 'react'

import styles from './StorageGrid.module.css'

/**
 * Illustration signature du hero : une boîte de stockage 9×9 (lignes A–I,
 * colonnes 1–9). Le chemin de localisation s'écrit étape par étape, puis la
 * position recherchée s'allume - l'accroche, racontée sans un mot de plus.
 *
 * Purement décorative (aria-hidden) : le texte du hero porte déjà le message.
 * Les animations sont désactivées si l'utilisateur préfère réduire les mouvements.
 *
 * Props :
 * - path    : étapes du chemin (ex. ['Frigo 03', ..., 'Position E7'])
 * - target  : { row, col } - position allumée, index à partir de 0
 * - caption : légende sous la boîte
 */
const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const STEP_DELAY_MS = 350

// Motif déterministe pour simuler une boîte partiellement remplie
// (toujours le même rendu, pas d'aléatoire qui changerait à chaque visite).
function isOccupied(rowIndex, colIndex) {
  return (rowIndex * 7 + colIndex * 3) % 5 !== 0
}

export default function StorageGrid({ path, target, caption, className = '' }) {
  // La position s'allume une fois le chemin entièrement affiché
  const targetDelay = `${path.length * STEP_DELAY_MS + 300}ms`

  return (
    <figure
      className={`${styles.figure} ${className}`}
      aria-hidden="true"
      style={{ '--target-delay': targetDelay }}
    >
      <ol className={styles.path}>
        {path.map((step, i) => (
          <li key={step} style={{ '--step-delay': `${i * STEP_DELAY_MS}ms` }}>
            {step}
          </li>
        ))}
      </ol>

      <div className={styles.box}>
        {/* Ligne d'en-tête : coin vide + numéros de colonnes */}
        <span />
        {COLUMNS.map((col, c) => (
          <span key={col} className={`${styles.head} ${c === target.col ? styles.headActive : ''}`}>
            {col}
          </span>
        ))}

        {ROWS.map((row, r) => (
          <Fragment key={row}>
            <span className={`${styles.head} ${r === target.row ? styles.headActive : ''}`}>{row}</span>
            {COLUMNS.map((col, c) => {
              const isTarget = r === target.row && c === target.col
              const modifier = isTarget ? styles.target : isOccupied(r, c) ? styles.occupied : ''
              return <span key={col} className={`${styles.cell} ${modifier}`} />
            })}
          </Fragment>
        ))}
      </div>

      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}
