import './Navbar.css'
import './dholaki.css'
import logo2 from '../assets/logo3.jpg';

const Dholaki = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Dholaki</p>
      </div>
      <div>
      {/* Banner Image */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/DholkiPage.jpg" alt="Dholaki Banner" />
      </div>

      {/* Content */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Dholaki class</h2>
          <p>
            Bring the festive spirit alive with Dholaki Classes at Symphony Music & Arts!
            The dholaki, a beloved hand drum widely used in folk, devotional, and celebratory music, 
            is perfect for anyone who loves rhythm and cultural music. Whether you’re a beginner or want 
            to enhance your playing skills, our experienced instructors will teach you traditional beats, 
            rhythms, and performance techniques that make the dholaki so special.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Dholaki at Symphony Music & Arts?</h2>
          <ul>
            <li>Basic hand techniques and strokes</li>
            <li>Popular folk and devotional rhythms</li>
            <li>Playing styles for bhajans, garbas, and regional music</li>
            <li>Accompaniment and solo playing skills</li>
            <li>Performance and stage presence tips</li>
            <li>Understanding rhythm cycles and tempo control</li>
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

export default Dholaki
