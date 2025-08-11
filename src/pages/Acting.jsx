import './Navbar.css'
import './acting.css'
import logo2 from '../assets/logo3.jpg';

const Acting = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Acting</p>
      </div>
      <div>
      {/* Banner */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2nbtqm/ActingBanner.jpg"
          alt="Acting Banner"
        />
      </div>

      {/* Content */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Acting Lessons in Pune?</h2>
          <p>
            Everyone has a story to tell — and acting helps you tell it with power, confidence, and
            emotion. Whether you're a beginner or looking to refine your craft, Symphony Music &
            Arts offers a dynamic acting program designed to bring out the performer in you.
            Through voice training, body movement, improvisation, script work, and character
            development, you’ll gain the tools to express yourself on stage or screen with
            authenticity and skill.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Acting at Symphony Music & Arts?</h2>
          <ul>
            <li>Voice modulation and dialogue delivery</li>
            <li>Stage presence and body language</li>
            <li>Improvisation & spontaneity</li>
            <li>Monologues, scenes, and full scripts</li>
            <li>Confidence-building and expressive techniques</li>
            <li>Creative exploration like script writing and storytelling</li>
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

export default Acting
