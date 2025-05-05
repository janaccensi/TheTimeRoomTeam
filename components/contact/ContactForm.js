// components/contact/ContactForm.js
export default {
  name: 'ContactForm',
  emits: ['form-submitted'],
  data() {
    return {
      formulario: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
        politica: false
      },
      errores: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
        politica: ''
      },
      enviando: false
    }
  },
  computed: {
    formularioValido() {
      return this.formulario.nombre && 
             this.formulario.email && 
             this.formulario.asunto && 
             this.formulario.mensaje && 
             this.formulario.politica &&
             !this.errores.nombre &&
             !this.errores.email &&
             !this.errores.asunto &&
             !this.errores.mensaje &&
             !this.errores.politica;
    }
  },
  methods: {
    validarNombre() {
      if (!this.formulario.nombre) {
        this.errores.nombre = 'Por favor introduce tu nombre';
      } else if (this.formulario.nombre.length < 3) {
        this.errores.nombre = 'El nombre debe tener al menos 3 caracteres';
      } else {
        this.errores.nombre = '';
      }
    },
    validarEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formulario.email) {
        this.errores.email = 'Por favor introduce tu email';
      } else if (!emailRegex.test(this.formulario.email)) {
        this.errores.email = 'Por favor introduce un email válido';
      } else {
        this.errores.email = '';
      }
    },
    validarAsunto() {
      if (!this.formulario.asunto) {
        this.errores.asunto = 'Por favor selecciona un asunto';
      } else {
        this.errores.asunto = '';
      }
    },
    validarMensaje() {
      if (!this.formulario.mensaje) {
        this.errores.mensaje = 'Por favor introduce un mensaje';
      } else if (this.formulario.mensaje.length < 10) {
        this.errores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
      } else if (this.formulario.mensaje.length > 500) {
        this.errores.mensaje = 'El mensaje no puede exceder los 500 caracteres';
      } else {
        this.errores.mensaje = '';
      }
    },
    validarPolitica() {
      this.errores.politica = this.formulario.politica ? '' : 'Debes aceptar la política de privacidad';
    },
    validarFormulario() {
      this.validarNombre();
      this.validarEmail();
      this.validarAsunto();
      this.validarMensaje();
      this.validarPolitica();
      return this.formularioValido;
    },
    enviarFormulario() {
      if (this.validarFormulario()) {
        this.enviando = true;
        
        // Simulamos el envío del formulario con un timeout
        setTimeout(() => {
          this.enviando = false;
          this.$emit('form-submitted', {...this.formulario});
        }, 1500);
      }
    }
  },
  template: `
    <form @submit.prevent="enviarFormulario">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input 
          type="text" 
          class="form-control" 
          id="nombre" 
          v-model="formulario.nombre" 
          :class="{'is-invalid': errores.nombre, 'is-valid': formulario.nombre && !errores.nombre}"
          @blur="validarNombre"
          placeholder="Tu nombre" 
          required>
        <div class="invalid-feedback">{{ errores.nombre }}</div>
      </div>
      
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input 
          type="email" 
          class="form-control" 
          id="email" 
          v-model="formulario.email" 
          :class="{'is-invalid': errores.email, 'is-valid': formulario.email && !errores.email}"
          @blur="validarEmail"
          placeholder="Tu correo electrónico" 
          required>
        <div class="invalid-feedback">{{ errores.email }}</div>
      </div>
      
      <div class="mb-3">
        <label for="asunto" class="form-label">Asunto</label>
        <select 
          class="form-select" 
          id="asunto" 
          v-model="formulario.asunto"
          :class="{'is-invalid': errores.asunto, 'is-valid': formulario.asunto && !errores.asunto}"
          @change="validarAsunto"
          required>
          <option value="" disabled selected>Selecciona una opción</option>
          <option value="consulta">Consulta general</option>
          <option value="sugerencia">Sugerencia de mejora</option>
          <option value="soporte">Soporte técnico</option>
          <option value="otro">Otro</option>
        </select>
        <div class="invalid-feedback">{{ errores.asunto }}</div>
      </div>
      
      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea 
          class="form-control" 
          id="mensaje" 
          v-model="formulario.mensaje" 
          :class="{'is-invalid': errores.mensaje, 'is-valid': formulario.mensaje && !errores.mensaje}"
          @blur="validarMensaje"
          rows="5" 
          placeholder="Escribe tu mensaje aquí" 
          required></textarea>
        <div class="invalid-feedback">{{ errores.mensaje }}</div>
        <div class="form-text" v-if="formulario.mensaje">
          Caracteres: {{ formulario.mensaje.length }}/500
        </div>
      </div>
      
      <div class="mb-3 form-check">
        <input 
          type="checkbox" 
          class="form-check-input" 
          id="politica" 
          v-model="formulario.politica"
          :class="{'is-invalid': errores.politica}"
          required>
        <label class="form-check-label" for="politica">Acepto la política de privacidad</label>
        <div class="invalid-feedback">{{ errores.politica }}</div>
      </div>
      
      <div class="text-center">
        <button 
          type="submit" 
          class="btn btn-dark btn-lg"
          :disabled="!formularioValido || enviando">
          {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
        </button>
      </div>
    </form>
  `
}