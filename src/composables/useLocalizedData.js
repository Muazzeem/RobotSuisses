import { computed } from "vue"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"

export function useLocalizedData(data) {
  const route = useRoute()
  const { locale } = useI18n()

  const getLocaleField = (obj, field, lang) => {
    const isDefault = lang === "en"
    const localizedField = isDefault ? field : `${field}_${lang}`
    return obj[localizedField] || obj[`${field}_en`] || obj[field] || ""
  }

  const localizeObject = (obj, lang) => {
    if (Array.isArray(obj)) {
      return obj.map((item) => localizeObject(item, lang))
    } else if (typeof obj === "object" && obj !== null) {
      const localized = {}
      for (const key in obj) {
        // Only process base fields once (skip language suffixes)
        if (!/_en$|_de_ch$|_fr_ch$|_it_ch$/.test(key)) {
          if (
            obj.hasOwnProperty(`${key}_${lang}`) ||
            obj.hasOwnProperty(`${key}_en`)
          ) {
            localized[key] = getLocaleField(obj, key, lang)
          } else {
            localized[key] = localizeObject(obj[key], lang)
          }
        }
      }
      return localized
    }
    return obj
  }

  const localized = computed(() => {
    if (!data || !data.value) return data
    const langFromUrl = route.query.lang?.toLowerCase() || locale.value
    return {
      ...data,
      value: localizeObject(data.value, langFromUrl),
    }
  })

  return localized
}
