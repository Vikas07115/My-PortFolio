import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
