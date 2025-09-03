import { BrainCircuit } from "lucide-react";
import React from "react";
import Section from "../Section/Section";
import Skill from "./Skill";
import styles from "./Skill.module.css";
const skills = [
  {
    label: "Programming languages",
    values: ["Python", "JavaScript", "C", "PHP", "Java"],
  },
  {
    label: "Web Technologies",
    values: [
      "HTML",
      "CSS",
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Material UI",
      "Chakra UI",
    ],
  },
  {
    label: "Frameworks",
    values: ["Next JS", "Express", "Flask", "FastAPI"],
  },
  {
    label: "Databases",
    values: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    label: "Tools/Other Technologies",
    values: ["Docker", "AWS Cloud", "Git / GitHub"],
  },
  {
    label: "Soft Skills",
    values: ["Problem Solving", "Teamwork", "Quick Learner"],
  },
  {
    label: "Languages",
    values: [
      "English (Proficient)",
      "Hindi (Fluent)",
      "Marathi (Conversational)",
    ],
  },
];
const SkillSection = () => {
  return (
    <div id="skills">
      <Section Icon={BrainCircuit} label={"Skills"}>
        <div className={styles["skill-cnt"]}>
          {skills.map((skill) => (
            <Skill {...skill} key={skill.label} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default SkillSection;
