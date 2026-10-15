import { Link } from 'react-router-dom'

import { useContent } from '../i18n/LocaleContext.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { withPixelAccents } from '../utils/pixelAccents.jsx'
import Button from '../components/ui/Button.jsx'
import FrameLines from '../components/ui/FrameLines.jsx'
import ProjectImage from '../components/ui/ProjectImage.jsx'
import CaseStep from '../components/case-study/CaseStep.jsx'
import StorageHierarchy from '../components/case-study/StorageHierarchy.jsx'
import styles from './BiobankCaseStudy.module.css'

/**
 * Étude de cas : gestion de biobanque (INSERM).
 * Structure : en-tête + faits clés → 01 Contexte → 02 Démarche → 03 Choix
 * techniques → 04 Résultat → aperçu (captures, si fournies) → appel à l'action.
 * Tout le texte vient de content/fr/biobank.js.
 */
export default function BiobankCaseStudy() {
  const { site, biobank } = useContent()
  const cs = biobank.caseStudy
  useDocumentTitle(`${cs.metaTitle} — ${site.person.name}`)

  // La section « Aperçu » n'apparaît que si au moins une capture est renseignée.
  const screenshots = cs.gallery.images.filter((image) => image.src)

  return (
    <article>
      {/* ---------- En-tête (fond lumineux + cadre de sélection) ---------- */}
      <header className={`backdrop ${styles.header}`}>
        <div className={`container ${styles.headerInner}`}>
          <FrameLines />

          <Link to="/#projets" className={styles.back}>
            <span aria-hidden="true">← </span>
            {cs.backLabel}
          </Link>

          <p className={styles.kicker}>{cs.kicker}</p>
          <h1 className={`display ${styles.title}`}>{withPixelAccents(cs.title)}</h1>
          <p className={styles.lede}>{cs.lede}</p>

          <dl className={styles.facts}>
            {cs.facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ---------- Étapes ---------- */}
      <div className={`container ${styles.steps}`}>
        <CaseStep index="01" id="contexte" title={cs.context.title}>
          <div className="prose">
            {cs.context.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <StorageHierarchy levels={cs.context.hierarchy} label={cs.context.hierarchyLabel} />
        </CaseStep>

        <CaseStep index="02" id="demarche" title={cs.approach.title}>
          <p className={styles.intro}>{cs.approach.intro}</p>
          <ol className={styles.features}>
            {cs.approach.features.map((feature) => (
              <li key={feature.title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </li>
            ))}
          </ol>
        </CaseStep>

        <CaseStep index="03" id="choix-techniques" title={cs.tech.title}>
          <dl className={styles.tech}>
            {cs.tech.choices.map((choice) => (
              <div key={choice.name} className={styles.techRow}>
                <dt className={styles.techName}>{choice.name}</dt>
                <dd className={styles.techText}>{choice.text}</dd>
              </div>
            ))}
          </dl>
        </CaseStep>

        <CaseStep index="04" id="resultat" title={cs.result.title}>
          <div className="prose">
            {cs.result.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <aside className={styles.note}>
            <p className={styles.noteLabel}>{cs.result.confidentialityLabel}</p>
            <p>{cs.result.confidentiality}</p>
          </aside>
        </CaseStep>
      </div>

      {/* ---------- Captures d'écran (masquées tant qu'il n'y en a aucune) ---------- */}
      {screenshots.length > 0 && (
        <section className={`container ${styles.gallery}`} aria-labelledby="apercu">
          <h2 id="apercu" className={`display ${styles.galleryTitle}`}>
            {cs.gallery.title}
          </h2>
          <div className={styles.galleryGrid}>
            {screenshots.map((image) => (
              <ProjectImage key={image.caption} image={image} />
            ))}
          </div>
        </section>
      )}

      {/* ---------- Suite ---------- */}
      <section className={`container ${styles.next}`} aria-labelledby="suite">
        <h2 id="suite" className={`display ${styles.nextTitle}`}>
          {cs.next.title}
        </h2>
        <div className={styles.nextActions}>
          <Button to="/#contact">{cs.next.ctaContact}</Button>
          <Button to="/#tripeasy" variant="secondary">
            {cs.next.ctaNext}
          </Button>
        </div>
      </section>
    </article>
  )
}
