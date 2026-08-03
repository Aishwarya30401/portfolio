<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.min.css";

const downloadResume = () => {
  const link = document.createElement("a");

  link.href = "/Aishwarya_Resume_1.pdf";

  link.download = "Aishwarya_Resume_1.pdf";

  link.click();
};

const letsTalk = () => {
  window.location.href =
    "mailto:aishu30401@gmail.com?subject=Frontend Developer Opportunity&body=Hi Aishwarya,%0D%0A%0D%0AI would like to discuss a job opportunity with you.";
};

const openWhatsApp = () => {
  window.open(
    "https://wa.me/919791719807?text=Hi%20Aishwarya,%20I%20would%20like%20to%20discuss%20a%20Frontend%20Developer%20opportunity.",
    "_blank",
  );
};
</script>

<template>
  <section class="hero">
    <!-- LEFT CONTENT -->

    <div class="left">
      <p class="hello">Hi, I'm</p>
      <h1>Aishwarya <span>V</span></h1>
      <h2>Frontend Developer</h2>

      <p class="tech">Vue.js | Nuxt.js | TypeScript | JavaScript | Wordpress | Firebase</p>

      <p class="description">
        I build accessible, responsive and user-friendly web applications with modern technologies.
      </p>

      <div class="buttons">
        <button class="resume" @click="downloadResume">Download Resume</button>

        <button class="talk" @click="letsTalk">Let's Talk</button>
      </div>

      <!-- SOCIAL ICONS -->

      <div class="socials">
        <!-- LINKEDIN -->

        <a
          href="https://www.linkedin.com/in/aishwarya-v-960692408/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>

        <!-- GITHUB -->

        <a href="https://github.com/Aishwarya30401" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>

        <!-- EMAIL CHAT -->

        <a href="mailto:aishu30401@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>

        <!-- WHATSAPP -->

        <a href="#" @click.prevent="openWhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>

    <!-- RIGHT IMAGE -->

    <div class="right">
      <div class="circle"></div>

      <img src="../assets/photonew.png" alt="Profile" class="profile" />

      <div class="experience">
        <h2>3.5+</h2>

        <p>Years of Experience</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 90px);

  background: #07111f;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 70px 80px;

  overflow: hidden;
}

/* LEFT */

.left {
  width: 48%;
  color: white;
}

.hello {
  font-size: 28px;
}

h1 {
  font-size: 70px;

  font-weight: 700;

  margin-bottom: 15px;
}

