import React from "react";
import styles from "./OurTeam.module.css"; // Import your CSS file
import { sectionsData } from "../datafile/sectionData"; // Adjust the import path based on your project structure

const OurTeamSection = () => {
  const { TeamData } = sectionsData; // Destructure TeamData from sectionsData

  return (
    <section className={styles.ourTeamSection}>
      <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {TeamData.map((member, index) => (
          <div key={index} className={styles.teamMemberCard}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className={styles.memberImage}
            />
            <h3 className={styles.memberName}>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
