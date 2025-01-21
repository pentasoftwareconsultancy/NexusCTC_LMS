import React, { useState } from "react";
import styles from "./FinishedExamPopup.module.css";

function FinishedExamPopup({ onClose, onCancel }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true); // Show the second popup
  };

  const handleCloseSecondPopup = () => {
    setIsSubmitted(false); // Close the second popup
    onClose(); // Call the parent's onClose if needed
  };
  return (
    <>
      {!isSubmitted ? (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h2>Exam Finished!!!</h2>
            <p>Are you sure you want to submit the exam?</p>
            <button onClick={handleSubmit} className={styles.submitButton}>
              Submit Exam
            </button>
            <button onClick={onCancel} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h2>Success!</h2>
            <p>You have successfully submitted the exam.</p>
            <button onClick={handleCloseSecondPopup} className={styles.okButton}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FinishedExamPopup;
