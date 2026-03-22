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

function splitSkillTags(content: string) {
  return content
    .split(/[，,]/u)
    .map((part) => part.trim())
    .filter(Boolean)
}

const internshipGroupTitle = computed(() => (ui.lang === 'zh' ? '实习' : 'Internships'))

const innovationGroupTitle = computed(() => (ui.lang === 'zh' ? '项目' : 'Projects'))
const courseworkFrameTitle = computed(() =>
  ui.lang === 'zh'
    ? '城市与生境系统的逻辑解构与重塑'
    : 'Logical Deconstruction and Reconstruction of Urban and Habitat Systems',
)
const aiPortfolioTitle = computed(() =>
  ui.lang === 'zh'
    ? 'AI 驱动开发：个人数字化作品集构建'
    : 'AI-Driven Development: Personal Digital Portfolio Construction',
)
const aiFeatureDate = computed(() => (ui.lang === 'zh' ? '2026.03-至今' : '2026.03-Present'))
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
const aiFeatureClickHint = computed(() => (ui.lang === 'zh' ? '点击' : 'Click'))
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
      {
        school: '香港城市大学',
        period: '09.2025 - 10.2026',
        degree: '硕士｜房屋与都市管理',
        courses: '核心课程: Urban Data Analysis, Urban Economics, Housing Policy',
      },
      {
        school: '福建理工大学',
        period: '09.2019 - 07.2024',
        degree: '工学学士｜风景园林',
        courses: '核心课程: 工程管理，环境行为学，高等数学，生态学基础，古建筑测绘，风景园林遗产认知实习，风景园林规划与设计，建筑绘画',
      },
    ]
  }

  return [
    {
      school: 'City University of Hong Kong',
      period: '09.2025 - 10.2026',
      degree: 'Master | Housing and Urban Management',
      courses: 'Core courses: Urban Data Analysis, Urban Economics, Housing Policy',
    },
    {
      school: 'Fujian University of Technology',
      period: '09.2019 - 07.2024',
      degree: 'Bachelor of Engineering | Landscape Architecture',
      courses:
        'Core courses: Engineering Management, Environmental Behavior, Advanced Mathematics, Fundamentals of Ecology, Historic Architecture Surveying, Landscape Heritage Cognition Practicum, Landscape Planning and Design, Architectural Drawing',
    },
  ]
})

