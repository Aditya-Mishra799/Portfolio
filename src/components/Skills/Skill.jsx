import React from 'react'
import styles from "./Skill.module.css";

const Skill = ({label, values}) => {
  return (
    <div className={`${styles["skill-block"]} stagger-animation`}>
        <h4>{label}</h4>
        <div className={styles["skill-items"]}>
            {values.map(val => <span key = {val} className={styles["skill-item"]}>{val}</span>)}
        </div>
    </div>
  )
}

export default Skill
