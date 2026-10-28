'use client';

import { useI18n } from '@/lib/i18n';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = 'dark',
  compact = false,
  className = '',
}: BrandLogoProps) {
  const { t } = useI18n();

  return (
    <span
      className={`brand-logo brand-logo--${variant} ${
        compact ? 'brand-logo--compact' : ''
      } ${className}`}
      aria-label={t('common.brand')}
    >
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none">
          <rect className="bm-bg" x="1" y="1" width="62" height="62" rx="18" />
          <rect
            className="bm-inner"
            x="5.5"
            y="5.5"
            width="53"
            height="53"
            rx="14.5"
          />
          <path
            className="bm-route"
            d="M14 47c7-3.5 5.5-11.5 12.5-14.5S39 34 43 24.5 49 17 50 16"
            strokeDasharray="0.1 5.2"
          />
          <circle className="bm-ring" cx="50" cy="16.5" r="6.4" />
          <circle className="bm-dot" cx="50" cy="16.5" r="2.5" />
          <path
            className="bm-star"
            d="M20 15.5v5M17.5 18h5M20.4 18h5"
            strokeLinecap="round"
          />
          <circle className="bm-compass" cx="20" cy="18" r="2.1" />
          <circle className="bm-speck" cx="48" cy="47" r="1.4" />
          <circle className="bm-speck bm-speck--soft" cx="42" cy="51" r="1" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-type">
          <span className="brand-script">{t('common.brandWord1')}</span>
          <span className="brand-name">{t('common.brandWord2')}</span>
          <span className="brand-tagline">{t('common.tagline')}</span>
        </span>
      )}
    </span>
  );
}
