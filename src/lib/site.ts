/** Single source for public contact details. */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@tuguiaviajera.com';

const rawPhone = (process.env.NEXT_PUBLIC_CONTACT_PHONE || '+52 1 55 5662 5469').trim();
export const CONTACT_PHONE_DISPLAY = rawPhone;
export const CONTACT_PHONE_HREF = rawPhone
  ? `tel:${rawPhone.replace(/[^\d+]/g, '')}`
  : '';
export const SITE_DOMAIN = 'tuguiaviajera.com';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  `https://${SITE_DOMAIN}`;
