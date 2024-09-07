import React from 'react';
import Image from 'next/image';

import { Song } from '@dabaz/lib/songs';
import Explicit from '@dabaz/components/icons/explicit';
import { PauseIcon, PlayIcon, PreviousIcon } from '@dabaz/components/icons/player';

interface PlayerControlsProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious
}) => {
  return (
    <div className="fixed bottom-20 md:bottom-0 left-0 md:left-60 right-0 bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-800 p-4 h-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {currentSong && (
            <>
              <Image
                src={currentSong.cover}
                alt={currentSong.title} 
                width={1080}
                height={1080}
                className="w-10 h-10 md:w-12 md:h-12 mr-4"
              />
              <div>
                <p className="text-black dark:text-white text-md flex items-center text-center">
                  {currentSong.title}
                  {currentSong.explicit && <Explicit className="ml-1.5 md:ml-2 h-3 w-3 md:h-3.5 md:w-3.5" />}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-md">{currentSong.artist}</p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center">
          <button onClick={onPrevious} className="text-neutral-600 dark:text-neutral-400 mx-2">
            <PreviousIcon className='h-6 w-6' />
          </button>
          <button onClick={onPlayPause} className="text-neutral-800 dark:text-neutral-200 mx-2">
            {isPlaying ? <PauseIcon className='h-6 w-6' /> : <PlayIcon className='h-6 w-6' />}
          </button>
          <button onClick={onNext} className="text-neutral-800 dark:text-neutral-200 mx-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;