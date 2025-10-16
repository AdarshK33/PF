<template>
  <div class="mt-0 lg:mt-20 sm:mt-0 relative" @contextmenu.prevent>
    <Hero-section></Hero-section>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    // Initialize AOS
    AOS.init();

  
  },
};
</script>

<style scoped>
/* Optional: Prevent text selection */
* {
  user-select: none;
  
}

</style>
