<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container page-header__container">
        <div class="page-header__text">
          <h1>Servicios Ambientales Estratégicos</h1>
          <p class="subtitle">Soluciones integrales para la gestión sostenible de recursos, cumplimiento normativo y la promoción de una cultura ambiental responsable.</p>
        </div>
        <div class="page-header__image">
          <img src="/images/icon-leaf-environment.svg" alt="Sostenibilidad Ambiental">
        </div>
      </div>
    </section>

    <section class="services-content-section">
      <div class="container">
        <h2 class="section-title"><span>Consultoría y Gestión para un Impacto Positivo</span></h2>
        <p class="section-subtitle-narrow">
          Nuestra empresa ofrece las mejores herramientas para brindar asesorías y capacitaciones para el diseño de proyectos,
          así como la gestión de tecnologías aplicables en la industria, con procesos productivos y de construcción
          de la mano con la conservación de los recursos naturales. Como estrategia de intervención, siendo fundamental el respeto a nuestros proveedores y clientes, se destacan los siguientes temas:
        </p>

        <div class="environmental-services-list">
          <ServiceItem
            title="Gestión de Residuos Sólidos"
            icon="/images/icon-waste-management.svg"
            :long-description="wasteManagementDescription"
            :images="wasteManagementImages"
          />

          <ServiceItem
            title="Educación Ambiental"
            icon="/images/icon-environmental-education.svg"
            :long-description="environmentalEducationDescription"
            :images="environmentalEducationImages"
          />

          <ServiceItem
            title="Tramitología Ambiental"
            icon="/images/icon-environmental-permits.svg"
            :long-description="permittingDescription"
            :images="permittingImages"
          />

          <ServiceItem
            title="Certificados de Calidad Ambiental"
            icon="/images/icon-quality-certificates.svg"
            :long-description="qualityCertificatesDescription"
            :images="qualityCertificatesImages"
          />

          <ServiceItem
            title="Venta de Productos Ambientales"
            icon="/images/icon-eco-products.svg"
            :long-description="ecoProductsDescription"
            :images="ecoProductsImages"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ServiceItem from '@/components/ServiceItem.vue';

// Contenido para los servicios ambientales (migrado del HTML original)

const wasteManagementDescription = `
  <p>Enfocado en el reconocimiento en la variedad de residuos solidos existentes en cada establecimiento
  o por áreas funcionales, articulando una serie de líneas que minimicen los impactos ambientales e impulsando
  una variedad de instrumentos bajo la legislación vigente, se destacan:</p>
  <ul>
    <li><strong>Programas institucionales en el manejo de Residuos Sólidos:</strong> (Detalle sobre programas...)</li>
    <li><strong>Asesoría en la gestión de residuos peligrosos y especiales:</strong> Se propondrá un programa mediante capacitaciones especializadas con procedimientos y recomendaciones al personal en el manejo de residuos peligrosos o especiales de acuerdo al análisis de cada establecimiento, para conocer las propiedades fisico-químicas de las sustancias que se estan manipulando, con el fin de evitar accidentes y daños ambientales.</li>
    <li><strong>Análisis de volúmenes de generación y caracterización de Residuos sólidos:</strong> Delimitando un área (comunidad o cantón) o eligiendo una institución para estudio se determina la tasa de generación promedio ponderada de residuos, dando como resultado los kg/hab-día. Es importante hacer énfasis en que se puede demostrar que existen diferencias significativas en la composición de residuos sólidos para los sectores comerciales y residenciales, principalmente en materiales orgánicos, papel, cartón y plástico.</li>
    <li><strong>Elaboración de planes de gestión de residuos sólidos Municipales:</strong> Se plantea un método para minimizar la contaminación del medio ambiente, de la mano con la protección de la salud lo cual son temas fundamentales para la sociedad actual. Nuestro propósito es colaborar en la planificación en la gestión integral de residuos sólidos, ayudando a diagnosticar y priorizar los problemas a los que se enfrentan, propiciando una mejora continua en los procesos; así como la optimización de recursos disponibles con soluciones sostenibles.</li>
  </ul>
`;
const wasteManagementImages = [
  { src: '/images/IDS-ABMIENTE.jpg', alt: 'Gestión Ambiental IDS' },
  { src: '/images/RESIDUOSESPECIALES.jpg', alt: 'Residuos Especiales' },
  { src: '/images/recycling_recycle_bin_sorting_waste_eco_icon_129013.png', alt: 'Reciclaje' },
  { src: '/images/estrategiasambientales.png', alt: 'Estrategias Ambientales' }
];

