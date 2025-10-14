<template>
  <section class="blog">
    <div class="section-header">
      <div class="category-tag">Blog</div>
      <h2 class="section-title">See Our Latest Blog and News</h2>
      <p class="section-description">
        Find answers to common questions about our robotics<br />
        platform and services.
      </p>
    </div>

    <div class="blog-grid">
      <NuxtLink v-for="post in blogPosts" :key="post.id" :to="`/blog/${post.slug}`" class="blog-link">
        <BlogCard :image="post.image" :date="post.date" :title="post.title" :excerpt="post.excerpt" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    date: '26 Feb 2025',
    title: 'Small Business Guide: Getting Started with Robotic Automation',
    excerpt: 'A comprehensive guide for Swiss SMEs looking to implement their first robotic solutions without breaking the bank.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    date: '26 Feb 2025',
    title: 'Logistics Revolution: How Warehouse Robots Are Changing...',
    excerpt: 'Examining the impact of automated logistics solutions on Swiss supply chain efficiency and competitiveness.',
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    date: '26 Feb 2025',
    title: 'The Economics of Robot Rentals vs. Purchase: A Swiss Perspective',
    excerpt: 'Financial analysis comparing robot rental and purchase options for Swiss businesses, including tax implications and cash flow.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]
</script>

<style scoped>
.blog {
  padding: 6rem 0;
}
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0 4rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog {
    padding: 4rem 0;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
