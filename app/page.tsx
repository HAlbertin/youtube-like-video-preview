import { Player } from '@/components/video/player';
import { MOCK_VIDEOS } from '@/mock';

export default function Home() {
  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-center gap-2 p-5 lg:justify-start">
      {MOCK_VIDEOS.map((video) => (
        <Player key={video.id} {...video} />
      ))}
    </div>
  );
}
