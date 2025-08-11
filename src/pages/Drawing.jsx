import './Navbar.css'
import './drawing.css'
import logo2 from '../assets/logo3.jpg';

const Drawing = () => {
    const reg = () => {
    window.location.href = "./register";
  };
  return (
    <div>
      <div className="belownav">
        <img className="logo2" src={logo2} alt="Logo" />
        <p className="title" style={{position:"relative",right:"-150px"}}>Drawing</p>
      </div>
      <div>
      {/* Banner */}
      <div className="banner">
        <img
          src="https://uploads.onecompiler.io/43r2h32z6/43r2z2hca/drawingBanner.jpg"
          alt="Drawing Banner"
        />
      </div>

      {/* Content */}
      <main className="content">
        <section className="intro">
          <h2>Looking for Drawing Lessons in Pune?</h2>
          <p>
            Unleash your creativity and bring your imagination to life on paper with Drawing
            Classes at Symphony Music & Arts! Whether you're a beginner or looking to refine your
            skills, our program is designed to nurture artistic expression, develop technique, and
            build confidence in every student. Our expert instructors guide learners of all ages
            through a fun, structured curriculum — from basic lines and shapes to detailed sketches
            and creative compositions.
          </p>
        </section>

        <section className="program">
          <h2>Why to learn Drawing at Symphony Music & Arts?</h2>
          <ul>
            <li>Basic drawing techniques & shapes</li>
            <li>Shading, textures, and line work</li>
            <li>Still life, nature, and object drawing</li>
            <li>Cartooning, character design & creative art</li>
            <li>Use of pencil, charcoal, pen, and ink</li>
            <li>Portfolio-building and personal style development</li>
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

export default Drawing
