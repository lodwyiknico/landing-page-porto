import React from 'react';
import { CompanyProfileInfo } from '@/domain/entities';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  company: CompanyProfileInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ company }) => {
  return (
    <section id="tentang-kami" className={`section-wrapper ${styles.aboutSection}`} aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          badge="PROFIL KORPORASI"
          title="Mendedikasikan Karya untuk"
          highlightText="Kemakmuran Indonesia"
          description="Didirikan sejak 2008, PT Mahakarya Nusantara Holding terus tumbuh menjadi pilar kemandirian infrastruktur dan transisi energi bersih di tanah air."
        />

        {/* Narrative & Vision Misi Grid */}
        <div className={`glass-panel ${styles.narrativePanel}`}>
          <div className={styles.visionCol}>
            <div className={styles.sectionBadge}>VISI KORPORASI</div>
            <blockquote className={styles.visionText}>
              “{company.vision}”
            </blockquote>

            <div className={styles.sectionBadge} style={{ marginTop: '2.5rem' }}>MISI STRATEGIS</div>
            <ul className={styles.missionList}>
              {company.missions.map((m, i) => (
                <li key={i} className={styles.missionItem}>
                  <span className={styles.missionNumber}>0{i + 1}</span>
                  <span className={styles.missionText}>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.historyCol}>
            <div className={styles.sectionBadge}>SEJARAH & REKAM JEJAK</div>
            <h3 className={styles.historyTitle}>18+ Tahun Integritas Tanpa Henti</h3>
            <p className={styles.historyParagraph}>
              Berawal dari kontraktor pondasi berat di Jakarta pada tahun 2008, Mahakarya Group telah mentransformasi diri menjadi konglomerasi industri terpadu. Portofolio kami kini mencakup jembatan bentang panjang berteknologi tinggi, pembangkit listrik tenaga surya (PLTS) skala utilitas, hingga armada logistik maritim yang menghubungkan kepulauan Indonesia.
            </p>
            <p className={styles.historyParagraph}>
              Dengan mengedepankan prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance), kepatuhan anti-penyuapan ISO 37001, dan komitmen keselamatan kerja (K3) tanpa cela, kami terus menjadi mitra terpercaya bagi kementerian, BUMN strategis, dan mitra penanaman modal dalam maupun luar negeri.
            </p>

            {/* Kantor Wilayah Grid */}
            <div className={styles.branchBox}>
              <h4 className={styles.branchTitle}>Jaringan Kantor & Operasional Wilayah:</h4>
              <ul className={styles.branchList}>
                {company.branchOffices.map((b, i) => (
                  <li key={i} className={styles.branchItem}>
                    <span className={styles.branchPin}>📍</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Nilai-Nilai Budaya Perusahaan (P-I-R-M-A) */}
        <div className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <span className="badge-corp">NILAI-NILAI UTAMA (P-I-R-M-A)</span>
            <h3 className={styles.valuesTitle}>Fondasi Karakter & Etika Kerja Insan Mahakarya</h3>
          </div>

          <div className={styles.valuesGrid}>
            {company.coreValues.map((val) => (
              <div key={val.keyword} className={`glass-panel ${styles.valueCard}`}>
                <div className={styles.valueKeyword}>{val.keyword}</div>
                <h4 className={styles.valueName}>{val.title}</h4>
                <p className={styles.valueDesc}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
