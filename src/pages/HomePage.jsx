import { useContent } from '../i18n/LocaleContext.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Hero from '../components/sections/Hero.jsx'
import Projects from '../components/sections/Projects.jsx'
import Skills from '../components/sections/Skills.jsx'
import Contact from '../components/sections/Contact.jsx'

/** Page d'accueil : simple assemblage des sections, dans l'ordre d'affichage. */
export default function HomePage() {
  const { site } = useContent()
  useDocumentTitle(site.meta.title)

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
