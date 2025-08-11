import logo2 from '../assets/logo3.jpg';
import './Navbar';
import './musicalinstruments.css';
const Musicalinstruments = () => {
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
        <p className="title" style={{position:"relative",right:"-140px"}}>Musical Training</p>
      </div>

      <div>
      <section className="services">
        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/Harmoniam.jpg" alt="Harmonium" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Harmonium")} style={{ cursor: 'pointer' }}>Harmonium</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/Gitar.jpg" alt="Guitar" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Guitar")} style={{ cursor: 'pointer' }}>Guitar</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/Tabla.jpg" alt="Tabla" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Tabla")} style={{ cursor: 'pointer' }}>Tabla</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/Dholkii.jpg" alt="Dholaki" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Dholaki")} style={{ cursor: 'pointer' }}>Dholaki</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/Drums.html.jpg" alt="Drums" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Drums")} style={{ cursor: 'pointer' }}>Drums</p>
        </div>

        <div className="card">
          <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/keyboard.html.jpg" alt="Keyboard" />
          <button onClick={reg}>Book Now!</button>
          <p onClick={() => navigate("Keyboard")} style={{ cursor: 'pointer' }}>Keyboard</p>
        </div>
      </section>

      <div className="footer-image">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/6cards.jpg" alt="Music Art" />
      </div>

      <div className="book-bottom">
        <button onClick={reg}>Book Now!</button>
      </div>
    </div>

    </div>
  )
}

export default Musicalinstruments
