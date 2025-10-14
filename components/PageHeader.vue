<template>
    <section class="page-hero">
        <div class="container">
            <div v-if="updatedDate">
                <div class="update-badge">
                    Updated {{ formattedDate }}
                </div>
            </div>
            <h1 class="hero-title">
                {{ title }}
            </h1>
            <p class="hero-subtext">
                {{ subtitle }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Our commitment to protecting your privacy'
    },
    updatedDate: {
        type: String,
        required: false,
    },
    subtitle: {
        type: String,
        default: "We're committed to protecting your privacy and ensuring your data is secure."
    }
})

const formattedDate = computed(() => props.updatedDate)
</script>

<style scoped>
.page-hero {
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #1b23360f);
    padding: 4rem 2rem;
}

.container {
    max-width: 1200px;
    width: 100%;
    text-align: center;
}

.update-badge {
    display: inline-block;
    padding: 0.625rem 1.5rem;
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
    line-height: 4.5rem;
    font-size: 60px;
    font-weight: 600;
    color: #111827;
    margin: 0;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.hero-subtext {
    margin-top: 1rem;
    color: #10182899;
    font-size: 1.1rem;
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