import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Abouts from '../components/Abouts'

function About() {
  return (
    <>
     <Navbar/>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-10 min-h-screen'>
     <Abouts/>
     </div>
     <Footer/>
    </>
  )
}

export default About