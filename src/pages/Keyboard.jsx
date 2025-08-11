import './Navbar.css'
import './keyboard.css'
import logo2 from '../assets/logo3.jpg';

const Keyboard = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Keyboard</p>
      </div>
      <div>
      {/* Banner Image */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/keyboardPage.jpg" alt="Keyboard Banner" />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Keyboard class in Pune?</h2>
          <p>
            Discover the magic of music with Keyboard Classes at Symphony Music & Arts! Whether you’re a beginner eager to learn your first notes or an advanced player aiming to master complex pieces, our keyboard program offers comprehensive training tailored to your pace and interests.
            From classical to contemporary styles, our skilled instructors will guide you through technique, theory, and performance skills to help you play with confidence and joy.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Keyboard at Symphony Music & Arts?</h2>
          <ul>
            <li>Basic to advanced keyboard techniques</li>
            <li>Music theory, scales, and chord progressions</li>
            <li>Playing songs across genres — classical, pop, rock, and more</li>
            <li>Sight reading and ear training</li>
            <li>Improvisation and composition basics</li>
            <li>Performance and stage confidence</li>
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

export default Keyboard
