import React from 'react';
import "./MobileNav.css";

export const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <span>MyPortfolio</span>

                <ul>
                    <li>
                        <span className="menu-item">Home</span>
                    </li>
                    <li>
                        <span className="menu-item">Skills</span>
                    </li>
                    <li>
                        <span className="menu-item">Work Experience</span>
                    </li>
                    <li>
                        <span className="menu-item">Contact Me</span>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}
