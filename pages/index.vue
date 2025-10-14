<template>
  <Header />
  <div>
    <div>
      <HeroSection />
    </div>
    <div class="container">
      <WhyChooseSection />
    </div>
    <div style="background: #f9fafb;">
      <div class="container">
        <CategoriesSection />
      </div>
    </div>
    <div class="container">
      <FeaturedSection />
    </div>
    <div style="background: #f9fafb;">
      <div class="container">
        <BlogSection />
      </div>
    </div>
    <AIChatAssistant />
    <div>
      <div class="container">
        <IndustryCallout />
      </div>
    </div>
    <div style="background-color: #fafafa;">
      <div class="container">
        <FaqSection />
      </div>
    </div>
    <div class="container">
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'RobotSuisse - Advanced Robotics for Every Industry',
  meta: [
    { name: 'description', content: 'Discover cutting-edge robotic solutions that transform manufacturing, healthcare, and service industries with Swiss precision and innovation.' }
  ]
})
</script>
