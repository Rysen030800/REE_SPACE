<script setup lang="ts">
import { computed } from 'vue'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])
</script>

<template>
  <section id="contact" class="section">
    <div class="contact-title-wrap">
      <svg class="contact-title-lines" viewBox="0 0 1400 340" aria-hidden="true">
        <path class="line c1" d="M600 110 C 700 110, 790 82, 920 56" />
        <path class="line c2" d="M600 110 C 685 122, 770 150, 900 182" />
        <path class="line c3" d="M600 110 C 760 108, 930 110, 1120 110" />
        <path class="line c4" d="M600 110 C 500 110, 410 82, 280 56" />
        <path class="line c5" d="M600 110 C 515 122, 430 150, 300 182" />
        <path class="line c6" d="M600 110 C 440 108, 270 110, 80 110" />
        <path class="line c7" d="M700 170 C 860 150, 980 120, 1240 80" />
        <path class="line c8" d="M700 170 C 860 188, 980 230, 1240 280" />
        <path class="line c9" d="M700 170 C 520 170, 360 178, 140 186" />
        <path class="line c10" d="M700 170 C 520 152, 360 120, 140 78" />
        <path class="line c11" d="M700 170 C 700 170, 990 170, 1320 170" />
        <path class="line c12" d="M700 170 C 700 170, 410 170, 80 170" />
      </svg>
      <h2 class="section-title-text contact-main-title" :class="ui.lang === 'zh' ? 'noto-sans-sc-heavy' : 'bungee-regular'">
        {{ text.sections.contact.title }}
      </h2>
    </div>
    <p class="lead">{{ text.sections.contact.lead }}</p>

    <div class="cards">
      <div class="card">
        <h3>{{ text.sections.contact.phone }}</h3>
        <p>
          <a href="tel:+8615260569578">+86 15260569578</a>
          <span class="sep"> / </span>
          <a href="tel:+85244571163">+852 44571163</a>
        </p>
      </div>

      <div class="card">
        <h3>{{ text.sections.contact.email }}</h3>
        <p>
          <a href="mailto:crqrp88@163.com">crqrp88@163.com</a>
          <span class="sep"> / </span>
          <a href="mailto:rysen513@gmail.com">rysen513@gmail.com</a>
        </p>
      </div>

      <div class="card">
        <h3>{{ text.sections.contact.linkedin }}</h3>
        <p><a href="https://www.linkedin.com/in/rui-chen-1b44b73b6" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/rui-chen-1b44b73b6</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 3.5rem 0 3rem;
  max-width: 1040px;
  margin: 0 auto;
}

.lead {
  margin: 0.5rem 0 1rem;
  opacity: 1;
}

.contact-title-wrap {
  position: relative;
  min-height: 12.6rem;
  display: grid;
  align-items: center;
  overflow: visible;
}

.contact-title-lines {
  position: absolute;
  left: 50%;
  top: 50%;
  width: max(120%, 980px);
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.line {
  fill: none;
  stroke-width: 2.3;
  stroke-linecap: round;
  stroke-dasharray: 32 820;
  stroke-dashoffset: 840;
  opacity: 0;
  animation: contact-line-expand 8.6s linear infinite;
}

.line.c1 {
  stroke: #46a5ca;
  animation-delay: 0s;
}

.line.c2 {
  stroke: #d6590c;
  animation-delay: 0.55s;
}

.line.c3 {
  stroke: #59bbeb;
  animation-delay: 1.1s;
}

.line.c4 {
  stroke: #8c2f2f;
  animation-delay: 1.65s;
}

.line.c5 {
  stroke: #55bc54;
  animation-delay: 2.2s;
}

.line.c6 {
  stroke: #9f39a5;
  animation-delay: 1.5s;
}

.line.c7 {
  stroke: #247afb;
  animation-delay: 0.2s;
}

.line.c8 {
  stroke: #d7c200;
  animation-delay: 0.45s;
}

.line.c9 {
  stroke: #46a29c;
  animation-delay: 0.7s;
}

.line.c10 {
  stroke: #670f6d;
  animation-delay: 0.95s;
}

.line.c11 {
  stroke: #860909;
  animation-delay: 1.2s;
}

.line.c12 {
  stroke: #4fae4d;
  animation-delay: 1.75s;
}

.contact-main-title {
  position: relative;
  z-index: 1;
  color: var(--color-heading) !important;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  align-items: stretch;
}

.card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.56rem 0.72rem;
  background: var(--color-background-soft);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  width: fit-content;
  min-height: 4.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 auto;
}

.card h3 {
  margin: 0 0 0.24rem;
  font-size: 0.97rem;
  color: var(--color-heading);
}

.card p {
  margin: 0;
  line-height: 1.22;
}

.card a {
  white-space: nowrap;
}

.sep {
  opacity: 0.8;
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
    padding: 4rem 0 3.4rem;
    max-width: 1120px;
  }

  .cards {
    gap: 0.82rem;
  }

  .card {
    padding: 0.6rem 0.78rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }

  .line {
    animation: none;
    opacity: 0.28;
    stroke-dashoffset: 0;
  }
}

@keyframes contact-line-expand {
  0% {
    stroke-dashoffset: 840;
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  60% {
    stroke-dashoffset: 0;
    opacity: 0.92;
  }
  100% {
    stroke-dashoffset: -300;
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .contact-title-wrap {
    min-height: 10.8rem;
  }

  .contact-title-lines {
    width: max(135%, 820px);
  }

  .cards {
    gap: 0.6rem;
  }

  .card {
    min-height: 4.7rem;
    max-width: 100%;
  }

  .card a {
    white-space: normal;
    overflow-wrap: anywhere;
  }
}
</style>
