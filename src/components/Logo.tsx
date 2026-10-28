import Link from 'next/link';
import { cn } from '@/lib/utils';

export function LogoMark({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <rect
        x="2.5"
        y="2.5"
        width="59"
        height="59"
        rx="18"
        fill={light ? '#F6EFE2' : '#0C3B35'}
      />
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="14.5"
        fill="none"
        stroke={light ? '#0C3B35' : '#EAB64C'}
        strokeOpacity={light ? 0.22 : 0.38}
      />
      <path
        d="M12 51 C21 47 18.5 37.5 28 33.5 S42 35 47.5 20"
        fill="none"
        stroke={light ? '#0C3B35' : '#F6EFE2'}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="0.1 6.2"
      />
      <circle
        cx="47.5"
        cy="20"
        r="7.2"
        fill={light ? '#F6EFE2' : '#0C3B35'}
        stroke={light ? '#C85A3A' : '#EAB64C'}
        strokeWidth="2"
      />
      <circle cx="47.5" cy="20" r="2.9" fill="#C85A3A" />
      <g stroke={light ? '#C85A3A' : '#EAB64C'} strokeWidth="1.6" strokeLinecap="round">
        <path d="M17 13.5v-5" />
        <path d="M17 24.5v-5" />
        <path d="M11.5 19h5" />
        <path d="M17.5 19h5" />
      </g>
      <circle cx="17" cy="19" r="2.4" fill={light ? '#C85A3A' : '#EAB64C'} />
      <circle cx="51" cy="48" r="1.7" fill={light ? '#0C3B35' : '#F6EFE2'} opacity={light ? 0.45 : 0.75} />
      <circle cx="45" cy="51" r="1.2" fill={light ? '#0C3B35' : '#F6EFE2'} opacity={light ? 0.3 : 0.45} />
    </svg>
  );
}

export function Logo({
  light = false,
  compact = false,
  href = '/',
  className,
}: {
  light?: boolean;
  compact?: boolean;
  href?: string | null;
  className?: string;
}) {
  const content = (
    <span className={cn('flex items-center gap-2.5 md:gap-3', className)}>
      <LogoMark light={light} className="h-11 w-11 shrink-0 md:h-12 md:w-12" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'script -mb-1 text-[1.35rem] font-semibold md:text-[1.5rem]',
            light ? 'text-maize-300' : 'text-clay-500'
          )}
        >
          tu guía
        </span>
        <span
          className={cn(
            'font-display text-[1.35rem] font-semibold uppercase tracking-[0.2em] md:text-[1.5rem]',
            light ? 'text-cream-200' : 'text-jade-900'
          )}
        >
          Viajera
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1 text-[0.42rem] font-bold uppercase tracking-[0.33em]',
              light ? 'text-cream-200/70' : 'text-jade-600'
            )}
          >
            México a tu mesa
          </span>
        )}
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Tu Guía Viajera · Inicio" className="inline-flex">
      {content}
    </Link>
  );
}
