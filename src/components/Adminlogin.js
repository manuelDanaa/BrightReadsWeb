import React, { useState } from 'react';
import '../assets/adminlogin.css';
import { useNavigate } from 'react-router-dom';  

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();  
    const handleLogin = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');

    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignupClick = () => {
        navigate("/admincreateaccount");  
    };

    return (
        <section className="adminlogin-container adminlogin-forms" id="loginSection">
            <div className="adminlogin-form adminlogin-login">
                <div className="adminlogin-form-content">
                    <form id="loginForm" onSubmit={handleLogin}>
                        <header className="form-hd">Login</header>
                        <div className="adminlogin-field adminlogin-input-field">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="adminlogin-input" 
                                id="emailInput"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="adminlogin-field adminlogin-input-field">
                            <input 
                                type={passwordVisible ? 'text' : 'password'} 
                                placeholder="Password" 
                                className="adminlogin-password" 
                                id="passwordInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i 
                                className={`adminlogin-bx ${passwordVisible ? 'adminlogin-bx-show' : 'adminlogin-bx-hide'} adminlogin-eye-icon`} 
                                id="passwordToggle" 
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                        <div className="adminlogin-form-link">
                            <a href="#" className="adminlogin-forgot-pass">Forgot password?</a>
                        </div>
                        <div className="adminlogin-field adminlogin-button-field">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className="adminlogin-form-link">
                        <span>Don't have an account? <a id="signupToggle" className="adminlogin-link adminlogin-signup-link" onClick={handleSignupClick}>Signup</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;

