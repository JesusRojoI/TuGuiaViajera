/**
 * Single source for public contact details. Set NEXT_PUBLIC_CONTACT_PHONE to
 * the real number to show phone links; when it is empty those entries are
 * hidden instead of displaying a fake number.
 */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@tuguiaviajera.com';

const rawPhone = (process.env.NEXT_PUBLIC_CONTACT_PHONE || '').trim();
export const CONTACT_PHONE_DISPLAY = rawPhone;
export const CONTACT_PHONE_HREF = rawPhone
  ? `tel:${rawPhone.replace(/[^\d+]/g, '')}`
  : '';
export const SITE_DOMAIN = 'tuguiaviajera.com';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  `https://${SITE_DOMAIN}`;
