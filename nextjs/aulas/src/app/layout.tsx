import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'B7 Web - s%',
    default: 'B7 Web - NextJS',
  },
  description: 'B7 Web - NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} body bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
