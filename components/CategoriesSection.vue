
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
        <div class="category-card home-robot">
          <div class="category-content">
            <div class="card-content">
              <h3 class="category-title">Home Robots</h3>
              <p class="category-description">
                Intelligent home automation and assistance robots for modern living
              </p>
            </div>
          </div>
        </div>

        <div class="category-card industrial-robot">
          <div class="category-content">
            <div class="card-content">
              <h3 class="category-title">Industrial Robots</h3>
              <p class="category-description">
                Heavy-duty manufacturing and assembly line automation solutions
              </p>
            </div>
          </div>
        </div>

        <div class="category-card service-robot">
          <div class="category-content">
            <div class="card-content">
              <h3 class="category-title">Service Robots</h3>
              <p class="category-description">
                Customer-facing robots for hospitality and retail environments
              </p>
            </div>
          </div>
        </div>

        <div class="category-card medical-robot">
          <div class="category-content">
            <div class="card-content">
              <h3 class="category-title">Medical Robots</h3>
              <p class="category-description">
                Precision healthcare robotics for surgical and therapeutic applications
              </p>
            </div>
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

.category-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef2f2;
  color: #ef4444;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.category-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #e5e7eb;
  height: 340px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.category-card:hover::before {
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
}

.home-robot {
  background-image: url('https://images.unsplash.com/photo-1561144257-e32e6e4c6db8?w=800&q=80');
}

.industrial-robot {
  background-image: url('https://images.unsplash.com/photo-1565611741341-b8c6d8b1b19c?w=800&q=80');
}

.service-robot {
  background-image: url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80');
}

.medical-robot {
  background-image: url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80');
}

.category-content {
  padding: .5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.card-content{
  padding: .5rem;
  background-color: white;
  border-radius: 10px;
}
.category-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.category-description {
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .categories {
    padding: 4rem 0;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>