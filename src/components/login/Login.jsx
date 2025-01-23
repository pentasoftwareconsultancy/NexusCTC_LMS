import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
    const [role, setRole] = useState('student'); // Track the selected role
    const [loggedIn, setLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle role selection
    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };

    // Function to handle login (mock implementation)
    const handleLogin = () => {
        if (!userId.trim() || !password.trim()) {
            alert('Please enter both User ID and Password');
            return;
        }
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserId('');  // Clear the User ID
        setPassword(''); // Clear the Password
        navigate('/login');
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

    const handleProfileClick = () => {
        navigate('/cources');
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
                        {loggedIn ? (
                            <>
                                <div className={styles.signInSuccess}>Sign in successfully</div>
                                <div className={styles.dropdownContainer}>
                                    <button onClick={() => setShowDropdown(!showDropdown)} className={styles.logindropdownButton}>
                                        ▼
                                    </button>
                                    {showDropdown && (
                                        <div className={styles.dropdownMenu}>
                                            <div className={styles.dropdownItem} onClick={handleProfileClick}>Profile</div>
                                            <div className={styles.dropdownItem} onClick={handleLogout}>Logout</div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
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

                                <div className={styles.Labels}>
                                    <label htmlFor="userId" className={styles.Email}>User ID:</label>
                                    <input 
                                        type="text" 
                                        id="userId" 
                                        placeholder="Enter your User ID" 
                                        value={userId} 
                                        onChange={(e) => setUserId(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <div className={styles.Labels}>
                                    <label htmlFor="password" className={styles.Password}>Password:</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        placeholder="Enter your password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required 
                                    />
                                </div>

                                <div className={styles.SignPass}>
                                    <div className={styles.signIn} onClick={handleLogin}>Sign in</div>
                                    <div className={styles.Forgot}>Forgot Password</div>
                                </div>
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


                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
