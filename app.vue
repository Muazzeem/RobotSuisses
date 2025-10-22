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
			console.log('locale changed to', newLocale)
		},
		{ immediate: true }
	);
});

</script>