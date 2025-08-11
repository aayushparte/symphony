import './Navbar.css'
import './rangoli.css'
import logo2 from '../assets/logo3.jpg';

const Rangoli = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Rangoli</p>
      </div>
      <div>
      {/* Banner Image */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2z2hca/rangolibanner.jpg"
          alt="Rangoli Banner"
        />
      </div>

      {/* Content Section */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Rangoli Lessons in Pune?</h2>
          <p>
            Celebrate tradition, creativity, and color with Rangoli Classes at Symphony Music & Arts!
            Rangoli is more than just decoration — it’s an expression of art, culture, and positivity.
            Whether you're a beginner or looking to master intricate designs, our classes are perfect
            for anyone who wants to learn this timeless Indian art form. Guided by experienced instructors,
            you'll explore both traditional and modern styles while improving your focus, patience,
            and sense of design.
          </p>
        </section>

        <section className="program">
          <h2>Why learn Rangoli at Symphony Music & Arts?</h2>
          <ul>
            <li>Basics of Rangoli patterns and symmetry</li>
            <li>Traditional Indian motifs and cultural significance</li>
            <li>Use of colors, dots, and free-hand techniques</li>
            <li>Festival-themed Rangoli (Diwali, Sankranti, Pongal & more)</li>
            <li>Creative & contemporary fusion designs</li>
            <li>Powder, flower, rice, and chalk-based Rangoli methods</li>
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

export default Rangoli
