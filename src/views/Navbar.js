import { useState } from "react";
import yellow_logo from "../img/yellow_logo.png";
import { Link } from "react-scroll";


const Navbar = () => {
    
    const [ click, setClick ] = useState(false);
    const closeMobileMenu = () => setClick(false);
    
    
    
    
    const handleClick = () => {
        // console.log("Hello")
        // if(!menuOpen) {
        //     menuBtn.classList.add("open")
        //     menuOpen = true;
        // } else {
        //     menuBtn.classList.remove("open");
        //     menuOpen = false;
        // }
        
        setClick(!click);
    }
    
    
    
    return (


        <>
            <nav className="navbar">
                <div className="navbar-leftside">
                    <img className="navbar-logo" src={yellow_logo} alt="Mexi Chips Logo"  />
                </div>
                {/* <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> */}
                <div 
                    className={click ? "menu-btn open" : "menu-btn"}
                    onClick={handleClick}
                    >
                    <div className="menu-btn_burger"></div>
                </div>

                <div className="navbar-rightside">
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                className="nav-links"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={closeMobileMenu}
                            >ABOUT</Link></li>
                        <li className='nav-item'>
                            <Link
                                className="nav-links"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={closeMobileMenu}
                            >MENU</Link></li>
                        <li className='nav-item'>
                            <Link
                                className="nav-links"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={closeMobileMenu}
                            >GALLERY</Link></li>
                        <li className='nav-item'>
                            <Link
                                className="nav-links"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={closeMobileMenu}
                            >CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    ) 



}
export default Navbar;