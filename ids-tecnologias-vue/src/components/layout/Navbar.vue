<template>
  <header class="s-header">
    <div class="s-header__nav-wrap-container"> <!-- Contenedor para centrar el contenido del nav -->
      <div class="s-header__logo">
        <router-link to="/">
          <!-- Idealmente un logo SVG o una imagen optimizada -->
          <!-- <img src="/images/logo-ids-placeholder.png" alt="IDS Tecnologías Logo"> -->
          <span>IDS & TECNOLOGÍAS</span>
        </router-link>
      </div>
      <nav class="s-header__nav" :class="{ 'is-active': mobileNavOpen }">
        <ul>
          <li><router-link to="/" @click="closeMobileNav">Inicio</router-link></li>
          <li><router-link to="/hidrogeno" @click="closeMobileNav">Hidrógeno</router-link></li>
          <li><router-link to="/servicios-industriales" @click="closeMobileNav">Servicios Industriales</router-link></li>
          <li><router-link to="/servicios-ambientales" @click="closeMobileNav">Servicios Ambientales</router-link></li>
          <li><router-link to="/empresa" @click="closeMobileNav">Empresa</router-link></li>
          <li><router-link to="/contacto" @click="closeMobileNav">Contacto</router-link></li>
        </ul>
      </nav>
      <button class="s-header__menu-toggle" @click="toggleMobileNav" :class="{'is-active': mobileNavOpen}" aria-label="Abrir menú">
        <span class="s-header__menu-icon"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileNavOpen = ref(false);

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value;
  // Opcional: Bloquear scroll del body cuando el menú móvil está abierto
  // document.body.style.overflow = mobileNavOpen.value ? 'hidden' : '';
};

const closeMobileNav = () => {
  if (mobileNavOpen.value) {
    mobileNavOpen.value = false;
    // document.body.style.overflow = ''; // Restaurar scroll
  }
};
</script>

<style scoped>
.s-header {
  background-color: var(--color-industrial-charcoal);
  padding: 0 var(--space-unit);
  position: fixed; /* Fijar header en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Sombra más pronunciada */
}

.s-header__nav-wrap-container {
  max-width: 1200px; /* Ancho máximo del contenido del header */
  margin: 0 auto; /* Centrar */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem; /* Altura del header */
}

.s-header__logo {
  flex-shrink: 0; /* Evita que el logo se encoja */
}
.s-header__logo a {
  color: var(--color-background-white);
  font-family: var(--font-headings);
  font-weight: 700;
  font-size: clamp(1.8rem, 2.5vw, 2.2rem); /* Tamaño de fuente responsive para el logo */
  text-decoration: none;
  display: flex;
  align-items: center;
}
.s-header__logo img { /* Si usas un logo img */
  max-height: 4rem; /* Ajustar tamaño del logo */
  margin-right: 1rem;
  vertical-align: middle;
}

.s-header__nav {
  /* En desktop, el nav es visible por defecto */
}

.s-header__nav ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
}

.s-header__nav a {
  color: rgba(255, 255, 255, 0.85);
  padding: 0 1.8rem; /* Ajustar padding horizontal */
  display: flex;
  align-items: center;
  height: 7rem; /* Misma altura que el header para click target */
  font-family: var(--font-headings);
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em; /* Un poco más de espaciado */
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
  border-bottom: 4px solid transparent; /* Borde más grueso para el activo */
}

.s-header__nav a:hover {
  color: var(--color-background-white);
  background-color: rgba(255, 255, 255, 0.1); /* Fondo sutil al pasar el mouse */
}

/* Vue Router usa router-link-exact-active para el enlace exacto activo */
.s-header__nav a.router-link-exact-active {
  color: var(--color-background-white);
  border-bottom-color: var(--color-hydrogen-cyan); /* Color del borde activo */
  font-weight: 700; /* Más peso para el activo */
}

/* Botón de menú móvil (Hamburguesa) */
.s-header__menu-toggle {
  display: none; /* Oculto por defecto en desktop */
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem; /* Área de click */
  z-index: 1001; /* Por encima del nav si se superponen en alguna animación */
}

.s-header__menu-icon {
  display: block;
  position: relative;
  width: 26px; /* Ancho del icono */
  height: 3px;  /* Grosor de las líneas */
  background-color: var(--color-background-white);
  transition: all 0.3s ease-in-out;
}
.s-header__menu-icon::before,
.s-header__menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px; /* Mismo grosor */
  background-color: var(--color-background-white);
  transition: all 0.3s ease-in-out;
}
.s-header__menu-icon::before {
  top: -8px; /* Espacio entre líneas */
}
.s-header__menu-icon::after {
  bottom: -8px; /* Espacio entre líneas */
}

/* Estilos para menú móvil activo (transformación a X) */
.s-header__menu-toggle.is-active .s-header__menu-icon {
  background-color: transparent; /* La línea del medio se desvanece */
}
.s-header__menu-toggle.is-active .s-header__menu-icon::before {
  transform: translateY(8px) rotate(45deg);
}
.s-header__menu-toggle.is-active .s-header__menu-icon::after {
  transform: translateY(-8px) rotate(-45deg);
}

/* Media Query para mostrar menú móvil y ocultar el de desktop */
@media (max-width: 900px) { /* Ajustar este breakpoint según el diseño */
  .s-header__nav {
    display: none; /* Ocultar nav de desktop */
    flex-direction: column;
    position: absolute;
    top: 7rem; /* Justo debajo del header */
    left: 0;
    width: 100%;
    background-color: var(--color-industrial-charcoal);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2); /* Sombra para el desplegable */
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .s-header__nav.is-active {
    display: flex; /* Mostrar cuando está activo */
  }
  .s-header__nav ul {
    flex-direction: column;
    width: 100%;
  }
  .s-header__nav li {
    width: 100%;
    text-align: left;
  }
  .s-header__nav a {
    padding: 1.5rem 2rem;
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(255,255,255,0.15); /* Línea divisoria más sutil */
    justify-content: flex-start;
    border-left: 4px solid transparent; /* Para indicador activo en móvil */
    border-bottom-color: transparent; /* Quitar borde inferior de desktop */
  }
   .s-header__nav li:last-child a {
    border-bottom: none; /* Sin borde en el último item */
  }
  .s-header__nav a:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  .s-header__nav a.router-link-exact-active {
    background-color: var(--color-hydrogen-blue);
    border-left-color: var(--color-hydrogen-cyan); /* Indicador lateral */
    color: var(--color-industrial-charcoal);
    border-bottom-color:var(--color-hydrogen-blue); /* Mantener el color de fondo */
  }
  .s-header__nav a.router-link-exact-active:hover {
    background-color: var(--color-hydrogen-cyan); /* Aclarar un poco en hover activo */
  }

  .s-header__menu-toggle {
    display: block; /* Mostrar botón de hamburguesa */
  }
}
</style>
