<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container page-header__container">
        <div class="page-header__text">
          <h1>Servicios Ambientales Estratégicos</h1>
          <p class="subtitle">Soluciones integrales para la gestión sostenible de recursos, cumplimiento normativo y la promoción de una cultura ambiental responsable.</p>
        </div>
        <div class="page-header__image">
          <img src="/images/icon-leaf-environment.svg" alt="Sostenibilidad Ambiental"> <!-- Placeholder Icon -->
        </div>
      </div>
    </section>

    <section class="services-content-section">
      <div class="container">
        <h2 class="section-title"><span>Consultoría y Gestión para un Impacto Positivo</span></h2>
        <p class="section-subtitle-narrow">
          Nuestra empresa ofrece las mejores herramientas para brindar asesorías y capacitaciones para el diseño de proyectos,
          así como la gestión de tecnologías aplicables en la industria, con procesos productivos y de construcción
          de la mano con la conservación de los recursos naturales.
        </p>

        <div class="services-categories">
          <!-- Categoría 1: Gestión de Residuos Sólidos -->
          <div class="service-category-card">
            <img src="/images/icon-waste-management.svg" alt="Gestión de Residuos" class="category-icon">
            <h3>Gestión de Residuos Sólidos</h3>
            <ul>
              <li>Programas institucionales en el manejo de Residuos Sólidos.</li>
              <li>Asesoría en la gestión de residuos peligrosos y especiales.</li>
              <li>Análisis de volúmenes de generación y caracterización.</li>
              <li>Elaboración de planes de gestión de residuos sólidos Municipales.</li>
            </ul>
          </div>

          <!-- Categoría 2: Educación Ambiental -->
          <div class="service-category-card">
            <img src="/images/icon-environmental-education.svg" alt="Educación Ambiental" class="category-icon">
            <h3>Educación Ambiental</h3>
            <p>Capacitación a personal e instituciones para desarrollar actitudes y habilidades responsables con el ambiente (manejo de residuos, identificación de impactos, eficiencia energética, Bandera Azul).</p>
          </div>

          <!-- Categoría 3: Tramitología Ambiental -->
          <div class="service-category-card">
            <img src="/images/icon-environmental-permits.svg" alt="Tramitología Ambiental" class="category-icon">
            <h3>Tramitología Ambiental</h3>
            <ul>
              <li><strong>Ministerio de Salud:</strong> Reportes operacionales, permisos de descarga.</li>
              <li><strong>SETENA:</strong> Viabilidad ambiental (D1, D2), Estudios de Impacto Ambiental (EsIA), PGA.</li>
              <li><strong>Dirección De Aguas:</strong> Concesiones de aprovechamiento, permisos de vertido.</li>
            </ul>
          </div>

          <!-- Categoría 4: Certificados de Calidad Ambiental -->
          <div class="service-category-card">
            <img src="/images/icon-quality-certificates.svg" alt="Certificados de Calidad" class="category-icon">
            <h3>Certificados de Calidad Ambiental</h3>
            <ul>
              <li>Carbono Neutralidad.</li>
              <li>Bandera Azul Ecológica.</li>
              <li>Pago por Servicios Ambientales (PSA).</li>
              <li>ISO 14001 (Sistemas de Gestión Ambiental).</li>
              <li>Eficiencia Energética y Ecoeficiencia Empresarial.</li>
            </ul>
          </div>

          <!-- Categoría 5: Venta de Productos Ambientales -->
          <div class="service-category-card">
            <img src="/images/icon-eco-products.svg" alt="Productos Ambientales" class="category-icon">
            <h3>Venta de Productos Ambientales</h3>
            <ul>
              <li>Equipos de prevención y contención de derrames.</li>
              <li>Productos de limpieza ecológicos.</li>
              <li>Recipientes para residuos sólidos según normativa.</li>
              <li>Sistemas de tratamiento de agua potable y residual (comercial, industrial, residencial).</li>
            </ul>
          </div>
        </div>
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
  background: linear-gradient(120deg, var(--color-renewable-green) 0%, var(--color-renewable-teal) 100%);
  color: var(--color-background-white);
  padding: calc(var(--space-unit) * 2.5) 0;
  text-align: left;
}
.page-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-unit);
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 calc(var(--space-unit) * 0.5);
}
.page-header__text {
  flex: 2;
}
.page-header__image {
  flex: 1;
  max-width: 150px;
  text-align: right;
}
.page-header__image img {
  max-width: 100%;
  height: auto;
  /* Considerar un filtro si el SVG no es blanco o del color deseado */
  /* filter: brightness(0) invert(1); */
}

