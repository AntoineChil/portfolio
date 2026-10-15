/**
 * Met en police pixel les passages entre crochets d'un texte de contenu.
 *
 *   withPixelAccents('parmi [600 000] échantillons')
 *   → ['parmi ', <span class="pixel">600 000</span>, ' échantillons']
 *
 * Permet de garder les textes lisibles dans content/ tout en reproduisant
 * le mélange gras + pixel des visuels (« Construire des solutions web… »).
 */
export function withPixelAccents(text) {
  return text.split(/\[([^\]]+)\]/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="pixel">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

/** Version texte brut (sans crochets), pour les titres d'onglet, aria-label... */
export function stripPixelAccents(text) {
  return text.replace(/\[([^\]]+)\]/g, '$1')
}
