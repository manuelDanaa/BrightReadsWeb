import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../assets/studentlogin.css';

function StudentLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();  
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevVisibility => !prevVisibility);
    };

    const handleSignupClick = () => {
        navigate("/studentcreateaccount");   
    };

    return (
        <section className="studentlogin-container studentlogin-forms" id="loginSection">
            <div className="studentlogin-form studentlogin-login">
                <div className="studentlogin-form-content">
                    <form id="loginForm" onSubmit={handleLoginSubmit}>
                        <header className="form-stdhd">Login</header>
                        <div className="studentlogin-field studentlogin-input-field">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="studentlogin-input" 
                                id="emailInput" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="studentlogin-field studentlogin-input-field">
                            <input 
                                type={passwordVisible ? "text" : "password"} 
                                placeholder="Password" 
                                className="studentlogin-password" 
                                id="passwordInput" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i 
                                className={`studentlogin-bx ${passwordVisible ? 'studentlogin-bx-show' : 'studentlogin-bx-hide'} studentlogin-eye-icon`} 
                                id="passwordToggle" 
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                        <div className="studentlogin-form-link">
                            <a href="#" className="studentlogin-forgot-pass">Forgot password?</a>
                        </div>
                        <div className="studentlogin-field studentlogin-button-field">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className="studentlogin-form-link">
                        <span>Don't have an account? <a id="signupToggle" className="studentlogin-link studentlogin-signup-link" onClick={handleSignupClick}>Signup</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentLogin;
