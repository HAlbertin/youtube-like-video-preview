import { NoSoundIcon, SoundIcon } from '@/components/icons';
import { useState } from 'react';

type Props = {
  onClick: () => void;
  muted?: boolean;
};

export const Sound = ({ onClick, muted = true }: Props) => {
  const [isMuted, setIsMuted] = useState(muted);

  const onIconClick = () => {
    setIsMuted((prev) => !prev);
    onClick();
  };

  return (
    <div
      onClick={onIconClick}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="absolute bottom-12 right-2 z-10 flex h-8 w-8 items-center rounded-full p-2"
    >
      {isMuted ? <NoSoundIcon /> : <SoundIcon />}
    </div>
  );
};
