import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import Section from "../Section/Section";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";
const experience = [
  {
    company: "Flo Mattress",
    startDate: "16/09/2024",
    endDate: "15/03/2025",
    role: "Full-Stack Developer Intern",
    location: "Mumbai, Maharashtra",
    link: "",
    description: [
      "Developed frontend features with React and backend services with Node.js & Express.",
      "Implemented key modules such as order processing, returns, cancellations, payments, and real-time delivery tracking, integrating with third-party logistics APIs.",
      "Designed modules to escalate delivery issues and track orders from manufacturing to final delivery.",
      "Optimized MongoDB schemas for efficient data storage and retrieval of customer and order information.",
      "Worked with AWS S3 for image uploads and used AWS services for deployment.",
      "Used Git for version control, ensuring smooth collaboration within the team.",
    ],
    skills: [
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "Git",
      "AWS",
      "JavaScript",
      "HTML",
      "CSS",
      "Shadcn-UI",
    ],
    link: "https://drive.google.com/file/d/1bMa5yrg20ob33MmesIQiGPkc5B89n485/view?usp=drive_link",
  },
];
const ExperienceSection = () => {
  return (
    <div id="experience">
      <Section Icon={BriefcaseBusiness} label={"Experience"}>
        <div className={styles["exp-cnt"]}>
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ExperienceSection;
