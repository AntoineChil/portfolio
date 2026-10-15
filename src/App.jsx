import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes.js'
import SkipLink from './components/layout/SkipLink.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollManager from './components/layout/ScrollManager.jsx'
import HomePage from './pages/HomePage.jsx'
import BiobankCaseStudy from './pages/BiobankCaseStudy.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

/**
 * Structure commune à toutes les pages : lien d'évitement, header, contenu, footer.
 * Le routing côté client fonctionne sur Vercel grâce à la règle de vercel.json.
 */
export default function App() {
  return (
    <>
      <ScrollManager />
      <SkipLink />
      <Header />
      <main id="contenu" tabIndex={-1}>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.biobank} element={<BiobankCaseStudy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
