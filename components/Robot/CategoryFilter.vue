<template>
  <div class="category-section">
    <h3 class="category-title">Popular Category</h3>
    <div class="category-list">
      <button
        v-for="category in getRobots"
        :key="category"
        :class="['category-btn', { active: category.fetch_parent.title_en === selectedCategory }]"
        @click="selectCategory(category.fetch_parent.title_en)"
      >
        {{ getLocaleField(category, 'title', $i18n.locale) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps, onMounted } from 'vue'
import { storeToRefs } from "pinia"
import { useUtilityStore, getLocaleField } from "@/stores/utility"

const props = defineProps({
    
})

const utilityStore = useUtilityStore()
const { getRobots } = storeToRefs(utilityStore)

onMounted(async () => {
    if (!getRobots.value || getRobots.value.length === 0) {
        await utilityStore.fetchRobots()
    }
})
const emit = defineEmits(['update:modelValue'])

const selectedCategory = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    selectedCategory.value = newVal
  }
)

const selectCategory = (category) => {
  selectedCategory.value = category
  emit('update:modelValue', category)
}
</script>

<style scoped>
.category-section {
  padding-bottom: 2rem;
}

.category-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 1rem;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.category-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 10px;
  background: white;
  border: 1px solid #e5e7eb;
  font-size: 0.95rem;
  font-weight: 500;
  color: #111827;
  cursor: pointer;
  transition: all 0.25s ease;
}

.category-btn:hover {
  background: #f9fafb;
}

.category-btn.active {
  background: #ffecec;
  color: #ff3b30;
  border-color: #ffb3ae;
}
</style>
