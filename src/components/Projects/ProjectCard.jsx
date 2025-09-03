import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  deployedLink, 
  githubLink, 
  techStack,
  index 
}) => {
  return (
    <div 
      className={styles['project-card']}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles['project-image']}>
        <img src={image} alt={title} />
        <div className={styles['project-overlay']}>
          <div className={styles['project-links']}>
            {deployedLink && deployedLink !== "#" && (
              <a 
                href={deployedLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles['project-link']}
                title="View Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles['project-link']}
                title="View Source Code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles['project-content']}>
        <h4 className={styles['project-title']}>{title}</h4>
        
        <div className={styles['project-description']}>
          <ul>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className={styles['project-tech']}>
          {techStack.map((tech, idx) => (
            <span key={idx} className={styles['tech-tag']}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;