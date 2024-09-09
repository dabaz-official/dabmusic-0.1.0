'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { songs, Song } from '@dabaz/lib/songs';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  setCurrentSong: (song: Song | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  playSong: (song: Song) => void;
  handlePlayPause: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  currentTime: number;
  duration: number;
  updateProgress: (currentTime: number, duration: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.url === currentSong?.url);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setCurrentSong(nextSong);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(song => song.url === currentSong?.url);
    const previousSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    setCurrentSong(previousSong);
    setIsPlaying(true);
  };

  const updateProgress = (currentTime: number, duration: number) => {
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  return (
    <PlayerContext.Provider value={{
      currentSong,
      isPlaying,
      setCurrentSong,
      setIsPlaying,
      playSong,
      handlePlayPause,
      handleNext,
      handlePrevious,
      currentTime,
      duration,
      updateProgress,
    }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};