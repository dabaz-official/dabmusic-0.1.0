export interface Song {
  title: string;
  artist: string;
  album: string;
  explicit: boolean;
  cover: string;
  url: string;
  lyrics: string;
  href: string;
}

export const songs: Song[] = [
  {
    title: '可惜你不在',
    artist: 'SASIOVERLXRD',
    album: '那小子真帅',
    explicit: true,
    cover: '/images/songs/那小子真帅.webp',
    url: '/music/可惜你不在.mp3',
    lyrics: '/lyrics/可惜你不在.lrc',
    href: '/songs/kexinibuzai',
  },
  {
    title: '薄荷水',
    artist: 'SASIOVERLXRD',
    album: '薄荷水',
    explicit: false,
    cover: '/images/songs/薄荷水.jpg',
    url: '/music/薄荷水.mp3',
    lyrics: '/lyrics/薄荷水.lrc',
    href: '/songs/boheshui',
  },
]