// components/contact/SuccessMessage.js
export default {
  name: 'SuccessMessage',
  props: {
    nombre: {
      type: String,
      required: true
    }
  },
  emits: ['reset'],
  template: `
    <div class="alert alert-success text-center mb-4">
      <h4>¡Mensaje enviado con éxito!</h4>
      <p>Gracias por contactar con nosotros, {{ nombre }}. Te responderemos lo antes posible.</p>
      <button @click="$emit('reset')" class="btn btn-dark mt-2">Enviar otro mensaje</button>
    </div>
  `
}