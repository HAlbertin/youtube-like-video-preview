import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { twMerge } from 'tailwind-merge';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Youtube-like Video Preview',
  description: 'A Youtube-like video preview list',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(roboto.className, 'bg-background')}>
        <Header />

        {children}
      </body>
    </html>
  );
}
