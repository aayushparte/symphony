import { Routes,Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Musicalinstruments from './Musicalinstruments';
import Contactus from './Contactus';
import Loginpage from './Loginpage';
import Student from './Student';
import Admin from './Admin';
import Registration from './Registration';
import Singing from './Singing';
import Acting from './Acting';
import Zumba from './Zumba';
import Drawing from './Drawing';
import Dancing from './Dancing';
import Karaoke from './Karaoke';
import Yoga from './Yoga';
import Rangoli from './Rangoli';
import Harmonium from './Harmonium';
import Guitar from './Guitar';
import Tabla from './Tabla';
import Dholaki from './Dholaki';
import Drums from './Drums';
import Keyboard from './Keyboard';
import Admindashboard from './Admindashboard'
import Studentdashboard from './Studentdashboard';

const Main = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<Aboutus />} />
       <Route path="/services" element={<Services />} />
       <Route path="/instruments" element={<Musicalinstruments />} />
       <Route path="/contact" element={<Contactus />} />
       <Route path="/login" element={<Loginpage />} />
       <Route path="/studentlogin" element={<Student />} />
       <Route path="/adminlogin" element={<Admin />} />
       <Route path="/register" element={<Registration />} />
       <Route path="/singing" element={<Singing />} />
       <Route path="/acting" element={<Acting />} />
       <Route path="/zumba" element={<Zumba />} />
       <Route path="/drawing" element={<Drawing />} />
       <Route path="/dancing" element={<Dancing />} />
       <Route path="/karaoke" element={<Karaoke />} />
       <Route path="/yoga" element={<Yoga />} />
       <Route path="/rangoli" element={<Rangoli />} />
       <Route path="/harmonium" element={<Harmonium />} />
       <Route path="/guitar" element={<Guitar />} />
       <Route path="/tabla" element={<Tabla />} />
       <Route path="/dholaki" element={<Dholaki />} />
       <Route path="/drums" element={<Drums />} />
       <Route path="/keyboard" element={<Keyboard />} />
       <Route path="/admindashboard" element={<Admindashboard />} />
       <Route path="/studentdashboard" element={<Studentdashboard />} />
          

       <Route path="*" element={<Navigate to="/" replace />} /> 
       
     </Routes>
    </div>
  )
}

export default Main
