'use client';

import { MOCK_VIDEOS } from '@/mock';
import { VideoPlayer } from '../player';

export const VideoList = () => {
  /* TODO: we can have a calc here to check how many videos we can show per row, but it's not necessary right now */
  return (
    <div className="mt-[--header-height] flex flex-row flex-wrap justify-center gap-2 p-5 lg:justify-start">
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
};
