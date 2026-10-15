/**
 * Point d'entrée du contenu multilingue.
 *
 * Pour ajouter l'anglais :
 *   import en from './en/index.js'
 *   const dictionaries = { fr, en }
 */
import fr from './fr/index.js'

const dictionaries = { fr }

export const DEFAULT_LOCALE = 'fr'
export const AVAILABLE_LOCALES = Object.keys(dictionaries)

/** Renvoie le contenu de la langue demandée (français par défaut). */
export function getContent(locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}
