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
          de la mano con la conservación de los recursos naturales.
        </p>

        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :breakpoints="{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }"
          class="environmental-services-swiper"
        >
          <swiper-slide v-for="service in environmentalServices" :key="service.id">
            <div class="env-service-card" @click="showServiceDetails(service)">
              <img :src="service.thumbnail" :alt="service.title" class="env-service-thumbnail">
              <div class="env-service-card-content">
                <h3>{{ service.cardTitle }}</h3>
                <p>{{ service.cardSubtitle }}</p>
                <button class="btn btn-ampliar">Ampliar <span class="arrow">&rarr;</span></button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <ModalBase :show="isModalOpen" :title="currentModalData.title" @close="closeModal">
      <template #body>
        <div v-html="currentModalData.htmlContent"></div>
        <div v-if="currentModalData.images && currentModalData.images.length > 0" class="modal-images-grid">
          <div v-for="(image, index) in currentModalData.images" :key="index" class="modal-image-item">
            <img :src="image.src" :alt="image.alt || currentModalData.title + ' imagen ' + (index + 1)">
          </div>
        </div>
      </template>
    </ModalBase>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import ModalBase from '@/components/ModalBase.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const isModalOpen = ref(false);
const currentModalData = ref({
  id: '',
  title: '',
  cardTitle: '',
  cardSubtitle: '',
  htmlContent: '',
  images: [],
  thumbnail: ''
});

