import { type Locale, i18n } from '@/i18n.config';
import Link from 'next/link';

type LinkIntlProps = {
  href: string;
  lang: Locale;
  children: React.ReactNode;
  [key: string]: any;
};

export default function LinkIntl({ href, lang, ...props }: LinkIntlProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return <Link href={path} {...props} />;
}
