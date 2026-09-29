'use client';

import React, { useState } from 'react';
import { CompanyProfileInfo } from '@/domain/entities';
import { sanitizeInput, validateEmail } from '@/shared/utils/security';
import { SectionHeading } from '@/shared/components/SectionHeading';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  company: CompanyProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ company }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'kemitraan',
    businessSector: 'infrastruktur',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const cleanName = sanitizeInput(formData.fullName);
    const cleanOrg = sanitizeInput(formData.organization);
    const cleanEmail = sanitizeInput(formData.email);
    const cleanPhone = sanitizeInput(formData.phone);
    const cleanMessage = sanitizeInput(formData.message);

    if (!cleanName || cleanName.length < 2) {
      newErrors.fullName = 'Mohon masukkan nama lengkap penanggung jawab.';
    }

    if (!cleanOrg || cleanOrg.length < 2) {
      newErrors.organization = 'Mohon masukkan nama institusi, perusahaan, atau instansi.';
    }

    if (!cleanEmail || !validateEmail(cleanEmail)) {
      newErrors.email = 'Mohon masukkan alamat email resmi yang valid.';
    }

    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Mohon masukkan nomor telepon atau WhatsApp yang dapat dihubungi.';
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      newErrors.message = 'Mohon jelaskan maksud kerja sama atau permohonan informasi (min. 10 karakter).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  return (
    <section id="kontak-kemitraan" className={`section-wrapper ${styles.contactSection}`} aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          badge="HUBUNGI KAMI & KEMITRAAN"
          title="Mulai Sinergi Strategis"
          highlightText="Bersama Mahakarya"
          description="Sekretariat Korporat dan Tim Pengembangan Bisnis kami siap melayani permohonan kemitraan, undangan tender pengadaan, serta audiensi investor."
        />

        <div className={`glass-panel ${styles.contactGrid}`}>
          {/* Info Kantor & Sekretariat */}
          <div className={styles.infoCol}>
            <span className={styles.infoBadge}>KANTOR PUSAT & SEKRETARIAT KORPORASI</span>
            <h3 className={styles.infoTitle}>{company.name}</h3>
            <p className={styles.infoDesc}>{company.tagline}</p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>🏢</span>
                <div>
                  <div className={styles.detailLabel}>Alamat Kantor Pusat</div>
                  <div className={styles.detailValue}>{company.headquarters}</div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>✉️</span>
                <div>
                  <div className={styles.detailLabel}>Email Resmi Sekretariat</div>
                  <div className={styles.detailValue}>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>📞</span>
                <div>
                  <div className={styles.detailLabel}>Telepon / Hotline Korporasi</div>
                  <div className={styles.detailValue}>
                    <a href={`tel:${company.phone}`}>{company.phone}</a>
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailIcon}>⏱️</span>
                <div>
                  <div className={styles.detailLabel}>Jam Operasional Kantor</div>
                  <div className={styles.detailValue}>Senin – Jumat: 08.00 – 17.00 WIB</div>
                </div>
              </div>
            </div>

            {/* Certifications Badge Box */}
            <div className={styles.certBox}>
              <div className={styles.certTitle}>Akreditasi Mutu & K3 Terverifikasi:</div>
              <ul className={styles.certList}>
                {company.certifications.slice(0, 4).map((c, i) => (
                  <li key={i} className={styles.certItem}>
                    <span className={styles.certCheck}>✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Permohonan Kemitraan */}
          <div className={styles.formCol}>
            {submitSuccess ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Permohonan Berhasil Dikirimkan</h3>
                <p className={styles.successText}>
                  Terima kasih, Bapak/Ibu <strong>{formData.fullName}</strong> dari <strong>{formData.organization}</strong>.
                  Pesan Anda telah diteruskan ke Sekretariat Korporat Mahakarya Group. Petugas hubungan kemitraan kami akan menindaklanjuti dalam waktu maksimal 1x24 jam kerja.
                </p>
                <button
                  type="button"
                  className="btn-secondary-corp"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      phone: '',
                      inquiryType: 'kemitraan',
                      businessSector: 'infrastruktur',
                      message: '',
                    });
                  }}
                >
                  Kirim Pesan atau Permohonan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className={styles.formElement}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.inputLabel}>
                      Nama Lengkap Penanggung Jawab <span className={styles.reqMark}>*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Ir. Suryadi Pratama"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`${styles.inputField} ${errors.fullName ? styles.inputError : ''}`}
                    />
                    {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="organization" className={styles.inputLabel}>
                      Nama Perusahaan / Instansi <span className={styles.reqMark}>*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="e.g. PT Mitra Konstruksi Utama"
                      value={formData.organization}
                      onChange={handleChange}
                      className={`${styles.inputField} ${errors.organization ? styles.inputError : ''}`}
                    />
                    {errors.organization && <span className={styles.errorMsg}>{errors.organization}</span>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.inputLabel}>
                      Alamat Email Resmi <span className={styles.reqMark}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="suryadi@perusahaan.co.id"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${styles.inputField} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.inputLabel}>
                      Nomor Telepon / WhatsApp <span className={styles.reqMark}>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.inputField} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType" className={styles.inputLabel}>
                      Jenis Kepentingan
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.selectField}
                    >
                      <option value="kemitraan">Kemitraan Proyek Strategis</option>
                      <option value="tender">Undangan Pengadaan / Tender</option>
                      <option value="vendor">Pendaftaran Rekanan Vendor</option>
                      <option value="investor">Hubungan Investor & Media</option>
                      <option value="umum">Pertanyaan Umum Lainnya</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="businessSector" className={styles.inputLabel}>
                      Sektor Lini Terkait
                    </label>
                    <select
                      id="businessSector"
                      name="businessSector"
                      value={formData.businessSector}
                      onChange={handleChange}
                      className={styles.selectField}
                    >
                      <option value="infrastruktur">Infrastruktur & Konstruksi Sipil</option>
                      <option value="energi">Energi Bersih Terbarukan (EBT)</option>
                      <option value="logistik">Rantai Pasok & Logistik Maritim</option>
                      <option value="teknologi">Rekayasa & Otomasi Industri</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.inputLabel}>
                    Pesan / Ringkasan Kerjasama <span className={styles.reqMark}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tuliskan gambaran proyek, lokasi, kebutuhan lingkup kerja sama, atau permohonan informasi resmi..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textareaField} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary-corp ${styles.submitBtn}`}
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Permohonan...</span>
                  ) : (
                    <>
                      <span>Kirim Permohonan Resmi</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className={styles.disclaimer}>
                  Seluruh data yang dikirimkan terjamin kerahasiaannya dan hanya digunakan untuk keperluan komunikasi resmi korporasi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
