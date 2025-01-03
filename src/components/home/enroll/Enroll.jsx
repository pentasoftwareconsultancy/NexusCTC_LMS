import React from 'react';
import styles from './Enroll.module.css';

function Enroll() {
  const EnrollData = [
    { students: "29.3k", text: "STUDENT ENROLLED", color:"rgb(8, 118, 118)", backgroundColor: "rgb(230, 255, 255)" }, // Red with light blue
    { students: "32.4k", text: "STUDENT ENROLLED", color: "rgb(239, 83, 109)", backgroundColor: "rgb(253, 225, 225)" }, // Green with light pink
    { students: "100%", text: "STUDENT ENROLLED", color: "rgb(128, 128, 231)", backgroundColor: "rgb(230, 255, 255)" }, // Blue with light blue
    { students: "354+", text: "STUDENT ENROLLED", color: "rgb(219, 169, 103)", backgroundColor: "rgb(250, 246, 239)" }, // Pink with light pink
  ];

  return (
    <div className={styles.enroll}>
      <div className={styles.content}>
        {EnrollData.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundColor: item.backgroundColor }} // Dynamically set background color
          >
            <span className={styles.span} style={{ color: item.color }}>
              {item.students}
            </span>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Enroll;
