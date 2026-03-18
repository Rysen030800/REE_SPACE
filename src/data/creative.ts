export type LocalizedText = { zh: string; en: string }

export type CreativeWork = {
  title: LocalizedText
  description?: LocalizedText
  meta?: LocalizedText
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
]

export const illustrations: CreativeWork[] = [
  {
    title: { zh: '绘画 01', en: 'Drawing 01' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '媒介 · 2026', en: 'Medium · 2026' },
  },
  {
    title: { zh: '绘画 02', en: 'Drawing 02' },
    description: { zh: '在这里写一句简短描述。', en: 'Add a short caption here.' },
    meta: { zh: '媒介 · 2026', en: 'Medium · 2026' },
  },
]

export const favorites = {
  music: ['Artist - Song', 'Album / Playlist', 'Live performance'],
  movies: ['Movie title', 'Movie title', 'Movie title'],
  tv: ['TV series title', 'TV series title', 'TV series title'],
}
