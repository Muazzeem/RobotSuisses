<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="close">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="close" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <p>{{ robot }}</p>

        <!-- <div class="modal-image" v-if="thumbnailSrc">
          <img :src="thumbnailSrc" :alt="localizedData.title || 'image'" />
        </div> -->

        <div class="modal-content">
          <button class="btn-quote-modal bg-red">Quote</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watch, onUnmounted } from 'vue';
const props = defineProps({
  isOpen: { type: Boolean, default: false },
  robot: { type: Object, default: null }
});
const emit = defineEmits(['close']);

const config = useRuntimeConfig();
const HOST = computed(() => config.public.HOST || '');

const close = () => emit('close');

watch(() => props.isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* keep your styles (copied from your original) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 60vh;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-close:hover {
  background: #f5f5f5;
  transform: rotate(90deg);
}

.modal-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 100%);
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-content {
  padding: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.modal-desc {
  margin-bottom: 1.5rem;
  color: #374151;
}

.btn-quote-modal {
  width: 100%;
  padding: 1rem;
  color: white;
  background: #ef4444;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-quote-modal:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 0;
  }

  .modal-container {
    max-height: 100vh;
    border-radius: 0;
  }

  .modal-image {
    height: 300px;
  }

  .modal-content {
    padding: 2rem 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }
}
</style>
