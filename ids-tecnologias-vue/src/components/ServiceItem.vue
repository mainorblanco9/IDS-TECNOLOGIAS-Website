<template>
  <div class="service-item-card" :class="{ 'is-expanded': isExpanded }">
    <div class="service-item-header" @click="toggleDetails">
      <img v-if="icon" :src="icon" :alt="title + ' icono'" class="service-icon">
      <h3>{{ title }}</h3>
      <button class="expand-button" :aria-expanded="isExpanded.toString()">
        <span class="expand-icon">{{ isExpanded ? '-' : '+' }}</span>
      </button>
    </div>
    <div v-if="shortDescription && !isExpanded" class="service-short-description" v-html="shortDescription">
    </div>
    <transition name="expand">
      <div v-if="isExpanded" class="service-item-details">
        <div v-if="longDescription" class="service-long-description" v-html="longDescription"></div>
        <div v-if="images && images.length > 0" class="service-images-grid">
          <div v-for="(image, index) in images" :key="index" class="service-image-item">
            <img :src="image.src" :alt="image.alt || title + ' imagen ' + (index + 1)">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  icon: String, // URL del icono (opcional)
  title: {
    type: String,
    required: true
  },
  shortDescription: String, // Descripción corta visible
  longDescription: String,  // Descripción larga HTML para el detalle
  images: Array // Array de objetos { src: 'url', alt: 'descripcion' }
});

const isExpanded = ref(false);

const toggleDetails = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.service-item-card {
  background-color: var(--color-background-white);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.07);
  margin-bottom: calc(var(--space-unit) * 1.5);
  border: 1px solid #e0e0e0;
  overflow: hidden; /* Para que la transición de altura funcione bien */
}

.service-item-header {
  display: flex;
  align-items: center;
  padding: calc(var(--space-unit) * 0.8) calc(var(--space-unit) * 1.2);
  cursor: pointer;
  background-color: var(--color-background-light-gray);
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s ease;
}
.service-item-card.is-expanded .service-item-header {
  background-color: #e9f5ff; /* Un color ligeramente diferente cuando está expandido */
  border-bottom-color: #cce0ff;
}

.service-item-header:hover {
  background-color: #f0f0f0;
}

.service-icon {
  width: 32px;
  height: 32px;
  margin-right: calc(var(--space-unit) * 0.8);
  opacity: 0.7;
}

.service-item-header h3 {
  font-size: 1.9rem;
  color: var(--color-industrial-charcoal);
  margin: 0;
  flex-grow: 1; /* Título ocupa el espacio disponible */
  line-height: 1.3;
}

.expand-button {
  background: none;
  border: 1px solid var(--color-text-light);
  color: var(--color-text-dark);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto; /* Empuja el botón a la derecha */
  padding: 0;
  transition: transform 0.3s ease, background-color 0.2s ease;
}
.service-item-card.is-expanded .expand-button {
  transform: rotate(180deg);
  background-color: var(--color-hydrogen-blue);
  color: white;
  border-color: var(--color-hydrogen-blue);
}
.expand-button:hover {
  background-color: var(--color-text-light);
  color: white;
}


.service-short-description {
  padding: calc(var(--space-unit) * 0.8) calc(var(--space-unit) * 1.2);
  font-size: 1.5rem;
  color: var(--color-text-medium);
  line-height: 1.6;
}

.service-item-details {
  padding: calc(var(--space-unit) * 1.2);
  border-top: 1px dashed #d0d0d0; /* Separador sutil */
  background-color: #fdfdfd; /* Fondo ligeramente diferente para el detalle */
}

.service-long-description {
  font-size: 1.55rem;
  line-height: 1.7;
  color: var(--color-text-dark); /* Texto del detalle un poco más oscuro */
  margin-bottom: var(--space-unit);
}
/* Estilos para el HTML que venga de v-html (longDescription) */
.service-long-description :deep(p) {
  margin-bottom: calc(var(--space-unit) * 0.8);
}
.service-long-description :deep(h6) {
  font-size: 1.6rem;
  color: var(--color-industrial-charcoal);
  font-weight: 600;
  margin-top: var(--space-unit);
  margin-bottom: calc(var(--space-unit) * 0.3);
}
.service-long-description :deep(ul) {
  list-style: disc;
  padding-left: var(--space-unit);
  margin-bottom: var(--space-unit);
}


.service-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-unit);
  margin-top: var(--space-unit);
}
.service-image-item img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

/* Transición para expandir/colapsar */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out 0.1s;
  overflow: hidden;
  max-height: 1000px; /* Un valor suficientemente grande */
  opacity: 1;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0; /* Evitar padding durante la transición de cierre */
  padding-bottom: 0;
  margin-top:0;
  margin-bottom:0;
  border-width: 0;
}
</style>
