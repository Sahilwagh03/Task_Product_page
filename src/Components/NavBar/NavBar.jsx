import React, { useState, useEffect } from 'react';
import './NavBar.css';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import Logo from '../../assets/nike_logo-removebg-preview.png';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = scrollTop > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Nav_div ${scrolled ? 'scrolled' : ''}`}>
        <nav className={`navbar ${scrolled ? 'bg-white' : ''}`}>
          <img src={Logo} alt='' className='logo' />
          <div className='nav_menu'>
            <ul className='nav_lists'>
              <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>MEN</li>
              <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>WOMEN</li>
              <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>KIDS</li>
              <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>CUSTOMIZE</li>
              <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>FAVOURIATE</li>
            </ul>
          </div>
          <div className='btn_div'></div>
          <div className='mobile_size'>
            <img
              onClick={() => setToggle(!toggle)}
              src={toggle ? close : menu}
              alt=''
              width={40}
            />
            <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`}>
              <ul className='nav_lists_mobile'>
                <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>MEN</li>
                <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>WOMEN</li>
                <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>KIDS</li>
                <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>CUSTOMIZE</li>
                <li className={`nav_text ${scrolled ? 'text-black' : 'text-white'}`}>FAVOURIATE</li>
              </ul>
              <div className='btn_div_mobile'></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

