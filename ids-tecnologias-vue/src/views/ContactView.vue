<template>
  <main class="main-content">
    <section class="page-header">
      <div class="container">
        <h1>Contacto</h1>
        <p class="subtitle">Estamos listos para ayudarte. Ponte en contacto con nosotros.</p>
      </div>
    </section>

    <section class="contact-content-section">
      <div class="container">
        <div class="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="nombre">Empresa / Nombre</label>
              <input type="text" id="nombre" v-model="formData.nombre" placeholder="Tu nombre o el de tu empresa" required>
            </div>
            <div class="form-group">
              <label for="correo">Correo Electrónico</label>
              <input type="email" id="correo" v-model="formData.correo" placeholder="tu@correo.com" required>
            </div>
            <div class="form-group">
              <label for="mensaje">Solicitud de Servicio / Mensaje</label>
              <textarea id="mensaje" v-model="formData.mensaje" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn--submit-contact" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </div>
          </form>
          <p v-if="submitMessage" class="submit-message" :class="{ 'success': submitStatus === 'success', 'error': submitStatus === 'error' }">
            {{ submitMessage }}
          </p>
        </div>

        <div class="contact-info-container">
          <h2>Información de Contacto</h2>
          <p><strong>IDS Y TECNOLOGIAS S.A.</strong></p>
          <p>Guanacaste, Costa Rica</p>
          <p><strong>Teléfono:</strong> <a href="tel:+50689207049">(+506) 8920-7049</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@idstecnologias.com">info@idstecnologias.com</a></p>
          <!-- Añadir más información si es necesario, como dirección física, horarios, etc. -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

// URL de Formspree (reemplazar con tu endpoint real de Formspree)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // <-- CAMBIAR ESTO

const formData = ref({
  nombre: '',
  correo: '',
  mensaje: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitStatus = ref(''); // 'success' o 'error'

async function handleSubmit() {
  isSubmitting.value = true;
  submitMessage.value = '';
  submitStatus.value = '';

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    });

    if (response.ok) {
      submitMessage.value = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
      submitStatus.value = 'success';
      formData.value = { nombre: '', correo: '', mensaje: '' }; // Limpiar formulario
    } else {
      const data = await response.json();
      if (data.errors) {
        submitMessage.value = data.errors.map(error => error.message).join(', ');
      } else {
        submitMessage.value = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      }
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('Error al enviar formulario:', error);
    submitMessage.value = 'Hubo un error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.';
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
  background: linear-gradient(135deg, var(--color-hydrogen-blue) 0%, var(--color-renewable-teal) 100%);
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
  color: rgba(255,255,255,0.9);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-unit);
  display: grid; /* Usar grid para layout de dos columnas */
  grid-template-columns: 1fr; /* Por defecto una columna en móvil */
  gap: calc(var(--space-unit) * 2.5);
}

@media (min-width: 900px) { /* Dos columnas en pantallas más grandes */
  .container {
    grid-template-columns: 2fr 1fr; /* Formulario más ancho */
  }
}

.contact-content-section {
  padding: calc(var(--space-unit) * 2.5) 0;
}

.contact-form-container h2, .contact-info-container h2 {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  color: var(--color-industrial-charcoal);
  margin-top: 0;
  margin-bottom: calc(var(--space-unit) * 1.5);
}

.contact-form .form-group {
  margin-bottom: calc(var(--space-unit) * 1.2);
}
.contact-form label {
  display: block;
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-text-medium);
  margin-bottom: calc(var(--space-unit) * 0.3);
}
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  width: 100%;
  padding: calc(var(--space-unit) * 0.6);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  color: var(--color-text-dark);
  border: 1px solid #ccc; /* Borde más visible */
  border-radius: 6px;
  background-color: var(--color-background-white);
  transition: border-color 0.3s ease;
}
.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-hydrogen-blue);
  box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.2); /* Sombra de foco */
}
.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.btn--submit-contact {
  display: inline-block;
  background-color: var(--color-hydrogen-blue);
  color: var(--color-background-white);
  padding: calc(var(--space-unit)*0.5) calc(var(--space-unit)*1.2);
  font-family: var(--font-headings);
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}
.btn--submit-contact:hover:not(:disabled) {
  background-color: var(--color-renewable-teal);
}
.btn--submit-contact:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--space-unit);
  padding: var(--space-unit) * 0.8;
  border-radius: 6px;
  font-size: 1.5rem;
}
.submit-message.success {
  background-color: #e6fffa; /* Verde claro */
  color: #006400; /* Verde oscuro */
  border: 1px solid #b3e6cc;
}
.submit-message.error {
  background-color: #ffe6e6; /* Rojo claro */
  color: #a00000; /* Rojo oscuro */
  border: 1px solid #ffcccc;
}

.contact-info-container {
  background-color: var(--color-background-light-gray);
  padding: calc(var(--space-unit) * 1.5);
  border-radius: 8px;
}
.contact-info-container p {
  font-size: 1.6rem;
  color: var(--color-text-medium);
  line-height: 1.8;
  margin-bottom: calc(var(--space-unit) * 0.8);
}
.contact-info-container p strong {
  color: var(--color-industrial-charcoal);
}
.contact-info-container a {
  color: var(--color-hydrogen-blue);
  text-decoration: none;
}
.contact-info-container a:hover {
  text-decoration: underline;
}
</style>
