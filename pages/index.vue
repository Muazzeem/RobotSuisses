<template>
    <Header />
    <div v-if="pageData?.currentPage?.body">
        <div v-for="(item, idx) in pageData?.currentPage?.body" :key="'p_idx_' + idx">
            <div>
                <div>
                    <HeroSection v-if="item?.type == 'hero_title'" :data="item?.value" />
                </div>
                <div>
                    <TitleSection v-if="item?.type == 'title'" :data="item?.value" />
                </div>
    
                <div class="container">
                    <WhyChooseSection v-if="item?.type == 'why_chose'" :data="item?.value" />
                </div>
                <div style="background: #f9fafb;">
                    <div class="container">
                        <CategoriesSection v-if="item?.type == 'features'" :data="item?.value" />
                    </div>
                </div>
                <div class="container">
                    <FeaturedSection v-if="item?.type == 'robots'" :data="item?.value" />
                </div>
                <div>
                    <div class="container">
                        <FaqSection v-if="item?.type == 'faq'" :data="item?.value" />
                    </div>
                </div>
               <div style="background: #f9fafb;">
                    <div class="container">
                        <BlogSection v-if="item?.type == 'blogs'" :data="item?.value" />
                    </div>
                </div>

                <div style="color: white;">
                    <div class="container">
                        <IndustryCallout v-if="item?.type == 'cta'" :data="item?.value" />
                    </div>
                </div>

                <!--  <AIChatAssistant />
                <div class="container">
                    <RobotUseCases />
                </div>
                
                <div style="background-color: #fafafa;">
                    <div class="container">
                    </div>
                </div>
                <div class="container">
                    <ContactSection />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCommonPageStore } from '@/stores/common';
const commonStore = useCommonPageStore();
const nuxtApp = useNuxtApp();

const pageData = ref(null);
const error = ref(null);

useHead({
    title: 'RobotSuisse - Advanced Robotics for Every Industry',
    meta: [
        { name: 'description', content: 'Discover cutting-edge robotic solutions that transform manufacturing, healthcare, and service industries with Swiss precision and innovation.' }
    ]
})


try {
    const d = await nuxtApp.runWithContext(async () => {
        return await commonStore.fetchPage({ html_path: "/" });
    });
    pageData.value = { currentPage: d };
} catch (e) {
    console.error("Error fetching page data:", e);
    error.value = e;
}
</script>
