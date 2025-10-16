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

    // Disable right-click and inspect shortcuts
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' || // F12
        (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) || // Ctrl+Shift+I/C/J
        (e.ctrlKey && e.key === 'U') // Ctrl+U
      ) {
        e.preventDefault();
        alert('Inspecting is disabled!');
      }
    });
  },
};
</script>

<style scoped>
/* Optional: Prevent text selection */
* {
  user-select: none;
}
</style>
