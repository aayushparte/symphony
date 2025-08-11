import './Navbar.css'
import './harmonium.css'
import logo2 from '../assets/logo3.jpg';

const Harmonium = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Harmonium</p>
      </div>
      <div>
      {/* Banner Image */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/HarmoniamPage.jpg" alt="Harmonium Banner" />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Harmonium class in Pune?</h2>
          <p>
            Explore the rich sounds of Indian classical and devotional music with Harmonium Classes at
            Symphony Music & Arts! The harmonium is a versatile and expressive instrument, perfect for
            both vocal accompaniment and solo performance. Whether you're a beginner or want to advance
            your skills, our classes are designed to guide you step-by-step. Led by experienced teachers,
            our harmonium program combines traditional techniques with practical exercises to help you
            play confidently and musically.
          </p>
        </section>

        <section className="program">
          <h2>Why learn Harmonium at Symphony Music & Arts?</h2>
          <ul>
            <li>Basics of harmonium: scale, keys, and hand coordination</li>
            <li>Swaras (notes), alankars (patterns), and ragas</li>
            <li>Accompaniment for bhajans, ghazals, and classical vocals</li>
            <li>Accompaniment and solo playing skills</li>
            <li>Improvisation and ear training</li>
            <li>Notation reading and composition basics</li>
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

export default Harmonium
