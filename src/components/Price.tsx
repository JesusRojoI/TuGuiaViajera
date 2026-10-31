import type { Locale } from '@/types';

type PriceProps = {
  value: number;
  locale: Locale;
};

export function Price({ value, locale }: PriceProps) {
  const parts = new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).formatToParts(value);
  const decimalIndex = parts.findIndex((part) => part.type === 'decimal');
  const amount = parts
    .slice(0, decimalIndex)
    .map((part) => part.value)
    .join('');
  const cents = parts
    .slice(decimalIndex)
    .map((part) => part.value)
    .join('');

  return (
    <span className="whitespace-nowrap">
      MXN${amount}
      <span className="ml-px text-[0.68em] font-medium tabular-nums">{cents}</span>
    </span>
  );
}
