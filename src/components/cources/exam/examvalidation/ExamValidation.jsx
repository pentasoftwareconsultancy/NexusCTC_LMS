// utils/examValidation.js

export const ExamValidation= (attemptedQuestions, totalQuestions) => {
    // Check if the number of attempted questions matches the total questions
    return attemptedQuestions.length >= totalQuestions;
  };
  