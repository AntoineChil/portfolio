import SectionLabel from './SectionLabel.jsx'
import FrameLines from './FrameLines.jsx'
import styles from './Section.module.css'

/**
 * Section de la page d'accueil : ancre, filet supérieur, étiquette numérotée.
 * `glow` ajoute le fond lumineux bleu et le cadre de sélection (FrameLines).
 */
export default function Section({ id, index, label, glow = false, children }) {
  const titleId = `${id}-titre`

  return (
    <section
      id={id}
      className={`${styles.section} ${glow ? 'backdrop' : ''}`}
      aria-labelledby={titleId}
    >
      <div className={`container ${styles.inner}`}>
        {glow && <FrameLines />}
        <SectionLabel index={index} id={titleId}>
          {label}
        </SectionLabel>
        {children}
      </div>
    </section>
  )
}
