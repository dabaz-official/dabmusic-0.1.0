'use client';

import PlayerControls from "./PlayerControls";
import AudioPlayer from "./AudioPlayer";
import { usePlayer } from "@dabaz/components/providers/PlayerProvider";

const PlayerWrapper = () => {
  const { currentSong, isPlaying, handlePlayPause, handleNext, handlePrevious, currentTime, duration, updateProgress } = usePlayer();

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    updateProgress(currentTime, duration);
  };

  return (
    <>
      <PlayerControls
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        getCurrentTime={() => currentTime}
      />
      <AudioPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
      />
    </>
  );
};

export default PlayerWrapper;
