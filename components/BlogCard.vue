<template>
  <article class="blog-card">
    <div class="blog-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="blog-content">
      <time class="blog-date">{{ date }}</time>
      <h3 class="blog-title">{{ title }}</h3>
      <p class="blog-excerpt">{{ excerpt }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.blog-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #f5f5f5;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 1.5rem;
}

.blog-date {
  display: block;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.75rem;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.blog-excerpt {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .blog-image {
    height: 200px;
  }

  .blog-content {
    padding: 1.25rem;
  }

  .blog-title {
    font-size: 1.125rem;
  }
}
</style>
