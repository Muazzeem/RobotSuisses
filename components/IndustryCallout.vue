<template>
    <section class="industry-callout">
        <div class="callout-card"
            :style="{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${ImageUrl}') center / cover`
            }"
        >
            <div class="overlay"></div>
            <!-- <div class="content">
                <h2 class="title">
                    {{ data.title_en }}
                </h2>
                <p class="description">
                    {{ data?.subtitle }}
                </p>
                <a :href="props?.data?.button_link" class="cta-button">
                  {{ data?.button_text }}
                  <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
            </div> -->
        </div>
    </section>
</template>

<script setup>
import { computed, watch } from 'vue'
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const config = useRuntimeConfig()
const HOST = config.public.HOST
const ImageUrl = computed(() => {
    return HOST + props.data.bg_image.original.src
})
</script>


<style scoped>
.callout-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 4rem 2rem;
    max-width: 800px;
}

.title {
    font-size: 48px;
    font-weight: 500;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 60px;
    letter-spacing: -0.02em;
}

.description {
    max-width: 500px;
    font-size: 1.125rem;
    color: #b2b2b2;
    line-height: 1.7;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #FF0000;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 300;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.cta-button:hover {
    background: #FF0000;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.arrow {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
    transform: translateX(4px);
}

@media (max-width: 768px) {
    .industry-callout {
        padding: 4rem 0;
    }
    .callout-card {
        min-height: 300px;
        border-radius: 16px;
    }
    .content {
        padding: 3rem 1.5rem;
    }
    .title {
        font-size: 2rem;
    }
    .description {
        font-size: 1rem;
    }
    .description br {
        display: none;
    }
    .cta-button {
        padding: 0.875rem 1rem;
        font-size: .9rem;
    }
}
</style>
