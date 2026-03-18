<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '../data/projects'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
const titleBase = `${import.meta.env.BASE_URL}title/`
const titleLightSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E7%BB%8F%E5%8E%861.png` : `${titleBase}experience%201.png`,
)
const titleDarkSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E7%BB%8F%E5%8E%86%202.png` : `${titleBase}experience%202.png`,
)

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function shouldSegmentDescription(_id: string) {
  return true
}

function splitNumberedSections(content: string) {
  const lines = content.split('\n')
  const sections: string[] = []
  let current = ''

  for (const line of lines) {
    const trimmed = line.trim()
    if (/^\d+\.\s/.test(trimmed)) {
      if (current.trim()) sections.push(current.trim())
      current = trimmed
      continue
    }

    current = current ? `${current}\n${line}` : line
  }

  if (current.trim()) sections.push(current.trim())
  return sections.length > 0 ? sections : [content]
}

const internshipGroupTitle = computed(() =>
  ui.lang === 'zh' ? '空间数字化 + 景观规划' : 'Spatial Digitalization + Landscape Planning',
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

const educationItems = computed(() => {
  if (ui.lang === 'zh') {
    return [
      { school: '香港城市大学', period: '09.2025 - 10.2026', degree: '硕士｜房屋与都市管理' },
      { school: '福建理工大学', period: '09.2019 - 07.2024', degree: '工学学士｜风景园林' },
    ]
  }

  return [
    { school: 'City University of Hong Kong', period: '09.2025 - 10.2026', degree: 'Master | Housing and Urban Management' },
    { school: 'Fujian University of Technology', period: '09.2019 - 07.2024', degree: 'Bachelor of Engineering | Landscape Architecture' },
  ]
})

const skillGroups = computed(() => {
  if (ui.lang === 'zh') {
    return [
      { title: '数据与研究', items: ['SQL, SPSS, Tableau', '用户研究、问卷与用户画像'] },
      { title: '设计与可视化', items: ['Adobe PS/AI/Id, SketchUp, Figma', 'GIS / BIM（项目实践）'] },
      { title: 'AI 工具', items: ['ChatGPT, Gemini, AI 内容生成'] },
      { title: '语言', items: ['普通话（母语），闽南语（流利）', '英语（IELTS 7.0），粤语（学习中）', '日语 / 西班牙语（入门）'] },
    ]
  }

  return [
    { title: 'Data & Research', items: ['SQL, SPSS, Tableau', 'User research, survey & persona'] },
    { title: 'Design & Visualization', items: ['Adobe PS/AI/Id, SketchUp, Figma', 'GIS / BIM (project practice)'] },
    { title: 'AI Tools', items: ['ChatGPT, Gemini, AI content generation'] },
    { title: 'Languages', items: ['Mandarin (native), Min Nan (fluent)', 'English (IELTS 7.0), Cantonese (learning)', 'Japanese / Spanish (beginner)'] },
  ]
})
</script>

<template>
  <section id="projects" class="section">
    <div class="head">
      <h2 class="section-title-image" :aria-label="text.sections.projects.title">
        <img class="title-image title-image-light" :src="titleLightSrc" :alt="text.sections.projects.title" />
        <img class="title-image title-image-dark" :src="titleDarkSrc" :alt="text.sections.projects.title" />
      </h2>
    </div>

    <div class="group">
      <p class="group-title">{{ internshipGroupTitle }}</p>
      <div class="pair-grid internship-grid">
        <article v-for="p in internships" :key="p.id" class="card" :class="{ 'card-landscape': p.id === 'landscape-intern' }">
          <h3 class="title">{{ pick(p.title) }}</h3>
          <div v-if="shouldSegmentDescription(p.id)" class="desc-groups">
            <p v-for="(block, idx) in splitNumberedSections(pick(p.description))" :key="`${p.id}-${idx}`" class="desc desc-block">
              {{ block }}
            </p>
          </div>
          <p v-else class="desc">{{ pick(p.description) }}</p>
          <div class="card-footer">
            <ul class="tags">
              <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
            </ul>
            <span class="date-chip">{{ p.date }}</span>
          </div>
        </article>
      </div>
    </div>

    <div class="group">
      <p class="group-title">{{ innovationGroupTitle }}</p>
      <div class="pair-grid innovation-grid">
        <article v-for="p in innovation" :key="p.id" class="card">
          <h3 class="title">{{ pick(p.title) }}</h3>
          <div v-if="shouldSegmentDescription(p.id)" class="desc-groups">
            <p v-for="(block, idx) in splitNumberedSections(pick(p.description))" :key="`${p.id}-${idx}`" class="desc desc-block">
              {{ block }}
            </p>
          </div>
          <p v-else class="desc">{{ pick(p.description) }}</p>
          <div class="card-footer">
            <ul class="tags">
              <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
            </ul>
            <span class="date-chip">{{ p.date }}</span>
          </div>
        </article>
      </div>
    </div>

    <h3 id="about" class="anchor">{{ text.sections.about.education }}</h3>
    <div class="timeline">
      <article v-for="item in educationItems" :key="item.school" class="info-card">
        <div class="row">
          <strong>{{ item.school }}</strong>
          <span class="meta">{{ item.period }}</span>
        </div>
        <p class="muted">{{ item.degree }}</p>
      </article>
    </div>

    <h3 class="anchor">{{ text.sections.about.skills }}</h3>
    <div class="skills">
      <article v-for="group in skillGroups" :key="group.title" class="info-card">
        <h4>{{ group.title }}</h4>
        <ul class="list">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
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
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.1rem;
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

.internship-grid {
  grid-template-columns: 1fr;
}

.internship-grid .card {
  min-height: 210px;
}

.card-landscape {
  min-height: 420px;
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

.desc-groups {
  display: grid;
  gap: 0.4rem;
  margin: 0 0 0.75rem;
}

.desc-block {
  margin: 0;
  padding: 0.45rem 0.55rem;
  border-radius: 10px;
  border: 1px solid var(--section-card-border);
  background: var(--color-background);
}

.card-footer {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.6rem;
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

.date-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0.24rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--section-card-border);
  color: var(--section-card-border);
  line-height: 1.1;
  font-size: 0.82rem;
  min-height: 1.8rem;
}

.anchor {
  scroll-margin-top: 90px;
  margin: 1.25rem 0 0.75rem;
}

.timeline {
  margin: 0.5rem 0 1.25rem;
  display: grid;
  gap: 0.9rem;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0.5rem 0 1.25rem;
}

.info-card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.info-card h4 {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
  font-size: 1.02rem;
}

.muted {
  margin: 0.35rem 0 0;
  opacity: 0.8;
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.meta {
  opacity: 0.75;
  font-size: 0.9rem;
}

.list {
  padding-left: 1.1rem;
  margin: 0.25rem 0 0;
  opacity: 0.85;
}

:root[data-theme='dark'] .card,
:root[data-theme='dark'] .info-card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

@media (hover: hover) {
  .card:hover,
  .info-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .card:hover,
  :root[data-theme='dark'] .info-card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 900px) {
  .pair-grid {
    grid-template-columns: 1fr;
  }

  .card-footer {
    flex-wrap: wrap;
    row-gap: 0.45rem;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .group-title {
    font-size: 0.98rem;
  }

  .pair-grid,
  .skills {
    gap: 1.15rem;
  }

  .card {
    min-height: clamp(250px, 24vw, 300px);
    padding: 1.1rem 1.1rem 1.15rem;
  }

  .internship-grid .card {
    min-height: 240px;
  }

  .card-landscape {
    min-height: 470px;
  }

  .title {
    font-size: clamp(1.08rem, 1.15vw, 1.22rem);
  }

  .desc {
    font-size: clamp(0.98rem, 1.02vw, 1.06rem);
  }

  .tag {
    font-size: 0.84rem;
  }

  .date-chip {
    font-size: 0.86rem;
  }

  .info-card {
    padding: 1rem 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .info-card {
    transition: none;
  }
}
</style>
