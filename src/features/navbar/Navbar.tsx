'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  companyName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ companyName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Lini Bisnis', href: '#lini-bisnis' },
    { label: 'Proyek', href: '#proyek-strategis' },
    { label: 'Direksi', href: '#dewan-direksi' },
    { label: 'Rekam Jejak', href: '#rekam-jejak' },
    { label: 'FAQ', href: '#tata-kelola-faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logoLink} aria-label={`${companyName} Beranda`}>
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
              <path
                d="M3 18L12 24L21 18"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.brandTitleBlock}>
            <span className={styles.brandName}>
              MAHAKARYA <span className={styles.goldText}>GROUP</span>
            </span>
            <span className={styles.legalSub}>PT MAHAKARYA NUSANTARA HOLDING</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Navigasi Utama">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className={styles.navActions}>
          <a
            href="#kontak-kemitraan"
            className={`btn-primary-corp ${styles.desktopCta}`}
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
          >
            <span>Kemitraan & Tender</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineOpen1 : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineOpen2 : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineOpen3 : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav aria-label="Navigasi Mobile">
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.mobileNavLink} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '1rem' }}>
                <a href="#kontak-kemitraan" className="btn-primary-corp" onClick={handleLinkClick} style={{ width: '100%' }}>
                  Kemitraan & Tender
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
