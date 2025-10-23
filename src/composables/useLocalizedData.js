import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { getLanguageSpecificData } from '@/utils/getLocalizedData';

export function useLocalizedData(data) {
  const { locale } = useI18n();

  const localizedData = computed(() => {
    if (!data.value) return null;
    return getLanguageSpecificData(data.value, locale.value);
  });

  return {
    localizedData,
    currentLocale: locale
  };
}

export function useLocalizedProp(propData) {
  const { locale } = useI18n();

  const localizedData = computed(() => {
    if (!propData) return null;
    return getLanguageSpecificData(propData, locale.value);
  });

  return {
    localizedData,
    currentLocale: locale
  };
}