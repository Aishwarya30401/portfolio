<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from "vue";

// Dynamic imports to reduce initial bundle size
const sectionComponents: Record<string, any> = {
  home: defineAsyncComponent(() => import("../HomeInfo.vue")),
  about: defineAsyncComponent(() => import("../About.vue")),
  skills: defineAsyncComponent(() => import("../Skill.vue")),
  projects: defineAsyncComponent(() => import("../Project.vue")),
  certificate: defineAsyncComponent(() => import("../Certificate.vue")),
  experience: defineAsyncComponent(() => import("../Experince.vue")),
  contact: defineAsyncComponent(() => import("../Contact.vue")),
};

const activeSection = ref("home");
const menuOpen = ref(false); // Closed by default on mobile, desktop stays open via CSS

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificate", id: "certificate" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const currentComponent = computed(() => sectionComponents[activeSection.value]);

function redirectToItem(id: string) {
  activeSection.value = id;
  menuOpen.value = false;
}

function hireMe() {
  activeSection.value = "contact";
  menuOpen.value = false;
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <img src="../../assets/loagonew.png" alt="logo" />
    </div>

    <!-- Navigation Menu (Always visible on Desktop) -->
    <nav :class="['nav-menu', { show: menuOpen }]">
      <ul class="nav-links">
        <li
          v-for="item in menuItems"
          :key="item.id"
          :class="{ active: activeSection === item.id }"
        >
          <a href="#" @click.prevent="redirectToItem(item.id)">
            {{ item.name }}
          </a>
        </li>
      </ul>

      <!-- Mobile Hire Me Button inside mobile dropdown -->
      <button class="hire-btn mobile-hire-btn" @click="hireMe">Hire Me</button>
    </nav>

    <!-- Desktop Hire Me Button -->
    <button class="hire-btn desktop-hire-btn" @click="hireMe">Hire Me</button>

    <!-- Hamburger Toggle (Only displays on Mobile) -->
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle Navigation">
      <span v-if="!menuOpen">☰</span>
      <span v-else>✕</span>
    </button>
  </header>

  <main class="content">
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: #07111f;
}

/* NAVBAR DESKTOP STYLES */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: rgba(7, 17, 31, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

/* DESKTOP NAV MENU: OPEN & VISIBLE */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 35px;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 17px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b245ff;
}

.active a {
  color: #b245ff;
  font-weight: 600;
}

.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 3px;
  background: #b245ff;
  border-radius: 20px;
}

.hire-btn {
  padding: 12px 28px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hire-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(178, 69, 255, 0.4);
}

.hamburger {
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-hire-btn {
  display: none;
}

.content {
  padding-top: 90px;
  width: 100%;
  min-height: 100vh;
}

/* TABLET RESPONSIVENESS */
@media (max-width: 1024px) {
  .navbar {
    padding: 0 30px;
  }

  .nav-links {
    gap: 20px;
  }

  .nav-links a {
    font-size: 15px;
  }
}

/* MOBILE RESPONSIVENESS (Hamburger Triggered Only Here) */
@media (max-width: 768px) {
  .navbar {
    height: 75px;
    padding: 0 20px;
  }

  .logo img {
    width: 50px;
    height: 50px;
  }

  .hamburger {
    display: block;
  }

  .desktop-hire-btn {
    display: none;
  }

  .nav-menu {
    position: fixed;
    top: 75px;
    right: -100%;
    width: 100%;
    height: calc(100vh - 75px);
    background: #07111f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 40px;
    gap: 30px;
    transition: right 0.35s ease-in-out;
  }

  .nav-menu.show {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
  }

  .nav-links a {
    font-size: 18px;
    display: block;
    padding: 8px 0;
  }

  .mobile-hire-btn {
    display: block;
    margin-top: 15px;
    width: 80%;
    max-width: 250px;
  }

  .content {
    padding-top: 75px;
  }
}
</style>