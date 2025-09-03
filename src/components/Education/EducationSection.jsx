import { GraduationCap } from "lucide-react";
import React from "react";
import Section from "../Section/Section";
import EducationCard from "./EducationCard";
import styles from "./Education.module.css";

const education = [
  {
    college: "University of Mumbai ",
    location: "Mumbai, Maharashtra",
    degree: "Bachelor of Engineering in Computer Engineering",
    startDate: "2021",
    endDate: "2025",
    cgpa: "9.78",
    maxCgpa: "10.0",
    percentage: "88.84%"
  },
  {
    college: ", KBP Junior College of Science",
    location: " Vashi, Navi Mumbai, India", 
    degree: "Higher Secondary Certificate (HSC) - Science",
    startDate: "2019",
    endDate: "2021",
    cgpa: null,
    maxCgpa: null,
    percentage: "89.5%"
  },
  {
    college: "ASP Convent English High School",
    location: "Ghansoli, Navi Mumbai, India",
    degree: "Secondary School Certificate (SSC)",
    startDate: "2018",
    endDate: "2019",
    cgpa: null,
    maxCgpa: null,
    percentage: "83.6%"
  }
];

const EducationSection = () => {
  return (
    <div id="education">
      <Section Icon={GraduationCap} label={"Education"}>
        <div className={styles["education-cnt"]}>
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default EducationSection;