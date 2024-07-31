import React from 'react';
import "./MobileNav.css";

export const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <div className="portfolio">
                    <img src="./assets/images/portfolio2.png" alt="" />
                    <span>MyPortfolio</span>
                </div>

                <ul>
                    <li>
                        <span className="menu-item">About Me</span>
                    </li>
                    <li>
                        <span className="menu-item">Skills</span>
                    </li>
                    <li>
                        <span className="menu-item">Formations</span>
                    </li>
                    <li>
                        <span className="menu-item">Contact Me</span>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Télécharger CV
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}
