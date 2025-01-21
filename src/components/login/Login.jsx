import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
    const [role, setRole] = useState('student'); // Track the selected role

    // Function to handle role selection
    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };

    // Function to handle Google login (you can replace this with your actual login logic)
    const handleGoogleLogin = () => {
        console.log('Google Login Clicked');
        // Here you can integrate Google OAuth functionality
    };

    // Function to handle Phone login (you can replace this with your actual login logic)
    const handlePhoneLogin = () => {
        console.log('Phone Login Clicked');
        // Here you can implement phone number authentication logic
    };

    return (
        <div>
            <div className={styles.LoginContainer}>

                <div className={styles.LeftLogin}>
                    <img 
                        src='https://knowledgemission.kerala.gov.in/img/official-login.jpg' 
                        className={styles.LeftLoginImage} 
                        alt="Login Illustration"
                    />
                </div>

                <div className={styles.RightLogin}>
                    <div className={styles.RightContainer}>
                        <div className={styles.signin}>Sign in</div>

                        <div className={styles.studTeacher}>
                            <div
                                className={`${styles.stud} ${role === 'Student' ? styles.active : ''}`}
                                onClick={() => handleRoleSelect('Student')}>
                                Student
                            </div>
                            <div
                                className={`${styles.Teacher} ${role === 'Teacher' ? styles.active : ''}`}
                                onClick={() => handleRoleSelect('Teacher')}>
                                Teacher
                            </div>
                        </div>

                        {/* Conditional Rendering of Forms Based on Role */}
                        {role && (
                            <div className={styles.Labels}>
                                <label htmlFor="user id" className={styles.Email}>User ID:</label>
                                <input
                                    type="user id"
                                    name="user id"
                                    id="user id"
                                    placeholder="Enter your User ID"
                                    required
                                />
                            </div>
                        )}

                        {role && (
                            <div className={styles.Labels}>
                                <label htmlFor="password" className={styles.Password}>Password:</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="password"
                                    placeholder="Enter your password"
                                    aria-placeholder="Enter your password"
                                    required
                                />
                            </div>
                        )}

                        {/* Teacher-specific ID Field */}
                        {/* {role === 'Teacher' && (
                            <div className={styles.Labels}>
                                <label htmlFor="teacherId" className={styles.TeacherId}>Teacher ID:</label>
                                <input
                                    type="text"
                                    name="TeacherId"
                                    id="teacherId"
                                    placeholder="Enter your Teacher ID"
                                    aria-placeholder="Enter your Teacher ID"
                                    required
                                />
                            </div>
                        )} */}

                        {role && (
                            <div className={styles.SignPass}>
                                <div className={styles.signIn}>Sign in</div>
                                <div className={styles.Forgot}>Forgot Password</div>
                            </div>
                        )}

<div className={styles.orline}>
    <div className={styles.line}></div>
    <div className={styles.orText}>or</div>
    <div className={styles.line}></div>
</div>

                        {/* Google Login Button */}
                        <div className={styles.GoogleLogin} onClick={handleGoogleLogin}>
                            <div className={styles.googleBtn}>
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" 
                                    alt="Google Logo" 
                                    className={styles.googleIcon}
                                />
                                Login with Google
                            </div>
                        </div>

                        {/* Phone Login Button */}
                        <div className={styles.PhoneLogin} onClick={handlePhoneLogin}>
                            <div className={styles.phoneBtn}>
                                <img 
                                    src="https://media.istockphoto.com/id/1180028723/vector/phone-with-waves-symbol-icon-black-simple-isolated-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=0t-EGRLmVQvE6gDdbAw3XWm0G84ODOkYG_HnUrJM09I=" 
                                    alt="Phone Icon" 
                                    className={styles.phoneIcon}
                                />
                                Login with Phone
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
