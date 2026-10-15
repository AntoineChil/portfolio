import { useEffect } from 'react'

/** Met à jour le titre de l'onglet du navigateur pour la page courante. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