h1 span {
  background: linear-gradient(90deg, #ff65d8, #6d7bff);

  -webkit-background-clip: text;

  color: transparent;
}

h2 {
  font-size: 32px;

  margin-bottom: 18px;
}

.tech {
  color: #cfcfcf;

  font-size: 22px;

  /* margin-bottom: 30px; */
}

.description {
  color: #b7bfd0;

  line-height: 1.8;

  font-size: 18px;

  max-width: 500px;
}

/* BUTTONS */

.buttons {
  margin-top: 45px;

  display: flex;

  gap: 20px;
}

.resume {
  padding: 14px 30px;

  border: none;

  border-radius: 10px;

  background: linear-gradient(90deg, #7b2ff7, #b245ff);

  color: white;

  font-size: 16px;

  cursor: pointer;
}

.resume:hover {
  transform: translateY(-2px);
}

.talk {
  padding: 16px 35px;

  border: 2px solid #888;

  background: transparent;

  color: white;

  border-radius: 12px;

  cursor: pointer;
}

.talk:hover {
  border-color: #a64cff;
}

/* SOCIAL ICONS */

.socials {
  display: flex;

  gap: 18px;

  margin-top: 50px;
}

.socials a {
  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #182235;

  color: white;

  text-decoration: none;

  transition: 0.3s;

  font-size: 20px;
}

.socials a:hover {
  background: #8b4bff;

  transform: translateY(-5px);
}

/* RIGHT */

.right {
  width: 45%;

  display: flex;

  justify-content: center;

  align-items: center;

  position: relative;
}

.circle {
  width: 480px;

  height: 480px;

  border-radius: 50%;

  background: linear-gradient(135deg, #6f8dff, #d14cff);
}

.profile {
  position: absolute;

  width: 420px;

  bottom: 0;
}

.experience {
  position: absolute;

  right: 0;

  bottom: 30px;

  background: rgba(31, 34, 52, 0.9);

  backdrop-filter: blur(15px);

  border-radius: 20px;

  padding: 28px;

  text-align: center;
}

.experience h2 {
  color: #b44dff;

  font-size: 50px;
}

.experience p {
  color: white;

  line-height: 1.5;
}

/* RESPONSIVE */

@media (max-width: 992px) {
  .hero {
    flex-direction: column-reverse;

    text-align: center;

    padding: 50px 25px;
  }

  .left,
  .right {
    width: 100%;
  }

  .right {
    margin-bottom: 50px;
  }

  .circle {
    width: 350px;

    height: 350px;
  }

  .profile {
    width: 300px;
  }

  h1 {
    font-size: 48px;
  }

  .buttons {
    justify-content: center;
  }

  .socials {
    justify-content: center;
  }

  .experience {
    right: 20px;

    bottom: 0;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 30px 15px;
  }

  .circle {
    width: 280px;

    height: 280px;
  }

  .profile {
    width: 240px;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 25px;
  }

  .tech {
    font-size: 16px;
  }

  .description {
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;

    align-items: center;
  }

  .resume,
  .talk {
    width: 220px;
  }

  .experience {
    padding: 20px;
  }

  .experience h2 {
    font-size: 38px;
  }
  /* RESPONSIVE */

  /* Laptop */
  @media (max-width: 1200px) {
    .hero {
      padding: 60px 40px;
    }

    h1 {
      font-size: 60px;
    }

    .circle {
      width: 420px;
      height: 420px;
    }

    .profile {
      width: 370px;
    }

    .experience {
      right: -10px;
    }
  }

  /* Tablet */

  @media (max-width: 992px) {
    .hero {
      flex-direction: column-reverse;

      text-align: center;

      padding: 50px 25px;

      gap: 40px;
    }

    .left,
    .right {
      width: 100%;
    }

    .right {
      margin-bottom: 20px;
    }

    .circle {
      width: 360px;

      height: 360px;
    }

    .profile {
      width: 310px;
    }

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 28px;
    }

    .tech {
      font-size: 18px;
    }

    .description {
      margin: auto;

      max-width: 600px;
    }

    .buttons {
      justify-content: center;
    }

    .socials {
      justify-content: center;
    }

    .experience {
      right: 20px;

      bottom: 0;

      padding: 20px;
    }
  }

  /* Mobile */

  @media (max-width: 576px) {
    .hero {
      padding: 35px 15px;

      min-height: auto;
    }

    .circle {
      width: 280px;

      height: 280px;
    }

    .profile {
      width: 240px;
    }

    .experience {
      position: relative;

      right: auto;

      bottom: auto;

      margin-top: 20px;

      display: inline-block;
    }

    .experience h2 {
      font-size: 38px;
    }

    .hello {
      font-size: 22px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 24px;
    }

    .tech {
      font-size: 15px;

      line-height: 1.6;
    }

    .description {
      font-size: 15px;

      line-height: 1.6;
    }

    .buttons {
      flex-direction: column;

      align-items: center;

      gap: 15px;
    }

    .resume,
    .talk {
      width: 230px;
    }

    .socials {
      margin-top: 35px;

      gap: 12px;
    }

    .socials a {
      width: 45px;

      height: 45px;

      font-size: 18px;
    }
  }

  /* Small Mobile */

  @media (max-width: 380px) {
    .circle {
      width: 230px;

      height: 230px;
    }

    .profile {
      width: 200px;
    }

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 21px;
    }

    .resume,
    .talk {
      width: 200px;
    }
  }
}
</style>
