import React from 'react';
import { CompanyProfileInfo } from '@/domain/entities';
import styles from './Footer.module.css';

interface FooterProps {
  company: CompanyProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ company }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerContainer}`}>
        {/* Top Footer Grid */}
        <div className={styles.topGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.logoSvg}>
                  <path
                    d="M12 2L3 8L12 14L21 8L12 2Z"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 13L12 19L21 13"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className={styles.brandName}>
                MAHAKARYA <span className={styles.goldText}>GROUP</span>
              </span>
            </div>
            <p className={styles.brandDesc}>{company.tagline}</p>
            <div className={styles.legalName}>{company.name} ({company.legalEntity})</div>

            <div className={styles.socialRow}>
              <a
                href={company.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Resmi"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href={company.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Resmi"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href={company.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel Resmi"
                className={styles.socialLink}
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Col 2: Lini Bisnis */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Lini Bisnis</h4>
            <ul className={styles.linkList}>
              <li><a href="#lini-bisnis">Infrastruktur & Rekayasa Sipil</a></li>
              <li><a href="#lini-bisnis">Energi Bersih Terbarukan (PLTS)</a></li>
              <li><a href="#lini-bisnis">Rantai Pasok Logistik Maritim</a></li>
              <li><a href="#lini-bisnis">Rekayasa & Otomasi Industri</a></li>
              <li><a href="#proyek-strategis">Portofolio Proyek Unggulan</a></li>
            </ul>
          </div>

          {/* Col 3: Tata Kelola & Korporasi */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Korporasi & Tata Kelola</h4>
            <ul className={styles.linkList}>
              <li><a href="#tentang-kami">Profil & Visi Misi</a></li>
              <li><a href="#dewan-direksi">Dewan Komisaris & Direksi</a></li>
              <li><a href="#rekam-jejak">Rekam Jejak 2008 – 2026</a></li>
              <li><a href="#tata-kelola-faq">Kepatuhan Anti-Penyuapan (SMAP)</a></li>
              <li><a href="#kontak-kemitraan">Registrasi Rekanan Vendor</a></li>
            </ul>
          </div>

          {/* Col 4: Alamat & Kontak */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Kantor Pusat & Wilayah</h4>
            <p className={styles.officeText}>
              <strong>Jakarta (Headquarters):</strong><br />
              Menara Satu Mahakarya Lt. 32-35, SCBD Lot 28<br />
              Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan
            </p>
            <p className={styles.officeText}>
              <strong>Hotline:</strong> {company.phone}<br />
              <strong>Email:</strong> {company.email}
            </p>
          </div>
        </div>

        {/* Compliance Strip */}
        <div className={styles.complianceStrip}>
          <span className={styles.complianceTitle}>Akreditasi Sistem Manajemen & K3 Terverifikasi:</span>
          <div className={styles.complianceBadges}>
            <span className={styles.badgePill}>ISO 9001:2015 Mutu</span>
            <span className={styles.badgePill}>ISO 14001:2015 Lingkungan</span>
            <span className={styles.badgePill}>ISO 45001:2018 K3</span>
            <span className={styles.badgePill}>ISO 37001 SMAP</span>
            <span className={styles.badgePill}>SMK3 Kemenaker RI</span>
            <span className={styles.badgePill}>CSMS Platinum</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} {company.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#">Kebijakan Privasi</a>
            <span aria-hidden="true">•</span>
            <a href="#">Pedoman Tata Kelola (GCG)</a>
            <span aria-hidden="true">•</span>
            <a href="#">Sistem Whistleblowing</a>
            <span aria-hidden="true">•</span>
            <a href="/sitemap.xml">Peta Situs XML</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
