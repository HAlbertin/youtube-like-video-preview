export const convertSecondsToClockTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60) || 0;
  const sec = Math.floor(seconds - minutes * 60) || 0;
  const timeString = `${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  return timeString;
};

export const convertVideoDurationToPercentageProgress = (
  currentTime: number,
  duration: number,
) => (currentTime / duration) * 100 || 0;

export const getProgressFromEvent = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const newProgress = ((e.clientX - rect.left) / rect.width) * 100;
  return newProgress || 0;
};

export const convertPercentageProgressToTime = (
  progress: number,
  duration: number,
) => (progress / 100) * duration || 0;
