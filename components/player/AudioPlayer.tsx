'use client';

import React, { useRef, useEffect } from 'react';
import { usePlayer } from "@dabaz/providers/PlayerProvider";
import { Song } from '@dabaz/lib/songs';

export interface AudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onEnded: () => void;
  onTimeUpdate: (currentTime: number, duration: number) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ onEnded, onTimeUpdate }) => {
  const { currentSong, isPlaying, updateProgress } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      updateProgress(audioRef.current.currentTime, audioRef.current.duration);
    }
  };

  return (
    <audio
      ref={audioRef}
      src={currentSong?.url || ''}
      onTimeUpdate={handleTimeUpdate}
      onEnded={() => {}}
    />
  );
};

export default AudioPlayer;