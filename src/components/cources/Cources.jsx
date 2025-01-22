import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa'; 
import { IoLibraryOutline, IoPeopleOutline } from "react-icons/io5";
import { OurCources } from '../../OurCources';  
import styles from './Cources.module.css'; 
import ScrollToTop from '../Scrolltop';  

// Component for expandable course type text
const CourseType = ({ type }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`${styles.type} ${expanded ? styles.expanded : ''}`}  
      onClick={() => setExpanded(!expanded)} 
      title={!expanded ? type : ''}
    >
      {type}
      {!expanded && <span className={styles.read_more}>Read More</span>}
    </div>
  );
};

// Cources Component
function Cources() {
  const location = useLocation();  
  
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]);

  return (
    <div className={styles.courses_container}>
      <ScrollToTop />
      
      <div className={styles.head}>
        <h1>We Offer the Following Courses</h1>
        <p>Best Software training institute in Pune and certification provider offers professional training across India. Advance your career today!</p>
      </div>

      <div className={styles.details}>
        {OurCources.map((course, index) => (
          <div key={index} className={styles.course_card}>
            <div className={styles.time}>{course.time}</div>
            <img src={course.image} alt={course.heading} className={styles.course_image} />

            <div className={styles.content}>
              <div className={styles.heading}>{course.heading}</div>
              <CourseType type={course.type} />

              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  i < Math.floor(course.rating) ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                ))}
                <p>{course.rating}</p>
              </div>

              <div className={styles.price}>{course.price}</div>

              <div className={styles.studlesson}>
                <div className={styles.lesson}> 
                  <IoLibraryOutline color='grey' />{course.lesson}
                </div>
                <div className={styles.students}>
                  <IoPeopleOutline color='grey' />{course.students}
                </div>

                <Link to={`/course/${course.id}`}>
                  <button className={styles.learn_more_button}>{course.button}</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cources;
