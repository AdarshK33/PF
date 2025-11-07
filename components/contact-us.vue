<template>
    <div id="contact" class="py-16 px-8 bg-gradient-to-r from-blue-500 via-white-500 to-white-500 text-white">
      <h2 class="text-3xl font-bold text-center mb-4">Personal Details</h2>
      <p class="text-lg mb-6">
        DOB: {{ dobFormatted }} ({{ age }})<br />
        Phone: <a href="tel:+91 -9199961258" class="text-blue-200 hover:underline">+91-9199961258</a><br />
        Mail: <a href="mailto:adarsh.kumar10201@gmail.com" class="text-blue-200 hover:underline">adarsh.kumar10201@gmail.com</a><br />
        Current Location: Bangalore ,Karnataka
        
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
  </style>
  