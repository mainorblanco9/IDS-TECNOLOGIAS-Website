<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container page-header__container">
        <div class="page-header__text">
          <h1>Servicios Industriales Avanzados</h1>
          <p class="subtitle">Soluciones tecnológicas y de ingeniería para optimizar la eficiencia, seguridad y sostenibilidad de sus procesos productivos.</p>
        </div>
        <div class="page-header__image">
          <img src="/images/icon-industrial-gear.svg" alt="Engranaje Industrial">
        </div>
      </div>
    </section>

    <section class="services-content-section">
      <div class="container">
        <h2 class="section-title"><span>Nuestra Oferta para la Industria</span></h2>
        <p class="section-subtitle-narrow">
          IDS & Tecnologías S.A. se especializa en brindar servicios integrales, asesorando a nuestros clientes con ideas tecnológicas innovadoras. Nos enfocamos en automatización, medición, control y seguridad, trabajando con marcas líderes a nivel mundial para impulsar la industria hacia el futuro.
        </p>

        <div class="industrial-services-list">
          <ServiceItem
            title="Sistemas Autónomos de Generación de Oxígeno y Gases"
            icon="/images/icon-oxygen-generator.svg"
            short-description="Innovación tecnológica en sistemas autónomos para generación de oxígeno y otros gases en procesos industriales."
            :long-description="oxygenServiceDescription"
            :images="oxygenServiceImages"
          />

          <ServiceItem
            title="Calibración, Mantenimiento y Asistencia Técnica"
            icon="/images/icon-calibration.svg"
            short-description="Servicios especializados con personal de gran experiencia y uso de instrumentos precisos."
            :long-description="calibrationServiceDescription"
            :images="calibrationServiceImages"
          />

          <ServiceItem
            title="Actuadores Neumáticos, Hidráulicos y Válvulas Industriales"
            icon="/images/icon-valves-actuators.svg"
            short-description="Comercialización de una amplia gama de actuadores y válvulas para diversas aplicaciones industriales."
            :long-description="actuatorsServiceDescription"
            :images="actuatorsServiceImages"
          />

          <ServiceItem
            title="Sistemas SCADA y Data Loggers"
            icon="/images/icon-scada.svg"
            short-description="Soluciones para control de producción y monitoreo HMI para personal técnico, administrativo o gerencial."
            :long-description="scadaServiceDescription"
            :images="scadaServiceImages"
          />

          <ServiceItem
            title="Montaje de Sistemas de Control y Potencia"
            icon="/images/icon-control-power-systems.svg"
            short-description="Excelencia en montajes eléctricos y tableros de fuerza motriz bajo normativas nacionales e internacionales."
            :long-description="controlPowerServiceDescription"
            :images="controlPowerServiceImages"
          />

          <ServiceItem
            title="Automatización, Instrumentación y Control de Procesos"
            icon="/images/icon-automation-instrumentation.svg"
            short-description="Desarrollo e implementación de sistemas de control de máquinas, seguridad y telemetría."
            :long-description="automationServiceDescription"
            :images="automationServiceImages"
          />

          <ServiceItem
            title="Compresores de Aire, Secadores y Bombas de Vacío"
            icon="/images/icon-compressors-vacuum.svg"
            short-description="Suministro de equipos líderes mundiales para tratamiento de aire y vacío industrial."
            :long-description="compressorsServiceDescription"
            :images="compressorsServiceImages"
          />

          <ServiceItem
            title="Tecnologías del Hidrógeno para la Industria"
            icon="/images/icon-hydrogen-tech-industrial.svg"
            short-description="Soluciones de descarbonización mediante hidrógeno verde. Haz clic para más detalles."
            :long-description="hydrogenIndustrialServiceDescription"
            :is-highlight="true"
            @header-click="navigateToHydrogenPage"
          />

          <ServiceItem
            title="Sistemas de Bombeo y Trasiego de Agua"
            icon="/images/icon-water-pumping.svg"
            short-description="Comercialización de bombas para aplicaciones domésticas, comerciales e industriales y sistemas de presión constante."
            :long-description="waterPumpingServiceDescription"
            :images="waterPumpingServiceImages"
          />

          <ServiceItem
            title="Calderas para Producción de Vapor o Agua Caliente"
            icon="/images/icon-boilers.svg"
            short-description="Calderas de alta eficiencia (15-800 hp, hasta 300 psig) para diversas aplicaciones industriales."
            :long-description="boilersServiceDescription"
            :images="boilersServiceImages"
          />

          <ServiceItem
            title="Sistemas de Tanques Hidroneumáticos"
            icon="/images/icon-hydro-pneumatic.svg"
            short-description="Instalación y mantenimiento de tanques para mantener presión óptima y constante en redes hidráulicas."
            :long-description="hydroPneumaticTanksServiceDescription"
            :images="hydroPneumaticTanksServiceImages"
          />

          <ServiceItem
            title="Plantas de Emergencia, UPS y Bancos de Baterías"
            icon="/images/icon-emergency-power.svg"
            short-description="Garantice energía eléctrica estable ante cortes o fallos con nuestras soluciones de respaldo."
            :long-description="emergencyPowerServiceDescription"
            :images="emergencyPowerServiceImages"
          />

          <ServiceItem
            title="Industria Metalmecánica y Montajes"
            icon="/images/icon-metal-mechanic.svg"
            short-description="Servicios de construcción, reparación y montaje de tuberías y estructuras con soldadores calificados."
            :long-description="metalMechanicServiceDescription"
            :images="metalMechanicServiceImages"
          />

          <ServiceItem
            title="Sistemas de Tratamiento de Agua Industrial"
            icon="/images/icon-water-treatment-industrial.svg"
            short-description="Soluciones innovadoras para la canalización, trasiego, medición, control y monitoreo en tratamiento de aguas."
            :long-description="waterTreatmentServiceDescription"
            :images="waterTreatmentServiceImages"
          />

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ServiceItem from '@/components/ServiceItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToHydrogenPage = () => {
  router.push('/hidrogeno');
};

