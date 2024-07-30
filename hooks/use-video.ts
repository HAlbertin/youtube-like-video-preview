import debounce from 'debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook responsible for handling video playback.
 * @param onVideoStart - Callback to be called when the video starts playing.
 * @param onVideoResume - Callback to be called when the video resumes playing.
 */
type Props = Partial<{
  onVideoStart?: () => void;
  onVideoResume?: () => void;
}>;

export const useVideo = ({ onVideoStart, onVideoResume }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Based on: https://github.com/facebook/react/issues/10389#issuecomment-1601018277
  const isMutedRef = useRef(true);

  // Track the latest progress to resume the video from the same position
  const latestProgress = useRef(0);
  // Track if the progress was updated manually
  const manualUpdated = useRef(false);

  const [canPlayVideo, setCanPlayVideo] = useState(false);

  const debounceSet = debounce(() => setCanPlayVideo(true), 200);
  const cannotPlayVideo = () => setCanPlayVideo(false);

  const playVideo = useCallback(
    async (startPosition?: number) => {
      try {
        if (!videoRef.current) return;

        if (startPosition) {
          videoRef.current.currentTime = startPosition;
          // Callback video resume
          onVideoResume && onVideoResume();
        }

        await videoRef.current.play();

        // Callback video start (only if there aren't manually set start position)
        !startPosition && onVideoStart && onVideoStart();
      } catch (error) {
        console.error('Error playing video', error);
      }
    },
    [onVideoResume, onVideoStart],
  );

  const pauseVideo = useCallback(() => {
    try {
      if (!videoRef.current) return;

      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    } catch (error) {
      console.error('Error pausing video', error);
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    canPlayVideo
      ? playVideo(manualUpdated.current ? latestProgress.current : 0)
      : pauseVideo();
  }, [canPlayVideo, pauseVideo, playVideo]);

  return {
    videoRef,
    canPlayVideo,
    setCanPlayVideo,
    debounceSet,
    cannotPlayVideo,
    latestProgress,
    playVideo,
    manualUpdated,
    isMutedRef,
  };
};
