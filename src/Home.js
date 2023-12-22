import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {

  const data={
     name:'Eshop'
  }
  return (
    <>
        <div>
          <HeroSection data={data}/>
        </div>
    </>
  )
}

export default Home