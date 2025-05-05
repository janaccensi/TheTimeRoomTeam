// components/layout/Navbar.js
export default {
  name: 'Navbar',
  data() {
    return {
      currentPage: ''
    };
  },
  mounted() {
    // Detectar la pàgina actual quan el component es munta
    this.detectCurrentPage();
  },
  methods: {
    detectCurrentPage() {
      // Obtenir el nom del fitxer de la URL actual
      const path = window.location.pathname;
      const page = path.split('/').pop() || 'index.html'; // Si està buit, es considera index.html
      this.currentPage = page;
    },
    isActive(page) {
      if (this.currentPage === page) return true;
      if (page === 'index.html' && (this.currentPage === '' || this.currentPage === '/')) return true;
      return false;
    }
  },
  template: `
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">The Time Room</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" :class="{ active: isActive('index.html') }" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ active: isActive('miembros.html') }" href="miembros.html">Sobre nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ active: isActive('proyecto.html') }" href="proyecto.html">The Time Room</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ active: isActive('contacto.html') }" href="contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `
}