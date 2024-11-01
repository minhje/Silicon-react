import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Slider from '../Components/Slider'
import Features2 from '../Components/Features2'
import Testimonials from '../Components/Testimonials'
import Faq from '../Components/Faq'
import Subscribe from '../Components/Subscribe'

const Home = () => {
  return (
    <>
        <Hero />
        <Features />
        <Slider />
        <Features2 />
        <Testimonials />
        <Faq />
        <Subscribe />
    </>

  )
}

export default Home