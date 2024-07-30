'use client';

import { memo, Suspense, useCallback, useState } from 'react';
import { Thumbnail } from '../thumbnail';

import { ProgressBar } from '../progress-bar';
import { Time } from '../time';
import {
  convertPercentageProgressToTime,
  convertVideoDurationToPercentageProgress,
} from '@/utils/time';
import { useVideo } from '@/hooks/use-video';
import { twMerge } from 'tailwind-merge';
import { Sound } from '../sound';

type Props = {
  videoUrl: string;
  thumbnailUrl: string;
  onVideoEnd?: () => void;
  onVideoStart?: () => void;
  onVideoResume?: () => void;
  onVideoSeek?: () => void;
};
export const Preview = memo(
  ({
    videoUrl,
    thumbnailUrl,
    onVideoEnd,
    onVideoStart,
    onVideoResume,
    onVideoSeek,
  }: Props) => {
    const {
      canPlayVideo,
      cannotPlayVideo,
      debounceSet,
      videoRef,
      manualUpdated,
      latestProgress,
      isMutedRef,
    } = useVideo({
      onVideoStart,
      onVideoResume,
    });

    // Track the progress to set into the progress bar
    const [progress, setProgress] = useState(0);

    const handleMouseLeave = () => {
      debounceSet.clear();
      cannotPlayVideo();
    };

    const onTimeUpdate = useCallback(
      () => {
        if (!videoRef.current) return;

        const currentProgress = convertVideoDurationToPercentageProgress(
          videoRef.current.currentTime,
          videoRef.current.duration,
        );

        setProgress(currentProgress);

        // Avoid saving 0 when video is being unloaded (e.g. mouse leave)
        if (videoRef.current.currentTime > 0)
          latestProgress.current = videoRef.current.currentTime;
      },
      // Disabling since videoRef is a ref and it's not going to change
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [latestProgress],
    );

    const onManualProgressUpdate = useCallback(
      (newProgress: number) => {
        if (!videoRef.current) return;

        const newTime = convertPercentageProgressToTime(
          newProgress,
          videoRef.current.duration,
        );

        // Update the video time
        videoRef.current.currentTime = newTime;

        // Update the latest progress to resume later (if needed)
        latestProgress.current = newTime;
        manualUpdated.current = true;

        // Update the progress bar UI
        setProgress(newProgress);

        // Callback video seek
        onVideoSeek && onVideoSeek();
      },
      // Disabling since videoRef is a ref and it's not going to change
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [latestProgress, onVideoSeek],
    );

    const onSoundClick = () => {
      if (!videoRef.current) return;

      videoRef.current.muted = !videoRef.current.muted;
    };

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
              muted={isMutedRef.current}
              playsInline
              className="h-[14rem] w-[21rem] rounded-lg object-cover sm:h-[14rem] sm:w-[21rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]"
              autoPlay={false}
              onEnded={onVideoEnd && onVideoEnd}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {canPlayVideo && (
              <>
                <Sound muted={videoRef.current?.muted} onClick={onSoundClick} />

                <Time currentTime={videoRef.current?.currentTime || 0} />

                <ProgressBar
                  progress={progress}
                  onProgressUpdate={onManualProgressUpdate}
                />
              </>
            )}
          </div>
        </Suspense>

        <Thumbnail
          thumbnailUrl={thumbnailUrl}
          // TODO: add a proper alt (maybe from the video title)
          alt="video thumbnail"
          className={twMerge(
            'delay-10 duration-50 absolute transition-all duration-300 ease-[cubic-bezier(.05,0,0,1)]',
            canPlayVideo ? 'opacity-0' : '',
          )}
        />
      </div>
    );
  },
);

Preview.displayName = 'Preview';
