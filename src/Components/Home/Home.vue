<script setup lang="ts">
import { useRouter } from 'vue-router'
import About from '../About.vue';
import Projetc from '../Project.vue';
import HomeInfo from '../HomeInfo.vue';
import Skill from '../Skill.vue';
import Certificate from '../Certificate.vue';
import Experince from '../Experince.vue';
import Contact from '../Contact.vue';
const router = useRouter()

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
]

function RedirecttoItem(path: string) {
  router.push(path)
}
const isActive = (path: string) => {
  return router.path.includes(path)
}
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <img src="../../assets/loagonew.png" alt="Logo" />
    </div>

   
<nav>
  <ul class="nav-links">
    <li
      v-for="item in menuItems"
      :key="item.path"
    >
      <a
        href=""
        @click.prevent="RedirecttoItem(item.path)"
      >
        {{ item.name }}
      </a>
    </li>
  </ul>
</nav>
    <button class="hire-btn">
      Hire Me
    </button>
  </header>




<HomeInfo></HomeInfo>
  <About ></About>
  <Projetc></Projetc>
  <Skill></Skill>
  <Certificate></Certificate>
  <Experince></Experince>
  <Contact></Contact>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  height: 90px;
  background: #07111f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
}

.logo img {
  width: 70px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 45px;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #b05cff;
}

.active a {
  color: white;
}

.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #b05cff;
  left: 0;
  bottom: -10px;
  border-radius: 20px;
}

.hire-btn {
  padding: 14px 35px;
  border: none;
  border-radius: 35px;
  background: linear-gradient(90deg, #7b2ff7, #9d4dff);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: .3s;
}

.hire-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(146, 68, 255, .5);
}
</style>