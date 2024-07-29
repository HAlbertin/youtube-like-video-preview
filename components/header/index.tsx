import Link from 'next/link';

export const Header = () => {
  return (
    <div className="fixed top-0 flex w-full flex-row justify-between bg-red-400 p-5">
      <Link href={'/'}>Youtube-like Video Preview</Link>
    </div>
  );
};
