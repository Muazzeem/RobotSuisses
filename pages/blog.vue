<template>
  <NuxtLayout name="blog">
    <div class="blog-page">
      <Navbar />

    <div class="container">
      <section class="hero-section">
        <NuxtLink to="/blog/small-business-guide" class="featured-post">
          <div class="featured-image">
            <img src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Featured post" />
          </div>
          <div class="featured-content">
            <time class="featured-date">26 Feb 2025</time>
            <h1 class="featured-title">Small Business Guide: Getting Started with Robotic Automation</h1>
            <p class="featured-excerpt">
              A comprehensive guide for Swiss SMEs looking to implement their first robotic solutions without breaking the bank.
            </p>
          </div>
        </NuxtLink>
      </section>

      <section class="blog-grid">
        <NuxtLink
          v-for="post in blogPosts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="blog-link"
        >
          <BlogCard
            :image="post.image"
            :date="post.date"
            :title="post.title"
            :excerpt="post.excerpt"
          />
        </NuxtLink>
      </section>

      <div class="load-more">
        <button class="load-more-btn">
          Load More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Blog - RobotSuisse',
  meta: [
    { name: 'description', content: 'Latest news and insights about robotics and automation from RobotSuisse' }
  ]
})

const blogPosts = ref([
  {
    id: 1,
    slug: 'small-business-guide',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Small Business Guide: Getting Started with Robotic Automation',
    excerpt: 'A comprehensive guide for Swiss SMEs looking to implement their first robotic solutions without breaking the bank.'
  },
  {
    id: 2,
    slug: 'logistics-revolution',
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Logistics Revolution: How Warehouse Robots Are Changing the Game',
    excerpt: 'Examining the impact of automated logistics solutions on Swiss supply chain efficiency and competitiveness.'
  },
  {
    id: 3,
    slug: 'robot-rentals-economics',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'The Economics of Robot Rentals vs. Purchase: A Swiss Perspective',
    excerpt: 'Financial analysis comparing robot rental and purchase options for Swiss businesses, including tax implications and cash flow.'
  },
  {
    id: 4,
    slug: 'small-business-guide',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Small Business Guide: Getting Started with Robotic Automation',
    excerpt: 'A comprehensive guide for Swiss SMEs looking to implement their first robotic solutions without breaking the bank.'
  },
  {
    id: 5,
    slug: 'logistics-revolution',
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Logistics Revolution: How Warehouse Robots Are Changing the Game',
    excerpt: 'Examining the impact of automated logistics solutions on Swiss supply chain efficiency and competitiveness.'
  },
  {
    id: 6,
    slug: 'robot-rentals-economics',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'The Economics of Robot Rentals vs. Purchase: A Swiss Perspective',
    excerpt: 'Financial analysis comparing robot rental and purchase options for Swiss businesses, including tax implications and cash flow.'
  },
  {
    id: 7,
    slug: 'small-business-guide',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Small Business Guide: Getting Started with Robotic Automation',
    excerpt: 'A comprehensive guide for Swiss SMEs looking to implement their first robotic solutions without breaking the bank.'
  },
  {
    id: 8,
    slug: 'logistics-revolution',
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'Logistics Revolution: How Warehouse Robots Are Changing the Game',
    excerpt: 'Examining the impact of automated logistics solutions on Swiss supply chain efficiency and competitiveness.'
  },
  {
    id: 9,
    slug: 'robot-rentals-economics',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '26 Feb 2025',
    title: 'The Economics of Robot Rentals vs. Purchase: A Swiss Perspective',
    excerpt: 'Financial analysis comparing robot rental and purchase options for Swiss businesses, including tax implications and cash flow.'
  }
])
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: white;
}

.hero-section {
  padding: 3rem 0 4rem;
}

.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.featured-post:hover {
  transform: translateY(-4px);
}

.featured-image {
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  background: #f5f5f5;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-content {
  padding-right: 2rem;
}

.featured-date {
  display: block;
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1rem;
}

.featured-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1.25rem;
}

.featured-excerpt {
  font-size: 1.125rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0 4rem;
}

.blog-link {
  text-decoration: none;
}

.load-more {
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
}

.load-more-btn {
  background: white;
  border: 2px solid #ef4444;
  color: #ef4444;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.load-more-btn:hover {
  background: #ef4444;
  color: white;
  transform: translateY(-2px);
}

.load-more-btn svg {
  transition: transform 0.2s;
}

.load-more-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-post {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-content {
    padding-right: 0;
  }

  .featured-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero-section {
    padding: 2rem 0 3rem;
  }

  .featured-image {
    height: 280px;
  }

  .featured-title {
    font-size: 1.75rem;
  }

  .featured-excerpt {
    font-size: 1rem;
  }
}
</style>
