// components/project/FeaturesSection.js
export default {
  name: 'FeaturesSection',
  data() {
    return {
      features: [
        {
          icon: "🏠",
          title: "Habitación Virtual",
          description: "Interfaz interactiva que representa visualmente tus áreas de actividad."
        },
        {
          icon: "🎮",
          title: "Gamificación",
          description: "Sistema de puntos, logros y niveles para aumentar tu motivación."
        },
        {
          icon: "🤖",
          title: "Asistente IA",
          description: "Recomendaciones personalizadas para mejorar tu productividad."
        }
      ]
    };
  },
  template: `
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Características principales</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="(feature, index) in features" :key="index">
            <div class="feature-card h-100 p-4 border rounded bg-white shadow-sm">
              <h3 class="feature-title">{{ feature.icon }} {{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}