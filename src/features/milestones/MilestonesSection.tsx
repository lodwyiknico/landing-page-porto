import React from 'react';
import { CompanyMilestone } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './MilestonesSection.module.css';

interface MilestonesSectionProps {
  milestones: CompanyMilestone[];
}

export const MilestonesSection: React.FC<MilestonesSectionProps> = ({ milestones }) => {
  return (
    <section id="rekam-jejak" className={`section-wrapper ${styles.milestonesSection}`} aria-labelledby="milestones-heading">
      <div className="container">
        <SectionHeading
          badge="SEJARAH & REKAM JEJAK"
          title="Perjalanan Bertumbuh"
          highlightText="Membangun Negeri"
          description="Evolusi strategis PT Mahakarya Nusantara Holding dari kontraktor spesialis hingga menjadi konglomerasi industri modern berstandar internasional."
        />

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} aria-hidden="true" />
          
          <div className={styles.timelineList}>
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`${styles.timelineNode} ${isEven ? styles.nodeLeft : styles.nodeRight}`}
                >
                  <div className={styles.nodeDot}>
                    <span className={styles.dotInner} />
                  </div>

                  <div className={`glass-panel ${styles.nodeCard}`}>
                    <div className={styles.cardHeader}>
                      <span className={styles.yearBadge}>{item.year}</span>
                      {item.highlightBadge && (
                        <span className={styles.highlightBadge}>{item.highlightBadge}</span>
                      )}
                    </div>
                    <h3 className={styles.nodeTitle}>{item.title}</h3>
                    <p className={styles.nodeDesc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
