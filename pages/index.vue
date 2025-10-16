<template>
    
    
       <div class="mt-0  lg:mt-20 sm:mt-0 relative">
            <Hero-section></Hero-section>
</div>
</template>

<script>
// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css' // Make sure AOS CSS is also imported

export default {
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  }
}
</script>

<style scoped>
/* Add any custom styles you need here */
</style>
