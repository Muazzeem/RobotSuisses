<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
const { locale, locales } = useI18n()

onMounted(() => {
	watch(
		locale,
		(newLocale) => {
			if (newLocale) {
				document.documentElement.lang = newLocale
			}
		},
		{ immediate: true }
	);
});

</script>