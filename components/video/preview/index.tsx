'use client';

import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Thumbnail } from '../thumbnail';
import debounce from 'debounce';
import { ProgressBar } from '../progress-bar';

type Props = {
  videoUrl: string;
  thumbnailUrl: string;
};
export const Preview = ({ videoUrl, thumbnailUrl }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  const manualUpdated = useRef(false);
  const latestProgress = useRef(0);

  const [progress, setProgress] = useState(0);

  const debounceSet = debounce(() => setCanPlayVideo(true), 200);

  const handleMouseLeave = () => {
    debounceSet.clear();
    setCanPlayVideo(false);
  };

  const playVideo = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      manualUpdated.current &&
        (videoRef.current.currentTime = latestProgress.current);
      await videoRef.current.play();
    } catch (error) {
      console.error('Error playing video', error);
    }
  }, []);

  const pauseVideo = useCallback(() => {
    if (!videoRef.current) return;

    try {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    } catch (error) {
      console.error('Error pausing video', error);
    }
  }, []);

  const onTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;

    const currentProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setProgress(currentProgress);

    if (videoRef.current.currentTime > 0)
      latestProgress.current = videoRef.current.currentTime;
  }, []);

  const onManualProgressUpdate = useCallback((newProgress: number) => {
    if (!videoRef.current) return;

    const newTime = (newProgress / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(newProgress);

    latestProgress.current = videoRef.current.currentTime;
    manualUpdated.current = true;
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
      className="delay-50 flex flex-col rounded-lg transition ease-in-out hover:cursor-pointer hover:bg-slate-800 md:p-2"
    >
      {/* TODO: add proper skeleton loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative">
          <video
            ref={videoRef}
            onTimeUpdate={onTimeUpdate}
            preload="none"
            muted
            playsInline
            className="h-[14rem] w-[21rem] rounded-lg object-cover sm:h-[14rem] sm:w-[21rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]"
            autoPlay={false}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {canPlayVideo && (
            <ProgressBar
              progress={progress}
              onProgressUpdate={onManualProgressUpdate}
            />
          )}
        </div>

        <Thumbnail
          thumbnailUrl={thumbnailUrl}
          alt="video thumbnail"
          className={canPlayVideo ? 'opacity-0' : ''}
        />
      </Suspense>
    </div>
  );
};
