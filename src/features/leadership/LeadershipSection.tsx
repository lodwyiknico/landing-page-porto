import React from 'react';
import { LeadershipMember } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './LeadershipSection.module.css';

interface LeadershipSectionProps {
  leadership: LeadershipMember[];
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ leadership }) => {
  return (
    <section id="dewan-direksi" className={`section-wrapper ${styles.leadershipSection}`} aria-labelledby="leadership-heading">
      <div className="container">
        <SectionHeading
          badge="TATA KELOLA & KEPEMIMPINAN"
          title="Dipimpin Para Ahli"
          highlightText="Berpengalaman Luas"
          description="Didukung oleh Dewan Komisaris independen dan jajaran Direksi berintegritas tinggi dengan rekam jejak puluhan tahun memimpin proyek mega-infrastruktur nasional."
        />

        <div className={styles.leadersGrid}>
          {leadership.map((member) => (
            <article key={member.id} className={`glass-panel ${styles.leaderCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatarBadge}>{member.initials}</div>
                </div>
                <div className={styles.categoryTag}>
                  {member.category === 'komisaris' ? 'DEWAN KOMISARIS' : 'DEWAN DIREKSI'}
                </div>
              </div>

              <h3 className={styles.leaderName}>{member.name}</h3>
              <div className={styles.leaderRole}>{member.role}</div>
              <div className={styles.leaderEdu}>{member.education}</div>

              <p className={styles.leaderBio}>{member.bio}</p>

              <div className={styles.cardFooter}>
                <span className={styles.gcgTag}>✓ Lulus Uji Kelayakan & Kepatutan OJK</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
