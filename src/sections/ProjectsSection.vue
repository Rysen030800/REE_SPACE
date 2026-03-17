<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}
</script>

<template>
  <section id="projects" class="section">
    <div class="head">
      <h2>{{ text.sections.projects.title }}</h2>
      <a class="resume" href="/resume.pdf" download>{{ text.sections.projects.resume }}</a>
    </div>

    <div class="grid">
      <article v-for="p in projects" :key="pick(p.title)" class="card">
        <h3 class="title">{{ pick(p.title) }}</h3>
        <p class="desc">{{ pick(p.description) }}</p>
        <ul class="tags">
          <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 1.5rem 0;
}

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.resume {
  text-decoration: none;
  padding: 0.35rem 0.6rem;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  opacity: 0.95;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
}

.title {
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  color: var(--color-heading);
}

.desc {
  margin: 0 0 0.85rem;
  opacity: 0.85;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0;
  margin: 0;
}

.tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  opacity: 0.9;
}
</style>
