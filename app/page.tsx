import { Player } from '@/components/video/player';
import { MOCK_VIDEOS } from '@/mock';

export default function Home() {
  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-start gap-2 p-5">
      {MOCK_VIDEOS.map((video) => (
        <Player key={video.id} {...video} />
      ))}
    </div>
  );
}
