<template>
  <section class="why-choose" :style="{ background: props.data.bg_color_code }">
    <div class="container">
      <div class="section-header">
        <!-- <div class="category-tag">{{ localizedContent.tag }}</div>
        <h2 class="section-title">{{ localizedContent.title }}</h2>
        <p class="section-description">{{ localizedContent.subtitle }}</p> -->
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
  padding-top: 3rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
}

.section-title {
  font-size: 48px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-description {
  max-width: 500px;
  font-size: 16px;
  color: #10182899;
  line-height: 1.7;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .why-choose {
    padding: 4rem 0;
  }
  .section-title {
    font-size: 2rem;
  }

  .section-description br {
    display: none;
  }
  .section-description {
    max-width: 100%;
  }
}
</style>