.page-header h1 {
  font-size: clamp(3rem, 5.5vw, 4.8rem);
  color: var(--color-background-white);
  margin-bottom: calc(var(--space-unit) * 0.3);
  line-height: 1.2;
}
.page-header .subtitle {
  font-size: clamp(1.7rem, 2.8vw, 2.1rem);
  color: rgba(255,255,255,0.9);
  font-weight: 300;
  max-width: 650px;
  margin: 0;
  line-height: 1.5;
}

.container {
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 calc(var(--space-unit) * 0.5);
}

.services-content-section {
  padding: calc(var(--space-unit) * 3) 0;
}

.section-title {
  text-align: center;
  font-size: clamp(2.8rem, 5vw, 3.8rem);
  color: var(--color-industrial-charcoal);
  margin-bottom: calc(var(--space-unit) * 0.5);
  position: relative;
  padding-bottom: calc(var(--space-unit) * 0.5);
}
.section-title span::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--color-renewable-green); /* Color de línea acorde al tema */
  border-radius: 2px;
}
.section-subtitle-narrow {
  font-size: 1.8rem;
  line-height: 1.7;
  color: var(--color-text-medium);
  max-width: 800px;
  margin: 0 auto calc(var(--space-unit) * 2.5) auto;
  text-align: center;
}

.services-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: calc(var(--space-unit) * 2);
}

.service-category-card {
  background-color: var(--color-background-white);
  padding: calc(var(--space-unit) * 1.8); /* Más padding interno */
  border-radius: 12px; /* Bordes más redondeados */
  box-shadow: 0 8px 25px rgba(0, 100, 50, 0.08); /* Sombra sutil con tinte verde */
  display: flex;
  flex-direction: column;
  border-top: 5px solid var(--color-renewable-green); /* Borde superior temático */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 100, 50, 0.12);
}

.category-icon {
  width: 55px;
  height: 55px;
  margin-bottom: calc(var(--space-unit) * 1);
  align-self: flex-start;
  opacity: 0.8;
  /* filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(90deg); Ejemplo */
}

.service-category-card h3 {
  font-size: 2.3rem; /* Títulos de categoría un poco más grandes */
  color: var(--color-renewable-green); /* Usar el verde principal */
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 1);
  line-height: 1.3;
}
.service-category-card p,
.service-category-card ul {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.75; /* Más interlineado para listas */
  margin-bottom: 0;
  flex-grow: 1;
}
.service-category-card ul {
  padding-left: calc(var(--space-unit) * 1.2); /* Indentación para listas */
  margin-top: calc(var(--space-unit) * 0.5);
}
.service-category-card li {
  margin-bottom: calc(var(--space-unit) * 0.4);
}
.service-category-card li strong { /* Para destacar sub-entidades en tramitología */
  font-weight: 600;
  color: var(--color-text-dark);
}


@media (max-width: 768px) {
  .page-header__container {
    flex-direction: column;
    text-align: center;
  }
  .page-header__image {
    margin-top: var(--space-unit);
    max-width: 100px;
    text-align: center;
  }
   .page-header h1, .page-header .subtitle {
    max-width: 100%;
  }
}
</style>
