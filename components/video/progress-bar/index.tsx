type Props = {
  progress: number;
  onProgressUpdate?: (p: number) => void;
};

export const ProgressBar = ({ onProgressUpdate, progress }: Props) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newProgress = ((e.clientX - rect.left) / rect.width) * 100;
    onProgressUpdate && onProgressUpdate(newProgress);
  };

  return (
    <div
      onClick={onClick}
      className="progress-bar absolute bottom-0 h-2 w-full rounded-lg bg-gray-300"
    >
      <div
        className="absolute bottom-0 h-2 rounded-lg bg-blue-600"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute bottom-0 left-0 top-0 h-full w-full cursor-pointer" // Clickable area
        style={{ zIndex: 1 }}
      />

      {/* TODO: add ball, need to fix because it's too far to the right, needs to center */}
      {/* <div
        className="absolute -bottom-3 h-4 w-4 -translate-y-1/2 transform rounded-full bg-blue-600"
        style={{ left: `${progress}%` }}
      /> */}
    </div>
  );
};
