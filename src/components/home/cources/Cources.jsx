import React from 'react';
import { CourcesData } from '../../../CourcesData'; // Your courses data
import { IoStarOutline } from "react-icons/io5"; // Import Ionicons star icon
import styles from './Cources.module.css';
import { IoLibraryOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

function Cources() {
    const navigate = useNavigate();  // Initialize navigate function

    // Function to render stars dynamically based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars (whole number part)
        const halfStar = (rating % 1) !== 0; // If there's a half star (if the decimal part is not 0)
        const stars = [];

        // Render full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoStarOutline key={`full-${i}`} color="orange" backgroundColor="orange" />);
        }

        // Render half star if needed
        if (halfStar) {
            stars.push(<IoStarOutline key="half" color="orange" />);
        }

        // Add empty stars (if needed) to make a total of 5
        const emptyStars = 5 - stars.length; // Remaining empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<IoStarOutline key={`empty-${i}`} color="orange" />);
        }

        return stars;
    };

    // Function to handle "Browse More Courses" button click
    const handleBrowseMore = () => {
        navigate('/cources');  // This will navigate to the courses page
    };

    return (
        <div className={styles.heading}>
            <div className={styles.course}>POPULAR COURSES</div>
            <div className={styles.name}>Pick A Course To Get Started</div>
            <div className={styles.courses_container}>
                {CourcesData.map((course, index) => (
                    <div key={index} className={styles.course_card}>
                        {/* Image Section */}
                        <div className={styles.time}><FiClock /> {course.time}</div>
                        <img src={course.image} className={styles.image} alt={course.type} />

                        {/* Course Info */}
                        <h3>{course.type}</h3>
                        <p>{course.details}</p>

                        {/* Rating */}
                        <p>
                            {renderStars(course.rating)} {/* Render dynamic stars */}
                            <span style={{ color: 'orange', fontWeight: 'bold' }}></span> {course.rating}  {/* Show numeric rating */}
                        </p>

                        <p>{course.price}</p>

                        {/* Lesson and Student Info */}
                        <div className={styles.info}>
                            <div><IoLibraryOutline color='grey' />{course.lesson}</div>
                            <div><IoPeopleOutline color='grey' />{course.students}</div>
                        </div>

                        {/* Price */}
                    </div>
                ))}
            </div>
            <button className={styles.button} onClick={handleBrowseMore}>Browse more courses<IoIosArrowRoundForward size={25} /></button>
        </div>
    );
}

export default Cources;
