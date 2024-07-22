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
                            Hire Me
                        </button>
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