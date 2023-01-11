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
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/freequraan" element={<FreeQuraan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
