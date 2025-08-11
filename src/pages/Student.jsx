import React, { useState } from 'react';
import './Navbar.css';
import './student.css';
import logo2 from '../assets/logo3.jpg';
import userApi2 from '../axios2';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const nav=useNavigate()
  const [loginMessage, setLoginMessage] = useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const handleLogin = async (e) => {
    console.log("Login Data:", { Email: email, Password: password });

  e.preventDefault();

  try {
    const response = await userApi2.post('/getStudent', {
      Email: email,
      Password: password
    });

    const data = response.data;

    if (data.Success) {
      setLoginMessage(data.Message);
      alert(data.Message);
      localStorage.setItem("studentEmail", email);
 window.location.href = "./studentdashboard";

    } else {
      alert(data.Message);
    }

  } catch (err) {
    console.error(err);
    alert(err)
   
  }
};

    

  return (
    <div>
      {/* Navbar Section (mandatory as per your request) */}
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{ position: "relative", right: "-150px" }}>Student Login</p>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <h2>Student Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Email"
            required
            onChange={(e)=>{setemail(e.target.value)}}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e)=>{setpassword(e.target.value)}}
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

export default Student;
