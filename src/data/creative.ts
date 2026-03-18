export type LocalizedText = { zh: string; en: string }

export type CreativeWork = {
  title: LocalizedText
  description?: LocalizedText
  meta?: LocalizedText
  image?: string
}

export type MusicAlbum = {
  artist: string
  title: string
  image?: string
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

export const musicAlbums: MusicAlbum[] = [
  { artist: 'Lexie Liu', title: 'THE HAPPY STAR', image: '/life/music/the-happy-star.jpg' },
  { artist: 'Lady Gaga', title: 'Mayhem', image: '/life/music/mayhem.jpg' },
  { artist: '苏打绿', title: '冬未了', image: '/life/music/dong-wei-liao.jpg' },
  { artist: '郑宜农', title: '新世纪的女儿演唱会', image: '/life/music/new-century-daughter-live.jpg' },
  { artist: 'NMIXX', title: 'Blue Valentine', image: '/life/music/blue-valentine.jpg' },
  { artist: '宇多田光', title: 'One Last Kiss', image: '/life/music/one-last-kiss.jpg' },
  { artist: 'Ariana Grande', title: 'eternal sunshine', image: '/life/music/eternal-sunshine.jpg' },
  { artist: 'Lorde', title: 'melodrama', image: '/life/music/melodrama.jpg' },
  { artist: 'Charli XCX', title: 'BRAT', image: '/life/music/brat.jpg' },
  { artist: 'XG', title: 'gala', image: '/life/music/gala.jpg' },
  { artist: 'Addison Rae', title: 'ADDISON', image: '/life/music/addison.jpg' },
  { artist: 'RAYE', title: 'My 21st Century Blues', image: '/life/music/my-21st-century-blues.jpg' },
  { artist: 'Troye Sivan', title: 'Rush', image: '/life/music/rush.jpg' },
  { artist: 'SE SO NEON', title: 'NOW', image: '/life/music/now.jpg' },
  { artist: '方大同', title: '梦想家', image: '/life/music/dreamer.jpg' },
  { artist: '谭维维', title: '3811', image: '/life/music/3811.jpg' },
  { artist: 'NewJeans', title: 'Ditto', image: '/life/music/ditto.jpg' },
]