const showServiceDetails = (service) => {
  currentModalData.value = service;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const environmentalServices = ref([
  {
    id: 'card_GestionResiduoSolidos',
    cardTitle: 'Gestión de Residuos Sólidos',
    cardSubtitle: 'Programas institucionales y manejo integral.',
    thumbnail: '/images/IDS-ABMIENTE.jpg',
    title: 'Gestión de Residuos Sólidos: Programas Institucionales',
    htmlContent: `
      <h3>Programas institucionales en el manejo de Residuos Sólidos</h3>
      <p>Enfocado en el reconocimiento en la variedad de residuos solidos existentes en cada establecimiento o por áreas funcionales, articulando una serie de líneas que minimicen los impactos ambientales e impulsando una variedad de instrumentos bajo la legislación vigente, se destacan:</p>
      <ul>
        <li>Implementación del Plan de Manejo (Gestión circular con reuso de materiales)</li>
        <li>Gestión Administrativa</li>
        <li>Educación y sensibilización</li>
        <li>Comunicación y divulgación</li>
      </ul>`,
    images: [
      { src: '/images/RESIDUOSESPECIALES.jpg', alt: 'Residuos Sólidos Especiales' },
      { src: '/images/Biohazard-cleanup.jpg', alt: 'Limpieza de Riesgo Biológico', style: "float:right; max-width:200px; margin-left:15px;" }
    ]
  },
  {
    id: 'card_GestionResiduoSolidos2',
    cardTitle: 'Gestión de Residuos Sólidos',
    cardSubtitle: 'Asesoría en residuos peligrosos y especiales.',
    thumbnail: '/images/RESIDUOSESPECIALES.jpg',
    title: 'Gestión de Residuos Sólidos: Peligrosos y Especiales',
    htmlContent: `
      <h3>Asesoría en la gestión de residuos peligrosos y especiales</h3>
      <p>Se propondrá un programa mediante capacitaciónes especializadas con procedimientos y recomendaciones al personal en el manejo de residuos peligrosos o especiales de acuerdo al análisis de cada establecimiento, para conocer las propiedades fisico-químicas de las sustancias que se estan manipulando, con el fin de evitar accidentes y daños ambientales.</p>`,
    images: []
  },
  {
    id: 'card_GestionResiduoSolidos3',
    cardTitle: 'Gestión de Residuos Sólidos',
    cardSubtitle: 'Análisis de volúmenes y caracterización.',
    thumbnail: '/images/recycling_recycle_bin_sorting_waste_eco_icon_129013.png',
    title: 'Gestión de Residuos Sólidos: Análisis y Caracterización',
    htmlContent: `
      <h3>Análisis de volúmenes de generación y caracterización de Residuos sólidos</h3>
      <p>Delimitando un área (comunidad o cantón) o eligiendo una institución para estudio, se determina la tasa de generación promedio ponderada de residuos, dando como resultado los kg/hab-día. Es importante hacer énfasis en que se puede demostrar que existen diferencias significativas en la composición de residuos sólidos para los sectores comerciales y residenciales, principalmente en materiales orgánicos, papel, cartón y plástico.</p>`,
    images: [
      { src: '/images/tendencias-de-la-mercadotecnia.jpg', alt: 'Tendencias de Mercadotecnia', style:"max-width:200px; float:right; margin-left:15px;" },
      { src: '/images/barrerCalle.jpg', alt: 'Barrido de Calle', style:"max-width:200px; float:left; margin-right:15px;" }
    ]
  },
  {
    id: 'card_GestionResiduoSolidos4',
    cardTitle: 'Gestión de Residuos Sólidos',
    cardSubtitle: 'Planes de gestión municipales.',
    thumbnail: '/images/estrategiasambientales.png',
    title: 'Gestión de Residuos Sólidos: Planes Municipales',
    htmlContent: `
      <h3>Elaboración de planes de gestión de residuos sólidos Municipales</h3>
      <p>Se plantea un método para minimizar la contaminación del medio ambiente, de la mano con la protección de la salud lo cual son temas fundamentales para la sociedad actual. Nuestro propósito es colaborar en la planificación en la gestión integral de residuos sólidos, ayudando a diagnosticar y priorizar los problemas a los que se enfrentan, propiciando una mejora continua en los procesos; así como la optimización de recursos disponibles con soluciones sostenibles.</p>`,
    images: [
      { src: '/images/clean.jpg', alt: 'Limpieza Urbana 1', style:"max-width:200px; margin:10px auto; display:block;" },
      { src: '/images/clean2.jpg', alt: 'Limpieza Urbana 2', style:"max-width:200px; margin:10px auto; display:block;" }
    ]
  },
  {
    id: 'card_EducacionAmbiental',
    cardTitle: 'Educación Ambiental',
    cardSubtitle: 'Capacitación y sensibilización.',
    thumbnail: '/images/educacion-ambiental.jpg',
    title: 'Educación y Tramitología Ambiental',
    htmlContent: `
      <h3>Educación Ambiental</h3>
      <p>Capacitación a personal de instituciones con el fin de desarrollar actitudes, valores, destrezas y habilidades, desde un contexto de responsabilidad, concientización y prevención de los impactos negativos al ambiente, enfocado en los siguientes temas:</p>
      <ul>
        <li>Manejo de residuos solidos y liquidos</li>
        <li>Identificación de impactos Ambientales</li>
        <li>Reconocer tecnologías con eficiencia energética</li>
        <li>Programa de Bandera Azul</li>
        <li>Carbono neutralidad</li>
        <li>Ahorro energético y uso de energías limpias</li>
        <li>Uso racional de los recursos naturales</li>
        <li>Adaptacion al cambio climático</li>
        <li>Pago por servicios ambientales</li>
        <li>Construcción de jardines eco amigables con el ambiente (espacios compartidos)</li>
      </ul>`,
    images: [ { src: '/images/tramitologiaAmbiental.jpg', alt: 'Tramitología Ambiental', style:"max-width:250px; float:left; margin-right:15px;" } ]
  },
  {
    id: 'Tramitologia ambiental',
    cardTitle: 'Tramitología Ambiental',
    cardSubtitle: 'Gestiones ante Ministerio de Salud.',
    thumbnail: '/images/Ministerio de Salud.jpg',
    title: 'Tramitología Ambiental: Ministerio de Salud',
    htmlContent: `
      <h3>Ministerio de Salud</h3>
      <p>Como ente regulador, apoyamos a nuestros clientes desde lo que establece la administración publica en la ejecución de tramites para diferentes proyectos, simplificando y agilizando el proceso, mejorando la eficacia reduciendo gastos operativos, gestionando los siguientes permisos o certificados:</p>
      <ul>
        <li>Reportes operacionales</li>
        <li>Permisos de descarga de aguas pluviales y residuales</li>
        <li>Permiso de Transporte, almacenamiento, y comercialización de combustible (dirección de hidrocarburos)</li>
        <li>Permisos de ubicación de plantas de tratamiento</li>
        <li>Auditorias de los sistemas de tratamiento de aguas residuales</li>
        <li>Muestreo de aguas residuales y su respetivo analisis</li>
      </ul>`,
    images: [ { src: '/images/Ministerio de Salud.jpg', alt: 'Ministerio de Salud', style:"max-width:200px; float:left; margin-right:15px;" } ]
  },
   {
    id: 'Tramitologia ambiental2',
    cardTitle: 'Tramitología Ambiental',
    cardSubtitle: 'Gestiones ante SETENA.',
    thumbnail: '/images/Setena.jpg',
    title: 'Tramitología Ambiental: SETENA',
    htmlContent: `
      <h3>Secretaria Técnica Nacional (SETENA)</h3>
      <p>Como encargada en CR de regular las actividades que causen algún impacto en el medio ambiente, con carácter de obligatoriedad que los proyectos esten alineados en el marco de desarrollo sostenible. IDS & Tecnologías S.A brinda este servicio garantizando que su proyecto cumpla con los requisitos solicitados de acuerdo a cada actividad y nombrados a continuación:</p>
      <ul>
        <li>Viabilidades Ambientales</li><li>Formulario D1</li><li>Formulario D2</li>
        <li>Planes de Gestión Ambiental</li><li>Estudios de diagnósticos Ambientales</li>
        <li>Pronósticos planes de gestión ambiental P-PGA</li>
        <li>Declaraciones juradas de compromisos ambientales</li><li>Regencias Ambientales</li>
        <li>Seguimiento de expedientes para obtener viabilidad</li><li>Recursos de revocatoria</li>
        <li>Seguimiento de denuncias</li>
      </ul>`,
    images: [ { src: '/images/Setena.jpg', alt: 'SETENA', style:"max-width:200px; float:left; margin-right:15px;" } ]
  },
  {
    id: 'Tramitologia ambiental3',
    cardTitle: 'Tramitología Ambiental',
    cardSubtitle: 'Gestiones ante Dirección de Aguas.',
    thumbnail: '/images/Direccion de aguas.png',
    title: 'Tramitología Ambiental: Dirección De Aguas',
    htmlContent: `
      <h3>Dirección De Aguas</h3>
      <p>Le brindamos servicios orientados a gestionar y proteger el recurso hídrico. Lo cual es una tramitología desde Ministerio de Ambiente y Energía (MINAE), a través de La Direccion de Aguas con los siguientes tramites:</p>
      <ul>
        <li>Permisos de descarga de aguas de drenajes agrícolas</li><li>Permisos de obras en cause</li>
        <li>Permisos de perforación de pozos</li><li>Trámites de concesiones de aguas</li>
        <li>Pronunciamientos sobre corrientes de agua</li><li>Permisos de vertidos</li>
      </ul>`,
    images: [ { src: '/images/Direccion de aguas.png', alt: 'Dirección de Aguas', style:"max-width:200px; float:left; margin-right:15px;" } ]
  },
  {
    id: 'Certificado de calidad ambiental',
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'Carbono Neutralidad.',
    thumbnail: '/images/Picture30.jpg',
    title: 'Certificado de Calidad Ambiental: Carbono Neutralidad',
    htmlContent: `
      <h3>Carbono Neutralidad</h3>
      <p>Se determina el potencial impacto en el calentamiento global que se genera en la comercialización de productos. Es importante saber que los gases de efecto invernadero (GEI), son todos aquellos que modifican los patrones de eliminación de radiación emitida desde la superficie de la tierra hacia el espacio los de mayor importancia son:</p>
      <ul><li>Dióxido de Carbono (CO2)</li><li>Metano (CH4)</li><li>Óxido de Nitroso(N2O)</li><li>Hidrofluorocarbonos (HFC)</li><li>Perfluorocarbonos (PFC)</li><li>Hexafluoruro de azufre(SF6)</li></ul>
      <p>Se requiere de la estimación precisa de la huella de carbono del producto (proceso y actividad), así como de la realización de acciones internas o externas para disminuir esta huella haciendo cumplir la siguiente ecuación:</p>
      <p style="text-align:center; font-weight:bold; font-size:1.1em; color:var(--color-hydrogen-blue);">Emisiones de GEI - Reducciones o remociones internas - Compensación externa = 0</p>`,
    images: [
      { src: '/images/Picture30.jpg', alt: 'Proceso Carbono Neutralidad', style:"max-width:250px; float:left; margin-right:15px;" },
      { src: '/images/carbononeutral.jpg', alt: 'Certificado Carbono Neutral', style:"max-width:250px; float:right; margin-left:15px;" }
    ]
  },
  {
    id: 'Certificado de calidad ambiental2',
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'Bandera Azul Ecológica.',
    thumbnail: '/images/BANDERA AZUL.jpg',
    title: 'Certificado de Calidad Ambiental: Bandera Azul Ecológica',
    htmlContent: `<p>El galardón o distintivo de Bandera Azul Ecológica es uno de los objetivos que su empresa podrá conseguir con la asesoría de IDS & Tecnologias S.A , lo cual seria un premio al esfuerzo y el trabajo voluntario en la búsqueda de la sostenibilidad, siempre enfocados en la protección de los recursos naturales, propiciando un ambiente sano y ecológicamente equilibrado.</p>`,
    images: [{ src: '/images/BANDERA AZUL.jpg', alt: 'Bandera Azul Ecológica', style:"max-width:250px; margin:10px auto; display:block;" }]
  },
  {
    id: 'Certificado de calidad ambiental3', // Pago por Servicios Ambientales
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'Pago por Servicios Ambientales (PSA).',
    thumbnail: '/images/deal.png',
    title: 'Certificado de Calidad Ambiental: Pago por Servicios Ambientales',
    htmlContent: `<p>Consiste en un incentivo monetario a los usuarios de suelos, de manera que al darle un buen uso a los mismos adoptando prácticas responsables (captación de carbono en siembra de árboles), puedan ofrecer un servicio ambiental, ya que ecológicamente benefician a la sociedad en general. Se puede llevar a cabo bajo cinco rasgos distintivos, para IDS & Tecnologias S.A. será un gusto brindar acompañamiento y asesoría para optar por este gran instrumento económico.</p>`,
    images: [{ src: '/images/Pago por servicios ambientales.jpg', alt: 'Pago por Servicios Ambientales', style:"max-width:250px; margin:10px auto; display:block;" }]
  },
  {
    id: 'Certificado de calidad ambiental4',
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'ISO 14001 Gestión Ambiental.',
    thumbnail: '/images/iso.jpg',
    title: 'Certificado de Calidad Ambiental: ISO 14001',
    htmlContent: `
      <h3>ISO 14001</h3>
      <p>La gestión medioambiental en las operaciones de cualquier empresa, será una herramienta para lograr un éxito sustentable. Con la implementación de esta norma que es una estandarización internacional en sus procesos, les ayudará a reducir los impactos negativos al ambiente, asi como permitir el crecimiento de su organización y mantenerse exitosa en el tiempo, logrando los siguientes beneficios:</p>
      <ul>
        <li>Reducir el desperdicio y el uso de la energía</li>
        <li>Disminuir costos de operación en su organización</li>
        <li>Oportunidades de negocio con una visión de responsabilidad ambiental</li>
        <li>Confiabilidad de los clientes por el compromiso con la legislación vigente</li>
      </ul>`,
    images: [{ src: '/images/iso.jpg', alt: 'Certificación ISO 14001', style:"max-width:250px; margin:10px auto; display:block;" }]
  },
  {
    id: 'Certificado de calidad ambiental5',
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'Certificación de Eficiencia Energética.',
    thumbnail: '/images/eficiencia.png',
    title: 'Certificado de Calidad Ambiental: Eficiencia Energética',
    htmlContent: `
      <h3>Eficiencia Energética</h3>
      <p>El consumo anual de las diferentes empresas, en la gran moyoria de los casos son posibles de reducir, en este sentido IDS & Tecnologias S. A ,le puede asesorar para conseguir un certificado mediante la medición energética en las condiciones normales de funcionamiento de su edificio ,desde diferentes variables como: Calentadores de agua, calefacción, aires acondicionados, iluminación, refrigeración, entre otros.</p>`,
    images: [{ src: '/images/eficiencia-energetica.jpg', alt: 'Eficiencia Energética en Edificios', style:"max-width:250px; margin:10px auto; display:block;" }]
  },
  {
    id: 'Certificado de calidad ambiental6',
    cardTitle: 'Certificados de Calidad',
    cardSubtitle: 'Certificación en Ecoeficiencia Empresarial.',
    thumbnail: '/images/Picture3.jpg',
    title: 'Certificado de Calidad Ambiental: Ecoeficiencia Empresarial',
    htmlContent: `
      <h3>Ecoeficiencia Empresarial</h3>
      <p>Como estrategia o método de optimización en el uso de la energía, insumos, y procesos industriales, la empresa IDS & Tecnologias S. A, les ofrece la orientación, para que en su organización pueda contar con el certificado de ecoeficiencia, logrando alcanzar los siguientes beneficios:</p>
      <ul>
        <li>Reducir costos de operación.</li>
        <li>Minimizar la emisión de contaminantes al ambiente.</li>
        <li>Obtener ingresos con el reciclaje y la reutilización de residuos.</li>
        <li>Gozar de prestigio entre distribuidores y clientela.</li>
        <li>Mantener un ambiente laboral agradable.</li>
      </ul>`,
    images: [{ src: '/images/eficiencia.jpg', alt: 'Ecoeficiencia en la Empresa', style:"max-width:250px; margin:10px auto; display:block;" }]
  },
   {
    id: 'Ventas de Productos ambientales',
    cardTitle: 'Venta de Productos Ambientales',
    cardSubtitle: 'Tratamiento de agua potable y residual.',
    thumbnail: '/images/tratamientoAguas.png',
    title: 'Productos: Tratamiento de Agua Potable y Residual',
    htmlContent: `
      <h3>Tratamiento de agua potable y residuales (comercial,industrial y residencial)</h3>
      <p>Comercializamos plantas de tratamiento de aguas residuales industriales con el objetivo de obtener los mejores resultados posibles, tanto medioambientales como económicos. Ofrecemos soluciones llaves en mano en la instalación de plantas para la purificación de aguas de proceso, es decir, aguas que necesitan ser tratadas antes de ser incorporadas a procesos productivos. Contamos con las mejores tecnologías disponibles para la adecuación de las aguas residuales generadas en los procesos industriales a los límites de vertido establecidos por leyes actuales.</p>
      <ul>
        <li>Bombeo y trasiego de agua</li><li>Filtración de sedimentos</li><li>Filtración de otros contaminantes</li>
        <li>Intercambio iónico y desionización</li><li>Osmosis inversa, nano y ultraﬁltración</li><li>Tecnología con lámparas UV</li>
        <li>Generadores de ozono y ClO2</li><li>Control y monitoreo en línea</li><li>Equipos de tratamiento de aguas</li>
        <li>Equipos de dosiﬁcación</li><li>Calderas y calentadores de agua</li><li>Torres de enfriamiento</li>
      </ul>`,
    images: [
      { src: '/images/tratamientoAguas1.png', alt: 'Sistema de Tratamiento de Agua 1', style:"max-width:200px; float:left; margin-right:15px;" },
      { src: '/images/tratamientoAguas.png', alt: 'Sistema de Tratamiento de Agua 2', style:"max-width:200px; float:right; margin-left:15px;" },
      { src: '/images/Picture25.png', alt: 'Equipos de Tratamiento', style:"max-width:200px; display:block; margin:10px auto;" }
    ]
  },
  {
    id: 'Ventas de Productos ambientales2',
    cardTitle: 'Venta de Productos Ambientales',
    cardSubtitle: 'Equipos, limpieza y recipientes.',
    thumbnail: '/images/icon-eco-products.svg',
    title: 'Productos Ambientales Adicionales',
    htmlContent: `
      <h3>Otros Productos Ambientales</h3>
      <ul>
        <li>Equipo de prevención y contención de derrames de sustancias peligrosas</li>
        <li>Productos de limpieza ecológicos y biodegradables</li>
        <li>Recipientes o contenedores para residuos sólidos según la estrategia nacional.</li>
      </ul>`,
    images: []
  }
]);

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

.environmental-services-swiper {
  padding-bottom: calc(var(--space-unit) * 2); /* Espacio para la paginación del Swiper */
}

.env-service-card {
  background-color: var(--color-background-light-gray);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%; /* Asegurar que todas las tarjetas en el swiper tengan la misma altura */
}
.env-service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 22px rgba(0,0,0,0.11);
}
.env-service-thumbnail {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.env-service-card-content {
  padding: calc(var(--space-unit) * 1.2);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.env-service-card-content h3 {
  font-size: 2rem;
  color: var(--color-renewable-green);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 0.5);
  line-height: 1.3;
}
.env-service-card-content p {
  font-size: 1.5rem;
  color: var(--color-text-medium);
  line-height: 1.6;
  margin-bottom: calc(var(--space-unit) * 1);
  flex-grow: 1;
}
.btn-ampliar {
  display: inline-block;
  align-self: flex-start;
  background-color: transparent;
  color: var(--color-hydrogen-blue);
  padding: calc(var(--space-unit)*0.3) calc(var(--space-unit)*0.6);
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.4rem;
  border-radius: 5px;
  border: 2px solid var(--color-hydrogen-blue);
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;
  margin-top: auto;
}
.btn-ampliar:hover {
  background-color: var(--color-hydrogen-blue);
  color: var(--color-background-white);
}
.btn-ampliar .arrow {
  margin-left: 0.5em;
  transition: transform 0.2s ease-out;
}
.btn-ampliar:hover .arrow {
    transform: translateX(3px);
}


.modal-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-unit);
  margin-top: var(--space-unit);
}
.modal-image-item img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

/* Swiper Navigation/Pagination Styles (si se personalizan) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--color-hydrogen-blue);
  transition: opacity 0.2s ease;
}
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  opacity: 0.7;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-hydrogen-blue);
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
