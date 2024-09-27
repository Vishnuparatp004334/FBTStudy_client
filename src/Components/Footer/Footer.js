import React, { useState, useEffect } from 'react';
import Footerimg from "../../assets/footer/footer_logo.png"
import './footer.css'; // Make sure to include the CSS file
import Bell from "../../assets/footer/Group.png"
const Footer = ({ onSubscribe, resetEmail, setResetEmail }) => {
    const [email, setEmail] = useState('');


    useEffect(() => {
        if (resetEmail) {
            setEmail('');
            setResetEmail(false);
        }
    }, [resetEmail, setResetEmail]);
    const handleSubscribeClick = () => {
        if (email.trim() !== '') {
            onSubscribe(email);
        } else {
            alert('Please enter a valid email.');
        }
    };
    return (
        <footer className="footer-container">
            <div className="footer-logo-section">
                <img src={Footerimg} alt="Company Logo" className="footer-logo" />
                <p className="footer-text">Are You Planning to Study in Abroad?</p>
                <p className="footer-subtext">The perfect place to build a new future...</p>
                <div className="footer-subscription">
                    <input
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                        className="footer-input"
                    />
                    <select className="footer-select">
                        <option>Choose Your Study Abroad Location</option>
                    </select>
                    <button className="footer-subscribe-btn" onClick={handleSubscribeClick}>
                        SUBSCRIBE NOW <img src={Bell} alt='Bell' />
                    </button>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h3 className="footer-heading">Study Destinations</h3>
                    <ul>
                        <li>UK</li>
                        <li>USA</li>
                        <li>Canada</li>
                        <li>Australia</li>
                        <li>Germany</li>
                        <li>Ireland</li>
                        <li>New Zealand</li>
                        <li>Other</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Other Useful Links</h3>
                    <ul>
                        <li>Scholarships Abroad</li>
                        <li>Partial Scholarships in the USA</li>
                        <li>Partial Scholarships in Canada</li>
                        <li>Scholarships in Ireland</li>
                        <li>Scholarships in Australia</li>
                        <li>Scholarships in the New Zealand</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Company</h3>
                    <ul>
                        <li>Services for Students</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Home</li>
                        <li>Upcoming Events</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Legal</h3>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Payment Terms</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-social-icons">
                    {/* Add social media icons here */}
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <div className="footer-contact">
                        <p>Call us to clear your doubts at:<br /><span className='sp'><i class="fa-solid fa-phone"> </i>  +91-9876543210</span></p>
                    </div>
                </div>

                <p className="footer-copyright">
                    Copyright © 2024 Techaag, All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
