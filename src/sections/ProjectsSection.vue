<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { projects } from '../data/projects'
import { copy } from '../i18n'
import { useUiStore } from '../stores/ui'

const ui = useUiStore()
const text = computed(() => copy[ui.lang])

function pick(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function projectImages(id: string) {
  const base = `${import.meta.env.BASE_URL}experience/`
  if (id === 'smart-city-intern') return [`${base}smart/edd20cd1-5421-4d17-9d10-ad9eaea83553.png`]
  if (id === 'landscape-intern')
    return [
      `${base}landscape/%E5%B9%B3%E5%9D%9D%E5%8C%BA%E6%90%93%E7%99%BD%E6%B2%B3%E6%B2%BF%E7%BA%BF%E6%B5%B7%E7%BB%B5%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%BF%B5%E8%A7%84%E5%88%92%E6%96%B0.png`,
      `${base}landscape/%E5%B9%B3%E5%9D%9D%E5%8C%BA%E6%90%93%E7%99%BD%E6%B2%B3%E6%B2%BF%E7%BA%BF%E6%B5%B7%E7%BB%B5%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E6%A6%82%E5%BF%B5%E8%A7%84%E5%88%92%E6%96%B0(1).png`,
    ]
  return []
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

const internshipGroupTitle = computed(() => (ui.lang === 'zh' ? '实习' : 'Internships'))

const innovationGroupTitle = computed(() => (ui.lang === 'zh' ? '项目' : 'Projects'))
const aiPortfolioTitle = computed(() =>
  ui.lang === 'zh'
    ? 'AI 驱动开发：个人数字化作品集构建'
    : 'AI-Driven Development: Personal Digital Portfolio Construction',
)
const aiFeatureSummary = computed(() =>
  ui.lang === 'zh'
    ? {
        title: 'AI 驱动开发：从 0 到 1 构建个人品牌数字化作品集',
        role: '项目角色： 产品负责人 (Product Owner) & 提示词工程师 (Prompt Engineer)',
        stack: '技术栈： Next.js / Tailwind CSS / Vibe Coding (Cursor) / Vercel',
      }
    : {
        title: 'AI-Driven Development: Building a Personal Brand Portfolio from 0 to 1',
        role: 'Role: Product Owner & Prompt Engineer',
        stack: 'Stack: Next.js / Tailwind CSS / Vibe Coding (Cursor) / Vercel',
      },
)
const aiFeatureImage = `${import.meta.env.BASE_URL}experience/ai/dfa05355-8d97-4de0-80f1-4e777de6a33b.png`

const aiFeatureDetail = computed(() =>
  ui.lang === 'zh'
    ? `【Situation | 项目背景】
作为跨学科背景（景观设计转产品经理）学习者，需要一个能够整合多维能力（逻辑思维、审美下限、技术理解力）的数字化窗口。在零前端工程背景下，挑战通过 AI 协作编程（Vibe Coding）在 7 天内完成个人官网的闭环开发与部署。

【Task | 核心任务】
需求定义： 快速搭建个人网页，丰富视觉意象，完善信息架构。
开发交付： 利用 Vibe Coding 模式，通过高质量 Prompt 驱动 AI 交付全响应式站点。
逻辑迁移： 将建筑类空间规划逻辑转化为网页的布局逻辑，确保跨设备的交互一致性。

【Action | 关键行动】
建筑设计能力迁移： 类比建筑图纸中的“总平-分层-详图”逻辑，对网页进行模块化需求拆解。通过定义清晰的视觉层级（Visual Hierarchy），确保复杂信息在不同屏幕尺度下的可读性与秩序感。
Prompt 驱动功能实现： 采用结构化提示词引导 AI 完成底层代码编写。针对由于 CSS 优先级导致的字体渲染与字号偏差问题，通过浏览器开发者工具（F12）进行精准定位，并链接公开字体库模板进行修正。
用户路径与体验优化： 运用设计师对“流线”的敏感度，设计简洁直观的页面跳转逻辑。在缺乏代码基础的情况下，通过反复调试 Prompt，实现了滚动切换（Smooth Scroll）与局部元素浮现效果，提升动效丰富性。
全链路部署与迭代： 独立完成从 GitHub 仓库管理到 Vercel 持续集成/持续部署 (CI/CD) 的全过程，实现站点的全球访问与快速版本更新。

【Result | 项目成果】
高效交付： 跨越技术鸿沟，在 7 天内实现了从 0 到 1 的高质量产品交付，开发周期较传统学习模式显著缩短。
能力验证： 成功验证了将建筑工程逻辑迁移至软件产品定义的可行性，展示了逻辑建模能力和 AI 工具应用水平。
品牌沉淀： 构建了一个具备深度个人印记的数字化场域，单周内通过 AI 协作完成 20+ 次功能迭代与审美优化。`
    : `【Situation | Project Context】
As an interdisciplinary learner (transitioning from landscape design to product management), I needed a digital window that could integrate multiple competencies: logical thinking, visual judgment, and technical understanding. With no frontend engineering background, I set a 7-day challenge to complete end-to-end development and deployment of a personal website through AI-assisted coding (Vibe Coding).

【Task | Core Objectives】
Requirement definition: rapidly build a personal website, enrich visual expression, and refine information architecture.
Development delivery: use Vibe Coding and high-quality prompts to drive AI in delivering a fully responsive site.
Logic migration: translate architectural spatial-planning logic into web layout logic and ensure consistent cross-device interaction.

【Action | Key Actions】
Logic migration from architectural design: treated web layout as “digital site planning.” Following the “master plan - layered plan - detail drawing” logic from architecture, I modularized requirements and defined a clear visual hierarchy to ensure readability and order across screen sizes.
Prompt-driven implementation: used structured prompts to guide AI in coding. For font-rendering and size deviations caused by CSS specificity, I diagnosed issues through browser dev tools (F12) and guided AI to fix them with variable overrides and specificity adjustments.
User flow and experience optimization: leveraged design sensitivity to “circulation” to build intuitive navigation logic. Despite limited coding background, I iterated prompts repeatedly to achieve smooth scrolling and localized reveal effects, improving the browsing experience.
End-to-end deployment and iteration: independently completed the full process from GitHub repository management to Vercel CI/CD, enabling global access and rapid updates.

【Result | Outcomes】
Efficient delivery: crossed the technical gap and delivered a high-quality product from 0 to 1 within 7 days, significantly shortening the cycle compared with traditional learning paths.
Capability validation: verified the feasibility of migrating architectural-engineering logic to software product definition, demonstrating strong modeling ability and AI-tool proficiency.
Brand consolidation: built a digital space with a strong personal imprint, completing 20+ functional and aesthetic iterations in one week via AI collaboration.`,
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

type CourseworkItem = {
  id: string
  title: { zh: string; en: string }
  summary: { zh: string; en: string }
  detail: { zh: string; en: string }
}

const courseworkItems: CourseworkItem[] = [
  {
    id: 'urban-data-studio',
    title: { zh: '城市数据分析工作坊', en: 'Urban Data Analysis Studio' },
    summary: { zh: 'POI 与 GIS 空间分析', en: 'POI and GIS spatial analysis' },
    detail: {
      zh: '课程目标：构建城市公共服务可达性评估模型。\n\n核心方法：\n1. 基于多源 POI 数据完成语义清洗与分类映射。\n2. 使用 GIS 网络分析计算 5/10/15 分钟服务圈层。\n3. 对商业、教育与医疗节点做叠加评估并输出可视化图组。\n\n成果输出：完成方法说明书、图表与汇报材料，形成可复用分析模板。',
      en: 'Course goal: build an accessibility assessment model for urban public services.\n\nCore methods:\n1. Cleaned multi-source POI data and built category mappings.\n2. Computed 5/10/15-minute service catchments with GIS network analysis.\n3. Evaluated commercial, education, and medical nodes through overlay analysis.\n\nDeliverables: methodology notes, visualized charts, and presentation material with a reusable workflow template.',
    },
  },
  {
    id: 'service-system-design',
    title: { zh: '服务系统设计实践', en: 'Service System Design Practice' },
    summary: { zh: '用户旅程与触点重构', en: 'User journey and touchpoint redesign' },
    detail: {
      zh: '课程主题：面向公共空间的服务体验优化。\n\n项目过程：\n1. 通过访谈与观察建立用户旅程地图，定位关键断点。\n2. 设计线上线下一体化触点并构建服务蓝图。\n3. 通过原型测试迭代信息层级、导视逻辑与服务路径。\n\n结果：输出完整服务策略包与可执行的分阶段落地建议。',
      en: 'Topic: optimizing service experience for public space scenarios.\n\nProcess:\n1. Mapped user journeys from interviews and observations to locate pain points.\n2. Designed integrated online-offline touchpoints and a service blueprint.\n3. Iterated information hierarchy, wayfinding logic, and service flow through prototyping.\n\nOutcome: delivered a complete strategy package with phased implementation recommendations.',
    },
  },
  {
    id: 'space-activation-lab',
    title: { zh: '空间活化策略实验', en: 'Spatial Activation Strategy Lab' },
    summary: { zh: '历史场地功能再编程', en: 'Adaptive reuse and functional programming' },
    detail: {
      zh: '课程内容：针对历史空间进行功能复合与运营推演。\n\n执行要点：\n1. 建立场地现状模型与行为热力图，识别空间低效区。\n2. 提出文化展示、商业运营与公共活动复合策略。\n3. 用时间轴模拟日常运营、活动节点与资源配置。\n\n结论：形成“设计 + 运营”一体化方案，并通过评图答辩。',
      en: 'Course scope: propose mixed-use programming and operation simulation for historic space.\n\nExecution:\n1. Built baseline site model and behavior heatmaps to identify underused zones.\n2. Proposed integrated strategies for cultural display, commerce, and public events.\n3. Simulated operational timeline, event nodes, and resource allocation.\n\nConclusion: delivered an integrated design-operation proposal and final review presentation.',
    },
  },
  {
    id: 'policy-and-implementation',
    title: { zh: '政策研判与落地路径', en: 'Policy Review and Implementation Path' },
    summary: { zh: '政策转译到执行框架', en: 'Policy translation to execution framework' },
    detail: {
      zh: '课程命题：把政策目标转化为项目执行路径。\n\n研究步骤：\n1. 梳理国家与地方政策条文，提炼硬性指标与约束条件。\n2. 将指标拆解为阶段任务、协同角色与验收节点。\n3. 建立风险清单与应对机制，形成可跟踪进度表。\n\n成果：提交策略报告、路线图与项目管理看板模板。',
      en: 'Task: translate policy goals into an executable project path.\n\nResearch steps:\n1. Parsed national and local policy clauses into mandatory metrics and constraints.\n2. Broke metrics into phased tasks, stakeholders, and acceptance milestones.\n3. Built a risk register and mitigation workflow with trackable timelines.\n\nDeliverables: strategy report, roadmap, and project board template.',
    },
  },
]

const activeCourseworkId = ref<string | null>(null)
const aiFeatureOpen = ref(false)

const activeCoursework = computed(() =>
  courseworkItems.find((item) => item.id === activeCourseworkId.value) ?? null,
)

let bodyOverflowBeforeModal = ''
let bodyPaddingRightBeforeModal = ''

function openCoursework(id: string) {
  activeCourseworkId.value = id
}

function closeCoursework() {
  activeCourseworkId.value = null
}

function openAiFeature() {
  aiFeatureOpen.value = true
}

function closeAiFeature() {
  aiFeatureOpen.value = false
}

watch([activeCourseworkId, aiFeatureOpen], ([id, aiOpen]) => {
  if (typeof document === 'undefined') return

  if (id || aiOpen) {
    bodyOverflowBeforeModal = document.body.style.overflow
    bodyPaddingRightBeforeModal = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    return
  }

  document.body.style.overflow = bodyOverflowBeforeModal
  document.body.style.paddingRight = bodyPaddingRightBeforeModal
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = bodyOverflowBeforeModal
  document.body.style.paddingRight = bodyPaddingRightBeforeModal
})
</script>

<template>
  <section id="projects" class="section">
    <div class="head">
      <h2 class="section-title-text" :class="ui.lang === 'zh' ? 'noto-sans-sc-heavy' : 'bungee-regular'">{{ text.sections.projects.title }}</h2>
    </div>

    <div class="group">
      <p class="group-title group-title-with-icon">
        <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
          <path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 7.5 12 12l8-4.5M12 12v9" />
        </svg>
        <span>{{ internshipGroupTitle }}</span>
      </p>
      <div class="pair-grid internship-grid">
        <article v-for="p in internships" :key="p.id" class="card" :class="{ 'card-landscape': p.id === 'landscape-intern' }">
          <div class="internship-main">
            <div class="internship-content">
              <h3 class="title">{{ pick(p.title) }}</h3>
              <div v-if="shouldSegmentDescription(p.id)" class="desc-groups">
                <p v-for="(block, idx) in splitNumberedSections(pick(p.description))" :key="`${p.id}-${idx}`" class="desc desc-block">
                  {{ block }}
                </p>
              </div>
              <p v-else class="desc">{{ pick(p.description) }}</p>
            </div>
            <div v-if="projectImages(p.id).length" class="internship-visual-stack" aria-hidden="true">
              <figure
                v-for="(imageSrc, imageIdx) in projectImages(p.id)"
                :key="`${p.id}-visual-${imageIdx}`"
                class="internship-visual"
              >
                <img class="internship-visual-img" :src="imageSrc" alt="" loading="lazy" />
              </figure>
            </div>
          </div>
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
      <p class="group-title group-title-with-icon">
        <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="6.2" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8" />
          <path fill="none" stroke="currentColor" stroke-width="1.8" d="M5 20c0-3.8 3.1-6.8 7-6.8s7 3 7 6.8" />
        </svg>
        <span>{{ innovationGroupTitle }}</span>
      </p>
      <button type="button" class="card project-feature-card" @click="openAiFeature">
        <div class="project-feature-main">
          <div class="project-feature-copy">
            <h3 class="title">{{ aiFeatureSummary.title }}</h3>
            <p class="desc project-feature-line">{{ aiFeatureSummary.role }}</p>
            <p class="desc project-feature-line">{{ aiFeatureSummary.stack }}</p>
          </div>
          <img class="project-feature-image" :src="aiFeatureImage" alt="AI portfolio website preview" loading="lazy" />
        </div>
      </button>
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
      <div class="coursework-grid coursework-grid-inline">
        <button
          v-for="item in courseworkItems"
          :key="item.id"
          type="button"
          class="coursework-card"
          @click="openCoursework(item.id)"
        >
          <h4>{{ pick(item.title) }}</h4>
          <p>{{ pick(item.summary) }}</p>
        </button>
      </div>
    </div>

    <h3 id="about" class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M3 9 12 4l9 5-9 5-9-5Z" />
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M6 11.5V15c0 2.3 2.7 4 6 4s6-1.7 6-4v-3.5" />
      </svg>
      <span>{{ text.sections.about.education }}</span>
    </h3>
    <div class="timeline">
      <article v-for="item in educationItems" :key="item.school" class="info-card">
        <div class="row">
          <strong>{{ item.school }}</strong>
          <span class="meta">{{ item.period }}</span>
        </div>
        <p class="muted">{{ item.degree }}</p>
      </article>
    </div>

    <h3 class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M21 7.5a4.5 4.5 0 0 1-6.7 3.9l-7.6 7.6-2.7.8.8-2.7 7.6-7.6A4.5 4.5 0 1 1 21 7.5Z" />
      </svg>
      <span>{{ text.sections.about.skills }}</span>
    </h3>
    <div class="skills">
      <article v-for="group in skillGroups" :key="group.title" class="info-card">
        <h4>{{ group.title }}</h4>
        <ul class="list">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div
      v-if="activeCoursework"
      class="coursework-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="pick(activeCoursework.title)"
      @click.self="closeCoursework"
    >
      <article class="coursework-modal">
        <header class="coursework-modal-head">
          <h4>{{ pick(activeCoursework.title) }}</h4>
          <button type="button" class="coursework-close" @click="closeCoursework">×</button>
        </header>
        <div class="coursework-modal-body">
          <p>{{ pick(activeCoursework.detail) }}</p>
        </div>
      </article>
    </div>

    <div
      v-if="aiFeatureOpen"
      class="coursework-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="aiPortfolioTitle"
      @click.self="closeAiFeature"
    >
      <article class="coursework-modal project-feature-modal">
        <header class="coursework-modal-head">
          <h4>{{ aiFeatureSummary.title }}</h4>
          <button type="button" class="coursework-close" @click="closeAiFeature">×</button>
        </header>
        <div class="coursework-modal-body">
          <img class="project-feature-image project-feature-image-modal" :src="aiFeatureImage" alt="AI portfolio website preview" loading="lazy" />
          <p>{{ aiFeatureDetail }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: 90px;
  padding: 2.2rem 0 1.5rem;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: nowrap;
  margin-bottom: 1.1rem;
}

.group {
  margin-bottom: 1rem;
}

.group-title {
  margin: 0 0 0.55rem;
  font-size: var(--section-subtitle-size);
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: none;
  color: var(--section-subtitle-color);
  font-weight: var(--font-section-subtitle-weight);
  font-family: var(--font-section-subtitle);
  font-style: var(--font-section-subtitle-style);
}

.group-title-with-icon,
.anchor-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--section-subtitle-color);
  font-size: var(--section-subtitle-size);
  font-weight: var(--font-section-subtitle-weight);
  font-family: var(--font-section-subtitle);
  font-style: var(--font-section-subtitle-style);
}

.mini-icon {
  width: 1.05rem;
  height: 1.05rem;
  color: var(--section-subtitle-color);
  flex: 0 0 auto;
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

.card.project-feature-card {
  min-height: 0 !important;
  margin: 0 0 1rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 0.95rem 1rem 1rem;
}

.project-feature-line {
  margin: 0.2rem 0 0;
}

.project-feature-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
}

.project-feature-copy {
  min-width: 0;
  flex: 1 1 auto;
}

.project-feature-image {
  width: clamp(260px, 30vw, 420px);
  flex: 0 0 clamp(260px, 30vw, 420px);
  display: block;
  margin: 0;
  border-radius: 10px;
  border: 1px solid var(--section-card-border);
  object-fit: cover;
}

.project-feature-image-modal {
  width: min(620px, 100%);
  max-width: 620px;
  margin: 0 auto 0.8rem;
  flex: 0 0 auto;
}

.project-feature-modal {
  animation: project-feature-zoom-in 0.52s cubic-bezier(0.2, 0.78, 0.2, 1) forwards;
  transform: scale(0.9);
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

.internship-main {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.75rem;
}

.internship-content {
  min-width: 0;
  flex: 1 1 auto;
}

.internship-visual-stack {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex: 0 0 clamp(180px, 22vw, 230px);
  width: clamp(180px, 22vw, 230px);
  align-self: center;
}

.internship-visual {
  margin: 0;
}

.internship-visual-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  display: block;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--section-card-border);
  background: var(--color-background);
}

