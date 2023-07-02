import React from 'react'
import './Featured.css'
import Featured_img from '../../assets/Feature_img.png'
const Featured = () => {
  return (
    <>
    <section className='Featured_section'>
        <div className="featured_main">
            <p className='feature_heading'>Featured</p>
            <div className="featured_container">
                <img src={Featured_img} alt="" />
                <h2>STEP INTO WHAT FEEL GOOD</h2>
                <button className='btn_find'>FIND YOUR SHOE</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Featured