<template>
  <section id="home" class="hero" :data-lang="ui.lang">
    <div class="hero-layout">
      <div class="hero-left">
        <p class="kicker">{{ text.hero.kicker }}</p>
        <h1 class="title">REE CHEN</h1>

        <p class="intro">
          {{ text.hero.introPrefix }}{{ gap }}
          <span class="typed" aria-label="humanities or technology">
            <span class="typed-word" aria-hidden="true">{{ typedWord }}</span>
          </span>
          {{ gap }}{{ text.hero.introSuffix }}
        </p>

        <p class="statement">{{ text.hero.statement }}</p>
        <p class="subtitle">{{ text.hero.subtitle }}</p>
      </div>

      <div class="hero-art" aria-hidden="true">
        <img class="art art-light" :src="artLightSrc" alt="" loading="eager" />
        <img class="art art-dark" :src="artDarkSrc" alt="" loading="eager" />
      </div>
    </div>
  </section>

  <ProjectsSection />
  <CreativeSection />
  <AboutSection />
  <ContactSection />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AboutSection from '../sections/AboutSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import CreativeSection from '../sections/CreativeSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
const gap = computed(() => (ui.lang === 'en' ? ' ' : ''))

const artLight = `${import.meta.env.BASE_URL}hero/hero1.png`
const artDark = `${import.meta.env.BASE_URL}hero/hero2.png`

const artLightSrc = computed(() => `${artLight}?mode=light`)
const artDarkSrc = computed(() => `${artDark}?mode=dark`)

const typedWord = ref('')

let timer: number | undefined
let wordIndex = 0
let charIndex = 0
let deleting = false

function schedule(fn: () => void, ms: number) {
  timer = window.setTimeout(fn, ms)
}

function currentWords() {
  return ui.lang === 'zh' ? ['人文', '科技'] : ['Humanities', 'Technology']
}

function resetTypewriter() {
  wordIndex = 0
  charIndex = 0
  deleting = false
  typedWord.value = ''
}

function tick() {
  const words = currentWords()
  const word = words[wordIndex]!

  if (!deleting) {
    charIndex = Math.min(charIndex + 1, word.length)
    typedWord.value = word.slice(0, charIndex)

    if (charIndex >= word.length) {
      deleting = true
      schedule(tick, 1100)
      return
    }

    schedule(tick, 140)
    return
  }

  charIndex = Math.max(charIndex - 1, 0)
  typedWord.value = word.slice(0, charIndex)

  if (charIndex <= 0) {
    deleting = false
    wordIndex = (wordIndex + 1) % words.length
    schedule(tick, 350)
    return
  }

  schedule(tick, 90)
}

function startTypewriter() {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  if (reduced) {
    typedWord.value = currentWords()[0] ?? ''
    return
  }

  schedule(tick, 250)
}

onMounted(() => {
  startTypewriter()
})

watch(
  () => ui.lang,
  () => {
    if (timer !== undefined) window.clearTimeout(timer)
    resetTypewriter()
    startTypewriter()
  },
)

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearTimeout(timer)
})
</script>

<style scoped>
.hero {
  min-height: calc(100dvh - 88px);
  display: flex;
  align-items: center;
  padding: 5rem 0 4rem;
  scroll-margin-top: 90px;
  position: relative;
  overflow: visible;
}

.hero-layout {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  align-items: center;
  position: relative;
}

.hero-left {
  min-width: 0;
  position: relative;
  z-index: 1;
  max-width: 72ch;
}

