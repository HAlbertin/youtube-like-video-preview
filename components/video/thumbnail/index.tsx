import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  thumbnailUrl: string;
  alt: string;
  className?: string;
};

export const Thumbnail = ({ className, thumbnailUrl, alt }: Props) => {
  const [src, setSrc] = useState(thumbnailUrl);

  const onError = () => {
    console.error(`Error loading image: ${thumbnailUrl}`);
    setSrc('/placeholder.jpg');
  };

  return (
    <Image
      src={src}
      alt={alt}
      quality={75}
      width={416}
      height={224}
      className={twMerge(
        'delay-10 duration-50 absolute inline-block h-[14rem] w-[26rem] rounded-lg object-cover opacity-100 transition-all duration-300 ease-[cubic-bezier(.05,0,0,1)] sm:h-[14rem] sm:w-[26rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]',
        className,
      )}
      onError={onError}
    />
  );
};
