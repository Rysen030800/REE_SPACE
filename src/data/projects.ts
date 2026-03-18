export type LocalizedText = { zh: string; en: string }

export type Project = {
  id: string
  title: LocalizedText
  description: LocalizedText
  date: string
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
      zh: '1. 用户调研：深度访谈核心受众，收集 500+ 份问卷，构建母婴用户行为画像并识别主要使用痛点\n2. 服务优化：基于用户体验分析及母婴室通用设计标准，提出商圈母婴室空间与服务优化方案，包括设施配置与导视系统设计',
      en: 'Interviewed key users and collected 500+ questionnaires; built personas and identified pain points; proposed space and service improvements.',
    },
    date: '2023.07',
    tags: ['User Research', 'Persona', 'Service Design'],
  },
  {
    id: 'historic-activation',
    title: {
      zh: '历史建筑空间活化与商业运营',
      en: 'Historic Building Cultural Space Activation',
    },
    description: {
      zh: '1. 空间建模：通过空间建模模拟用户动线与使用场景，评估历史建筑空间再利用可行性\n2. 空间功能规划：重新规划 5 个功能分区，设计文化活动与商业运营结合的空间使用模式，优化提升公共空间活跃度，实现场地日人流 100+',
      en: 'Simulated user routes and scenarios via spatial modeling; redesigned functional zones and proposed a culture + operations strategy.',
    },
    date: '2021.11',
    tags: ['Spatial Modeling', 'Planning', 'Operations'],
  },
  {
    id: 'smart-city-intern',
    title: {
      zh: '智慧城市数字平台前期规划',
      en: 'Smart City Digital Platform Planning (Internship)',
    },
    description: {
      zh: '1. 参与智慧城市数字化平台前期规划，通过 POI 数据分析与实地调研，构建城市空间使用模型\n2. 利用 GIS 与多源数据整合分析城市空间使用模式，为平台功能设计提供数据支持\n3. 参与项目招投标技术方案撰写，与政府及技术团队\n4. 协作完成项目方案汇报协助整理与分析城市政策数据，支持智慧城市项目决策与方案优化',
      en: 'Joined early-stage platform planning; built spatial models from POI + field research; integrated multi-source data with GIS/BIM to support decisions.',
    },
    date: '2023.07-2023.08',
    tags: ['GIS', 'BIM', 'Data Integration'],
  },
  {
    id: 'landscape-intern',
    title: {
      zh: '景观规划&空间营造',
      en: 'Landscape Planning & Spatial Design Intern',
    },
    description: {
      zh: '1. 多源数据分析与需求画像:\n深度解析G端需求: 参与海绵城市项目规划调研，梳理国家及地方政策要求，提炼核心指标并转化为项目实施方案。\n需求画像: 参与高坡云顶暗夜公园项目针对核心客群的路径分析，识别服务点位分布、停车位不足、地表植被流失等5个体验断点\n2. 模块化设计:\n功能设计: 基于GlS空间数据与场地调研，分析6公里河道空间结构，规划5个功能模块以优化空间使用效率\n3. 技术方案可视化产出:\n模块化架构设计: 深度调研安顺平坝县槎白河2366平方公里规划区，针对平坝城区及乐平组团的14个管控单元进行现状分析，独立绘制并产出20+张分析图\n工程化落地与协作: 使用CAD与SketchUp完成空间建模与可视化表达，参与万字概念设计初稿文本与方案汇报，协助推进项目概念设计与方案落地。',
      en: 'Jul 2022 - Sep 2022, Guizhou Architectural Design & Research Institute Co., Ltd.\nUser journey and audience profiling: analyzed core target groups and solved 5 key pain points.\nSpatial strategy and modular design: divided a 6km waterfront site into 5 modules and produced 20+ analytical diagrams.\nPolicy analysis and compliance: translated sponge-city policies into implementable technical roadmaps.\nCross-team delivery: produced CAD/modeling outputs with AutoCAD and SketchUp and co-authored proposals to move the project into implementation.',
    },
    date: '2022.06-2023.08',
    tags: ['User Journey', 'Spatial Strategy', 'AutoCAD', 'SketchUp'],
  },
]
