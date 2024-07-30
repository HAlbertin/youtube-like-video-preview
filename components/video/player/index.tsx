'use client';

import { InteractiveProps, StaticProps } from '@/types/video';
import { VideoInfo } from '../info';
import { Preview } from '../preview';
import { Thumbnail } from '../thumbnail';

type Props = InteractiveProps | StaticProps;

/**
 * Video Player component that can be used in interactive (preview video) or static mode (only thumbnails)
 * TODO: VideoPlayer is not a good name for now, we can rename it to VideoCard or something else
 */
export const VideoPlayer = (props: Props) => {
  const { mode, thumbnailUrl, title, author, views, uploadTime, videoUrl } =
    props;

  const isInteractive = mode === 'interactive';

  return (
    <div className="delay-50 hover:bg-hover-color flex flex-col gap-2 rounded-lg transition ease-in-out hover:cursor-pointer">
      {isInteractive ? (
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
