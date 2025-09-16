<template>
    <section id="projects" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Projects</h2>
        </div>
  
        <!-- Projects Loop -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col lg:flex-row items-center mb-12 lg:mb-16"
        >
          <!-- Text Content -->
          <div class="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6">{{ project.description }}</p>
            <div class="flex space-x-4">
              <a
                :href="project.liveLink"
                target="_blank"
                class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                See Live
              </a>
              <a
                :href="project.sourceCode"
                target="_blank"
                class="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Source Code
              </a>
            </div>
          </div>
  
          <!-- Image Content -->
          <div class="lg:w-1/2">
            <a :href="project.liveLink" target="_blank">
              <img
                :src="project.image"
                :alt="project.title + ' image'"
                class="rounded shadow-lg hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ProjectsSection",
    data() {
      return {
        projects: [
          {
            title: "Coming Soon...",
             description: "Thank you",
            liveLink: "https://example.com/live-project-1",
            sourceCode: "https://github.com/example/project-1",
            image: "./assets/project1.png",
          },
          {
          title: "Coming Soon...",
            description: "Thank you",
            liveLink: "https://example.com/live-project-2",
            sourceCode: "https://github.com/example/project-2",
            image: "./assets/project2.png",
          },
          // Add more projects here
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* No custom styles needed; everything is handled with Tailwind classes. */
  </style>
  