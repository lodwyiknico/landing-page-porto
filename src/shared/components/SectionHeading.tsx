import React from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  description,
  align = 'center',
}) => {
  return (
    <div className={`${styles.headingContainer} ${align === 'center' ? styles.center : styles.left}`}>
      {badge && (
        <div className={styles.badgeWrapper}>
          <span className="badge-corp">
            <span className="badge-dot-gold" />
            {badge}
          </span>
        </div>
      )}
      <h2 className={styles.title}>
        {title}{' '}
        {highlightText && <span className="gradient-gold">{highlightText}</span>}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
