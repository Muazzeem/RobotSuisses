/**
 * Map multilingual API data to a specific language
 * @param {Object|Array} data - API response item(s)
 * @param {String} lang - language code, e.g. 'de', 'frch', 'it_ch'
 * @returns {Object|Array} - localized data
 */
export function mapLocalizedData(data, lang = 'en') {
  if (!data) return data

  // Map input language codes to API suffix
  const langMap = {
    en: 'en',
    de: 'de_ch',
    dech: 'de_ch',
    de_ch: 'de_ch',
    fr: 'fr_ch',
    frch: 'fr_ch',
    fr_ch: 'fr_ch',
    it: 'it_ch',
    itch: 'it_ch',
    it_ch: 'it_ch'
  }
  const targetLang = langMap[lang.toLowerCase()] || 'en'

  // Handle array of items
  if (Array.isArray(data)) {
    return data.map(item => mapLocalizedData(item, lang))
  }

  // Handle objects
  if (typeof data === 'object' && data !== null) {
    const result = {}

    for (const key in data) {
      if (!data.hasOwnProperty(key)) continue

      // Match language-specific fields
      const match = key.match(/^(.+)_(en|de_ch|fr_ch|it_ch)$/)
      if (match) {
        const base = match[1]
        const localizedKey = `${base}_${targetLang}`
        const fallbackKey = `${base}_en`

        if (!result[base]) {
          result[base] = data[localizedKey] ?? data[fallbackKey] ?? null
        }
      } else if (typeof data[key] === 'object' && data[key] !== null) {
        result[key] = mapLocalizedData(data[key], lang)
      } else {
        result[key] = data[key]
      }
    }

    return result
  }

  // Return primitive value
  return data
}
