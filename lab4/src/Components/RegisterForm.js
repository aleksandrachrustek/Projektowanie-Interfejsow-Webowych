import React, { useState } from 'react';
import { registerWithEmailAndPassword } from './firebaseConfig';

const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password).then(() => {
      onClose();
    }).catch((error) => {
      console.error("Error registering with email and password:", error);
    });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="button primary">Register</button>
        <button type="button" className="button secondary" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default RegisterForm;
