<template>
  <section 
    class="relative h-screen bg-cover bg-center flex items-center justify-left custom-bg"
  >
    <div 
      class="text-center md:text-left space-y-4 p-4 
             absolute bottom-4 w-full 
             md:static md:w-auto md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2"
    >

      <!-- Typewriter Lines -->
      <p class="text-lg md:text-xl font-semibold text-gray-500 stroke-soft">
        <span>{{ line1 }}</span><span v-if="typingStage === 1" class="cursor"></span>
      </p>

   <p 
  class="text-3xl md:text-5xl font-bold tracking-wide stroke-soft-strong spotlight-text"
  :data-text="line2"
>
  <span>{{ line2 }}</span><span v-if="typingStage === 2" class="cursor"></span>
</p>
      <p class="text-lg md:text-2xl text-gray-700 font-light stroke-soft">
        <span>{{ line3 }}</span><span v-if="typingStage === 3" class="cursor"></span>
      </p>

      <!-- Buttons -->
      <div class="space-x-4 pt-4">
        <NuxtLink 
          to="/contact" 
          class="px-4 py-2 rounded-md border-2 border-gray-700 text-gray-700 font-semibold hover:bg-gray-700 hover:text-white transition-all"
        >
          Hire Me
        </NuxtLink>
        <a 
          href="/Adarsh-CV.pdf" 
          download 
          class="px-4 py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition-all"
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Full text lines
const fullLine1 = "Hello";
const fullLine2 = "I'M ADARSH";
const fullLine3 = "I am a Software Engineer & MERN FullStack Developer";

// Reactive refs
const line1 = ref("");
const line2 = ref("");
const line3 = ref("");
const typingStage = ref(0);

// Typing effect logic
function typeEffect(text: string, targetRef: any, speed = 70, delay = 0, stage: number) {
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
  typeEffect(fullLine1, line1, 70, 0, 1);       // Line 1 starts immediately
  typeEffect(fullLine2, line2, 70, 800, 2);     // Line 2 starts after delay
  typeEffect(fullLine3, line3, 50, 1800, 3);    // Line 3 starts after delay
});
</script>

<style scoped>
.custom-bg {
  font-family: inherit;
  background-image: url('~/assets/images/adarsh.jpg');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: right center;
}

/* Cursor blink */
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: currentColor;
  margin-left: 2px;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* Soft white stroke styles */
.stroke-soft {
  -webkit-text-stroke: 0.5px rgb(255 255 255 / 35%);
}

.stroke-soft-strong {
  -webkit-text-stroke: 1px rgb(255 255 255 / 35%);
}

.gradient-text {
  background: linear-gradient(90deg, #FF9933, #FFFFFF, #138808, #000080);
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px rgb(255 255 255 / 35%);
}
.spotlight-text {
  position: relative;
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  overflow: hidden;
}

.spotlight-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background: linear-gradient(
    to bottom,
    #FF9933 33%,  /* saffron */
    #FFFFFF 50%, 
    #000080 30%, 
    #138808 66%   /* green */
  );
  
  background-size: 100% 100%;
  -webkit-background-clip: text;
  color: transparent;

  clip-path: ellipse(120px 120px at 0% 50%);
  animation: flag-swing 4s ease-in-out infinite alternate;
}

@keyframes flag-swing {
  0% {
    clip-path: ellipse(120px 120px at 0% 50%);
  }
  50% {
    clip-path: ellipse(120px 120px at 50% 45%);
  }
  100% {
    clip-path: ellipse(120px 120px at 100% 50%);
  }
}

</style>
