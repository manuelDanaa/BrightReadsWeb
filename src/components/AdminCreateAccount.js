import React, { useState } from 'react';
import '../assets/admincreateaccount.css';
import { useNavigate } from 'react-router-dom';

function AdminCreateAccount() {
    const [name, setName] = useState('');
    const [adminNumber, setAdminNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();  // Corrected this line

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // TODO: Signup Logic Here
        // Make sure to check if password and confirmPassword match before proceeding.
    };

    return (
        <div className="aca-container">
            <div className="aca-form">
                <header className="aca-header">Signup</header>
                <form id="adminSignupForm" onSubmit={handleSubmit}>
                    <div className="aca-field">
                        <input type="text" placeholder="Name" className="aca-input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <input type="text" placeholder="Admin Number" className="aca-input" value={adminNumber} onChange={(e) => setAdminNumber(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <input type="tel" placeholder="Phone Number" className="aca-input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <input type="email" placeholder="Email" className="aca-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <input type="password" placeholder="Create password" className="aca-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <input type="password" placeholder="Confirm password" className="aca-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="aca-field">
                        <button type="submit" className="aca-button">Signup</button>
                    </div>
                </form>
                <div className="aca-form-link">
                    <span>Already have an account? <a href="#" onClick={() => navigate('/adminlogin')} className="aca-link">Login</a></span> {/* Updated this line */}
                </div>
            </div>
        </div>
    );
}

export default AdminCreateAccount;
