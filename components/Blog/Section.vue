<template>
  <section class="blog">
    <div class="blog-grid">
      <NuxtLink
        v-for="post in localizedData"
        :key="post.id"
        :to="`/blog/${post.fetch_parent.slug}/${post.meta.slug}`"
        class="blog-link"
      >
        <BlogCard
          :image="HOST + post?.thumbnail?.original?.src"
          :date="formatDate(post.last_published_at)"
          :title="post?.title"
          :excerpt="post?.short_description"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLocalizedProp } from '@/src/composables/useLocalizedData';

const config = useRuntimeConfig()
const HOST = config.public.HOST

const blogPosts = ref([])

const API_URL =
  'http://localhost:8000/api/v2/pages/?type=home.BlogDetailPage&fields=title_en,title_de_ch,title_fr_ch,title_it_ch,short_description_en,short_description_de_ch,short_description_fr_ch,short_description_it_ch,thumbnail,author,tags_en,tags_de_ch,tags_fr_ch,tags_it_ch,fetch_parent,last_published_at,body,is_featured,slug'

// Format date for display
function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

// Fetch blogs
async function fetchBlogs() {
  try {
    const { data } = await useFetch(API_URL, { key: 'blogs' })
    blogPosts.value = data.value?.items || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }
}
// Run fetch on mount
await fetchBlogs()

const { localizedData } = useLocalizedProp(blogPosts.value);
</script>

<style scoped>
.blog {
  padding: 2rem 0;
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
