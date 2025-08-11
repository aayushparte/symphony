
import './Navbar.css';
import './services.css';

import logo2 from '../assets/logo3.jpg';
const Services = () => {
  const reg = () => {
    window.location.href = "./register";
  };

  const navigate = (page) => {
    window.location.href = `./${page}`;
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Our Services</p>
      </div>

      <div>
      <section className="services">
        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/singing.jpg" alt="Singing" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Singing")} style={{ cursor: 'pointer' }}>Singing</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/acting.jpg" alt="Acting" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Acting")} style={{ cursor: 'pointer' }}>Acting</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/zumba.jpg" alt="Zumba" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Zumba")} style={{ cursor: 'pointer' }}>Zumba</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/drawing.jpg" alt="Drawing" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Drawing")} style={{ cursor: 'pointer' }}>Drawing</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/dancing.jpg" alt="Dancing" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Dancing")} style={{ cursor: 'pointer' }}>Dancing</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/karaoke.jpg" alt="Karaoke" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Karaoke")} style={{ cursor: 'pointer' }}>Karaoke</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/yoga.jpg" alt="Yoga" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Yoga")} style={{ cursor: 'pointer' }}>Yoga</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/rangoli.jpg" alt="Rangoli" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Rangoli")} style={{ cursor: 'pointer' }}>Rangoli</p>
        </div>
      </section>

      <div className="footer-image">
        <img src="https://uploads.onecompiler.io/43r2h32z6/43r2gx8d6/music-footer.jpg" alt="Music Art" />
      </div>

      <div className="book-bottom">
        <button onClick={reg}>Book Now!</button>
      </div>
    </div>
    </div>
  )
}

export default Services
