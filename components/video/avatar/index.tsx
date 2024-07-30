import { twMerge } from 'tailwind-merge';

// TODO: receive avatar as a prop, or use a default one if not provided
type Props = {
  className?: string;
};

export const Avatar = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        'bg-secondary-color h-10 w-10 rounded-full',
        className,
      )}
    />
  );
};
