import type { Lang } from './stores/ui'

export const copy: Record<
  Lang,
  {
    nav: { home: string; projects: string; creative: string; about: string; contact: string; resume: string }
    hero: { kicker: string; subtitle: string; introPrefix: string; introSuffix: string; statement: string }
    buttons: { themeLight: string; themeDark: string; langToZh: string; langToEn: string }
    sections: {
      projects: { title: string; resume: string }
      creative: {
        title: string
        lead: string
        photography: string
        illustration: string
        favorites: string
        music: string
        movies: string
        tv: string
      }
      about: {
        title: string
        lead: string
        availability: string
        education: string
        skills: string
        resume: string
        resumeHint: string
      }
      contact: { title: string; lead: string; phone: string; email: string; github: string; linkedin: string; optional: string }
    }
  }
> = {
  zh: {
    nav: { home: '首页', projects: '项目', creative: '作品', about: '关于', contact: '联系', resume: '简历 PDF' },
    hero: {
      kicker: 'Hi, I\'m',
      subtitle: '房屋与城市管理 · 风景园林 · 数据分析',
      introPrefix: '我是',
      introSuffix: '探索者',
      statement:
        '“厝”是闽南语中家的意思。每个人终其一生都在寻找自己的落脚点。\n这种寻找，并非只在物理空间中圈地自封，更是心灵自我安放的再创。专业技能不应只是冰冷的工具，而是搭建“厝”的砖瓦。呼唤世界始终存在一种对核心价值的守望：在这个飞速迭代的时代，为具体的“人”构建出更有温度的秩序。',
    },
    buttons: { themeLight: '白天', themeDark: '黑夜', langToZh: '中', langToEn: 'EN' },
    sections: {
      projects: { title: '项目', resume: '下载简历（PDF）' },
      creative: {
        title: '作品',
        lead: '摄影、绘画，以及一些个人偏好分享。',
        photography: '摄影',
        illustration: '绘画',
        favorites: '分享',
        music: '音乐',
        movies: '电影',
        tv: '影视剧',
      },
      about: {
        title: '关于',
        lead: '房屋与城市管理硕士在读，风景园林背景。',
        availability: '可立即到岗，实习 3 个月及以上。',
        education: '教育经历',
        skills: '技能',
        resume: '下载简历（PDF）',
        resumeHint: '把 PDF 放到 REE_SPACE/public/resume.pdf 即可。',
      },
      contact: {
        title: '联系',
        lead: '欢迎通过以下方式联系我。',
        phone: '电话',
        email: '邮箱',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        optional: '可选：添加你的链接',
      },
    },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', creative: 'Creative', about: 'About', contact: 'Contact', resume: 'Resume PDF' },
    hero: {
      kicker: 'Hi, I\'m',
      subtitle: 'Housing & Urban Management · Landscape Architecture · Data Analysis',
      introPrefix: 'I am a',
      introSuffix: 'explorer',
      statement:
        '"Cuò" means "home" in the Minnan dialect. Everyone spends a lifetime searching for a place to belong.  This search is not only about claiming physical space, but also about re-creating a home for the mind. Professional skills shouldn’t be cold tools—they are the bricks that build a "home". I value building warmer, people-centered order in a fast-iterating world.',
    },
    buttons: { themeLight: 'Light', themeDark: 'Dark', langToZh: '中', langToEn: 'EN' },
    sections: {
      projects: { title: 'Projects', resume: 'Download resume (PDF)' },
      creative: {
        title: 'Creative',
        lead: 'Photography, drawings, and personal favorites.',
        photography: 'Photography',
        illustration: 'Illustration',
        favorites: 'Favorites',
        music: 'Music',
        movies: 'Movies',
        tv: 'TV Shows',
      },
      about: {
        title: 'About',
        lead: 'MA student in Housing & Urban Management with a background in Landscape Architecture.',
        availability: 'Available for internship (3+ months), can start immediately.',
        education: 'Education',
        skills: 'Skills',
        resume: 'Download resume (PDF)',
        resumeHint: 'Put your PDF at REE_SPACE/public/resume.pdf.',
      },
      contact: {
        title: 'Contact',
        lead: 'Pick any method below.',
        phone: 'Phone',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        optional: 'Optional: add your link',
      },
    },
  },
}
