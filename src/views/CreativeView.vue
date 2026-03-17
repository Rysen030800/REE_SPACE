<script setup lang="ts">
import { favorites, illustrations, photography } from '../data/creative'
</script>

<template>
  <section class="wrap">
    <h1>Creative</h1>
    <p class="lead">Photography, drawings, and a few personal favorites.</p>

    <h2 id="photography" class="anchor">Photography</h2>
    <div class="grid">
      <article v-for="p in photography" :key="p.title" class="card">
        <img v-if="p.image" class="img" :src="p.image" :alt="p.title" loading="lazy" />
        <div v-else class="img placeholder" aria-hidden="true" />
        <h3 class="card-title">{{ p.title }}</h3>
        <p v-if="p.description" class="card-desc">{{ p.description }}</p>
        <p v-if="p.meta" class="meta">{{ p.meta }}</p>
      </article>
    </div>

    <h2 id="illustration" class="anchor">Illustration</h2>
    <div class="grid">
      <article v-for="p in illustrations" :key="p.title" class="card">
        <img v-if="p.image" class="img" :src="p.image" :alt="p.title" loading="lazy" />
        <div v-else class="img placeholder" aria-hidden="true" />
        <h3 class="card-title">{{ p.title }}</h3>
        <p v-if="p.description" class="card-desc">{{ p.description }}</p>
        <p v-if="p.meta" class="meta">{{ p.meta }}</p>
      </article>
    </div>

    <h2 id="favorites" class="anchor">Favorites</h2>
    <div class="fav-grid">
      <div class="fav-card">
        <h3>Music</h3>
        <ul class="list">
          <li v-for="x in favorites.music" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card">
        <h3>Movies</h3>
        <ul class="list">
          <li v-for="x in favorites.movies" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card">
        <h3>TV Shows</h3>
        <ul class="list">
          <li v-for="x in favorites.tv" :key="x">{{ x }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  padding: 0.5rem 0 2rem;
}

.lead {
  margin: 0.5rem 0 1.25rem;
  opacity: 0.85;
}

.anchor {
  scroll-margin-top: 90px;
  margin: 1.75rem 0 0.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--color-border);
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

.card-title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: var(--color-heading);
}

.card-desc {
  opacity: 0.85;
  margin: 0 0 0.4rem;
}

.meta {
  opacity: 0.75;
  font-size: 0.9rem;
  margin: 0;
}

.fav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.fav-card {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
}

.fav-card h3 {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
}

.list {
  margin: 0;
  padding-left: 1.1rem;
  opacity: 0.85;
}
</style>
