<template>
  <section class="featured">
      <!-- Header -->
      <div class="header">
        <span class="category-tag">Industries</span>
        <h1 class="section-title">Robot Use Cases & Industries</h1>
        <p class="section-description">
          Discover how robots are transforming industries across Switzerland with innovative automation solutions.
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="industry in industries"
          :key="industry.id"
          @click="activeTab = industry.id"
          :class="['tab-button', { active: activeTab === industry.id }]"
        >
          {{ industry.name }}
        </button>
      </div>

      <!-- Content -->
      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <div class="icon-wrapper">
            <component :is="currentIcon" class="icon" />
          </div>

          <div class="text-content">
            <h2 class="content-title">{{ activeContent.title }}</h2>
            <p class="content-description">{{ activeContent.description }}</p>
          </div>

          <ul class="features-list">
            <li v-for="(feature, index) in activeContent.features" :key="index" class="feature-item">
              <span class="feature-dot"></span>
              <span class="feature-text">{{ feature }}</span>
            </li>
          </ul>

          <button class="contact-button">Contact Us</button>
        </div>

        <!-- Right Column - Image -->
        <div class="right-column">
          <div class="image-container">
            <img :src="activeContent.image" :alt="activeContent.title" class="content-image" />
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('manufacturing')

const industries = [
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'logistics', name: 'Logistics' },
  { id: 'retail', name: 'Retail' },
  { id: 'smart-homes', name: 'Smart Homes' }
]

const content = {
  manufacturing: {
    title: 'Manufacturing',
    description: 'Cut speeding violations by up to 90% with our cutting-edge AI-powered detection system, designed to keep roads safer and drivers more accountable',
    features: [
      'Monitor Speeds in Real Time and Receive Instant Alerts',
      'Extensive Camera Location Database',
      'Driver Behavior Analysis and Coaching: Optimizing Performance and Safety on the Road'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
    icon: 'factory'
  },
  healthcare: {
    title: 'Healthcare',
    description: 'Revolutionize patient care with robotic assistance for surgical precision, medication delivery, and patient monitoring systems',
    features: [
      'Automated Surgical Assistance with 99.9% Accuracy',
      'Smart Medication Dispensing and Tracking',
      '24/7 Patient Vital Signs Monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    icon: 'heart'
  },
  hospitality: {
    title: 'Hospitality',
    description: 'Enhance guest experiences with automated room service, concierge assistance, and intelligent facility management',
    features: [
      'Automated Food and Beverage Delivery',
      'Smart Room Customization and Controls',
      'Multilingual Guest Assistance 24/7'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    icon: 'hotel'
  },
  logistics: {
    title: 'Logistics',
    description: 'Streamline warehouse operations with autonomous sorting, inventory management, and efficient package handling',
    features: [
      'Automated Warehouse Navigation and Sorting',
      'Real-time Inventory Tracking and Analytics',
      'Optimized Route Planning for Last-Mile Delivery'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    icon: 'truck'
  },
  retail: {
    title: 'Retail',
    description: 'Transform shopping experiences with intelligent inventory robots, checkout automation, and personalized customer service',
    features: [
      'Automated Shelf Scanning and Restocking',
      'Self-Checkout and Payment Processing',
      'Customer Navigation and Product Recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    icon: 'shopping-bag'
  },
  'smart-homes': {
    title: 'Smart Homes',
    description: 'Create intelligent living spaces with automated cleaning, security monitoring, and energy management systems',
    features: [
      'Automated Cleaning and Maintenance Scheduling',
      'Integrated Security and Surveillance Systems',
      'Smart Energy Optimization and Climate Control'
    ],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
    icon: 'home'
  }
}

const activeContent = computed(() => content[activeTab.value])

const currentIcon = computed(() => {
  const iconMap = {
    'factory': FactoryIcon,
    'heart': HeartIcon,
    'hotel': HotelIcon,
    'truck': TruckIcon,
    'shopping-bag': ShoppingBagIcon,
    'home': HomeIcon
  }
  return iconMap[activeContent.value.icon]
})

// Simple SVG Icon Components
const FactoryIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`
}

const HeartIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`
}

const HotelIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" /></svg>`
}

const TruckIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`
}

const ShoppingBagIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>`
}

const HomeIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 3rem;
}
/* Tabs Styles */
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 4rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  color: #6b7280;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.tab-button:hover {
  background-color: #f9fafb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tab-button.active {
  background-color: #ef4444;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: #ef4444;
  border-radius: 1rem;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: white;
}

.text-content {
  margin-bottom: 1rem;
}

.content-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.content-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
}

/* Features List */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.feature-dot {
  flex-shrink: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ef4444;
  border-radius: 50%;
  margin-top: 0.5rem;
}

.feature-text {
  color: #374151;
  line-height: 1.6;
}

/* Contact Button */
.contact-button {
  padding: 0.75rem 2rem;
  border: 1px solid #ef4444;
  background-color: transparent;
  color: #ef4444;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.contact-button:hover {
  background-color: #ef4444;
  color: white;
}

/* Right Column - Image */
.right-column {
  position: relative;
}

.image-container {
  aspect-ratio: 4 / 3;
  border-radius: 1.5rem;
  overflow: hidden;
}

.content-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .content-title {
    font-size: 1.875rem;
  }

  .tabs {
    flex-direction: column;
    align-items: stretch;
  }

  .tab-button {
    width: 100%;
  }
}
</style>