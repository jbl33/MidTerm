import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');   

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit   
 = async () => {
    // Simulates sending an email but doesn't actually
    // Trying to find a free API for sending emails
    alert(`Sent registration details to ${email}`);
  };

  return (
    <div>
      <h1>Congratulations! You've qualified for HackerCon!</h1>
      <p>Please register to secure your spot.</p>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}   />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default WelcomePage;