const environmentalEducationDescription = `
  <p>Capacitación a personal de instituciones con el fin de desarrollar actitudes, valores,
  destrezas y habilidades, desde un contexto de responsabilidad, concientización
  y prevención de los impactos negativos al ambiente, enfocado en los siguientes temas:</p>
  <ul>
    <li>Manejo de residuos solidos y liquidos</li>
    <li>Identificación de impactos Ambientales</li>
    <li>Reconocer tecnologías con eficiencia energética</li>
    <li>Programa de Bandera Azul.</li>
  </ul>
`;
const environmentalEducationImages = [
  { src: '/images/educacion-ambiental.jpg', alt: 'Educación Ambiental' }
];

const permittingDescription = `
  <p>Como ente regulador, apoyamos a nuestros clientes desde lo que establece
  la administración publica en la ejecución de tramites para diferentes proyectos,
  simplificando y agilizando el proceso, mejorando la eficacia reduciendo gastos operativos,
  gestionando los siguientes permisos o certificados:</p>
  <h6>Ministerio de Salud</h6>
  <ul>
    <li>Reportes operacionales</li>
    <li>Permisos de descarga de aguas pluviales y residuales</li>
  </ul>
  <h6>Secretaria Técnica Nacional (SETENA)</h6>
  <p>Como encargada en CR de regular las actividades que causen algún impacto en el medio ambiente, con carácter de obligatoriedad que los proyectos esten alineados en el marco de desarrollo sostenible. IDS & Tecnologías S.A brinda este servicio garantizando que su proyecto cumpla con los requisitos solicitados de acuerdo a cada actividad (D1, D2, EsIA, PGA, etc.).</p>
  <h6>Dirección De Aguas</h6>
  <p>Le brindamos servicios orientados a gestionar y proteger el recurso hídrico. Lo cual es una tramitología desde Ministerio de Ambiente y Energía (MINAE), a través de La Direccion de Aguas con los siguientes tramites: (Concesiones de aprovechamiento de aguas superficiales y subterráneas, Permisos de perforación de pozos, Delimitación de áreas de protección, Permisos de vertido de aguas residuales tratadas).</p>
`;
const permittingImages = [
  { src: '/images/Ministerio de Salud.jpg', alt: 'Ministerio de Salud' },
  { src: '/images/Setena.jpg', alt: 'SETENA' },
  { src: '/images/Direccion de aguas.png', alt: 'Dirección de Aguas' }
];

