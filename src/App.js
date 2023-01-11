import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Signup from "./components/Signup";
import Login from './components/Login'
import Navbar from './components/Navbar'
import Donate from './components/Donate';
import Contact from './components/Contact';
import FreeQuraan from './components/FreeQuraan';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freequraan" element={<FreeQuraan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
