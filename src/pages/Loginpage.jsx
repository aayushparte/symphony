import logo2 from '../assets/logo3.jpg';
import './loginpage.css';
import './Navbar'

const Loginpage = () => {
  const handleLogin = (userType) => {
    if (userType === 'student') {
      window.location.href = './studentlogin';
    } else if (userType === 'admin') {
      window.location.href = './adminlogin';
    }
  };

  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-220px"}}>Login</p>
      </div>

      <div className="login-container">
      <h1 className="login-heading">Select Login Type</h1>
      <div className="login-buttons">
        <button className="login-button" onClick={() => handleLogin('student')}>
          <p className="clr">
            Student Login
          </p>
        </button>
        <button className="login-button" onClick={() => handleLogin('admin')}>
          <p className="clr">
            Admin Login
          </p>
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Loginpage;
