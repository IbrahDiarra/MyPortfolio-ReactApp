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