'use client';

import { InteractiveProps, StaticProps } from '@/types/video';
import { VideoInfo } from '../info';
import { Preview } from '../preview';
import { Thumbnail } from '../thumbnail';

type Props = InteractiveProps | StaticProps;

export const VideoPlayer = (props: Props) => {
  const { mode, thumbnailUrl, title, author, views, uploadTime, videoUrl } =
    props;

  return (
    <div className="flex flex-col gap-2">
      {mode === 'interactive' ? (
        <Preview
          onVideoEnd={props.onVideoEnd}
          onVideoStart={props.onVideoStart}
          onVideoResume={props.onVideoResume}
          onVideoSeek={props.onVideoSeek}
          videoUrl={videoUrl}
          thumbnailUrl={thumbnailUrl}
        />
      ) : (
        <div className="flex flex-col rounded-lg md:p-2">
          <Thumbnail
            thumbnailUrl={thumbnailUrl}
            alt={title}
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
