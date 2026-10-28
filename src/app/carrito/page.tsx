import type { Metadata } from 'next';
import { CartClient } from '@/components/cart/CartClient';

export const metadata: Metadata = {
  title: 'Tu carrito',
  description: 'Revisa las experiencias gastronómicas de tu carrito y finaliza tu reserva.',
  alternates: { canonical: '/carrito' },
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return <CartClient />;
}
