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
      en: 'Maternity & Infant Room User Experience Study (WUPENiCity Honorable Mention)',
    },
    description: {
      zh: '1. 用户调研：深度访谈核心受众，收集 500+ 份问卷，构建母婴用户行为画像并识别主要使用痛点\n2. 服务优化：基于用户体验分析及母婴室通用设计标准，提出商圈母婴室空间与服务优化方案，包括设施配置与导视系统设计',
      en: '1. User research: conducted in-depth interviews with core users and collected 500+ questionnaires to build behavior personas and identify key usage pain points.\n2. Service optimization: based on UX insights and universal design standards for nursing rooms, proposed spatial and service optimization solutions, including facility configuration and wayfinding system design.',
    },
    date: '2023.07',
    tags: ['User Research', 'Persona', 'Service Design'],
  },
  {
    id: 'historic-activation',
    title: {
      zh: '历史建筑空间活化与商业运营',
      en: 'Historic Building Space Activation & Commercial Operations',
    },
    description: {
      zh: '1. 空间建模：通过空间建模模拟用户动线与使用场景，评估历史建筑空间再利用可行性\n2. 空间功能规划：重新规划 5 个功能分区，设计文化活动与商业运营结合的空间使用模式，优化提升公共空间活跃度，实现场地日人流 100+',
      en: '1. Spatial modeling: simulated user flows and usage scenarios through spatial modeling to evaluate the feasibility of adaptive reuse for historic building spaces.\n2. Functional space planning: replanned 5 functional zones and designed a hybrid model combining cultural activities and commercial operations, improving public-space vitality and achieving 100+ daily visitors.',
    },
    date: '2021.11',
    tags: ['Spatial Modeling', 'Planning', 'Operations'],
  },
  {
    id: 'smart-city-intern',
    title: {
      zh: '智慧城市数字平台前期规划',
      en: 'Smart City Digital Platform Pre-planning',
    },
    description: {
      zh: '1. 参与智慧城市数字化平台前期规划，通过 POI 数据分析与实地调研，构建城市空间使用模型\n2. 利用 GIS 与多源数据整合分析城市空间使用模式，为平台功能设计提供数据支持\n3. 参与项目招投标技术方案撰写，与政府及技术团队\n4. 协作完成项目方案汇报协助整理与分析城市政策数据，支持智慧城市项目决策与方案优化',
      en: '1. Participated in early planning for a smart-city digital platform and built urban-space usage models through POI analysis and field research.\n2. Analyzed urban space-use patterns using GIS and multi-source data integration to support platform function design.\n3. Participated in technical proposal writing for project bidding in collaboration with government and technical teams.\n4. Co-delivered project reporting and supported decision-making and solution optimization through urban policy data consolidation and analysis.',
    },
    date: '2023.07-2023.08',
    tags: ['GIS', 'BIM', 'Data Integration'],
  },
  {
    id: 'landscape-intern',
    title: {
      zh: '景观规划&空间营造',
      en: 'Landscape Planning & Spatial Making',
    },
    description: {
      zh: '1. 多源数据分析与需求画像:\n深度解析G端需求: 参与海绵城市项目规划调研，梳理国家及地方政策要求，提炼核心指标并转化为项目实施方案。\n需求画像: 参与高坡云顶暗夜公园项目针对核心客群的路径分析，识别服务点位分布、停车位不足、地表植被流失等5个体验断点\n2. 模块化设计:\n功能设计: 基于GlS空间数据与场地调研，分析6公里河道空间结构，规划5个功能模块以优化空间使用效率\n3. 技术方案可视化产出:\n模块化架构设计: 深度调研安顺平坝县槎白河2366平方公里规划区，针对平坝城区及乐平组团的14个管控单元进行现状分析，独立绘制并产出20+张分析图\n工程化落地与协作: 使用CAD与SketchUp完成空间建模与可视化表达，参与万字概念设计初稿文本与方案汇报，协助推进项目概念设计与方案落地。',
      en: '1. Multi-source data analysis and demand profiling:\nGovernment-side demand analysis: participated in sponge-city planning research, consolidated national and local policy requirements, extracted core indicators, and translated them into implementable project plans.\nUser profiling: analyzed routes of core target users in the Gaopo Yunding Dark Sky Park project and identified 5 experience breakpoints, including service-point distribution, parking shortage, and surface vegetation loss.\n2. Modular design:\nFunctional planning: based on GIS spatial data and site research, analyzed the 6km river corridor structure and planned 5 functional modules to optimize space-use efficiency.\n3. Visualization output of technical schemes:\nModular architecture design: conducted in-depth research in the 2,366 km² Chabai River planning area of Pingba County, Anshun, analyzed 14 control units across Pingba urban area and Leping cluster, and independently produced 20+ analytical drawings.\nEngineering delivery and collaboration: used CAD and SketchUp for spatial modeling and visualization, participated in drafting the initial concept document and reporting, and supported concept-to-implementation advancement.',
    },
    date: '2022.06-2023.08',
    tags: ['User Journey', 'Spatial Strategy', 'AutoCAD', 'SketchUp'],
  },
]
