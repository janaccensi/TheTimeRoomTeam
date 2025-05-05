// components/layout/Footer.js
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  template: `
    <footer>
      <p class="mb-0">&copy; {{ currentYear }} The Time Room</p>
    </footer>
  `
}