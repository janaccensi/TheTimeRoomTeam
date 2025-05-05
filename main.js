// main.js
import Navbar from './components/layout/Navbar.js';
import Footer from './components/layout/Footer.js';
import ContactForm from './components/contact/ContactForm.js';
import SuccessMessage from './components/contact/SuccessMessage.js';
// Components per a la pàgina d'inici
import HeroSection from './components/home/HeroSection.js';
import BenefitsSection from './components/home/BenefitsSection.js';
import TargetAudienceSection from './components/home/TargetAudienceSection.js';
import TeamMembersSection from './components/home/TeamMembersSection.js';
// Components per a la pàgina de membres
import TeamSection from './components/members/TeamSection.js';
// Components per a la pàgina del projecte
import ProjectHeroSection from './components/project/ProjectHeroSection.js';
import ProjectDetailsSection from './components/project/ProjectDetailsSection.js';
import FeaturesSection from './components/project/FeaturesSection.js';
import FaqSection from './components/project/FaqSection.js';

const app = Vue.createApp({
  components: {
    // Components de layout
    'app-footer': Footer,
    'navbar': Navbar,
    // Components de contacte
    ContactForm,
    SuccessMessage,
    // Components de la pàgina d'inici
    HeroSection,
    BenefitsSection,
    TargetAudienceSection,
    TeamMembersSection,
    // Components de la pàgina de membres
    TeamSection,
    // Components de la pàgina del projecte
    ProjectHeroSection,
    ProjectDetailsSection,
    FeaturesSection,
    FaqSection
  },
  data() {
    return {
      formEnviado: false,
      datosUsuario: {
        nombre: ''
      }
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      this.datosUsuario = formData;
      this.formEnviado = true;
    },
    resetFormulario() {
      this.formEnviado = false;
    }
  }
});

app.mount('#app');