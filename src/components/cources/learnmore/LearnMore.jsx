import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { OurCources } from "../../../OurCources";
import Lectures from "../lectures/Lecture";
import Notes from "../notes/Notes";
import Syllabus from "../syllabus/Syllabus";
import Exams from "../exam/Exam"; // Import Exams component
import styles from "./LearnMore.module.css";

function LearnMore() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("");
  const course = OurCources.find((c) => c.id === id);

  if (!course) {
    return <div>This course is not available!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.image}>
          <img src={course.CourceImage} alt={course.heading} />
        </div>
        <div className={styles.heading}>
          <h4>{course.heading}</h4>
          <p>Instructor: {course.instructor || "Not specified"}</p>
        </div>
        <div className={styles.description}>
          {course.description || "No description available."}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setActiveTab("Lectures")}>Lectures</button>
          <button onClick={() => setActiveTab("Syllabus")}>Syllabus</button>
          <button onClick={() => setActiveTab("Notes")}>Notes</button>
          <button onClick={() => setActiveTab("Exams")}>Exams</button>
        </div>
      </div>
      <div className={styles.left}>
        {activeTab === "Syllabus" && <Syllabus syllabus={course.Syllabus} />}
        {activeTab === "Notes" && <Notes notes={course.Notes} />}
        {activeTab === "Lectures" && <Lectures lectures={course.Lectures} />}
        {activeTab === "Exams" && <Exams exams={course.Exams} />} {/* Pass exams as a prop */}
      </div>
    </div>
  );
}

export default LearnMore;
