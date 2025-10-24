import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { mapLocalizedData } from '@/utils/mapLocalizedData'

/**
 * Composable for reactive localized data
 * @param {Ref|Reactive} data - a ref or reactive object/array
 */
export function useLocalizedData(data) {
  const { locale } = useI18n()

  const localizedData = computed(() => {
    if (!data.value) return null
    // Use mapLocalizedData instead of getLanguageSpecificData
    return mapLocalizedData(data.value, locale.value)
  })

  return {
    localizedData,
    currentLocale: locale
  }
}

/**
 * Composable for localized props
 * @param {Object|Array} propData - prop passed from parent
 */
export function useLocalizedProp(propData) {
  const { locale } = useI18n()

  const localizedData = computed(() => {
    if (!propData) return null
    return mapLocalizedData(propData, locale.value)
  })

  return {
    localizedData,
    currentLocale: locale
  }
}
