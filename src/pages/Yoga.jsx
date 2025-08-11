import './Navbar.css'
import './yoga.css'
import logo2 from '../assets/logo3.jpg';

const Yoga = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Yoga</p>
      </div>
       <div>
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2z2hca/yogabanner.jpg"
          alt="Yoga Banner"
        />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Yoga Lessons in Pune?</h2>
          <p>
            Find your balance — mind, body, and soul — with Yoga at Symphony Music & Arts.
            Whether you're a beginner or looking to deepen your practice, our yoga sessions offer
            a peaceful and supportive environment to help you build strength, flexibility, and inner calm.
            Guided by certified instructors, our classes blend traditional practices with modern wellness
            techniques, making yoga accessible and enjoyable for all ages.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn yoga at Symphony Music & Arts?</h2>
          <ul>
            <li>Traditional Hatha & Vinyasa Yoga</li>
            <li>Pranayama (breathing techniques)</li>
            <li>Guided meditation & mindfulness</li>
            <li>Flexibility, strength & posture improvement</li>
            <li>Stress relief & relaxation methods</li>
            <li>Personalized support and progress tracking</li>
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

export default Yoga
