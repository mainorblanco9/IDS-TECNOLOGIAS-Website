import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importar el router configurado
import './assets/modern.css'
import './assets/base.css'

const app = createApp(App)

app.use(router) // Usar el router en la aplicación Vue

app.mount('#app')
