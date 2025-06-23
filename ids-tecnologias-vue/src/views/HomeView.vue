<template>
  <main class="main-content">
    <section id="inicio-vue" class="hero-section">
      <div class="hero-content">
        <h1>Energía de Hidrógeno: El Futuro Industrial Sostenible</h1>
        <p class="intro">
          En IDS & Tecnologías, impulsamos la vanguardia de la industrialización renovable,
          ofreciendo soluciones innovadoras y eficientes basadas en la energía de hidrógeno verde.
        </p>
        <router-link to="/hidrogeno" class="btn btn--primary-hydrogen">
          Descubre Nuestras Soluciones
        </router-link>
      </div>
      <div class="hero-background-overlay"></div>
      <div class="hero-background" style="background-image: url('/images/hero-hidrogeno-placeholder.jpg');">
        <!-- Idealmente, esta imagen debería existir en public/images/hero-hidrogeno-placeholder.jpg -->
        <!-- O ser una imagen de alta calidad relacionada con el hidrógeno -->
      </div>
    </section>

    <section class="placeholder-section" id="home-contenido-adicional">
      <div class="container">
        <h2>Bienvenido a IDS & Tecnologías</h2>
        <p>Página de inicio en construcción con Vue.js. Aquí se destacarán los servicios principales y la visión de la empresa.</p>
        <p>El enfoque principal será la promoción de la energía de hidrógeno y nuestras capacidades en la industrialización renovable.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
// No se requiere lógica de script específica para esta vista de inicio por ahora.
// Se podrían añadir elementos como un carrusel de noticias o proyectos destacados más adelante.
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo para evitar superposición */
}
.hero-section {
  position: relative;
  height: calc(90vh - 7rem); /* Altura de la ventana menos la altura del navbar */
  min-height: 500px; /* Altura mínima para pantallas pequeñas */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-background-white); /* Texto blanco por defecto para el hero */
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  /* La imagen de fondo se establece inline como ejemplo,
     pero podría ser gestionada por CSS o como prop de un componente */
}
.hero-background-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55); /* Overlay más oscuro para mejor contraste */
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3; /* Por encima del overlay y el fondo */
  padding: var(--space-unit); /* Usar variable CSS para padding */
}

.hero-content h1 {
  font-size: clamp(3.2rem, 6vw, 5.8rem); /* Ajuste de tamaño máximo */
  color: var(--color-background-white);
  font-weight: 700;
  line-height: 1.15; /* Ligeramente más espaciado */
  margin-bottom: calc(var(--space-unit) * 0.8);
  text-shadow: 2px 2px 6px rgba(0,0,0,0.6); /* Sombra de texto más definida */
}

.hero-content p.intro {
  font-size: clamp(1.8rem, 2.2vw, 2.3rem);
  color: rgba(255,255,255,0.95); /* Casi blanco para máxima legibilidad */
  max-width: 750px; /* Un poco más de ancho para el párrafo */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: calc(var(--space-unit) * 1.8); /* Más espacio antes del botón */
  text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
}

.btn--primary-hydrogen {
  display: inline-block;
  background-color: var(--color-hydrogen-blue);
  color: var(--color-background-white);
  padding: calc(var(--space-unit)*0.55) calc(var(--space-unit)*1.2); /* Botón más grande */
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.6rem; /* Tamaño de fuente del botón */
  text-transform: uppercase;
  letter-spacing: 0.12em; /* Más espaciado en letras */
  border-radius: 6px; /* Bordes ligeramente más redondeados */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-decoration: none;
}

.btn--primary-hydrogen:hover {
  background-color: var(--color-renewable-teal);
  transform: translateY(-3px); /* Efecto hover más pronunciado */
  box-shadow: 0 7px 15px rgba(0,0,0,0.2);
}

.placeholder-section {
  padding: calc(var(--space-unit) * 2) 0; /* Más padding vertical */
  text-align: center;
  background-color: var(--color-background-white); /* Fondo blanco para esta sección */
}
.placeholder-section .container {
   width: 90%;
   max-width: 1000px; /* Contenedor un poco más estrecho para mejor lectura */
   margin: 0 auto;
}
.placeholder-section h2 {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  color: var(--color-industrial-charcoal);
  margin-bottom: var(--space-unit);
}
.placeholder-section p {
  font-size: 1.8rem;
  color: var(--color-text-medium);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto var(--space-unit);
}
</style>
