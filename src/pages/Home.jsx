import './Navbar.css';
import logo2 from '../assets/logo3.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const Home = () => {
  const reg = () => {
    window.location.href = './register';
  };

  return (
    <div>
      {/* Belownav section */}
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title">Symphony Music & Arts</p>
      </div>

      {/* Banner image */}
      <img className="image1" src={image1} alt="banner" />

      {/* Description and side image container */}
      <div className="desc-image-container">
        <div className="desc1 animate-fadeInUp">
          <p className="desc2">Welcome to Symphony Music & Arts</p>
          <p className="desc3">
            Symphony Music & Arts is Pune's top-rated music training center and event organizer in 2024 & 2025. It's one of the most elite and professional organizations in Pune. Music is our life, our business, and our passion. We specialize…
          </p>
          <a href="./about" className="desc4">
            learn more...
          </a>
        </div>

        <img className="image2 animate-fadeInUp" src={image2} alt="symphony-about" />
      </div>

      {/* Register button */}
      <button onClick={reg} className="b1">
        <p className="b1content">Register Now!</p>
      </button>
    </div>
  );
};

export default Home;
