<template>
  <section class="what-defines-section">
    <div class="container">
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
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.what-defines-section {
  padding: 4rem 0 0rem;
  background: white;
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

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .what-defines-section {
    padding: 3rem 0 4rem;
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
  .feature-card {
    padding: 1rem;
  }
}
</style>
