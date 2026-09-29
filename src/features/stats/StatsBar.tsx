import React from 'react';
import { CorporateStat } from '@/domain/entities';
import styles from './StatsBar.module.css';

interface StatsBarProps {
  stats: CorporateStat[];
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  return (
    <section className={styles.statsSection} aria-label="Indikator Kinerja Utama Korporasi">
      <div className={`container ${styles.statsContainer}`}>
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.id} className={styles.statCard}>
              <div className={styles.statValueWrapper}>
                <span className={`gradient-gold ${styles.statValue}`}>{item.value}</span>
              </div>
              <h3 className={styles.statLabel}>{item.label}</h3>
              <p className={styles.statDesc}>{item.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
