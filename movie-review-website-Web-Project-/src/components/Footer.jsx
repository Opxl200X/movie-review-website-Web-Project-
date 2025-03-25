import React from "react";
import './styles/Footer.css'

function Footer() {
    return (
        <footer className="footer-web">
            <img src="#" alt=""  className="Logo"/>
            <div className="footer-message">
                <h3>Hi, Team dev</h3>
                <p>
                    Thank a lot for visiting our website.<br />
                    It's our first time building a website<br />
                    so if you have any problems or<br />
                    suggestions, please contact us.
                </p>
                <button className="contact-btn">Contact us!</button>
            </div>

            <div className="footer-social">
                <h3>Follow us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="https://www.youtube.com/@ChowderandFriendThailand">YouTube</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
