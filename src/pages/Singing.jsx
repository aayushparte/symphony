import './Navbar.css'
import './singing.css'
import logo2 from '../assets/logo3.jpg';

const Singing = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Singing</p>
      </div>
       <div>
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2m5rhg/singingBanner.jpg"
          alt="Singing Banner"
        />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Singing Lessons in Pune?</h2>
          <p>
            The great thing about learning this instrument is that we all have one – our voice!
            No purchase necessary and you have it with you, always! Sound is created with our vocal
            chords by air traveling over the vocal folds. After learning how to properly support
            airflow and how to use your resonator (mouth and sinus cavity) you’ll be singing like a
            professional!
          </p>
          <p>
            At Symphony Music & Arts we will teach you how to stand, breath and sing to make the
            most out of the voice you got! Exercises, songs, performance techniques and creative
            work (like song writing) are all covered in this exciting course.
          </p>
        </section>

        <section className="why-learn">
          <h2>Why to learn singing at Symphony Music & Arts?</h2>
          <ul>
            <li>Highly qualified Singing teachers</li>
            <li>Exams & certifications</li>
            <li>Availability of free trial class</li>
            <li>Students Band & Students concerts</li>
            <li>Flexible cancellation & freezing</li>
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

export default Singing
