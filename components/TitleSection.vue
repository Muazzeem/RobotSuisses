<template>
  <section class="why-choose" :style="{ background: props.data.bg_color_code }">
    <div class="container">
      <div class="section-header">
        <div class="category-tag">{{ localizedData.tag }}</div>
        <div class="richtext" v-html="localizedData.title"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalizedProp } from '@/src/composables/useLocalizedData';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const { localizedData } = useLocalizedProp(props.data);
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

:deep(.richtext h2){
  font-size: 48px;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

:deep(.richtext p){
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
