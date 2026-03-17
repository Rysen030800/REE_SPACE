<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { copy } from './i18n'
import { useUiStore } from './stores/ui'

const year = new Date().getFullYear()
const ui = useUiStore()

const text = computed(() => copy[ui.lang])

const langButtonText = computed(() => (ui.lang === 'zh' ? copy.zh.buttons.langToEn : copy.en.buttons.langToZh))

const themeAriaLabel = computed(() => {
  if (ui.lang === 'zh') return ui.theme === 'light' ? '切换到黑夜模式' : '切换到白天模式'
  return ui.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
})

const langAriaLabel = computed(() => {
  return ui.lang === 'zh' ? '切换到英文' : 'Switch to Chinese'
})
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink class="brand" :to="{ path: '/', hash: '#home' }">我有间厝 · REE_SPACE</RouterLink>

      <nav class="nav">
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#home' }">{{ text.nav.home }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#projects' }">{{ text.nav.projects }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#creative' }">{{ text.nav.creative }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#about' }">{{ text.nav.about }}</RouterLink>
        <RouterLink class="nav-link" :to="{ path: '/', hash: '#contact' }">{{ text.nav.contact }}</RouterLink>

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
        <a class="nav-action resume" href="/resume.pdf" download>{{ text.nav.resume }}</a>
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

.brand {
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--color-heading);
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
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
  .site-footer {
    transition: none;
  }
}
</style>

