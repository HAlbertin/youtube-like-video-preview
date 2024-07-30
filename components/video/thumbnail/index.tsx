'use client';

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
    console.error(`Error loading image: ${thumbnailUrl}`);
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
        'inline-block h-[14rem] w-[21rem] rounded-lg object-cover opacity-100 sm:h-[14rem] sm:w-[21rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]',
        className,
      )}
      onError={onError}
    />
  );
};
