import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import logo from '../../../images/logo.png'

import './index.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<RxCross1 size={30} />)
                        : (<RxHamburgerMenu size={30}/>)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/products' onClick={closeMenu}>Products</a>
                    </li>
                    <li className='nav-item'>
                        <Link to='categories' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Categories</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar