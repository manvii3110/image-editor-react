import React from 'react';
import { Home } from './Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CropImage } from './CropImage';

function App() {
 
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cropImage" element={<CropImage />} /> 
      </Routes>
      </Router>
    </div>
  )
}

export default App;