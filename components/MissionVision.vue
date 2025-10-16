<template>
  <section class="mission-vision-section">
    <div class="container">
      <div class="cards-grid">
        <div class="card">
          <div class="icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <h3 class="card-title">Our Mission</h3>
          <p class="card-description">
            To make robotics accessible, safe, and practical for businesses and individuals worldwide.
            We believe that advanced automation should not be limited to large corporations but available
            to SMEs and entrepreneurs who can benefit most from increased efficiency and safety.
          </p>
        </div>

        <div class="card">
          <div class="icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <h3 class="card-title">Our Vision</h3>
          <p class="card-description">
            A future where robotics transforms every industry, freeing humans from repetitive and
            dangerous work to focus on creative, strategic, and meaningful tasks. We envision a world
            where robot ownership is as common as owning a vehicle, with shared platforms enabling
            collaborative automation.
          </p>
        </div>
      </div>

      <div class="quote-card">
        <div class="quote-mark">"</div>
        <blockquote class="quote-text">
          The future of work isn't about humans versus robots—it's about humans empowered by robots.
          Our goal is to put that power in the hands of everyone, from Fortune 500 companies to
          family-owned businesses.
        </blockquote>
        <p class="quote-author">— Dr. Sarah Chen, Founder & CEO</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.mission-vision-section {
  padding: 6rem 0 3rem;
  background: white;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #ef4444;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  background: #fef2f2;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #ef4444;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #6b7280;
}

.quote-card {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border: 1px solid #fecaca;
  border-radius: 20px;
  padding: 3rem;
  position: relative;
}

.quote-mark {
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  font-size: 4rem;
  font-family: Georgia, serif;
  color: #ef4444;
  line-height: 1;
  opacity: 0.3;
}

.quote-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #1a1a1a;
  font-weight: 500;
  margin: 0 0 1rem 0;
  position: relative;
  z-index: 1;
}

.quote-author {
  font-size: 0.95rem;
  color: #6b7280;
  font-style: italic;
  margin: 0;
}

@media (max-width: 768px) {
  .mission-vision-section {
    padding: 4rem 0 2rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .card {
    padding: 2rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .quote-card {
    padding: 2rem;
  }

  .quote-mark {
    font-size: 3rem;
    top: 1.5rem;
    left: 1.5rem;
  }

  .quote-text {
    font-size: 1rem;
  }
}
</style>
