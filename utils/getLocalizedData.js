/**
 * Extracts language-specific data from a multi-language object
 * @param {Object|Array} data - The data object/array with language-specific fields
 * @param {string} lang - Language code (e.g., 'en', 'de_ch', 'fr_ch', 'it_ch')
 * @returns {Object|Array} - Object/Array with only the requested language data
 */
export function getLanguageSpecificData(data, lang = 'en') {
  if (!data) return data;
  
  // Normalize language code (e.g., 'itch' -> 'it_ch')
  const normalizedLang = normalizeLangCode(lang);
  
  // Handle arrays
  if (Array.isArray(data)) {
    return data.map(item => getLanguageSpecificData(item, normalizedLang));
  }
  
  // Handle non-objects
  if (typeof data !== 'object') {
    return data;
  }
  
  const result = {};
  const processedFields = new Set();
  
  // First pass: identify all base field names
  for (const key in data) {
    if (!data.hasOwnProperty(key)) continue;
    
    const match = key.match(/^(.+)_(en|de_ch|fr_ch|it_ch)$/);
    
    if (match) {
      const baseName = match[1];
      processedFields.add(baseName);
    }
  }
  
  // Second pass: extract language-specific values
  for (const key in data) {
    if (!data.hasOwnProperty(key)) continue;
    
    const match = key.match(/^(.+)_(en|de_ch|fr_ch|it_ch)$/);
    
    if (match) {
      const baseName = match[1];
      const targetKey = `${baseName}_${normalizedLang}`;
      
      // Only process once per base name
      if (data.hasOwnProperty(targetKey) && !result.hasOwnProperty(baseName)) {
        const value = data[targetKey];
        
        // Use the value if it's not empty, otherwise fallback to English
        if (value !== null && value !== undefined && value !== '') {
          result[baseName] = processValue(value, normalizedLang);
        } else if (normalizedLang !== 'en') {
          // Fallback to English if target language is empty
          const fallbackKey = `${baseName}_en`;
          if (data[fallbackKey]) {
            result[baseName] = processValue(data[fallbackKey], normalizedLang);
          }
        }
      }
    } else {
      // Non-language-specific fields (like 'id', 'image', etc.)
      if (!processedFields.has(key)) {
        result[key] = processValue(data[key], normalizedLang);
      }
    }
  }
  
  return result;
}

/**
 * Normalize language code to match backend format
 * @param {string} lang - Language code
 * @returns {string} - Normalized language code
 */
function normalizeLangCode(lang) {
  if (!lang) return 'en';
  
  const normalized = lang.toLowerCase().trim();
  
  // Map common variations
  const langMap = {
    'en': 'en',
    'de': 'de_ch',
    'de_ch': 'de_ch',
    'dech': 'de_ch',
    'fr': 'fr_ch',
    'fr_ch': 'fr_ch',
    'frch': 'fr_ch',
    'it': 'it_ch',
    'it_ch': 'it_ch',
    'itch': 'it_ch'
  };
  
  return langMap[normalized] || 'en';
}

/**
 * Process a value recursively
 * @param {*} value - The value to process
 * @param {string} lang - Language code
 * @returns {*} - Processed value
 */
function processValue(value, lang) {
  if (Array.isArray(value)) {
    return value.map(item => 
      typeof item === 'object' && item !== null 
        ? getLanguageSpecificData(item, lang)
        : item
    );
  } else if (typeof value === 'object' && value !== null) {
    return getLanguageSpecificData(value, lang);
  }
  return value;
}

/**
 * Get language from URL parameter
 * @returns {string} - Language code from URL or default 'en'
 */
export function getLangFromURL() {
  if (typeof window === 'undefined') return 'en';
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('lang') || 'en';
}

/**
 * Get localized data based on URL parameter
 * @param {Object|Array} data - The data to localize
 * @returns {Object|Array} - Localized data
 */
export function getLocalizedDataFromURL(data) {
  const lang = getLangFromURL();
  return getLanguageSpecificData(data, lang);
}