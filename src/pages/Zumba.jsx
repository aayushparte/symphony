import './Navbar.css'
import './zumba.css'
import logo2 from '../assets/logo3.jpg';

const Zumba = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Zumba</p>
      </div>
       <div>
      {/* Banner */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2z2hca/zumbabanner.jpg"
          alt="Zumba Banner"
        />
      </div>

      {/* Content */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Zumba Lessons in Pune?</h2>
          <p>
            Get fit, have fun, and dance your way to better health with Zumba at Symphony Music &
            Arts! Zumba is a high-energy, full-body workout that feels more like a party than
            exercise. Set to upbeat music and guided by certified instructors, each session boosts
            your stamina, burns calories, and lifts your mood. Perfect for all fitness levels — no
            dance experience needed!
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Zumba at Symphony Music & Arts?</h2>
          <ul>
            <li>Easy-to-follow, fun choreography</li>
            <li>A mix of Latin, Bollywood, Hip-Hop, and global dance styles</li>
            <li>Full-body cardio workout and toning</li>
            <li>Improved coordination, endurance, and confidence</li>
            <li>Stress relief in a fun, social environment.</li>
          </ul>
        </section>

        <div className="book-now-btn">
          <button onClick={reg}>Book Now!</button>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Zumba
