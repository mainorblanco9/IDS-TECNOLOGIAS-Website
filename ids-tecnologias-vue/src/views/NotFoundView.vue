<template>
  <main class="main-content not-found-page">
    <div class="container">
      <h1>404</h1>
      <h2>Página No Encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <router-link to="/" class="btn btn--go-home">Volver al Inicio</router-link>
    </div>
  </main>
</template>

<script setup>
// No se necesita lógica específica para la página 404
</script>

<style scoped>
.main-content {
  padding-top: 7rem; /* Altura del Navbar fijo */
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: center; /* Centrar horizontalmente */
  min-height: calc(100vh - 7rem); /* Ocupar el resto de la altura visible */
  text-align: center;
  background-color: var(--color-background-light-gray);
}

.container {
  width: 90%;
  max-width: 600px; /* Contenedor más estrecho para el mensaje */
  margin: 0 auto;
  padding: var(--space-unit);
}

.not-found-page h1 {
  font-size: clamp(6rem, 15vw, 12rem); /* Número 404 grande */
  color: var(--color-hydrogen-blue);
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0; /* Sin margen inferior para que esté cerca del h2 */
  line-height: 1;
}

.not-found-page h2 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: var(--color-industrial-charcoal);
  margin-top: calc(var(--space-unit) * 0.5);
  margin-bottom: var(--space-unit);
}

.not-found-page p {
  font-size: 1.8rem;
  color: var(--color-text-medium);
  margin-bottom: calc(var(--space-unit) * 1.5);
}

.btn--go-home {
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
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn--go-home:hover {
  background-color: var(--color-renewable-teal);
  transform: translateY(-2px);
}
</style>
