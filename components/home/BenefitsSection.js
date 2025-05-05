// components/home/BenefitsSection.js
export default {
  name: 'BenefitsSection',
  data() {
    return {
      beneficios: [
        {
          icono: "🎯",
          titulo: "Organización rápida",
          descripcion: "Agrega tus tareas diarias de manera sencilla y visual.",
          detalleExtendido: "Nuestra plataforma te permite estructurar tus actividades con un sistema de arrastrar y soltar. Organiza por categorías, prioridades o plazos con una interfaz intuitiva.",
          expandido: false
        },
        {
          icono: "🕹️",
          titulo: "Interacción divertida",
          descripcion: "Gestiona tu tiempo mientras te diviertes en una habitación virtual 3D.",
          detalleExtendido: "Convierte la gestión del tiempo en una experiencia estimulante. Personaliza tu espacio virtual, desbloquea nuevos elementos y haz que la productividad sea más divertida.",
          expandido: false
        },
        {
          icono: "📈",
          titulo: "Progreso claro",
          descripcion: "Visualiza tu evolución personal y profesional fácilmente.",
          detalleExtendido: "Accede a estadísticas detalladas y visualizaciones de tu rendimiento. Monitoriza tus avances diarios, semanales y mensuales para optimizar tu enfoque.",
          expandido: false
        }
      ]
    };
  },
  methods: {
    toggleExpand(beneficio) {
      beneficio.expandido = !beneficio.expandido;
    }
  },
  template: `
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Beneficios rápidos</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="(beneficio, index) in beneficios" :key="index">
            <div class="card h-100 p-3 text-center border shadow-sm">
              <div class="card-body">
                <h3 class="card-title">{{ beneficio.icono }} {{ beneficio.titulo }}</h3>
                <p>{{ beneficio.descripcion }}</p>
                <button class="btn btn-sm btn-outline-dark mb-2" @click="toggleExpand(beneficio)">
                  {{ beneficio.expandido ? 'Ver menos' : 'Ver más' }}
                </button>
                <div v-if="beneficio.expandido" class="mt-3 expandible-content">
                  <p>{{ beneficio.detalleExtendido }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}