import React, { useState } from 'react'
import './NavBar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import Logo from '../../assets/nike_logo-removebg-preview.png'


const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className='Nav_div'>
                <nav className='navbar'>

                    <img src={Logo} alt="" className='logo' />
                    <div className='nav_menu'>
                        <ul className='nav_lists'>
                            <li className='nav_text'>MEN</li>
                            <li className='nav_text'>WOMEN</li>
                            <li className='nav_text'>KIDS</li>
                            <li className='nav_text'>CUSTOMIZE</li>
                            <li className='nav_text'>FAVOURIATE</li>
                        </ul>
                    </div>
                    <div className='btn_div'>

                    </div>


                    <div className='mobile_size'>
                        <img onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt="" width={40} />

                        <div className={` ${toggle ? 'flex' : 'hidden'} nav_mobile_menu`} >
                            <ul className='nav_lists_mobile'>
                                <li className='nav_text'>MEN</li>
                                <li className='nav_text'>WOMEN</li>
                                <li className='nav_text'>KIDS</li>
                                <li className='nav_text'>CUSTOMIZE</li>
                                <li className='nav_text'>FAVOURIATE</li>
                            </ul>
                            <div className='btn_div_mobile'>

                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar