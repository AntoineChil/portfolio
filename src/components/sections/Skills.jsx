import { useContent } from '../../i18n/LocaleContext.jsx'
import Section from '../ui/Section.jsx'
import TagList from '../ui/TagList.jsx'
import styles from './Skills.module.css'

/** Section « 02 — Stack & compétences » : tableau façon registre + formation. */
export default function Skills() {
  const { site, skills } = useContent()
  const { index, label } = site.sections.skills

  return (
    <Section id="competences" index={index} label={label}>
      <ul className={styles.groups}>
        {skills.groups.map((group) => (
          <li key={group.title} className={styles.row}>
            <h3 className={styles.rowTitle}>{group.title}</h3>
            <TagList items={group.items} label={group.title} />
          </li>
        ))}
      </ul>

      <div className={`${styles.row} ${styles.education}`}>
        <h3 className={styles.rowTitle}>{skills.educationTitle}</h3>
        <ul className={styles.educationList}>
          {skills.education.map((item) => (
            <li key={item.title}>
              <p className={styles.degree}>{item.title}</p>
              <p className={styles.school}>{item.school}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
