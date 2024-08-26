// src/components/LoginPage.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

<Link to="/">Login Page</Link>

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>تسجيل الدخول</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          required
        />
        <button type="submit">تسجيل الدخول</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
