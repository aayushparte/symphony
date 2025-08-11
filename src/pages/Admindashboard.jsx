import './Navbar.css';
import './admindashboard.css';

import logo2 from '../assets/logo3.jpg';
import { useState } from 'react';
import userApi from '../axios'
import userApi2 from '../axios2';
const Student = () => {
    const [email,setemail]=useState();
    const [emailstu,setemailstu]=useState();
    const [passstu,setpassstu]=useState();
    const [studentData, setStudentData] = useState();
    const [error, setError] = useState('');
    const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await userApi.post('/getdata', { email: email });

      setStudentData(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Student not found');
      } else {
        setError('Server error. Please try again.');
      }
      setStudentData(null);
    }
  };
  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await userApi2.post('/addStudent', {
      Email: emailstu,
      Password: passstu
    });

    if (response.data.Success) {
      setError('');
      alert('Registration successful!');
      // Optional: Clear the form or redirect
    } else {
      setError(response.data.Message || 'Registration failed');
    }

  } catch (err) {
    console.error(err);
    if (err.response && err.response.status === 409) {
      setError('Student already exists');
    } else if (err.response && err.response.status === 400) {
      setError('Missing Fields');
    } else {
      setError('Server error. Please try again.');
    }
  }
};

  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Admin Dashboard</p>
      </div>
      <div className="panel-container">
  
      <div className="registration-section">
        <h2>Student Registration</h2>
        <form>
          <input type="text" placeholder="Email" onChange={(e)=>{setemailstu(e.target.value)}} />
          <input type="text" placeholder="Create Password" onChange={(e)=>{setpassstu(e.target.value)}} />
          <button type="submit" onClick={handleRegister}>Register</button>
        </form>
      </div>

      
      <div className="search-section">
        <h2>Search Students</h2>
        <button style={{position:"relative",top:"30px",left:"650px"}} onClick={handleClick}> 🔍 </button>
        <input type="email" placeholder="Enter student email" onChange={(e)=>{setemail(e.target.value)}}  />
        <div>
        {studentData && (
  <div>
    <p><strong>Name:</strong> {studentData.Name}</p>
    <p><strong>Email:</strong> {studentData.Email}</p>
    <p><strong>Subject:</strong> {studentData.Subject}</p>
    <p><strong>Number:</strong> {studentData.Number}</p>
  </div>
)}


        </div>
      </div>
    </div>
    </div>
  )
}

export default Student
