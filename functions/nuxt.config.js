module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Webmedia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'stripe', src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/style_global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/splide-carousel-vue', mode: 'client' },
    { src: '@/plugins/vuelidate.plugin' },
    { src: '@/utils/notice.plugin' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    "theme": { dark: true },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAnH7Agi2IvEKXixzWcRDM8CsCb5Avz8tM",
          authDomain: "webmedia31ru.firebaseapp.com",
          databaseURL: "https://webmedia31ru-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "webmedia31ru",
          storageBucket: "webmedia31ru.appspot.com",
          messagingSenderId: "555481221015",
          appId: "1:555481221015:web:4aa33be70825b39225e6d2",
          measurementId: "G-FCPZR27CFD"
        },
        services: {
          auth: true,
          // firestore: true,
          functions: true,
          // storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          // remoteConfig: true
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@splidejs/vue-splide',
    ],

  },

  loading: {
    color: '#CCC',
    height: '3px'
  },

}
