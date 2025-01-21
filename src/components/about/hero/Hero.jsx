import React from 'react';
import { sectionsData } from '../datafile/sectionData';
import styles from './Hero.module.css'

const HeroSection = () => {
  const { image, altText, title, subTitle } = sectionsData.heroSection;

  return (
    <section className={styles.heroSection}>

      {/* <video autoPlay muted loop className="heroImage">
        <source src={sectionsData.heroSection.videoUrl} type="video/mp4" />
      </video> */}
      <img
        src={image}
        alt={altText}
        className={styles.heroImage}
      />
      <h1 className={styles.heroTitle}>
        {title}<span className={styles.logox}>{subTitle}</span>
      </h1>
    </section>
  );
};

export default HeroSection;
