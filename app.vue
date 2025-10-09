<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <HeroSection />
    <WhyChooseSection />
    <CategoriesSection />
    <FeaturedSection />
    <BlogSection />
    <IndustryCallout />
    <FaqSection />
    <ContactSection />
    <Footer />
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #1a1a1a;
  line-height: 1.6;
}
</style>
