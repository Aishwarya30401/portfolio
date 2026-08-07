<script setup lang="ts">
import { ref, onMounted } from "vue";
const projects = [
  {
    title: "TaxBandits",
    description:
      "A tax filing platform where I developed responsive UI components, integrated REST APIs, and improved application performance using Vue.js.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Vuetify",
      "REST API",
      "Vue3",
      "Vue2",
      "Nuxt.js",
      "Composition API",
      "Option API",
    ],
    github: "#",
    live: "https://www.taxbandits.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Vue 3 and TypeScript showcasing my skills, projects, and experience with smooth animations.",
    technologies: ["Vue 3", "TypeScript", "Vite", "CSS3"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
  },
  {
    title: "Authentication System",
    description:
      "Implemented Firebase Authentication and Single Sign-On (SSO) with secure login, route guards, and user session management.",
    technologies: ["Vue.js", "Firebase", "SSO", "Pinia"],
    github: "#",
    live: "#",
  },
];
const isLoading = ref(true);
onMounted(() => {
  // isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 300); // Show loader for 1.5 seconds
});
</script>
<template>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>
  <section class="projects" v-else>
    <div class="container">
      <h2>My Projects</h2>
      <p class="subtitle">Here are some of the projects I have worked on.</p>
      <div class="project-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech">
            <span v-for="tech in project.technologies" :key="tech"> {{ tech }} </span>
          </div>
          <div class="buttons">
            <a :href="project.github" target="_blank" v-if="project.github !== '#'"> GitHub </a>
            <a :href="project.live" target="_blank" v-if="project.live !== '#'"> Live Demo </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.projects {
  min-height: 100vh;
  background: #07111f;
  color: white;
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;
}

h2 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  text-align: center;
  color: #cbd5e1;
  margin-bottom: 50px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 25px;
}

.project-card {
  background: #0f172a;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid rgba(178, 69, 255, 0.3);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 10px 30px rgba(123, 47, 247, 0.35);
}

.project-card h3 {
  color: #b245ff;
  margin-bottom: 15px;
}

.project-card p {
  color: #cbd5e1;
  line-height: 1.6;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.tech span {
  background: rgba(123, 47, 247, 0.15);
  color: white;
  border: 1px solid #7b2ff7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.buttons {
  display: flex;
  gap: 15px;
}

.buttons a {
  text-decoration: none;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  color: white;
  padding: 10px 18px;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.buttons a:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(123, 47, 247, 0.45);
}
.container {
  min-height: 100vh;
}

.loader-container {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #07111f;
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;

  border: 5px solid #b245ff;
  border-top: 5px solid #e5e5e5;

  border-radius: 50%;

  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
