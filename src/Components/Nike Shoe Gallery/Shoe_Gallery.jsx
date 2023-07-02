import React from 'react'
import './Shoe_Gallery.css'
import {motion} from 'framer-motion'
import Nike_1 from '../../assets/Nike_1.png'
import Nike_2 from '../../assets/Nike_2.png'

const Shoe_Gallery = () => {
    return (
        <>
            <section className='Gallery_section'>
            <h1 className='Shoe_heading'>Popular Shoes</h1>
                <motion.div className="main-container"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5 }}>
                    <div className="shoe-container">
                        <img src={Nike_1} alt="Nike Shoe 1" />
                        <span className="shoe-name">rafa-hard-court</span>
                    </div>
                    <div className="shoe-container">
                        <img src={Nike_2} alt="Nike Shoe 2" />
                        <span className="shoe-name">pro-hard-court</span>
                    </div>
                    <div className="shoe-container">
                        <img src={Nike_2} alt="Nike Shoe 3" />
                        <span className="shoe-name">Vapor Cage 4 Rafa</span>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Shoe_Gallery