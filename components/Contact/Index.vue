<template>
    <!-- Contact Sections -->
        <section class="contact-section">
            <div class="container">                
                <!-- Bottom Contact Info -->
                <div class="grid info-grid">
                    <div class="info-card">
                        <div class="info-icon phone">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <p class="info-title">Mobile Number</p>
                        <p>+44 333 090 9307</p>
                    </div>

                    <div class="info-card">
                        <div class="info-icon email">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <p class="info-title">Email Address</p>
                        <p>support@digikeyboard.com</p>
                    </div>

                    <div class="info-card">
                        <div class="info-icon map">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p class="info-title">Office Address</p>
                        <p>1145 Budapest, Mexikói út 65/B. fszt. 2.</p>
                    </div>
                </div>

            </div>
        </section>
        <section>
            <div class="container">
                <ContactSection />
            </div>
        </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Have Questions? Let’s Talk'
    },
    updatedDate: {
        type: String,
        default: 'March 12, 2024'
    }
})

const formattedDate = computed(() => props.updatedDate)
</script>

<style scoped>
.contact-section {
    padding: 4rem 2rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    background: #f9fafb;
    border-radius: 16px;
    padding: 2rem;
}

.info-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
}

.info-icon {
    background: #ffecec;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #ff0000;
    font-size: 1.2rem;
}

.info-title {
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
}

.info-card p {
    color: #6b7280;
    font-size: 0.95rem;
}
</style>
