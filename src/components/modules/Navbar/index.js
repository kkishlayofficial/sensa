import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../../images/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import "./index.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className='header'>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products?category=All' onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/#categories'
              spy={true}
              smooth={true}
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Categories
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/#about'
              spy={true}
              smooth={true}
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/#reviews'
              spy={true}
              smooth={true}
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
