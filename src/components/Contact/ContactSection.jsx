import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Twitter } from 'lucide-react';
import styles from './Contact.module.css';
import leetcode from "../../assets/leetcode.svg";
import hackerRank from "../../assets/hackerrank.png";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "adityamishra9124@gmail.com",
      link: "mailto:adityamishra9124@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Shirsad, Virar, District: Palghar, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/aaditya-mishr"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub", 
      link: "https://github.com/Aditya-Mishra799"
    },
    {
      icon: <img src={leetcode} alt="LeetCode" width={24} height={24} />,
      label: "LeetCode",
      link: "https://leetcode.com/u/aditya-mishr/"
    },
    {
      icon: <img src={hackerRank} alt="hackerRank" width={24} height={24} />,
      label: "HackerRank",
      link: "https://www.hackerrank.com/profile/adityamishra9124"
    },
    {
      icon: <Mail size={24} />,
      label: "Gmail", 
      link: "mailto:adityamishra9124@gmail.com"
    },
  ];

  return (
    <footer id="contact" className={styles['contact-section']}>
      <div className={styles['contact-container']}>
        <div className={styles['contact-header']}>
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
        </div>
        
        <div className={styles['contact-content']}>
          <div className={styles['contact-info']}>
            <h3>Contact Information</h3>
            <div className={styles['contact-list']}>
              {contactInfo.map((item, index) => (
                <div key={index} className={styles['contact-item']}>
                  <div className={styles['contact-icon']}>
                    {item.icon}
                  </div>
                  <div className={styles['contact-details']}>
                    <span className={styles['contact-label']}>{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className={styles['contact-value']}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles['contact-value']}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles['social-section']}>
            <h3>Follow Me</h3>
            <div className={styles['social-links']}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['social-link']}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className={styles['resume-section']}>
              <a 
                href="https://drive.google.com/file/d/1HM6K4vxO21tXfEMYHpkzmqrsPSe5iuRy/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles['resume-button']}
              >
                <FileText size={20} />
                View Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles['contact-footer']}>
          <p>&copy; 2025 Aditya Mishra. All rights reserved.</p>
          <p>Built with React & CSS Modules</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;