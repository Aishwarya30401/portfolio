<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ref, onMounted } from "vue";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Aishwarya_Resume_1.pdf";
  link.download = "Aishwarya_Resume_1.pdf";
  link.click();
};

const letsTalk = () => {
  window.location.href =
    "mailto:aishu30401@gmail.com?subject=Frontend Developer Opportunity&body=Hi Aishwarya,%0D%0A%0D%0AI would like to discuss a job opportunity with you.";
};

const openWhatsApp = () => {
  window.open(
    "https://wa.me/919791719807?text=Hi%20Aishwarya,%20I%20would%20like%20to%20discuss%20a%20Frontend%20Developer%20opportunity.",
    "_blank"
  );
};

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>

  <section class="hero" v-else>
    <div class="hero-container">
      <!-- LEFT CONTENT -->
      <div class="left">
        <p class="hello">Hi, I'm</p>
        <h1>Aishwarya <span>V</span></h1>
        <h2>Frontend Developer</h2>

        <p class="tech">
          Vue.js | Nuxt.js | TypeScript | JavaScript | Wordpress | Firebase
        </p>

        <p class="description">
          I build accessible, responsive, and user-friendly web applications with modern technologies.
        </p>

        <div class="buttons">
          <button class="resume" @click="downloadResume">Download Resume</button>
          <button class="talk" @click="letsTalk">Let's Talk</button>
        </div>

        <!-- SOCIAL ICONS -->
        <div class="socials">
          <a
            href="https://www.linkedin.com/in/aishwarya-v-960692408/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://github.com/Aishwarya30401"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>

          <a href="mailto:aishu30401@gmail.com" title="Email">
            <i class="fas fa-envelope"></i>
          </a>

          <a href="#" @click.prevent="openWhatsApp" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="right">
        <div class="profile-wrapper">
          <div class="avatar-circle">
            <img src="../assets/Gemini_Generated_Image_t22ck0t22ck0t22c.png" alt="Aishwarya Profile" class="profile-img" />
          </div>

          <div class="experience">
            <h2>3.5+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* MAIN LAYOUT WRAPPER */
.hero {
  min-height: calc(100vh - 80px);
  background: #07111f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 5%;
  box-sizing: border-box;
  width: 100%;
}

/* CONSTRAINED CENTERED CONTAINER (Fixes ultra-wide dispersion) */
.hero-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 0 auto;
}

/* LEFT CONTENT */
.left {
  flex: 1;
  max-width: 580px;
  color: white;
}

.hello {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: #e2e8f0;
  margin-bottom: 8px;
}

h1 {
  font-size: clamp(2.4rem, 4.2vw, 4rem);
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.1;
}

h1 span {
  background: linear-gradient(90deg, #ff65d8, #6d7bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  margin-bottom: 16px;
  color: #f1f5f9;
  font-weight: 600;
}

.tech {
  color: #cbd5e1;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  margin-bottom: 16px;
  line-height: 1.5;
}

.description {
  color: #94a3b8;
  line-height: 1.7;
  font-size: clamp(0.9rem, 1.1vw, 1.05rem);
}

/* BUTTONS */
.buttons {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.resume {
  padding: 12px 26px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.resume:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(178, 69, 255, 0.4);
}

.talk {
  padding: 12px 28px;
  border: 2px solid #475569;
  background: transparent;
  color: white;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.talk:hover {
  border-color: #a64cff;
  background: rgba(166, 76, 255, 0.1);
}

/* SOCIAL ICONS */
.socials {
  display: flex;
  gap: 14px;
  margin-top: 32px;
}

.socials a {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #182235;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.socials a:hover {
  background: #8b4bff;
  transform: translateY(-4px);
}

/* RIGHT SECTION - ENLARGED PROFILE CIRCLE */
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px; /* Bigger size for hero prominence */
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Multi-color gradient ring with soft glow */
.avatar-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, #ff65d8, #7b2ff7, #6d7bff);
  box-shadow: 0 0 50px rgba(178, 69, 255, 0.35);
  box-sizing: border-box;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

/* FLOATING EXPERIENCE BADGE */
.experience {
  position: absolute;
  right: -5px;
  bottom: 20px;
  background: rgba(20, 26, 40, 0.94);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 16px 24px;
  text-align: center;
  z-index: 2;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.experience h2 {
  color: #b44dff;
  font-size: 2.1rem;
  margin: 0;
  line-height: 1;
}

.experience p {
  color: #e2e8f0;
  margin: 4px 0 0 0;
  font-size: 0.85rem;
  white-space: nowrap;
}

/* LOADER */
.loader-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #07111f;
  z-index: 9999;
}

.loader {
  width: 48px;
  height: 48px;
  border: 4px solid #b245ff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1024px) {
  .profile-wrapper {
    max-width: 380px;
  }
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 36px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }

  .buttons,
  .socials {
    justify-content: center;
  }

  .profile-wrapper {
    max-width: 330px;
  }

  .experience {
    right: 0px;
    bottom: -10px;
    padding: 12px 18px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 16px;
  }

  .profile-wrapper {
    max-width: 260px;
  }

  .buttons {
    width: 100%;
    flex-direction: column;
  }

  .resume,
  .talk {
    width: 100%;
  }

  .experience {
    position: relative;
    right: auto;
    bottom: auto;
    margin-top: 16px;
  }
}
</style>