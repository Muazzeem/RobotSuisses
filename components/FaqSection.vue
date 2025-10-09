<template>
  <section class="faq-section">
    <div class="container">
      <div class="badge">Category</div>
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-description">
        Find answers to common questions about our robotics platform and services.
      </p>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
        >
          <button
            class="faq-question"
            @click="toggleFaq(index)"
            :aria-expanded="activeIndex === index"
          >
            <span>{{ item.question }}</span>
            <span class="icon">{{ activeIndex === index ? '×' : '+' }}</span>
          </button>
          <div class="faq-answer" v-show="activeIndex === index">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const faqItems = ref([
  {
    question: 'How do I place an order for a robot?',
    answer: 'You can place an order through our platform by browsing our robot catalog, selecting your desired model, and following the checkout process. Our AI assistant can also help guide you to the perfect robot for your needs. For enterprise orders, we recommend scheduling a consultation with our experts.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and offer flexible financing options for enterprise customers. Payment plans can be customized based on your business needs and order size.'
  },
  {
    question: 'Is installation included with my robot purchase?',
    answer: 'Yes, professional installation is included with all robot purchases. Our certified technicians will handle the complete setup, integration with your existing systems, and ensure everything is running smoothly before completion.'
  },
  {
    question: 'What kind of training do you provide?',
    answer: 'We provide comprehensive training programs tailored to your team\'s needs. This includes on-site training, online resources, documentation, and ongoing support. Training covers operation, maintenance, safety protocols, and optimization techniques.'
  },
  {
    question: 'What are the minimum rental periods?',
    answer: 'Our minimum rental period is typically 3 months, but we offer flexible arrangements depending on your specific project requirements. Short-term rentals may be available for special circumstances or pilot programs.'
  },
  {
    question: 'What if the robot doesn\'t meet my expectations?',
    answer: 'We offer a 30-day satisfaction guarantee. If the robot doesn\'t meet your expectations, we\'ll work with you to find a better solution or provide a full refund. Our goal is to ensure you have the right robotic solution for your needs.'
  },
  {
    question: 'Do you provide performance analytics?',
    answer: 'Yes, all our robots come with built-in performance monitoring and analytics. You\'ll receive detailed reports on productivity, efficiency, maintenance needs, and ROI metrics through our cloud-based dashboard.'
  }
]);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.faq-section {
  padding: 80px 24px;
  background-color: #fafafa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.badge {
  display: inline-block;
  padding: 8px 16px;
  background-color: #ffe5e5;
  color: #d32f2f;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}

.section-title {
  font-size: 48px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
  line-height: 1.2;
  text-align: center;
}

.section-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 48px;
  line-height: 1.5;
  text-align: center;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.faq-question:hover {
  background-color: #f9f9f9;
}

.faq-question .icon {
  font-size: 32px;
  font-weight: 300;
  color: #666;
  transition: transform 0.3s ease;
  line-height: 1;
  margin-left: 16px;
  flex-shrink: 0;
}

.faq-item.active .faq-question .icon {
  transform: rotate(0deg);
}

.faq-answer {
  padding: 0 32px 24px 32px;
  animation: slideDown 0.3s ease;
}

.faq-answer p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .faq-section {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-description {
    font-size: 16px;
  }

  .faq-question {
    padding: 20px 24px;
    font-size: 16px;
  }

  .faq-answer {
    padding: 0 24px 20px 24px;
  }

  .faq-answer p {
    font-size: 15px;
  }
}
</style>
