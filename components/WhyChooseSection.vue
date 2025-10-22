<template>
  <section class="why-choose">
    <div class="container">
      <div class="features-grid">
        <div
          class="feature-card"
          v-for="(item, index) in data.items"
          :key="index"
        >
          <div class="icon-wrapper bg-red">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
          </div>
          <div class="richtext" v-html="item.description_en"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.why-choose {
  background: white;
  padding-bottom: 3rem;
}

.container {
  padding-top: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 28px;
  height: 28px;
  color: white;
}

:deep(.richtext h3){
  font-size: 24px !important;
  line-height: 32px !important;
  font-weight: 500 !important;
  letter-spacing: -2% !important;
}

:deep(.richtext p) {
  margin-top: 0.7rem !important;
  margin-bottom: 0.75rem !important;
  font-size: 16px !important;
  color: #10182899 !important;
}
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .why-choose {
    padding: 0px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
