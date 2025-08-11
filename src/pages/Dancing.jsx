import './Navbar.css'
import './dancing.css'
import logo2 from '../assets/logo3.jpg';

const Dancing = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Dancing</p>
      </div>
       <div>
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2y5cfp/DancingBanner.jpg"
          alt="Dancing Banner"
        />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Dancing Lessons in Pune?</h2>
          <p>
            Whether you're dancing for fun, fitness, or dreams of the stage, Symphony Music & Arts is the perfect place to start your journey. Dance is not just movement — it's expression, rhythm, and confidence.
            Our classes cater to all levels and ages, blending technique with creativity in a supportive and high-energy environment. From classical to contemporary, Bollywood to hip-hop — we’ve got it all!
          </p>
        </section>

        <section className="program">
          <h2>Why to learn dancing at Symphony Music & Arts?</h2>
          <ul>
            <li>Dance techniques & foundational training</li>
            <li>Style-specific choreography (Bollywood, Hip-Hop, Contemporary, Classical, and more)</li>
            <li>Rhythm, timing, and musicality</li>
            <li>Strength, flexibility, and coordination</li>
            <li>Stage performance & expression</li>
            <li>Group and solo routines</li>
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

export default Dancing
