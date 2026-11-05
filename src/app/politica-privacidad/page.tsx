import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  alternates: { canonical: '/politica-privacidad' },
};

export default function PrivacyPage() {
  return <LegalPage documentId="privacy" />;
}
