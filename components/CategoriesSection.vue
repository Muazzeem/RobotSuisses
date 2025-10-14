<template>
  <section class="categories">
    <div class="container">
      <div class="section-header">
        <div class="category-tag">Category</div>
        <h2 class="section-title">Our Robot Categories</h2>
        <p class="section-description">
          From home assistance to complex industrial automation, we<br />
          offer robotic solutions for every need
        </p>
      </div>

      <div class="categories-grid">
        <div class="category-card">
          <div class="category-image"></div>
          <div class="category-content">
            <h3 class="category-title">Home Robots</h3>
            <p class="category-description">
              Intelligent home automation and assistance robots for modern living.
            </p>
          </div>
        </div>

        <div class="category-card">
          <div class="category-image"></div>
          <div class="category-content">
            <h3 class="category-title">Industrial Robots</h3>
            <p class="category-description">
              Heavy-duty manufacturing and assembly line automation solutions.
            </p>
          </div>
        </div>

        <div class="category-card">
          <div class="category-image"></div>
          <div class="category-content">
            <h3 class="category-title">Service Robots</h3>
            <p class="category-description">
              Customer-facing robots for hospitality and retail environments.
            </p>
          </div>
        </div>

        <div class="category-card">
          <div class="category-image"></div>
          <div class="category-content">
            <h3 class="category-title">Medical Robots</h3>
            <p class="category-description">
              Precision healthcare robotics for surgical and therapeutic applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 6rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #ef4444;
}

.category-image {
  height: 200px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  position: relative;
}

.category-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="none"/><path d="M20 50 L40 30 L60 50 L80 30" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/></svg>');
  opacity: 0.3;
}

.category-content {
  padding: 2rem;
  background: white;
}

.category-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.category-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
    @media (max-width: 768px) {
      .categories {
        padding: 4rem 0;
      }
  
      .categories-grid {
        grid-template-columns: 1fr;
      }
  }
}
</style>
