<script setup lang="ts">
const skills = [
  {
    name: "Vue.js",
    icon: "fab fa-vuejs",
    percentage: 95,
    color: "#42b883"
  },
  {
    name: "Nuxt.js",
    icon: "fas fa-mountain",
    percentage: 90,
    color: "#00dc82"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    percentage: 95,
    color: "#f7df1e"
  },
  {
    name: "TypeScript",
    icon: "fas fa-code",
    percentage: 85,
    color: "#3178c6"
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
    percentage: 98,
    color: "#e34f26"
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    percentage: 95,
    color: "#1572b6"
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    percentage: 90,
    color: "#7952b3"
  },
  {
    name: "Pinia",
    icon: "fas fa-lemon",
    percentage: 90,
    color: "#ffd43b"
  },
  {
    name: "Git & GitHub",
    icon: "fab fa-github",
    percentage: 90,
    color: "#ffffff"
  }
]
</script>

<template>
  <section class="skills">
    <div class="container">
      <div class="heading">
        <span class="dot"></span>
        <h2>Skills</h2>
      </div>

      <p class="subtitle">
        Technologies I work with
      </p>

      <div class="skills-grid">
        <div
          class="skill-card"
          v-for="skill in skills"
          :key="skill.name"
        >
          <i
            :class="skill.icon"
            class="skill-icon"
            :style="{ color: skill.color }"
          ></i>

          <div class="skill-info">
            <span>{{ skill.name }}</span>
            <span>{{ skill.percentage }}%</span>
          </div>

          <div class="progress">
            <div
              class="progress-fill"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
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
  gap: 12px;
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
  color: #9ca3af;
  margin-left: 20px;
  margin-bottom: 45px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.skill-card {
  background: #111b2d;
  border: 1px solid rgba(178, 69, 255, .15);
  border-radius: 18px;
  padding: 28px;
  transition: .35s;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: #b245ff;
  box-shadow: 0 15px 35px rgba(123, 47, 247, .25);
}

.skill-icon {
  font-size: 52px;
  margin-bottom: 25px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 18px;
}

.progress {
  width: 100%;
  height: 10px;
  background: #263247;
  border-radius: 30px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 30px;
  background: linear-gradient(90deg, #7b2ff7, #b245ff);
}
</style>