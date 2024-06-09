import React, { useState } from 'react';
import { signInWithEmailAndPasswordFunction } from './firebaseConfig';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordFunction(email, password).then(() => {
      onClose();
    }).catch((error) => {
      console.error("Error logging in with email and password:", error);
    });
  };

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="button primary">Log In</button>
        <button type="button" className="button secondary" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default LoginForm;
