import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './Lecture.module.css';

function Lectures({ lectures }) {
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeVideos, setActiveVideos] = useState({});
  const [watchedLectures, setWatchedLectures] = useState({});

  // Check if the lectures prop is valid
  if (!lectures || !Array.isArray(lectures)) {
    return <div className={styles.error}>No lectures available.</div>;
  }

  const toggleModule = (index) => {
    setActiveModuleIndex(activeModuleIndex === index ? null : index);
    setActiveVideos({}); // Reset active videos when a new module is toggled
  };

  const selectVideo = (moduleIndex, videoLink, lectureIndex) => {
    setActiveVideos((prevState) => ({
      ...prevState,
      [moduleIndex]: prevState[moduleIndex] === videoLink ? null : videoLink,
    }));
    setWatchedLectures((prevState) => ({
      ...prevState,
      [`${moduleIndex}-${lectureIndex}`]: false, // Reset watched state for new video
    }));
  };

  const markVideoAsWatched = (moduleIndex, lectureIndex) => {
    setWatchedLectures((prevState) => ({
      ...prevState,
      [`${moduleIndex}-${lectureIndex}`]: true, // Mark video as watched
    }));
  };

  return (
    <div className={styles.content}>
      <h2>Lectures</h2>
      {lectures.map((module, index) => (
        <div key={index}>
          <button
            onClick={() => toggleModule(index)}
            className={styles.toggleButton}
          >
            {activeModuleIndex === index ? 'Hide ' + module.title : 'Show ' + module.title}
          </button>
          {activeModuleIndex === index && (
            <ul className={styles.lectureList}>
              {module.lectures.map((lecture, idx) => (
                <li key={idx} className={styles.lectureItem}>
                  <div className={styles.lectureInfoContainer}>
                    <div className={styles.numberTitleContainer}>
                      <div className={styles.numberline}>
                        <span
                          className={`${styles.circle} ${
                            watchedLectures[`${index}-${idx}`]
                              ? styles.watchedCircle
                              : styles.unwatchedCircle
                          }`}
                          onClick={() => selectVideo(index, lecture.link, idx)}
                        >
                          {watchedLectures[`${index}-${idx}`] ? '✔' : idx + 1}
                        </span>
                        {idx < module.lectures.length - 1 && (
                          <div className={styles.connectionLine}></div>
                        )}
                      </div>
                      <button
                        onClick={() => selectVideo(index, lecture.link, idx)}
                        className={`${styles.lectureButton} ${
                          watchedLectures[`${index}-${idx}`] ? styles.watched : ''
                        }`}
                      >
                        {lecture.title}
                      </button>
                    </div>
                  </div>

                  {/* Video Player Section */}
                  {activeVideos[index] === lecture.link && (
                    <div className={styles.videoPlayerContainer}>
                      <ReactPlayer
                        url={activeVideos[index]}
                        controls
                        width="100%"
                        height="400px"
                        onEnded={() => markVideoAsWatched(index, idx)}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Lectures;
