<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container" role="dialog" aria-labelledby="modalTitle" aria-modal="true">
        <header class="modal-header">
          <h3 id="modalTitle" class="modal-title">{{ title }}</h3>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Cerrar modal">
            &times;
          </button>
        </header>
        <section class="modal-body">
          <slot name="body">
            <p>Contenido del modal por defecto.</p>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary-modal" @click="closeModal">
              Cerrar
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Título del Modal'
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const handleEscKey = (event) => {
  if (event.key === 'Escape' && props.show) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65); /* Overlay más oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* Asegurar que esté por encima de todo */
}

.modal-container {
  background-color: var(--color-background-white);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 700px; /* Ancho máximo del modal */
  max-height: 85vh; /* Altura máxima, permite scroll interno */
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Para que el border-radius afecte al contenido scrolleable */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--space-unit) * 0.8) calc(var(--space-unit) * 1.2);
  background-color: var(--color-industrial-charcoal); /* Header oscuro */
  color: var(--color-background-white);
  border-bottom: 1px solid #4a4a4a;
}

.modal-title {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-background-white);
}

.btn-close {
  background: none;
  border: none;
  font-size: 2.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: color 0.2s ease;
}
.btn-close:hover {
  color: var(--color-background-white);
}

.modal-body {
  padding: calc(var(--space-unit) * 1.2);
  overflow-y: auto; /* Scroll si el contenido es largo */
  flex-grow: 1; /* Ocupa el espacio disponible */
  font-size: 1.6rem;
  line-height: 1.7;
  color: var(--color-text-medium);
}

/* Estilos para contenido HTML dentro del slot del body */
.modal-body :deep(h2),
.modal-body :deep(h3) {
  color: var(--color-industrial-charcoal);
  margin-top: var(--space-unit);
  margin-bottom: calc(var(--space-unit) * 0.5);
}
.modal-body :deep(h2) { font-size: 2.2rem; }
.modal-body :deep(h3) { font-size: 1.9rem; }

.modal-body :deep(p) {
  margin-bottom: var(--space-unit);
}
.modal-body :deep(ul) {
  list-style: disc;
  padding-left: calc(var(--space-unit) * 1.5);
  margin-bottom: var(--space-unit);
}
.modal-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: calc(var(--space-unit) * 0.5);
  margin-bottom: calc(var(--space-unit) * 0.5);
  display: block; /* Para centrar con margin auto si es necesario */
}
.modal-body :deep(.ajustarCentro) { /* Clase del CSS original */
    margin-left: auto;
    margin-right: auto;
}
.modal-body :deep(#img-left) { /* Clase del CSS original */
    float: left;
    margin-right: var(--space-unit);
    max-width: 200px; /* Limitar tamaño de imágenes flotantes */
}
.modal-body :deep(#img-right) { /* Clase del CSS original */
    float: right;
    margin-left: var(--space-unit);
    max-width: 200px;
}
.modal-body :deep(ul)::after { /* Clearfix para listas con imágenes flotantes */
    content: "";
    clear: both;
    display: table;
}


.modal-footer {
  padding: calc(var(--space-unit) * 0.8) calc(var(--space-unit) * 1.2);
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end; /* Botones a la derecha */
  background-color: #f9f9f9;
}

.btn-secondary-modal {
  background-color: var(--color-text-light);
  color: var(--color-background-white);
  padding: calc(var(--space-unit)*0.4) calc(var(--space-unit)*0.8);
  font-family: var(--font-headings);
  font-weight: 500;
  font-size: 1.4rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-secondary-modal:hover {
  background-color: var(--color-text-medium);
}

/* Transiciones del Modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); /* Efecto de zoom/deslizamiento */
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.95) translateY(10px); /* Inicia un poco más pequeño y abajo */
}
</style>
