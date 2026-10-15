import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Gère le défilement à chaque navigation (React Router ne le fait pas seul) :
 * - lien avec ancre (ex. "/#contact") → défile jusqu'à la section ;
 * - nouvelle page → remonte en haut et place le focus sur <main>,
 *   pour que les lecteurs d'écran annoncent le nouveau contenu.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const pageChanged = previousPathname.current !== pathname
    previousPathname.current = pathname

    if (hash) {
      // Attend que la page cible soit affichée avant de chercher l'ancre
      requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      })
      return
    }

    window.scrollTo(0, 0)
    if (pageChanged) {
      document.getElementById('contenu')?.focus({ preventScroll: true })
    }
  }, [pathname, hash, key])

  return null
}
