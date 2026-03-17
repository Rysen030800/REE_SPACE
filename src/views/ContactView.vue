<template>
  <section class="wrap">
    <h1>Contact</h1>
    <p class="lead">Pick any method below.</p>

    <div class="cards">
      <div class="card">
        <h2>Phone</h2>
        <p><a href="tel:+8615260569578">+86 152 6056 9578</a></p>
      </div>

      <div class="card">
        <h2>Email</h2>
        <p><a href="mailto:crqrp88@163.com">crqrp88@163.com</a></p>
      </div>

      <div class="card">
        <h2>GitHub</h2>
        <p class="muted">Optional: add your GitHub link</p>
      </div>

      <div class="card">
        <h2>LinkedIn</h2>
        <p class="muted">Optional: add your LinkedIn link</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 760px;
}

.lead {
  margin: 0.5rem 0 1rem;
  opacity: 0.85;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1rem;
  background: var(--color-background-soft);
}

.card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-heading);
}

.muted {
  opacity: 0.85;
}
</style>
