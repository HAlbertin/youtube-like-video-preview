'use client';

import { VideoPlayer } from '@/components/video/player';
import { MOCK_VIDEOS } from '@/mock';

export default function Home() {
  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-center gap-2 p-5 lg:justify-start">
      {/* TODO: we can have a calc here to check how many videos we can show per row, but it's not necessary right now */}
      {MOCK_VIDEOS.map((video) => (
        // TODO: we can implement each callback with proper functions
        <VideoPlayer
          onVideoEnd={() => console.log('video ended')}
          onVideoStart={() => console.log('video started')}
          onVideoResume={() => console.log('video resumed')}
          onVideoSeek={() => console.log('video seeked')}
          key={video.id}
          mode="interactive"
          {...video}
        />

        // Or as "static" mode
        // <VideoPlayer key={video.id} mode="static" {...video} />
      ))}
    </div>
  );
}
