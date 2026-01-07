<template>
  <header class="fixed top-0 left-0 z-50 w-full animated-saffron text-white shadow-md">
    <nav class="flex justify-between items-center px-5 py-7">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-lg font-semibold font-cursive"
        @click="trackLogo"
      >
        Adarsh Creations
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <NuxtLink to="/" class="nav-link" exact @click="trackNav('Home')">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" @click="trackNav('About Me')">
            About Me
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills" class="nav-link" @click="trackNav('Skills')">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="nav-link" @click="trackNav('Projects')">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link" @click="trackNav('Contact Us')">
            Contact Us
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Button -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white shadow-md">
      <ul class="flex flex-col space-y-3 p-4">
        <li>
          <NuxtLink to="/" exact class="mobile-link" @click="trackNav('Home'); closeMenu()">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="mobile-link" @click="trackNav('About Me'); closeMenu()">
            About Me
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills" class="mobile-link" @click="trackNav('Skills'); closeMenu()">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="mobile-link" @click="trackNav('Projects'); closeMenu()">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="mobile-link" @click="trackNav('Contact Us'); closeMenu()">
            Contact Us
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { trackEvent, EVENTS } from "@/lib/analytics";

const isOpen = ref(false);

const trackLogo = () => {
  trackEvent(EVENTS.NAV_LOGO_CLICKED, {
    common: { location: "header" }
  });
};

const trackNav = (label) => {
  trackEvent(EVENTS.NAV_LINK_CLICKED, {
    common: { label, location: "header" }
  });
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  trackEvent(
    isOpen.value
      ? EVENTS.NAVIGATION_MENU_OPEN
      : EVENTS.NAVIGATION_MENU_CLOSE,
    { common: { device: "mobile" } }
  );
};

const closeMenu = () => {
  trackEvent(EVENTS.NAVIGATION_MENU_CLOSE, {
    common: { device: "mobile" }
  });
  isOpen.value = false;
};
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
