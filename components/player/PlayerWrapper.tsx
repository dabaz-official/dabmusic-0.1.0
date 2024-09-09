'use client';

import PlayerControls from "./PlayerControls";
import AudioPlayer from "./AudioPlayer";
import { usePlayer } from "@dabaz/providers/PlayerProvider";

const PlayerWrapper = () => {
  const { currentSong, isPlaying, handlePlayPause, handleNext, handlePrevious, currentTime, duration, updateProgress } = usePlayer();

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    // 可以在这里更新进度条等 UI 元素
  };

  return (
    <>
      <PlayerControls
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
        getCurrentTime={handleTimeUpdate}
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
