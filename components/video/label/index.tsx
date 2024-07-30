import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export const VideoLabel = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <p
      className={twMerge(
        'truncate whitespace-normal text-sm text-text-secondary',
        className,
      )}
    >
      {children}
    </p>
  );
};
