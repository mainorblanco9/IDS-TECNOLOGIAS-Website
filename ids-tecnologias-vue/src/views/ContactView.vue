<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container page-header__container">
        <div class="page-header__text">
          <h1>Ponte en Contacto</h1>
          <p class="subtitle">Estamos listos para escuchar sobre tu proyecto o responder tus consultas. Completa el formulario o utiliza nuestros datos de contacto directo.</p>
        </div>
        <div class="page-header__image">
          <img src="/images/icon-contact-mail.svg" alt="Contacto IDS Tecnologías"> <!-- Placeholder Icon -->
        </div>
      </div>
    </section>

    <section class="contact-content-section">
      <div class="container contact-layout">
        <div class="contact-form-container">
          <h2 class="section-title-inline"><span>Envíanos un Mensaje</span></h2>
          <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <div class="form-group">
              <label for="nombre">Empresa / Nombre Completo <span class="required-star">*</span></label>
              <input type="text" id="nombre" v-model="formData.nombre" placeholder="Ej: Industria ABC / Ana Pérez" required>
            </div>
            <div class="form-group">
              <label for="correo">Correo Electrónico <span class="required-star">*</span></label>
              <input type="email" id="correo" v-model="formData.correo" placeholder="tu.correo@ejemplo.com" required>
            </div>
             <div class="form-group">
              <label for="telefono">Teléfono (Opcional)</label>
              <input type="tel" id="telefono" v-model="formData.telefono" placeholder="Ej: +506 88887777">
            </div>
            <div class="form-group">
              <label for="asunto">Asunto (Opcional)</label>
              <input type="text" id="asunto" v-model="formData.asunto" placeholder="Ej: Consulta sobre electrolizadores">
            </div>
            <div class="form-group">
              <label for="mensaje">Tu Mensaje / Solicitud <span class="required-star">*</span></label>
              <textarea id="mensaje" v-model="formData.mensaje" rows="7" placeholder="Describe tu consulta o el servicio que te interesa..." required></textarea>
            </div>
            <div class="form-group form-submit-group">
              <button type="submit" class="btn btn--submit-contact" :disabled="isSubmitting">
                <span v-if="isSubmitting">
                  <span class="spinner"></span> Enviando...
                </span>
                <span v-else>Enviar Mensaje</span>
              </button>
            </div>
          </form>
          <div v-if="submitMessage" class="submit-message" :class="submitStatus">
            <p>{{ submitMessage }}</p>
          </div>
        </div>

        <aside class="contact-info-sidebar">
          <div class="contact-info-card">
            <h3>Información Directa</h3>
            <p class="contact-detail">
              <img src="/images/icon-phone.svg" alt="Teléfono" class="contact-icon">
              <strong>Teléfono:</strong> <a href="tel:+50689207049">(+506) 8920-7049</a>
            </p>
            <p class="contact-detail">
              <img src="/images/icon-email.svg" alt="Email" class="contact-icon">
              <strong>Email:</strong> <a href="mailto:info@idstecnologias.com">info@idstecnologias.com</a>
            </p>
            <p class="contact-detail">
              <img src="/images/icon-location-pin.svg" alt="Ubicación" class="contact-icon">
              <strong>Ubicación:</strong> Guanacaste, Costa Rica.
            </p>
            <p class="contact-detail-note">
              Para visitas o reuniones, por favor coordina una cita previa.
            </p>
            <!-- Redes Sociales (si aplica) -->
            <!-- <div class="social-links-contact">
              <h4>Síguenos:</h4>
              <a href="#" target="_blank" aria-label="LinkedIn"><img src="/images/icon-linkedin.svg" alt="LinkedIn"></a>
              <a href="#" target="_blank" aria-label="Facebook"><img src="/images/icon-facebook.svg" alt="Facebook"></a>
            </div> -->
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

// RECUERDA REEMPLAZAR 'YOUR_FORMSPREE_ID' CON TU ID REAL DE FORMULARIO DE FORMSPREE
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

const formData = ref({
  nombre: '',
  correo: '',
  telefono: '',
  asunto: '',
  mensaje: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitStatus = ref(''); // 'success' o 'error'

async function handleSubmit() {
  // Validación simple (se puede mejorar)
  if (!formData.value.nombre || !formData.value.correo || !formData.value.mensaje) {
    submitMessage.value = 'Por favor, completa los campos requeridos (*).';
    submitStatus.value = 'error';
    return;
  }

  isSubmitting.value = true;
  submitMessage.value = '';
  submitStatus.value = '';

  // Formspree recomienda enviar los datos como FormData si hay archivos,
  // pero para JSON simple, esto también funciona.
  // Para Formspree, el nombre de los campos en el objeto debe coincidir
  // con los nombres que espera Formspree (usualmente los `name` de los inputs).
  // Aquí, Formspree tomará las keys del objeto JSON.
  // Añadimos _subject para un mejor asunto en el correo que recibes de Formspree.
  const dataToSend = {
    ...formData.value,
    _subject: formData.value.asunto ? `Nuevo mensaje de ${formData.value.nombre}: ${formData.value.asunto}` : `Nuevo mensaje de contacto de ${formData.value.nombre}`,
  };


  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' // Enviar como JSON
      },
      body: JSON.stringify(dataToSend) // Convertir el objeto a JSON string
    });

    if (response.ok) {
      submitMessage.value = '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.';
      submitStatus.value = 'success';
      formData.value = { nombre: '', correo: '', telefono: '', asunto: '', mensaje: '' }; // Limpiar formulario
    } else {
      const errorData = await response.json();
      if (errorData && errorData.errors) {
        submitMessage.value = errorData.errors.map(error => error.message || 'Error en el campo ' + error.field).join(', ');
      } else {
        submitMessage.value = 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
      }
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('Error al enviar formulario a Formspree:', error);
    submitMessage.value = 'Error de conexión. Por favor, revisa tu conexión a internet e inténtalo de nuevo.';
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
}

