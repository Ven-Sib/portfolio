import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Importing the CSS file for global styles

function App() {
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBgPosition(window.scrollY * 0.5); // Adjust scrolling speed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div
        className="flex flex-col min-h-screen text-gray-900"
        style={{
          backgroundImage: "url('/job.jpg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: `center ${bgPosition}px`,
          transition: 'background-position 0.1s ease-out',
        }}
      >
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl">Home</Link>
            <div className="flex space-x-6">
              <Link to="/about" className="text-white">About</Link>
              <Link to="/projects" className="text-white">Projects</Link>
              <Link to="/contact" className="text-white">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-8">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
