<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, type ComponentPublicInstance } from 'vue'
import { illustrations, photography } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

const titleBase = `${import.meta.env.BASE_URL}title/`
const titleLightSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E5%88%9B%E4%BD%9C1.png` : `${titleBase}works%201.png`,
)
const titleDarkSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E5%88%9B%E4%BD%9C%202.png` : `${titleBase}works%202.png`,
)

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function pickOpt(value: { zh: string; en: string } | undefined) {
  return value ? pick(value) : undefined
}

type Offset = { dx: number; dy: number }

const gridRef = ref<HTMLElement | null>(null)
const photoTitleRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const offsets = ref<Offset[]>([])
const settleProgress = ref(0)
const disablePhotoMotion = ref(false)
let rafId = 0
let reduceMotion = false

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function setCardRef(el: Element | ComponentPublicInstance | null, index: number) {
  if (!el) return
  const element = el instanceof Element ? el : ((el as ComponentPublicInstance).$el as Element | null)
  if (!element) return
  cardRefs.value[index] = element as HTMLElement
}

function measureOffsets() {
  if (!gridRef.value || cardRefs.value.length === 0) return

  const centerX = gridRef.value.clientWidth / 2
  const centerY = gridRef.value.clientHeight / 2

  offsets.value = cardRefs.value.map((card) => {
    const cardCenterX = card.offsetLeft + card.offsetWidth / 2
    const cardCenterY = card.offsetTop + card.offsetHeight / 2
    return {
      dx: centerX - cardCenterX,
      dy: centerY - cardCenterY,
    }
  })
}

function updateProgress() {
  if (!gridRef.value || !photoTitleRef.value) return

  disablePhotoMotion.value = window.innerWidth <= 900

  if (reduceMotion || disablePhotoMotion.value) {
    settleProgress.value = 1
    return
  }

  const titleRect = photoTitleRef.value.getBoundingClientRect()
  const gridRect = gridRef.value.getBoundingClientRect()
  const vh = window.innerHeight || 1

  const scrollY = window.scrollY || window.pageYOffset || 0
  const startScroll = scrollY + titleRect.top - vh
  const endScroll = scrollY + (gridRect.top + gridRect.height / 2) - vh * 0.5
  const span = Math.max(endScroll - startScroll, 1)
  const raw = (scrollY - startScroll) / span
  settleProgress.value = clamp(raw, 0, 1)
}

function requestUpdate() {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    rafId = 0
    updateProgress()
  })
}

function requestMeasure() {
  nextTick(() => {
    measureOffsets()
    updateProgress()
  })
}

function photoCardStyle(index: number): Record<string, string> {
  const offset = offsets.value[index] ?? { dx: 0, dy: 0 }
  const t = easeOutCubic(settleProgress.value)

  const tx = offset.dx * (1 - t)
  const ty = offset.dy * (1 - t)
  const scale = 0.52 + 0.48 * t
  const rotate = (index % 2 === 0 ? -1 : 1) * (1 - t) * 6
  const z = Math.round((1 - t) * (200 - index) + t * (index + 1))

  return {
    transform: `translate(${tx}px, ${ty}px) scale(${scale}) rotate(${rotate}deg)`,
    opacity: '1',
    zIndex: `${z}`,
  }
}

onMounted(() => {
  reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  requestMeasure()

  if (!reduceMotion) {
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestMeasure)
  }
})

onBeforeUnmount(() => {
  if (rafId) window.cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', requestUpdate)
  window.removeEventListener('resize', requestMeasure)
})
</script>

<template>
  <section id="creative" class="section">
    <h2 class="section-title-image" :aria-label="text.sections.creative.title">
      <img class="title-image title-image-light" :src="titleLightSrc" :alt="text.sections.creative.title" />
      <img class="title-image title-image-dark" :src="titleDarkSrc" :alt="text.sections.creative.title" />
    </h2>
    <p class="lead">{{ text.sections.creative.lead }}</p>

    <h3 id="photography" ref="photoTitleRef" class="anchor">{{ text.sections.creative.photography }}</h3>
    <div class="photo-album">
      <div ref="gridRef" class="photo-grid">
        <article
          v-for="(p, idx) in photography"
          :key="pick(p.title)"
          class="photo-card"
          :style="photoCardStyle(idx)"
          :ref="(el) => setCardRef(el, idx)"
        >
          <div class="photo-media">
            <img v-if="p.image" class="photo-img" :src="p.image" :alt="pick(p.title)" loading="lazy" @load="requestMeasure" />
          </div>
        </article>
      </div>
    </div>

    <h3 id="illustration" class="anchor">{{ text.sections.creative.illustration }}</h3>
    <div class="grid">
      <article v-for="p in illustrations" :key="pick(p.title)" class="card">
        <img v-if="p.image" class="img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
        <div v-else class="img placeholder" aria-hidden="true" />
        <div class="row">
          <div class="name">{{ pick(p.title) }}</div>
          <div v-if="pickOpt(p.meta)" class="meta">{{ pickOpt(p.meta) }}</div>
        </div>
        <p v-if="pickOpt(p.description)" class="desc">{{ pickOpt(p.description) }}</p>
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

.photo-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.photo-album {
  margin: 0.25rem 0 1.2rem;
  padding: 0.85rem;
  border: 1px solid var(--section-card-border);
  border-radius: 16px;
  background: var(--color-background-soft);
}

.photo-card {
  transform-origin: center center;
  will-change: transform, opacity;
}

.photo-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

.photo-media {
  display: flex;
  align-items: center;
  justify-content: center;
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
  .photo-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .photo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .photo-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .photo-grid {
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
