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
