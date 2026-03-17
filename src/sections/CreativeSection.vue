<script setup lang="ts">
import { computed } from 'vue'
import { favorites, illustrations, photography } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function pickOpt(value: { zh: string; en: string } | undefined) {
  return value ? pick(value) : undefined
}
</script>

<template>
  <section id="creative" class="section">
    <h2>{{ text.sections.creative.title }}</h2>
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

    <h3 id="favorites" class="anchor">{{ text.sections.creative.favorites }}</h3>
    <div class="fav-grid">
      <div class="fav-card">
        <h4>{{ text.sections.creative.music }}</h4>
        <ul class="list">
          <li v-for="x in favorites.music" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card">
        <h4>{{ text.sections.creative.movies }}</h4>
        <ul class="list">
          <li v-for="x in favorites.movies" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card">
        <h4>{{ text.sections.creative.tv }}</h4>
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

.fav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.fav-card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
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
</style>
