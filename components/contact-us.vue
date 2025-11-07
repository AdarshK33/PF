<template>
    <div id="contact" class="py-16 px-8 bg-gradient-to-r from-blue-500 via-white-500 to-white-500 text-white">
      <h2 class="text-3xl font-bold text-center mb-4">Personal Details</h2>
    <p class="text-lg mb-6">
  DOB: {{ dobFormatted }} ({{ age }})<br />
  Phone:
  <a href="tel:+91-9199961258" class="animated-blue">+91-9199961258</a><br />
  Mail:
  <a href="mailto:adarsh.kumar10201@gmail.com" class="animated-blue">adarsh.kumar10201@gmail.com</a><br />
  Current Location: <span class="animated-blue">Bangalore, Karnataka India</span>
  
</p>
      <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none">
        Contact Me
      </button>

      <google-map></google-map>
      <social-web></social-web>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Set the date of birth (example: May 20, 1999)
  const dob = ref(new Date('1996-02-20'));
  
  // Compute the current age
  const age = computed(() => {
    const today = new Date();
    let age = today.getFullYear() - dob.value.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
  
    // Adjust age if birthday hasn't occurred yet this year
    if (month < dob.value.getMonth() || (month === dob.value.getMonth() && day < dob.value.getDate())) {
      age--;
    }
    return age;
  });
  
  // Format the DOB to display
  const dobFormatted = computed(() => {
    return `${dob.value.getDate()}-${dob.value.toLocaleString('default', { month: 'short' })}-${dob.value.getFullYear()}`;
  });
  </script>
  
  <style scoped>
  /* You can add any custom styles here if required */
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
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
  </style>
  