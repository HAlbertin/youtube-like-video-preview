import { Avatar } from '@/components/video/avatar';

export const SkeletonVideo = () => {
  return (
    <div className="flex flex-col animate-pulse gap-2">
      <div className="flex flex-col rounded-lg md:p-2">
        <div className="inline-block bg-secondary-color h-[14rem] w-[21rem] rounded-lg object-cover opacity-100 sm:h-[14rem] sm:w-[21rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]" />
      </div>

      <div className="flex flex-row gap-2 px-2 pb-2">
        <Avatar className="animate-pulse" />

        <div className="flex flex-1 flex-col gap-1">
          <div className="w-full h-8 animate-pulse rounded-lg bg-secondary-color" />

          <div className="animate-pulse bg-secondary-color" />

          <div className="flex flex-row gap-1">
            <div className="w-full h-[2rem] rounded-lg animate-pulse bg-secondary-color" />
            <div className="w-full h-[2rem] rounded-lg animate-pulse bg-secondary-color" />
          </div>
        </div>
      </div>
    </div>
  );
};
