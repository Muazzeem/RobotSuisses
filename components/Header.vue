<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <div class="logo-icon"></div>
        <span class="logo-text">RobotSuisse</span>
      </div>

      <nav class="nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#industries" class="nav-link">Industries</a>
        <a href="#products" class="nav-link">Products</a>
        <a href="#blog" class="nav-link">Blog</a>
      </nav>

      <div class="header-actions">
        <button class="lang-btn">
          <span class="globe-icon">🌐</span> EN
        </button>
        <button class="contact-btn">Contact Us</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: #ef4444;
  border-radius: 6px;
  position: relative;
}

.logo-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 2px;
}

.logo-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.8;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.globe-icon {
  font-size: 1rem;
}

.contact-btn {
  background: #ef4444;
  border: none;
  color: white;
  padding: 0.625rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
}

.contact-btn:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
