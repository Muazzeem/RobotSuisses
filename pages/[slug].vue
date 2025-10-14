<template>
    <Navbar />
    <PageHeader />
    <!-- <section class="page-hero">
        <div class="container">
            <div style="text-align: center;">
                <h1 class="hero-title">
                    {{ route.fullPath.split('/')[1] }}
                </h1>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="content">
                
            </div>
        </div>
    </section> -->
    <div v-if="route.fullPath.split('/')[1] === 'blog'">
        <BlogList />
    </div>
    <div v-if="route.fullPath.split('/')[1] === 'contact-us'">
        <Contact />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

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
    max-width: 1200px;
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