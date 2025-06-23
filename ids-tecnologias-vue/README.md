# IDS Tecnologías - Sitio Web Moderno (Vue.js)

Este proyecto es una reconstrucción moderna del sitio web de IDS Tecnologías, con un enfoque en la promoción de la energía de hidrógeno y soluciones industriales renovables. Está siendo desarrollado con Vue.js (versión 3) y Vite.

## Prerrequisitos

- Node.js (versión 18.x o superior recomendada)
- npm o yarn

## Configuración del Proyecto

1.  **Navegar a la carpeta del proyecto Vue:**
    ```bash
    cd ids-tecnologias-vue
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
    o si prefieres yarn:
    ```bash
    yarn install
    ```

## Scripts Disponibles

En el directorio `ids-tecnologias-vue/`, puedes ejecutar:

### `npm run dev` o `yarn dev`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite, usualmente el 5173) para verla en tu navegador.
La página se recargará automáticamente si haces cambios en el código gracias a HMR (Hot Module Replacement) de Vite.

### `npm run build` o `yarn build`

Compila la aplicación para producción en la carpeta `ids-tecnologias-vue/dist/`.
Optimiza la compilación para el mejor rendimiento. Los archivos resultantes son estáticos y listos para ser desplegados.

### `npm run preview` o `yarn preview`

Ejecuta un servidor local estático con el contenido de la carpeta `dist/`. Es útil para previsualizar el build de producción antes de desplegarlo en un servidor real.

## Estructura de Carpetas Clave (dentro de `ids-tecnologias-vue/`)

-   `public/`: Contiene assets estáticos que se copian directamente a la raíz de `dist/` en el build (ej. `favicon.ico`). Aquí también moveremos las carpetas `images/` y `video/` del proyecto original.
-   `src/`: Contiene el código fuente de la aplicación Vue.
    -   `assets/`: Archivos CSS globales (`modern.css`, `base.css`), fuentes locales si las hubiera, etc.
    -   `components/`: Componentes reutilizables de Vue (ej. `Navbar.vue`, `ServiceCard.vue`).
    -   `views/` (o `pages/`): Componentes que representan las diferentes páginas/vistas de la aplicación (ej. `HomeView.vue`, `HydrogenView.vue`).
    -   `router/`: Configuración de Vue Router (para la navegación SPA, se creará más adelante).
    -   `stores/`: (Si se usa Pinia para gestión de estado) Stores para la gestión del estado global (se creará más adelante si es necesario).
    -   `App.vue`: El componente raíz de la aplicación que monta el router y los layouts base.
    -   `main.js`: El punto de entrada de la aplicación donde se inicializa Vue, se monta el router, stores, etc.
-   `index.html`: El template HTML principal que Vite usa. El div `#app` es donde se monta la aplicación Vue.
-   `vite.config.js`: Archivo de configuración para Vite.
-   `package.json`: Define las dependencias del proyecto (Vue, Vite, etc.) y los scripts (dev, build, preview).

## Formulario de Contacto

El formulario de contacto (`contacto.php` y `correo.html` del proyecto original) se manejará de la siguiente manera:
- El frontend (Vue) capturará los datos del formulario.
- Se utilizará un servicio externo (como Formspree o EmailJS) para enviar el correo, eliminando la necesidad del backend PHP para esta funcionalidad. Esta integración se realizará en una fase posterior.

---

*Este README se actualizará a medida que el proyecto avance.*
