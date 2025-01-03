import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { OurCources } from '../../../OurCources'; // Importing course data
import styles from './LearnMore.module.css';

function LearnMore() {
  const { id } = useParams(); // Fetch course ID from the URL
  const [activeTab, setActiveTab] = useState(''); // State to manage active section
  const [expandedSyllabusIndex, setExpandedSyllabusIndex] = useState(null); // To track which syllabus is expanded
  const course = OurCources.find(c => c.id === id); // Find course by ID

  if (!course) {
    return <div>This course is not available!</div>; // Handle case when the course is not found
  }

  // Toggle the syllabus content
  const toggleSyllabusContent = (index) => {
    if (expandedSyllabusIndex === index) {
      setExpandedSyllabusIndex(null); // Collapse the syllabus if it was already expanded
    } else {
      setExpandedSyllabusIndex(index); // Expand the syllabus
    }
  };

  // Render syllabus content based on the active tab
  const renderSyllabus = () => (
    <div className={styles.content}>
      <h2>Syllabus</h2>
      {course.Syllabus.map((syllabus, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSyllabusContent(index)}
            className={styles.toggleButton}
          >
            {expandedSyllabusIndex === index ? '−' : '+'} {syllabus.title}
          </button>
          {expandedSyllabusIndex === index && (
            <ul>
              {syllabus.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  // Render notes content
  const renderNotes = () => (
    <div className={styles.content}>
      <h2>Notes</h2>
      {course.notes ? (
        course.notes.map((note, index) => (
          <div key={index} className={styles.note}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      ) : (
        <p>Notes are not available for this course.</p>
      )}
    </div>
  );

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Lectures':
        return (
          <div className={styles.content}>
            <h2>Lectures</h2>
            <p>Here is the content for lectures.</p>
          </div>
        );
      case 'Syllabus':
        return renderSyllabus();
      case 'Notes':
        return renderNotes();
      default:
        return null;
    }
  };

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
        <div className={styles.description}>{course.description || 'No description available.'}</div>

        {/* Buttons to switch tabs */}
        <div className={styles.buttons}>
          <button onClick={() => setActiveTab('Lectures')}>Lectures</button>
          <button onClick={() => setActiveTab('Syllabus')}>Syllabus</button>
          <button onClick={() => setActiveTab('Notes')}>Notes</button>
        </div>
      </div>

      <div className={styles.left}>
        
        {renderContent()} {/* Render active tab content */}
      </div>
    </div>
  );
}

export default LearnMore;
