// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  
  // plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' }],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
      head: {
      title: 'Adarsh Creations',
      meta: [
        { name: 'description', content: 'Portfolio of Adarsh Creations – About Me, Skills, Projects, and Contact.' }
      ],
          link: [
       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap"'}
     ]

    }
  },

  css: [
    'aos/dist/aos.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  plugins: ['~/plugins/aos.js'],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],


  nitro: {
    prerender: {

    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-13",
});