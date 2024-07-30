'use client';

import { memo, Suspense, useCallback, useRef, useState } from 'react';
import { Thumbnail } from '../thumbnail';

import { ProgressBar } from '../progress-bar';
import { Time } from '../time';
import {
  convertPercentageProgressToTime,
  convertVideoDurationToPercentageProgress,
} from '@/utils/time';
import { useVideo } from '@/hooks/use-video';

type Props = {
  videoUrl: string;
  thumbnailUrl: string;
};
export const Preview = memo(({ videoUrl, thumbnailUrl }: Props) => {
  const { canPlayVideo, cannotPlayVideo, debounceSet, videoRef } = useVideo();

  // Track if the progress was updated manually
  const manualUpdated = useRef(false);
  const latestProgress = useRef(0);

  // Track the progress to set into the progress bar
  const [progress, setProgress] = useState(0);

  const handleMouseLeave = () => {
    debounceSet.clear();
    cannotPlayVideo();
  };

  const onTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;

    const currentProgress = convertVideoDurationToPercentageProgress(
      videoRef.current.currentTime,
      videoRef.current.duration,
    );

    setProgress(currentProgress);

    // Avoid saving 0 when video is being unloaded (e.g. mouse leave)
    if (videoRef.current.currentTime > 0)
      latestProgress.current = videoRef.current.currentTime;
  }, [videoRef]);

  const onManualProgressUpdate = useCallback(
    (newProgress: number) => {
      if (!videoRef.current) return;

      const newTime = convertPercentageProgressToTime(
        newProgress,
        videoRef.current.duration,
      );
      videoRef.current.currentTime = newTime;
      latestProgress.current = newTime;
      manualUpdated.current = true;

      setProgress(newProgress);
    },
    [videoRef],
  );

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
            <>
              <Time currentTime={videoRef.current?.currentTime || 0} />

              <ProgressBar
                progress={progress}
                onProgressUpdate={onManualProgressUpdate}
              />
            </>
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
});

Preview.displayName = 'Preview';
