<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container">
        <h1>Energía de Hidrógeno</h1>
        <p class="subtitle">Descubre el potencial del hidrógeno verde y nuestras soluciones innovadoras.</p>
      </div>
    </section>

    <section class="hydrogen-intro-section">
      <div class="container">
        <h2>¿Qué es el Hidrógeno Verde?</h2>
        <p>
          El hidrógeno verde se produce mediante electrólisis del agua utilizando energía renovable (solar, eólica),
          lo que significa que su producción no emite gases de efecto invernadero. Es un vector energético limpio,
          versátil y clave para la descarbonización de la industria, el transporte y la generación de energía.
        </p>
        <!-- Aquí podrían ir más detalles, infografías o un componente dedicado -->
      </div>
    </section>

    <section class="hydrogen-benefits-section">
      <div class="container">
        <h2>Beneficios Clave del Hidrógeno Verde</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <!-- Icono placeholder --> <span class="icon-placeholder">[ICONO]</span>
            <h3>Cero Emisiones</h3>
            <p>Al utilizarse, solo produce agua, eliminando la huella de carbono.</p>
          </div>
          <div class="benefit-card">
            <!-- Icono placeholder --> <span class="icon-placeholder">[ICONO]</span>
            <h3>Versatilidad</h3>
            <p>Puede usarse en transporte, industria, almacenamiento de energía y más.</p>
          </div>
          <div class="benefit-card">
            <!-- Icono placeholder --> <span class="icon-placeholder">[ICONO]</span>
            <h3>Almacenamiento de Energía</h3>
            <p>Permite almacenar excedentes de energía renovable para su uso posterior.</p>
          </div>
          <div class="benefit-card">
            <!-- Icono placeholder --> <span class="icon-placeholder">[ICONO]</span>
            <h3>Sostenibilidad Industrial</h3>
            <p>Facilita la transición a procesos industriales más limpios y sostenibles.</p>
          </div>
        </div>
      </div>
    </section>

     <section class="our-solutions-section">
      <div class="container">
        <h2>Nuestras Soluciones en Hidrógeno</h2>
        <p>En IDS & Tecnologías, ofrecemos un portafolio completo para la cadena de valor del hidrógeno:</p>
        <ul>
          <li>Tecnologías de Electrolizadores para producción de H2 Verde.</li>
          <li>Sistemas de Almacenamiento y Distribución de Hidrógeno.</li>
          <li>Puntos de Recarga para Vehículos de Hidrógeno.</li>
          <li>Integración de Celdas de Combustible para aplicaciones estacionarias y móviles.</li>
          <li>Consultoría y Diseño de Proyectos de Hidrógeno a medida.</li>
        </ul>
        <!-- Se podrían detallar más estos servicios con componentes específicos -->
      </div>
    </section>
  </main>
</template>

<script setup>
// Lógica para HydrogenView si es necesaria
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background-color: var(--color-hydrogen-blue);
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
  max-width: 600px;
  margin: 0 auto;
}

.container {
  width: 90%;
  max-width: 1100px; /* Contenedor un poco más ancho */
  margin: 0 auto;
  padding: 0 var(--space-unit);
}

.hydrogen-intro-section, .hydrogen-benefits-section, .our-solutions-section {
  padding: calc(var(--space-unit) * 2.5) 0;
}
.hydrogen-intro-section h2, .hydrogen-benefits-section h2, .our-solutions-section h2 {
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 3rem);
  color: var(--color-industrial-charcoal);
  margin-bottom: calc(var(--space-unit) * 1.5);
}
.hydrogen-intro-section p, .our-solutions-section p, .our-solutions-section ul {
  font-size: 1.7rem; /* Texto ligeramente más grande */
  line-height: 1.75;
  color: var(--color-text-medium);
  max-width: 800px;
  margin: 0 auto calc(var(--space-unit) * 1) auto;
}
.our-solutions-section ul {
  list-style: disc;
  padding-left: calc(var(--space-unit) * 1.5);
}
.our-solutions-section ul li {
  margin-bottom: calc(var(--space-unit) * 0.5);
}


.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Grid responsive */
  gap: calc(var(--space-unit) * 1.5);
}

.benefit-card {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.2);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.benefit-card .icon-placeholder { /* Estilo temporal para el icono */
  display: block;
  font-size: 3rem;
  color: var(--color-hydrogen-blue);
  margin-bottom: var(--space-unit);
}
.benefit-card h3 {
  font-size: 2rem;
  color: var(--color-hydrogen-blue);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 0.5);
}
.benefit-card p {
  font-size: 1.5rem;
  color: var(--color-text-medium);
  line-height: 1.6;
  margin-bottom: 0;
}
</style>
