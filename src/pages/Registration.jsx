import './Navbar.css';
import './registration.css';
import logo2 from '../assets/logo3.jpg';
import { useState } from 'react';
import userApi from '../axios.js'; 

const Registration = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if all required fields are filled
    if (!formData.Name || !formData.Email || !formData.Number) {
      alert('Please fill all required fields including number.');
      return;
    }

    try {
      const response = await userApi.post('/adddata', formData);
      if (response.data.Success) {
        alert('Registered Successfully!');
      } else {
        alert('Error: ' + response.data.Message);
      }
    } catch (error) {
      console.error(error);
      alert('Submission failed!');
    }
  };

  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{ position: "relative", right: "-150px" }}>Registration</p>
      </div>

      <main className="main-layout">
        {/* Form Section */}
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <label>Your Name (required)</label>
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />

            <label>Your Email (required)</label>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />

            <label>Subject</label>
            <input type="text" name="Subject" value={formData.Subject} onChange={handleChange} />

            <label>Your Phone Number (required)</label>
            <input type="number" name="Number" value={formData.Number} onChange={handleChange} required />

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Our Services</h3>
          <ul>
            <li>Rangoli Orders</li>
            <li>Other</li>
            <li>Birthday Party Events</li>
            <li>Karaoke</li>
          </ul>

          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/register">Enquire Now!</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Registration;
