import React from 'react';
import { Trophy, Calendar, ExternalLink } from 'lucide-react';
import styles from './Achievements.module.css';

const AchievementCard = ({ 
  name, 
  organization, 
  date, 
  rank, 
  certificateLink,
  index 
}) => {
  return (
    <div 
      className={styles['achievement-card']}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles['achievement-icon']}>
        <Trophy size={24} />
      </div>
      
      <div className={styles['achievement-content']}>
        <h4 className={styles['achievement-title']}>{name}</h4>
        <span className={styles['organization']}>{organization}</span>
        
        <div className={styles['achievement-meta']}>
          <div className={styles['date']}>
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className={styles['rank']}>
            <span>Rank: {rank}</span>
          </div>
        </div>
        
        {certificateLink && (
          <a 
            href={certificateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['certificate-link']}
          >
            <ExternalLink size={16} />
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;