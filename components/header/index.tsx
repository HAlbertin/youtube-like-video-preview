import Link from 'next/link';

export const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex w-full flex-row justify-between bg-red-400 p-5">
      <Link href={'/'} className="text-[#fff]">
        Youtube-like Video Preview
      </Link>
    </div>
  );
};
