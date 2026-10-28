import type { Metadata } from 'next';
import { CatalogClient } from '@/components/catalog/CatalogClient';

export const metadata: Metadata = {
  title: 'Rutas con Sabor',
  description:
    'Catálogo completo de rutas e inmersiones gastronómicas en México: talleres de cocina, mercados, café, vino y queso con cocineras y productores locales.',
  alternates: { canonical: '/rutas' },
};

export default function RoutesPage() {
  return <CatalogClient />;
}
