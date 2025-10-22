<template>
    <Navbar />
    <PageHeader :pageData="data.currentPage" />
    <BlogList />
</template>

<script setup>
import { useRoute } from "#vue-router";
import { computed } from 'vue';

const nuxtApp = useNuxtApp();
const commonStore = useCommonPageStore();
const requestURL = useRequestURL();
const route = useRoute();

const config = useRuntimeConfig();
const HOST = computed(() => {
	return config.public.HOST;
});
const { data, error } = await useAsyncData("pageData2", async () => {
	let currentPage = null;

	await nuxtApp.runWithContext(async () => {
		await commonStore
			.fetchPage({ html_path: route.path })
			.then((d) => {
				currentPage = d;
			})
			.catch((e) => {
				console.log(e);
			});
	});

	return {
		currentPage,
	};
});

</script>