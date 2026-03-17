<script setup lang="ts">
import { projects } from '../data/projects'
</script>

<template>
  <section class="wrap">
    <h1>Projects</h1>
    <p class="lead">A selection of things I've built.</p>

    <div class="grid">
      <article v-for="p in projects" :key="p.title" class="card">
        <div class="card-top">
          <h2 class="card-title">{{ p.title }}</h2>
          <a v-if="p.link" class="card-link" :href="p.link" target="_blank" rel="noreferrer">Link</a>
        </div>

        <p class="card-desc">{{ p.description }}</p>

        <ul class="tags">
          <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  padding: 0.5rem 0;
}

.lead {
  margin: 0.5rem 0 1rem;
  opacity: 0.85;
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

.card-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.card-title {
  font-size: 1.15rem;
  color: var(--color-heading);
  margin: 0;
}

.card-link {
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.card-desc {
  margin: 0.75rem 0 0.9rem;
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
