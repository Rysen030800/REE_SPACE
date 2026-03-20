<script setup lang="ts">
import { computed } from 'vue'
import { illustrations, photography } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

const marqueePhotos = computed(() => [...photography, ...photography])
const marqueeIllustrations = computed(() => [...illustrations, ...illustrations])
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
    <div class="marquee marquee-left">
      <div class="marquee-track">
        <article v-for="(p, idx) in marqueePhotos" :key="`photo-a-${pick(p.title)}-${idx}`" class="photo-card">
          <div class="photo-media">
            <img v-if="p.image" class="photo-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
          </div>
        </article>
      </div>
      <div class="marquee-track" aria-hidden="true">
        <article v-for="(p, idx) in marqueePhotos" :key="`photo-b-${pick(p.title)}-${idx}`" class="photo-card">
          <div class="photo-media">
            <img v-if="p.image" class="photo-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
          </div>
        </article>
      </div>
    </div>

    <h3 id="illustration" class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 19.5h4l8.8-8.8-4-4L4 15.5v4Z" />
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="m13.2 6.5 1.8-1.8a2 2 0 0 1 2.8 0l1.5 1.5a2 2 0 0 1 0 2.8l-1.8 1.8" />
      </svg>
      <span>{{ text.sections.creative.illustration }}</span>
    </h3>
    <div class="marquee marquee-right">
      <div class="marquee-track illustration-track">
        <article v-for="(p, idx) in marqueeIllustrations" :key="`illustration-a-${pick(p.title)}-${idx}`" class="illustration-item">
          <img v-if="p.image" class="illustration-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
          <div v-else class="illustration-img placeholder" aria-hidden="true" />
        </article>
      </div>
      <div class="marquee-track illustration-track" aria-hidden="true">
        <article v-for="(p, idx) in marqueeIllustrations" :key="`illustration-b-${pick(p.title)}-${idx}`" class="illustration-item">
          <img v-if="p.image" class="illustration-img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
          <div v-else class="illustration-img placeholder" aria-hidden="true" />
        </article>
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

.marquee {
  --marquee-gap: 1rem;
  --marquee-duration: 44s;
  display: flex;
  gap: var(--marquee-gap);
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: var(--marquee-gap);
  width: max-content;
  flex-shrink: 0;
  animation: marquee-left var(--marquee-duration) linear infinite;
}

.marquee-left {
  --marquee-gap: 1.2rem;
  --marquee-duration: 48s;
  margin: 0.25rem 0 1.2rem;
}

.marquee-right {
  --marquee-gap: 0.75rem;
  --marquee-duration: 42s;
}

.photo-card {
  width: clamp(180px, 18vw, 250px);
  flex: 0 0 auto;
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

.illustration-item {
  margin: 0;
  border: 0;
  border-radius: 0;
  padding: 0;
  background: transparent;
  width: clamp(180px, 18vw, 250px);
  flex: 0 0 auto;
}

.illustration-img {
  width: 100%;
  aspect-ratio: 4 / 5;
  height: auto;
  display: block;
  border-radius: 0;
  object-fit: cover;
}

.illustration-track {
  animation-name: marquee-right;
}

.placeholder {
  display: block;
}

@media (max-width: 1100px) {
  .photo-card,
  .illustration-item {
    width: clamp(170px, 27vw, 230px);
  }
}

@media (max-width: 900px) {
  .photo-card,
  .illustration-item {
    width: clamp(150px, 35vw, 200px);
  }
}

@media (max-width: 640px) {
  .photo-card,
  .illustration-item {
    width: clamp(140px, 42vw, 180px);
  }

  .marquee-left {
    --marquee-gap: 0.95rem;
  }

  .marquee-right {
    --marquee-gap: 0.62rem;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }
}

@media (hover: hover) {
  .marquee:hover .marquee-track {
    animation-play-state: paused;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--marquee-gap)));
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(calc(-100% - var(--marquee-gap)));
  }
  to {
    transform: translateX(0);
  }
}
</style>
