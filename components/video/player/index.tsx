import { VideoInfo } from '../info';
import { Preview } from '../preview';

type Props = {
  thumbnailUrl: string;
  title: string;
  author: string;
  views: string;
  uploadTime: string;
  videoUrl: string;
};
export const Player = ({
  thumbnailUrl,
  title,
  author,
  views,
  uploadTime,
  videoUrl,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Preview videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} />

      <VideoInfo
        author={author}
        title={title}
        uploadTime={uploadTime}
        views={views}
      />
    </div>
  );
};
