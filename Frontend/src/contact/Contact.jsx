import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contacts from '../components/Contacts'

function Contact() {
  return (
    <>
     <Navbar/>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-10'>
     <Contacts/>
     </div>
     <Footer/>
    </>
  )
}

export default Contact