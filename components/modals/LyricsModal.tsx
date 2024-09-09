'use client'

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Song } from '@dabaz/lib/songs';
import { HiX } from 'react-icons/hi';

interface LyricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: Song;
  currentTime: number;
}

interface LyricLine {
  time: number;
  text: string;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ isOpen, onClose, song, currentTime }) => {
  const [lyrics, setLyrics] = useState<LyricLine[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetch(song.lyrics)
        .then(response => response.text())
        .then(text => {
          const parsedLyrics = parseLRC(text);
          setLyrics(parsedLyrics);
        })
        .catch(error => console.error('Error fetching lyrics:', error));
    }
  }, [isOpen, song.lyrics]);

  const parseLRC = (lrc: string): LyricLine[] => {
    const lines = lrc.split('\n');
    return lines
      .map(line => {
        const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/);
        if (match) {
          const [, min, sec, ms, text] = match;
          const time = (parseInt(min) * 60 + parseInt(sec)) * 1000 + parseInt(ms);
          return { time, text: text.trim() };
        }
        return null;
      })
      .filter((line): line is LyricLine => line !== null);
  };

  const currentLyricIndex = useMemo(() => {
    return lyrics.findIndex((line, index) => {
      const nextLine = lyrics[index + 1];
      return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
    });
  }, [lyrics, currentTime]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-black overflow-y-auto z-[99] mt-16 mb-20 md:mt-0 md:mb-0">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex justify-end items-center p-4">
          <button onClick={onClose} className="text-black dark:text-white p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors">
            <HiX size={20} />
          </button>
          <div className="w-10"></div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* 
          <div className="flex flex-col items-center mb-6">
            <Image
              src={song.cover}
              alt={song.title}
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
              {song.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">{song.artist}</p>
          </div>
          */}
          <div className="px-16 py-8 text-start">
            {lyrics.map((line, index) => (
              <p
                key={index}
                className={`my-2 font-bold text-2xl transition-all duration-100 ${
                  index === currentLyricIndex ? 'text-black dark:text-white' : 'text-neutral-200 dark:text-neutral-800'
                }`}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyricsModal;