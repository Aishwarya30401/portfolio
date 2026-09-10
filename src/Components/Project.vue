<script setup lang="ts">
import { ref, onMounted } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projects = [
  {
    title: "TaxBandits",
    description:
      "A tax filing platform where I developed responsive UI components, integrated REST APIs, and improved application performance using Vue.js.",
    technologies: [
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
      { name: "Vuetify", icon: "fab fa-vuejs", color: "#1867c0" },
      { name: "REST API", icon: "fas fa-plug", color: "#ff6c37" },
      { name: "Vue 3", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "Vue 2", icon: "fab fa-vuejs", color: "#35495e" },
      { name: "Nuxt.js", icon: "fas fa-mountain", color: "#00dc82" },
      { name: "Composition API", icon: "fas fa-cubes", color: "#a855f7" },
      { name: "Options API", icon: "fas fa-layer-group", color: "#3b82f6" },
    ],
    github: "#",
    live: "https://www.taxbandits.com/",
  },
  {
    title: "Book Discovery App",
    description:
      "An interactive web application for searching, filtering, and discovering books with a modern dynamic user interface.",
    technologies: [
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
      { name: "REST API", icon: "fas fa-plug", color: "#ff6c37" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
      { name: "Pinia", icon: "fas fa-layer-group", color: "#ffd43b" },
    ],
    github: "#",
    live: "https://shelf-books-discovery.netlify.app/",
  },
  {
    title: "Plant Discovery App",
    description:
      "A web application designed for exploring plant species, care guides, and botanical details with an intuitive responsive UI.",
    technologies: [
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
      { name: "Vite", icon: "fas fa-bolt", color: "#646cff" },
    ],
    github: "#",
    live: "https://dancing-blini-ddab6b.netlify.app/",
  },
  {
    title: "React To-Do List App",
    description:
      "A feature-rich task management app built with React.js featuring task creation, editing, status toggling, and local storage persistence.",
    technologies: [
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
      { name: "Hooks", icon: "fas fa-anchor", color: "#00d8ff" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
      { name: "LocalStorage", icon: "fas fa-database", color: "#00e676" },
    ],
    github: "https://github.com/Aishwarya30401/",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Vue 3 and TypeScript showcasing my skills, projects, and experience with smooth animations.",
    technologies: [
      { name: "Vue 3", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
      { name: "Vite", icon: "fas fa-bolt", color: "#646cff" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" },
    ],
    github: "https://github.com/Aishwarya30401/",
    live: "#",
  },
  {
    title: "Authentication System",
    description:
      "Implemented Firebase Authentication and Single Sign-On (SSO) with secure login, route guards, and user session management.",
    technologies: [
      { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883" },
      { name: "Firebase", icon: "fas fa-fire", color: "#ffca28" },
      { name: "SSO", icon: "fas fa-lock", color: "#4285f4" },
      { name: "Pinia", icon: "fas fa-layer-group", color: "#ffd43b" },
    ],
    github: "#",
    live: "#",
  },
];

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>

  <section class="projects" v-else>
    <div class="container">
      <div class="heading">
        <span class="dot"></span>
        <h2>Projects</h2>
      </div>

      <p class="subtitle">Here are some of the projects I have worked on</p>

      <div class="project-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="tech">
              <span v-for="tech in project.technologies" :key="tech.name">
                <i :class="tech.icon" :style="{ color: tech.color }"></i>
                {{ tech.name }}
              </span>
            </div>
          </div>

          <div class="buttons">
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              v-if="project.github !== '#'"
              class="btn btn-github"
            >
              <i class="fab fa-github"></i> Code
            </a>
            <a
              :href="project.live"
              target="_blank"
              rel="noopener noreferrer"
              v-if="project.live !== '#'"
              class="btn btn-live"
            >
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.projects {
  min-height: 100vh;
  background: #07111f;
  color: #ffffff;
  padding: 80px 20px;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
}

.heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #b245ff;
  border-radius: 50%;
  box-shadow: 0 0 12px #b245ff;
}

.heading h2 {
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
}

.subtitle {
  color: #b9c0d4;
  margin-left: 22px;
  margin-bottom: 45px;
  font-size: 17px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background: #111b2d;
  padding: 30px;
  border-radius: 18px;
  border: 1px solid rgba(178, 69, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 15px 35px rgba(123, 47, 247, 0.25);
}

.card-content {
  display: flex;
  flex-direction: column;
}

.project-card h3 {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.project-card p {
  color: #b9c0d4;
  line-height: 1.6;
  font-size: 15px;
  margin-bottom: 20px;
}

.tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.tech span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(123, 47, 247, 0.12);
  color: #e2e8f0;
  border: 1px solid rgba(178, 69, 255, 0.3);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: border-color 0.3s ease, transform 0.2s ease;
}

.tech span:hover {
  border-color: #b245ff;
  transform: translateY(-2px);
}

.tech span i {
  font-size: 14px;
}

.buttons {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.btn-live {
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  color: #ffffff;
}

.btn-github {
  background: #1a2638;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-live:hover {
  box-shadow: 0 8px 20px rgba(178, 69, 255, 0.4);
}

.btn-github:hover {
  background: #23334a;
  border-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 576px) {
  .projects {
    padding: 50px 16px;
  }

  .heading {
    justify-content: center;
  }

  .heading h2 {
    font-size: 32px;
  }

  .subtitle {
    text-align: center;
    margin-left: 0;
    margin-bottom: 30px;
    font-size: 15px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-card {
    padding: 22px;
  }
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