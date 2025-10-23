<template>
    <section class="page-hero">
        <div class="hero-background"></div>
        <div class="hero-overlay"
            :style="{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageURL}) center/cover`
            }"
        ></div>
        <div class="container">
            <div>
                <div class="update-badge">
                   {{ localizedData.tag }}
                </div>
            </div>
            <h1 class="hero-title">
                {{ localizedData.hero_title }}
            </h1>
            <div class="hero-subtext" v-html="localizedData.hero_subtitle"></div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocalizedProp } from '@/src/composables/useLocalizedData';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const { localizedData } = useLocalizedProp(props.data);
const config = useRuntimeConfig()
const HOST = computed(() => {
	return config.public.HOST
})
const imageURL = computed(() => {
	return HOST.value + props.data?.image?.original?.src
})
</script>

<style scoped>
.page-hero {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7rem 2rem;
    position: relative;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.container {
    margin-top: 4rem;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 2;
}

.update-badge {
    display: inline-block;
    padding: 0.500rem 1.5rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 50px;
    color: #6b7280;
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.hero-title {
    text-transform: capitalize;
    line-height: 4.5rem;
    font-size: 60px;
    font-weight: 600;
    color: white;
    margin: 0;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.hero-subtext {
  max-width: 500px;
  margin-bottom: 0.75rem !important;
  font-size: 16px !important;
  color: #dfdfdf !important;
  margin: 0 auto;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .page-hero {
        padding: 3rem 2rem;
        min-height: 350px;
    }

    .hero-title {
        font-size: 2.75rem;
        line-height: 3.5rem;
    }
}

@media (max-width: 768px) {
    .page-hero {
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
        line-height: 2.5rem;
    }
}

@media (max-width: 480px) {
    .page-hero {
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
        line-height: 2.25rem;
    }
}
</style>

