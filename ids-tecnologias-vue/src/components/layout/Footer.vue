<template>
  <footer class="s-footer">
    <div class="s-footer__main">
      <div class="row">
        <div class="column ss-copyright">
          <span>&copy; {{ currentYear }} IDS Y TECNOLOGIAS S.A. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
    <!-- El botón "Go Top" se puede añadir más tarde si es necesario -->
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.s-footer {
  background-color: var(--color-industrial-charcoal);
  padding: calc(var(--space-unit) * 2) 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.4rem; /* Ajustar según sea necesario */
  text-align: center;
  margin-top: auto; /* Empuja el footer hacia abajo si el contenido principal es corto */
}

.s-footer__main .row {
  max-width: 1200px; /* Coincide con el header y container general */
  margin: 0 auto;
  padding: 0 var(--space-unit); /* Padding lateral del contenedor */
}

.ss-copyright {
  width: 100%; /* Asegurar que ocupe todo el ancho del row */
}

.ss-copyright span {
  font-family: var(--font-primary);
}
</style>
