import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Exam.module.css";

function Exams({ exams }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleStartExam = () => {
    if (name && studentId) {
      // Save student data to state or pass as URL parameter
      navigate(`/startexam/${studentId}`, { state: { name, studentId } });
    } else {
      alert("Please fill in both fields!");
    }
  };
  return (
    <div>
      <h1>Test Series</h1>
      <ul>
        {exams.map((exam, index) => (
          <li key={index} className={styles.examContainer}>
            {/* Display title as a button */}
            <button
              className={styles.toggleButton}
              onClick={() => toggleExpand(index)}
            >
              {exam.ExamTitle}
            </button>
            {/* Conditionally render expanded content */}
            {expandedIndex === index && (
              <div className={styles.expandedContent}>
                {exam.content.map((item, contentIndex) => (
                  <div key={contentIndex} className={styles.contentBox}>
                    <img
                      src={item.ExamImage}
                      alt={item.title}
                      className={styles.course_image}
                    />
                    <div className={styles.ExamTitle}>{item.title}</div>

                    <button
                      className={styles.ExamButton}
                      onClick={() => setShowPopup(true)}
                    >
                      {item.ExamButton}
                    </button>

                    {/* Popup Modal for starting the exam */}
                    {showPopup && (
                      <div className={styles.popup}>
                        <div className={styles.popupContent}>
                          <h3>Start Exam</h3>
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <label htmlFor="studentId">Student ID:</label>
                          <input
                            type="text"
                            id="studentId"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            required
                          />

                          <div className={styles.Exambutton}>
                          <button
                            onClick={handleStartExam}
                            className={styles.startExamButton}
                          >
                            Start Test
                          </button>
                          <button
                            onClick={() => setShowPopup(false)}
                            className={styles.closeExamButton}
                          >
                            Close
                          </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exams;
