import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';

import logo from '../../images/logo.jpeg';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  {/*
                        <img src={logo} alt="joaklogo" height="25px" />
                  */}
                <NavLogo to='/' onClick={toggleHome}>Juan Of A Kind</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="catering"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Catering</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="store">Store</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/placeorder">Place Order</NavBtnLink>
                </NavBtn>
              </NavbarContainer>       
            </Nav>
        </>
    )
}

export default Navbar;