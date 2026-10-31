'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export function RouteStoryCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-cream-200 py-16 md:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full border border-jade-900/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full border border-clay-500/20" />

      <div className="container-tgv relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <Reveal className="max-w-2xl">
          <p className="script text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.1] text-jade-900">
            {t('home.routeStory.line1')}
            <br />
            <span className="text-clay-600">{t('home.routeStory.line2')}</span>
          </p>
        </Reveal>
        <Reveal delay={1} className="shrink-0">
          <Link href="/contacto" className="btn btn-clay">
            {t('home.routeStory.cta')}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}