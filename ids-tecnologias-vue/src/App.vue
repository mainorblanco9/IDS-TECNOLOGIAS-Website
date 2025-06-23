<template>
  <div id="vue-app-wrapper">
    <NavbarComponent />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from './components/layout/Navbar.vue'
import FooterComponent from './components/layout/Footer.vue'

// La key en router-view ayuda a forzar el remonte de componentes si la ruta cambia
// a un componente del mismo tipo, asegurando que los hooks de ciclo de vida se ejecuten.
// La transición 'fade' es opcional para un efecto suave entre páginas.
</script>

<style>
/* Estilos globales específicos para App.vue o wrapper general.
   La mayoría de los estilos vendrán de assets/modern.css o serán scoped. */

#vue-app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el footer (si existe) se quede abajo */
  background-color: var(--color-background-white); /* Usando variable de modern.css */
}

/* Estilos para la transición entre rutas (opcional) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Asegurar que el contenido principal pueda crecer y empujar el footer */
/* Esto podría ir en un componente Layout si se vuelve más complejo */
/* o aplicarse al elemento que <router-view> renderiza (usualmente <main>) */
/* router-view > * {
  flex-grow: 1;
} */
</style>
