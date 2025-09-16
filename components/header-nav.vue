<template>
  <div>
    <header class="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav class="flex justify-between items-center px-5 py-4">
        <!-- Logo -->
        <a href="#" class="text-lg font-semibold font-cursive">Adarsh Creations</a>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-4">
          <li><NuxtLink to="/" class="text-gray-600 hover:text-gray-900 font-bold">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 font-bold">About Me</NuxtLink></li>
          <li><NuxtLink to="/skills" class="text-gray-600 hover:text-gray-900 font-bold">Skills</NuxtLink></li>
          <li><NuxtLink to="/projects" class="text-gray-600 hover:text-gray-900 font-bold">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 font-bold">Contact Us</NuxtLink></li>
        </ul>

        <!-- Mobile Hamburger Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-gray-600 focus:outline-none"
        >
          <!-- Hamburger icon -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- Close icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu (Dropdown) -->
      <div v-if="isOpen" class="md:hidden bg-white shadow-md">
        <ul class="flex flex-col space-y-2 p-4">
          <li><NuxtLink to="/" @click="closeMenu" class="block text-gray-600 hover:text-gray-900 font-bold">Home</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMenu" class="block text-gray-600 hover:text-gray-900 font-bold">About Me</NuxtLink></li>
          <li><NuxtLink to="/skills" @click="closeMenu" class="block text-gray-600 hover:text-gray-900 font-bold">Skills</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="closeMenu" class="block text-gray-600 hover:text-gray-900 font-bold">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="closeMenu" class="block text-gray-600 hover:text-gray-900 font-bold">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Optional: smooth dropdown animation */
</style>
