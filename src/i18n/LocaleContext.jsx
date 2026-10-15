/**
 * Contexte de langue.
 *
 * Les composants ne lisent jamais le texte directement dans les fichiers de
 * contenu : ils passent par `useContent()`. Le jour où une version anglaise
 * existe, il suffira d'appeler `setLocale('en')` (via un sélecteur de langue)
 * pour que tout le site bascule, sans toucher aux composants.
 */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, getContent } from '../content/index.js'

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE)

  // Garde l'attribut <html lang="..."> synchronisé (lecteurs d'écran, SEO).
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, locales: AVAILABLE_LOCALES, content: getContent(locale) }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/** Langue courante + fonction pour en changer. */
export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale doit être utilisé dans <LocaleProvider>.')
  return context
}

/** Raccourci : contenu de la langue courante ({ site, biobank, tripeasy, skills }). */
export function useContent() {
  return useLocale().content
}
