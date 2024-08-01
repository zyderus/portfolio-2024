import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Locale } from '@/i18n.config';
import { themeFlashFix } from '@/lib/theme';
import Header from '@/components/layout/header';
import ApplyCssClasses from '@/components/layout/apply-css-classes';
import Footer from '@/components/layout/footer';
import { getDictionary } from '@/lib/dictionary';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const defaultTitle = 'Rustam Ziyodov | Portfolio';
const defaultDescription =
  'Discover Rustam Ziyodov portfolio, showcasing his extensive experience as a Software Engineer. Rustam specializes in developing innovative web applications with Next.js, TypeScript, JavaScript, Nest.js, Express.js, AWS, SQL, MongoDB, and Tailwind CSS. Explore his projects, skills, and professional journey.';

export interface PageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    intl: { seo },
  } = await getDictionary(params.lang);

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    authors: { name: 'Rustam Ziyodov' },
    robots: 'index, follow',
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
      url: `https://rystam.com/${params.lang}`,
      siteName: 'Rustam Ziyodov',
      images: [
        {
          url: 'https://rystam.com/demo/portfolio-2024.webp',
          width: 1200,
          height: 630,
          alt: seo?.title || defaultTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rustamziyodov',
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
      images: ['https://rystam.com/demo/portfolio-2024.webp'],
    },
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
      <body
        className={`scrollbar-regular min-h-screen grid grid-rows-[auto_1fr_auto] ${inter.className}`}
      >
        <ApplyCssClasses />
        <Header lang={params.lang} />
        <main>
          {children}
          <SpeedInsights />
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
