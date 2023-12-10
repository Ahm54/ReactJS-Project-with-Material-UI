import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import OtizmNedir from './components/OtizmNedir';
import Programs from './components/Programs';
import EduKadro from './components/EduKadro';
import Galeri from './components/Galeri';
import Contact from './components/Contact';
import Wellness from './components/Wellness';
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/OtizmNedir' element={<OtizmNedir />} />
        <Route path='/Programs' element={<Programs />} />
        <Route path='/EduKadro' element={<EduKadro />} />
        <Route path='/Galeri' element={<Galeri />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Wellness' element={<Wellness />} />
      </Routes>
    </div>
  );
}

export default App;
