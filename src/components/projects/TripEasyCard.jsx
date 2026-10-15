import { useContent } from '../../i18n/LocaleContext.jsx'
import Button from '../ui/Button.jsx'
import TagList from '../ui/TagList.jsx'
import styles from './TripEasyCard.module.css'

/** Projet de groupe TripEasy : la contribution personnelle est mise en avant. */
export default function TripEasyCard() {
  const project = useContent().tripeasy

  return (
    <article id="tripeasy" className={styles.card} aria-labelledby="tripeasy-titre">
      <div>
        <p className={styles.meta}>
          <span className={styles.badge}>{project.badge}</span>
          <span className={styles.kicker}>{project.kicker}</span>
        </p>
        <h3 id="tripeasy-titre" className={`display ${styles.title}`}>
          {project.title}
        </h3>
        <p className={styles.summary}>{project.summary}</p>

        <TagList items={project.stack} label={project.stackLabel} className={styles.tags} />

        <Button href={project.repoUrl} variant="secondary" external>
          {project.repoLabel}
        </Button>
      </div>

      <div className={styles.contribution}>
        <p className={styles.contributionLabel}>{project.contributionLabel}</p>
        <p className={styles.contributionText}>{project.contribution}</p>
      </div>
    </article>
  )
}
