<template>
  <section class="blog">
    <div class="blog-grid">
      <NuxtLink v-for="post in localizedData" :key="post.id" :to="`/blog/${post.slug}`" class="blog-link">
        <BlogCard :data="post" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useLocalizedData } from '@/src/composables/useLocalizedData'

const config = useRuntimeConfig()
const HOST = config.public.HOST

const API_URL =
  'http://localhost:8000/api/v2/pages/?type=home.BlogDetailPage&fields=title_en,title_dech,title_frch,title_itch,short_description_en,short_description_dech,short_description_frch,short_description_itch,thumbnail,author,tags_en,tags_dech,tags_frch,tags_itch,fetch_parent,last_published_at,body,is_featured,slug'

// Reactive data to fetch
const rawItems = ref([])

// Fetch blogs
const { data, pending, error } = await useFetch(API_URL, {
  key: 'blogs',
  transform: (res) => {
    rawItems.value = res.items || []
    return rawItems.value
  }
})

// Map localized data (computed)
const { localizedData } = useLocalizedData(rawItems)
</script>

<style scoped>
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