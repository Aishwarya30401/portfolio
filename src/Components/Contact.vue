<script setup lang="ts">
import { ref, onMounted } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});

const sendMessage = () => {
  const text = `Hi Aishwarya,

Name: ${name.value}
Email: ${email.value}
Message: ${message.value}`;

  // Open WhatsApp
  const whatsappUrl = `https://wa.me/919791719807?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");

  // Open email client
  const mailUrl = `mailto:aishu30401@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(text)}`;
  setTimeout(() => {
    window.location.href = mailUrl;
  }, 1000);

  // Clear form
  name.value = "";
  email.value = "";
  message.value = "";
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>

  <section class="contact-section" v-else>
    <div class="container">
      <!-- Left Side -->
      <div class="left">
        <h1>Let's Work Together</h1>
        <p>Have a project in mind? Let's connect.</p>

        <div class="info-list">
          <!-- Email (Gmail Red) -->
          <a href="mailto:aishu30401@gmail.com" class="info-item">
            <div class="icon gmail-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email</h4>
              <span>aishu30401@gmail.com</span>
            </div>
          </a>

          <!-- Phone & WhatsApp -->
          <div class="info-item combo-item">
            <div class="icon whatsapp-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div>
              <h4>Phone / WhatsApp</h4>
              <div class="link-group">
                <a href="tel:+919791719807" class="sub-link">+91 9791719807</a>
                <span class="divider">|</span>
                <a
                  href="https://wa.me/919791719807"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="sub-link wa-btn"
                >
                  Chat on WhatsApp <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="info-item static-item">
            <div class="icon location-icon">
              <i class="fas fa-location-dot"></i>
            </div>
            <div>
              <h4>Location</h4>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/aishwarya-v-4141131b4/"
            target="_blank"
            rel="noopener noreferrer"
            class="info-item"
          >
            <div class="icon linkedin-icon">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div>
              <h4>LinkedIn</h4>
              <span>linkedin.com/in/aishwarya-v-4141131b4/</span>
            </div>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/Aishwarya30401"
            target="_blank"
            rel="noopener noreferrer"
            class="info-item"
          >
            <div class="icon github-icon">
              <i class="fab fa-github"></i>
            </div>
            <div>
              <h4>GitHub</h4>
              <span>github.com/Aishwarya30401</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Right Side -->
      <div class="right">
        <form @submit.prevent="sendMessage">
          <label>Your Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Your Message</label>
          <textarea
            v-model="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- Enhanced Modern Footer -->
    <footer>
      <div class="footer-container">
        <div class="footer-brand">
          <span class="logo-text">AV</span>
          <span class="brand-tag">Portfolio</span>
        </div>

        <div class="footer-center">
          <p>© 2026 Aishwarya V. All rights reserved.</p>
        </div>

        <div class="footer-actions">
          <button
            class="top-btn"
            @click="scrollToTop"
            aria-label="Scroll to top"
          >
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contact-section {
  min-height: 100vh;
  background: #07101d;
  color: white;
  padding: 60px 80px 30px;
}

.container {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  min-height: auto;
  margin-bottom: 60px;
}

.left {
  width: 40%;
}

.left h1 {
  font-size: 48px;
  margin-bottom: 12px;
}

.left p {
  color: #b0b0b0;
  margin-bottom: 40px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Clickable Link Items */
a.info-item,
.combo-item,
.static-item {
  display: flex;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease;
}

a.info-item:hover {
  transform: translateX(6px);
}

a.info-item:hover span {
  color: #a855f7;
  text-decoration: underline;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

/* Official Brand Icon Colors */
.gmail-icon {
  background: linear-gradient(135deg, #ea4335, #c5221f);
}

.whatsapp-icon {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.location-icon {
  background: linear-gradient(135deg, #ea4335, #4285f4);
}

.linkedin-icon {
  background: linear-gradient(135deg, #0a66c2, #004182);
}

.github-icon {
  background: linear-gradient(135deg, #24292e, #161b22);
  border: 1px solid #30363d;
}

.icon i {
  font-size: 20px;
  color: white;
}

.info-item h4 {
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
}

.info-item span {
  color: #b8b8b8;
  word-break: break-all;
  font-size: 15px;
  transition: color 0.25s ease;
}

/* Sub-links inside phone/whatsapp container */
.link-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.sub-link {
  color: #b8b8b8;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s ease;
}

.sub-link:hover {
  color: #a855f7;
  text-decoration: underline;
}

.wa-btn {
  color: #25d366;
  font-weight: 500;
}

.wa-btn:hover {
  color: #34e775;
}

.divider {
  color: #4b5563;
}

.right {
  width: 55%;
}

form {
  background: #111827;
  border: 1px solid #2c3444;
  border-radius: 16px;
  padding: 35px;
}

label {
  display: block;
  margin-top: 18px;
  margin-bottom: 10px;
  color: #d1d5db;
}

input,
textarea {
  width: 100%;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 10px;
  padding: 15px;
  color: white;
  outline: none;
  font-size: 15px;
}

input:focus,
textarea:focus {
  border-color: #8b5cf6;
}

button[type="submit"] {
  width: 100%;
  margin-top: 25px;
  padding: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background: linear-gradient(90deg, #7c3aed, #a855f7);
  transition: 0.3s;
}

button[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
}

button i {
  margin-left: 10px;
}

/* Enhanced Footer Styles */
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 35px;
  padding-bottom: 15px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #ffffff, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-tag {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #8b5cf6;
  background: rgba(139, 92, 246, 0.12);
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.footer-center p {
  color: #9ca3af;
  font-size: 14px;
  letter-spacing: 0.3px;
}

.top-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.25);
}

.top-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 22px rgba(168, 85, 247, 0.45);
}

.top-btn i {
  font-size: 16px;
  margin-left: 0;
}

/* Tablet */
@media (max-width: 900px) {
  .contact-section {
    padding: 40px 30px 20px;
  }

  .container {
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%;
  }

  .left h1 {
    font-size: 36px;
  }

  .footer-container {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}

/* Mobile */
@media (max-width: 576px) {
  .contact-section {
    padding: 30px 20px 15px;
  }

  .left h1 {
    font-size: 30px;
  }

  form {
    padding: 20px;
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