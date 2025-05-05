# ExerciciHTML

## Descripción del proyecto
* En esta versión inicial, se deben usar elementos HTML (tanto de contenido como semánticos).
* La página principal (index.html) tiene diferentes secciones con información básica sobre miembros del grupo y proyecto web.
* Desde index.html enlazar con miembros.html y proyecto.html, que contienen más información sobre vosotros y vuestro proyecto respectivamente.
* Desde la página principal enlazar a una página con un formulario (contacto.html). Una sección de esta página explica los principios de diseño que habéis aplicado en el formulario.

## Tecnologías utilizadas

* **HTML5**: Para la estructura básica de las páginas.
* **CSS3**: Para los estilos y animaciones personalizados.
* **JavaScript (ES6+)**: Para la lógica de la interfaz y manejo de formularios.
* **Vue.js 3**: Framework de JavaScript utilizado para crear componentes interactivos y reactivos.
* **Bootstrap 5**: Para el diseño responsivo y componentes de UI como acordeones, botones y formularios.
* **Módulos ES**: Para la organización del código JavaScript en componentes independientes y reutilizables.

## Estructura del proyecto

### Directorios principales

* **/components**: Contiene todos los componentes Vue organizados por funcionalidad.
  * **/layout**: Componentes de estructura principal (Navbar.js, Footer.js).
  * **/home**: Componentes específicos de la página de inicio.
  * **/project**: Componentes para la página de descripción del proyecto.
  * **/members**: Componentes para la página de miembros del equipo.
  * **/contact**: Componentes para la página de contacto y formulario.

### Archivos principales

* **index.html**: Página principal con secciones sobre el proyecto y equipo.
* **proyecto.html**: Página con información detallada sobre "The Time Room".
* **miembros.html**: Página con perfiles detallados de los miembros del equipo.
* **contacto.html**: Página con formulario de contacto y explicación de diseño.
* **style.css**: Estilos globales para toda la aplicación.
* **main.js**: Punto de entrada de JavaScript que registra e inicializa todos los componentes Vue.

### Componentes importantes

* **Navbar.js**: Barra de navegación responsive con detección automática de página activa.
* **ContactForm.js**: Formulario de contacto con validación interactiva.
* **FaqSection.js**: Sección de preguntas frecuentes con acordeón expandible.
* **TeamSection.js**: Sección que muestra perfiles de los miembros del equipo.

## Características implementadas

* Diseño completamente responsive utilizando Bootstrap 5
* Componentes interactivos usando Vue.js
* Validación de formularios en tiempo real
* Estructura modular fácilmente extensible
* Navegación intuitiva entre páginas

