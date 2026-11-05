import type { Localized } from '@/types';

export type LegalDocumentId = 'privacy' | 'terms' | 'refunds';

export interface LegalParagraph {
  kind: 'paragraph';
  text: Localized;
}

export interface LegalList {
  kind: 'list';
  items: Localized[];
}

export interface LegalSubheading {
  kind: 'subheading';
  text: Localized;
}

export type LegalBlock = LegalParagraph | LegalList | LegalSubheading;

export interface LegalSection {
  heading: Localized;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: Localized;
  updated: Localized;
  intro: Localized[];
  sections: LegalSection[];
}

export const paragraph = (es: string, en: string): LegalParagraph => ({
  kind: 'paragraph',
  text: { es, en },
});

export const bullets = (es: string[], en: string[]): LegalList => ({
  kind: 'list',
  items: es.map((text, index) => ({ es: text, en: en[index] })),
});

export const subheading = (es: string, en: string): LegalSubheading => ({
  kind: 'subheading',
  text: { es, en },
});

export const section = (
  headingEs: string,
  headingEn: string,
  ...blocks: LegalBlock[]
): LegalSection => ({
  heading: { es: headingEs, en: headingEn },
  blocks,
});
