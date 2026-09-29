'use client';

import React, { useState } from 'react';
import { CompanyFAQ } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './FAQSection.module.css';

interface FAQSectionProps {
  faqs: CompanyFAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tata-kelola-faq" className={`section-wrapper ${styles.faqSection}`} aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeading
          badge="PUSAT INFORMASI & TATA KELOLA"
          title="Pertanyaan Umum Seputar"
          highlightText="Tata Kelola & Kemitraan"
          description="Transparansi informasi seputar legalitas perusahaan, akreditasi mutu & K3, mekanisme pengadaan vendor, dan keterbukaan publik."
        />

        <div className={styles.faqList}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`glass-panel ${styles.faqCard} ${isOpen ? styles.cardOpen : ''}`}>
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  id={`question-${faq.id}`}
                >
                  <span className={styles.questionText}>
                    <span className={styles.categoryTag}>{faq.category}</span>
                    <span className={styles.qTitle}>{faq.question}</span>
                  </span>
                  <span className={`${styles.iconIndicator} ${isOpen ? styles.iconOpen : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`question-${faq.id}`}
                  className={`${styles.answerWrapper} ${isOpen ? styles.answerExpanded : ''}`}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
