// components/members/TeamSection.js
export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        {
          id: 'christian-royo',
          name: 'Christian Royo',
          role: 'Desarrollador Frontend',
          email: 'cjroyo@icloud.com',
          image: 'img/foto_circular_christian.jpeg'
        },
        {
          id: 'miembro2',
          name: 'Cristian Prado',
          role: 'Desarrollador Backend',
          email: 'cristianprado32@icloud.com',
          image: 'img/foto_cristianpm.jpeg'
        },
        {
          id: 'miembro3',
          name: 'Jan Accensi',
          role: 'Diseñador UX/UI',
          email: 'janaccensi@gmail.com',
          image: 'img/foto_jan.jpeg'
        },
        {
          id: 'miembro4',
          name: 'David Armillas',
          role: 'Project Manager',
          email: 'dargu6@gmail.com',
          image: 'img/foto_david.jpeg'
        }
      ]
    };
  },
  template: `
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Nuestro Equipo</h2>
        <div class="row justify-content-center">
          <!-- Member cards -->
          <div class="col-lg-3 col-md-6 mb-4" v-for="member in teamMembers" :key="member.id" :id="member.id">
            <div class="card h-100 text-center">
              <div class="member-img mx-auto mt-3">
                <img :src="member.image" :alt="member.name">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ member.name }}</h5>
                <p class="card-text">{{ member.role }}</p>
                <p class="card-text">{{ member.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}