import type { Metadata, Viewport } from 'next';
import { Caveat, Fraunces, Manrope } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import type { Locale } from '@/types';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://tuguiaviajera.com';

export function generateMetadata(): Metadata {
  const isEnglish = cookies().get('NEXT_LOCALE')?.value === 'en';
  const title = isEnglish
    ? 'Tu Guía Viajera · Taste authentic Mexico'
    : 'Tu Guía Viajera · Saborea el México auténtico';
  const description = isEnglish
    ? 'Culinary routes and immersions with traditional cooks, producers and centuries-old markets of Mexico. Taste authentic Mexico.'
    : 'Rutas e inmersiones gastronómicas con cocineras tradicionales, productores y mercados centenarios de México. Saborea el México auténtico.';
  const shortDescription = isEnglish
    ? 'Small routes to discover Mexico through its flavour.'
    : 'Pequeñas rutas para conocer México desde su sabor.';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s · Tu Guía Viajera',
    },
    description,
    keywords: [
      'rutas gastronómicas',
      'México',
      'cocineras tradicionales',
      'turismo gastronómico',
      'Oaxaca',
      'Puebla',
      'Yucatán',
      'Tu Guía Viajera',
    ],
    authors: [{ name: 'Tu Guía Viajera' }],
    creator: 'Tu Guía Viajera',
    openGraph: {
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_MX',
      url: siteUrl,
      siteName: 'Tu Guía Viajera',
      title,
      description: isEnglish
        ? 'Small routes to discover Mexico through its flavour. Traditional cooks, centuries-old markets and the roads of coffee, mezcal and cacao.'
        : 'Pequeñas rutas para conocer México desde su sabor. Cocineras tradicionales, mercados centenarios y caminos de café, mezcal y cacao.',
      images: [
        {
          url: '/images/hero-poster.jpg',
          width: 1536,
          height: 864,
          alt: 'Tu Guía Viajera',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: shortDescription,
      images: ['/images/hero-poster.jpg'],
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#0C3B35',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  const locale: Locale = cookieLocale === 'en' ? 'en' : 'es';

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${manrope.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers initialLocale={locale}>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
