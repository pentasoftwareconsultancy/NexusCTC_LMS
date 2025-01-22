import React, { useState } from "react";
import { sectionsData } from '../datafile/sectionData';
import styles from './VisionMission.module.css';

const VisionMission = () => {
  const { visionMission } = sectionsData;

  // State to track which sections are expanded
  const [expanded, setExpanded] = useState({
    vision: false,
    mission: false,
    value: false
  });

  // Toggle function to expand/collapse content
  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div>
      <div className={styles.visionMissionContainer}>
        <div className={styles.vissionmissionvalue}>
          <div className={styles.Vissionmissionvaluecontent}>VISSION MISSION VALUE</div> </div>

        {/* Curve Line */}
        <div className={styles.curveLineWrapper}>
          <ul className={styles.curveLine}>
            <li className={styles.right}><span className={styles.dot}></span></li>
            <li className={styles.middle}><span className={styles.dot}></span></li>
            <li><span className={styles.dot}></span></li>
            <li className={styles.middle}><span className={styles.dot}></span></li>
            <li className={styles.right}><span className={styles.dot}></span></li>
          </ul>
        </div>

        {/* Vision Section */}
        {visionMission.Vision.map((item, index) => (
          <div key={index} className={styles.visionSection}>
            <h2 className={styles.sectionTitle}>{item.title || "Our Vision"}</h2>
            <p
              className={styles.sectionContent}
              onClick={() => toggleExpand('vision')}
            >
              {expanded.vision ? item.vision : `${item.vision.substring(0, 100)}…`}
            </p>
            {item.visionImage && <img src={item.visionImage} alt="Vision" className={styles.sectionImage} />}
          </div>
        ))}

        {/* Mission Section */}
        {visionMission.Mission.map((item, index) => (
          <div key={index} className={styles.missionSection}>
            <h2 className={styles.sectionTitle}>{item.title || "Our Mission"}</h2>
            <p
              className={styles.sectionContent}
              onClick={() => toggleExpand('mission')}
            >
              {expanded.mission ? item.mission : `${item.mission.substring(0, 100)}…`}
            </p>
            {item.missionImage && <img src={item.missionImage} alt="Mission" className={styles.sectionImage} />}
          </div>
        ))}

        {/* Value Section */}
        {visionMission.Value.map((item, index) => (
          <div key={index} className={styles.valueSection}>
            <h2 className={styles.sectionTitle}>{item.title || "Our Values"}</h2>
            <p
              className={styles.sectionContent}
              onClick={() => toggleExpand('value')}
            >
              {expanded.value ? item.value : `${item.value.substring(0, 100)}…`}
            </p>
            {item.valueImage && <img src={item.valueImage} alt="Values" className={styles.sectionImage} />}
          </div>
        ))}
      </div>

    </div>
  );
};

export default VisionMission;
