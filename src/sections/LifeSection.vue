<script setup lang="ts">
import { computed } from 'vue'
import { favorites, musicAlbums } from '../data/creative'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
const titleBase = `${import.meta.env.BASE_URL}title/`
const titleLightSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E7%94%9F%E6%B4%BB1.png` : `${titleBase}life%201.png`,
)
const titleDarkSrc = computed(() =>
  ui.lang === 'zh' ? `${titleBase}%E7%94%9F%E6%B4%BB%202.png` : `${titleBase}life%202.png`,
)

function mosaicSize(index: number) {
  const pattern = ['lg', 'sm', 'sm', 'md', 'sm', 'lg', 'sm', 'md', 'sm', 'sm', 'lg', 'sm']
  return pattern[index % pattern.length]
}
</script>

<template>
  <section id="life" class="section">
    <h2 class="section-title-image" :aria-label="text.sections.life.title">
      <img class="title-image title-image-light" :src="titleLightSrc" :alt="text.sections.life.title" />
      <img class="title-image title-image-dark" :src="titleDarkSrc" :alt="text.sections.life.title" />
    </h2>
    <p class="lead">{{ text.sections.life.lead }}</p>

    <div class="fav-grid">
      <div class="fav-card music-card">
        <h4>{{ text.sections.life.music }}</h4>
        <div class="album-mosaic">
          <article
            v-for="(album, idx) in musicAlbums"
            :key="`${album.title}-${idx}`"
            class="album-tile"
            :class="`album-${mosaicSize(idx)}`"
          >
            <img class="album-cover" :src="album.image" :alt="album.title" loading="lazy" />
          </article>
        </div>
      </div>

      <div class="fav-card">
        <h4>{{ text.sections.life.movies }}</h4>
        <ul class="list">
          <li v-for="x in favorites.movies" :key="x">{{ x }}</li>
        </ul>
      </div>

      <div class="fav-card">
        <h4>{{ text.sections.life.tv }}</h4>
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

.fav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.music-card {
  grid-column: 1 / -1;
}

.fav-card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
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

.music-list {
  margin-top: 0.75rem;
}

.album-mosaic {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: none;
  margin: 0;
  gap: 0.45rem;
}

.album-tile {
  margin: 0;
  width: 72px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  flex: 0 0 auto;
}

.album-lg {
  width: 100px;
}

.album-md {
  width: 86px;
}

.album-sm {
  width: 72px;
}

.album-cover {
  width: 100%;
  height: 100%;
  display: block;
}

.album-cover {
  object-fit: cover;
}

:root[data-theme='dark'] .fav-card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

@media (hover: hover) {
  .fav-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .fav-card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 1.8rem 0;
  }

  .fav-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.15rem;
  }

  .fav-card {
    padding: 1.1rem;
  }

  .album-mosaic {
    gap: 0.5rem;
  }

  .album-lg {
    width: 108px;
  }

  .album-md {
    width: 92px;
  }

  .album-sm {
    width: 78px;
  }
}

@media (max-width: 900px) {
  .album-lg {
    width: 88px;
  }

  .album-md {
    width: 78px;
  }

  .album-sm {
    width: 66px;
  }
}

@media (max-width: 640px) {
  .album-lg {
    width: 74px;
  }

  .album-md {
    width: 66px;
  }

  .album-sm {
    width: 58px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fav-card {
    transition: none;
  }
}
</style>
