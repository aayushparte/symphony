import React, { useState } from 'react';
import './Navbar.css';
import './admin.css';
import logo2 from '../assets/logo3.jpg';

const Admin = () => {
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    const validUsername = 'parteaayush17@gmail.com';
    const validPassword = 'aayush@123';

    if (username === validUsername && password === validPassword) {
      setLoginMessage('Access Granted');

      setTimeout(() => {
        window.location.href = './admindashboard';
      }, 2000);
    } else {
      setLoginMessage('Access denied, please try again');
    }
  };

  return (
    <div>
      {/* Navbar Section (mandatory as per your request) */}
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{ position: "relative", right: "-150px" }}>Admin Login</p>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>

        {/* Login Message */}
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '15px',
            color: loginMessage === 'Access Granted' ? 'green' : 'red',
          }}
        >
          {loginMessage}
        </p>
      </div>
    </div>
  );
};

export default Admin;
