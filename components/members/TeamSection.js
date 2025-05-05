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
          image: 'img/foto_circular_christian.jpeg',
          description: 'Especializado en crear interfaces de usuario atractivas, modernas e intuitivas. Apasionado por la experiencia de usuario y las animaciones web, trabaja con tecnologías como Vue, React y Tailwind. Tiene un gran sentido estético y cuida cada detalle para garantizar una navegación fluida y coherente.'
        },
        {
          id: 'miembro2',
          name: 'Cristian Prado',
          role: 'Desarrollador Backend',
          email: 'cristianprado32@icloud.com',
          image: 'img/foto_cristianpm.jpeg',
          description: 'Experto en bases de datos, APIs REST y arquitectura de servidores escalables. Entusiasta de la optimización del rendimiento, la seguridad de las aplicaciones web y las buenas prácticas en desarrollo backend. Domina tecnologías como Node.js, Express y MongoDB.'
        },
        {
          id: 'miembro3',
          name: 'Jan Accensi',
          role: 'Diseñador UX/UI',
          email: 'janaccensi@gmail.com',
          image: 'img/foto_jan.jpeg',
          description: 'Creativo y detallista, enfocado en diseñar experiencias de usuario centradas en las personas. Especializado en investigación de usuarios, diseño de interacción y prototipado con herramientas como Figma y Adobe XD. Busca siempre el equilibrio entre funcionalidad y estética.'
        },
        {
          id: 'miembro4',
          name: 'David Armillas',
          role: 'Project Manager',
          email: 'dargu6@gmail.com',
          image: 'img/foto_david.jpeg',
          description: 'Organizador nato con sólida experiencia en metodologías ágiles como Scrum y Kanban. Facilita la comunicación entre equipos multidisciplinares, gestiona los tiempos y recursos del proyecto y asegura la entrega de resultados de calidad. Gran capacidad para liderar y motivar.'
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
            <div class="card h-100">
              <div class="member-img mx-auto mt-3 text-center">
                <img :src="member.image" :alt="member.name">
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">{{ member.name }}</h5>
                <p class="card-text text-muted text-center"><strong>{{ member.role }}</strong></p>
                <p class="card-text description mb-3 text-center">{{ member.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}