// Contenido para los servicios (migrado del HTML original)
const oxygenServiceDescription = `
  <h6>Compresores alternativos / Compresores sin aceite / Compresores de tornillo lubricados</h6>
  <p>IDS innovación tecnología Ofrecemos proyectos completos llave en mano para
  sistemas de tuberías de gases medicinales tales como oxigeno hospitalario. Equipos diseñados
  y fabricados por empresa con amplia trayectoria con precisión quirúrgica y el máximo detalle,
  para profesionales, por profesionales.
  Explore nuestra gama de alta calidad de los Sistemas de Oxígeno Médico.</p>
`;
const oxygenServiceImages = [
  { src: '/images/OxigenoMedico.png', alt: 'Sistema de Oxígeno Médico' },
  { src: '/images/oxigeno.png', alt: 'Generador de Oxígeno Industrial' }
];

const calibrationServiceDescription = `
  <h6>Detalle de servicios</h6>
  <p>Disponemos de recurso humano especializado, con gran experiencia en el uso de los
  instrumentos precisos, además de una larga lista de proveedores nacionales e internacionales.
  En los suministros de equipos garantizamos compromiso de mantenimiento y actualización de
  sistemas con garantías de fábrica.</p>
`;
const calibrationServiceImages = [
  { src: '/images/Picture5.jpg', alt: 'Servicio de Calibración 1' },
  { src: '/images/Picture6.jpg', alt: 'Servicio de Calibración 2' }
];

const actuatorsServiceDescription = `
  <p>Válvulas tipo globo, aguja, compuerta, bola, mariposa, tapón, tapón excéntrico, membrana,
  angulares, válvulas cheque, válvulas reguladoras de presión,
  válvulas de alivio, válvulas ventosas de simple, doble y triple efecto, entre otras.</p>
`;
const actuatorsServiceImages = [
  { src: '/images/Picture7.jpg', alt: 'Actuadores y Válvulas 1' },
  { src: '/images/Calibracion.jpg', alt: 'Válvulas Industriales' }
];

