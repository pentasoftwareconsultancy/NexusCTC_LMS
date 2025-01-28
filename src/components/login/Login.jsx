import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      // If logged in, redirect to the course details page or wherever the user came from
      const redirectTo = location.state?.from || '/';  // Redirect to the page user came from
      navigate(redirectTo);
    }
  }, [navigate, location]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId === 'admin' && password === 'admin123') {
      // Store the login state
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to the course details page or wherever the user tried to access
      const redirectTo = location.state?.from || '/';  // Default to '/' if no state
      navigate(redirectTo);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="User ID" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
