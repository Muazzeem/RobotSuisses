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
    
        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
            <NuxtLink to="/industries" class="nav-link">Industries</NuxtLink>
            <ProductMenu menuColor="black" />
            <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
        </div>
    
        <div class="nav-actions">
            <LanguagesButton textColor="black" />
            <button class="contact-btn desktop-contact">Contact Us</button>
            
            <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
            <span class="hamburger" :class="{ active: isMenuOpen }"></span>
          </button>
        </div>
    
        <!-- Mobile Menu Overlay -->
        <transition name="overlay">
            <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
        </transition>
    
        <!-- Mobile Sidebar -->
        <transition name="sidebar">
            <aside v-if="isMenuOpen" class="mobile-sidebar">
                <div class="sidebar-header">
                    <NuxtLink to="/" class="logo" @click="closeMenu">
                        <div class="logo-dots">
                            <span class="dot red"></span>
                            <span class="dot black"></span>
                            <span class="dot red"></span>
                        </div>
                        <span class="logo-text">RobotSuisse</span>
                    </NuxtLink>
                </div>
    
                <nav class="sidebar-nav">
                    <NuxtLink to="/" class="sidebar-link" @click="closeMenu">Home</NuxtLink>
                    <NuxtLink to="/about" class="sidebar-link" @click="closeMenu">About</NuxtLink>
                    <NuxtLink to="/industries" class="sidebar-link" @click="closeMenu">Industries</NuxtLink>
    
                    <!-- Mobile Product Menu -->
                    <div class="mobile-product-section">
                        <button class="sidebar-link product-toggle" @click="toggleProducts" :class="{ active: showProducts }">
                  Products
                  <span class="arrow" :class="{ open: showProducts }">
                    <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
    
                        <transition name="expand">
                            <div v-if="showProducts" class="product-categories">
                                <div v-for="category in categories" :key="category.id" class="category-group">
                                    <button class="category-btn" @click="toggleCategory(category.id)" :class="{ active: activeCategory === category.id }">
                        {{ category.name }}
                        <span class="arrow-sm" :class="{ open: activeCategory === category.id }">
                          <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </span>
                      </button>
    
                                    <transition name="expand">
                                        <div v-if="activeCategory === category.id" class="product-list">
                                            <NuxtLink v-for="product in getProducts(category.id)" :key="product.id" :to="`/products/${product.slug}`" class="product-link" @click="closeMenu">
                                                {{ product.name }}
                                            </NuxtLink>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </transition>
                    </div>
    
                    <NuxtLink to="/blog" class="sidebar-link" @click="closeMenu">Blog</NuxtLink>
                </nav>
    
                <div class="sidebar-footer">
                    <button class="contact-btn mobile-contact" @click="closeMenu">Contact Us</button>
                </div>
            </aside>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const showProducts = ref(false)
const activeCategory = ref(null)

const categories = [
    { id: 'home', name: 'Home Robots' },
    { id: 'industrial', name: 'Industrial Robots' },
    { id: 'service', name: 'Service Robots' },
    { id: 'medical', name: 'Medical Robots' }
]

const products = {
    home: [
        { id: 1, name: 'PUDU CC1 Pro', slug: 'pudu-cc1-pro' },
        { id: 2, name: 'Home Bot X2', slug: 'home-x2' },
        { id: 3, name: 'Cleaning Robot', slug: 'cleaning-robot' }
    ],
    industrial: [
        { id: 4, name: 'Industrial Bot X1', slug: 'industrial-x1' },
        { id: 5, name: 'Manufacturing Bot', slug: 'manufacturing-bot' }
    ],
    service: [
        { id: 6, name: 'Service Bot S1', slug: 'service-s1' },
        { id: 7, name: 'Hospitality Robot', slug: 'hospitality-robot' }
    ],
    medical: [
        { id: 8, name: 'Medical Bot M1', slug: 'medical-m1' },
        { id: 9, name: 'Surgery Assistant', slug: 'surgery-assistant' }
    ]
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
        showProducts.value = false
        activeCategory.value = null
    }
}

