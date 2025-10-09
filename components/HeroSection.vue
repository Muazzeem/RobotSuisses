<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Advanced Robotics<br />for Every Industry
        </h1>
        <p class="hero-description">
          Discover cutting-edge robotic solutions that transform manufacturing,<br />
          healthcare, and service industries with swiss precision and innovation.
        </p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-value">50,000 driverless miles</div>
          </div>
          <div class="stat">
            <div class="stat-value">3.3 million+ commercial miles</div>
          </div>
          <div class="stat">
            <div class="stat-value">Nearly 100% on-time delivery</div>
          </div>
          <div class="stat">
            <div class="stat-value">as of Sept 9, 2025</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover;
  display: flex;
  align-items: flex-end;
  padding-bottom: 4rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  max-width: 900px;
}

.hero-title {
  font-size: 5rem;
  font-weight: 600;
  color: white;
  line-height: 1.15;
  margin-bottom: 1.75rem;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 0;
  font-weight: 300;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-bottom: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
}
</style>