import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({data}) => {

    const {name} = data;

  return (
    <>
        <div className='container py-5'>
            <div className='row py-5'>
                <div className='col-md-4 mx-auto'>
                    <p>Welcome to</p>
                    <h1>{name}</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random
                     text. It has roots in a piece of classical Latin literature 
                     from 45 BC, making it over 2000 years old.</p>
                     <button className='shop'>
                        <NavLink to='/products'>Shop Now</NavLink>
                     </button>
                </div>
                <div className='col-md-4 mx-auto'>
                    <div className='shop-img'>
                        <div className='shop-bg'></div>
                        <img className='shop-image' src='images/shop.jpg' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection
