'use client';

import { VideoPlayer } from '@/components/video/player';
import { MOCK_VIDEOS } from '@/mock';

export default function Home() {
  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-center gap-2 p-5 lg:justify-start">
      {MOCK_VIDEOS.map((video) => (
        <VideoPlayer
          onVideoEnd={() => console.log('video ended')}
          onVideoStart={() => console.log('video started')}
          onVideoResume={() => console.log('video resumed')}
          onVideoSeek={() => console.log('video seeked')}
          key={video.id}
          mode="interactive"
          {...video}
        />
      ))}
    </div>
  );
}
