import React from 'react';
import { PartnerClient } from '@/domain/entities';
import styles from './PartnersSection.module.css';

interface PartnersSectionProps {
  partners: PartnerClient[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  return (
    <section className={styles.partnersSection} aria-label="Mitra Strategis & Klien Nasional">
      <div className={`container ${styles.partnersContainer}`}>
        <div className={styles.headerRow}>
          <span className="badge-corp">MITRA STRATEGIS & KLIEN UTAMA</span>
          <h3 className={styles.sectionTitle}>Dipercaya oleh Lembaga Negara & BUMN Strategis</h3>
        </div>

        <div className={styles.partnersGrid}>
          {partners.map((p) => (
            <div key={p.id} className={`glass-panel ${styles.partnerCard}`}>
              <div className={styles.partnerCategory}>{p.category}</div>
              <div className={styles.partnerName}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
