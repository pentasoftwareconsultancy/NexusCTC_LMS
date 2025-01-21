import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./StartExam.module.css";
import examData from "../examData";
import FinishedExamPopup from "./FinishedExamPopup";

function StartExam() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, studentId } = location.state || {};

  const questionsPerPage = 1; // Number of questions per page
  const currentPage = parseInt(new URLSearchParams(location.search).get("page")) || 1; // Current question page

  // Get the questions for the current page
  const currentQuestions = examData.Questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  const totalPages = Math.ceil(examData.Questions.length / questionsPerPage);

  const [timer, setTimer] = useState(7200); // Timer in seconds (2 hours)
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showPopup, setShowPopup] = useState(false); // State to toggle the popup

  const paletteButtonsPerPage = 25; // Buttons per palette page
  const [palettePage, setPalettePage] = useState(1);
  const totalPalettePages = Math.ceil(
    examData.Questions.length / paletteButtonsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswer = (questionId, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));

    if (!attemptedQuestions.includes(questionId)) {
      setAttemptedQuestions((prev) => [...prev, questionId]);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`${location.pathname}?page=${newPage}`, {
        state: { name, studentId },
      });
    }
  };

  const handlePalettePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPalettePages) {
      setPalettePage(newPage);
    }
  };
  if (!name || !studentId) {
    return <p>Unauthorized access! Please start the exam properly.</p>;
  }

  // Get palette buttons for the current palette page
  const currentPaletteButtons = examData.Questions.slice(
    (palettePage - 1) * paletteButtonsPerPage,
    palettePage * paletteButtonsPerPage
  );  

  const handleFinishExam = () => {
    setShowPopup(true); // Show the popup when the exam is finished
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup and navigate to the homepage
    navigate("/");
  };

  const handleCancelPopup = () => {
    setShowPopup(false); // Just close the popup without any action
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{examData.ExamTitle}</h1>
        <div className={styles.details}>
          <p><strong>Student Name:</strong> {name}</p>
          <p><strong>Student ID:</strong> {studentId}</p>
          <p><strong>Exam Date:</strong> {examData.ExamDate}</p>
          <p><strong>Duration:</strong> {examData.Duration}</p>
          <p><strong>Time Remaining:</strong> {formatTime(timer)}</p>
        </div>
      </div>
      <div className={styles.examBody}>
        <div className={styles.questions}>
          {currentQuestions.map((q) => (
            <div key={q.id} className={styles.question}>
              <div className={styles.QuetionNumber}>
                <strong>Question {q.id}:</strong> {q.question}
              </div>
              <div className={styles.options}>
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    className={`${styles.optionButton} ${selectedAnswers[q.id] === option ? styles.selected : ""
                      }`}
                    onClick={() => handleAnswer(q.id, option)}
                  >
                    <div className={styles.NumOption}>
                      <div className={styles.optionsNumbring}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className={styles.option}>{option}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.paginationButton}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationPreviousButton}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.paginationNextButton}
            >
              Next
            </button>
          </div>

          <div className={styles.pagination}>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        <div className={styles.sidebar}>
          <h2>Status</h2>
          <div className={styles.statusContainer}>
            <p><strong className={styles.AttemptedContainer}>Attempted:</strong> {attemptedQuestions.length}</p>
            <p><strong className={styles.notAttemptedContainer}>Not Attempted:</strong>{" "}
              {examData.Questions.length - attemptedQuestions.length}
            </p>
          </div>

          <div className={styles.palette}>
            <h3>Question Palette</h3>
            <div className={styles.paletteGrid}>
              {currentPaletteButtons.map((q, index) => (
                <button
                  key={q.id}
                  className={
                    attemptedQuestions.includes(q.id)
                      ? styles.attempted
                      : styles.notAttempted}
                  onClick={() => handlePageChange(Math.ceil(q.id))}
                >
                  {q.id}
                </button>
              ))}
            </div>
            <div className={styles.palettePagination}>
              <button className={styles.palettePrevious}
                onClick={() => handlePalettePageChange(palettePage - 1)}
                disabled={palettePage === 1}
              >
                Previous
              </button>
              <button className={styles.paletteNext}
                onClick={() => handlePalettePageChange(palettePage + 1)}
                disabled={palettePage === totalPalettePages}
              >
                Next
              </button>
              
              <div className={styles.palettepaginationNumbering}>
                page {palettePage} of {totalPalettePages}
              </div>
            </div>
          </div>

          <div className={styles.footer}>
          <button onClick={handleFinishExam} className={styles.finishButton}>
            Finish Exam
          </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <FinishedExamPopup 
          onClose={handleClosePopup} 
          onCancel={handleCancelPopup}
        />
      )}

    </div>
  );
}

export default StartExam;
