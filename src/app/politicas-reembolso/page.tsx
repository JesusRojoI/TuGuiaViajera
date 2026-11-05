import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Devoluciones y Reembolsos',
  alternates: { canonical: '/politicas-reembolso' },
};

export default function RefundPage() {
  return <LegalPage documentId="refunds" />;
}
