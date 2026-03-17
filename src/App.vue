<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { copy } from './i18n'
import { useUiStore } from './stores/ui'

const year = new Date().getFullYear()
const ui = useUiStore()

const text = computed(() => copy[ui.lang])
const langButtonText = computed(() => (ui.lang === 'zh' ? copy.zh.buttons.langToEn : copy.en.buttons.langToZh))

const themeAriaLabel = computed(() => (ui.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'))
const langAriaLabel = computed(() => 'Switch language')
const menuAriaLabel = computed(() => 'Toggle menu')

const themeName = computed(() => {
  if (ui.lang === 'zh') return ui.theme === 'light' ? '白天' : '黑夜'
  return ui.theme === 'light' ? 'Light' : 'Dark'
})
const langName = computed(() => (ui.lang === 'zh' ? '中文' : 'EN'))
const resumeName = computed(() => (ui.lang === 'zh' ? '简历' : 'Resume'))

const mobileMenuOpen = ref(false)

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
        <div class="nav-links">
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#home' }" @click="closeMobileMenu">{{ text.nav.home }}</RouterLink>
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#projects' }" @click="closeMobileMenu">{{ text.nav.projects }}</RouterLink>
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#creative' }" @click="closeMobileMenu">{{ text.nav.creative }}</RouterLink>
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#about' }" @click="closeMobileMenu">{{ text.nav.about }}</RouterLink>
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#contact' }" @click="closeMobileMenu">{{ text.nav.contact }}</RouterLink>
        </div>

        <div class="nav-controls desktop-controls">
          <button class="nav-icon" type="button" :aria-label="themeAriaLabel" @click="ui.toggleTheme">
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

          <button class="nav-action nav-lang" type="button" :aria-label="langAriaLabel" @click="ui.toggleLang">
            {{ langButtonText }}
          </button>

          <a class="nav-action resume-icon" href="/resume.pdf" :aria-label="text.nav.resume" :title="text.nav.resume" download>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M7 3h7l5 5v13H7z" />
              <path fill="none" stroke="currentColor" stroke-width="2" d="M14 3v5h5M9 13h8M9 17h8" />
            </svg>
          </a>
        </div>

        <div class="nav-controls mobile-tools">
          <button class="tool-btn" type="button" :aria-label="themeAriaLabel" @click="ui.toggleTheme(); closeMobileMenu()">
            <span class="tool-icon">
              <svg v-if="ui.theme === 'light'" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                />
              </svg>
              <svg v-else viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
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
            </span>
            <span class="tool-label">{{ themeName }}</span>
          </button>

          <button class="tool-btn" type="button" :aria-label="langAriaLabel" @click="ui.toggleLang(); closeMobileMenu()">
            <span class="tool-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
                <path fill="none" stroke="currentColor" stroke-width="2" d="M3 12h18M12 3c3.2 3.2 3.2 14.8 0 18M12 3c-3.2 3.2-3.2 14.8 0 18" />
              </svg>
            </span>
            <span class="tool-label">{{ langName }}</span>
          </button>

          <a class="tool-btn" href="/resume.pdf" download @click="closeMobileMenu">
            <span class="tool-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M7 3h7l5 5v13H7z" />
                <path fill="none" stroke="currentColor" stroke-width="2" d="M14 3v5h5M9 13h8M9 17h8" />
              </svg>
            </span>
            <span class="tool-label">{{ resumeName }}</span>
          </a>
        </div>
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
  z-index: 20;
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
  transition: background-color 0.3s ease, color 0.3s ease;
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
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
}

.nav-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--nav-link);
  padding: 0.25rem 0.1rem;
  border-radius: 0;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.nav-link:hover {
  color: var(--nav-link-hover);
}

.nav-link.router-link-exact-active {
  color: var(--nav-link-active);
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.15rem;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.mobile-tools {
  display: none;
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
  transition: background-color 0.3s ease, color 0.3s ease;
}

.resume-icon {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-icon:hover,
.nav-action:hover,
.tool-btn:hover,
.nav-toggle:hover {
  background-color: var(--chip-bg-hover);
  color: var(--nav-link-hover);
}

.site-main {
  flex: 1;
  padding: 1.5rem 0;
}

.site-footer {
  padding: 1rem 0 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.9rem;
}

.tool-btn {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--nav-link);
  text-decoration: none;
  cursor: pointer;
}

@media (prefers-reduced-motion: reduce) {
  .site-header,
  .nav,
  .nav-link,
  .nav-action,
  .nav-icon,
  .nav-toggle,
  .nav-toggle-line,
  .tool-btn {
    transition: none;
  }
}

@media (max-width: 960px) {
  .site-header {
    display: block;
    padding: 0.88rem 0 0.78rem;
  }

  .header-top {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0;
  }

  .brand {
    white-space: normal;
    line-height: 1.2;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% - 1px);
    margin-left: 0;
    display: block;
    border: 1px solid var(--color-border);
    border-top: 0;
    background: rgba(78, 78, 84, 0.58);
    backdrop-filter: blur(20px) saturate(138%);
    -webkit-backdrop-filter: blur(20px) saturate(138%);
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    padding: 0.95rem 1rem 0.85rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(-8px);
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      transform 0.25s ease;
  }

  .nav.open {
    max-height: 76vh;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
    padding: 0.3rem 0 0.65rem;
  }

  .nav-link {
    padding: 0.2rem 0;
    font-size: clamp(1.55rem, 4.8vw, 1.95rem);
    color: var(--color-heading);
    border: 0;
    line-height: 1.2;
  }

  .nav-link.router-link-exact-active {
    border: 0;
    padding-bottom: 0.2rem;
    color: var(--nav-link-active);
  }

  .desktop-controls {
    display: none;
  }

  .mobile-tools {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.65rem;
    padding-top: 0.7rem;
    border-top: 1px solid var(--color-border);
    margin-top: 0.25rem;
  }

  .tool-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    width: 100%;
    padding: 0.45rem 0.2rem 0.3rem;
    border-radius: 12px;
    background: var(--chip-bg);
    color: var(--nav-link);
  }

  .tool-icon {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background-soft);
  }

  .tool-label {
    font-size: 0.84rem;
    line-height: 1.1;
    color: var(--color-heading);
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

  .nav {
    padding: 0.85rem 0.88rem 0.8rem;
  }

  .nav-link {
    font-size: clamp(1.45rem, 5.8vw, 1.75rem);
  }

  .tool-icon {
    width: 38px;
    height: 38px;
  }

  .tool-label {
    font-size: 0.8rem;
  }
}

@media (max-width: 420px) {
  .site-header {
    padding: 0.72rem 0 0.64rem;
  }

  .brand {
    font-size: 0.95rem;
  }

  .nav {
    padding: 0.82rem 0.75rem 0.75rem;
  }

  .mobile-tools {
    gap: 0.5rem;
  }

  .tool-btn {
    padding: 0.42rem 0.15rem 0.28rem;
  }

  .tool-icon {
    width: 36px;
    height: 36px;
  }
}

@media (min-width: 961px) {
  .nav {
    display: flex !important;
  }

  .nav-toggle {
    display: none !important;
  }
}
</style>
