<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container">
        <h1>Servicios Ambientales</h1>
        <p class="subtitle">Comprometidos con la sostenibilidad y la gestión ambiental responsable.</p>
      </div>
    </section>

    <section class="services-content-section">
      <div class="container">
        <h2>Consultoría y Gestión Ambiental</h2>
        <p>
          En IDS & Tecnologías, ofrecemos asesoría y capacitación para el diseño de proyectos
          y la gestión de tecnologías aplicables en la industria, siempre de la mano con la
          conservación de los recursos naturales y el cumplimiento normativo.
        </p>
        <p>
          (El contenido detallado de los servicios ambientales del `index.html` original, como Gestión de Residuos,
          Educación Ambiental, Tramitología, Certificados de Calidad, etc., se migrará aquí de forma organizada).
        </p>
        <!-- Ejemplo de cómo podría estructurarse un servicio -->
        <div class="service-item">
          <h3>Gestión Integral de Residuos Sólidos</h3>
          <p>
            Desarrollamos programas institucionales y municipales para el manejo adecuado de residuos,
            incluyendo la caracterización, análisis de volúmenes y asesoría en residuos peligrosos y especiales.
          </p>
        </div>

        <div class="service-item">
          <h3>Tramitología Ambiental y Certificaciones</h3>
          <p>
            Apoyamos en la gestión de permisos y certificados ante entidades como el Ministerio de Salud,
            SETENA y la Dirección de Aguas. Asesoramos en la obtención de certificaciones como Carbono Neutralidad,
            Bandera Azul Ecológica e ISO 14001.
          </p>
        </div>
        <!-- Añadir más .service-item según sea necesario -->
      </div>
    </section>
  </main>
</template>

<script setup>
// Lógica para EnvironmentalServicesView si es necesaria
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background-color: var(--color-renewable-green); /* Verde para ambiente */
  color: var(--color-background-white);
  padding: calc(var(--space-unit) * 2) 0;
  text-align: center;
}
.page-header h1 {
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  color: var(--color-background-white);
  margin-bottom: calc(var(--space-unit) * 0.25);
}
.page-header .subtitle {
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: rgba(255,255,255,0.9); /* Texto un poco más opaco que el título */
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-unit);
}

.services-content-section {
  padding: calc(var(--space-unit) * 2.5) 0;
}
.services-content-section h2 {
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 3rem);
  color: var(--color-industrial-charcoal);
  margin-bottom: calc(var(--space-unit) * 1.5);
}
.services-content-section > .container > p {
  font-size: 1.7rem;
  line-height: 1.75;
  color: var(--color-text-medium);
  max-width: 800px;
  margin: 0 auto calc(var(--space-unit) * 2) auto;
  text-align: center;
}

.service-item {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.2);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.07);
  margin-bottom: calc(var(--space-unit) * 1.5);
  border-left: 5px solid var(--color-renewable-teal); /* Acento de color temático */
}
.service-item h3 {
  font-size: 2.2rem;
  color: var(--color-renewable-green); /* Títulos con color temático */
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 0.75);
}
.service-item p {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.7;
  margin-bottom: 0;
}
</style>
