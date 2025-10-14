<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Advanced Robotics for Every Industry
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
  max-width: 90%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-content {
  max-width: 100%;
}
.hero-title{
  width: 60%;
  color: white;
  font-size: 96px;
  line-height: 96px;
}
.hero-description{
  margin-top: 2rem;
  color: white;
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
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-bottom: 3rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .container {
    max-width: 100%;
    padding: 0 1rem;
  }
  .hero-title{
    width: 80%;
    font-size: 66px;
    line-height: 75px;
  }
}

@media (max-width: 480px) {
  .hero-title{
    width: 100%;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 1rem;
  } 
}
</style>