<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click="close">
      <div class="modal-container" @click.stop>
        <button class="modal-close" @click="close" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div class="modal-image">
          <img :src="robot.image" :alt="robot.name" />
        </div>

        <div class="modal-content">
          <h2 class="modal-title">{{ robot.name }}</h2>

          <div class="specs-list">
            <div class="spec-row">
              <span class="spec-label">Battery Life:</span>
              <span class="spec-value">{{ robot.batteryLife }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Coverage:</span>
              <span class="spec-value">{{ robot.coverage }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Noise Level:</span>
              <span class="spec-value">{{ robot.noiseLevel }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Dimensions:</span>
              <span class="spec-value">{{ robot.dimensions }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Air Filtration Level:</span>
              <span class="spec-value">{{ robot.airFiltration }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Vacuuming Width:</span>
              <span class="spec-value">{{ robot.vacuumingWidth }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Sweeping Width:</span>
              <span class="spec-value">{{ robot.sweepingWidth }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Path Clearance:</span>
              <span class="spec-value">{{ robot.pathClearance }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Run-time:</span>
              <span class="spec-value">{{ robot.runtime }}</span>
            </div>
          </div>

          <button class="btn-quote-modal bg-red">Quote</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  robot: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
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

.modal-close svg {
  color: #1a1a1a;
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
  margin-bottom: 2rem;
}

.specs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 0rem;
}

.spec-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.spec-label {
  color: #6b7280;
  font-weight: 400;
}

.spec-value {
  color: #1a1a1a;
  font-weight: 500;
  text-align: right;
}

.btn-quote-modal {
  width: 100%;
  padding: 1rem;
  color: white;
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

  .spec-row {
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .spec-value {
    text-align: left;
  }
}
</style>
