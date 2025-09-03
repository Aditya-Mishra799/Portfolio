import { Code2 } from "lucide-react";
import React from "react";
import Section from "../Section/Section";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import getFlats from "../../assets/get-flats-banner.jpeg"
import quotes from "../../assets/quotes-banner.jpeg"
import translator from "../../assets/translate-banner.png"
import project from "../../assets/project.png"

const projects = [
  {
    title: "GetFlats - Real Estate Platform",
    description: [
      "Created a web-based platform for property discovery, allowing users to search for and invest in properties with enhanced engagement features",
      "Interactive map-based search to explore listings in specific areas.",
      "3D property views for an immersive experience.",
      "Advanced filtering system and keyword-based search.",
      "GPS-based tracking to help users locate nearby properties easily.",
      "Google OAuth login integration for easy access.",
    ],
    image: getFlats,
    deployedLink: "https://get-flats-website-project-v1-umber.vercel.app/",
    githubLink: "https://github.com/Aditya-Mishra799/GetFlats-Website-Project-v1",
    techStack: ["Next.js", "MongoDB", "Tailwind-CSS"]
  },
  {
    title: "Speech Translator",
    description: [
      "Built an intelligent speech translation application using NLP technologies",
      "Implemented real-time speech recognition and translation capabilities",
      "Designed intuitive user interface for seamless language conversion",
      "Integrated multiple language support with high accuracy translation"
    ],
    image: translator,
    deployedLink: "https://nlp-speech-translator-website.vercel.app/",
    githubLink: "https://github.com/Aditya-Mishra799/NLP-Speech-Translator",
    techStack: ["Python ", "FastAPI ", "Chakra UI", "Docker", "Next.js"],
  },
  {
    title: "Project Similarity Checker",
    description: [
      "A powerful web application that uses advanced NLP and AI techniques to detect similarities between project proposals, helping maintain academic integrity and prevent duplication.",
      "Supports bulk uploads, customizable thresholds, role-based access, session management, and email verification with a responsive Next.js + MongoDB tech stack.",
    ],
    image: project,
    deployedLink: "https://project-smilarity-checker.vercel.app/",
    githubLink: "https://github.com/Aditya-Mishra799/project-smilarity-checker",
    techStack: ["Next.js", "MongoDB", "Tailwind-CSS", "Python"]
  },
  {
    title: "Quotes Sharing Website using Next.js",
    description: [
      "Implemented Goggle OAuth login for easier user access",
      "Simple CRUD oprations, Made UI using Tailwind-css",
    ],
    image: quotes,
    deployedLink: "https://quotes-app-using-nextjs.vercel.app/",
    githubLink: "https://github.com/Aditya-Mishra799/Quotes-App-using-NEXTJS",
    techStack: ["Next.js", "Tailwind CSS", "React.js", "MongoDB", "Cascading Style Sheets (CSS)", "HTML5", "Javascript" ]
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects">
      <Section Icon={Code2} label={"Projects"}>
        <div className={styles["projects-cnt"]}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProjectsSection;