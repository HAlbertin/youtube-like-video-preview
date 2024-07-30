'use client';

import { logError } from '@/utils/log';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  thumbnailUrl: string;
  alt: string;
  className?: string;
  fallbackUrl?: string;
};

export const Thumbnail = ({
  className,
  thumbnailUrl,
  fallbackUrl,
  alt,
}: Props) => {
  const [src, setSrc] = useState(thumbnailUrl);

  const onError = () => {
    logError(new Error(`Error loading image: ${thumbnailUrl}`));
    setSrc(fallbackUrl ?? '/images/placeholder.jpg');
  };

  return (
    <Image
      src={src}
      alt={alt}
      quality={75}
      width={416}
      height={224}
      className={twMerge(
        'inline-block default-video-size rounded-lg object-cover opacity-100',
        className,
      )}
      onError={onError}
    />
  );
};
