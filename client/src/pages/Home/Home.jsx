import React from 'react'
import  HeroSection  from '../../components/LandingPage/HeroSection'
import  Features   from '../../components/LandingPage/Features'
import  Section2   from '../../components/LandingPage/Section2'
import  Section3   from '../../components/LandingPage/Section3'
import Section4   from '../../components/LandingPage/Section4'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Features />
      <Section2 />
      <Section3 />
      <Section4 />
      
    </>
  )
}

export default Home