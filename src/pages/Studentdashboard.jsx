import './Navbar.css';
import './studentdashboard.css';
import logo2 from '../assets/logo3.jpg';
import {  useState } from 'react';
import userApi from '../axios';
import { useEffect } from 'react';

const Studentdashboard = () => {
  
const [StudentData,setStudentData]=useState();

useEffect(() => {
  const fetchData = async () => {
    try {
      const email = localStorage.getItem("studentEmail"); // <-- get from localStorage
      if (!email) {
        alert("No email found in localStorage.");
        return;
      }

      const response = await userApi.post('/getdata', { email: email });
      setStudentData(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        alert('Student not found');
      } else {
        alert('Server error. Please try again.');
      }
      setStudentData(null);
    }
  };

  fetchData();
}, []);
  if (!StudentData) {
    return <div>Loading student dashboard...</div>;
  }

  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Student Dashboard</p>
      </div>

      <div>

      <div className="container">

        <div className="section">
          <h2>My Enrolled Course</h2><span>{StudentData.Subject}</span>
        </div>

        <div className="section">
          <h2>Upcoming Class</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24 July 2025</td>
                <td>{StudentData.Subject}</td>
                <td>5:00 PM</td>
              </tr>
            
            </tbody>
          </table>
        </div>

        

        <div className="section">
          <h2>Announcements</h2>
          <ul>
            <li>Art competition on 30th July – Register now!</li>
            <li> Keyboard class on 26th July is rescheduled to 27th July.</li>
          </ul>
        </div>

        <div className="section">
          <h2>My Profile</h2>
          <p><strong>Full Name:</strong> {StudentData.Name}</p>
          <p><strong>Email:</strong> {StudentData.Email}</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Studentdashboard
