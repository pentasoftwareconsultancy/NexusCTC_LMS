import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { OurCources } from '../../../OurCources';  // Ensure this is the correct path to your course data
import Lectures from '../lectures/Lecture';
import Notes from '../notes/Notes';
import Syllabus from '../syllabus/Syllabus';
import Exams from '../exam/Exam';
import styles from './LearnMore.module.css';

function LearnMore() {
  const { id } = useParams();  // Get course id from the URL
  const [activeTab, setActiveTab] = useState('Lectures');

  // Check login status from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: `/course/${id}` }} />;
  }

  // Find the course by id
  const course = OurCources.find((course) => course.id === id);

  if (!course) {
    return <div className={styles.error}>This course is not available!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.image}>
          <img src={course.CourceImage} alt={course.heading} />
        </div>
        <div className={styles.heading}>
          <h4>{course.heading}</h4>
          <p>Instructor: {course.instructor || 'Not specified'}</p>
        </div>
        <div className={styles.description}>
          {course.description || 'No description available.'}
        </div>
        <div className={styles.buttons}>
          <button
            className={activeTab === 'Lectures' ? styles.active : ''}
            onClick={() => setActiveTab('Lectures')}
          >
            Lectures
          </button>
          <button
            className={activeTab === 'Syllabus' ? styles.active : ''}
            onClick={() => setActiveTab('Syllabus')}
          >
            Syllabus
          </button>
          <button
            className={activeTab === 'Notes' ? styles.active : ''}
            onClick={() => setActiveTab('Notes')}
          >
            Notes
          </button>
          <button
            className={activeTab === 'Exams' ? styles.active : ''}
            onClick={() => setActiveTab('Exams')}
          >
            Exams
          </button>
        </div>
      </div>
      <div className={styles.left}>
        {activeTab === 'Lectures' && <Lectures lectures={course.Lectures} />}
        {activeTab === 'Syllabus' && <Syllabus syllabus={course.Syllabus} />}
        {activeTab === 'Notes' && <Notes notes={course.Notes} />}
        {activeTab === 'Exams' && <Exams exams={course.Exams} />}
      </div>
    </div>
  );
}

export default LearnMore;
