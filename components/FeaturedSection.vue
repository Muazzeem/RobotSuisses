<template>
  <section class="featured">
    <div class="products-grid">
      <div v-if="localizedData && localizedData.length">
        <RobotProductCard 
          v-for="(product, index) in localizedData"
          :key="product.id || index"
          :product="product"
          @open-modal="openModal"
        />
      </div>
      <div v-else-if="pending" class="loading">
        Loading products...
      </div>
      <div v-else-if="error" class="error">
        Failed to load products. Please try again later.
      </div>
    </div>

    <RobotDetailsModal
      :is-open="isModalOpen"
      :robot="selectedRobot"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useLocalizedProp } from '@/src/composables/useLocalizedData';

const config = useRuntimeConfig();
const HOST = config.public.HOST || '';

const isModalOpen = ref(false);
const selectedRobot = ref(null);
const data = ref([]);
const API_URL = `${HOST}/api/v2/pages/?type=home.RobotDetailsPage&fields=title_en,title_de_ch,title_fr_ch,title_it_ch,short_description_en,short_description_de_ch,short_description_fr_ch,short_description_it_ch,thumbnail,author,tags_en,tags_de_ch,tags_fr_ch,tags_it_ch,fetch_parent,last_published_at,body,is_featured,slug`;

// useFetch - Nuxt composable (top-level await allowed in <script setup> for Nuxt)
const { data: fetched, pending, error, refresh } = await useFetch(API_URL, {
  key: 'robot-products',
  lazy: false,
  server: true,
  transform: (response) => {
    data.value = response.items ?? [];
  }
});

const { localizedData } = useLocalizedProp(data.value);

// open/close handlers
const openModal = (product) => {
  selectedRobot.value = product;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedRobot.value = null;
};
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

.loading,
.error {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.1rem;
}

.error {
  color: #ef4444;
}

.loading {
  color: #6b7280;
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
    gap: 1.5rem;
  }
}
</style>
