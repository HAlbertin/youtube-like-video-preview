import { MOCK_VIDEOS } from '@/mock';

export default function Home() {
  console.log('videos', MOCK_VIDEOS);

  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-start gap-2 p-5">
      {MOCK_VIDEOS.map((video) => (
        <div
          key={video.id}
          className="xs:w-[26rem] flex flex-col sm:w-[26rem] md:w-[24rem] lg:w-[20rem]"
        >
          <div className="flex flex-col gap-2">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="inline-block h-[14rem] w-[26rem] rounded-lg object-cover sm:h-[14rem] sm:w-[26rem] md:h-[12rem] md:w-[24rem] lg:h-[11rem] lg:w-[20rem]"
            />

            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <div className="h-10 w-10 rounded-full bg-white" />
              </div>

              <div className="flex flex-1 flex-col">
                <p className="max-w-[16rem] truncate whitespace-normal text-[16px] font-bold text-slate-50">
                  {video.title}
                </p>
                <p className="truncate whitespace-normal text-sm text-slate-400">
                  {video.author}
                </p>
                <div className="flex flex-row gap-1">
                  <p className="truncate whitespace-normal text-sm text-slate-400">
                    {video.views} views -
                  </p>
                  <p className="truncate whitespace-normal text-sm text-slate-400">
                    {video.uploadTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
