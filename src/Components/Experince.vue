<script setup lang="ts">
import { ref, onMounted } from "vue";

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

  <section class="experience-section" v-else>
    <div class="header">
      <span class="dot"></span>
      <div>
        <h1>Experience & Project Work</h1>
        <p>My professional journey and featured projects</p>
      </div>
    </div>

    <div class="timeline">
      <!-- Professional Work -->
      <div class="timeline-item">
        <div class="icon active">💼</div>
        <div class="card">
          <span class="year">2023 - Present</span>
          <h2>Software Engineer</h2>
          <h4>Span Technologies Services Private Limited</h4>
          <ul>
            <li>Building scalable web applications using Vue 3, Nuxt.js, and TypeScript.</li>
            <li>Developing reusable components and optimizing performance.</li>
            <li>Integrating REST APIs and managing application state using Pinia.</li>
            <li>Collaborating with cross-functional teams in an Agile environment.</li>
          </ul>
        </div>
      </div>

      <!-- TaxBandits Project -->
      <div class="timeline-item">
        <div class="icon">🚀</div>
        <div class="card">
          <span class="year">2023 - 2024</span>
          <h2>TaxBandits Platform Development</h2>
          <h4>Key Technical Project</h4>
          <ul>
            <li>Developed responsive, accessible UI components for complex tax filing workflows.</li>
            <li>Architected and migrated components across Vue 2 and Vue 3 environments using Nuxt.js.</li>
            <li>Integrated REST APIs with state management using Composition & Options APIs.</li>
          </ul>
        </div>
      </div>

      <!-- Book Discovery App Project -->
      <div class="timeline-item">
        <div class="icon">📚</div>
        <div class="card">
          <span class="year">2024</span>
          <h2>Shelf - Book Discovery App</h2>
          <h4>Featured Web Application</h4>
          <ul>
            <li>Engineered a dynamic book search and cataloging application using Vue.js & TypeScript.</li>
            <li>Implemented persistent state management using Pinia for saved collections.</li>
            <li>Integrated external REST APIs for real-time book metadata and search indexing.</li>
          </ul>
        </div>
      </div>

      <!-- Plant Discovery App Project -->
      <div class="timeline-item">
        <div class="icon">🌿</div>
        <div class="card">
          <span class="year">2024</span>
          <h2>Plant Discovery Application</h2>
          <h4>Interactive Web Application</h4>
          <ul>
            <li>Designed and built an interactive botanical exploration interface using Vue.js and Vite.</li>
            <li>Created responsive UI layouts using modern CSS3 flexbox and grid architectures.</li>
            <li>Optimized page load speed and asset bundling for seamless mobile access.</li>
          </ul>
        </div>
      </div>

      <!-- Auth & Portfolio Work -->
      <div class="timeline-item">
        <div class="icon">🔒</div>
        <div class="card">
          <span class="year">2023</span>
          <h2>Auth System & Personal Portfolio</h2>
          <h4>Independent Engineering Projects</h4>
          <ul>
            <li>Implemented Firebase Authentication and Single Sign-On (SSO) with route guards and session management.</li>
            <li>Designed and built a modern personal developer portfolio using Vue 3, TypeScript, and Vite.</li>
          </ul>
        </div>
      </div>

      <!-- Junior Role -->
      <div class="timeline-item">
        <div class="icon">💼</div>
        <div class="card">
          <span class="year">2022 - 2023</span>
          <h2>Jr. Frontend Developer</h2>
          <h4>Zen N Zeal Private Limited</h4>
          <ul>
            <li>Developed responsive UI layouts using Vue.js, HTML5, CSS3, and Bootstrap.</li>
            <li>Maintained custom WordPress templates and frontend interface components.</li>
            <li>Resolved UI bugs and improved overall user interface consistency.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.experience-section {
  min-height: 100vh;
  padding: 50px 20px;
  background: #08111f;
  color: white;
}

.header {
  max-width: 1000px;
  margin: 0 auto 40px auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #9d4edd;
  border-radius: 50%;
  box-shadow: 0 0 10px #9d4edd;
}

.header h1 {
  font-size: 34px;
}

.header p {
  color: #a1a1aa;
  margin-top: 5px;
}

.timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #3f3f46;
}

.timeline-item {
  display: flex;
  gap: 24px;
  margin-bottom: 35px;
  position: relative;
}

.icon {
  width: 42px;
  height: 42px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  position: absolute;
  left: -51px;
  top: 0;
  z-index: 2;
}

.active {
  background: linear-gradient(135deg, #9d4edd, #6d28d9);
  border-color: #a855f7;
}

.card {
  width: 100%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid #2d3748;
  border-radius: 14px;
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #9d4edd;
  box-shadow: 0 10px 25px rgba(157, 78, 221, 0.15);
}

.year {
  color: #a855f7;
  font-size: 14px;
  font-weight: 600;
}

.card h2 {
  margin: 10px 0 6px;
  font-size: 24px;
}

.card h4 {
  color: #c084fc;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
}

.card ul {
  padding-left: 20px;
}

.card li {
  margin-bottom: 10px;
  color: #d1d5db;
  line-height: 1.6;
  font-size: 15px;
}

@media (max-width: 768px) {
  .experience-section {
    padding: 30px 15px;
  }

  .timeline {
    padding-left: 35px;
  }

  .timeline::before {
    left: 12px;
  }

  .icon {
    left: -38px;
    width: 34px;
    height: 34px;
    font-size: 14px;
  }

  .card h2 {
    font-size: 20px;
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