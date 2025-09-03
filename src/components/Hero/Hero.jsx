import React from "react";
import styles from "./Hero.module.css";
import devImage from "../../assets/hero.jpeg";
import leetcode from "../../assets/leetcode.svg";
import { Github, Linkedin, Mail } from "lucide-react";
const links = [
  {
    icon: <Linkedin />,
    link: "https://linkedin.com/in/aaditya-mishr",
  },
  {
    icon: <Github />,
    link: "https://github.com/Aditya-Mishra799",
  },
  {
    icon: <img src={leetcode} alt="leetcode" width={24} height={24}/>,
    link: "https://leetcode.com/u/aditya-mishr/",
  },
  {
    icon: <Mail />,
    link: "mailto:adityamishra9124@gmail.com",
  },
];
const Hero = () => {
  return (
    <div id="about" className={styles['hero-cnt']}>
      <img src={devImage} alt="profile" />
      <div className={styles['hero-about']}>
        <h2>I AM Aditya Mishra</h2>
        <span className={styles['profession']}>Full Stack Developer</span>
        <hr className={styles['separator']}/>
        <p>
          <span className={styles['high-light']}>Hey there 👋, </span>
          I am a Full Stack Developer passionate about building
          user-friendly and efficient web applications.
          <br />
          <br />
          I enjoy working with MERN and Next.js and constantly improve my 
          skills through coding and problem-solving. I am always eager to learn 
          something new and grow both technically and personally. 
          Collaboration, adaptability, and contributing to impactful projects are what I value the most.
          <br />
          <br />
          Excited to connect with like-minded professionals and explore
          opportunities to learn and contribute!
        </p>
        <div className={styles['links']}>
          {links.map(({ icon, link }) => (
            <a key={link} href={link} className={styles['link']} target="_blank" rel="noopener noreferrer">{icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
