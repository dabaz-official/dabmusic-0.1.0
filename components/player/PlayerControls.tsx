'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Song } from '@dabaz/lib/songs';
import Explicit from '@dabaz/components/icons/explicit';
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon } from '@dabaz/components/icons/player';
import LyricsModal from '@dabaz/components/modals/LyricsModal';

interface PlayerControlsProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  getCurrentTime: () => number;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  getCurrentTime,
}) => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentTime(getCurrentTime() * 1000);
      }, 100);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, getCurrentTime]);

  return (
    <>
      <div
        className="fixed bottom-20 md:bottom-0 left-0 md:left-60 right-0 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 p-4 h-auto"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {currentSong && (
              <>
                <div 
                  className='justify-center cursor-pointer'
                  onClick={() => setShowLyrics(true)}
                >
                  <Image
                    src={currentSong.cover}
                    alt={currentSong.title} 
                    width={1080}
                    height={1080}
                    className="w-12 h-12 md:w-14 md:h-14 mr-4"
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <p className="text-black dark:text-white text-md flex items-center text-center">
                    {currentSong.title}
                    {currentSong.explicit && <Explicit className="ml-1.5 md:ml-2 h-3 w-3 md:h-3.5 md:w-3.5" />}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-md">{currentSong.artist}</p>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center justify-center my-3">
            <button onClick={onPrevious} className="text-neutral-600 dark:text-neutral-400 mx-2">
              <PreviousIcon className='h-3 w-auto' />
            </button>
            <button onClick={onPlayPause} className="text-neutral-800 dark:text-neutral-200 mx-2">
              {isPlaying ? <PauseIcon className='h-5 w-5' /> : <PlayIcon className='h-5 w-5' />}
            </button>
            <button onClick={onNext} className="text-neutral-600 dark:text-neutral-400 mx-2">
              <NextIcon className='h-3 w-auto' />
            </button>
          </div>
        </div>
      </div>
      {currentSong && (
        <LyricsModal
          isOpen={showLyrics}
          onClose={() => setShowLyrics(false)}
          song={currentSong}
          currentTime={currentTime}
        />
      )}
    </>
  );
};

export default PlayerControls;