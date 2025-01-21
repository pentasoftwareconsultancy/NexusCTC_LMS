import React, { useState } from 'react';
import styles from './Notes.module.css';

function Notes({ notes }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <h2>Notes</h2>
      {notes ? (
        notes.map((note, index) => (
          <div key={index} className={styles.noteContainer}>
            <button
              onClick={() => toggleContent(index)}
              className={styles.toggleButton}
            >
              {note.title}
              <div className={styles.plus}>
                {expandedIndex === index ? '−' : '+'}
              </div>
            </button>
            {expandedIndex === index && (
              <ul className={styles.list}>
                {note.content.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <span>{item}</span>
                    <a
                      href={note.pdfUrl}
                      download={`Chapter_${index + 1}_Content_${idx + 1}.pdf`}
                      className={styles.downloadButton}
                    >
                      Download PDF
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <p>Notes are not available for this course.</p>
      )}
    </div>
  );
}

export default Notes;
