export type LocalizedText = { zh: string; en: string }

export type Project = {
  title: LocalizedText
  description: LocalizedText
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
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
]
