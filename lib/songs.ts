export interface Song {
  title: string;
  artist: string;
  album: string;
  explicit: boolean;
  cover: string;
  url: string;
  lyrics: string;
}

export const byMeSongs: Song[] = [
  {
    title: 'AnotherB',
    artist: 'DabAZ',
    album: 'AnotherB',
    explicit: true,
    cover: '/images/songs/anotherb.webp',
    url: '/music/anotherb.mp3',
    lyrics: '/lyrics/anotherb.lrc',
  },
  {
    title: 'Skrt Freestyle',
    artist: 'DabAZ',
    album: 'Skrt Freestyle',
    explicit: true,
    cover: '/images/songs/skrt-freestyle.webp',
    url: '/music/skrt-freestyle.mp3',
    lyrics: '/lyrics/skrt-freestyle.lrc',
  },
  {
    title: 'She a Masterpiece Freestyle',
    artist: 'DabAZ',
    album: 'She a Masterpiece Freestyle',
    explicit: true,
    cover: '/images/songs/anotherb.webp',
    url: '/music/she-a-masterpiece-freestyle.mp3',
    lyrics: '/lyrics/she-a-masterpiece-freestyle.lrc',
  },
  {
    title: 'PETTY TOO FREESTYLE',
    artist: 'DabAZ',
    album: 'PETTY TOO FREESTYLE',
    explicit: true,
    cover: '/images/songs/petty-too-freestyle.webp',
    url: '/music/petty-too-freestyle.mp3',
    lyrics: '/lyrics/petty-too-freestyle.lrc',
  },
];

export const songs: Song[] = [
  {
    title: '下坡',
    artist: 'SASIOVERLXRD',
    album: '那小子真帅',
    explicit: true,
    cover: '/images/songs/那小子真帅.webp',
    url: '/music/下坡.mp3',
    lyrics: '/lyrics/下坡.lrc',
  },
  {
    title: '可惜你不在',
    artist: 'SASIOVERLXRD',
    album: '那小子真帅',
    explicit: true,
    cover: '/images/songs/那小子真帅.webp',
    url: '/music/可惜你不在.mp3',
    lyrics: '/lyrics/可惜你不在.lrc',
  },
  {
    title: '薄荷水',
    artist: 'SASIOVERLXRD',
    album: '薄荷水',
    explicit: false,
    cover: '/images/songs/薄荷水.jpg',
    url: '/music/薄荷水.mp3',
    lyrics: '/lyrics/薄荷水.lrc',
  },
  ...byMeSongs,
]