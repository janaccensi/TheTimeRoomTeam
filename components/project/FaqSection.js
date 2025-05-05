// components/project/FaqSection.js
export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          id: "One",
          question: "¿Cómo funciona The Time Room?",
          answer: "The Time Room funciona como un espacio virtual donde puedes visualizar y organizar tus actividades diarias. Cada tarea o área de tu vida se representa como un objeto en la habitación que evoluciona con tu progreso. Simplemente crea tareas, asígnalas a las diferentes áreas y actualiza tu progreso para ver cómo tu habitación virtual evoluciona.",
          expanded: true
        },
        {
          id: "Two",
          question: "¿Es gratis usar The Time Room?",
          answer: "Sí, The Time Room ofrece una versión gratuita con todas las funcionalidades básicas. También ofrecemos un plan premium que incluye características avanzadas como análisis detallados de productividad, temas personalizados para tu habitación y asesoramiento personalizado basado en IA.",
          expanded: false
        },
        {
          id: "Three",
          question: "¿Puedo acceder desde dispositivos móviles?",
          answer: "Por supuesto, The Time Room está diseñado con un enfoque responsivo que se adapta perfectamente a cualquier dispositivo. Puedes acceder desde tu ordenador, tablet o smartphone sin perder ninguna funcionalidad. También estamos trabajando en aplicaciones nativas para iOS y Android que estarán disponibles próximamente.",
          expanded: false
        },
        {
          id: "Four",
          question: "¿Cómo protegen mis datos personales?",
          answer: "En The Time Room, la privacidad y seguridad de tus datos son primordiales. Utilizamos encriptación de extremo a extremo para proteger toda la información que compartes en nuestra plataforma. Además, cumplimos con todas las normativas GDPR y nunca compartimos tus datos con terceros sin tu consentimiento explícito.",
          expanded: false
        },
        {
          id: "Five",
          question: "¿Puedo personalizar mi habitación virtual?",
          answer: "¡Absolutamente! Una de las características más populares de The Time Room es la capacidad de personalizar completamente tu espacio virtual. Puedes cambiar el diseño de la habitación, seleccionar diferentes temas de color, y elegir los objetos que representan cada área de tu vida. A medida que avanzas, desbloquearás más opciones de personalización.",
          expanded: false
        }
      ]
    };
  },
  template: `
    <section class="py-5 mb-5">
      <div class="container">
        <h2 class="text-center mb-5">Preguntas Frecuentes</h2>
        
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'heading' + faq.id">
              <button class="accordion-button" :class="{ collapsed: !faq.expanded }" type="button" 
                      data-bs-toggle="collapse" :data-bs-target="'#collapse' + faq.id" 
                      :aria-expanded="faq.expanded" :aria-controls="'collapse' + faq.id">
                {{ faq.question }}
              </button>
            </h2>
            <div :id="'collapse' + faq.id" class="accordion-collapse collapse" :class="{ show: faq.expanded }" 
                 :aria-labelledby="'heading' + faq.id" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}