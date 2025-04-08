import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navbar - removed container class which might be limiting width */}
        <nav>
          <div className="container">
            <Link to="/" className="text-white text-2xl">Home</Link>
            <div className="flex space-x-6">
              <Link to="/about" className="text-white">About</Link>
              <Link to="/projects" className="text-white">Projects</Link>
              <Link to="/contact" className="text-white">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-grow container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer - removed classes that might be limiting width */}
        <footer>
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;