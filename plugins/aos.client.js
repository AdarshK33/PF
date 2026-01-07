// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(nuxtApp => {
  AOS.init({
    duration: 1200, // Optional: Adjust the duration of animations
  })
})