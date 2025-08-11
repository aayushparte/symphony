import './Navbar.css'
import './guitar.css'
import logo2 from '../assets/logo3.jpg';

const Guitar = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Guitar</p>
      </div>
       <div>
      {/* Banner Image */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/GitarPage.jpg" alt="Guitar Banner" />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Guitar class in Pune?</h2>
          <p>
            Strum your way into the world of music with Guitar Classes at Symphony Music & Arts!
            Whether you’re a total beginner, a casual hobbyist, or an aspiring performer, our guitar
            program is designed to help you learn, play, and enjoy music in a fun and structured way.
            From chords and strumming to solos and songs, our expert instructors make learning guitar
            easy and exciting — for all ages!
          </p>
        </section>

        <section className="program">
          <h2>Why learn Guitar at Symphony Music & Arts?</h2>
          <ul>
            <li>Basic to advanced chords and scales</li>
            <li>Strumming patterns & fingerpicking techniques</li>
            <li>Song-playing (English, Hindi & instrumental)</li>
            <li>Music theory, ear training, and improvisation</li>
            <li>Improvisation and ear training</li>
            <li>Performance skills & stage confidence</li>
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

export default Guitar
