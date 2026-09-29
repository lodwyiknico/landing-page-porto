'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  companyName: string;
}

export const Hero: React.FC<HeroProps> = ({ companyName }) => {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className="glow-orb-gold" aria-hidden="true" />
      <div className="glow-orb-blue" aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        {/* Top Kredibilitas Badge */}
        <div className={styles.badgeWrapper}>
          <span className="badge-corp">
            <span className="badge-dot-gold" />
            18+ TAHUN BERKARYA • ISO 9001, 14001, 45001 & SMK3 BENDERA EMAS
          </span>
        </div>

        {/* Semantic H1 untuk Google SEO */}
        <h1 id="hero-heading" className={styles.heroHeading}>
          Membangun Peradaban, Menghubungkan{' '}
          <span className="gradient-gold">Nusantara</span>
        </h1>

        <p className={styles.heroSubhead}>
          {companyName} memadukan keunggulan rekayasa sipil presisi, pelopor transisi energi bersih terbarukan,
          dan keandalan logistik maritim untuk mengakselerasi kedaulatan ekonomi Indonesia menuju masa depan berkelanjutan.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#lini-bisnis" className="btn-primary-corp">
            <span>Eksplorasi Lini Bisnis</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#tentang-kami" className="btn-secondary-corp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Profil Korporat & Visi</span>
          </a>
        </div>

        {/* Akreditasi Sertifikasi Bar */}
        <div className={styles.trustBar}>
          <span className={styles.trustLabel}>Standar Mutu, Lingkungan & K3 Internasional</span>
          <div className={styles.trustLogos}>
            <span className={styles.trustItem}>ISO 9001:2015 Mutu</span>
            <span className={styles.trustDivider} aria-hidden="true">•</span>
            <span className={styles.trustItem}>ISO 14001:2015 Lingkungan</span>
            <span className={styles.trustDivider} aria-hidden="true">•</span>
            <span className={styles.trustItem}>ISO 45001:2018 K3</span>
            <span className={styles.trustDivider} aria-hidden="true">•</span>
            <span className={styles.trustItem}>ISO 37001 SMAP</span>
            <span className={styles.trustDivider} aria-hidden="true">•</span>
            <span className={styles.trustItem}>SMK3 Kemenaker RI</span>
          </div>
        </div>

        {/* Visual Showcase Menara Kantor Pusat SCBD */}
        <div className={styles.previewContainer}>
          <div className={styles.previewWindow}>
            <div className={styles.windowHeader}>
              <div className={styles.windowAddress}>
                <span className={styles.flagIcon}>🇮🇩</span>
                <span>Kantor Pusat: Menara Satu Mahakarya, Kawasan SCBD Jakarta Selatan</span>
              </div>
              <div className={styles.statusIndicator}>
                <span className={styles.livePulse} />
                <span>OPERASIONAL AKTIF 24/7</span>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src="/images/corporate-hq.jpg"
                alt="Kantor Pusat PT Mahakarya Nusantara Holding di Menara Satu SCBD Jakarta"
                width={1200}
                height={675}
                priority
                className={styles.dashboardImg}
              />

              {/* Floating Chips */}
              <div className={`${styles.floatingCard} ${styles.floatLeft}`}>
                <div className={styles.floatIcon}>🏆</div>
                <div>
                  <div className={styles.floatVal}>Zero Accident</div>
                  <div className={styles.floatLabel}>Penghargaan K3 5 Tahun Beruntun</div>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatRight}`}>
                <div className={styles.floatIcon}>🌿</div>
                <div>
                  <div className={styles.floatVal}>280 MWp</div>
                  <div className={styles.floatLabel}>Portofolio Energi Bersih Hijau</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
