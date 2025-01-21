import React, { useState } from 'react';
import styles from './Syllabus.module.css';

function Syllabus({ syllabus }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <h2>Syllabus</h2>
      <div className={styles.list}>
        {syllabus.map((item, index) => (
          <div
            key={index}
            className={`${styles.moduleContainer} ${expandedIndex === index ? styles.active : ''}`}
          >
            <button
              onClick={() => toggleContent(index)}
              className={`${styles.toggleButton} ${expandedIndex === index ? styles.active : ''}`}
            >
              {item.title} 
              <div className={styles.plusSign}>
                {expandedIndex === index ? '−' : '+'}
              </div>
            </button>
            {expandedIndex === index && (
              <ul>
                {item.content.map((contentItem, idx) => (
                  <li key={idx}>{contentItem}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Syllabus;
