import { useContent } from '../../i18n/LocaleContext.jsx'
import { externalLinkProps } from '../../utils/links.js'
import { withPixelAccents } from '../../utils/pixelAccents.jsx'
import Section from '../ui/Section.jsx'
import styles from './Contact.module.css'

// Flèche selon le type de lien
const ARROWS = { mail: '→', external: '↗', download: '↓' }

/** Section « 03 - Contact » : fond lumineux, grandes lignes cliquables. */
export default function Contact() {
  const { sections, contact, ui } = useContent().site
  const { index, label } = sections.contact

  return (
    <Section id="contact" index={index} label={label} glow>
      <p className={`display ${styles.title}`}>{withPixelAccents(contact.title)}</p>
      <p className={styles.text}>{contact.text}</p>

      <ul className={styles.list}>
        {contact.items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={styles.link}
              {...(item.kind === 'external' ? externalLinkProps : {})}
              {...(item.kind === 'download' ? { download: true } : {})}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.arrow} aria-hidden="true">
                {ARROWS[item.kind]}
              </span>
              {item.kind === 'external' && <span className="visually-hidden"> {ui.newTabHint}</span>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
