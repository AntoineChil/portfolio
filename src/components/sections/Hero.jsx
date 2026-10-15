import { useContent } from '../../i18n/LocaleContext.jsx'
import { withPixelAccents } from '../../utils/pixelAccents.jsx'
import Button from '../ui/Button.jsx'
import FrameLines from '../ui/FrameLines.jsx'
import styles from './Hero.module.css'

/** Accueil : badge de statut, nom/titre (h1), accroche lumineuse, CTA, portrait. */
export default function Hero() {
  const { person, links, hero } = useContent().site

  return (
    <section className={`backdrop ${styles.hero}`} aria-labelledby="hero-titre">
      <div className={`container ${styles.grid}`}>
        <FrameLines />

        <div className={styles.text}>
          {/* Badge en pilule : blanc à gauche, bleu à droite (comme « +3 ans | React x Symfony ») */}
          <p className={styles.status}>
            <span className={styles.statusLocation}>{person.location}</span>
            <span className={styles.statusAvailability}>{person.availability}</span>
          </p>

          <h1 id="hero-titre" className={styles.heading}>
            <span className={styles.name}>{person.name}</span>
            <span className={styles.role}>{person.title}</span>
          </h1>

          <p className={`display ${styles.hook}`}>
            {withPixelAccents(hero.hookQuestion)} {withPixelAccents(hero.hookAnswer)}
          </p>

          <p className={styles.intro}>{hero.intro}</p>

          <div className={styles.actions}>
            <Button href={links.cv} download>
              {hero.ctaCv}
            </Button>
            <Button href={links.linkedin} variant="secondary" external>
              {hero.ctaLinkedin}
            </Button>
          </div>
        </div>

        <div className={styles.portrait}>
          <img
            src={hero.photo.src}
            alt={hero.photo.alt}
            width={hero.photo.width}
            height={hero.photo.height}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          {/* Poignées de sélection aux coins, façon outil de design */}
          <span className={styles.handle} aria-hidden="true" />
          <span className={styles.handle} aria-hidden="true" />
          <span className={styles.handle} aria-hidden="true" />
          <span className={styles.handle} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
