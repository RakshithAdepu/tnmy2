
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Testimonials from "./components/Testimonals/Testinonals"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path ="/testimonials"  element={<Testimonials />}/>
       <Route path ="/services"  element={<Services />}/>
       <Route path ="/contact"  element={<Contact />}/>
 
      </Routes>
    </Router>
  );
}

export default App;
