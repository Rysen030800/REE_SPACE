<template>
  <section class="wrap">
    <h1>About</h1>

    <p class="lead">MA student in Housing &amp; Urban Management with a background in Landscape Architecture.</p>
    <p class="muted">Available for internship (3+ months), can start immediately.</p>

    <h2>Education</h2>
    <div class="timeline">
      <div class="item">
        <div class="row">
          <strong>City University of Hong Kong</strong>
          <span class="meta">09.2025 – 10.2026</span>
        </div>
        <div class="muted">MA Housing and Urban Management · Urban Stream</div>
      </div>

      <div class="item">
        <div class="row">
          <strong>Fujian University of Technology</strong>
          <span class="meta">09.2019 – 07.2024</span>
        </div>
        <div class="muted">BEng · Landscape Architecture</div>
      </div>
    </div>

    <h2>Internship Experience</h2>
    <div class="timeline">
      <div class="item">
        <div class="row">
          <strong>Fujian Province Fuke Technology Consulting Co., Ltd.</strong>
          <span class="meta">07.2023 – 08.2023</span>
        </div>
        <div class="muted">Assistant Designer</div>
        <ul class="list">
          <li>Participated in early planning for a smart city digital platform; supported data-driven decisions.</li>
          <li>Built spatial models from POI + field research; integrated multi-source data via GIS/BIM.</li>
          <li>Assisted proposal writing and cross-team coordination.</li>
        </ul>
      </div>

      <div class="item">
        <div class="row">
          <strong>Guizhou Architectural Design &amp; Research Institute Co., Ltd.</strong>
          <span class="meta">07.2022 – 09.2022</span>
        </div>
        <div class="muted">Assistant Landscape Architect</div>
        <ul class="list">
          <li>Analyzed visitor routes and service points for a night park project; identified key pain points.</li>
          <li>Produced planning drawings and technical diagrams; supported concept-to-delivery workflow.</li>
        </ul>
      </div>
    </div>

    <h2>Skills</h2>
    <div class="skills">
      <div class="skill">
        <h3>Data &amp; Research</h3>
        <ul class="list">
          <li>SQL, SPSS, Tableau</li>
          <li>User research, survey &amp; persona</li>
        </ul>
      </div>

      <div class="skill">
        <h3>Design &amp; Visualization</h3>
        <ul class="list">
          <li>Adobe PS/AI/Id, SketchUp, Figma</li>
          <li>GIS / BIM (project practice)</li>
        </ul>
      </div>

      <div class="skill">
        <h3>AI Tools</h3>
        <ul class="list">
          <li>ChatGPT, Gemini, AI content generation</li>
        </ul>
      </div>

      <div class="skill">
        <h3>Languages</h3>
        <ul class="list">
          <li>Mandarin (native), Min Nan (fluent)</li>
          <li>English (IELTS 7.0), Cantonese (learning)</li>
          <li>Japanese / Spanish (beginner)</li>
        </ul>
      </div>
    </div>

  </section>
</template>

<style scoped>
.wrap {
  max-width: 760px;
}

.lead {
  margin: 0.75rem 0 1.25rem;
  opacity: 0.85;
}

.timeline {
  margin: 0.5rem 0 1.25rem;
  display: grid;
  gap: 0.9rem;
}

.item {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
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
  margin: 0.5rem 0 1.25rem;
}

.muted {
  opacity: 0.8;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 0.5rem 0 1.25rem;
}

.skill {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: var(--color-background-soft);
}

.skill h3 {
  margin: 0 0 0.5rem;
  color: var(--color-heading);
  font-size: 1.02rem;
}

</style>
