<script setup lang="ts">
import { computed } from 'vue'
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
</script>

<template>
  <section id="creative" class="section">
    <h2 class="section-title-image" :aria-label="text.sections.creative.title">
      <img class="title-image title-image-light" :src="titleLightSrc" :alt="text.sections.creative.title" />
      <img class="title-image title-image-dark" :src="titleDarkSrc" :alt="text.sections.creative.title" />
    </h2>
    <p class="lead">{{ text.sections.creative.lead }}</p>

    <h3 id="photography" class="anchor">{{ text.sections.creative.photography }}</h3>
    <div class="grid">
      <article v-for="p in photography" :key="pick(p.title)" class="card">
        <img v-if="p.image" class="img" :src="p.image" :alt="pick(p.title)" loading="lazy" />
        <div v-else class="img placeholder" aria-hidden="true" />
        <div class="row">
          <div class="name">{{ pick(p.title) }}</div>
          <div v-if="pickOpt(p.meta)" class="meta">{{ pickOpt(p.meta) }}</div>
        </div>
        <p v-if="pickOpt(p.description)" class="desc">{{ pickOpt(p.description) }}</p>
      </article>
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

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
