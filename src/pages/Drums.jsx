import './Navbar.css'
import './drums.css'
import logo2 from '../assets/logo3.jpg';

const Drums = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Drumset</p>
      </div>
       <div>
      {/* Banner Image */}
      <div className="banner">
        <img src="https://uploads.onecompiler.io/43r2h32z6/3wx7252uq/DrumsPage.jpg" alt="Drumset Banner" />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Drums class in Pune?</h2>
          <p>
            Unleash your inner rhythm with Drumset Classes at Symphony Music & Arts! Whether you’re just
            starting out or ready to take your drumming to the next level, our program offers expert
            guidance to help you master beats, fills, and grooves on the full drum kit.
            From basics like stick control and timing to advanced techniques and soloing, you’ll learn
            everything to rock any stage or jam session.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Drums at Symphony Music & Arts?</h2>
          <ul>
            <li>Proper drum kit setup and posture</li>
            <li>Stick techniques and hand-foot coordination</li>
            <li>Basic to advanced beats in rock, pop, jazz, funk, and more</li>
            <li>Reading drum notation and rhythm exercises</li>
            <li>Improvisation and solo development</li>
            <li>Playing with a band and live performance skills</li>
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

export default Drums
