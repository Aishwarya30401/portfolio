<script setup lang="ts">
import { ref, onMounted } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});

const services = [
  {
    icon: "fas fa-laptop-code",
    color: "#61DAFB", // React Cyan accent
    title: "Frontend Development",
    description:
      "Building responsive, scalable, and modern web applications using Vue.js, Nuxt.js, React.js, and TypeScript.",
  },
  {
    icon: "fab fa-react",
    color: "#61DAFB", // Official React Blue
    title: "React.js Development",
    description:
      "Developing component-based, high-performance web applications using React.js, hooks, Redux, and modern JavaScript standards.",
  },
  {
    icon: "fab fa-vuejs",
    color: "#4FC08D", // Official Vue Green
    title: "Vue UI Development",
    description:
      "Building modern Material Design interfaces using Vuetify components, themes, and responsive layouts.",
  },
  {
    icon: "fab fa-html5",
    color: "#E34F26", // Official HTML5 Orange
    title: "HTML & CSS Static Websites",
    description:
      "Creating fast, responsive, and SEO-friendly static websites using HTML5, CSS3, Bootstrap, and modern frontend practices.",
  },
  {
    icon: "fab fa-wordpress",
    color: "#21759B", // Official WordPress Blue
    title: "WordPress Development",
    description:
      "Building and customizing WordPress websites, themes, plugins, and managing content-based websites.",
  },
  {
    icon: "fas fa-plug",
    color: "#FF6C37", // Postman Orange style for APIs
    title: "API Integration",
    description:
      "Integrating REST APIs, third-party services, and managing application data flow efficiently.",
  },
  {
    icon: "fas fa-route",
    color: "#00C7B7",
    title: "Routing & Navigation",
    description:
      "Implementing Vue Router and React Router, dynamic routes, navigation guards, and smooth page navigation.",
  },
  {
    icon: "fas fa-lock",
    color: "#4285F4", // Google Auth Blue
    title: "SSO Integration",
    description:
      "Implementing Single Sign-On authentication and secure user access management.",
  },
  {
    icon: "fas fa-sliders",
    color: "#A855F7",
    title: "Environment Configuration",
    description:
      "Managing environment variables, application configurations, and deployment settings.",
  },
  {
    icon: "fab fa-github",
    color: "#FFFFFF", // Official GitHub White
    title: "CI/CD Pipeline",
    description:
      "Setting up build processes, automated deployments, and continuous integration workflows.",
  },
  {
    icon: "fas fa-robot",
    color: "#10A37F", // OpenAI Green
    title: "AI Assisted Development",
    description:
      "Using AI coding tools to improve productivity, debugging, code quality, and development workflow.",
  },
  {
    icon: "fas fa-list-check",
    color: "#0052CC", // Jira Blue
    title: "Agile & Scrum Development",
    description:
      "Working with Agile methodology, sprint planning, daily standups, and Scrum development practices.",
  },
  {
    icon: "fab fa-jira",
    color: "#0052CC", // Official Jira Blue
    title: "Jira & Redmine Tools",
    description:
      "Managing tasks, tracking bugs, and collaborating with teams using Jira and Redmine tools.",
  },
  {
    icon: "fas fa-fire",
    color: "#FFCA28", // Official Firebase Yellow/Amber
    title: "Firebase Integration",
    description:
      "Implementing Firebase authentication, database integration, and cloud-based solutions.",
  },
  {
    icon: "fas fa-gauge-high",
    color: "#00E676", // Performance Speed Green
    title: "Performance Optimization",
    description:
      "Optimizing application speed, SEO, lazy loading, code splitting, and overall performance.",
  },
  {
    icon: "fas fa-diagram-project",
    color: "#764ABC", // Redux Purple
    title: "State Management",
    description:
      "Managing application state using Vuex, Pinia, Redux, and modern frontend state management patterns.",
  },
  {
    icon: "fas fa-code-compare",
    color: "#3178C6", // TypeScript Blue
    title: "Migration & Modernization",
    description:
      "Migrating legacy applications to modern Vue 3 / React.js stacks, JavaScript to TypeScript, and codebase optimizations.",
  },
  {
    icon: "fas fa-gears",
    color: "#FFB300",
    title: "Maintenance & Support",
    description:
      "Providing bug fixes, feature enhancements, and continuous application support.",
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
          <div class="icon" :style="{ borderColor: service.color, boxShadow: `0 0 15px ${service.color}33` }">
            <i :class="service.icon" :style="{ color: service.color }"></i>
          </div>

          <h3>{{ service.title }}</h3>

          <p>{{ service.description }}</p>
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

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  background: #141d2e;
  border: 1px solid rgba(178, 69, 255, 0.15);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 12px 30px rgba(123, 47, 247, 0.25);
}

.icon {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.02);
  transition: transform 0.3s ease;
}

.card:hover .icon {
  transform: scale(1.1);
}

.icon i {
  font-size: 30px;
  background: none;
  -webkit-text-fill-color: initial;
}

.card h3 {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 12px;
  line-height: 1.3;
}

.card p {
  color: #b9c0d4;
  line-height: 1.6;
  font-size: 14.5px;
}

@media (max-width: 992px) {
  .services {
    padding: 60px 20px;
  }

  .service-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .services {
    padding: 45px 16px;
  }

  .heading {
    justify-content: center;
  }

  .heading h2 {
    font-size: 30px;
  }

  .subtitle {
    text-align: center;
    margin-left: 0;
    margin-bottom: 30px;
    font-size: 15px;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    padding: 24px 18px;
  }

  .icon {
    width: 60px;
    height: 60px;
  }

  .icon i {
    font-size: 26px;
  }

  .card h3 {
    font-size: 18px;
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
  width: 48px;
  height: 48px;
  border: 4px solid #b245ff;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>