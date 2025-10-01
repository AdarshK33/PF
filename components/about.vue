<template>
  <div 
    id="About" 
    class="flex flex-col md:flex-row bg-white shadow-lg rounded-xl mx-auto my-10 p-5 md:space-x-6"
  >
    <img 
      src="~/assets/images/adarsh.jpg" 
      alt="Profile" 
      class="rounded-lg w-full md:w-1/3 object-cover" 
    />

    <div class="mt-4 md:mt-0 space-y-3 text-gray-700">
      <p class="text-xl font-bold text-gray-800">
        <span>{{ aboutTitle }}</span><span v-if="typingStage === 1" class="cursor"></span>
      </p>

      <p class="text-sm font-semibold">
        <span>{{ role }}</span><span v-if="typingStage === 2" class="cursor"></span>
      </p>

      <p><span>{{ line1 }}</span><span v-if="typingStage === 3" class="cursor"></span></p>
      <p><span>{{ line2 }}</span><span v-if="typingStage === 4" class="cursor"></span></p>
      <p><span>{{ line3 }}</span><span v-if="typingStage === 5" class="cursor"></span></p>

      <NuxtLink 
        to="/contact" 
        class="block px-3 py-2 bg-gray-800 text-white rounded-md text-center"
      >
        Hire Me
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Full text content
const fullAboutTitle = "About Me";
const fullRole = "MER[v]N Full Stack Developer";
const fullLine1 = "Hello, My name is Adarsh Kumar. I am a Full Stack Developer, I am passionate about coding and eager to work with organizations.";
const fullLine2 = "I excel in web + application development using React.js, Node.js, and Vue.js. I have worked on various projects integrating APIs, implementing robust Client(FE) & (BE) architectures, managing databases, and optimizing performance.";
const fullLine3 = "If you have any project or need software for your business, contact me. I deliver projects promptly.";

// Reactive refs
const aboutTitle = ref("");
const role = ref("");
const line1 = ref("");
const line2 = ref("");
const line3 = ref("");

const typingStage = ref(0); // Track which line is being typed

// Typewriter effect helper
function typeEffect(text: string, targetRef: any, speed = 40, delay = 0, stage: number) {
  let i = 0;
  setTimeout(function typeChar() {
    typingStage.value = stage;
    if (i < text.length) {
      targetRef.value += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  }, delay);
}

onMounted(() => {
  typeEffect(fullAboutTitle, aboutTitle, 70, 0, 1);
  typeEffect(fullRole, role, 70, 800, 2);
  typeEffect(fullLine1, line1, 30, 1600, 3);
  typeEffect(fullLine2, line2, 30, 4000, 4);
  typeEffect(fullLine3, line3, 30, 8000, 5);
});
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: currentColor;
  margin-left: 2px;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
