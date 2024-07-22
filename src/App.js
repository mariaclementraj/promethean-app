import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './router/home';
import Services from './router/services';
import Careers from './router/careers';
import About from './router/about';
import Contact from './router/contact';

function App() {
  return (
  <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
