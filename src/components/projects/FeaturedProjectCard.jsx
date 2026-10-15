import { useContent } from '../../i18n/LocaleContext.jsx'
import { ROUTES } from '../../routes.js'
import Button from '../ui/Button.jsx'
import TagList from '../ui/TagList.jsx'
import StorageGrid from '../ui/StorageGrid.jsx'
import styles from './FeaturedProjectCard.module.css'

/**
 * Résumé du projet biobanque, avec lien vers l'étude de cas complète.
 * Visuel : l'illustration animée de localisation d'un échantillon
 * (les vraies captures, elles, vont dans l'étude de cas).
 */
export default function FeaturedProjectCard() {
  const { card } = useContent().biobank

  return (
    <article className={styles.card} aria-labelledby="biobanque-titre">
      <div>
        <p className={styles.kicker}>{card.kicker}</p>
        <h3 id="biobanque-titre" className={`display ${styles.title}`}>
          {card.title}
        </h3>
        <p className={styles.summary}>{card.summary}</p>

        <ul className={styles.highlights}>
          {card.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <TagList items={card.stack} label={card.stackLabel} className={styles.tags} />

        <Button to={ROUTES.biobank}>{card.cta}</Button>
      </div>

      <StorageGrid
        className={styles.illustration}
        path={card.illustration.path}
        target={card.illustration.target}
        caption={card.illustration.caption}
      />
    </article>
  )
}
