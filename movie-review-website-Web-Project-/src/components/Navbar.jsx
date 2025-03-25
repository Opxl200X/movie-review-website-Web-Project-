// client/src/components/Navbar.js
import React, { useState } from 'react';
import './styles/Navbar.css';
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';


function Navbar({ isLoggedIn, onLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ฟังก์ชันสำหรับเปิด/ปิดเมนู
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
     
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src="path_to_logo" alt="Logo" className="logo-image" /></Link>  
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
                <button className="search-button">
                    <FaSearch />
                </button>
            </div>
            <div className="navbar-links">
                <button className="menu-button" onClick={toggleMenu}>
                    <FaBars />
                    <span>MENU</span>
                    
                </button>
                {isMenuOpen && (
                <div className="dropdown-menu">
                  <Link to="/">HOME</Link>
                  <Link to="/Category">Category</Link>

                  {/* เพิ่มลิงก์เมนูที่ต้องการ */}
                </div>
                )}
                {!isLoggedIn ? (
                    // หากไม่ได้ล็อกอิน จะแสดงปุ่ม Sign In
                    <button className="navbar-icon">
                        <Link to="/login">Sign In</Link>
                    </button>
                 ) : (
                <>
                  {/* หากล็อกอินแล้ว จะแสดงปุ่ม Profile */}
                  <button className="navbar-icon">
                    <Link to="/profile">
                      <FaUser /> Profile
                    </Link>
                  </button>
                  {/* ปุ่ม Logout */}
                  <button onClick={onLogout}>Logout</button>
                </>
                )}
            </div>
        </nav>
        
    );
}

export default Navbar;
