import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Locale } from '@/i18n.config';
import Header from '@/components/header';
import { themeFlashFix } from '@/lib/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & PageProps
>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeFlashFix }}></script>
      </head>
      <body className={`${inter.className}`}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
