'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { songs } from "@dabaz/lib/songs";
import Explicit from "@dabaz/components/icons/explicit";
import { PlayIcon } from "@dabaz/components/icons/player";
import PlayerControls from "../player/PlayerControls";
import AudioPlayer from "../player/AudioPlayer";
import { usePlayer } from "@dabaz/providers/PlayerProvider";

const PageContent = () => {
  const { currentSong, isPlaying, playSong, handlePlayPause, handleNext, handlePrevious } = usePlayer();

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    // 可以在这里更新进度条等 UI 元素
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 pt-4 pb-48">
        {songs.map((item) => (
          <div
            key={item.title}
            onClick={() => playSong(item)}
            className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 cursor-pointer transition"
          >
            <div className="relative aspect-square w-full h-full overflow-hidden rounded-md border border-neutral-500/20">
              <Image
                className="object-cover object-center"
                src={item.cover}
                width={1080}
                height={1080}
                alt="Image"
              />
              <div className="absolute inset-0 flex items-end justify-start p-2 opacity-0 group-hover:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <div className="rounded-full bg-white dark:bg-neutral-600 bg-opacity-10 text-center flex items-center justify-center text-sm font-medium backdrop-blur backdrop-filter z-50 h-8 w-8 py-2 pl-2.5 pr-2">
                  <PlayIcon className="h-3.5 w-3.5 text-neutral-900 dark:text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-2">
              <div className="items-center">
                <div className="flex justify-between items-center">
                  <p className="text-sm truncate w-full text-neutral-900 dark:text-neutral-100 justify-start">
                    {item.title}
                  </p>
                  {item.explicit ? <Explicit className="w-3.5 h-3.5 fill-neutral-600 dark:fill-neutral-400 items-center" /> : ''}
                </div>
              </div>
              <p className="text-xs truncate w-full text-neutral-600 dark:text-neutral-400">
                {item.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageContent;