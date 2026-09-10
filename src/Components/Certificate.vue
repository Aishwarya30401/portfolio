<script setup lang="ts">
import { ref,onMounted  } from "vue";
import photonew from "../assets/shine start.jpeg";

import c1 from "../../public/Gemini_Generated_Image_vyqd41vyqd41vyqd (1).png";
import c2 from "../../public/Gemini_Generated_Image_78dnoe78dnoe78dn (1).png";
import c3 from "../../public/Gemini_Generated_Image_kigik8kigik8kigi.png";
import c4 from "../../public/Screenshot 2026-08-06 154143.png";
import c5 from "../../public/Screenshot 2026-08-06 154322.png";
import c6 from "../../public/Gemini_Generated_Image_c0erq9c0erq9c0er.png";
import c7 from "../../public/Gemini_Generated_Image_b0kqxgb0kqxgb0kq.png";
import c8 from "../../public/Screenshot 2026-08-06 174432.png";

const isLoading = ref(true);
onMounted(() => {
  // isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 400); // Show loader for 1.5 seconds
});

const certificates = [
  {
    title: "Vue.js Development",
    issuer: "Span Technology Services Pvt Ltd",
    year: "2026",
    image: photonew,
    credential: "#",
  },
 
  {
    title: "Frontend ",
    issuer: "Span Technology Services Pvt Ltd",
    year: "2024",
    image: c8,
    credential: "#",
  },
   {
    title: "Spoken English",
    issuer: "Anglophone",
    year: "2023",
    image: c7,
    credential: "#",
  },
   {
    title: "Frontend Development",
    issuer: "Span Technology Services Pvt Ltd",
    year: "2025",
    image: c2,
    credential: "#",
  },
 
  {
    title: "Web Developer Intern",
    issuer: "Zen N Zeal Pvt",
    year: "2023",
    image: c3,
    credential: "#",
  },
  {
    title: "JavaScript (Advanced)",
    issuer: "HackerRank",
    year: "2024",
    image: c1,
    credential: "#",
  },
  {
    title: "Git & GitHub",
    issuer: "Udemy",
    year: "2023",
    image: c4,
    credential: "#",
  },
  {
    title: "TypeScript Essentials",
    issuer: "Udemy",
    year: "2024",
    image: c5,
    credential: "#",
  },
  {
    title: "Vue 3 Composition API",
    issuer: "Udemy",
    year: "2024",
    image: c6,
    credential: "#",
  },
];
</script>

<template>
  
  <div v-if="isLoading" class="loader-container">
  <div class="loader"></div>
</div>
  <section class="certificate" v-else>
    <div class="container">
      <div class="heading">
        <span class="dot"></span>
        <h2>Certificates</h2>
      </div>

      <p class="subtitle">
        Professional certifications and achievements
      </p>

      <div class="certificate-grid">
        <div
          v-for="(certificate, index) in certificates"
          :key="index"
          class="certificate-card"
        >
          <div class="image-wrapper">
            <img
              :src="certificate.image"
              :alt="certificate.title"
            />
          </div>
<!-- 
          <div class="content">
            <h3>{{ certificate.title }}</h3>

            <p>{{ certificate.issuer }}</p>

            <span>{{ certificate.year }}</span>

            <a
              :href="certificate.credential"
              target="_blank"
            >
              View Certificate
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certificate {
  background: #07111f;
  min-height: 100vh;
  padding: 80px 20px;
}

.container {
  max-width: 1250px;
  margin: auto;
}

.heading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #b245ff;
  border-radius: 50%;
  box-shadow: 0 0 10px #b245ff;
}

.heading h2 {
  color: #fff;
  font-size: 42px;
}

.subtitle {
  color: #94a3b8;
  margin: 15px 0 45px;
}

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  align-items: start;
}

.certificate-card {
  background: #111b2d;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(178, 69, 255, 0.2);
  transition: 0.35s ease;
}

.certificate-card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 15px 35px rgba(123, 47, 247, 0.35);
}

.image-wrapper {
  width: 100%;
  padding: 12px;
  background: #0b1424;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 12px;
}

.content {
  padding: 22px;
}

.content h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
}

.content p {
  color: #b245ff;
  margin-bottom: 8px;
}

.content span {
  color: #cbd5e1;
  display: block;
  margin-bottom: 20px;
}

.content a {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 30px;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  transition: 0.3s;
}

.content a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(123, 47, 247, 0.35);
}

/* Tablet */

@media (max-width: 768px) {
  .heading h2 {
    font-size: 32px;
  }

  .certificate-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */

@media (max-width: 480px) {
  .certificate {
    padding: 60px 15px;
  }

  .heading h2 {
    font-size: 28px;
  }

  .content {
    padding: 18px;
  }

  .content h3 {
    font-size: 18px;
  }

  .content a {
    width: 100%;
    text-align: center;
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