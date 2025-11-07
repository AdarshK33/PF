<template>
  <footer class="text-gray-200 py-6 animated-footer">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm">&copy; Copyright by Adarsh - {{ currentYear }}</p>
      <p class="text-sm">All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.animated-footer {
  background: linear-gradient(270deg, #138808, #1fa94e, #0b6623);
  background-size: 400% 400%;
  animation: gradientShift 6s ease infinite;
}

@keyframes gradientShift {
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
