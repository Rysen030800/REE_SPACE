<script setup lang="ts">
import { computed } from 'vue'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

const educationItems = computed(() => {
  if (ui.lang === 'zh') {
    return [
      {
        school: '香港城市大学',
        period: '09.2025 - 10.2026',
        degree: '硕士｜房屋与都市管理',
      },
      {
        school: '福建理工大学',
        period: '09.2019 - 07.2024',
        degree: '工学学士｜风景园林',
      },
    ]
  }

  return [
    {
      school: 'City University of Hong Kong',
      period: '09.2025 - 10.2026',
      degree: 'Master | Housing and Urban Management',
    },
    {
      school: 'Fujian University of Technology',
      period: '09.2019 - 07.2024',
      degree: 'Bachelor of Engineering | Landscape Architecture',
    },
  ]
})
</script>

<template>
  <section id="about" class="section">
    <h2>{{ text.sections.about.title }}</h2>

    <p class="lead">{{ text.sections.about.lead }}</p>
    <p class="muted">{{ text.sections.about.availability }}</p>

    <h3 class="anchor">{{ text.sections.about.education }}</h3>
    <div class="timeline">
      <div v-for="item in educationItems" :key="item.school" class="item">
        <div class="row">
          <strong>{{ item.school }}</strong>
          <span class="meta">{{ item.period }}</span>
        </div>
        <div class="muted">{{ item.degree }}</div>
      </div>
    </div>

    <h3 class="anchor">{{ text.sections.about.skills }}</h3>
    <div class="skills">
      <div class="skill">
        <h4>Data &amp; Research</h4>
        <ul class="list">
          <li>SQL, SPSS, Tableau</li>
          <li>User research, survey &amp; persona</li>
        </ul>
      </div>

      <div class="skill">
        <h4>Design &amp; Visualization</h4>
        <ul class="list">
          <li>Adobe PS/AI/Id, SketchUp, Figma</li>
          <li>GIS / BIM (project practice)</li>
        </ul>
      </div>

      <div class="skill">
        <h4>AI Tools</h4>
        <ul class="list">
          <li>ChatGPT, Gemini, AI content generation</li>
        </ul>
      </div>

      <div class="skill">
        <h4>Languages</h4>
        <ul class="list">
          <li>Mandarin (native), Min Nan (fluent)</li>
          <li>English (IELTS 7.0), Cantonese (learning)</li>
          <li>Japanese / Spanish (beginner)</li>
        </ul>
      </div>
    </div>

    <div class="resume">
      <a class="resume-link" href="/resume.pdf" download>{{ text.sections.about.resume }}</a>
      <p class="muted">{{ text.sections.about.resumeHint }}</p>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 1.5rem 0;
  max-width: 900px;
}

.lead {
  margin: 0.5rem 0 0.25rem;
  opacity: 0.9;
}

.muted {
  opacity: 0.8;
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

.item {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
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

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0.5rem 0 1.25rem;
}

.skill {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.skill h4 {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
  font-size: 1.02rem;
}

.list {
  padding-left: 1.1rem;
  margin: 0.25rem 0 0;
  opacity: 0.85;
}

.resume {
  border: 1px dashed var(--section-card-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.resume-link {
  text-decoration: none;
  display: inline-flex;
  padding: 0.45rem 0.7rem;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
}

:root[data-theme='dark'] .item,
:root[data-theme='dark'] .skill,
:root[data-theme='dark'] .resume {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

@media (hover: hover) {
  .item:hover,
  .skill:hover,
  .resume:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .item:hover,
  :root[data-theme='dark'] .skill:hover,
  :root[data-theme='dark'] .resume:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .item,
  .skill,
  .resume {
    transition: none;
  }
}
</style>
