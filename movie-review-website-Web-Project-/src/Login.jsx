// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // ตรวจสอบการล็อกอินที่นี่ หรือส่งข้อมูลไปที่ API
        console.log('Logging in with:', email, password, rememberMe);
        // หากล็อกอินสำเร็จ
        onLogin();
        navigate('/'); // ไปที่หน้า Profile เมื่อเข้าสู่ระบบสำเร็จ
    };

    const handleClose = () => {
        // Close the login modal  
        navigate('/');
    };


    return (
        <div className="login-container">
            <div className="login-box">
                <botton className="close-button" onClick={handleClose}>
                    ✖
                </botton>
                <div className="login-form">
                    <h2>Sign in</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <div className="remember-me">
                            <input 
                                type="checkbox" 
                                checked={rememberMe} 
                                onChange={() => setRememberMe(!rememberMe)} 
                            />
                            <label>Remember me</label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <p>If you don't have an account, <a href="/register">Register here!</a></p>
                    <p><a href="/forgot-password">Forgot Password?</a></p>

                    
                </div>
                <div className="login-image">
                    <img src="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
