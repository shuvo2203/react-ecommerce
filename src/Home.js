import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeaturedProducts from './components/FeaturedProducts'

const Home = () => {

  const data={
     name:'Eshop'
  }
  return (
    <>
        <div>
          <HeroSection data={data}/>
          <FeaturedProducts />
          <Services />
          <Trusted />
        </div>
    </>
  )
}

export default Home