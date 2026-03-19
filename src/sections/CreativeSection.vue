<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { illustrations, photography } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

const carouselPhotos = computed(() => [...photography, ...photography])
const albumRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
let focusRaf: number | null = null
let marqueeRaf: number | null = null
let marqueeLastTs = 0
let marqueeOffset = 0
let marqueeSpeed = 78
let marqueeTargetSpeed = 78
let reduceMotion = false

function setMarqueeHover(hovered: boolean) {
  marqueeTargetSpeed = hovered ? 0 : 78
}

function startMarqueeLoop() {
  const tick = (ts: number) => {
    const track = trackRef.value
    if (!track || reduceMotion) {
      marqueeRaf = window.requestAnimationFrame(tick)
      return
    }

    if (!marqueeLastTs) marqueeLastTs = ts
    const dt = Math.max(0.001, (ts - marqueeLastTs) / 1000)
    marqueeLastTs = ts

    marqueeSpeed += (marqueeTargetSpeed - marqueeSpeed) * 0.065
    marqueeOffset -= marqueeSpeed * dt

    const loopWidth = track.scrollWidth / 2
    if (loopWidth > 0) {
      while (marqueeOffset <= -loopWidth) marqueeOffset += loopWidth
      while (marqueeOffset > 0) marqueeOffset -= loopWidth
      track.style.transform = `translateX(${marqueeOffset}px)`
    }

    marqueeRaf = window.requestAnimationFrame(tick)
  }

  if (marqueeRaf !== null) window.cancelAnimationFrame(marqueeRaf)
  marqueeRaf = window.requestAnimationFrame(tick)
}

function stopMarqueeLoop() {
  if (marqueeRaf !== null) {
    window.cancelAnimationFrame(marqueeRaf)
    marqueeRaf = null
  }
}

function updatePhotoFocus() {
  const album = albumRef.value
  if (!album) return

  const albumRect = album.getBoundingClientRect()
  const albumCenter = albumRect.left + albumRect.width / 2
  const effectRadius = albumRect.width * 0.26
  const cards = album.querySelectorAll<HTMLElement>('.photo-card')

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const distance = Math.abs(cardCenter - albumCenter)
    const focus = Math.max(0, 1 - distance / effectRadius)
    card.style.setProperty('--focus', focus.toFixed(3))
    card.style.setProperty('--focus-z', String(Math.round(focus * 100) + 1))
  })
}

function startFocusLoop() {
  const tick = () => {
    updatePhotoFocus()
    focusRaf = window.requestAnimationFrame(tick)
  }

  if (focusRaf !== null) {
    window.cancelAnimationFrame(focusRaf)
  }
  focusRaf = window.requestAnimationFrame(tick)
}

function stopFocusLoop() {
  if (focusRaf !== null) {
    window.cancelAnimationFrame(focusRaf)
    focusRaf = null
  }
}

onMounted(async () => {
  await nextTick()
  reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  marqueeSpeed = reduceMotion ? 0 : 78
  marqueeTargetSpeed = marqueeSpeed
  startMarqueeLoop()
  startFocusLoop()
})

onBeforeUnmount(() => {
  stopMarqueeLoop()
  stopFocusLoop()
})
</script>

<template>
  <section id="creative" class="section">
    <h2 class="section-title-text" :class="ui.lang === 'zh' ? 'noto-sans-sc-heavy' : 'bungee-regular'">{{ text.sections.creative.title }}</h2>
    <p class="lead">{{ text.sections.creative.lead }}</p>

    <h3 id="photography" class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="7.5" width="17" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="12" cy="13.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 7.5 9.5 5h5L16 7.5" />
      </svg>
      <span>{{ text.sections.creative.photography }}</span>
    </h3>
    <div ref="albumRef" class="photo-album" @mouseenter="setMarqueeHover(true)" @mouseleave="setMarqueeHover(false)">
      <div class="photo-viewport">
        <div ref="trackRef" class="photo-track">
          <article
            v-for="(p, idx) in carouselPhotos"
            :key="`${pick(p.title)}-${idx}`"
            class="photo-card"
          >
            <div class="photo-media">
              <img v-if="p.image" class="photo-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
            </div>
          </article>
        </div>
      </div>
    </div>

    <h3 id="illustration" class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 19.5h4l8.8-8.8-4-4L4 15.5v4Z" />
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="m13.2 6.5 1.8-1.8a2 2 0 0 1 2.8 0l1.5 1.5a2 2 0 0 1 0 2.8l-1.8 1.8" />
      </svg>
      <span>{{ text.sections.creative.illustration }}</span>
    </h3>
    <div class="illustration-grid">
      <article v-for="p in illustrations" :key="pick(p.title)" class="illustration-item">
        <img v-if="p.image" class="illustration-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
        <div v-else class="illustration-img placeholder" aria-hidden="true" />
      </article>
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

.anchor {
  scroll-margin-top: 90px;
  margin: 1.25rem 0 0.75rem;
}

.anchor-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--section-subtitle-color);
  font-family: var(--font-section-subtitle);
  font-weight: var(--font-section-subtitle-weight);
  font-style: var(--font-section-subtitle-style);
  font-size: var(--section-subtitle-size);
}

.mini-icon {
  width: 1.05rem;
  height: 1.05rem;
  color: var(--section-subtitle-color);
  flex: 0 0 auto;
}

.photo-track {
  position: relative;
  display: flex;
  gap: var(--photo-gap, 1.1rem);
  width: max-content;
}

.photo-album {
  --photo-gap: 2.6rem;
  margin: 0.25rem 0 1.2rem;
  padding: 0;
  overflow: visible;
}

.photo-viewport {
  overflow: visible;
}

.photo-card {
  position: relative;
  width: clamp(190px, 19vw, 260px);
  flex: 0 0 auto;
  --focus: 0;
  --focus-z: 1;
  transform: scale(calc(1 + var(--focus) * 0.24));
  transition: transform 70ms ease-out;
  transform-origin: center center;
  z-index: var(--focus-z);
}

.photo-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
}

.photo-media {
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.illustration-item {
  margin: 0;
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.6rem;
  background: var(--color-background-soft);
}

.illustration-img {
  width: 100%;
  aspect-ratio: 4 / 5;
  height: auto;
  display: block;
  border-radius: 12px;
  object-fit: cover;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  margin-bottom: 0.75rem;
  background: var(--color-background-mute);
}

.placeholder {
  display: block;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
}

.name {
  font-weight: 600;
  color: var(--color-heading);
}

.meta {
  opacity: 1;
  font-size: 0.9rem;
}

.desc {
  margin: 0;
  opacity: 1;
}

:root[data-theme='dark'] .card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

@media (hover: hover) {
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 1100px) {
  .photo-card {
    width: clamp(170px, 27vw, 230px);
  }
}

@media (max-width: 900px) {
  .photo-album {
    --photo-gap: 2rem;
  }

  .photo-card {
    width: clamp(150px, 35vw, 200px);
  }

  .illustration-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .photo-album {
    --photo-gap: 1.45rem;
  }

  .photo-card {
    width: clamp(135px, 56vw, 180px);
  }

  .illustration-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .illustration-grid {
    gap: 0.8rem;
  }

  .grid {
    gap: 1.15rem;
  }

  .card {
    padding: 1.1rem;
  }

  .img {
    margin-bottom: 0.85rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
