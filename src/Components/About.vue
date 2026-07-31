<script setup lang="ts">
const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Frontend Development",
    description:
      "Building responsive and modern web applications."
  },
  {
    icon: "fas fa-pencil-ruler",
    title: "UI/UX Implementation",
    description:
      "Converting designs into clean and pixel-perfect UI."
  },
  {
    icon: "fas fa-plug",
    title: "API Integration",
    description:
      "Integrating REST APIs and third-party services."
  },
  {
    icon: "fas fa-gauge-high",
    title: "Performance Optimization",
    description:
      "Optimizing speed, SEO and overall performance."
  },
  {
    icon: "fas fa-gears",
    title: "Maintenance & Support",
    description:
      "Providing support, bug fixes and feature enhancements."
  }
]
</script>

<template>
  <section class="services">
    <div class="container">
      <div class="heading">
        <span class="dot"></span>
        <h2>Services</h2>
      </div>

      <p class="subtitle">
        What I can help you with
      </p>

      <div class="service-grid">
        <div
          class="card"
          v-for="service in services"
          :key="service.title"
        >
          <div class="icon">
            <i :class="service.icon"></i>
          </div>

          <h3>{{ service.title }}</h3>

          <p>
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
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
  color: #fff;
  font-size: 42px;
}

.subtitle {
  color: #b9c0d4;
  margin-bottom: 50px;
  margin-left: 18px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.card {
  background: #141d2e;
  border: 1px solid rgba(178, 69, 255, 0.15);
  border-radius: 18px;
  padding: 35px 25px;
  text-align: center;
  transition: 0.35s;
}

.card:hover {
  transform: translateY(-10px);
  border-color: #b245ff;
  box-shadow: 0 15px 35px rgba(123, 47, 247, .35);
}

.icon {
  width: 75px;
  height: 75px;
  margin: auto;
  border-radius: 50%;
  border: 2px solid #7b2ff7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.icon i {
  font-size: 34px;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card h3 {
  color: white;
  font-size: 24px;
  margin-bottom: 15px;
  line-height: 1.4;
}

.card p {
  color: #b9c0d4;
  line-height: 1.8;
  font-size: 15px;
}
</style>