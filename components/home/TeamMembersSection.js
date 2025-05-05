// components/home/TeamMembersSection.js
export default {
  name: 'TeamMembersSection',
  template: `
    <section class="py-5 bg-light text-center">
      <div class="container">
        <h2 class="mb-4">Miembros del grupo</h2>
        <div class="row justify-content-center mt-5">
        
          <!-- Miembro 1 -->
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="miembros.html#christian-royo" class="text-decoration-none text-dark">
              <img src="img/foto_circular_christian.jpeg" class="rounded-circle img-fluid mb-2" alt="Christian Royo">
              <h5>Christian Royo</h5>
            </a>
          </div>
        
          <!-- Miembro 2 -->
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="miembros.html#miembro2" class="text-decoration-none text-dark">
              <img src="img/foto_cristianpm.jpeg" class="rounded-circle img-fluid mb-2" alt="Nombre miembro 2">
              <h5>Cristian Prado</h5>
            </a>
          </div>
        
          <!-- Miembro 3 -->
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="miembros.html#miembro3" class="text-decoration-none text-dark">
              <img src="img/foto_jan.jpeg" class="rounded-circle img-fluid mb-2" alt="Jan Accensi">
              <h5>Jan Accensi</h5>
            </a>
          </div>

          <!-- Miembro 4 -->
          <div class="col-md-3 col-sm-6 mb-4">
            <a href="miembros.html#miembro4" class="text-decoration-none text-dark">
              <img src="img/foto_david.jpeg" class="rounded-circle img-fluid mb-2" alt="David Armillas">
              <h5>David Armillas</h5>
            </a>
          </div>
        
        </div>
      </div>
    </section>
  `
}