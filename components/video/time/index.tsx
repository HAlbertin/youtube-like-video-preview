import { convertSecondsToClockTime } from '@/utils/time';

type Props = {
  currentTime: number;
};

export const Time = ({ currentTime }: Props) => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="absolute bottom-3 right-2 rounded-lg px-2 text-sm text-secondary-color"
    >
      {convertSecondsToClockTime(currentTime)}
    </div>
  );
};
