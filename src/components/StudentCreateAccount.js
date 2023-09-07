import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/studentcreateaccount.css';


function StudentCreateAccount() {
    const [name, setName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="sca-container">
            <div className="sca-form">
                <header className="sca-header">Signup</header>
                <form id="studentSignupForm" onSubmit={handleSubmit}>
                    <div className="sca-field">
                        <input type="text" placeholder="Name" className="sca-input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <input type="text" placeholder="Student Number" className="sca-input" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <input type="tel" placeholder="Phone Number" className="sca-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <input type="email" placeholder="Email" className="sca-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <input type="password" placeholder="Create password" className="sca-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <input type="password" placeholder="Confirm password" className="sca-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="sca-field">
                        <button type="submit" className="sca-button">Signup</button>
                    </div>
                </form>
                <div className="sca-form-link">
                    <span>Already have an account? <a href="#" onClick={() => navigate('/studentlogin')} className="sca-link">Login</a></span>
                </div>
            </div>
        </div>
    );
}

export default StudentCreateAccount;
