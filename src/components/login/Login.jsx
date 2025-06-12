import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import { FcGoogle } from "react-icons/fc";
import { MdPhone } from "react-icons/md";

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate();
  const location = useLocation();

  // Predefined credentials
  const users = {
    student: { userId: 'student', password: 'student123' },
    teacher: { userId: 'teacher', password: 'teacher123' }

  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo);
    }
  }, [navigate, location]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate login based on selected role
    if (userId === users[role].userId && password === users[role].password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role); // Store user role for further access control
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google Login Clicked');
    // Here, you can integrate Firebase or OAuth for real Google login
  };

  const handlePhoneLogin = () => {
    alert('Phone Login Clicked');
    // Implement phone authentication logic
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left Side Image */}
      <div className={styles.leftImage}>
        <img src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg" alt="Login Visual" />
      </div>

      {/* Right Side Login Form */}
      <div className={styles.loginBox}>
        <h2>Login</h2>

        {/* Role Selection */}
        <div className={styles.roleSelection}>
          <button
            type="button"
            className={`${styles.roleButton} ${role === 'student' ? styles.activeButton : ''}`}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`${styles.roleButton} ${role === 'teacher' ? styles.activeButton : ''}`}
            onClick={() => setRole('teacher')}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />

          <button type="submit" className={styles.loginButton}>Login</button>
        </form>

        {/* or line */}
        <div className={styles.orline}>
          <div className={styles.line}></div>
          <div className={styles.ortext}>or</div>
          <div className={styles.line}></div>
        </div>

        {/* Login with Google & Phone */}
        <div className={styles.authButtons}>
          <button onClick={handleGoogleLogin} className={styles.googleButton}>
            <FcGoogle className={styles.icon} /> Login with Google
          </button>
          <button onClick={handlePhoneLogin} className={styles.phoneButton}>
            <MdPhone className={styles.icon} /> Login with Phone
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
