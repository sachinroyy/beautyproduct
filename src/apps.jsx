import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
 import About from './about';
 import Service from './service';
 


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
      </Routes>
    </Router>
  );
};

export default App;
