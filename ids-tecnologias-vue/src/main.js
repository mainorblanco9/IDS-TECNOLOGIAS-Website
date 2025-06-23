import { createApp } from 'vue'
import App from './App.vue'
// Descomentar la siguiente línea cuando el router esté configurado
// import router from './router'
import './assets/modern.css' // Nuestros estilos modernos globales
import './assets/base.css' // Estilos base de Vite/Vue (podemos limpiarlos/ajustarlos luego)

const app = createApp(App)

// Descomentar la siguiente línea cuando el router esté configurado
// app.use(router)

app.mount('#app')
