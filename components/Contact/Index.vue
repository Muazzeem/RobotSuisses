<template>
    <!-- Contact Sections -->
        <section class="contact-section">
            <div class="container">
                <!-- Top Boxes -->
                <div class="grid contact-grid">
                    <!-- Service Support -->
                    <div class="contact-card">
                        <div class="card-icon">
                            <!-- <img src="/icons/support.svg" alt="Service Support" /> -->
                        </div>
                        <h3>Service Support</h3>
                        <p>
                            Get help from the community. If you’re on a paid plan, submit a ticket to our support team.
                        </p>
                        <button class="btn-primary">Contact Us</button>
                    </div>

                    <!-- Sales Team -->
                    <div class="contact-card outline">
                        <div class="card-icon">
                            <!-- <img src="/icons/sales.svg" alt="Sales Team" /> -->
                        </div>
                        <h3>Talk to Our Sales Team</h3>
                        <p>
                            Get help from the community. If you’re on a paid plan, submit a ticket to our support team.
                        </p>
                        <button class="btn-outline">Contact Us</button>
                    </div>
                </div>

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

.contact-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    text-align: left;
}

.contact-card h3 {
    font-size: 1.5rem;
    color: #111827;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
}

.contact-card p {
    color: #6b7280;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

.card-icon {
    background: #f5f6f7;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.btn-primary {
    background: #FF0000;
    color: white;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary:hover {
    background: #FF0000;
}

.btn-outline {
    border: 1px solid #ff0000;
    color: #ff0000;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    background-color: white;
}

.btn-outline:hover {
    background: #ff0000;
    color: white;
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
