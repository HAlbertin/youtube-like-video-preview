type Mode = 'interactive' | 'static';

type CommonProps = {
  mode: Mode;
  thumbnailUrl: string;
  title: string;
  author: string;
  views: string;
  uploadTime: string;
  videoUrl: string;
};

export type InteractiveProps = CommonProps & {
  mode: 'interactive';
  onVideoEnd: () => void;
  onVideoStart: () => void;
  onVideoResume: () => void;
  onVideoSeek: () => void;
};

export type StaticProps = CommonProps & {
  mode: 'static';
};

// TODO: generally this type comes from Swagger or other API documentation
export interface VideoProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}
