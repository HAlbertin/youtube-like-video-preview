import { getProgressFromEvent } from '@/utils/time';
import debounce from 'debounce';
import { useState } from 'react';

type Props = {
  progress: number;
  onProgressUpdate?: (p: number) => void;
};

export const ProgressBar = ({ onProgressUpdate, progress }: Props) => {
  const [showTrackBall, setShowTrackBall] = useState(false);

  const debounceSet = debounce(() => setShowTrackBall(true), 1000);
  const onMouseLeave = () => {
    debounceSet.clear();
    setShowTrackBall(false);
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newProgress = getProgressFromEvent(e);
    onProgressUpdate && onProgressUpdate(newProgress);
  };

  return (
    <div
      className="relative w-full rounded-br-lg rounded-bl-lg z-20"
      onClick={onClick}
      onMouseOver={debounceSet.trigger}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute bottom-0 h-2 z-20 w-full rounded-br-lg rounded-bl-lg bg-secondary-color overflow-hidden">
        <div
          className="h-2 z-10 rounded-bl-lg bg-primary-color "
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* TODO: Add a MouseMove for better experience */}
      {showTrackBall && (
        <div
          className="absolute -bottom-3 h-4 w-4 -translate-y-1/2 transform rounded-full bg-primary-color z-50"
          style={{ left: `calc(${progress}% - 8px)` }}
        />
      )}
    </div>
  );
};