.title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.03rem, 1.2vw, 1.1rem);
  line-height: 1.34;
  color: var(--color-heading);
  font-family: var(--font-subtitle);
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

.coursework-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
}

.coursework-grid-inline {
  margin-top: 0.95rem;
}

.coursework-card {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.95rem;
  background: var(--color-background-soft);
  color: var(--color-text);
  text-align: left;
  min-height: 140px;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
}

.coursework-card h4 {
  margin: 0 0 0.45rem;
  color: var(--color-heading);
  font-size: 1rem;
  line-height: 1.35;
  font-family: var(--font-subtitle);
}

.coursework-card p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.5;
  font-size: 0.92rem;
}

.coursework-overlay {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.36);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.coursework-modal {
  width: min(760px, 94vw);
  max-height: min(78vh, 740px);
  border: 1px solid var(--section-card-border);
  border-radius: 16px;
  background: var(--color-background-soft);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.24);
  transform-origin: center center;
  transform: scale(0.84) rotateY(-66deg);
  animation: coursework-flip-in 0.68s cubic-bezier(0.2, 0.78, 0.2, 1) forwards;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
}

.coursework-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.9rem 1rem 0.75rem;
  border-bottom: 1px solid var(--section-card-border);
}

.coursework-modal-head h4 {
  margin: 0;
  color: var(--color-heading);
  font-size: 1.08rem;
  line-height: 1.3;
  font-family: var(--font-subtitle);
}