const skillGroups = computed(() => {
  if (ui.lang === 'zh') {
    return [
      { title: '数据与研究', items: ['SQL, SPSS, Tableau'] },
      { title: '设计与可视化', items: ['Adobe PS/AI/Id, SketchUp, Figma', 'GIS / BIM（项目实践）'] },
      { title: 'AI 工具', items: ['ChatGPT, Gemini, AI 内容生成, Vibe Coding'] },
      { title: '语言', items: ['普通话（母语），闽南语（流利）', '英语（IELTS 7.0），粤语（学习中）', '日语 / 西班牙语（入门）'] },
    ]
  }

  return [
    { title: 'Data & Research', items: ['SQL, SPSS, Tableau', 'User research, survey & persona'] },
    { title: 'Design & Visualization', items: ['Adobe PS/AI/Id, SketchUp, Figma', 'GIS / BIM (project practice)'] },
    { title: 'AI Tools', items: ['ChatGPT, Gemini, AI content generation, Vibe Coding'] },
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

const courseworkSheets = [
  {
    id: 'assignment-1',
    filename: '古村落遗址调研 Survey of Ancient Village Sites.jpg',
    title: { zh: '古村落遗址调研', en: 'Survey of Ancient Village Sites' },
    description: {
      zh: '聚焦传统村落遗址的空间肌理、路径系统与活化策略。',
      en: 'Focused on settlement morphology, path systems, and activation strategies.',
    },
  },
  {
    id: 'assignment-2',
    filename: '暗夜观星园区规划 Dark Sky Observatory Park Master Plan.jpg',
    title: { zh: '暗夜观星园区规划', en: 'Dark Sky Observatory Park Master Plan' },
    description: {
      zh: '以暗夜保护为核心，整合观星活动、交通组织与游线体验。',
      en: 'Integrated dark-sky protection with stargazing programs, access, and circulation.',
    },
  },
  {
    id: 'assignment-3',
    filename: '古民居群落调研 Survey of TraditionalResidential Complexes.jpg',
    title: { zh: '古民居群落调研', en: 'Survey of Traditional Residential Complexes' },
    description: {
      zh: '围绕传统民居群落开展现状测绘、问题识别与更新建议。',
      en: 'Included field mapping, issue diagnosis, and renewal recommendations.',
    },
  },
  {
    id: 'assignment-4',
    filename: '生态滨水空间设计 Design of Ecological Waterfront Spaces.png',
    title: { zh: '生态滨水空间设计', en: 'Design of Ecological Waterfront Spaces' },
    description: {
      zh: '强调生态修复与公共活动复合，提升滨水空间连续性。',
      en: 'Emphasized ecological restoration and mixed public activities.',
    },
  },
  {
    id: 'assignment-5',
    filename: '风景区重规划 Revised Master Plan for the Scenic Area.jpg',
    title: { zh: '风景区重规划', en: 'Revised Master Plan for the Scenic Area' },
    description: {
      zh: '重构景区功能分区与运营路径，强化节点体验与导览系统。',
      en: 'Reorganized program zoning, operation flow, and visitor wayfinding.',
    },
  },
].map((sheet) => ({
  ...sheet,
  image: `${import.meta.env.BASE_URL}experience/assignments/${encodeURIComponent(sheet.filename)}`,
}))
const fallbackCourseworkSheet = {
  id: 'assignment-fallback',
  filename: '',
  title: { zh: '', en: '' },
  description: { zh: '', en: '' },
  image: '',
}

const activeCourseworkId = ref<string | null>(null)
const aiFeatureOpen = ref(false)
const activeCourseworkSheetId = ref<string | null>(null)
const activeCourseworkSheetIndex = ref(0)
const courseworkSheetScrollRef = ref<HTMLElement | null>(null)

const activeCoursework = computed(() =>
  courseworkItems.find((item) => item.id === activeCourseworkId.value) ?? null,
)
const activeCourseworkSheet = computed(() =>
  courseworkSheets.find((item) => item.id === activeCourseworkSheetId.value) ?? null,
)
const courseworkSheetSections = computed(() => {
  const active = activeCourseworkSheet.value
  if (!active) return []

  if (active.id === 'assignment-1') {
    const imgBase = `${import.meta.env.BASE_URL}experience/assignments/1`
    return [
      {
        id: 's1',
        title: { zh: '1. 历史沿革与社会属性调研', en: '1. Historical Evolution and Social Attributes' },
        description: {
          zh: '历史维度：梳理自东晋、南北朝至民国时期的重要历史节点，确立古镇文化底蕴。\n社会学指标：通过问卷与流量统计，识别游客与居民比例（51%居民, 29%游客），并量化空间满意度及具体改进建议。\n行为分析：建立不同人群活动时间轴，识别空间使用的时段性特征。',
          en: 'History: sorted key historical milestones from Eastern Jin and Southern-Northern Dynasties to the Republican era.\nSociological indicators: identified visitor/resident ratios (51% residents, 29% visitors) and quantified satisfaction and improvement demands.\nBehavior analysis: established activity timelines of different groups to detect time-based usage patterns.',
        },
        image: `${imgBase}/1.png`,
      },
      {
        id: 's2',
        title: { zh: '2. 公共空间演进逻辑与叙事', en: '2. Evolution Logic and Narrative of Public Space' },
        description: {
          zh: '演进阶段：将空间变迁划分为兴起、繁盛、衰弱、转型、升华五个阶段。\n分析维度：从叙事、空间组织、心理感受三个层面分析古镇格局变化，并提取宗族社会关系对建筑机理的影响。',
          en: 'Phases: divided evolution into rise, prosperity, decline, transition, and upgrade.\nDimensions: analyzed narrative, spatial organization, and perception to trace morphology shifts and clan influence on architecture.',
        },
        image: `${imgBase}/2.png`,
      },
      {
        id: 's3',
        title: { zh: '3. 规划结构与用地类型现状', en: '3. Planning Structure and Land-Use Status' },
        description: {
          zh: '核心构成：识别“十字街”空间骨架与“流水休闲展示轴”。\n用地分析：对比功能结构、用地类型、交通结构及保护区规划，界定核心保护区、建设控制地带与环境协调区边界。',
          en: 'Core structure: identified the “cross-street” spatial backbone and “waterfront leisure display axis”.\nLand-use analysis: compared function, land type, traffic, and conservation zoning to define boundaries of protection and control areas.',
        },
        image: `${imgBase}/3.png`,
      },
      {
        id: 's4',
        title: { zh: '4. 公共建筑空间类型学分析', en: '4. Typological Analysis of Public Building Spaces' },
        description: {
          zh: '空间关系：按与街巷的拓扑关系划分为相连型（祠堂、学校）、灰空间型（市场）、离散型（亭、廊）。\n拓扑图解：通过“枝干式”结构抽象图，量化线性空间、点状空间、院门前空间、公共空地与公共建筑分布密度。',
          en: 'Spatial relations: classified as connected (ancestral halls/schools), gray-space (markets), and dispersed (pavilions/corridors).\nTopology: used a branch-like abstract model to quantify density of linear/point/courtyard-front/public-open/building spaces.',
        },
        image: [`${imgBase}/4.png`, `${imgBase}/5.png`],
      },
      {
        id: 's5',
        title: { zh: '5. 消极空间识别与功能定义', en: '5. Negative Space Identification and Function Definition' },
        description: {
          zh: '现状评估：识别大于20平方米的闲置空地、碎片化种植空间及无明确定义的消极空间。\n改造导向：根据邻里沟通、开放喘息、休憩等需求，界定场地潜在功能重塑方向。',
          en: 'Assessment: identified idle plots over 20sqm, fragmented planting spaces, and undefined residual spaces.\nDirection: defined potential reprogramming toward social interaction, breathing/open space, and rest functions.',
        },
        image: `${imgBase}/6.png`,
      },
      {
        id: 's6',
        title: { zh: '6. SWOT-TOWS 战略决策矩阵', en: '6. SWOT-TOWS Strategic Matrix' },
        description: {
          zh: '内部因素：区位条件与历史资源（优势），建筑质量与设施不足（劣势）。\n外部因素：政策支持与文化旅游定位（机遇），开发冲击与环境破坏（挑战）。\n策略产出：形成SO（传承脉络）、WO（激活片区）、ST（挖掘底蕴）、WT（完善设施）四维行动逻辑。',
          en: 'Internal factors: location and heritage resources (strengths), building quality and facility gaps (weaknesses).\nExternal factors: policy support and cultural-tourism positioning (opportunities), development pressure and environmental risks (threats).\nOutput: established SO/WO/ST/WT action logic.',
        },
        image: `${imgBase}/7.png`,
      },
    ]
  }

  if (active.id === 'assignment-3') {
    const imgBase = `${import.meta.env.BASE_URL}experience/assignments/3`
    return [
      {
        id: 's1',
        title: { zh: '1. 社会背景与用户画像分析', en: '1. Social Context and User Profiling' },
        description: {
          zh: '核心数据：统计分析全村315户、1435人的基本数据。\n研究内容：识别出儿童及60岁以上老人占比高达76%的人口特征。\n逻辑关联：确定了聚落公共空间（如医疗所、石拱桥、党员之家）在理水系统影响下的安全权重与使用频率，为后续功能优化提供社会学基数。',
          en: 'Core data: analyzed baseline data of 315 households and 1,435 residents. Identified a demographic structure where children and seniors over 60 account for 76%, defining safety weights and usage frequency of key public spaces under the water-management context.',
        },
        image: `${imgBase}/1.png`,
      },
      {
        id: 's2',
        title: { zh: '2. 上位规划与宏观区位定位', en: '2. Upper-Level Planning and Macro Positioning' },
        description: {
          zh: '研究内容：分析《龙岩市城市总体规划（2011-2030）》与《连城县培田村村庄规划（2013-2030）》。\n分析维度：明确培田村在区域交通枢纽及“三心、两轴、三片区”空间格局中的定位。\n专业体现：确保局部理水策略符合区域生态涵养规划。',
          en: 'Mapped village positioning through regional plans and ensured local water-management strategy aligns with broader ecological planning.',
        },
        image: `${imgBase}/2.png`,
      },
      {
        id: 's3',
        title: { zh: '3. 空间格局成因与建筑形态分析', en: '3. Spatial Morphology and Architectural Form' },
        description: {
          zh: '分析对象：山水格局图、风水示意图、历史建筑分布图。\n技术路径：解析地形坡度、径流走向与聚落选址的内生关系。\n结论提取：论证“九厅十八井”建筑布局与外部水圳系统的衔接机制。',
          en: 'Interpreted topography, runoff direction, and settlement siting relationships, and explained how architectural units connect to the wider water-canal network.',
        },
        image: `${imgBase}/3.png`,
      },
      {
        id: 's4',
        title: { zh: '4. 理水系统功能模块与物理流程', en: '4. Water-System Modules and Physical Process' },
        description: {
          zh: '系统架构：分解为“滞、渗、排、蓄、净、用”六项核心功能。\n技术机理：滞/渗（梯田与渗透铺装）、排/蓄（天井排水与池塘调节）、净/用（生态自净用于灌溉与消防）。\n核心价值：展示对复杂水循环系统的模块化处理能力。',
          en: 'Decomposed the traditional water system into six modules: retain, infiltrate, drain, store, purify, and use.',
        },
        image: `${imgBase}/4.png`,
      },
      {
        id: 's5',
        title: { zh: '5. SWOT分析与现代应用转译', en: '5. SWOT and Modern Translation' },
        description: {
          zh: '分析模型：运用SWOT矩阵分析古村落保护与开发的优劣势。\n逻辑迁移：将传统智慧转化为“自然积存、自然渗透、自然净化”的现代设计准则。\n产出：确立“空间组织—理水系统—生态智慧”的跨学科知识迁移框架。',
          en: 'Used SWOT to evaluate protection and development and translated traditional wisdom into modern nature-based design principles.',
        },
        image: `${imgBase}/5.png`,
      },
    ]
  }

  if (active.id === 'assignment-4') {
    const imgBase = `${import.meta.env.BASE_URL}experience/assignments/4`
    return [
      {
        id: 's1',
        title: { zh: '1. 现状多维诊断分析', en: '1. Multi-Dimensional Existing-Condition Diagnosis' },
        description: {
          zh: '痛点识别：硬质护岸造成的空间隔绝、采砂产业导致的地岸侵蚀、垃圾堆放引起的土壤/水体污染以及绿地斑块的人为破坏。\nSWTO综合评价：运用SWTO模型，将人类破坏、洪水泛滥等“问题”与政府、居民、游客等“受益者”建立逻辑关联，明确修复策略的目标优先级。',
          en: 'Pain points: hard embankments, shoreline erosion from sand mining, soil/water contamination from dumping, and fragmentation of green patches.\nSWTO evaluation: linked “problems” (human disturbance, flood risk) with beneficiary groups to prioritize restoration actions.',
        },
        image: [`${imgBase}/1.png`, `${imgBase}/2.png`],
      },
      {
        id: 's2',
        title: { zh: '2. 生态修复体系与概念演进', en: '2. Ecological Restoration System and Concept Evolution' },
        description: {
          zh: '功能置入：依据鸟类栖息环境需求，模块化嵌入生态科普湿地、核心保育湿地与活力骑行道。\n物理修复流程：梳理土壤修复和湿地生境修复两大版块，搭建完整生态修复框架。',
          en: 'Program insertion: modularly embedded educational wetlands, core conservation wetlands, and cycling routes based on bird-habitat demands.\nPhysical process: integrated soil remediation and wetland habitat restoration into a complete framework.',
        },
        image: `${imgBase}/3.png`,
      },
      {
        id: 's3',
        title: { zh: '3. 植被群落动态演替模拟', en: '3. Dynamic Succession Simulation of Vegetation Communities' },
        description: {
          zh: '空间分层：建立从泥滩一年生植物、低矮草本、多年生高草到常绿阔叶林的垂直结构。\n时间轴模拟：推演1年、4年、8年至20年的演替过程，展示人工干预引导系统从单一结构走向稳定复杂。\n传播机制：分析以鸟类、水流为媒介的种子扩散机理。',
          en: 'Layered structure: built a vertical sequence from annual mudflat species to evergreen broadleaf communities.\nTimeline: simulated succession at year 1, 4, 8 to 20.\nDispersal: analyzed seed spread mechanisms via birds and water flow.',
        },
        image: `${imgBase}/4.png`,
      },
      {
        id: 's4',
        title: { zh: '4. 生态技术专项策略', en: '4. Specialized Ecological Technical Strategies' },
        description: {
          zh: '藤蔓装置策略（Park Vine Installation）：利用木桩与细线引导藤蔓生长，通过生物质逐步腐烂转化，实现攀援植物与群落自然融合。\n经济林修复策略：针对结构单一经济林，采用“挖沟壑、诱导漫水、削弱单一作物强势、吸引生物栖息”的步骤，提升生态平衡与韧性。',
          en: 'Park Vine Installation: guided vine growth with stakes and lines to enable natural integration through gradual biomass transformation.\nEconomic-forest strategy: improved resilience through trenching, overflow induction, monoculture weakening, and habitat attraction.',
        },
        image: [`${imgBase}/5.png`, `${imgBase}/6.png`],
      },
    ]
  }

  if (active.id === 'assignment-2') {
    const imgBase = `${import.meta.env.BASE_URL}experience/assignments/2`
    return [
      {
        id: 's1',
        title: { zh: '1. 全球与区域光污染现状分析', en: '1. Global and Regional Light-Pollution Analysis' },
        description: {
          zh: '宏观背景：统计全球暗夜质量变化，挖掘光污染以每年9.6%的速度增长及其对生物斑块破碎度的影响。\n区位识别：运用波特尔暗空监测法对贵州省龙里县进行定位，识别出场地具备二级天顶亮度（星河清晰，黄道光明显）的稀缺暗夜资源。',
          en: 'Macro context: tracked global dark-sky quality shifts and annual light-pollution growth (9.6%).\nLocation reading: used Bortle dark-sky grading to identify Longli County as a rare level-2 zenith-brightness resource.',
        },
        image: [
          `${imgBase}/${encodeURIComponent('1.全球光污染现状.jpg')}`,
          `${imgBase}/${encodeURIComponent('2.区域光污染现状.jpg')}`,
        ],
      },
      {
        id: 's2',
        title: { zh: '2. 场地矛盾解构与跨学科分析', en: '2. Conflict Deconstruction and Interdisciplinary Analysis' },
        description: {
          zh: '冲突识别：解构“过度照明—生态破坏—文化缺失”的场地矛盾链条。\n生物物理分析：量化夜间灯光对演替群落光合作用干扰及夜行性动物栖息环境的破坏。\n气候/物理：分析云类、月相、大气能见度及光谱折射率对暗夜质量的影响因子。\n文化基因提取：挖掘苗族“鼓藏节”天象观测传统与织锦图案中的空间宇宙观。',
          en: 'Identified the conflict chain of over-lighting, ecological damage, and cultural absence, then combined biophysical, climate, and cultural analyses for cross-disciplinary diagnosis.',
        },
        image: [
          `${imgBase}/${encodeURIComponent('3.场地现状分析.jpg')}`,
          `${imgBase}/${encodeURIComponent('4.场地光污染影响分析.jpg')}`,
        ],
      },
      {
        id: 's3',
        title: { zh: '3. 设计策略与系统框架', en: '3. Design Strategy and System Framework' },
        description: {
          zh: '核心框架：确立“识别黑暗质量—绘制黑暗基底—保护恢复—地域性赋能—有效性评估”的五步法策略。\n技术图谱：利用场地蓝绿基础设施建立“黑暗基底”，通过植被调控技术（Vegetation Regulation）构建物理层面的避光屏障。',
          en: 'Built a five-step framework from dark-quality identification to effectiveness assessment, with blue-green infrastructure and vegetation regulation as key technical support.',
        },
        image: [
          `${imgBase}/${encodeURIComponent('5.暗夜质量及设计思路.jpg')}`,
          `${imgBase}/${encodeURIComponent('7.设计策略step1 2.jpg')}`,
        ],
      },
      {
        id: 's4',
        title: { zh: '4. 智慧照明管理与技术防控', en: '4. Smart Lighting Management and Technical Control' },
        description: {
          zh: '分区管控：划分暗夜保护利用区、缓冲区与自然保护核心区，制定差异化照明标准。\n硬件交互：设计智慧照明控制系统，包含NB-IoT单灯控制器、感应调节机制及色温低于4000K的光源选型。\n用户端应用：建立基于APP的智慧照明联动，实现科普资讯与沉浸式暗夜体验的交互。',
          en: 'Defined zoning-based lighting standards and integrated NB-IoT controllers, sensing, and low-CCT sources, with APP-side interaction for education and immersive experience.',
        },
        image: `${imgBase}/${encodeURIComponent('8.设计策略step3.jpg')}`,
      },
      {
        id: 's5',
        title: { zh: '5. 地域性赋能与场景实现', en: '5. Regional Empowerment and Scenario Realization' },
        description: {
          zh: '空间布局：规划文化体验、沉浸观星、自然露营等功能分区。\n元素提取：转化苗族织锦纹样为路灯结构件与地面铺装语言，实现地域化表达。\n视线控制：进行严格的视线投影分析与篝火替代灯光方案设计，确保景观体验不干扰暗夜环境。',
          en: 'Planned cultural, stargazing, and camping scenarios; translated Miao weaving language into site elements; and controlled sightlines and substitute-lighting to preserve dark-sky quality.',
        },
        image: [
          `${imgBase}/${encodeURIComponent('6.总平及设计分析.jpg')}`,
          `${imgBase}/${encodeURIComponent('9.设计策略step4.jpg')}`,
        ],
      },
    ]
  }

  if (active.id === 'assignment-5') {
    const imgBase = `${import.meta.env.BASE_URL}experience/assignments/5`
    return [
      {
        id: 's1',
        title: { zh: '1. 人群画像与多维需求分析', en: '1. User Profiling and Multi-Dimensional Needs Analysis' },
        description: {
          zh: '客群构成：识别出僧人、管理人员、礼佛信众、周边居民及旅游游客五大核心群体。\n数据洞察：定量分析人群占比，识别出中老年客群在宗教民俗活动中的主体地位，以及年轻访客对宗教文化体验的潜在增长需求。\n需求映射：建立包含工作、居住、礼佛、餐饮、交流、体验在内的全维度需求环形图，指导功能空间的精准配置。',
          en: 'Identified five core user groups and quantified demographic composition to map multidimensional needs for precise functional allocation.',
        },
        image: `${imgBase}/1.png`,
      },
      {
        id: 's2',
        title: { zh: '2. 地理环境承载力与容量测算', en: '2. Environmental Carrying Capacity and Capacity Estimation' },
        description: {
          zh: '技术路径：采用“游道测算法”与“面积测算法”对景区环境容量进行科学测算。\n测算指标：拟定游道合理长度（12m/人）及各类游憩区合理活动面积，并综合考量气候、季节等变量。\n量化产出：明确日环境容量为14,217人次，年环境容量为429.35万人次，为景区管理与规模控制提供硬性数据支撑。',
          en: 'Used trail-length and area-based methods to calculate carrying capacity, yielding quantified daily and annual capacity for operation control.',
        },
        image: `${imgBase}/2.png`,
      },
      {
        id: 's3',
        title: { zh: '3. 景源分类评价与价值分级', en: '3. Scenic-Resource Evaluation and Value Grading' },
        description: {
          zh: '评价框架：将景区资源划分为自然资源与人文资源两大类。\n量化分值：对66个景源小类进行赋能评分，识别出宗教建筑（56分）、地石景观（32分）等特级及一级核心资源。\n结构分析：建立景源分级统计表，论证景区以地景资源为基础、宗教人文资源为核心的资源空间体系。',
          en: 'Built a natural/cultural dual-category framework, scored 66 resource items, and identified tiered core resources.',
        },
        image: `${imgBase}/3.png`,
      },
      {
        id: 's4',
        title: { zh: '4. 场地SWOT战略矩阵分析', en: '4. Site SWOT Strategic Matrix Analysis' },
        description: {
          zh: '内部因素：优势（深厚佛教底蕴、特色建筑风格、良好市场前景）与劣势（基础设施欠缺、标识系统不全、信息化程度低）。\n外部因素：机遇（顺应福州国土空间规划、景区关注度提升）与威胁（生态与开发平衡压力、景观资源利用效率不高）。\n核心指向：在保护生态平衡前提下，通过完善配套与数字化建设提升资源效能。',
          en: 'Assessed internal strengths/weaknesses and external opportunities/threats to define an ecology-first, infrastructure-plus-digitalization strategy.',
        },
        image: `${imgBase}/4.png`,
      },
      {
        id: 's5',
        title: { zh: '5. 差异化设计策略与导向系统', en: '5. Differentiated Design Strategy and Wayfinding System' },
        description: {
          zh: '行为流线设计：针对“传统朝拜者”与“年轻游访者”的行为差异，平衡“礼佛/祈福”与“购物/游赏”的功能矛盾。\n策略维度：需求导向（朝拜、娱乐、休闲、工作、交通），空间导向（混合、组团、寺庙与公共空间），发展导向（地貌观光、康体休闲与佛教衍生业态整合）。',
          en: 'Balanced pilgrimage and tourism behavior through differentiated flows, then integrated demand, spatial, and development-oriented strategies.',
        },
        image: `${imgBase}/5.png`,
      },
    ]
  }

  return [
    {
      id: `${active.id}-default`,
      title: active.title,
      description: active.description,
      image: active.image,
    },
  ]
})
const activeCourseworkSheetByIndex = computed(
  () => courseworkSheetSections.value[activeCourseworkSheetIndex.value] ?? courseworkSheetSections.value[0] ?? fallbackCourseworkSheet,
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

function openCourseworkSheet(id: string) {
  activeCourseworkSheetId.value = id
  activeCourseworkSheetIndex.value = 0
}

function closeCourseworkSheet() {
  activeCourseworkSheetId.value = null
}

function pickLocalizedTitle(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function pickLocalizedDesc(value: { zh: string; en: string }) {
  return ui.lang === 'zh' ? value.zh : value.en
}

function sectionImages(section: { image: string | string[] }) {
  return Array.isArray(section.image) ? section.image : [section.image]
}

function handleCourseworkSheetScroll() {
  const el = courseworkSheetScrollRef.value
  if (!el) return
  const sections = courseworkSheetSections.value
  if (sections.length === 0) return
  const max = Math.max(1, el.scrollHeight - el.clientHeight)
  const progress = el.scrollTop / max
  const breakpoints = sections.map((_, index) => index / sections.length)
  if (breakpoints.length === 0) return
  const nextIndex = breakpoints.reduce((acc, point, index) => {
    const currentDistance = Math.abs(progress - point)
    const bestDistance = Math.abs(progress - (breakpoints[acc] ?? breakpoints[0] ?? 0))
    return currentDistance < bestDistance ? index : acc
  }, 0)
  activeCourseworkSheetIndex.value = nextIndex
}

watch([activeCourseworkId, aiFeatureOpen, activeCourseworkSheetId], ([id, aiOpen, sheetId]) => {
  if (typeof document === 'undefined') return

  if (id || aiOpen || sheetId) {
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
            <span class="project-feature-cta">{{ aiFeatureClickHint }}</span>
          </div>
          <img class="project-feature-image" :src="aiFeatureImage" alt="AI portfolio website preview" loading="lazy" />
        </div>
        <div class="card-footer project-feature-footer">
          <span class="date-chip">{{ aiFeatureDate }}</span>
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
      <div class="coursework-frame coursework-grid-inline">
        <h3 class="title coursework-frame-title">{{ courseworkFrameTitle }}</h3>
        <div class="coursework-grid">
          <article
            v-for="sheet in courseworkSheets"
            :key="sheet.id"
            class="coursework-card coursework-sheet-card"
            @click="openCourseworkSheet(sheet.id)"
          >
            <img class="coursework-sheet-img" :src="sheet.image" :alt="pickLocalizedTitle(sheet.title)" loading="lazy" />
            <p class="coursework-sheet-title">{{ pickLocalizedTitle(sheet.title) }}</p>
          </article>
        </div>
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
        <p class="muted courses">{{ item.courses }}</p>
      </article>
    </div>

    <h3 class="anchor anchor-with-icon">
      <svg class="mini-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M21 7.5a4.5 4.5 0 0 1-6.7 3.9l-7.6 7.6-2.7.8.8-2.7 7.6-7.6A4.5 4.5 0 1 1 21 7.5Z" />
      </svg>
      <span>{{ text.sections.about.skills }}</span>
    </h3>
    <div class="skills">
      <article v-for="group in skillGroups" :key="group.title" class="info-card skill-tag-card">
        <h4 class="skill-tag-title">{{ group.title }}</h4>
        <div class="skill-tag-list">
          <template v-for="item in group.items" :key="item">
            <span v-for="tag in splitSkillTags(item)" :key="`${item}-${tag}`" class="skill-tag-chip">{{ tag }}</span>
          </template>
        </div>
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
      v-if="activeCourseworkSheet"
      class="coursework-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="pickLocalizedTitle(activeCourseworkSheet.title)"
      @click.self="closeCourseworkSheet"
    >
      <article class="coursework-modal coursework-sheet-modal sticky-sheet-modal">
        <header class="coursework-modal-head">
          <h4>{{ ui.lang === 'zh' ? '课程图纸展示' : 'Coursework Sheet Showcase' }}</h4>
          <button type="button" class="coursework-close" @click="closeCourseworkSheet">×</button>
        </header>
        <div class="coursework-modal-body coursework-sheet-modal-body sticky-sheet-layout">
          <div ref="courseworkSheetScrollRef" class="sticky-sheet-text-column" @scroll="handleCourseworkSheetScroll">
            <section
              v-for="(sheet, index) in courseworkSheetSections"
              :key="`sheet-section-${sheet.id}`"
              class="sticky-sheet-block"
              :class="{ active: activeCourseworkSheetIndex === index }"
            >
              <h5>{{ pickLocalizedTitle(sheet.title) }}</h5>
              <p>{{ pickLocalizedDesc(sheet.description) }}</p>
            </section>
            <div class="sticky-sheet-spacer" />
          </div>
          <div class="sticky-sheet-preview">
            <div class="sticky-sheet-preview-inner">
              <img
                v-for="(imgSrc, imgIdx) in sectionImages(activeCourseworkSheetByIndex)"
                :key="`${activeCourseworkSheetByIndex.id}-img-${imgIdx}`"
                class="coursework-sheet-modal-img"
                :src="imgSrc"
                :alt="pickLocalizedTitle(activeCourseworkSheetByIndex.title)"
                loading="lazy"
              />
            </div>
          </div>
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
  padding: 3.8rem 0 2.3rem;
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
  position: relative;
  padding-bottom: 3rem;
}

.project-feature-line {
  margin: 0.2rem 0 0;
}

.project-feature-footer {
  margin-top: 0;
  justify-content: flex-end;
  position: absolute;
  right: 1rem;
  bottom: 0.95rem;
}

.project-feature-main {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.2rem;
}

.project-feature-copy {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.project-feature-cta {
  margin-top: auto;
  align-self: flex-start;
  border: 1px solid var(--section-card-border);
  color: var(--section-card-border);
  border-radius: 999px;
  padding: 0.15rem 0.62rem;
  font-size: 0.82rem;
  line-height: 1.15;
  letter-spacing: 0.02em;
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
  transition: transform 0.28s ease, box-shadow 0.28s ease;
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
  transition: transform 0.28s ease, box-shadow 0.28s ease;
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

.skill-tag-card {
  width: 100%;
  min-height: 210px;
  padding: 0.95rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 15px;
  border: 1px solid rgba(156, 135, 192, 0.65);
  background: #c0afd5;
  color: #554860;
  box-shadow: -14px 14px 0 -5px #9c87c0;
}

.skill-tag-title {
  margin: 0 0 0.55rem;
  font-size: 1.36rem;
  line-height: 1.2;
  font-weight: 900;
  color: #4e4161;
}

.skill-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.45rem;
}

.skill-tag-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.38rem 0.88rem 0.48rem 1.02rem;
  border-radius: 999px;
  background: #eb9646;
  color: #fff;
  font-size: 0.96rem;
  line-height: 1.2;
  position: relative;
  transition: transform 0.28s ease, background-color 0.28s ease;
}

.skill-tag-chip::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #554860;
  margin-right: 0.48rem;
  flex: 0 0 auto;
}

.coursework-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.95rem;
}

.coursework-grid-inline {
  margin-top: 0.95rem;
}

.coursework-frame {
  border: 1px solid var(--section-card-border);
  border-radius: 14px;
  padding: 0.85rem 0.9rem 1rem;
  background: color-mix(in srgb, var(--color-background-soft) 94%, transparent);
}

.coursework-frame-title {
  margin: 0 0 0.78rem;
  text-align: left;
  line-height: 1.34;
}

.coursework-card {
  border: 0;
  border-radius: 0;
  padding: 0;
  background: transparent;
  height: auto;
  cursor: pointer;
  transform: translateY(0);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coursework-sheet-img {
  width: 100%;
  aspect-ratio: 4 / 5;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 0;
}

.coursework-sheet-title {
  margin: 0.55rem 0 0;
  text-align: center;
  color: var(--color-heading);
  font-size: 0.92rem;
  line-height: 1.3;
  font-weight: 600;
}

.coursework-sheet-modal {
  width: min(1120px, 96vw);
}

.coursework-sheet-modal-body {
  max-height: min(78vh, 760px);
  overflow: hidden !important;
}

.coursework-sheet-modal .coursework-modal-body {
  overflow: hidden !important;
}

.sticky-sheet-modal {
  border-radius: 14px;
}

.sticky-sheet-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 460px;
  gap: 1.15rem;
  padding: 0.9rem;
}

.sticky-sheet-text-column {
  height: 30rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.sticky-sheet-block {
  margin: 0 0 3.2rem;
  opacity: 0.34;
  transition: opacity 0.3s ease;
}

.sticky-sheet-block.active {
  opacity: 1;
}

.sticky-sheet-block h5 {
  margin: 0 0 0.55rem;
  color: var(--color-heading);
  font-size: 1.2rem;
  line-height: 1.25;
}

.sticky-sheet-block p {
  margin: 0;
  color: color-mix(in srgb, var(--color-text) 82%, transparent);
  line-height: 1.6;
  max-width: 34ch;
}

.sticky-sheet-spacer {
  height: 7rem;
}

.sticky-sheet-preview {
  position: relative;
  top: 0;
  height: 30rem;
  width: 100%;
  border-radius: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: block;
  padding: 0;
  background: transparent;
  transition: transform 0.35s ease;
}

.sticky-sheet-preview-inner {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
}

.coursework-sheet-modal-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border-radius: 0;
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

.courses {
  line-height: 1.45;
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

:root[data-theme='dark'] .coursework-frame {
  background: color-mix(in srgb, var(--color-background-soft) 90%, transparent);
}

:root[data-theme='dark'] .skill-tag-card {
  background: #8d7aa8;
  color: #f6f2ff;
  border-color: #b29fcb;
  box-shadow: -14px 14px 0 -5px #5f4b7f;
}

:root[data-theme='dark'] .skill-tag-title {
  color: #f6f2ff;
}

:root[data-theme='dark'] .skill-tag-chip {
  background: #6f5a92;
}

@media (hover: hover) {
  .card:hover,
  .info-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .card:hover,
  :root[data-theme='dark'] .info-card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.5);
  }

  .coursework-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .coursework-card:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.46);
  }

  .skill-tag-chip:hover {
    transform: scale(1.08);
    background: #d9873a;
  }

  .internship-grid .card:hover .desc-block {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }

  .internship-grid .card:hover .internship-visual-img {
    transform: translateY(-2px) scale(1.015);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
  }

  :root[data-theme='dark'] .internship-grid .card:hover .desc-block {
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.34);
  }

  :root[data-theme='dark'] .internship-grid .card:hover .internship-visual-img {
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.4);
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-feature-main {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-feature-image {
    width: min(460px, 100%);
    flex-basis: auto;
  }

  .sticky-sheet-layout {
    grid-template-columns: 1fr;
  }

  .sticky-sheet-text-column {
    height: 22rem;
  }

  .sticky-sheet-preview {
    height: 16.5rem;
  }
}

@media (min-width: 1200px) {
  .section {
    padding: 4.3rem 0 2.7rem;
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

  .skill-tag-card {
    min-height: 226px;
    padding: 1rem;
  }

  .coursework-card {
    width: 100%;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sticky-sheet-text-column {
    height: 18.5rem;
  }

  .sticky-sheet-preview {
    height: 18.5rem;
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