.hero-art {
  position: absolute;
  right: -8vw;
  top: 50%;
  transform: translateY(-50%);
  width: min(980px, 86vw);
  aspect-ratio: 4 / 3;
  z-index: 0;
  pointer-events: none;
  opacity: 0.97;
  filter: blur(0.6px);
  background: transparent;
  transition: opacity 0.5s ease, filter 0.5s ease;
  /* 不规则虚化边缘（rough edge mask） */
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20200%20200%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27f%27%20x%3D%27-20%25%27%20y%3D%27-20%25%27%20width%3D%27140%25%27%20height%3D%27140%25%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.015%27%20numOctaves%3D%272%27%20seed%3D%2711%27%20result%3D%27n%27/%3E%3CfeDisplacementMap%20in%3D%27SourceGraphic%27%20in2%3D%27n%27%20scale%3D%2730%27%20xChannelSelector%3D%27R%27%20yChannelSelector%3D%27G%27/%3E%3CfeGaussianBlur%20stdDeviation%3D%277%27/%3E%3C/filter%3E%3C/defs%3E%3Crect%20x%3D%2710%27%20y%3D%2710%27%20width%3D%27180%27%20height%3D%27180%27%20rx%3D%2732%27%20fill%3D%27white%27%20filter%3D%27url(%23f)%27/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20200%20200%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27f%27%20x%3D%27-20%25%27%20y%3D%27-20%25%27%20width%3D%27140%25%27%20height%3D%27140%25%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.015%27%20numOctaves%3D%272%27%20seed%3D%2711%27%20result%3D%27n%27/%3E%3CfeDisplacementMap%20in%3D%27SourceGraphic%27%20in2%3D%27n%27%20scale%3D%2730%27%20xChannelSelector%3D%27R%27%20yChannelSelector%3D%27G%27/%3E%3CfeGaussianBlur%20stdDeviation%3D%277%27/%3E%3C/filter%3E%3C/defs%3E%3Crect%20x%3D%2710%27%20y%3D%2710%27%20width%3D%27180%27%20height%3D%27180%27%20rx%3D%2732%27%20fill%3D%27white%27%20filter%3D%27url(%23f)%27/%3E%3C/svg%3E");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

:root[data-theme='dark'] .hero-art {
  /* 确保 multiply 有一个深色底来“吃掉”白底 */
  background: transparent;
}

.hero-art::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.32) 0 1px, transparent 1px 14px),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.32) 0 1px, transparent 1px 14px);
  mix-blend-mode: overlay;
  opacity: 0.28;
  transition: opacity 0.5s ease;
}

.hero-art::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.5) 0 1px, transparent 1.7px) 0 0 / 8px 8px;
  mix-blend-mode: screen;
  opacity: 0.18;
  transition: opacity 0.5s ease;
}

.art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  mix-blend-mode: normal;
  transition: opacity 0.5s ease;
  will-change: opacity;
}

:root[data-theme='dark'] .art-dark {
  mix-blend-mode: normal;
}

.art-light {
  opacity: 1;
}

.art-dark {
  opacity: 0;
}

:root[data-theme='dark'] .art-light {
  opacity: 0;
}

:root[data-theme='dark'] .art-dark {
  opacity: 1;
}

:root[data-theme='dark'] .hero-art::after {
  opacity: 0.2;
}

:root[data-theme='dark'] .hero-art::before {
  opacity: 0.14;
}

.kicker {
  opacity: 1;
  font-size: 1.15rem;
}

.title {
  font-size: clamp(3.4rem, 8vw, 6rem);
  line-height: 1.1;
  margin: 0.25rem 0 0.5rem;
  color: var(--color-heading);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.intro {
  font-size: clamp(1.6rem, 3.2vw, 2.25rem);
  margin: 0.35rem 0 1rem;
  color: var(--color-heading);
}

.typed {
  display: inline-block;
  min-width: 2.6em;
}

.typed-word {
  font-weight: 800;
  color: #f5a92f;
}

:root[data-theme='dark'] .typed-word {
  color: #2f3cf5;
}

.typed::after {
  content: '|';
  display: inline-block;
  margin-left: 0.06em;
  color: #f5a92f;
  line-height: 1;
  animation: blink 1s steps(1) infinite;
}

:root[data-theme='dark'] .typed::after {
  color: #2f3cf5;
}

.statement {
  max-width: 72ch;
  margin: 0.75rem 0 1.25rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.9;
  white-space: pre-line;
  min-height: 10.5em;
}

.hero[data-lang='en'] .statement {
  line-height: 1.65;
}

.subtitle {
  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  opacity: 1;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typed::after {
    animation: none;
  }

  .hero-art,
  .hero-art::before,
  .hero-art::after,
  .art {
    transition: none;
  }
}

@media (max-width: 960px) {
  .hero-layout {
    grid-template-columns: 1fr;
  }

  .hero-art {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
    margin-top: 1.25rem;
    opacity: 0.9;
  }
}
</style>
