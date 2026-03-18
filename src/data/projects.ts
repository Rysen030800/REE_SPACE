export type LocalizedText = { zh: string; en: string }

export type Project = {
  id: string
  title: LocalizedText
  description: LocalizedText
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'ux-wupenicity',
    title: {
      zh: '福州市重点商圈母婴室用户体验研究（WUPENiCity 荣誉奖）',
      en: 'Maternity & Infant Room UX Study (WUPENiCity Honorable Mention)',
    },
    description: {
      zh: '深度访谈核心受众，收集 500+ 份问卷；构建用户画像并识别主要痛点；提出空间与服务优化方案。',
      en: 'Interviewed key users and collected 500+ questionnaires; built personas and identified pain points; proposed space and service improvements.',
    },
    tags: ['User Research', 'Persona', 'Service Design'],
  },
  {
    id: 'historic-activation',
    title: {
      zh: '历史建筑文化空间活化与商业运营策略',
      en: 'Historic Building Cultural Space Activation',
    },
    description: {
      zh: '通过空间建模模拟用户动线与使用场景；重新规划功能分区，并提出文化活动与商业运营结合的策略。',
      en: 'Simulated user routes and scenarios via spatial modeling; redesigned functional zones and proposed a culture + operations strategy.',
    },
    tags: ['Spatial Modeling', 'Planning', 'Operations'],
  },
  {
    id: 'smart-city-intern',
    title: {
      zh: '智慧城市数字平台前期规划（实习）',
      en: 'Smart City Digital Platform Planning (Internship)',
    },
    description: {
      zh: '参与数字平台前期规划；基于 POI + 实地调研构建空间模型，并用 GIS/BIM 整合多源数据支持决策。',
      en: 'Joined early-stage platform planning; built spatial models from POI + field research; integrated multi-source data with GIS/BIM to support decisions.',
    },
    tags: ['GIS', 'BIM', 'Data Integration'],
  },
  {
    id: 'landscape-intern',
    title: {
      zh: '景觀規劃&空间營造實習生',
      en: 'Landscape Planning & Spatial Design Intern',
    },
    description: {
      zh: 'July 2022 - Sept. 2022\n貴州省建築設計研究院有限公司\n用戶旅程與客群畫像：分析公园项目核心目標客群，識別並解決 5 個關鍵痛点（如設施分佈不均、動線缺失等），提升訪客的參與度與體驗。\n空間策略與模塊化設計：拆解 6 公里濱水場地為 5 個獨立功能模塊，獨立製作 20+ 張分析圖表，簡化並優化複雜空間營運管理流程。\n政策分析與合規要求：深度解讀「海綿城市」多層級政策，將宏觀目標轉化為可落地技術路線圖，確保方案 100% 匹配核心法定/硬性指標。\n跨部門協作與交付：運用 AutoCAD 與 SketchUp 進行工程圖與建模產出；共同撰寫萬字概念設計提案，推動項目由概念規劃邁入工程實施。',
      en: 'Jul 2022 - Sep 2022, Guizhou Architectural Design & Research Institute Co., Ltd.\nUser journey and audience profiling: analyzed core target groups and solved 5 key pain points.\nSpatial strategy and modular design: divided a 6km waterfront site into 5 modules and produced 20+ analytical diagrams.\nPolicy analysis and compliance: translated sponge-city policies into implementable technical roadmaps.\nCross-team delivery: produced CAD/modeling outputs with AutoCAD and SketchUp and co-authored proposals to move the project into implementation.',
    },
    tags: ['User Journey', 'Spatial Strategy', 'AutoCAD', 'SketchUp'],
  },
]
