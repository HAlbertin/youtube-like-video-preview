import { Avatar } from '../avatar';
import { VideoLabel } from '../label';

type Props = {
  title: string;
  author: string;
  views: string;
  uploadTime: string;
};

// TODO: better component here, maybe create a new for the avatar and another for the text
export const VideoInfo = ({ author, title, uploadTime, views }: Props) => {
  return (
    <div className="flex flex-row gap-2 px-2 pb-2">
      <Avatar />

      <div className="flex flex-1 flex-col">
        <VideoLabel className="max-w-[16rem] text-[16px] font-bold text-secondary-color">
          {title}
        </VideoLabel>

        <VideoLabel>{author}</VideoLabel>

        <div className="flex flex-row gap-1">
          <VideoLabel>{views} views -</VideoLabel>
          <VideoLabel>{uploadTime}</VideoLabel>
        </div>
      </div>
    </div>
  );
};
