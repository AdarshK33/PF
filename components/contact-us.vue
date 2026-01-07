<template>
  <div
    id="contact"
    class="py-16 px-8 bg-gradient-to-r from-blue-500 via-white-500 to-white-500 text-white"
  >
    <h2 class="text-3xl font-bold text-center mb-4">Personal Details</h2>

    <p class="text-lg mb-6">
      DOB: {{ dobFormatted }} ({{ age }})<br />
      Phone:
      <a href="tel:+91-9199961258" class="animated-blue">+91-9199961258</a><br />
      Mail:
      <a href="mailto:adarsh.kumar10201@gmail.com" class="animated-blue">
        adarsh.kumar10201@gmail.com
      </a><br />
      Current Location:
      <span class="animated-blue">Bangalore, Karnataka India</span>
    </p>

    <!-- BUTTON -->
    <button
      @click="openModal"
      class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
    >
      Contact Me
    </button>

    <google-map />
    <social-web />

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    >
      <div class="bg-white text-black rounded-xl p-6 w-full max-w-md relative">
        <!-- Close -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h3 class="text-xl font-bold mb-4 text-center"   @click="contactModal">
          Contact Me
        </h3>

        <!-- FORM COMPONENT -->
        <Contact-form />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { trackEvent, EVENTS } from "@/lib/analytics";



const showModal = ref(false)



const contactModal = () => {
  trackEvent(EVENTS.CONTACT_FORM_BUTTON , {
    common: { location: "contact-us" }
  });
};

const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

// DOB
const dob = ref(new Date('1996-02-20'))

const age = computed(() => {
  const today = new Date()
  let age = today.getFullYear() - dob.value.getFullYear()
  const m = today.getMonth() - dob.value.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < dob.value.getDate())) age--
  return age
})

const dobFormatted = computed(() => {
  return `${dob.value.getDate()}-${dob.value.toLocaleString('default', {
    month: 'short'
  })}-${dob.value.getFullYear()}`
})
</script>

<style scoped>
.animated-blue {
  background: linear-gradient(90deg, #60a5fa, #3b82f6, #1e40af);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: blueShift 4s ease infinite;
  font-weight: 600;
  text-decoration: none;
}

@keyframes blueShift {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}
</style>
