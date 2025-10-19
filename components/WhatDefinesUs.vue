<template>
  <section class="what-defines-section">
    <div class="container">
      <div class="section-header">
        <span class="category-tag">Why Choose</span>
        <h2 class="section-title">What Defines Us</h2>
        <p class="section-description">
          Switzerland's most trusted robotics platform, designed for<br />
          modern businesses and tech-forward homes.
        </p>
      </div>

      <div class="video-container">
        <img
          src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Robotics Innovation"
          class="video-thumbnail"
        />
        <button class="play-button" aria-label="Play video">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h3 class="feature-title">Global Platform</h3>
          <p class="feature-description">
            Expand to 50+ countries with localized solutions and support
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="feature-title">AI Integration</h3>
          <p class="feature-description">
            Advanced AI for autonomous decision-making and learning
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 class="feature-title">Household Robotics</h3>
          <p class="feature-description">
            Bring affordable robotic assistance to homes and families
          </p>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">120+</div>
          <p class="stat-label">Robonnement Robots are already working for clients</p>
        </div>

        <div class="stat-card">
          <div class="stat-number">€10M+</div>
          <p class="stat-label">In sales</p>
        </div>

        <div class="stat-card">
          <div class="stat-number">€120k+</div>
          <p class="stat-label">worth of the first robot was sold to initial owners in just 7 hours.</p>
        </div>

        <div class="stat-card">
          <div class="stat-number">20+</div>
          <p class="stat-label">Team Members</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.what-defines-section {
  padding: 4rem 0 6rem;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.video-container {
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 4rem;
  background: #e5e7eb;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.play-button svg {
  color: #ef4444;
  margin-left: 4px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  text-align: left;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: #f3f4f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #1a1a1a;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #6b7280;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #e5e7eb;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-number {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .what-defines-section {
    padding: 3rem 0 4rem;
  }

  .section-description br {
    display: none;
  }

  .video-container {
    height: 280px;
    margin-bottom: 3rem;
  }

  .play-button {
    width: 64px;
    height: 64px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .stats-grid {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }
  .feature-card {
    padding: 1rem;
  }
}
</style>