const scadaServiceDescription = `
  <p>El sistema SCADA es una aplicación de software especialmente diseñada para
  funcionar sobre computadores, generalmente en la parte de control de producción,
  proporcionando comunicación con los dispositivos de campo como bombas, motores, etc.
  Controlando el proceso de forma automática desde pantallas de ordenador a las cuales llamaremos HMI
  (Interfaz Humano Máquina). Para uso personal técnico, Administrativos o de la Gerencia.</p>
  <ul>
    <li>Reporte de Alarmas en tiempo Real</li>
    <li>Vista de historial de eventos</li>
    <li>Uso portable desde su celular o la oficina</li>
    <li>Revisa tu proceso las 24 horas al día (generación de gráficos, variables de proceso, etc.)</li>
  </ul>
`;
const scadaServiceImages = [
  { src: '/images/Picture9.png', alt: 'Sistema SCADA HMI' },
  { src: '/images/scada.jpg', alt: 'Interfaz SCADA' }
];

const controlPowerServiceDescription = `
  <p>Garantizamos excelencia y calidad en montajes eléctricos, tableros de fuerza Motriz,
  ensamblados para cumplir normas nacionales e internacionales,
  lo que nos permite brindar productos de calidad, seguros, confiables,
  con diseños modulares que permitan una mejor
  utilización del espacio y proyectados para futuras ampliaciones.</p>
`;
const controlPowerServiceImages = [
  { src: '/images/Picture12.jpg', alt: 'Montaje Eléctrico Industrial' },
  { src: '/images/Picture10.jpg', alt: 'Tablero de Fuerza Motriz' }
];

const automationServiceDescription = `
  <p>Suministramos servicios y equipos aplicables a una amplia
  gama de las actividades industriales. Desarrollando e implementando
  sistemas de control de máquinas, sistemas de seguridad, sistemas de telemetría.</p>
  <p>Trabajamos integrando marcas de primera línea:</p>
  <ul>
    <li>Diseño de arquitecturas de sistemas.</li>
    <li>Ingeniería básica y de detalle.</li>
    <li>Configuración, pruebas, instalación, comisionado y puesta en servicio.</li>
    <li>Electricidad.</li>
    <li>Provisión y configuración de instrumentación.</li>
  </ul>
`;
const automationServiceImages = [
  { src: '/images/Picture15.jpg', alt: 'Automatización Industrial' }
];

const compressorsServiceDescription = `
  <p>Marcas como Gardner Denver ha sido una empresa líder mundial en el suministro de compresores,
  sopladores y bombas de vacío. Los fabricantes de equipo original (OEM)
  y los usuarios de todo el mundo confían en las soluciones comerciales.</p>
`;
const compressorsServiceImages = [
  { src: '/images/Gardner.png', alt: 'Compresor Gardner Denver' },
  { src: '/images/Picture21.png', alt: 'Sistema de Tratamiento de Aire' }
];

const hydrogenIndustrialServiceDescription = `
  <p>Impulsamos la descarbonización de la industria mediante la integración de tecnologías de hidrógeno verde. Ofrecemos desde consultoría hasta la implementación de sistemas completos, incluyendo la adaptación de procesos existentes y el desarrollo de nueva infraestructura para el uso de hidrógeno como combustible o materia prima.</p>
  <p>Nuestras soluciones abarcan la generación de H2 in-situ, almacenamiento, y su aplicación en sectores como la producción de acero verde, amoniaco, refinerías y más. <router-link to="/hidrogeno" class="inline-link">Visita nuestra sección de Hidrógeno para más detalles.</router-link></p>
`;

const waterPumpingServiceDescription = `
  <p>Comercializamos bombas para aplicaciones domésticas,
  comerciales e industriales, Sumergibles, verticales, horizontales,
  aguas residuales, para piscina, para sistemas de incendio entre otras aplicaciones.
  Sistemas de presión constante equipos de fabricantes líderes mundiales,
  para manipulación y gestión de fluidos.</p>
`;
const waterPumpingServiceImages = [
  { src: '/images/bombeo.png', alt: 'Sistema de Bombeo' },
  { src: '/images/trasiego.jpg', alt: 'Bomba de Trasiego de Agua' }
];

