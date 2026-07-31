<script setup lang="ts">
import photonew from '../assets/shine start.jpeg'
const certificates = [
 
  {
    title: "Vue.js Development",
    issuer: "Udemy",
    year: "2026",
    image: photonew,
    credential: "#"
  },

  {
    title: "JavaScript (Advanced)",
    issuer: "HackerRank",
    year: "2024",
    image: "/certificates/javascript.png",
    credential: "#"
  },
  {
    title: "Frontend Development",
    issuer: "Coursera",
    year: "2023",
    image: "/certificates/frontend.png",
    credential: "#"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/certificates/responsive.png",
    credential: "#"
  },
  {
    title: "Git & GitHub",
    issuer: "Udemy",
    year: "2023",
    image: "/certificates/github.png",
    credential: "#"
  },
  {
    title: "TypeScript Essentials",
    issuer: "Udemy",
    year: "2024",
    image: "/certificates/typescript.png",
    credential: "#"
  }
]
</script>

<template>
  <section class="certificate">
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
          class="certificate-card"
          v-for="certificate in certificates"
          :key="certificate.title"
        >

          <img
            :src="certificate.image"
            :alt="certificate.title"
          />

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

          </div>

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
  color: white;
  font-size: 42px;
}

.subtitle {
  color: #94a3b8;
  margin: 15px 0 45px 18px;
}

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
}

.certificate-card {
  background: #111b2d;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(178,69,255,.2);
  transition: .35s;
}

.certificate-card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 15px 35px rgba(123,47,247,.35);
}

.certificate-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.content {
  padding: 22px;
}

.content h3 {
  color: white;
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
  background: linear-gradient(90deg,#7b2ff7,#b245ff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: .3s;
}

.content a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(123,47,247,.35);
}
</style>