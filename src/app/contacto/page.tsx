import type { Metadata } from 'next';
import { ContactClient } from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbenos para diseñar una ruta gastronómica a la medida o resolver dudas sobre tu reserva. Respondemos en menos de 24 horas.',
  alternates: { canonical: '/contacto' },
};

export default function ContactPage() {
  return <ContactClient />;
}
