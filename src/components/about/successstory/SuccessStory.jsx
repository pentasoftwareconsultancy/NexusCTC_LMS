import React, { useState, useEffect } from "react";
import styles from "./SuccessStory.module.css";
import { sectionsData } from "../datafile/sectionData"; // Ensure your correct import path

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = sectionsData.successStorySection.stories; // Accessing the correct data from the imported file

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className={styles.successStorySection}>
      <h2 className={styles.successStoryTitle}>Success Stories</h2>
      <div className={styles.carousel}>
        <button
          className={styles.carouselButton}
          onClick={prevSlide}
        >
          &#8592;
        </button>

        <div className={styles.carouselContent}>
          <img
            src={stories[currentIndex].img}
            alt={stories[currentIndex].name}
            className={styles.img}
          />
          <h3 className={styles.successStoryName}>
            {stories[currentIndex].name}
          </h3>
          <p className={styles.successStoryContent}>
            {stories[currentIndex].story}
          </p>
        </div>

        <button
          className={styles.carouselButton}
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>

      {/* <div className={styles.carouselButtons}>
        {stories.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselButton} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            •
          </button>
        ))}
      </div> */}
    </section>
  );
};

export default SuccessStory;
