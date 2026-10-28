import axios from 'axios';

export interface EtominPaymentInput {
  amount: number;
  currency?: string;
  orderId: string;
  card: {
    number: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
  };
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    address2?: string;
    city: string;
    state: string;
    postalCode: string;
    country?: string;
    company?: string;
  };
  metadata?: {
    ip?: string;
    notes?: string;
  };
}

export interface EtominPaymentResult {
  success: boolean;
  status: string;
  orderId?: string;
  transactionId?: string;
  reference?: string;
  error?: 'not_configured' | 'auth_error' | 'token_error' | 'payment_error';
  details?: string;
}

const API_URL = process.env.ETOMIN_BASE_URL || 'https://pagos.etomin.com/api/v1';

const etominClient = axios.create({
  baseURL: API_URL,
  // El sandbox de Etomin puede tardar ~30 s en autorizar un cargo; con 30 s
  // exactos la petición se cortaba justo antes de recibir APPROVED.
  timeout: 75000,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export function isEtominConfigured() {
  return Boolean(process.env.ETOMIN_USER && process.env.ETOMIN_PASSWORD);
}

function normalizeYear(year: string | number): string {
  const str = String(year).trim().replace(/\D/g, '');
  if (str.length === 4) return str.slice(-2);
  if (str.length === 2) return str;
  if (str.length === 1) return str.padStart(2, '0');
  return str.slice(-2).padStart(2, '0');
}

function normalizeMonth(month: string | number): string {
  const str = String(month).trim().replace(/\D/g, '');
  return str.padStart(2, '0');
}

async function getAuthToken(): Promise<string> {
  const { data } = await etominClient.post('/signin', {
    email: process.env.ETOMIN_USER,
    password: process.env.ETOMIN_PASSWORD,
  });

  if (!data?.authToken) throw new Error('auth_failed');
  return data.authToken as string;
}

async function tokenizeCard(token: string, input: EtominPaymentInput): Promise<string> {
  const { data } = await etominClient.post(
    '/card/tokenizer',
    {
      cardData: {
        cardNumber: input.card.number.replace(/\s/g, ''),
        cardholderName: input.card.name,
        expirationYear: normalizeYear(input.card.year),
        expirationMonth: normalizeMonth(input.card.month),
      },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!data?.cardNumberToken) throw new Error('token_failed');
  return data.cardNumberToken as string;
}

/**
 * Processes a card payment through Etomin:
 * 1. authenticate, 2. tokenize the card, 3. execute the sale.
 * Card data is only used server-side and never logged.
 */
export async function processEtominPayment(input: EtominPaymentInput): Promise<EtominPaymentResult> {
  if (!isEtominConfigured()) {
    return {
      success: false,
      status: 'not_configured',
      error: 'not_configured',
      details: 'Etomin credentials are not configured.',
    };
  }

  let stage: 'auth' | 'tokenize' | 'sale' = 'auth';

  try {
    const authToken = await getAuthToken();

    stage = 'tokenize';
    const cardToken = await tokenizeCard(authToken, input);

    stage = 'sale';
    const currency = (input.currency || 'MXN').toUpperCase();
    const currencyCode = currency === 'USD' ? '840' : '484';

    const { data } = await etominClient.post(
      '/sale',
      {
        amount: Number(input.amount),
        currency: currencyCode,
        reference: input.orderId,
        customerInformation: {
          firstName: input.customer.firstName,
          lastName: input.customer.lastName,
          email: input.customer.email,
          phone1: input.customer.phone,
          address1: input.customer.address,
          address2: input.customer.address2 || '',
          city: input.customer.city,
          state: input.customer.state,
          postalCode: input.customer.postalCode,
          country: input.customer.country || 'MX',
          company: input.customer.company || '',
          ip: input.metadata?.ip || '127.0.0.1',
        },
        cardData: {
          cardNumberToken: cardToken,
          cvv: input.card.cvv,
        },
      },
      { headers: { Authorization: `Bearer ${authToken}` } }
    );

    const isApproved = String(data?.status || '').toUpperCase() === 'APPROVED';

    return {
      success: isApproved,
      status: data?.status || 'unknown',
      orderId: data?.orderId,
      reference: data?.reference,
      transactionId: data?.transactionId,
    };
  } catch (error) {
    const response = (error as { response?: { data?: { message?: string; error?: string } } }).response;
    const details = response?.data?.message || response?.data?.error || (error as Error).message;

    return {
      success: false,
      status: 'error',
      error: stage === 'auth' ? 'auth_error' : stage === 'tokenize' ? 'token_error' : 'payment_error',
      details,
    };
  }
}
