import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import styles from './Achievements.module.css';

const CertificateCard = ({ 
  name, 
  organization, 
  dateIssued, 
  link,
  index 
}) => {
  return (
    <div 
      className={styles['certificate-card']}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles['certificate-icon']}>
        <Award size={20} />
      </div>
      
      <div className={styles['certificate-content']}>
        <h5 className={styles['certificate-title']}>{name}</h5>
        <span className={styles['certificate-org']}>{organization}</span>
        
        <div className={styles['certificate-meta']}>
          <div className={styles['date']}>
            <Calendar size={12} />
            <span>{dateIssued}</span>
          </div>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['certificate-link']}
          >
            <ExternalLink size={14} />
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;