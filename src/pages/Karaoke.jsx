import './Navbar.css'
import './karaoke.css'
import logo2 from '../assets/logo3.jpg';

const Karaoke = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Karaoke</p>
      </div>
      <div>
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2z2hca/karaokebnner.jpg"
          alt="Karaoke Banner"
        />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Karaoke Lessons in Pune?</h2>
          <p>
            Sing your heart out and build your confidence with Karaoke Singing Classes at Symphony Music & Arts! Whether you're a bathroom singer, a party star, or someone who dreams of the stage, karaoke singing is the perfect way to enjoy music, improve your voice, and have loads of fun — no pressure, just passion!
            With the guidance of our friendly instructors, you’ll learn how to sing along with backing tracks, use a microphone, and perform like a pro — all while singing your favorite songs!
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Karaoke at Symphony Music & Arts?</h2>
          <ul>
            <li>Vocal warm-ups and pitch control</li>
            <li>Breathing techniques for better stamina</li>
            <li>Microphone handling and performance tips</li>
            <li>Confidence-building through live karaoke practice</li>
            <li>Song selection and stage presence</li>
            <li>Solo and group karaoke sessions</li>
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

export default Karaoke