const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
    showProducts.value = false
    activeCategory.value = null
}

const toggleProducts = () => {
    showProducts.value = !showProducts.value
    if (!showProducts.value) {
        activeCategory.value = null
    }
}

const toggleCategory = (categoryId) => {
    activeCategory.value = activeCategory.value === categoryId ? null : categoryId
}

const getProducts = (categoryId) => {
    return products[categoryId] || []
}
</script>

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
    z-index: 101;
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
    flex-shrink: 0;
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

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
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

/* Mobile Menu Button */

.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 101;
}

.hamburger {
    width: 24px;
    height: 2px;
    background: #1a1a1a;
    display: block;
    position: relative;
    transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #1a1a1a;
    transition: all 0.3s ease;
}

.hamburger::before {
    top: -8px;
}

.hamburger::after {
    bottom: -8px;
}

.hamburger.active {
    background: transparent;
}

.hamburger.active::before {
    top: 0;
    transform: rotate(45deg);
}

.hamburger.active::after {
    bottom: 0;
    transform: rotate(-45deg);
}

/* Mobile Menu */

.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 98;
}

.mobile-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    max-width: 85vw;
    height: 100vh;
    background: white;
    z-index: 99;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #e5e5e5;
}

.close-btn {
    background: transparent;
    border: none;
    color: #1a1a1a;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.25rem;
    line-height: 1;
    transition: opacity 0.2s;
}

.close-btn:hover {
    opacity: 0.7;
}

.sidebar-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
}

.sidebar-link {
    color: #1a1a1a;
    text-decoration: none;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.2s;
    border-left: 3px solid transparent;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sidebar-link:hover {
    background: #fafafa;
    border-left-color: #ef4444;
}

.sidebar-link.router-link-active {
    color: #ef4444;
    font-weight: 500;
    border-left-color: #ef4444;
}

/* Mobile Product Section */

.mobile-product-section {
    border-left: 3px solid transparent;
}

.product-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.arrow {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    color: #6b7280;
}

.arrow.open {
    transform: rotate(180deg);
}

.product-categories {
    background: #f9fafb;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}

.category-group {
    border-bottom: 1px solid #e5e5e5;
}

.category-group:last-child {
    border-bottom: none;
}

.category-btn {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.875rem 1.5rem 0.875rem 2rem;
    text-align: left;
    color: #374151;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
}

.category-btn:hover,
.category-btn.active {
    background: #f3f4f6;
    color: #ef4444;
}

.arrow-sm {
    font-size: 0.65rem;
    transition: transform 0.3s ease;
    color: #9ca3af;
}

.arrow-sm.open {
    transform: rotate(180deg);
}

.product-list {
    background: white;
    padding: 0.5rem 0;
}

.product-link {
    display: block;
    padding: 0.75rem 1.5rem 0.75rem 3rem;
    color: #6b7280;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
}

.product-link:hover {
    background: #f9fafb;
    color: #ef4444;
}

.sidebar-footer {
    padding: 1.5rem;
    border-top: 1px solid #e5e5e5;
}

.mobile-contact {
    width: 100%;
}

/* Transitions */

.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

.sidebar-enter-active,
.sidebar-leave-active {
    transition: transform 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
    transform: translateX(100%);
}

.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    opacity: 0;
    max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
    opacity: 1;
    max-height: 1000px;
}

/* Responsive Breakpoints */

@media (max-width: 1024px) {
    .navbar {
        padding: 1.125rem 1.5rem;
    }
    .nav-links {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .navbar {
        padding: 1rem 1.25rem;
    }
    .desktop-nav {
        display: none;
    }
    .desktop-contact {
        display: none;
    }
    .mobile-menu-btn {
        display: block;
    }
}

@media (max-width: 480px) {
    .navbar {
        padding: 0.875rem 1rem;
    }
    .logo-text {
        font-size: 1rem;
    }
    .logo-dots .dot {
        width: 8px;
        height: 8px;
    }
    .mobile-sidebar {
        width: 100%;
        max-width: 280px;
    }
}
</style>