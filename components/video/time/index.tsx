type Props = {
  currentTime: number;
};

export const Time = ({ currentTime }: Props) => {
  // TODO: add an utils function to format time
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime - minutes * 60);
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className="absolute bottom-3 right-2 rounded-lg px-2 text-sm text-[#fff]"
    >
      {timeString}
    </div>
  );
};
