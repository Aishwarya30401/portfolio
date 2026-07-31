import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Components/Home/Home.vue'
import About from '@/Components/About.vue'
// Import these after you create the files
// import Skills from '@/Components/Skills.vue'
// import Projects from '@/Components/Projects.vue'
// import Experience from '@/Components/Experience.vue'
// import Contact from '@/Components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    // {
    //   path: '/skills',
    //   name: 'Skills',
    //   component: Skills,
    // },
    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   component: Projects,
    // },
    // {
    //   path: '/experience',
    //   name: 'Experience',
    //   component: Experience,
    // },
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact,
    // },
  ],
})

export default router