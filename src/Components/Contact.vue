<template>
  <section class="contact-section">
    <div class="container">
      <!-- Left Side -->

      <div class="left">
        <h1>Let's Work Together</h1>
        <p>Have a project in mind? Let's connect.</p>

        <div class="info-list">
          <div class="info-item">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div>
              <h4>Email</h4>
              <span>aishu30401@gmail.com</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="fas fa-phone"></i>
            </div>

            <div>
              <h4>Phone</h4>
              <span>+91 9791719807</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="fas fa-location-dot"></i>
            </div>

            <div>
              <h4>Location</h4>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="fab fa-linkedin-in"></i>
            </div>

            <div>
              <h4>LinkedIn</h4>
              <span>linkedin.com/in/aishwarya-v</span>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">
              <i class="fab fa-github"></i>
            </div>

            <div>
              <h4>GitHub</h4>
              <span>github.com/aishwaryav</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->

      <div class="right">
        <form>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Your Message</label>
          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->

    <footer>
      <h2>AV</h2>

      <p>© 2026 Aishwarya V. All rights reserved.</p>

      <button class="top-btn">
        <i class="fas fa-arrow-up"></i>
      </button>
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
  padding: 60px 80px;
}

.container {
  display: flex;
  justify-content: space-between;
  gap: 50px;
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
  margin-bottom: 50px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 18px;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon i {
  font-size: 18px;
}

.info-item h4 {
  margin-bottom: 5px;
}

.info-item span {
  color: #b8b8b8;
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
}

input:focus,
textarea:focus {
  border-color: #8b5cf6;
}

button {
  width: 100%;
  margin-top: 25px;
  padding: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background: linear-gradient(90deg, #7c3aed, #a855f7);
}

button i {
  margin-left: 10px;
}

footer {
  border-top: 1px solid #1f2937;
  margin-top: 70px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer h2 {
  font-size: 42px;
}

.top-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

@media (max-width: 900px) {
  .contact-section {
    padding: 30px;
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

  footer {
    flex-direction: column;
    gap: 20px;
  }
}
</style>