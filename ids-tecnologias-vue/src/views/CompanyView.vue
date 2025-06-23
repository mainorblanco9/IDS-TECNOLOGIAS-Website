<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container page-header__container">
        <div class="page-header__text">
          <h1>Conoce Nuestra Empresa</h1>
          <p class="subtitle">IDS & Tecnologías S.A.: Innovación, Desarrollo y Soluciones para un futuro industrial y ambiental sostenible.</p>
        </div>
         <div class="page-header__image">
          <img src="/images/icon-company-building.svg" alt="Edificio Empresa IDS"> <!-- Placeholder Icon -->
        </div>
      </div>
    </section>

    <section class="company-content-section">
      <div class="container">
        <div class="company-intro-layout">
          <div class="company-intro-text">
            <h2 class="section-title-inline"><span>IDS & Tecnologías S.A.</span></h2>
            <p>
              Somos una empresa orgullosamente Guanacasteca, dedicada a brindar servicios de vanguardia en la industria. Nuestro compromiso es asesorar a nuestros clientes con ideas tecnológicas innovadoras, buscando soluciones eficientes y sostenibles para optimizar sus procesos productivos.
            </p>
            <p>
              Ayudamos a nuestros usuarios a seleccionar e implementar el equipo apropiado para cada aplicación, impulsando la automatización de procesos. Nos caracterizamos por nuestra sólida experiencia técnica y profesional, ofreciendo respuestas específicas a sus necesidades en medición, control, presión, vacío, temperatura, neumática, seguridad y manejo de fluidos, siempre colaborando con marcas líderes a nivel mundial.
            </p>
          </div>
          <div class="company-intro-image">
            <img src="/images/team-ids-placeholder.jpg" alt="Equipo de IDS Tecnologías o proyecto destacado">
            <!-- Idealmente una foto del equipo, instalaciones o un proyecto emblemático -->
          </div>
        </div>

        <div class="mission-vision-grid">
          <div class="mission-vision-card">
            <img src="/images/icon-mission.svg" alt="Misión" class="mv-icon">
            <h3>Nuestra Misión</h3>
            <p>
              Satisfacer las necesidades de nuestros clientes y construir relaciones de lealtad a largo plazo. Fomentamos la innovación y la mejora continua dentro de nuestra organización para ofrecer siempre los mejores resultados, con ideas disruptivas para el perfeccionamiento de procesos. Utilizamos la tecnología como nuestro principal aliado, manteniendo un firme compromiso con el respeto por las buenas prácticas ambientales y la sostenibilidad.
            </p>
          </div>
          <div class="mission-vision-card">
            <img src="/images/icon-vision.svg" alt="Visión" class="mv-icon">
            <h3>Nuestra Visión</h3>
            <p>
              Ser el referente en la industria al ofrecer soluciones y tecnología de punta para el control y optimización de procesos en diversas áreas. Estamos dedicados a proporcionar a nuestros clientes soluciones tecnológicas que superen sus expectativas y logren su plena satisfacción. Trabajamos en estrecha colaboración con ellos para proveer equipos y productos innovadores de la más alta calidad, a precios competitivos y con una logística de entrega eficiente e inmediata.
            </p>
          </div>
        </div>

        <!-- Opcional: Video de la empresa -->
        <!-- <div class="company-video-wrapper">
          <h2 class="section-title"><span>Descubre Más en Video</span></h2>
          <div class="video-responsive-container">
            <iframe
              width="560"
              height="315"
              src="https_//www.youtube.com/embed/VIDEO_ID_AQUI"
              title="Video de la Empresa IDS Tecnologías"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div> -->

      </div>
    </section>
  </main>
</template>

<script setup>
// Lógica para CompanyView si es necesaria
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background: linear-gradient(120deg, var(--color-industrial-charcoal) 0%, #4a5568 100%); /* Tonos grises oscuros */
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
  max-width: 130px;
  text-align: right;
}
.page-header__image img {
  max-width: 100%;
  height: auto;
  filter: brightness(0) invert(1); /* Para que el SVG/icono sea blanco */
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

.company-content-section {
  padding: calc(var(--space-unit) * 3) 0;
  background-color: var(--color-background-white);
}

.company-intro-layout {
  display: grid;
  grid-template-columns: 1fr; /* Default a una columna */
  gap: calc(var(--space-unit) * 2.5);
  align-items: center;
  margin-bottom: calc(var(--space-unit) * 3);
}

@media (min-width: 768px) {
  .company-intro-layout {
    grid-template-columns: 3fr 2fr; /* Texto más ancho que la imagen */
  }
  .company-intro-image {
     order: 1; /* Imagen a la derecha en desktop */
  }
}

.section-title-inline {
  font-size: clamp(2.6rem, 4.5vw, 3.6rem);
  color: var(--color-industrial-charcoal);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 1);
  padding-bottom: calc(var(--space-unit) * 0.3);
  border-bottom: 3px solid var(--color-hydrogen-blue); /* Línea debajo del título */
  display: inline-block; /* Para que el borde solo ocupe el ancho del texto */
}
.company-intro-text p {
  font-size: 1.7rem;
  line-height: 1.8;
  color: var(--color-text-medium);
  margin-bottom: var(--space-unit);
  text-align: justify;
}
.company-intro-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--space-unit) * 2);
  margin-bottom: calc(var(--space-unit) * 2);
}

.mission-vision-card {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 2);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.mv-icon {
  width: 60px;
  height: 60px;
  margin-bottom: var(--space-unit);
  opacity: 0.7;
}
.mission-vision-card h3 {
  font-size: 2.4rem;
  color: var(--color-industrial-charcoal);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 0.8);
}
.mission-vision-card p {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.7;
  margin-bottom: 0;
}

.company-video-wrapper {
  margin-top: calc(var(--space-unit) * 3);
  text-align: center;
}
.company-video-wrapper .section-title {
   margin-bottom: calc(var(--space-unit) * 1.5);
}
.video-responsive-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px; /* Limitar ancho del video */
  margin: 0 auto;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
.video-responsive-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
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
  .section-title-inline {
    display: block; /* Título ocupa todo el ancho en móvil */
    text-align: center;
    border-bottom-width: 0; /* Opcional: quitar línea en móvil o centrarla */
  }
  .section-title-inline::after { /* Si se usa la línea con ::after */
    /* left: 50%; transform: translateX(-50%); */
  }
}
</style>
