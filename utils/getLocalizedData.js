export function getLanguageSpecificData(data, lang = 'en') {
  if (!data) return data;

  const normalizedLang = normalizeLangCode(lang);

  if (Array.isArray(data)) {
    return data.map(item => getLanguageSpecificData(item, normalizedLang));
  }

  if (typeof data !== 'object' || data === null) return data;

  const keys = Object.keys(data);
  const langRegex = /_(en|de_ch|fr_ch|it_ch)$/;
  const hasLangFields = keys.some(k => langRegex.test(k));

  // If object has no language fields, still process nested objects recursively
  if (!hasLangFields) {
    const result = {};
    for (const [k, v] of Object.entries(data)) {
      result[k] = processValue(v, normalizedLang);
    }
    return result;
  }

  const result = {};
  const baseFields = new Set(
    keys.map(k => k.match(/^(.+?)_(en|de_ch|fr_ch|it_ch)$/)?.[1]).filter(Boolean)
  );

  for (const [key, value] of Object.entries(data)) {
    const match = key.match(/^(.+?)_(en|de_ch|fr_ch|it_ch)$/);

    if (match) {
      const base = match[1];
      if (result[base]) continue;

      const targetKey = `${base}_${normalizedLang}`;
      const localized = data[targetKey];
      const fallback = data[`${base}_en`];
      const val = (localized && localized !== '') ? localized : fallback;

      if (val != null && val !== '') result[base] = processValue(val, normalizedLang);
    } else if (!baseFields.has(key)) {
      result[key] = processValue(value, normalizedLang);
    }
  }

  return result;
}

function normalizeLangCode(lang = 'en') {
  const map = {
    en: 'en',
    de: 'de_ch', dech: 'de_ch', de_ch: 'de_ch',
    fr: 'fr_ch', frch: 'fr_ch', fr_ch: 'fr_ch',
    it: 'it_ch', itch: 'it_ch', it_ch: 'it_ch'
  };
  return map[lang.toLowerCase().trim()] || 'en';
}

function processValue(value, lang) {
  if (Array.isArray(value)) return value.map(v => processValue(v, lang));
  if (typeof value === 'object' && value !== null) return getLanguageSpecificData(value, lang);
  return value;
}

export function getLangFromURL() {
  if (typeof window === 'undefined') return 'en';
  return new URLSearchParams(window.location.search).get('lang') || 'en';
}

export const getLocalizedDataFromURL = data => getLanguageSpecificData(data, getLangFromURL());
