import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Adminlogin from './components/Adminlogin';
import AdminCreateAccount from './components/AdminCreateAccount';
import Studentlogin from './components/Studentlogin';
import StudentCreateAccount from './components/StudentCreateAccount';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/admincreateaccount" element={<AdminCreateAccount />} />
          <Route path="/studentlogin" element={<Studentlogin/>} />
          <Route path="/studentcreateaccount" element={<StudentCreateAccount/>} />
        </Routes>
  </Router>
  );
}
export default App;
