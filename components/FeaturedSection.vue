<template>
  <section class="featured">
    <div class="section-header">
      <div class="category-tag">Robots</div>
      <h2 class="section-title">Featured Robots</h2>
      <p class="section-description">
        Discover our most popular robotic solutions, engineered for<br />
        excellence and performance
      </p>
    </div>

    <div class="products-grid">
      <RobotProductCard 
        v-for="product in products" 
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

const products = [
  {
    id: 1,
    name: 'SwissBot Pro X1',
    price: 2499,
    category: 'Industrial',
    batteryLife: '<120 minutes',
    coverage: '200m',
    noiseLevel: '<55dB',
    dimensions: '840 × 600 × 490 mm',
    airFiltration: 'H11 (optional H13)',
    vacuumingWidth: '55 cm',
    sweepingWidth: '(27.6 in, with side brush)',
    pathClearance: 'Min width: 75 cm (29.53 in)',
    runtime: '3–6.5 h',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Home Helper Alpine',
    price: 2499,
    category: 'Domestic',
    batteryLife: '<120 minutes',
    coverage: '200m',
    noiseLevel: '<55dB',
    dimensions: '840 × 600 × 490 mm',
    airFiltration: 'H11 (optional H13)',
    vacuumingWidth: '55 cm',
    sweepingWidth: '(27.6 in, with side brush)',
    pathClearance: 'Min width: 75 cm (29.53 in)',
    runtime: '3–6.5 h',
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Clean Max Hospital',
    price: 2499,
    category: 'Medical',
    batteryLife: '<150 minutes',
    coverage: '200m',
    noiseLevel: '<55dB',
    dimensions: '840 × 600 × 490 mm',
    airFiltration: 'H11 (optional H13)',
    vacuumingWidth: '55 cm',
    sweepingWidth: '(27.6 in, with side brush)',
    pathClearance: 'Min width: 75 cm (29.53 in)',
    runtime: '3–6.5 h',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Clean Max Hospital',
    price: 2499,
    category: 'Medical',
    batteryLife: '<150 minutes',
    coverage: '200m',
    noiseLevel: '<55dB',
    dimensions: '840 × 600 × 490 mm',
    airFiltration: 'H11 (optional H13)',
    vacuumingWidth: '55 cm',
    sweepingWidth: '(27.6 in, with side brush)',
    pathClearance: 'Min width: 75 cm (29.53 in)',
    runtime: '3–6.5 h',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

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

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

  .section-description br {
    display: none;
  }
}
</style>
