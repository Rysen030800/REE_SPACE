<script setup lang="ts">
import { computed } from 'vue'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
const titleBase = `${import.meta.env.BASE_URL}title/`
const titleLightSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E8%81%94%E7%B3%BB1.png` : `${titleBase}contact%201.png`,
)
const titleDarkSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E8%81%94%E7%B3%BB%202.png` : `${titleBase}contact%202.png`,
)
</script>

<template>
  <section id="contact" class="section">
    <h2 class="section-title-image" :aria-label="text.sections.contact.title">
      <img class="title-image title-image-light" :src="titleLightSrc" :alt="text.sections.contact.title" />
      <img class="title-image title-image-dark" :src="titleDarkSrc" :alt="text.sections.contact.title" />
    </h2>
    <p class="lead">{{ text.sections.contact.lead }}</p>

    <div class="cards">
      <div class="card">
        <h3>{{ text.sections.contact.phone }}</h3>
        <p><a href="tel:+8615260569578">+86 152 6056 9578</a></p>
      </div>

      <div class="card">
        <h3>{{ text.sections.contact.email }}</h3>
        <p><a href="mailto:crqrp88@163.com">crqrp88@163.com</a></p>
      </div>

      <div class="card">
        <h3>{{ text.sections.contact.github }}</h3>
        <p class="muted">{{ text.sections.contact.optional }}</p>
      </div>

      <div class="card">
        <h3>{{ text.sections.contact.linkedin }}</h3>
        <p class="muted">{{ text.sections.contact.optional }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 1.5rem 0 2.25rem;
  max-width: 1040px;
}

.lead {
  margin: 0.5rem 0 1rem;
  opacity: 1;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

.card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-heading);
}

.muted {
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
    padding: 1.8rem 0 2.5rem;
    max-width: 1120px;
  }

  .cards {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.15rem;
  }

  .card {
    padding: 1.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
