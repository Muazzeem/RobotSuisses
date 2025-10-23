<template>
    <Header />
    <div v-if="data?.currentPage?.body">
        <div v-for="(item, idx) in data?.currentPage?.body" :key="'p_idx_' + idx">
			<div>
				<PageHeader v-if="item?.type == 'page_header'" :data="item?.value" />
			</div>
            <div>
                <TitleSection v-if="item?.type == 'title'" :data="item?.value" />
            </div>
            <div style="color: white;">
                <div class="container">
                    <IndustryCallout v-if="item?.type == 'cta'" :data="item?.value" />
                </div>
            </div>
            <div>
            	<Team v-if="item?.type == 'team_cards'" :data="item?.value" />
            </div>
            <div>
                <WhatDefinesUs v-if="item?.type=='banner_video'" :data="item?.value" />
            </div>
			<div>
				<Cards v-if="item?.type=='cards'" :data="item?.value" />
			</div>
			<div>
				<Spacer v-if="item?.type=='spacer'" :data="item?.value" />
			</div>
			<div>
				<QuoteCard v-if="item?.type=='quote'" :data="item?.value" />
			</div>
			<div>
				<StatsCard v-if="item?.type=='stats'" :data="item?.value" />
			</div>
			<div>
				<AboutHowItWorks v-if="item?.type=='working_process'" :data="item?.value" />
			</div>
			<div>
				<Richtext v-if="item?.type=='richtext'" :data="item?.value" />
			</div>
			<div>
				<ContactInfo v-if="item?.type=='contact'" :data="item?.value" />
			</div>
			<div class="container">
				<ContactSection v-if="item?.type=='description'" :data="item?.value" />
			</div>
        </div>
    </div>
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


const getTitle = computed(() => {
	return data?.value?.currentPage?.meta?.seo_title
		? data?.value?.currentPage?.meta?.seo_title
		: "";
});

const description = computed(() => {
	return data?.value?.currentPage?.meta?.search_description
		? data?.value?.currentPage?.meta?.search_description
		: "";
});

const keywords = computed(() => {
	return data?.value?.currentPage?.og_keywords
		? data?.value?.currentPage?.og_keywords
		: "";
});

const robotsDirective = computed(() => {
	return data?.value?.currentPage?.robots_directive
		? data?.value?.currentPage?.robots_directive
		: "";
});

const prepareOGImageUrl = computed(() => {
	return data?.value?.currentPage?.og_img_original
		? HOST.value + data?.value?.currentPage?.og_img_original?.original?.src
		: "";
});

const fullPath = computed(() => {
	return requestURL?.href;
});

useHead({
	title: getTitle?.value,
	meta: [
		{
			name: "robots",
			content: robotsDirective,
		},
		{
			name: "title",
			content: getTitle,
		},
		{
			name: "description",
			content: description,
		},
		{
			name: "Keywords",
			content: keywords,
		},
		{
			hid: "og:Keywords",
			name: "og:Keywords",
			content: keywords,
		},
		{
			hid: "og:title",
			property: "og:title",
			content: getTitle,
		},
		{
			hid: "og:description",
			property: "og:description",
			content: description,
		},
		{
			hid: "og:image",
			property: "og:image",
			content: prepareOGImageUrl,
		},
		{
			hid: "og:url",
			property: "og:url",
			content: fullPath,
		},
		{
			hid: "twitter:title",
			property: "twitter:title",
			content: getTitle,
		},
		{
			hid: "twitter:description",
			property: "twitter:description",
			content: description,
		},
		{
			hid: "twitter:image",
			property: "twitter:image",
			content: prepareOGImageUrl,
		},
		{
			hid: "twitter:url",
			property: "twitter:url",
			content: fullPath,
		},
	],
	link: [
		{
			rel: "canonical",
			href: fullPath,
		},
	],
});

</script>


<style scoped>
.page-hero {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #17191C14);
    padding: 4rem 2rem;
}

.container {
    width: 100%;
}

.hero-title {
    text-transform: capitalize;
    line-height: 4.5rem;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #111827;
    margin: 0;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}
.content{
    padding-top: 2rem;
    padding-bottom: 5rem;
}
/* Responsive Design */
@media (max-width: 1024px) {
    .privacy-hero {
        padding: 3rem 2rem;
        min-height: 350px;
    }

    .hero-title {
        font-size: 2.75rem;
    }
}

@media (max-width: 768px) {
    .privacy-hero {
        padding: 2.5rem 1.5rem;
        min-height: 300px;
    }

    .update-badge {
        padding: 0.5rem 1.25rem;
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
    }

    .hero-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .privacy-hero {
        padding: 2rem 1rem;
        min-height: 250px;
    }

    .update-badge {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        margin-bottom: 1.25rem;
    }

    .hero-title {
        font-size: 1.75rem;
    }
}
</style>