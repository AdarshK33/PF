<template>
  <header class="fixed top-0 left-0 z-50 w-full animated-saffron text-white shadow-md">
    <nav class="flex justify-between items-center px-5 py-7">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-semibold font-cursive">
        Adarsh Creations
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <NuxtLink to="/" class="nav-link" exact>
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link">
            About Me
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills" class="nav-link">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="nav-link">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link">
            Contact Us
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white shadow-md">
      <ul class="flex flex-col space-y-3 p-4">
        <li><NuxtLink to="/" exact class="mobile-link" @click="closeMenu">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="mobile-link" @click="closeMenu">About Me</NuxtLink></li>
        <li><NuxtLink to="/skills" class="mobile-link" @click="closeMenu">Skills</NuxtLink></li>
        <li><NuxtLink to="/projects" class="mobile-link" @click="closeMenu">Projects</NuxtLink></li>
        <li><NuxtLink to="/contact" class="mobile-link" @click="closeMenu">Contact Us</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const closeMenu = () => (isOpen.value = false);
</script>

<style scoped>
/* 🌅 Animated saffron */
.animated-saffron {
  background: linear-gradient(270deg, #ff9933, #ff7f50, #ffb347);
  background-size: 400% 400%;
  animation: saffronShift 6s ease infinite;
}

@keyframes saffronShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Desktop nav links */
.nav-link {
  position: relative;
  padding-bottom: 6px;
  font-weight: 700;
  transition: color 0.3s ease;
}

/* Active route underline */
.nav-link.router-link-exact-active {
  border-bottom: 3px solid white;
}

/* Mobile links */
.mobile-link {
  display: block;
  font-weight: 700;
  color: #374151;
  padding-bottom: 4px;
}

.mobile-link.router-link-exact-active {
  border-bottom: 3px solid #ff9933;
}
</style>