const boilersServiceDescription = `
  <p>Calderas para producción de vapor o agua caliente, 15-800 hp, presiones a 300 psig, diseños
  de dos y cuatro pasos. 81% de eficiencia mínima. Puertas traseras Davited. Mantenimiento
  mínimo con construcción robusta para una vida extralarga.
  Paquete de caldera / quemador con clasificación UL para gas de combustión,
  aceite y gas / aceite combinado. Probado en fábrica y verificado para una eficiencia operativa óptima.</p>
`;
const boilersServiceImages = [
  { src: '/images/Picture24.jpg', alt: 'Caldera Industrial de Vapor' },
  { src: '/images/Picture25.png', alt: 'Componentes de Caldera' }
];

const hydroPneumaticTanksServiceDescription = `
  <p>Los sistemas hidroneumáticos fueron diseñados para mantener una presión óptima y
  constante en toda la red hidráulica. Los mismos deben ser resistentes a la intemperie,
  contar con un funcionamiento silencioso y garantías como mínimo de 1 año.</p>
`;
const hydroPneumaticTanksServiceImages = [
  { src: '/images/hidroneumatico.jpg', alt: 'Tanque Hidroneumático' },
  { src: '/images/hidroneumatico1.png', alt: 'Sistema Hidroneumático' }
];

const emergencyPowerServiceDescription = `
  <p>Garantice una fuente de energía eléctrica estable, ante cortes o fallos en el suministro.
  Fabricados con estructuras silenciadas, equipadas con los mejores motores y alternadores.
  La UPS sirve como respaldo del sistema de control digital (DCS) para mantener fluidas las
  operaciones de la planta hasta que se pueda apagar.</p>
`;
const emergencyPowerServiceImages = [
  { src: '/images/plantasEmergencia.jpg', alt: 'Planta de Emergencia' },
  { src: '/images/plantasEmergencia1.jpg', alt: 'Banco de Baterías UPS' }
];

const metalMechanicServiceDescription = `
  <p>Contamos con alianzas con talleres locales y empresas de servicio construcción
  de estructuras nuevas, reparación, montajes de tuberías de acero al carbón,
  a acero inoxidable con soldadores calificados y certificados en industria en general,
  llevamos un control desde su diseño, fabricación e Instalación. De igual forma ofrecemos
  el servicio de mantenimiento de las mismas (servicios de topografía, planos entre otros).</p>
`;
const metalMechanicServiceImages = [
  { src: '/images/montaje.jpg', alt: 'Montaje Metalmecánico' },
  // La imagen 'plantasEmergencia1.jpg' estaba repetida en el HTML original para este servicio, la omito aquí.
  // Si hay otra imagen específica, se añadiría. Por ahora, una sola imagen.
];

const waterTreatmentServiceDescription = `
  <p>Comercializamos plantas de tratamiento de aguas residuales industriales, con resultados medioambientales positivos,
  así como económicos. Ofrecemos soluciones llaves en mano en la instalación de plantas para la purificación de aguas
  que necesitan ser tratadas antes de ser incorporadas a procesos productivos.</p>
  <ul>
    <li>Bombeo y trasiego de agua</li>
    <li>Filtración de otros contaminantes</li>
    <li>Osmosis inversa, nano y ultrafiltración</li>
    <li>Tecnología con lámparas UV</li>
    <li>Control y monitoreo en línea</li>
    <li>Equipos de tratamiento de aguas</li>
    <li>Torres de enfriamiento</li>
  </ul>
`;
const waterTreatmentServiceImages = [
  { src: '/images/tratamientoAguas.png', alt: 'Planta de Tratamiento de Agua' },
  { src: '/images/tratamientoAguas1.png', alt: 'Sistema de Filtración Industrial' }
];

</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background: linear-gradient(120deg, var(--color-industrial-dark-gray) 0%, var(--color-industrial-charcoal) 100%);
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
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(100%);
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
  background-color: var(--color-background-light-gray);
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
  background-color: var(--color-industrial-dark-gray);
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

.industrial-services-list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-unit) * 1.8);
}

.inline-link {
  color: var(--color-hydrogen-blue);
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.2s ease;
}
.inline-link:hover {
  color: var(--color-renewable-teal);
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
