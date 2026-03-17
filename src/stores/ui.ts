import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'
export type Lang = 'zh' | 'en'

const THEME_KEY = 'ui.theme'
const LANG_KEY = 'ui.lang'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') return stored

  const preferDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false
  return preferDark ? 'dark' : 'light'
}

function getInitialLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY) as Lang | null
  if (stored === 'zh' || stored === 'en') return stored
  return 'zh'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export const useUiStore = defineStore('ui', () => {
  const theme = ref<Theme>(getInitialTheme())
  const lang = ref<Lang>(getInitialLang())

  applyTheme(theme.value)

  watch(theme, (value) => {
    localStorage.setItem(THEME_KEY, value)
    applyTheme(value)
  })

  watch(lang, (value) => {
    localStorage.setItem(LANG_KEY, value)
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function toggleLang() {
    lang.value = lang.value === 'zh' ? 'en' : 'zh'
  }

  return { theme, lang, toggleTheme, toggleLang }
})

