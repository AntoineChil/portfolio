import { useContent } from '../../i18n/LocaleContext.jsx'
import Section from '../ui/Section.jsx'
import FeaturedProjectCard from '../projects/FeaturedProjectCard.jsx'
import TripEasyCard from '../projects/TripEasyCard.jsx'

/** Section « 01 - Projets » : projet phare puis TripEasy. */
export default function Projects() {
  const { projects } = useContent().site.sections

  return (
    <Section id="projets" index={projects.index} label={projects.label}>
      <FeaturedProjectCard />
      <TripEasyCard />
    </Section>
  )
}
