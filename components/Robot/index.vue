<template>
  <div>
    <CategoryFilter v-model="selectedCategory" />
    <div class="result">
      <p>Selected Category: <strong>{{ selectedCategory }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryFilter from './CategoryFilter.vue'

const selectedCategory = ref('All Robots')
</script>

<style scoped>
.result {
  font-size: 1rem;
  color: #374151;
}
</style>
