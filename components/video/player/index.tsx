'use client';

import { VideoInfo } from '../info';
import { Preview } from '../preview';
import { Thumbnail } from '../thumbnail';

type Props = {
  mode: 'interactive' | 'static';
  thumbnailUrl: string;
  title: string;
  author: string;
  views: string;
  uploadTime: string;
  videoUrl: string;
  onVideoEnd?: () => void;
  onVideoStart?: () => void;
  onVideoResume?: () => void;
  onVideoSeek?: () => void;
};

export const VideoPlayer = ({
  thumbnailUrl,
  title,
  author,
  views,
  uploadTime,
  videoUrl,
  mode,
  onVideoEnd,
  onVideoStart,
  onVideoResume,
  onVideoSeek,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {mode === 'interactive' ? (
        <Preview
          onVideoEnd={onVideoEnd}
          onVideoStart={onVideoStart}
          onVideoResume={onVideoResume}
          onVideoSeek={onVideoSeek}
          videoUrl={videoUrl}
          thumbnailUrl={thumbnailUrl}
        />
      ) : (
        <div className="flex flex-col rounded-lg md:p-2">
          <Thumbnail
            thumbnailUrl={thumbnailUrl}
            alt="video thumbnail"
            className="cursor-pointer"
          />
        </div>
      )}

      <VideoInfo
        author={author}
        title={title}
        uploadTime={uploadTime}
        views={views}
      />
    </div>
  );
};
