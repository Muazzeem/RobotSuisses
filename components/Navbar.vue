<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo">
      <div class="logo-dots">
        <span class="dot red"></span>
        <span class="dot black"></span>
        <span class="dot red"></span>
      </div>
      <span class="logo-text">RobotSuisse</span>
    </NuxtLink>

    <div class="nav-links">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/industries" class="nav-link">Industries</NuxtLink>
      <NuxtLink to="/products" class="nav-link">
        Products
        <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
    </div>

    <div class="nav-actions">
      <button class="lang-btn">
        <span class="globe-icon">🌐</span> EN
      </button>
      <button class="contact-btn">Contact Us</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.red {
  background: #ef4444;
}

.dot.black {
  background: #1a1a1a;
}

.logo-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover {
  color: #ef4444;
}

.nav-link.router-link-active {
  color: #ef4444;
  font-weight: 500;
}

.dropdown-icon {
  margin-left: 2px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-btn {
  background: transparent;
  border: 1px solid #e5e5e5;
  color: #1a1a1a;
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
  border-color: #d4d4d4;
  background: #fafafa;
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
  .nav-links {
    display: none;
  }

  .navbar {
    padding: 1rem 1.25rem;
  }
}
</style>
