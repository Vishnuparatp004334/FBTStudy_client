import React from 'react'
import Section1 from './Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import "./home.css"
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'

const Home = () => {
  return (
    <div className='homesection'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
    </div>
  )
}

export default Home
