'use client';

import React, { useState } from 'react';
import { BusinessUnit } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './ServicesSection.module.css';

interface ServicesSectionProps {
  businessUnits: BusinessUnit[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ businessUnits }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Semua Pilar Usaha' },
    { key: 'konstruksi', label: 'Infrastruktur & Konstruksi' },
    { key: 'energi', label: 'Energi Bersih Terbarukan' },
    { key: 'logistik', label: 'Logistik Maritim' },
    { key: 'teknologi', label: 'Rekayasa Industri' },
  ];

  const filteredUnits = activeCategory === 'all'
    ? businessUnits
    : businessUnits.filter((u) => u.category === activeCategory);

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'construction':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.iconSvg}>
            <path d="M2 22h20M4 22V7l5-5 5 5v15M14 7h6v15M9 6v1M9 10v1M9 14v1M9 18v1M17 11v1M17 15v1M17 19v1" />
          </svg>
        );
      case 'solar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.iconSvg}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        );
      case 'ship':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.iconSvg}>
            <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
            <path d="M4 17V8l8-4 8 4v9M12 4v13" />
          </svg>
        );
      case 'cpu':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.iconSvg}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        );
    }
  };

  return (
    <section id="lini-bisnis" className={`section-wrapper ${styles.servicesSection}`} aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          badge="PORTFOLIO BISNIS KORPORASI"
          title="Lini Usaha Terintegrasi"
          highlightText="Skala Nasional"
          description="Sinergi 4 divisi strategis untuk menjawab kebutuhan pembangunan fisik, kemandirian energi, dan kelancaran rantai distribusi Indonesia."
        />

        {/* Tab Filters */}
        <div className={styles.categoryFilters} role="tablist" aria-label="Kategori Lini Bisnis">
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`${styles.filterBtn} ${activeCategory === cat.key ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Units Grid */}
        <div className={styles.servicesGrid}>
          {filteredUnits.map((unit) => (
            <article key={unit.id} className={`glass-panel ${styles.serviceCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{renderIcon(unit.icon)}</div>
                <div className={styles.statChip}>
                  <span className={styles.chipVal}>{unit.statNumber}</span>
                  <span className={styles.chipLabel}>{unit.statLabel}</span>
                </div>
              </div>

              <h3 className={styles.serviceTitle}>{unit.title}</h3>
              <p className={styles.serviceSubtitle}>{unit.subtitle}</p>
              <p className={styles.serviceDesc}>{unit.description}</p>

              {/* Keunggulan Pengerjaan */}
              <div className={styles.highlightsWrapper}>
                <h4 className={styles.highlightsTitle}>Standar Keunggulan Eksekusi:</h4>
                <ul className={styles.highlightsList}>
                  {unit.keyHighlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lingkup Layanan */}
              <div className={styles.scopeWrapper}>
                <h4 className={styles.scopeTitle}>Cakupan Layanan:</h4>
                <div className={styles.scopePills}>
                  {unit.scopeServices.map((scope) => (
                    <span key={scope} className={styles.scopePill}>
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a href="#kontak-kemitraan" className={styles.serviceAction}>
                  <span>Konsultasi & Pengadaan Proyek</span>
                  <span className={styles.arrowIcon}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
