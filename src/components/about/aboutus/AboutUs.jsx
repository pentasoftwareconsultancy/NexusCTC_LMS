import React from 'react';
import { sectionsData } from '../datafile/sectionData';
import styles from './AboutUs.module.css'

const AboutUsSection = () => {
  const { title, content } = sectionsData.aboutUsSection;

  return (
    <section className={styles.aboutUsSection}>
      <h2 className={styles.aboutUsTitle}>{title}</h2>
      <p className={styles.aboutUsContent}>{content}</p>
    </section>
  );
};

export default AboutUsSection;
