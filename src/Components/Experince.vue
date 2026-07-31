<template>
  <section class="experience-section">
    <div class="header">
      <span class="dot"></span>
      <div>
        <h1>Experience</h1>
        <p>My professional journey</p>
      </div>
    </div>

    <div class="timeline">

      <!-- Item 1 -->
      <div class="timeline-item">
        <div class="icon">
          💼
        </div>

        <div class="card">
          <span class="year">2023 - Present</span>

          <h2>Frontend Developer</h2>

          <h4>Span Technologies Services Private Limited</h4>

          <ul>
            <li>Building scalable web applications using Vue 3, Nuxt.js and TypeScript.</li>
            <li>Developing reusable components and optimizing performance.</li>
            <li>Integrating REST APIs and managing state using Pinia.</li>
            <li>Collaborating with cross-functional teams in Agile environment.</li>
          </ul>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="timeline-item">
        <div class="icon active">
          💼
        </div>

        <div class="card">
          <span class="year">2022 - 2023</span>

          <h2>Frontend Developer</h2>

          <h4>Span Technologies Services Private Limited</h4>

          <ul>
            <li>Worked on Vue 2 based projects and migrated to Vue 3.</li>
            <li>Integrated Firebase authentication and SSO.</li>
            <li>Improved application performance and SEO.</li>
          </ul>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="timeline-item">
        <div class="icon">
          💼
        </div>

        <div class="card">
          <span class="year">2021 - 2022</span>

          <h2>Jr. Frontend Developer</h2>

          <h4>Span Technologies Services Private Limited</h4>

          <ul>
            <li>Developed responsive UI using Vue.js and Bootstrap.</li>
            <li>Consumed REST APIs and implemented UI functionality.</li>
            <li>Fixed bugs and improved user experience.</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.experience-section {
  min-height: 100vh;
  padding: 50px;
  background: #08111f;
  color: white;
}

.header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #9d4edd;
  border-radius: 50%;
}

.header h1 {
  margin: 0;
  font-size: 34px;
}

.header p {
  color: #a1a1aa;
  margin-top: 5px;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 18px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #3f3f46;
}

.timeline-item {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
}

.icon {
  width: 42px;
  height: 42px;
  background: #2d3748;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  left: -42px;
  z-index: 2;
}

.active {
  background: linear-gradient(135deg, #9d4edd, #6d28d9);
}

.card {
  width: 100%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid #2d3748;
  border-radius: 14px;
  padding: 24px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #9d4edd;
}

.year {
  color: #a855f7;
  font-size: 14px;
}

.card h2 {
  margin: 12px 0 8px;
  font-size: 28px;
}

.card h4 {
  color: #c084fc;
  margin-bottom: 20px;
  font-weight: 500;
}

.card ul {
  padding-left: 20px;
}

.card li {
  margin-bottom: 12px;
  color: #d1d5db;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .experience-section {
    padding: 20px;
  }

  .card h2 {
    font-size: 22px;
  }
}
</style>