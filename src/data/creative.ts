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

export const musicAlbums: MusicAlbum[] = [
  { title: '3811', image: '/life/music/3811.jpg' },
  { title: 'aq', image: '/life/music/aq.jpg' },
  { title: 'autumn', image: '/life/music/autumn.jpg' },
  { title: 'be', image: '/life/music/be.jpg' },
  { title: 'bv', image: '/life/music/bv.jpg' },
  { title: 'df', image: '/life/music/df.jpg' },
  { title: 'dreamer', image: '/life/music/dreamer.jpg' },
  { title: 'earth', image: '/life/music/earth.jpg' },
  { title: 'es', image: '/life/music/es.jpg' },
  { title: 'firstlove', image: '/life/music/firstlove.jpg' },
  { title: 'fo', image: '/life/music/fo.jpg' },
  { title: 'gala', image: '/life/music/gala.jpg' },
  { title: 'happy star', image: '/life/music/happy%20star.jpg' },
  { title: 'hm', image: '/life/music/hm.jpg' },
  { title: 'iyky', image: '/life/music/iyky.jpg' },
  { title: 'jw', image: '/life/music/jw.jpg' },
  { title: 'lorde', image: '/life/music/lorde.jpg' },
  { title: 'lungs', image: '/life/music/lungs.jpg' },
  { title: 'mono', image: '/life/music/mono.jpg' },
  { title: 'nwjz2', image: '/life/music/nwjz2.jpg' },
  { title: 'nwz', image: '/life/music/nwz.jpg' },
  { title: 'onelastkiss', image: '/life/music/onelastkiss.jpg' },
  { title: 'paleblue', image: '/life/music/paleblue.jpg' },
  { title: 'pluto', image: '/life/music/pluto.jpg' },
  { title: 'pop girl', image: '/life/music/pop%20girl.jpg' },
  { title: 'rep', image: '/life/music/rep.jpg' },
  { title: 'teenager', image: '/life/music/teenager.jpg' },
  { title: 'tfg', image: '/life/music/tfg.jpg' },
  { title: 'troye', image: '/life/music/troye.jpg' },
  { title: 'wi', image: '/life/music/wi.jpg' },
  { title: 'winter', image: '/life/music/winter.jpg' },
  { title: 'wsmh', image: '/life/music/wsmh.jpg' },
  { title: 'wwimf', image: '/life/music/wwimf.jpg' },
  { title: 'xcx', image: '/life/music/xcx.jpg' },
  { title: 'yuduo', image: '/life/music/yuduo.jpg' },
  { title: '藏着', image: '/life/music/%E8%97%8F%E7%9D%80.jpg' },
  { title: '行走德育', image: '/life/music/%E8%A1%8C%E8%B5%B0%E5%BE%B7%E8%82%B2.jpg' },
]
