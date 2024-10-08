import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.toLowerCase() === 'applicant' && password === 'SuperSecure') {
      navigate('/landing'); // Navigate to the landing page if credentials are correct
    } else {
      alert('Invalid credentials. You are not allowed to move forward!'); // Display an error if they are not
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}   />
      <button onClick={handleLogin}>Take Qualifier Quiz</button>
    </div>
  );
};

export default LoginPage;