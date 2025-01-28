import React from 'react';
import { useParams } from 'react-router-dom';
import { NotLoggedInData } from './notloggedindata/NotLoggedInData';
import styles from './NotLoggedIn.module.css';

function NotLoggedIn() {
  const { id } = useParams(); // Get the course ID from the URL
  const notloggeddata = NotLoggedInData.course.find(course => course.id === id); // Access courses using .course
  console.log("Found Course Data:", notloggeddata); // Check if data is found


//   Handle case where no course matches the ID
  if (!notloggeddata) {
    return (
      <div className={styles.error}>
        <h2>Course Not Found</h2>
        <p>Please check the URL or select a valid course.</p>
      </div>
    );
  }

  // Render specific course details
  return (
    <div className={styles.NotLoggedIn}>
      <div className={styles.notloggeddata_Card}>
        <img
          src={notloggeddata.LoggedImg}
          alt={notloggeddata.LoggedHead}
          className={styles.courseImage}
        />
        <div className={styles.Logged}>
          <h2>{notloggeddata.LoggedHead}</h2>
        </div>
        <div className={styles.LogDescription}>
          <strong>Description:</strong> {notloggeddata.LogDescription}
        </div>
        <div className={styles.LoggedDuration}>
          <strong>Duration:</strong> {notloggeddata.LoggedDuration}
        </div>
        <div className={styles.LoggedInstructor}>
          <strong>Instructor:</strong> {notloggeddata.LoggedInstructor}
        </div>
        <div className={styles.LoggedSyllabus}>
          <strong>Syllabus:</strong> {notloggeddata.Syllabus}
        </div>
        <div className={styles.pdfButton}>
          <strong>{notloggeddata.pdfButton}</strong>
        </div>
        <div className={styles.Learn}>
          <strong>What You'll Learn:</strong> {notloggeddata.Learn}
        </div>
        <div className={styles.KeyFeatures}>
          <strong>Key Features:</strong> {notloggeddata.KeyFeatures}
        </div>
        <div className={styles.LoggedTerms}>
          <strong>Terms and Conditions (T&Cs):</strong> {notloggeddata.TermsAndCondition}
        </div>
      </div>
    </div>
  );
}

export default NotLoggedIn;
