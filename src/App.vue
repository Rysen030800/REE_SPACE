<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { copy } from './i18n'
import { useUiStore } from './stores/ui'

const year = new Date().getFullYear()
const ui = useUiStore()

const text = computed(() => copy[ui.lang])
const langButtonText = computed(() => (ui.lang === 'zh' ? copy.zh.buttons.langToEn : copy.en.buttons.langToZh))

const themeAriaLabel = computed(() => {
  return ui.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
})

const langAriaLabel = computed(() => {
  return 'Switch language'
})

const mobileMenuOpen = ref(false)
const menuAriaLabel = computed(() => (ui.lang === 'zh' ? 'Toggle menu' : 'Toggle menu'))

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="header-top">
        <RouterLink class="brand" :to="{ path: '/', hash: '#home' }" @click="closeMobileMenu">我有间厝 · REE_SPACE</RouterLink>

        <button
          class="nav-toggle"
          :class="{ open: mobileMenuOpen }"
          type="button"
          :aria-label="menuAriaLabel"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span class="nav-toggle-line" />
          <span class="nav-toggle-line" />
          <span class="nav-toggle-line" />
        </button>
      </div>

      <nav class="nav" :class="{ open: mobileMenuOpen }">
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#home' }" @click="closeMobileMenu">{{ text.nav.home }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#projects' }" @click="closeMobileMenu">{{ text.nav.projects }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#creative' }" @click="closeMobileMenu">{{ text.nav.creative }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#about' }" @click="closeMobileMenu">{{ text.nav.about }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#contact' }" @click="closeMobileMenu">{{ text.nav.contact }}</RouterLink>

        <button class="nav-icon" type="button" :aria-label="themeAriaLabel" @click="ui.toggleTheme(); closeMobileMenu()">
          <svg v-if="ui.theme === 'light'" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
        </button>

        <button class="nav-action nav-lang" type="button" :aria-label="langAriaLabel" @click="ui.toggleLang(); closeMobileMenu()">
          {{ langButtonText }}
        </button>

        <a class="nav-action resume" href="/resume.pdf" download @click="closeMobileMenu">{{ text.nav.resume }}</a>
      </nav>
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <span>© {{ year }} REE_SPACE</span>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0 1rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--header-bg);
  backdrop-filter: blur(10px);
  z-index: 10;
  transition: background-color 0.5s ease, border-color 0.5s ease;
  will-change: background-color;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex: 0 0 auto;
}

.brand {
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--color-heading);
  white-space: nowrap;
}

.nav-toggle {
  display: none;
  appearance: none;
  border: 0;
  background-color: var(--chip-bg);
  color: var(--nav-link);
  width: 38px;
  height: 38px;
  border-radius: 999px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.nav-toggle-line {
  width: 14px;
  height: 1.5px;
  border-radius: 2px;
  background: currentColor;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav-toggle.open .nav-toggle-line:nth-child(1) {
  transform: translateY(5.5px) rotate(45deg);
}

.nav-toggle.open .nav-toggle-line:nth-child(2) {
  opacity: 0;
}

.nav-toggle.open .nav-toggle-line:nth-child(3) {
  transform: translateY(-5.5px) rotate(-45deg);
}

.nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}

.nav-link {
  text-decoration: none;
  color: var(--nav-link);
  padding: 0.25rem 0.1rem;
  border-radius: 0;
  transition: color 0.5s ease, border-color 0.5s ease;
}

.nav-link:hover {
  background: transparent;
  color: var(--nav-link-hover);
}

.nav-link.router-link-exact-active {
  background: transparent;
  color: var(--nav-link-active);
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.15rem;
}

.nav-action {
  appearance: none;
  border: 0;
  background-color: var(--chip-bg);
  color: var(--nav-link);
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.1;
  font: inherit;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.nav-icon {
  appearance: none;
  border: 0;
  background-color: var(--chip-bg);
  color: var(--nav-link);
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.nav-icon:hover {
  background-color: var(--chip-bg-hover);
  color: var(--nav-link-hover);
}

.nav-toggle:hover {
  background-color: var(--chip-bg-hover);
  color: var(--nav-link-hover);
}

.nav-action:hover {
  background-color: var(--chip-bg-hover);
  color: var(--nav-link-hover);
}

.resume {
  margin-left: 0.15rem;
}

.site-main {
  flex: 1;
  padding: 1.5rem 0;
}

.site-footer {
  padding: 1rem 0 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
  opacity: 1;
  font-size: 0.9rem;
  transition: border-color 0.5s ease, color 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .site-header,
  .nav-link,
  .nav-action,
  .nav-icon,
  .nav-toggle,
  .nav-toggle-line,
  .nav,
  .site-footer {
    transition: none;
  }
}

@media (max-width: 960px) {
  .site-header {
    display: block;
    padding: 0.9rem 0 0.8rem;
  }

  .header-top {
    justify-content: space-between;
    width: 100%;
    gap: 0.7rem;
    margin-bottom: 0.6rem;
  }

  .brand {
    white-space: normal;
    line-height: 1.2;
  }

  .nav-toggle {
    display: inline-flex;
    flex: 0 0 auto;
  }

  .nav {
    margin-left: 0;
    width: 100%;
    display: flex;
    gap: 0.6rem;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    border-top: 1px solid var(--color-border);
    padding-top: 0.65rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(-6px);
    transition:
      max-height 0.32s ease,
      opacity 0.22s ease,
      transform 0.25s ease;
  }

  .nav.open {
    max-height: 420px;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-link {
    display: block;
    padding: 0.45rem 0;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-link.router-link-exact-active {
    border-bottom-width: 2px;
    padding-bottom: 0.4rem;
  }

  .nav-icon,
  .nav-action {
    align-self: flex-start;
  }

  .resume {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .site-main {
    padding: 0.95rem 0;
  }

  .site-header {
    padding: 0.82rem 0 0.72rem;
  }

  .brand {
    font-size: 1rem;
    letter-spacing: 0.025em;
  }

  .nav-link {
    font-size: 1rem;
  }

  .nav-action {
    font-size: 0.92rem;
    padding: 0.35rem 0.62rem;
  }

  .nav-icon {
    width: 34px;
    height: 34px;
  }

  .nav-toggle {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 420px) {
  .site-header {
    padding: 0.72rem 0 0.64rem;
  }

  .brand {
    font-size: 0.95rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }

  .nav-action {
    font-size: 0.86rem;
    padding: 0.3rem 0.54rem;
  }

  .nav-toggle {
    width: 34px;
    height: 34px;
  }
}

@media (min-width: 961px) {
  .nav {
    display: flex !important;
  }

  .nav-toggle {
    display: none !important;
  }

  .nav-link {
    border-bottom: 0;
    padding: 0.25rem 0.1rem;
  }

  .nav-link.router-link-exact-active {
    border-bottom: 2px solid currentColor;
    padding-bottom: 0.15rem;
  }
}
</style>

