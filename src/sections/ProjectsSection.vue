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

const internshipGroupTitle = computed(() =>
  ui.lang === 'zh' ? '景观规划 + 空间数字化' : 'Landscape Planning + Spatial Digitalization',
)

const innovationGroupTitle = computed(() =>
  ui.lang === 'zh' ? '用户体验 + 活化创新' : 'User Experience + Activation Innovation',
)

const internships = computed(() => {
  const smartCity = projects.find((p) => p.id === 'smart-city-intern')
  const landscape = projects.find((p) => p.id === 'landscape-intern')
  return [smartCity, landscape].filter((p): p is NonNullable<typeof p> => Boolean(p))
})

const innovation = computed(() => {
  const ux = projects.find((p) => p.id === 'ux-wupenicity')
  const historic = projects.find((p) => p.id === 'historic-activation')
  return [ux, historic].filter((p): p is NonNullable<typeof p> => Boolean(p))
})
</script>

<template>
  <section id="projects" class="section">
    <div class="head">
      <h2>{{ text.sections.projects.title }}</h2>
      <a class="resume" href="/resume.pdf" download>{{ text.sections.projects.resume }}</a>
    </div>

    <div class="group">
      <p class="group-title">{{ internshipGroupTitle }}</p>
      <div class="pair-grid">
        <article v-for="p in internships" :key="p.id" class="card">
          <h3 class="title">{{ pick(p.title) }}</h3>
          <p class="desc">{{ pick(p.description) }}</p>
          <ul class="tags">
            <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
          </ul>
        </article>
      </div>
    </div>

    <div class="group">
      <p class="group-title">{{ innovationGroupTitle }}</p>
      <div class="pair-grid">
        <article v-for="p in innovation" :key="p.id" class="card">
          <h3 class="title">{{ pick(p.title) }}</h3>
          <p class="desc">{{ pick(p.description) }}</p>
          <ul class="tags">
            <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
          </ul>
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

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.9rem;
}

.resume {
  text-decoration: none;
  padding: 0.35rem 0.6rem;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  opacity: 0.95;
}

.group {
  margin-bottom: 1rem;
}

.group-title {
  margin: 0 0 0.55rem;
  font-size: 0.92rem;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: none;
  color: var(--nav-link-hover);
}

.pair-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 1rem 1rem 1.05rem;
  background: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  min-height: clamp(220px, 28vw, 264px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.03rem, 1.2vw, 1.1rem);
  line-height: 1.34;
  color: var(--color-heading);
}

.desc {
  margin: 0 0 0.75rem;
  line-height: 1.52;
  font-size: clamp(0.95rem, 1.04vw, 1rem);
  opacity: 0.9;
  white-space: pre-line;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0;
  margin: auto 0 0.15rem;
}

.tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  opacity: 0.9;
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

@media (max-width: 900px) {
  .pair-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
