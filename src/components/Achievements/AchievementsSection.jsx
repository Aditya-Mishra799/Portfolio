import { Trophy, Award } from "lucide-react";
import React from "react";
import Section from "../Section/Section";
import AchievementCard from "./AchievementCard";
import CertificateCard from "./CertificateCard";
import styles from "./Achievements.module.css";

const achievements = [
  {
    name: "GATE (Data Science and Artificial Intelligence) 2024",
    organization: "Indian Institute of Science (IISc), Bangalore",
    date: "Feb 2024",
    rank: "3736",
    certificateLink: "https://drive.google.com/file/d/14FuWJbIlCQzmT4w14U67V3Zx3xB6tdXr/view?usp=drive_link"
  },
  {
    name: "SQL Querying Competition",
    organization: "Computer Society of India",
    date: "Aug 2024",
    rank: "First",
    certificateLink: "https://drive.google.com/file/d/1xAiR3tI5NaNMtkTtChDEGuj9ErPZdJHv/view?usp=drive_link"
  },
  {
    name: "College Coding Competition",
    organization: "Computer Society of India ",
    date: "Aug 2024",
    rank: "First",
    certificateLink: "https://drive.google.com/file/d/1kBI2YgvibAROma4YteO0MTV4PjMGnTZL/view?usp=drive_link"
  },
  {
    name: "Coding Competition [Code-a-Thon]",
    organization: "Institution’s Innovation Council",
    date: "Feb 2024",
    rank: "First",
    certificateLink: "https://drive.google.com/file/d/1h63YAG4Ll21m2SkeYCXITgfCihBMvO6N/view?usp=drive_link"
  },
];

const certificates = [
  {
    name: "Frontend Developer (React) Certificate",
    organization: "HackerRank",
    dateIssued: "30 Dec, 2024",
    link: "https://www.hackerrank.com/certificates/1ca99e30d287"
  },
  {
    name: "SQL (Advanced) Certificate",
    organization: "HackerRank", 
    dateIssued: "30 Dec, 2024",
    link: "https://www.hackerrank.com/certificates/2ed9e2565aae"
  },
  {
    name: "SQL (Intermediate) Certificate",
    organization: "HackerRank", 
    dateIssued: "29 Dec, 2024",
    link: "https://www.hackerrank.com/certificates/de37b60d4ae8"
  },
  {
    name: "AWS Academy Cloud Foundations",
    organization: "AWS Academy",
    dateIssued: "02 April, 2024",
    link: "https://www.credly.com/badges/f9684cb8-1421-47f7-87e9-249455579147/print"
  },
];

const AchievementsSection = () => {
  return (
    <div id="achievements">
      <Section Icon={Trophy} label={"Achievements"}>
        <div className={styles["achievements-cnt"]}>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} index={index} />
          ))}
        </div>
      </Section>
      
      <Section Icon={Award} label={"Certificates"}>
        <div className={styles["certificates-cnt"]}>
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} {...certificate} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AchievementsSection;