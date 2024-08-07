import React , {useState} from "react";
import './Navbar.css';
import { MobileNav } from "./MobileNav/MobileNav";

const NavBar = () =>{
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <div className="portfolio">
                        <img src="./assets/images/portfolio2.png" alt="" />
                        <span>Freelancer</span>
                    </div>
                   

                    <ul>
                        <li>
                            <a href="#about"  className="menu-item">About Me</a>
                        </li>
                        <li>
                            <a href="#formations"  className="menu-item">Formations</a>
                        </li>
                        <li>
                            <a href="#skills" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="menu-item">Porfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="menu-item">Contact Me</a>
                        </li>

                        <a href="./assets/ibrahdiarra-cv.pdf" className="contact-btn" target="_blank">
                             Download CV
                        </a>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    ); 
};

export default NavBar