import { useContent } from '../../i18n/LocaleContext.jsx'
import styles from './ProjectImage.module.css'

/**
 * Capture d'écran d'un projet.
 *
 * Tant que `image.src` est vide, affiche un emplacement réservé clairement
 * identifié « Capture d'écran à venir ». Dès que `src` est renseigné dans le
 * fichier de contenu, la vraie image prend sa place, sans autre modification.
 *
 * `image` : { src, alt, caption, width?, height? }
 * `priority` : à mettre sur une image visible dès l'arrivée sur la page
 *              (désactive le chargement différé).
 */
export default function ProjectImage({ image, priority = false, className = '' }) {
  const { ui } = useContent().site

  return (
    <figure className={`${styles.figure} ${className}`}>
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={`${ui.imagePlaceholder} : ${image.caption}`}>
          <span className={styles.badge}>{ui.imagePlaceholder}</span>
        </div>
      )}
      {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
    </figure>
  )
}
