<template>
  <section class="why-choose">
    <div class="container">
      <div class="section-header">
        <div class="category-tag">Why Choose</div>
        <h2 class="section-title">Why Choose RobotSuisse?</h2>
        <p class="section-description">
          Switzerland's most trusted robotics platform, designed for<br />
          modern businesses and tech-forward homes.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
          </div>
          <h3 class="feature-title">Buy or Rent Robots with Ease</h3>
          <p class="feature-description">
            Flexible purchasing and rental options tailored to your business needs.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 class="feature-title">Swiss Quality and Global Technology</h3>
          <p class="feature-description">
            Combining Swiss precision with cutting-edge robotics from worldwide partners.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 class="feature-title">Maintenance, Training, and Support Included</h3>
          <p class="feature-description">
            Complete lifecycle support from installation to ongoing maintenance.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <h3 class="feature-title">Scalable Solutions for B2B and B2C</h3>
          <p class="feature-description">
            From single units to enterprise deployments, we scale with your needs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  padding: 6rem 0;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: #ef4444;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 28px;
  height: 28px;
  color: white;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.feature-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .why-choose {
    padding: 4rem 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description br {
    display: none;
  }
}
</style>
