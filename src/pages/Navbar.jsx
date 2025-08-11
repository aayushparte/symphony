import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../assets/logo2.jpg'; // Adjust path based on where you place images
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img className="logo1" src={logo1} alt="Logo" />
        <div className="navdiv">
          <Link className="aa" to="/">HOME</Link>
          <Link className="aa" to="/about">ABOUT US</Link>
          <Link className="aa" to="/services">SERVICES</Link>
          <Link className="aa" to="/instruments">MUSICAL INSTRUMENTS</Link>
          <Link className="aa" to="/contact">CONTACT US</Link>
          <Link className="aa" to="/login">LOGIN</Link>
        </div>
      </nav>
      {/* <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title">Symphony Music & Arts</p>
      </div> */}
    </>
  );
}

export default Navbar;