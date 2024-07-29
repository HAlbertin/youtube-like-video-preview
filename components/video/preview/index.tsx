'use client';

import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Thumbnail } from '../thumbnail';
import debounce from 'debounce';

type Props = {
  videoUrl: string;
  thumbnailUrl: string;
};
export const Preview = ({ videoUrl, thumbnailUrl }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  const debounceSet = debounce(() => setCanPlayVideo(true), 200);

  const handleMouseLeave = () => {
    debounceSet.clear();
    setCanPlayVideo(false);
  };

  const playVideo = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
    } catch (error) {
      console.error('Error playing video', error);
    }
  }, []);

  const pauseVideo = useCallback(() => {
    if (!videoRef.current) return;

    try {
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    } catch (error) {
      console.error('Error pausing video', error);
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (canPlayVideo) {
      playVideo();
      return;
    }

    pauseVideo();
  }, [canPlayVideo, pauseVideo, playVideo]);

  return (
    <div
      onMouseOver={debounceSet.trigger}
      onMouseLeave={handleMouseLeave}
      className="delay-50 flex flex-col rounded-lg p-2 transition ease-in-out hover:cursor-pointer hover:bg-slate-800"
    >
      {/* TODO: add proper skeleton loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <video
          ref={videoRef}
          preload="none"
          muted
          playsInline
          className="h-[14rem] w-[26rem] rounded-lg object-cover sm:h-[14rem] sm:w-[26rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]"
          autoPlay={false}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Thumbnail
          thumbnailUrl={thumbnailUrl}
          alt="video thumbnail"
          className={canPlayVideo ? 'opacity-0' : ''}
        />
      </Suspense>
    </div>
  );
};
