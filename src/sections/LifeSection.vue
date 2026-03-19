<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { favorites, musicAlbums } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

const activeAlbum = ref(0)
const autoplay = true
let autoTimer: number | null = null

const currentAlbum = computed(() => musicAlbums[activeAlbum.value] ?? musicAlbums[0])

function nextAlbum() {
  if (musicAlbums.length === 0) return
  activeAlbum.value = (activeAlbum.value + 1) % musicAlbums.length
}

function prevAlbum() {
  if (musicAlbums.length === 0) return
  activeAlbum.value = (activeAlbum.value - 1 + musicAlbums.length) % musicAlbums.length
}

function pauseAutoplay() {
  if (autoTimer !== null) {
    window.clearInterval(autoTimer)
    autoTimer = null
  }
}

function startAutoplay() {
  if (!autoplay || musicAlbums.length <= 1) return
  pauseAutoplay()
  autoTimer = window.setInterval(nextAlbum, 4200)
}

function signedDistance(index: number) {
  const total = musicAlbums.length
  if (total <= 1) return 0
  const raw = (index - activeAlbum.value + total) % total
  return raw > total / 2 ? raw - total : raw
}

function cardTransform(index: number): CSSProperties {
  const d = signedDistance(index)
  const abs = Math.abs(d)

  if (abs > 4) {
    return {
      opacity: 0,
      zIndex: 0,
      transform: 'translate3d(0, 28px, 0) scale(0.86) rotate(0deg)',
      pointerEvents: 'none' as const,
    }
  }

  const x = d * 30
  const y = abs * 12
  const scale = 1 - abs * 0.06
  const rotate = d === 0 ? 0 : d > 0 ? -5 - abs : 5 + abs
  const opacity = d === 0 ? 1 : 0.74
  const zIndex = d === 0 ? 40 : 24 - abs

  const pointerEvents: CSSProperties['pointerEvents'] = d === 0 ? 'auto' : 'none'

  return {
    opacity,
    zIndex,
    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${rotate}deg)`,
    pointerEvents,
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  pauseAutoplay()
})
</script>

<template>
  <section id="life" class="section">
    <h2 class="section-title-text" :class="ui.lang === 'zh' ? 'noto-sans-sc-heavy' : 'bungee-regular'">{{ text.sections.life.title }}</h2>
    <p class="lead">{{ text.sections.life.lead }}</p>

    <div class="fav-grid">
      <div class="fav-card music-card">
        <h4>{{ text.sections.life.music }}</h4>
        <div class="album-showcase" @mouseenter="pauseAutoplay" @mouseleave="startAutoplay">
          <div class="album-stage">
            <article
              v-for="(album, idx) in musicAlbums"
              :key="`${album.title}-${idx}`"
              class="album-frame"
              :class="{ 'is-active': idx === activeAlbum }"
              :style="cardTransform(idx)"
            >
              <img class="album-cover" :src="album.image" :alt="album.title" loading="lazy" />
            </article>
          </div>
          <div class="album-panel">
            <p class="album-name">{{ currentAlbum?.title }}</p>
            <div class="album-controls">
              <button type="button" class="album-btn" @click="prevAlbum" aria-label="Previous album">&larr;</button>
              <button type="button" class="album-btn" @click="nextAlbum" aria-label="Next album">&rarr;</button>
            </div>
          </div>
        </div>
      </div>

      <div class="fav-card movies-card">
        <h4>{{ text.sections.life.movies }}</h4>
        <ul class="list">
          <li v-for="x in favorites.movies" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card tv-card">
        <h4>{{ text.sections.life.tv }}</h4>
        <ul class="list">
          <li v-for="x in favorites.tv" :key="x">{{ x }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 1.5rem 0;
}

.lead {
  margin: 0.5rem 0 1rem;
  opacity: 1;
}

.fav-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.music-card {
  grid-column: 1;
}

.movies-card {
  grid-column: 2;
}

.tv-card {
  grid-column: 1 / -1;
}

.fav-card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.fav-card h4 {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
}

.list {
  margin: 0;
  padding-left: 1.1rem;
  opacity: 1;
}

.music-list {
  margin-top: 0.75rem;
}

.album-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
}

.album-stage {
  position: relative;
  height: clamp(230px, 32vw, 300px);
  perspective: 1000px;
}

.album-frame {
  position: absolute;
  left: 50%;
  top: 14px;
  width: clamp(130px, 16vw, 190px);
  aspect-ratio: 1 / 1;
  transform-origin: center bottom;
  overflow: visible;
  border-radius: 0;
  background: transparent;
  border: none;
  transition:
    transform 0.55s cubic-bezier(0.22, 0.82, 0.22, 1),
    opacity 0.55s ease,
    box-shadow 0.55s ease;
  box-shadow: none;
  margin-left: calc(clamp(130px, 16vw, 190px) * -0.5);
}

.album-frame.is-active {
  box-shadow: none;
}

.album-frame.is-active .album-cover {
  animation: album-active-float 1.55s ease-in-out infinite;
}

.album-panel {
  display: grid;
  grid-template-rows: 2.9em auto;
  gap: 0.45rem;
  justify-items: center;
  align-content: center;
}

.album-name {
  margin: 0;
  text-align: center;
  color: var(--color-heading);
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.25;
  width: 14ch;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.album-controls {
  display: inline-flex;
  gap: 0.45rem;
}

.album-cover {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.album-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid var(--section-card-border);
  background: var(--color-background);
  color: var(--color-heading);
  font-size: 1.05rem;
  line-height: 1;
  cursor: pointer;
}

:root[data-theme='dark'] .fav-card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

:root[data-theme='dark'] .album-cover {
  box-shadow: 0 16px 26px rgba(0, 0, 0, 0.4);
}

@media (hover: hover) {
  .fav-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .fav-card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .fav-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem;
  }

  .fav-card {
    padding: 1.1rem;
  }

  .album-stage {
    height: clamp(250px, 30vw, 320px);
  }
}

@media (max-width: 900px) {
  .fav-grid {
    grid-template-columns: 1fr;
  }

  .music-card,
  .movies-card,
  .tv-card {
    grid-column: 1;
  }

  .album-showcase {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .album-stage {
    width: 100%;
    height: clamp(220px, 62vw, 280px);
  }

  .album-panel {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    align-items: center;
    justify-items: start;
    width: 100%;
  }

  .album-name {
    width: auto;
    overflow: visible;
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .album-stage {
    height: 230px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fav-card {
    transition: none;
  }

  .album-frame,
  .album-frame.is-active .album-cover {
    transition: none;
    animation: none;
  }
}

@keyframes album-active-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

