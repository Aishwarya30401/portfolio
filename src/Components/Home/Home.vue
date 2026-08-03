<script setup lang="ts">
import { ref } from "vue";

import HomeInfo from "../HomeInfo.vue";
import About from "../About.vue";
import Skill from "../Skill.vue";
import Project from "../Project.vue";
import Certificate from "../Certificate.vue";
import Experience from "../Experince.vue";
import Contact from "../Contact.vue";

const activeSection = ref("home");
const menuOpen = ref(false);

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certificate", id: "certificate" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

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

    <div class="hamburger" @click="toggleMenu">☰</div>

    <nav :class="['nav-menu', { show: menuOpen }]">
      <ul class="nav-links">
        <li v-for="item in menuItems" :key="item.id" :class="{ active: activeSection === item.id }">
          <a href="#" @click.prevent="redirectToItem(item.id)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <button class="hire-btn" @click="hireMe">Hire Me</button>
  </header>
  <main class="content">
    <HomeInfo v-if="activeSection === 'home'" />

    <About v-if="activeSection === 'about'" />

    <Skill v-if="activeSection === 'skills'" />

    <Project v-if="activeSection === 'projects'" />

    <Certificate v-if="activeSection === 'certificate'" />

    <Experience v-if="activeSection === 'experience'" />

    <Contact v-if="activeSection === 'contact'" />
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

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: #07111f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  z-index: 1000;
}

.logo img {
  width: 70px;
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
  transition: 0.3s;
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
  cursor: pointer;
}

.hamburger {
  display: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.content {
  padding-top: 90px;
  width: 100%;
}

/* Tablet */

@media (max-width: 1024px) {
  .navbar {
    padding: 0 25px;
  }

  .nav-links {
    gap: 20px;
  }

  .nav-links a {
    font-size: 15px;
  }
}

/* Mobile */

@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .hamburger {
    display: block;
  }

  .hire-btn {
    display: none;
  }

  .nav-menu {
    position: absolute;
    top: 90px;
    left: -100%;
    width: 100%;
    background: #07111f;
    transition: 0.4s;
  }

  .nav-menu.show {
    left: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px 0;
  }
}
</style>
