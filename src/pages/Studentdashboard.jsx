import './Navbar.css';
import './studentdashboard.css';
import logo2 from '../assets/logo3.jpg';
import { useState, useEffect } from 'react';
import userApi from '../axios';

const Studentdashboard = () => {
  
  const [StudentData, setStudentData] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("studentEmail"); 
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

  // Live date updater
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
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
                  <td>{String(currentDate.getDate()).padStart(2, '0') + "-" +
   String(currentDate.getMonth() + 1).padStart(2, '0') + "-" +
   currentDate.getFullYear()}</td>
                  <td>{StudentData.Subject}</td>
                  <td>5:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section">
            <h2>Announcements</h2>
            <ul>
              <li>Art competition on 30th August – Register now!</li>
              <li>{StudentData.Subject} class on 26th August is rescheduled to 29th August.</li>
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

export default Studentdashboard;
