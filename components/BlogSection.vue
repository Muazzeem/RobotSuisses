<template>
  <section class="blog">
    <div class="container">
      <div class="section-header">
        <div class="category-tag">Category</div>
        <h2 class="section-title">See Our Latest Blog and News</h2>
        <p class="section-description">
          Find answers to common questions about our robotics<br />
          platform and services.
        </p>
      </div>

      <div class="blog-grid">
        <article v-for="post in blogPosts" :key="post.id" class="blog-card">
          <div class="blog-image" :style="{ backgroundImage: `url(${post.image})` }"></div>
          <div class="blog-content">
            <div class="blog-date">{{ post.date }}</div>
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
          </div>
        </article>
      </div>
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
  background: #f9fafb;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.category-tag {
  display: inline-block;
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
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

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.blog-image {
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.blog-content {
  padding: 2rem;
}

.blog-date {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.blog-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-excerpt {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .blog {
    padding: 4rem 0;
  }

  .blog-grid {
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