const qualityCertificatesDescription = `
  <h6>Carbono Neutralidad</h6>
  <p>Se determina el potencial impacto en el calentamiento global que se genera en la comercialización de productos. Es importante saber que los gases de efecto invernadero (GEI), son todos aquellos que modifican los patrones de eliminación de radiación emitida desde la superficie de la tierra hacia el espacio. (Emisiones de GEI - Reducciones o remociones internas - Compensacion externa = 0).</p>
  <h6>Bandera Azul Ecológica</h6>
  <p>El galardón o distintivo de Bandera Azul Ecológica es uno de los objetivos que su empresa podrá conseguir con la asesoría de IDS & Tecnologias S.A, lo cual seria un premio al esfuerzo y el trabajo voluntario en la búsqueda de la sostenibilidad, siempre enfocados en la protección de los recursos naturales, propiciando un ambiente sano y ecológicamente equilibrado.</p>
  <h6>Pago por Servicios Ambientales (PSA)</h6>
  <p>Consiste en un incentivo monetario a los usuarios de suelos, de manera que al darle un buen uso a los mismos adoptando prácticas responsables (captación de carbono en siembra de árboles), puedan ofrecer un servicio ambiental, ya que ecológicamente benefician a la sociedad en general.</p>
  <h6>ISO 14001</h6>
  <p>La gestión medioambiental en las operaciones de cualquier empresa, será una herramienta para lograr un éxito sustentable. Con la implementación de esta norma que es una estandarización internacional en sus procesos, les ayudará a reducir los impactos negativos al ambiente, asi como permitir el crecimiento de su organización y mantenerse exitosa en el tiempo.</p>
  <h6>Eficiencia Energética</h6>
  <p>El consumo anual de las diferentes empresas, en la gran mayoria de los casos son posibles de reducir. IDS & Tecnologias S. A, le puede asesorar para conseguir un certificado mediante la medición energética en las condiciones normales de funcionamiento de su edificio (Calentadores de agua, calefacción, aires acondicionados, iluminación, refrigeración, entre otros).</p>
  <h6>Ecoeficiencia Empresarial</h6>
  <p>Como estrategia o método de optimización en el uso de la energía, insumos, y procesos industriales, la empresa IDS & Tecnologias S. A, les ofrece la orientación, para que en su organización pueda contar con el certificado de ecoeficiencia.</p>
`;
const qualityCertificatesImages = [
  { src: '/images/Picture30.jpg', alt: 'Carbono Neutralidad' }, // Asumo que es esta imagen
  { src: '/images/BANDERA AZUL.jpg', alt: 'Bandera Azul Ecológica' },
  { src: '/images/deal.png', alt: 'Pago por Servicios Ambientales' }, // icon-deal.png
  { src: '/images/iso.jpg', alt: 'ISO 14001' },
  { src: '/images/eficiencia.png', alt: 'Eficiencia Energética' },
  { src: '/images/Picture3.jpg', alt: 'Ecoeficiencia Empresarial' } // Asumo que es esta
];

const ecoProductsDescription = `
  <p>Comercializamos una variedad de productos para apoyar la gestión ambiental de su empresa:</p>
  <ul>
    <li>Equipo de prevención y contención de derrames de sustancias peligrosas.</li>
    <li>Productos de limpieza ecológicos y biodegradables.</li>
    <li>Recipientes o contenedores para residuos sólidos según la estrategia nacional y normativas vigentes.</li>
    <li>Sistemas de tratamiento de agua potable y residuales para uso comercial, industrial y residencial (plantas de tratamiento, filtros, purificadores).</li>
  </ul>
  <p>Comercializamos plantas de tratamiento de aguas residuales industriales con el objetivo de
  obtener los mejores resultados posibles, tanto medioambientales como económicos, para nuestros
  clientes. Ofrecemos soluciones llaves en mano en la instalación de plantas para la purificación
  de aguas de proceso, es decir, aguas que necesitan ser tratadas antes de ser incorporadas a procesos
  productivos.</p>
`;
const ecoProductsImages = [
  { src: '/images/carbononeutral.jpg', alt: 'Tratamiento de Agua' } // El HTML original repetía esta imagen para dos items de "Ventas de Productos Ambientales"
  // Añadir más imágenes si se tienen para los otros productos.
];

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
  filter: brightness(0) invert(1);
}

.page-header h1 {
  font-size: clamp(3rem, 5.5vw, 4.6rem);
  color: var(--color-background-white);
  margin-bottom: calc(var(--space-unit) * 0.3);
  line-height: 1.2;
}
.page-header .subtitle {
  font-size: clamp(1.7rem, 2.8vw, 2rem);
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
  background-color: var(--color-background-white);
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
  background-color: var(--color-renewable-green);
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

.environmental-services-list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-unit) * 1.8);
}

/* Los estilos para ServiceItem vienen de su propio componente.
   Si se necesita algún ajuste específico para cómo se ven en esta vista,
   se pueden añadir aquí con mayor especificidad o clases adicionales. */

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
