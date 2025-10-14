<template>
  <section class="industry-callout">
    <div class="callout-card">
      <div class="overlay"></div>
      <div class="content">
        <h2 class="title">Don't See Your Industry?</h2>
        <p class="description">
          We work with businesses across all sectors. Let's discuss<br />
          your specific automation needs.
        </p>
        <a href="#contact" class="cta-button">
          Schedule Industry Consultation
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industry-callout {
  padding: 6rem 0;
}

.callout-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 4rem 2rem;
  max-width: 800px;
}

.title {
  font-size: 3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #ef4444;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.0625rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.cta-button:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .industry-callout {
    padding: 4rem 0;
  }

  .callout-card {
    min-height: 300px;
    border-radius: 16px;
  }

  .content {
    padding: 3rem 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .description br {
    display: none;
  }

  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
