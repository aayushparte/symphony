
import './Navbar.css'; 
import logo2 from '../assets/logo3.jpg';
const Aboutus = () => {
  const reg = () => {
    window.location.href = './register';
  };
  return (
    
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-170px"}}>About Us</p>
      </div>
      <div className="about-container">
      <p className="intro-text">
        <strong>Symphony Music & Arts</strong> is Pune's top rated Music training center & Event Organizer in 2024 & 2025 and one of the most elite and professional organization in Pune. Music is our life, our business and our passion. We specialize in teaching music and organizing events for children, adults and also teachers & professionals. We are proud to deliver high quality music classes and event planner with our professional team members.
      </p>

      <h2 className="section-heading">Our Mission :</h2>
      <p className="paragraph-text">
        Our Mission is to be recognized as a leading center entrusted with the exemplary development of young artistic talent that delights and enriches the community's senses through performances that foster a deep appreciation and desire for creative pursuits.
      </p>

      <h2 className="section-heading">Our Vision :</h2>
      <p className="paragraph-text">
        Our Vision is to foster a cycle of creative contribution within the community by utilizing our passion and in-depth knowledge of the arts to nurture talented and well-rounded individuals.
      </p>

      <h2 className="section-heading">Our Value :</h2>
      <p className="paragraph-text">
        Our Values are founded upon a steadfast dedication to develop the unique skills of each and every staff member and student within a nurturing, family-centered environment where we respect one another. We are especially committed to working with local institutions that share our social responsibility goals.
      </p>

      <h2 className="section-heading">Why Symphony Music & Arts..?</h2>
      <ul className="why-list">
        <li>Friendly & Family Environment</li>
        <li>Professional, Yet Commercial</li>
        <li>Flexible schedule</li>
        <li>Five star customer service</li>
        <li>Custom Package for your Busy Schedule</li>
        <li>Newly equipped, spacious studios</li>
        <li>Professional office staff</li>
        <li>Your satisfaction is our top priority</li>
        <li>Student Band & student Concerts</li>
        <li>Excellent Music Education</li>
        <li>Motivated students inspiring others</li>
        <li>Highly trained, experienced instructors</li>
        <li>Ready-to-learn environment</li>
        <li>Friendly atmosphere</li>
        <li>Inclusive, welcoming environment for all</li>
        <li>We are dedicated to giving students the best possible learning experience</li>
      </ul>

      <div className="book-bottom">
        <button onClick={reg} className="book-button">
          Book Now !
        </button>
      </div>
    </div>
      
    </div>
 
  )
}

export default Aboutus