.page-header {
  background: linear-gradient(120deg, var(--color-renewable-teal) 0%, var(--color-hydrogen-blue) 100%);
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
  max-width: 120px;
  text-align: right;
}
.page-header__image img {
  max-width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
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

.contact-content-section {
  padding: calc(var(--space-unit) * 3) 0;
  background-color: var(--color-background-white);
}
.container.contact-layout {
  display: grid;
  grid-template-columns: 1fr; /* Default a una columna */
  gap: calc(var(--space-unit) * 3); /* Espacio entre form y sidebar */
}

@media (min-width: 992px) { /* Layout de dos columnas en pantallas más grandes */
  .container.contact-layout {
    grid-template-columns: 2fr 1fr; /* Formulario más ancho */
  }
}

.section-title-inline {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  color: var(--color-industrial-charcoal);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 1.5);
  padding-bottom: calc(var(--space-unit) * 0.3);
  border-bottom: 3px solid var(--color-hydrogen-blue);
  display: inline-block;
}

.contact-form .form-group {
  margin-bottom: calc(var(--space-unit) * 1.3);
}
.contact-form label {
  display: block;
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-text-medium);
  margin-bottom: calc(var(--space-unit) * 0.4);
}
.contact-form label .required-star {
  color: var(--color-accent-orange); /* O un rojo si prefieres */
  font-weight: bold;
  margin-left: 2px;
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form input[type="tel"],
.contact-form textarea {
  width: 100%;
  padding: calc(var(--space-unit) * 0.7); /* Buen padding */
  font-family: var(--font-primary);
  font-size: 1.6rem;
  color: var(--color-text-dark);
  border: 1px solid #ced4da; /* Borde estándar de Bootstrap */
  border-radius: 8px; /* Bordes más redondeados */
  background-color: #f8f9fa; /* Fondo de input ligeramente gris */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form input[type="tel"]:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-hydrogen-blue);
  box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.25);
  background-color: var(--color-background-white);
}
.contact-form textarea {
  min-height: 150px; /* Más altura para el textarea */
  resize: vertical;
}

.form-submit-group {
  margin-top: calc(var(--space-unit) * 1.5);
}
.btn--submit-contact {
  display: inline-flex; /* Para alinear el spinner */
  align-items: center;
  justify-content: center;
  background-color: var(--color-hydrogen-blue);
  color: var(--color-background-white);
  padding: calc(var(--space-unit)*0.6) calc(var(--space-unit)*1.5);
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  min-width: 180px; /* Ancho mínimo para el botón */
}
.btn--submit-contact:hover:not(:disabled) {
  background-color: var(--color-renewable-teal);
}
.btn--submit-contact:disabled {
  background-color: #a0a0a0; /* Gris para deshabilitado */
  cursor: wait; /* Cursor de espera */
}
.spinner {
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  border-top-color: var(--color-background-white);
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.8rem;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

.submit-message {
  margin-top: var(--space-unit);
  padding: calc(var(--space-unit) * 0.8) calc(var(--space-unit) * 1);
  border-radius: 8px;
  font-size: 1.5rem;
  text-align: center;
}
.submit-message.success {
  background-color: #d1e7dd;
  color: #0f5132;
  border: 1px solid #badbcc;
}
.submit-message.error {
  background-color: #f8d7da;
  color: #842029;
  border: 1px solid #f5c2c7;
}

.contact-info-sidebar {
  /* background-color: var(--color-background-light-gray); */
  /* padding: calc(var(--space-unit) * 1.8); */
  /* border-radius: 10px; */
  /* box-shadow: 0 5px 15px rgba(0,0,0,0.05); */
}
.contact-info-card {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.8);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.contact-info-sidebar h3 {
  font-size: 2.2rem;
  color: var(--color-industrial-charcoal);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 1.2);
  border-bottom: 2px solid var(--color-renewable-teal);
  padding-bottom: calc(var(--space-unit) * 0.4);
  display: inline-block;
}
.contact-detail {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: calc(var(--space-unit) * 1);
  display: flex;
  align-items: center;
}
.contact-icon {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  opacity: 0.7;
}
.contact-detail strong {
  color: var(--color-text-dark);
  font-weight: 600;
}
.contact-detail a {
  color: var(--color-hydrogen-blue);
  text-decoration: none;
  word-break: break-all; /* Para emails largos */
}
.contact-detail a:hover {
  text-decoration: underline;
  color: var(--color-renewable-teal);
}
.contact-detail-note {
  font-size: 1.4rem;
  color: var(--color-text-light);
  margin-top: var(--space-unit);
  font-style: italic;
}

/* Social links (opcional) */
.social-links-contact {
  margin-top: calc(var(--space-unit) * 1.5);
  padding-top: calc(var(--space-unit) * 1.5);
  border-top: 1px solid #e0e0e0;
}
.social-links-contact h4 {
  font-size: 1.6rem;
  color: var(--color-text-dark);
  margin-bottom: var(--space-unit);
}
.social-links-contact a {
  margin-right: 1.5rem;
  display: inline-block;
}
.social-links-contact img {
  width: 28px;
  height: 28px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.social-links-contact a:hover img {
  opacity: 1;
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
