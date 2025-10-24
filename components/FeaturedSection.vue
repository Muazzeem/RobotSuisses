<template>
  <section class="featured">
    <div class="products-grid">
      <RobotProductCard 
        v-for="product in localizedData" 
        :key="product.id" 
        :product="product"
        @open-modal="openModal"
      />
    </div>

    <RobotDetailsModal
      :is-open="isModalOpen"
      :robot="selectedRobot"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
const isModalOpen = ref(false)
const selectedRobot = ref(null)

import { ref } from 'vue'
import { useLocalizedData } from '@/src/composables/useLocalizedData'

const API_URL =
  'http://localhost:8000/api/v2/pages/?type=home.RobotDetailsPage&fields=title_en,title_de_ch,title_fr_ch,title_it_ch,short_description_en,short_description_de_ch,short_description_fr_ch,short_description_it_ch,thumbnail,author,tags_en,tags_de_ch,tags_fr_ch,tags_it_ch,fetch_parent,last_published_at,body,is_featured,slug'

const rawItems = ref([])

// Fetch blogs
const { data, pending, error } = await useFetch(API_URL, {
  key: 'robots',
  transform: (res) => {
    rawItems.value = res.items || []
    return rawItems.value
  }
})

const { localizedData } = useLocalizedData(rawItems)

const openModal = (product) => {
  selectedRobot.value = product
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.featured {
  padding: 6rem 0;
  background: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
  .featured {
    padding: 4rem 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
