import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  

    try {
      const res = await fetch('http://localhost:8000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert(' Admin logged in!');
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        alert(data.message || ' Not an admin or invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert(' Server error, try again later');
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      <form onSubmit={handleLogin} className="admin-login-form">
        <label className="admin-login-label">
          Email:
          <input
            type="email"
            className="admin-login-input"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="admin-login-label">
          Password:
          <input
            type="password"
            className="admin-login-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="admin-login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
