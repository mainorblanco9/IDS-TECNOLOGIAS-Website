<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container">
        <h1>Servicios Industriales</h1>
        <p class="subtitle">Soluciones tecnológicas y de ingeniería para optimizar sus procesos productivos.</p>
      </div>
    </section>

    <section class="services-content-section">
      <div class="container">
        <h2>Nuestra Oferta Industrial</h2>
        <p>
          IDS y Tecnologías S.A. se especializa en brindar servicios integrales a la industria,
          asesorando a nuestros clientes con ideas tecnológicas innovadoras y buscando soluciones
          eficientes para sus procesos productivos. Nos enfocamos en la automatización, medición,
          control y seguridad, trabajando con marcas líderes a nivel mundial.
        </p>
        <p>
          (Contenido detallado de los servicios industriales, similar al `index.html` original,
          se migrará aquí, posiblemente utilizando componentes reutilizables como tarjetas o acordeones
          para presentar cada servicio de forma moderna y organizada).
        </p>
        <!-- Ejemplo de cómo podría estructurarse un servicio -->
        <div class="service-item">
          <h3>Sistemas Autónomos de Generación de Oxígeno y Otros Gases</h3>
          <p>
            Ofrecemos proyectos llave en mano para sistemas de tuberías de gases medicinales e industriales,
            incluyendo compresores alternativos, sin aceite y de tornillo lubricados.
            Equipos diseñados con precisión para profesionales.
          </p>
          <!-- Aquí iría el botón/enlace para mostrar/ocultar más información si fuera necesario -->
        </div>

        <div class="service-item">
          <h3>Calibración, Mantenimiento y Asistencia Técnica</h3>
          <p>
            Contamos con personal especializado y gran experiencia en el uso de instrumentos precisos.
            Garantizamos el mantenimiento y actualización de sistemas con garantías de fábrica.
          </p>
        </div>
         <!-- Añadir más .service-item según sea necesario -->
      </div>
    </section>
  </main>
</template>

<script setup>
// Lógica para IndustrialServicesView si es necesaria
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background-color: var(--color-industrial-dark-gray); /* Un color más industrial */
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
  color: rgba(255,255,255,0.85);
  font-weight: 300;
  max-width: 700px; /* Ancho máximo para el subtítulo */
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
.services-content-section > .container > p { /* Estilo para los párrafos introductorios */
  font-size: 1.7rem;
  line-height: 1.75;
  color: var(--color-text-medium);
  max-width: 800px;
  margin: 0 auto calc(var(--space-unit) * 2) auto; /* Centrar y espaciar */
  text-align: center;
}

.service-item {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.2);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.07);
  margin-bottom: calc(var(--space-unit) * 1.5);
}
.service-item h3 {
  font-size: 2.2rem;
  color: var(--color-industrial-dark-gray);
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