.coursework-close {
  border: 1px solid var(--section-card-border);
  background: var(--color-background);
  color: var(--color-heading);
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
}

.coursework-modal-body {
  padding: 0.95rem 1rem 1.05rem;
  overflow-y: auto;
  max-height: min(62vh, 560px);
}

.coursework-modal-body p {
  margin: 0;
  white-space: pre-line;
  line-height: 1.62;
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
  font-family: var(--font-subtitle);
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

:root[data-theme='dark'] .coursework-card {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
}

@media (hover: hover) {
  .card:hover,
  .info-card:hover,
  .coursework-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .card:hover,
  :root[data-theme='dark'] .info-card:hover,
  :root[data-theme='dark'] .coursework-card:hover {
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

  .internship-main {
    margin-bottom: 0.55rem;
  }

  .internship-visual-stack {
    display: none;
  }

  .coursework-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-feature-main {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-feature-image {
    width: min(460px, 100%);
    flex-basis: auto;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 2.6rem 0 1.8rem;
  }

  .pair-grid,
  .skills,
  .coursework-grid {
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

  .coursework-card {
    min-height: 150px;
    padding: 1.05rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .info-card,
  .coursework-card {
    transition: none;
  }

  .coursework-modal {
    animation: none;
    transform: scale(1) rotateY(0);
  }
}

@media (max-width: 640px) {
  .coursework-grid {
    grid-template-columns: 1fr;
  }
}

@keyframes coursework-flip-in {
  from {
    transform: scale(0.84) rotateY(-66deg);
  }
  to {
    transform: scale(1) rotateY(0);
  }
}

@keyframes project-feature-zoom-in {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
