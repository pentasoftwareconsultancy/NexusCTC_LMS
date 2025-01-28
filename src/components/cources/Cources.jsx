import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoLibraryOutline, IoPeopleOutline } from "react-icons/io5";
import { OurCources } from '../../OurCources';
import styles from './Cources.module.css';
import ScrollToTop from '../Scrolltop';

function Cources() {
  const navigate = useNavigate();

  // Check login status from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Handle Learn More button click
 const handleLearnMore = (courseId) => {
  if (isLoggedIn) {
    navigate(`/course/${courseId}`); // Navigate to the course detail page
  } else {
    navigate(`/notloggedin/${courseId}`); // Navigate to the NotLoggedIn page with the course ID
  }
};


  return (
    <div className={styles.courses_container}>
      <ScrollToTop />
      <div className={styles.head}>
        <h1>We Offer the Following Courses</h1>
        <p>Best Software training institute in Pune and certification provider offers professional training across India. Advance your career today!</p>
      </div>

      <div className={styles.details}>
        {OurCources.map((course) => {
          const { id, time, image, heading, type, rating, price, lesson, students, button } = course;

          return (
            <div key={id} className={styles.course_card}>
              <div className={styles.time}>{time}</div>
              <img src={image} alt={heading} className={styles.course_image} />

              <div className={styles.content}>
                <div className={styles.heading}>{heading}</div>
                <div className={styles.type}>{type}</div>

                <div className={styles.rating}>
                  {Array.from({ length: 5 }, (_, i) => (
                    i < Math.floor(rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                  ))}
                  <p>{rating}</p>
                </div>

                <div className={styles.price}>{price}</div>

                <div className={styles.studlesson}>
                  <div className={styles.lesson}>
                    <IoLibraryOutline color='grey' />{lesson}
                  </div>
                  <div className={styles.students}>
                    <IoPeopleOutline color='grey' />{students}
                  </div>

                  <button
                    className={styles.learn_more_button}
                    onClick={() => handleLearnMore(id)}  // Make sure `id` is the course's ID
                  >
                    {button}
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cources;
