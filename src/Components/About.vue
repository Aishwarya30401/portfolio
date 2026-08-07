<script setup lang="ts">
import { ref,onMounted  } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
const isLoading = ref(true);
onMounted(() => {
  // isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 300); // Show loader for 1.5 seconds
});
const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Frontend Development",
    description:
      "Building responsive, scalable and modern web applications using Vue.js, Nuxt.js, React.js and TypeScript.",
  },

  {
    icon: "fas fa-layer-group",
    title: "Vuetify UI Development",
    description:
      "Building modern Material Design interfaces using Vuetify components, themes and responsive layouts.",
  },

  {
    icon: "fas fa-code",
    title: "HTML & CSS Static Websites",
    description:
      "Creating fast, responsive and SEO-friendly static websites using HTML5, CSS3, Bootstrap and modern frontend practices.",
  },

  {
    icon: "fab fa-wordpress",
    title: "WordPress Development",
    description:
      "Building and customizing WordPress websites, themes, plugins and managing content-based websites.",
  },

  {
    icon: "fas fa-plug",
    title: "API Integration",
    description:
      "Integrating REST APIs, third-party services and managing application data flow efficiently.",
  },

  {
    icon: "fas fa-route",
    title: "Routing & Navigation",
    description:
      "Implementing Vue Router, dynamic routes, navigation guards and smooth page navigation.",
  },

  {
    icon: "fas fa-lock",
    title: "SSO Integration",
    description: "Implementing Single Sign-On authentication and secure user access management.",
  },

  {
    icon: "fas fa-sliders",
    title: "Environment Configuration",
    description:
      "Managing environment variables, application configurations and deployment settings.",
  },

  {
    icon: "fas fa-code-branch",
    title: "CI/CD Pipeline",
    description:
      "Setting up build processes, automated deployments and continuous integration workflows.",
  },

  {
    icon: "fas fa-robot",
    title: "AI Assisted Development",
    description:
      "Using AI coding tools to improve productivity, debugging, code quality and development workflow.",
  },

  {
    icon: "fas fa-list-check",
    title: "Agile & Scrum Development",
    description:
      "Working with Agile methodology, sprint planning, daily standups and Scrum development practices.",
  },

  {
    icon: "fas fa-ticket",
    title: "Jira & Redmine Tools",
    description:
      "Managing tasks, tracking bugs and collaborating with teams using Jira and Redmine tools.",
  },

  {
    icon: "fas fa-fire",
    title: "Firebase Integration",
    description:
      "Implementing Firebase authentication, database integration and cloud-based solutions.",
  },

  {
    icon: "fas fa-gauge-high",
    title: "Performance Optimization",
    description:
      "Optimizing application speed, SEO, lazy loading, code splitting and overall performance.",
  },

  {
    icon: "fas fa-layer-group",
    title: "State Management",
    description:
      "Managing application state using Vuex, Pinia and modern frontend state management patterns.",
  },

  {
    icon: "fas fa-code-branch",
    title: "Migration & Modernization",
    description:
      "Migrating Vue 2 applications to Vue 3, JavaScript to TypeScript and improving existing applications.",
  },

  {
    icon: "fas fa-gears",
    title: "Maintenance & Support",
    description: "Providing bug fixes, feature enhancements and continuous application support.",
  },
];
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>
  <section class="services" v-else>
    <div class="container">
      <div class="heading">
        <span class="dot"></span>

        <h2>Services</h2>
      </div>

      <p class="subtitle">What I can help you with</p>

      <div class="service-grid">
        <div v-for="service in services" :key="service.title" class="card">
          <div class="icon">
            <i :class="service.icon"></i>
          </div>

          <h3>
            {{ service.title }}
          </h3>

          <p>
            {{ service.description }}
          </p>
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

.services {
  width: 100%;

  background: #07111f;

  padding: 70px 20px;
}

.container {
  max-width: 1250px;

  margin: auto;
}

.heading {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 10px;
}

.dot {
  width: 8px;

  height: 8px;

  background: #b245ff;

  border-radius: 50%;

  box-shadow: 0 0 12px #b245ff;
}

.heading h2 {
  color: white;

  font-size: 42px;
}

.subtitle {
  color: #b9c0d4;

  margin-left: 18px;

  margin-bottom: 50px;

  font-size: 18px;
}

.service-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 25px;
}

.card {
  background: #141d2e;

  border: 1px solid rgba(178, 69, 255, 0.15);

  border-radius: 18px;

  padding: 35px 25px;

  text-align: center;

  transition: 0.35s ease;
}

.card:hover {
  transform: translateY(-10px);

  border-color: #b245ff;

  box-shadow: 0 15px 35px rgba(123, 47, 247, 0.35);
}

.icon {
  width: 75px;

  height: 75px;

  margin: 0 auto 25px;

  border-radius: 50%;

  border: 2px solid #7b2ff7;

  display: flex;

  justify-content: center;

  align-items: center;
}

.icon i {
  font-size: 34px;

  background: linear-gradient(90deg, #7b2ff7, #b245ff);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
}

.card h3 {
  color: white;

  font-size: 22px;

  margin-bottom: 15px;

  line-height: 1.4;
}

.card p {
  color: #b9c0d4;

  line-height: 1.8;

  font-size: 15px;
}

@media (max-width: 992px) {
  .services {
    padding: 60px 25px;
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .services {
    padding: 50px 15px;
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
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 30px 20px;
  }

  .icon {
    width: 65px;

    height: 65px;
  }

  .icon i {
    font-size: 28px;
  }

  .card h3 {
    font-size: 20px;
  }
}

@media (max-width: 380px) {
  .heading h2 {
    font-size: 28px;
  }

  .card p {
    font-size: 14px;
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
