import debounce from 'debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook responsible for handling video playback.
 */
export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  const debounceSet = debounce(() => setCanPlayVideo(true), 200);
  const cannotPlayVideo = () => setCanPlayVideo(false);

  const playVideo = useCallback(async (startPosition?: number) => {
    try {
      if (!videoRef.current) return;

      if (startPosition) videoRef.current.currentTime = startPosition;

      await videoRef.current.play();
    } catch (error) {
      console.error('Error playing video', error);
    }
  }, []);

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

    canPlayVideo ? playVideo() : pauseVideo();
  }, [canPlayVideo, pauseVideo, playVideo]);

  return {
    videoRef,
    canPlayVideo,
    setCanPlayVideo,
    debounceSet,
    cannotPlayVideo,
  };
};
