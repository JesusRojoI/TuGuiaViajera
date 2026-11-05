'use client';

import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  legalDocuments,
  type LegalDocumentId,
} from '@/data/legal';

export function LegalPage({ documentId }: { documentId: LegalDocumentId }) {
  const { locale, t } = useLanguage();
  const legalDocument = legalDocuments[documentId];

  return (
    <>
      <section className="relative overflow-hidden bg-jade-950 pb-14 pt-32 text-cream-100 md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(234,182,76,0.14),transparent_38%),radial-gradient(circle_at_10%_85%,rgba(200,90,58,0.16),transparent_40%)]" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-cream-100/10" />
        <div className="container-tgv relative">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-100/20 bg-cream-100/5 text-maize-300">
            <FileText className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6.5vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.045em] text-cream-50">
            {legalDocument.title[locale]}
          </h1>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-tgv">
          <article className="mx-auto max-w-3xl rounded-[2rem] border border-jade-900/10 bg-cream-50 px-6 py-10 shadow-soft md:px-12 md:py-14">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-jade-900/10 bg-jade-50 px-3 py-1 text-jade-800">
                <FileText className="h-3.5 w-3.5" strokeWidth={1.8} />
                {t('common.brand')}
              </span>
              <span>
                {t('legal.updated')}: {legalDocument.updated[locale]}
              </span>
            </div>

            <div className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-ink/80">
              {legalDocument.intro.map((text, index) => (
                <p key={index}>{text[locale]}</p>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {legalDocument.sections.map((section, sectionIndex) => (
                <section key={sectionIndex}>
                  <h2 className="font-display text-[1.45rem] font-medium leading-snug tracking-[-0.02em] text-jade-950 md:text-[1.65rem]">
                    {section.heading[locale]}
                  </h2>
                  <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-ink/80">
                    {section.blocks.map((block, blockIndex) => {
                      if (block.kind === 'subheading') {
                        return (
                          <h3
                            key={blockIndex}
                            className="pt-2 text-[0.95rem] font-bold text-jade-900"
                          >
                            {block.text[locale]}
                          </h3>
                        );
                      }

                      if (block.kind === 'list') {
                        return (
                          <ul
                            key={blockIndex}
                            className="list-disc space-y-2 pl-5 marker:text-clay-400"
                          >
                            {block.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="pl-1">
                                {item[locale]}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return <p key={blockIndex}>{block.text[locale]}</p>;
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-jade-900/10 pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-jade-900 transition-colors hover:text-clay-600"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
                {t('legal.back')}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
