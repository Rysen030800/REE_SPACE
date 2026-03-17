<script setup lang="ts">
import { computed } from 'vue'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
</script>

<template>
  <section id="contact" class="section">
    <h2>{{ text.sections.contact.title }}</h2>
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
  max-width: 900px;
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
}

.card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-heading);
}

.muted {
  opacity: 1;
}
</style>
