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
        <Route path="/TruthWay/" element={<Main />} />
        <Route path="/TruthWay/signup" element={<Signup />} />
        <Route path="/TruthWay/login" element={<Login />} />
        <Route path="/TruthWay/donate" element={<Donate />} />
        <Route path="/TruthWay/contact" element={<Contact />} />
        <Route path="/TruthWay/freequraan" element={<FreeQuraan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
