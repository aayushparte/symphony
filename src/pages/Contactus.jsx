import './Navbar.css';
import './contactus.css';

import logo2 from '../assets/logo3.jpg';

const Contactus = () => {
  const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Contact Us</p>
      </div>
      <div>
      <section className="contact-section">
        <div className="info-block">
          <p><strong>📞 Phone:</strong> +91 9008007001</p>
          <p><strong>📧 Email:</strong> symphonymusic@gmail.com</p>
          <p><strong>📍 Location:</strong> Pune</p>
        </div>
        <button onClick={reg} className="book-btn">Book Now!</button>
      </section>

      <div className="address-box">
        <p>Address: S2/2, Sahyadri Co Op Society, next to Saily Medical Stores, Shivajinagar, Pune, Maharashtra 400042.</p>
        <p>Mobile: +91 9008007001</p>
        <p>Email: symphonymusic@gmail.com</p>
      </div>

      <main className="main-layout">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.447788391272!2d73.84284757489563!3d18.5545674825431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf65d4c9a3c7%3A0xa2456b5f2c6c346d!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <aside className="sidebar">

          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="register">Enquire Now!</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </aside>
      </main>
    </div>
    </div>
  )
}

export default Contactus
