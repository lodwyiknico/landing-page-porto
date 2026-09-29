import React from 'react';
import Image from 'next/image';
import { LandmarkProject } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  projects: LandmarkProject[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="proyek-strategis" className={`section-wrapper ${styles.projectsSection}`} aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          badge="PORTOFOLIO KARYA UNGGULAN"
          title="Mahakarya Monumental di"
          highlightText="Seluruh Indonesia"
          description="Bukti dedikasi perseroan dalam merampungkan proyek strategis nasional, fasilitas energi bersih skala masif, dan gedung hijau bersertifikasi internasional."
        />

        <div className={styles.projectsList}>
          {projects.map((proj, idx) => (
            <article key={proj.id} className={`glass-panel ${styles.projectCard} ${idx % 2 === 1 ? styles.cardReversed : ''}`}>
              {/* Image side */}
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={proj.image}
                    alt={proj.name}
                    width={700}
                    height={440}
                    className={styles.projectImg}
                  />
                  <div className={styles.categoryBadge}>{proj.category}</div>
                </div>
              </div>

              {/* Content side */}
              <div className={styles.contentCol}>
                <div className={styles.metaRow}>
                  <span className={styles.locationTag}>📍 {proj.location}</span>
                  <span className={styles.yearTag}>Tahun Selesai: {proj.yearCompleted}</span>
                </div>

                <h3 className={styles.projectName}>{proj.name}</h3>

                <div className={styles.clientBox}>
                  <span className={styles.clientLabel}>Pemberi Tugas / Klien:</span>
                  <span className={styles.clientVal}>{proj.client}</span>
                </div>

                <p className={styles.projectDesc}>{proj.description}</p>

                {/* Impact Metrics */}
                <div className={styles.metricsGrid}>
                  {proj.impactMetrics.map((m, i) => (
                    <div key={i} className={styles.metricItem}>
                      <div className={styles.metricVal}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                  <div className={styles.metricItem}>
                    <div className={styles.metricVal}>{proj.investmentScale}</div>
                    <div className={styles.metricLabel}>Nilai Investasi Proyek</div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a href="#kontak-kemitraan" className="btn-secondary-corp" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
                    <span>Permohonan Studi Kelayakan Serupa</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
