import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GuestExam.module.css';

const GuestExam = () => {
    const [openPopup, setOpenPopup] = useState(true); // Popup initially open
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Redirect to StartExam with form data
        navigate('/startexam/1', {
            state: { name: formData.name, studentId: formData.phone },
        });
    };

    return (
        <div>
            {/* Popup */}
            {openPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h2>Guest Exam</h2>
                        <p>Welcome to the Guest Exam Page</p>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="course">Course:</label>
                                <input
                                    type="text"
                                    id="course"
                                    placeholder="Enter your course"
                                    value={formData.course}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.GuestSubmit}>Submit</button>
                        </form>

                        {/* Close Button */}
                        <button
                            className={styles.closeButton}
                            onClick={() => setOpenPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuestExam;
