<template>
  <footer id="ContactUs" class="bg-gray-900 text-white py-6">
    <div class="container mx-auto text-center">
      <a
        href="/contact-us"
        class="text-lg font-semibold hover:text-gray-400"
        @click="trackContactClick"
      >
        Contact Us
      </a>

      <p class="mt-2">
        Need to get in touch with Adarsh? <br />
        Contact through the links below!
      </p>

      <!-- Social Icons -->
      <div class="flex justify-center space-x-6 mt-4">
        <a
          href="https://github.com/AdarshK33"
          target="_blank"
          class="social-icon git"
          aria-label="GitHub"
          @click="trackSocial('GitHub')"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          class="social-icon twitter"
          aria-label="Twitter"
          @click="trackSocial('Twitter')"
        >
          <i class="fab fa-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/adarsh_k2k22/"
          target="_blank"
          class="social-icon insta"
          aria-label="Instagram"
          @click="trackSocial('Instagram')"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/adarsh-kumar-71ab26101/"
          target="_blank"
          class="social-icon linkedin"
          aria-label="LinkedIn"
          @click="trackSocial('LinkedIn')"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>

        <a
          href="mailto:adarsh.kumar10201@gmail.com"
          target="_blank"
          class="social-icon gmail"
          aria-label="Email"
          @click="trackSocial('Email')"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { trackEvent, EVENTS } from '@/lib/analytics'

export default {
  name: "FooterComponent",
  methods: {
    trackContactClick() {
      trackEvent(EVENTS.FOOTER_CONTACT_CLICKED, {
        common: { location: 'footer' }
      })
    },
    trackSocial(platform) {
      trackEvent(EVENTS.FOOTER_SOCIAL_CLICKED, {
        common: {
          platform,
          location: 'footer'
        }
      })
    }
  }
};
</script>

<style>
@import "@fortawesome/fontawesome-free/css/all.min.css";

/* General icon style */
.social-icon {
  font-size: 1.8rem;
  color: #ffffff;
  transition: all 0.4s ease-in-out;
}

/* Rotation animation on hover */
.social-icon:hover {
  color: #dea3b7; /* your preferred highlight color 💖 */
  transform: rotate(360deg) scale(1.2);
  -webkit-transform: rotate(360deg) scale(1.2);
}

/* Instagram */
.insta:hover {
  color: transparent;
  background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  -webkit-background-clip: text;
  background-clip: text;
  transform: rotate(360deg) scale(1.3);
}

/* Twitter + LinkedIn */
.twitter:hover,
.linkedin:hover {
  color: transparent;
  background: linear-gradient(
    45deg,
    #000080,
    #4c85ef,
    #55b3e9,
    #88d6ee,
    #4f5bd5
  );
  -webkit-background-clip: text;
  background-clip: text;
  transform: rotate(360deg) scale(1.3);
}

/* Gmail */
.gmail:hover {
  color: transparent;
  background: linear-gradient(
    45deg,
    #db6f27,
    #fa7e1e,
    #d6561f,
    #ee2f4b,
    #fb8f02
  );
  -webkit-background-clip: text;
  background-clip: text;
  transform: rotate(360deg) scale(1.3);
}

/* GitHub */
.git:hover {
  color: transparent;
  background: linear-gradient(45deg, #00000a, #00000f);
  -webkit-background-clip: text;
  background-clip: text;
  transform: rotate(360deg) scale(1.3);
}
</style>
