import { privacyDocument } from './privacy';
import { refundsDocument } from './refunds';
import { termsDocument } from './terms';
import type { LegalDocument, LegalDocumentId } from './shared';

export const legalDocuments: Record<LegalDocumentId, LegalDocument> = {
  privacy: privacyDocument,
  terms: termsDocument,
  refunds: refundsDocument,
};

export type { LegalDocument, LegalDocumentId } from './shared';
