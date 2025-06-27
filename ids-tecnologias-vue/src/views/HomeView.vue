<template>
  <main class="main-content">
    <!-- Hero Section -->
    <section id="inicio-vue" class="hero-section">
      <!-- heroBackgroundImage sigue viniendo de public/images/ -->
      <div class="hero-background" :style="{ backgroundImage: `url(${heroBackgroundImage})` }">
      </div>
      <div class="hero-background-overlay"></div>
      <div class="hero-content">
        <h1>Impulsando el Futuro con Hidrógeno Verde</h1>
        <p class="intro">
          IDS & Tecnologías lidera la transformación hacia una industria sostenible y eficiente
          mediante soluciones innovadoras en energía de hidrógeno.
        </p>
        <router-link to="/hidrogeno" class="btn btn--primary-hydrogen">
          Conoce Más Sobre Hidrógeno
        </router-link>
      </div>
    </section>

    <!-- Sección Introductoria de Servicios Destacados -->
    <section class="featured-services-intro">
      <div class="container">
        <h2>Soluciones Integrales para un Mañana Sostenible</h2>
        <p class="section-subtitle">
          Desde la vanguardia en tecnologías de hidrógeno hasta la optimización de procesos industriales y la gestión ambiental responsable.
        </p>
        <div class="services-grid">
          <div class="service-card">
            <!-- SVGs importados desde src/assets/images/ -->
            <img :src="iconHydrogenEnergy" alt="Icono Energía de Hidrógeno" class="service-icon">
            <h3>Energía de Hidrógeno</h3>
            <p>Pioneros en la implementación de tecnologías de hidrógeno verde para diversas aplicaciones industriales y energéticas.</p>
            <router-link to="/hidrogeno" class="btn btn--secondary">Ver Soluciones H2</router-link>
          </div>
          <div class="service-card">
            <img :src="iconIndustrialSolutions" alt="Icono Soluciones Industriales" class="service-icon">
            <h3>Servicios Industriales</h3>
            <p>Optimización, automatización y mantenimiento para la industria moderna, asegurando eficiencia y seguridad.</p>
            <router-link to="/servicios-industriales" class="btn btn--secondary">Descubrir Más</router-link>
          </div>
          <div class="service-card">
            <img :src="iconEnvironmentalCare" alt="Icono Cuidado Ambiental" class="service-icon">
            <h3>Gestión Ambiental</h3>
            <p>Consultoría y servicios para la gestión sostenible de recursos y cumplimiento normativo ambiental.</p>
            <router-link to="/servicios-ambientales" class="btn btn--secondary">Nuestros Servicios</router-link>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
// SVGs importados desde src/assets/images/
// ¡ASEGÚRATE DE MOVER LOS ARCHIVOS SVG A ESTA UBICACIÓN EN TU PROYECTO LOCAL!
// (ids-tecnologias-vue/src/assets/images/)
import iconHydrogenEnergy from '../assets/images/icon-hydrogen-energy.svg';
import iconIndustrialSolutions from '../assets/images/icon-industrial-solutions.svg';
import iconEnvironmentalCare from '../assets/images/icon-environmental-care.svg';

// La imagen de fondo JPG grande puede seguir sirviéndose desde public/images/
// si se desea, o también moverla a src/assets/images y cambiar la importación.
// Por ahora, la dejo como estaba para minimizar cambios en un solo paso.
import heroBackgroundImage from '/images/hero-hidrogeno-alta-calidad.jpg';
// Asegúrate que 'hero-hidrogeno-alta-calidad.jpg' exista en public/images/

</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

/* Hero Section (revisión de estilos) */
.hero-section {
  position: relative;
  height: calc(95vh - 7rem);
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-background-white);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center 60%;
  z-index: 1;
}
.hero-background-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 20, 40, 0.7) 0%, rgba(0, 50, 80, 0.4) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: var(--space-unit);
  max-width: 900px;
}

.hero-content h1 {
  font-size: clamp(3.5rem, 7vw, 6rem);
  color: var(--color-background-white);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: calc(var(--space-unit) * 0.8);
  text-shadow: 2px 3px 8px rgba(0,0,0,0.7);
}

.hero-content p.intro {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  color: rgba(255,255,255,0.95);
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: calc(var(--space-unit) * 2);
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  font-weight: 300;
}

.btn--primary-hydrogen {
  display: inline-block;
  background-color: var(--color-hydrogen-blue);
  color: var(--color-industrial-charcoal);
  padding: calc(var(--space-unit)*0.6) calc(var(--space-unit)*1.4);
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 100, 150, 0.2);
  text-decoration: none;
}
.btn--primary-hydrogen:hover {
  background-color: var(--color-hydrogen-cyan);
  color: var(--color-industrial-charcoal);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 120, 180, 0.3);
}

/* Featured Services Intro Section */
.featured-services-intro {
  padding: calc(var(--space-unit) * 3) 0;
  background-color: var(--color-background-white);
  text-align: center;
}
.featured-services-intro .container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.featured-services-intro h2 {
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  color: var(--color-industrial-charcoal);
  margin-bottom: calc(var(--space-unit) * 0.5);
}
.featured-services-intro .section-subtitle {
  font-size: clamp(1.7rem, 2.5vw, 2rem);
  color: var(--color-text-medium);
  max-width: 800px;
  margin: 0 auto calc(var(--space-unit) * 2.5) auto;
  font-weight: 300;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--space-unit) * 2);
}

.service-card {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.8);
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: var(--space-unit);
}

.service-card h3 {
  font-size: 2.2rem;
  color: var(--color-hydrogen-blue);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 0.75);
}
.service-card p {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.65;
  margin-bottom: calc(var(--space-unit) * 1.2);
  flex-grow: 1;
}
.btn--secondary {
  display: inline-block;
  background-color: transparent;
  color: var(--color-hydrogen-blue);
  padding: calc(var(--space-unit)*0.4) calc(var(--space-unit)*0.8);
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 6px;
  border: 2px solid var(--color-hydrogen-blue);
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  margin-top: auto;
}
.btn--secondary:hover {
  background-color: var(--color-hydrogen-blue);
  color: var(--color-background-white);
}
</style>
