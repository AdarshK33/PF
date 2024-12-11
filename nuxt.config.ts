// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  
  // plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' }],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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