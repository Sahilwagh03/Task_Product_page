import React from 'react'
import './Hero.css'
import Hero_img from '../../assets/Hero_img.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <div className="Hero_container">
                <div className="Hero_main">
                    <motion.div className='heading_div'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className='Hero_heading_flex'>
                            <h1>JUST
                                <br />DO
                                <br /> IT</h1>
                            <p>Innovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most.
                            </p>
                            <button className='btn_shop'>Shop Now</button>
                        </div>
                    </motion.div>
                    <motion.div className="Hero_img"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <motion.div className='shoe_name'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        >
                            <p>NikeCourt Zoom
                                <br />  Vapor Cage 4 Rafa</p>
                        </motion.div>
                        <img src={Hero_img} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Hero