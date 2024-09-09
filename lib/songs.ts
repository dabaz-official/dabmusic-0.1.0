export interface Song {
  title: string;
  artist: string;
  album: string;
  explicit: boolean;
  cover: string;
  url: string;
  lyrics: string;
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
    title: 'She a Masterpiece Freestyle',
    artist: 'DabAZ',
    album: 'She a Masterpiece Freestyle',
    explicit: true,
    cover: '/images/songs/anotherb.webp',
    url: '/music/she-a-masterpiece-freestyle.mp3',
    lyrics: '/lyrics/she-a-masterpiece-freestyle.lrc',
  },
]