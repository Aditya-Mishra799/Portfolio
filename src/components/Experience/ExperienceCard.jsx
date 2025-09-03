import React from 'react';
import { MapPin, Calendar, ExternalLink, } from 'lucide-react';
import styles from './Experience.module.css';

const ExperienceCard = ({ 
  company, 
  role, 
  startDate, 
  endDate, 
  location, 
  description, 
  skills, 
  link 
}) => {
  return (
    <div className={styles['exp-card']}>
      <div className={styles['exp-header']}>
        <div className={styles['exp-title']}>
          <h4>{role}</h4>
          <div className={styles['company-info']}>
            <span className={styles['company']}>{company}</span>
            {link && (
              <a href={link} className={styles['company-link']} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <div className={styles['exp-meta']}>
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
      
      <div className={styles['exp-description']}>
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles['exp-skills']}>
        {skills.map((skill, index) => (
          <span key={index} className={styles['skill-tag']}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;