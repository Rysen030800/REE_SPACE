export type LocalizedText = { zh: string; en: string }

export type CreativeWork = {
  title: LocalizedText
  description?: LocalizedText
  meta?: LocalizedText
  image?: string
}

export type MusicAlbum = {
  title: string
  image: string
}

export const photography: CreativeWork[] = [
  {
    title: { zh: '照片 01', en: 'Photo 01' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1758982356425.jpeg',
  },
  {
    title: { zh: '照片 02', en: 'Photo 02' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1760255820881.jpeg',
  },
  {
    title: { zh: '照片 03', en: 'Photo 03' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1763976508381.jpeg',
  },
  {
    title: { zh: '照片 04', en: 'Photo 04' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1766487588675.jpeg',
  },
  {
    title: { zh: '照片 05', en: 'Photo 05' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1770180035231.jpeg',
  },
  {
    title: { zh: '照片 06', en: 'Photo 06' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1770181006283.jpeg',
  },
  {
    title: { zh: '照片 07', en: 'Photo 07' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1773485264434.jpeg',
  },
  {
    title: { zh: '照片 08', en: 'Photo 08' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1770181429391.jpeg',
  },
  {
    title: { zh: '照片 09', en: 'Photo 09' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1770187762475.jpeg',
  },
  {
    title: { zh: '照片 10', en: 'Photo 10' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1770191425192.jpeg',
  },
  {
    title: { zh: '照片 11', en: 'Photo 11' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1746327964610.jpeg',
  },
  {
    title: { zh: '照片 12', en: 'Photo 12' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '地点 · 2026', en: 'Location · 2026' },
    image: '/creative/photography/1765181242466.jpeg',
  },
]

export const illustrations: CreativeWork[] = [
  {
    title: { zh: '绘画 01', en: 'Drawing 01' },
    image: '/creative/illustration/0ddad979-2b2b-410e-a33d-d08afe8e108a.png',
  },
  {
    title: { zh: '绘画 02', en: 'Drawing 02' },
    image: '/creative/illustration/d90b2454-6307-40b4-9dbf-37f9780d5429.png',
  },
  {
    title: { zh: '绘画 03', en: 'Drawing 03' },
    image: '/creative/illustration/watercolor 1.jpg',
  },
  {
    title: { zh: '绘画 04', en: 'Drawing 04' },
    image: '/creative/illustration/watercolor 2.jpg',
  },
]

export const favorites = {
  music: [
    'Lexie Liu - THE HAPPY STAR',
    'Lady Gaga - Mayhem',
    '苏打绿 - 冬未了',
    '郑宜农 - 新世纪的女儿演唱会',
    'NMIXX - Blue Valentine',
    '宇多田光 - One Last Kiss',
    'Ariana Grande - eternal sunshine',
    'Lorde - melodrama',
    'Charli XCX - BRAT',
    'XG - gala',
    'Addison Rae - ADDISON',
    'RAYE - My 21st Century Blues',
    'Troye Sivan - Rush',
    'SE SO NEON - NOW',
    '方大同 - 梦想家',
    '谭维维 - 3811',
    'NewJeans - Ditto',
  ],
  movies: ['Movie title', 'Movie title', 'Movie title'],
  tv: ['TV series title', 'TV series title', 'TV series title'],
}

const musicAlbumFiles = [
  '3811.jpg',
  'Aquamarine.jpg',
  'Bewitched.jpg',
  'Blue Valentine.jpg',
  'Dance Fever.jpg',
  'eternal sunshine.jpg',
  'Fearless .jpg',
  'First Love.jpg',
  'folklore.jpg',
  'GALA.jpg',
  'Girl, so confusing.jpg',
  'Gold ～また逢う日まで～.jpg',
  'HIT ME HARD AND SOFT.jpg',
  'IYKYK.jpg',
  'lorde.jpg',
  'lungs.jpg',
  'mono.jpg',
  "NewJeans 1st EP 'New Jeans'.jpg",
  "NewJeans 2nd EP 'Get Up'.jpg",
  'One Last Kiss.jpg',
  'One Of Your Girls.jpg',
  'Pale Blue.jpg',
  'pluto.jpg',
  'POP GIRL.jpg',
  'reputation.jpg',
  'TEENAGE RAMBLE.jpg',
  'That! Feels Good!.jpg',
  'The Dreamer.jpg',
  'The Happy Star.jpg',
  'What Was I Made For.jpg',
  "What's Your Pleasure.jpg",
  'WHERE IS MY HUSBAND!.jpg',
  'winter.jpg',
  '藏著並不等於遺忘.jpg',
  '地球儀 - Spinning Globe.jpg',
  '秋故事.jpg',
  '行走的鱼.jpg',
] as const

export const musicAlbums: MusicAlbum[] = musicAlbumFiles.map((filename) => ({
  title: filename,
  image: `/life/music/${encodeURIComponent(filename)}`,
}))
