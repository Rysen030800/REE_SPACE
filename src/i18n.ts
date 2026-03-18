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
    nav: { home: '棣栭〉', projects: '椤圭洰', creative: '浣滃搧', about: '鍏充簬', contact: '鑱旂郴', resume: '绠€鍘?PDF' },
    hero: {
      kicker: 'Hi, I\'m',
      subtitle: '鎴垮眿涓庡煄甯傜鐞?路 椋庢櫙鍥灄 路 鏁版嵁鍒嗘瀽',
      introPrefix: '鎴戞槸',
      introSuffix: '鎺㈢储鑰?,
      statement:
        '鈥滃帩鈥濇槸闂藉崡璇腑瀹剁殑鎰忔€濄€傛瘡涓汉缁堝叾涓€鐢熼兘鍦ㄥ鎵捐嚜宸辩殑钀借剼鐐广€俓n杩欑瀵绘壘锛屽苟闈炲彧鍦ㄧ墿鐞嗙┖闂翠腑鍦堝湴鑷皝锛屾洿鏄績鐏佃嚜鎴戝畨鏀剧殑鍐嶅垱銆備笓涓氭妧鑳戒笉搴斿彧鏄啺鍐风殑宸ュ叿锛岃€屾槸鎼缓鈥滃帩鈥濈殑鐮栫摝銆傚懠鍞や笘鐣屽缁堝瓨鍦ㄤ竴绉嶅鏍稿績浠峰€肩殑瀹堟湜锛氬湪杩欎釜椋為€熻凯浠ｇ殑鏃朵唬锛屼负鍏蜂綋鐨勨€滀汉鈥濇瀯寤哄嚭鏇存湁娓╁害鐨勭З搴忋€?,
    },
    buttons: { themeLight: '鐧藉ぉ', themeDark: '榛戝', langToZh: '涓?, langToEn: 'EN' },
    sections: {
      projects: { title: '经历', resume: '涓嬭浇绠€鍘嗭紙PDF锛? },
      creative: {
        title: '浣滃搧',
        lead: '鎽勫奖銆佺粯鐢伙紝浠ュ強涓€浜涗釜浜哄亸濂藉垎浜€?,
        photography: '鎽勫奖',
        illustration: '缁樼敾',
        favorites: '鍒嗕韩',
        music: '闊充箰',
        movies: '鐢靛奖',
        tv: '褰辫鍓?,
      },
      about: {
        title: '鍏充簬',
        lead: '鎴垮眿涓庡煄甯傜鐞嗙澹湪璇伙紝椋庢櫙鍥灄鑳屾櫙銆?,
        availability: '鍙珛鍗冲埌宀楋紝瀹炰範 3 涓湀鍙婁互涓娿€?,
        education: '鏁欒偛缁忓巻',
        skills: '鎶€鑳?,
        resume: '涓嬭浇绠€鍘嗭紙PDF锛?,
        resumeHint: '鎶?PDF 鏀惧埌 REE_SPACE/public/resume.pdf 鍗冲彲銆?,
      },
      contact: {
        title: '鑱旂郴',
        lead: '娆㈣繋閫氳繃浠ヤ笅鏂瑰紡鑱旂郴鎴戙€?,
        phone: '鐢佃瘽',
        email: '閭',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        optional: '鍙€夛細娣诲姞浣犵殑閾炬帴',
      },
    },
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', creative: 'Creative', about: 'About', contact: 'Contact', resume: 'Resume PDF' },
    hero: {
      kicker: 'Hi, I\'m',
      subtitle: 'Housing & Urban Management 路 Landscape Architecture 路 Data Analysis',
      introPrefix: 'I am a',
      introSuffix: 'explorer',
      statement:
        '"Cu貌" means "home" in the Minnan dialect. Everyone spends a lifetime searching for a place to belong.  This search is not only about claiming physical space, but also about re-creating a home for the mind. Professional skills shouldn鈥檛 be cold tools鈥攖hey are the bricks that build a "home". I value building warmer, people-centered order in a fast-iterating world.',
    },
    buttons: { themeLight: 'Light', themeDark: 'Dark', langToZh: '涓?, langToEn: 'EN' },
    sections: {
      projects: { title: 'Experience', resume: 'Download resume (PDF)' },
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

