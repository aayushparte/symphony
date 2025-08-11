import './Navbar.css'
import './tabla.css'
import logo2 from '../assets/logo3.jpg';

const Tabla = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Tabla</p>
      </div>
       <div>
      {/* Banner */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/TablaPage.jpg" alt="Tabla Banner" />
      </div>

      {/* Content */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Tabla class in Pune?</h2>
          <p>
            Discover the rhythmic heartbeat of Indian classical music with Tabla Classes at Symphony
            Music & Arts! Whether you’re a beginner eager to learn or an advanced student looking to
            refine your skills, our tabla program offers structured lessons that blend traditional
            techniques with modern teaching methods. Guided by skilled instructors, you’ll master the
            art of rhythm, hand techniques, and complex tala patterns to accompany vocalists,
            instrumentalists, or solo performances.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Tabla at Symphony Music & Arts?</h2>
          <ul>
            <li>Basics of tabla: hand positioning and basic bols (sounds)</li>
            <li>Understanding and practicing different talas (rhythmic cycles)</li>
            <li>Compositions and improvisation techniques</li>
            <li>Accompaniment skills for classical music, bhajans, and fusion</li>
            <li>Speed, clarity, and coordination exercises</li>
            <li>Theory of rhythm and tabla notation</li>
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

export default Tabla
