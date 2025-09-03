import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import styles from './Education.module.css';

const EducationCard = ({ 
  college, 
  location, 
  degree, 
  startDate, 
  endDate, 
  cgpa, 
  maxCgpa, 
  percentage,
  index 
}) => {
  return (
    <div 
      className={styles['education-card']}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles['education-header']}>
        <div className={styles['education-title']}>
          <h4>{degree}</h4>
          <span className={styles['college']}>{college}</span>
        </div>
        
        <div className={styles['education-meta']}>
          <div className={styles['date-range']}>
            <Calendar size={14} />
            <span>{startDate} - {endDate}</span>
          </div>
          <div className={styles['location']}>
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      {(cgpa || percentage) && (
        <div className={styles['education-grade']}>
          <Award size={16} />
          <span>
            {cgpa ? `CGPA: ${cgpa}/${maxCgpa}` : `Percentage: ${percentage}`}
          </span>
        </div>
      )}
    </div>
  );
};

export default EducationCard;