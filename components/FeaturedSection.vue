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
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" class="image" />
          <span class="product-badge">{{ product.category }}</span>
        </div>

        <div class="product-content">
          <h3 class="product-name">{{ product.name }}</h3>
          <div class="product-price">CHF {{ product.price.toLocaleString() }}</div>

          <div class="product-specs">
            <div class="spec-item">
              <span class="spec-label">Battery Life:</span>
              <span class="spec-value">{{ product.batteryLife }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Coverage:</span>
              <span class="spec-value">{{ product.coverage }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Noise Level:</span>
              <span class="spec-value">{{ product.noiseLevel }}</span>
            </div>
          </div>

          <div class="product-actions">
            <button class="btn-details" @click="openModal(product)">Details</button>
            <button class="btn-quote">Quote</button>
          </div>
        </div>
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

.product-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #1018281A;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.product-image {
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, #1a1a1a 0%, #4b5563 100%);
  position: relative;
  overflow: hidden;
}

.product-image .image {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  object-position: center;
}

.product-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  color: #1a1a1a;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #FF0000;
  border-color: #FF0000;
  font-weight: 600;
}

.product-content {
  padding: 1.75rem;
}

.product-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.product-specs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.spec-label {
  color: #6b7280;
}

.spec-value {
  color: #1a1a1a;
  font-weight: 500;
}

.product-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn-details,
.btn-quote {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-details {
  background: white;
  border: 1px solid #1018281A;
  color: #1a1a1a;
}

.btn-details:hover {
  background: #1a1a1a;
  color: white;
}

.btn-quote {
  background: #ef4444;
  color: white;
}

.btn-quote:hover {
  background: #dc2626;
  transform: translateY(-1px);
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
