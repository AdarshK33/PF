<template>
  <section id="projects" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 mt-6">
        <h2 class="text-3xl font-bold text-gray-800">Projects</h2>
      </div>

      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col lg:flex-row items-center mb-16"
      >
        <!-- Text -->
        <div class="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">
            {{ project.title }}
          </h3>

          <p class="text-gray-600 mb-6">
            {{ project.description }}
          </p>
           <p class="text-gray-600 mb-6">
           Client: {{ project.client }}
          </p>

          <div class="flex space-x-4">
            <button
              @click="togglePreview(index)"
              class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {{ activePreview == index ? 'Hide Preview' : 'Live Preview' }}
            </button>

            <a
              :href="project.liveLink"
              target="_blank"
              class="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Open in New Tab
            </a>
          </div>
        </div>

        <!-- Preview -->
        <div class="lg:w-1/2 w-full">
          <div
            v-if="activePreview === index"
            class="relative w-full h-[420px] border rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              :src="project.liveLink"
              class="w-full h-full"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>

          <!-- Thumbnail fallback -->
          <!-- <img
            v-else
            :src="project.image"
            :alt="project.title"
            class="rounded shadow-lg"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activePreview = ref(0);

const togglePreview = (index) => {
  activePreview.value = activePreview.value === index ? null : index;
};

const projects = [
  {
    title: "Rungold",
    description: "A comprehensive web application game showcasing modern design and functionality.",
    client: "Big Bazaar",
    liveLink: "https://rungold.netlify.app/",
    image: "/assets/project1.png",
  },
  {
    title: "Coming Soon...",
    description: "Thank you",
    liveLink: "https://example.com",
    image: "/assets/project2.png",
  },
];
</script>
