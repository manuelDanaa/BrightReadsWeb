import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/home.css';

function Home() {
    const navigate = useNavigate();

    function goToLoginPage(role) {
        if (role === 'admin') {
          navigate("/adminlogin");
        } else if (role === 'student') {
          navigate("/studentlogin");
        }
      }

    return (
        <div className="home-container">
            <div className="home-card">  
                <h2>Bright Read</h2>
                <button onClick={() => goToLoginPage('admin')}>Admin</button> 
                <button onClick={() => goToLoginPage('student')}>Student</button>
            </div>
        </div>
    );
}

export default Home;
