
/**
 * Extracts language-specific data from a multi-language object
 * @param {Object} data - The data object with language-specific fields
 * @param {string} lang - Language code (e.g., 'en', 'de_ch', 'fr_ch', 'it_ch')
 * @returns {Object} - Object with only the requested language data
 */
function getLanguageSpecificData(data, lang) {
  // Normalize language code to match field naming convention
  const langSuffix = lang === 'en' ? 'en' : lang.replace('-', '_');
  
  // Helper function to process a single object
  function processObject(obj) {
    const result = {};
    
    for (const key in obj) {
      // Skip if not own property
      if (!obj.hasOwnProperty(key)) continue;
      
      // Check if this is a language-specific field
      if (key.includes('_')) {
        const [fieldName, fieldLang] = key.split('_', 2);
        const fullLang = key.substring(fieldName.length + 1);
        
        // If it matches our target language, add it without suffix
        if (fullLang === langSuffix) {
          result[fieldName] = obj[key];
        }
      } 
      // Handle fields without language suffix (like 'title_en')
      else if (key.endsWith('_en') && langSuffix === 'en') {
        const fieldName = key.substring(0, key.length - 3);
        result[fieldName] = obj[key];
      }
      // Check for exact match pattern (field_lang)
      else if (key === `${key.split('_')[0]}_${langSuffix}`) {
        const fieldName = key.substring(0, key.lastIndexOf('_'));
        result[fieldName] = obj[key];
      }
      // For non-language-specific fields, keep as is
      else if (!key.match(/_(en|de_ch|fr_ch|it_ch)$/)) {
        result[key] = obj[key];
      }
    }
    
    return result;
  }
  
  // Helper to extract language fields properly
  function extractLanguageFields(obj, targetLang) {
    const result = {};
    const processed = new Set();
    
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      
      // Extract base field name and language
      const match = key.match(/^(.+)_(en|de_ch|fr_ch|it_ch)$/);
      
      if (match) {
        const [, baseName, lang] = match;
        
        if (!processed.has(baseName)) {
          processed.add(baseName);
          
          // Get value for target language
          const langKey = `${baseName}_${targetLang}`;
          if (obj[langKey] !== undefined && obj[langKey] !== '') {
            result[baseName] = obj[langKey];
          }
        }
      } else {
        // Non-language-specific field
        if (Array.isArray(obj[key])) {
          result[key] = obj[key].map(item => 
            typeof item === 'object' && item !== null 
              ? extractLanguageFields(item, targetLang) 
              : item
          );
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          result[key] = extractLanguageFields(obj[key], targetLang);
        } else {
          result[key] = obj[key];
        }
      }
    }
    
    return result;
  }
  
  return extractLanguageFields(data, langSuffix);
}

// Example usage with URL parameter
function getDataFromURL(data) {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en';
  return getLanguageSpecificData(data, lang);
}
