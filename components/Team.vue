<template>
  <div class="team-section">
    <div class="container">
      <div class="header">
        <h1 class="title">Meet the Experts Behind the Magic</h1>
        <p class="subtitle">
          Switzerland's most trusted robotics platform, designed for modern businesses and tech-forward homes.
        </p>
      </div>

      <div class="carousel-wrapper">
        <div class="carousel-container">
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(slide, slideIndex) in totalSlides" 
              :key="slideIndex"
              class="carousel-slide"
            >
              <div class="team-grid">
                <div
                  v-for="(member, index) in getSlideMembers(slideIndex)"
                  :key="index"
                  class="team-card"
                >
                  <div class="card-image">
                    <img :src="member.image" :alt="member.name" />
                  </div>
                  <div class="card-content">
                    <h3 class="member-name">{{ member.name }}</h3>
                    <p class="member-position">{{ member.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navigation">
          <button 
            @click="prevSlide" 
            class="nav-button"
            :disabled="currentSlide === 0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div class="dots">
            <button
              v-for="(slide, index) in totalSlides"
              :key="index"
              @click="goToSlide(index)"
              class="dot"
              :class="{ active: currentSlide === index }"
            ></button>
          </div>

          <button 
            @click="nextSlide" 
            class="nav-button"
            :disabled="currentSlide === totalSlides - 1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCarousel',
  data() {
    return {
      currentSlide: 0,
      itemsPerPage: 4,
      teamMembers: [
        {
          name: 'Zain Rhiel Madsen',
          position: 'CEO at RobotSuisse',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
        },
        {
          name: 'Leslie Alexander',
          position: 'CEO at RobotSuisse',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
        },
        {
          name: 'Robert Fox',
          position: 'CEO at RobotSuisse',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
        },
        {
          name: 'Brooklyn Simmons',
          position: 'CEO at RobotSuisse',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop'
        }
      ]
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.teamMembers.length / this.itemsPerPage);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    getSlideMembers(slideIndex) {
      const start = slideIndex * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.teamMembers.slice(start, end);
    }
  }
};
</script>

<style scoped>
.team-section {
  background-color: #FFFFFF;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
}

.container {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  color: #6b7280;
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto;
}

.carousel-wrapper {
  position: relative;
}

.carousel-container {
  overflow: hidden;
  padding: 0 1rem;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.team-card {
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.team-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #e5e7eb;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.member-position {
  color: #6b7280;
  font-size: 0.875rem;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.nav-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.nav-button:hover:not(:disabled) {
  background-color: #f9fafb;
  border-color: #d1d5db;
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d1d5db;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background-color: #ef4444;
  width: 24px;
  border-radius: 4px;
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .title {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>
