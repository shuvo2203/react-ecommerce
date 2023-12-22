import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data={
    name:'Eshop About'
  }

  return (
    <>
        <div>
          <HeroSection data={data} />
        </div>
    </>
  )
}

export default About