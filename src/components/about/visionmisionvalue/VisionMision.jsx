// VisionMissionValue.jsx

import React from 'react';
import { sectionsData } from '../datafile/sectionData';
import styles from './VisionMission.module.css';

const VisionMissionValue = () => {
  const { Vision, Mission, Value } = sectionsData.visionMission;

  return (
    <section className={styles.visionMissionValueSection}>
      {/* Render the Vision Section */}
      <div className={styles.visionSection}>

        {Vision.map((item, index) => (
          <div key={index} className={styles.visionContentBlock}>
            <div className={styles.textBlock}>
              <h3 className={styles.contentTitle}>{item.title}</h3>
              <p className={styles.visionContent}>{item.vision}</p>
            </div>
            {item.visionImage && (
              <img
                src={item.visionImage}
                alt="Vision"
                className={styles.visionImage}
              />
            )}
          </div>
        ))}
      </div>

      {/* Render the Mission Section */}
      <div className={styles.missionSection}>

        {Mission.map((item, index) => (
          <div key={index} className={styles.missionContentBlock}>

            {item.missionImage && (
              <img
                src={item.missionImage}
                alt="Mission"
                className={styles.missionImage}
              />
            )}
            <div className={styles.textBlock}>


              <h3 className={styles.contentTitle}>{item.title}</h3>
              <p className={styles.missionContent}>{item.mission}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Render the Value Section */}
      <div className={styles.valueSection}>

        {Value.map((item, index) => (
          <div key={index} className={styles.valueContentBlock}>
            <div className={styles.textBlock}>
              <h3 className={styles.contentTitle}>{item.title}</h3>
              <p className={styles.valueContent}>{item.vision}</p>
            </div>
            {item.valueImage && (
              <img
                src={item.valueImage}
                alt="Value"
                className={styles.valueImage}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionValue;
