'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-jade-950 text-cream-100">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hacienda-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/images/hacienda-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-jade-950/85 via-jade-950/55 to-jade-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(234,182,76,0.14),transparent_35%),radial-gradient(circle_at_15%_85%,rgba(200,90,58,0.16),transparent_38%)]" />
      </div>

      <div className="pointer-events-none absolute right-[-18rem] top-[-18rem] h-[42rem] w-[42rem] rounded-full border border-cream-100/10" />
      <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[30rem] w-[30rem] rounded-full border border-cream-100/10" />
      <div className="pointer-events-none absolute bottom-24 left-[-10rem] h-72 w-72 rounded-full border border-maize-400/15" />

      <div className="container-tgv relative flex min-h-[100svh] flex-col justify-between pb-8 pt-32 md:pb-10 md:pt-40">
        <div className="grid flex-1 items-center gap-14 py-10 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-light animate-fade-up">{t('home.hero.eyebrow')}</p>

            <h1 className="mt-6 font-display text-[clamp(3rem,8.2vw,7.3rem)] font-medium leading-[0.92] tracking-[-0.05em] text-cream-50">
              <span className="block animate-fade-up">{t('home.hero.title1')}</span>
              <span className="relative mt-1 block animate-fade-up italic text-maize-300 [animation-delay:120ms]">
                {t('home.hero.title2')}
                <svg
                  viewBox="0 0 440 18"
                  className="absolute -bottom-2 left-0 h-4 w-[68%] text-clay-500/80"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4 12 C105 4 235 4 436 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl animate-fade-up text-[0.98rem] leading-relaxed text-cream-100/75 [animation-delay:220ms] md:text-[1.05rem]">
              {t('home.hero.description')}
            </p>

            <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:items-center">
              <Link href="/rutas" className="btn btn-maize">
                {t('home.hero.cta1')}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
              </Link>
              <Link href="/contacto" className="btn btn-outline-light">
                {t('home.hero.cta2')}
              </Link>
            </div>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream-100/55 [animation-delay:420ms]">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-maize-400" strokeWidth={1.7} />
                {t('home.hero.badge')}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-cream-100/30 sm:block" />
              <span>{t('home.hero.badgeCooks')}</span>
              <span className="hidden h-1 w-1 rounded-full bg-cream-100/30 sm:block" />
              <span>{t('home.hero.badgeGroups')}</span>
            </div>
          </div>

          <div className="hidden justify-end lg:col-span-5 lg:flex">
            <div className="relative w-full max-w-[21rem] rotate-2">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full border border-maize-400/25" />
              <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-clay-500/20 blur-xl" />
              <div className="relative rounded-[2rem] border border-cream-100/20 bg-cream-100/[0.08] p-5 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-maize-300">
                    {t('home.hero.noteTitle')}
                  </p>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream-100/20 text-cream-100/70">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </span>
                </div>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gallery/cocina.webp"
                    alt=""
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jade-950/50 to-transparent" />
                </div>
                <p className="script mt-4 text-[1.65rem] leading-[1.1] text-maize-200">
                  {t('home.hero.noteText')}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-cream-100/15 pt-3">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream-100/55">
                    {t('home.hero.noteSign')}
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-clay-300">
                    {products.length} / 16
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-5 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border border-maize-400/60 bg-jade-950/80 text-center backdrop-blur-md">
                <div>
                  <p className="font-display text-xl font-medium leading-none text-maize-300">100%</p>
                  <p className="mt-1 text-[0.45rem] font-bold uppercase leading-tight tracking-[0.15em] text-cream-100/65">
                    {t('home.hero.stampLine1')}
                    <br />
                    {t('home.hero.stampLine2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 border-t border-cream-100/15 pt-5">
          <div className="grid grid-cols-3 divide-x divide-cream-100/12">
            {[
              { value: `${products.length}`, label: t('home.hero.statRoutes') },
              { value: '16', label: t('home.hero.statStates') },
              { value: '100%', label: t('home.hero.statLocal') },
            ].map((stat) => (
              <div key={stat.label} className="px-3 first:pl-0 sm:px-6">
                <p className="font-display text-[1.8rem] font-medium leading-none text-cream-50 md:text-[2.4rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.55rem] font-bold uppercase leading-tight tracking-[0.16em] text-cream-100/50 md:text-[0.62rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-cream-100/40">
              {t('home.hero.scroll')}
            </p>
            <a
              href="#como"
              aria-label={t('home.hero.scroll')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/25 text-cream-100/70 transition-colors hover:border-maize-400/60 hover:text-maize-300"
            >
              <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
